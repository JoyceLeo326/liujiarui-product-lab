import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { access, readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

let server;
let origin;

async function sendFile(request, response) {
  const requestUrl = new URL(request.url, 'http://127.0.0.1');
  const relative = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, '') || 'index.html';
  let target = resolve(root, relative);
  if (target !== root && !target.startsWith(`${root}${sep}`)) target = null;
  try {
    if (!target || !(await stat(target)).isFile()) throw new Error('not a file');
  } catch {
    const productMatch = requestUrl.pathname.match(/^\/products\/(route|rural)\//);
    target = resolve(root, productMatch ? `products/${productMatch[1]}/index.html` : 'index.html');
  }
  const body = await readFile(target);
  response.writeHead(200, { 'Content-Type': contentTypes[extname(target)] ?? 'application/octet-stream' });
  response.end(body);
}

test.before(async () => {
  await access(resolve(root, 'products/route/index.html'));
  server = createServer((request, response) => {
    sendFile(request, response).catch(error => {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(error.message);
    });
  });
  await new Promise((resolveListen, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolveListen);
  });
  origin = `http://127.0.0.1:${server.address().port}`;
});

test.after(async () => {
  if (server) await new Promise((resolveClose, reject) => server.close(error => error ? reject(error) : resolveClose()));
});

for (const viewport of [
  { name: 'desktop-1440', width: 1440, height: 1000 },
  { name: 'mobile-390', width: 390, height: 844 }
]) {
  test(`route mirror completes the real feedback loop at ${viewport.name}`, async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', error => errors.push(error.message));
    try {
      await page.goto(`${origin}/products/route/`, { waitUntil: 'networkidle' });
      await page.locator('input[name="route-candidate"]').nth(1).check();
      await page.locator('.route-journey__confirm input[type="checkbox"]').check();
      const downloadPromise = page.waitForEvent('download');
      await page.locator('.route-journey__actions button').nth(1).click();
      assert.match((await downloadPromise).suggestedFilename(), /行程交接单\.json$/);
      await page.locator('.route-journey__feedback select').selectOption({ label: '有些赶' });
      await page.locator('.route-journey__feedback input').fill('第二站想多留二十分钟');
      await page.locator('.route-journey__feedback button[type="submit"]').click();
      await page.getByRole('button', { name: '看反馈如何改变下一轮' }).click();
      await page.locator('.route-journey__next-round').waitFor();
      assert.equal(await page.locator('input[name="route-candidate"]:checked').getAttribute('value'), 'focus');
      assert.equal(await page.locator('.route-journey__history li').count(), 1);
      const layout = await page.evaluate(() => ({
        viewport: innerWidth,
        body: document.body.scrollWidth,
        document: document.documentElement.scrollWidth,
        broken: [...document.images].filter(image => image.complete && image.naturalWidth === 0).length
      }));
      assert.ok(layout.body <= layout.viewport);
      assert.ok(layout.document <= layout.viewport);
      assert.equal(layout.broken, 0);
      assert.deepEqual(errors, []);
    } finally {
      await browser.close();
    }
  });
}
