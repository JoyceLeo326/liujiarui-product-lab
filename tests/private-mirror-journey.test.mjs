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
    const isNavigation = request.method === 'GET'
      && (request.headers.accept ?? '').includes('text/html');
    if (!productMatch || !isNavigation) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    target = resolve(root, `products/${productMatch[1]}/index.html`);
  }
  const body = await readFile(target);
  response.writeHead(200, { 'Content-Type': contentTypes[extname(target)] ?? 'application/octet-stream' });
  response.end(body);
}

test.before(async () => {
  await access(resolve(root, 'products/route/index.html'));
  await access(resolve(root, 'products/rural/index.html'));
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

for (const viewport of [
  { name: 'desktop-1440', width: 1440, height: 1000 },
  { name: 'mobile-390', width: 390, height: 844 }
]) {
  test(`rural mirror completes the teacher-owned loop at ${viewport.name}`, async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport });
    const errors = [];
    const runtimeRequests = [];
    const offOriginRequests = [];
    const failedRequests = [];
    const webSockets = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => {
      const url = new URL(request.url());
      if (url.origin !== origin) offOriginRequests.push(url.href);
      if (['fetch', 'xhr'].includes(request.resourceType()) || /(?:^|\/)api(?:\/|$)/.test(url.pathname)) {
        runtimeRequests.push(url.href);
      }
    });
    page.on('requestfailed', request => failedRequests.push(request.url()));
    page.on('websocket', socket => webSockets.push(socket.url()));
    try {
      await page.goto(`${origin}/products/rural/#/home`, { waitUntil: 'networkidle' });
      await page.evaluate(() => localStorage.clear());
      await page.reload({ waitUntil: 'networkidle' });
      await page.getByRole('heading', { name: '这节课，真正需要被看见的是哪一群孩子？' }).waitFor();
      assert.equal(await page.locator('a, button').filter({ hasText: /登录|注册/ }).count(), 0);

      await page.getByLabel('网络条件').selectOption('无网络');
      await page.getByRole('button', { name: /重新推演这节课/ }).click();
      const initialRecommendation = await page.locator('input[name="teaching-candidate"]:checked').inputValue();
      await page.getByLabel(/我已核对班情、时间和材料/).check();
      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('button', { name: '下载备课交接单' }).click();
      assert.match((await downloadPromise).suggestedFilename(), /备课交接单\.json$/);

      await page.getByLabel('这节课最明显的结果').selectOption('时间不够');
      await page.getByLabel('具体发生了什么').fill('最后两组没有完成汇报');
      await page.getByRole('button', { name: '带着结果开启下一轮' }).click();
      await page.locator('.reflow-notice[role="status"]').waitFor();
      assert.equal(await page.locator('.journey-history li').count(), 1);
      assert.notEqual(initialRecommendation, 'story-board');
      assert.equal(await page.locator('input[name="teaching-candidate"]:checked').inputValue(), 'story-board');
      await page.getByText('本轮把核心流程压缩 5 分钟，将余量留给真实汇报和教师判断。').waitFor();
      await page.getByRole('button', { name: '查看新的三条方案' }).click();
      await page.waitForFunction(() => {
        const element = document.querySelector('#candidate-title');
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= innerHeight;
      });

      const layout = await page.evaluate(() => ({
        viewport: innerWidth,
        body: document.body.scrollWidth,
        document: document.documentElement.scrollWidth,
        broken: [...document.images].filter(image => image.complete && image.naturalWidth === 0).length
      }));
      assert.ok(layout.body <= layout.viewport);
      assert.ok(layout.document <= layout.viewport);
      assert.equal(layout.broken, 0);

      for (const privatePath of ['/analysis', '/student', '/user', '/login', '/register']) {
        await page.goto(`${origin}/products/rural/#${privatePath}`, { waitUntil: 'networkidle' });
        await page.waitForURL(/#\/home$/);
      }

      assert.deepEqual(runtimeRequests, []);
      assert.deepEqual(offOriginRequests, []);
      assert.deepEqual(failedRequests, []);
      assert.deepEqual(webSockets, []);
      assert.deepEqual(errors, []);
    } finally {
      await browser.close();
    }
  });
}
