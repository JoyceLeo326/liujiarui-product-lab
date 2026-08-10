import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { buildMirrorManifest } from '../scripts/mirror-manifest.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => readFile(path.join(root, name), 'utf8');

test('portfolio starts from visitor intent and a real story path', async () => {
  const html = await read('index.html');
  assert.match(html, /data-role="recruiter"/);
  assert.match(html, /data-role="judge"/);
  assert.match(html, /data-role="user"/);
  assert.match(html, /data-role="collaborator"/);
  assert.match(html, /从问题到可验证交付/);
  assert.match(html, /data-project-grid/);
  assert.doesNotMatch(html, /零成本|无需登录|评委模式|一键载入演示/);
});

test('project catalogue is truthful, excludes YISHU, and covers every substantive repository', async () => {
  const projects = JSON.parse(await read('projects.json'));
  const slugs = projects.map((project) => project.repo);
  assert.equal(projects.length, 12);
  assert.equal(new Set(slugs).size, projects.length);
  assert.ok(!slugs.includes('translation-tech-agent-gui'));
  for (const required of [
    'meituan-mealmate-ai-demo', 'affective-computing-research', 'literature-workbench',
    'meituan-ai-route-planner', 'liujiarui-ai-manual', 'rural-teacher-assistant-deploy',
    'JianKangShouHuZhe', 'flowcut-ai-studio', 'workflow', 'zuocheng-ai-workflow',
    'yuanqi-ai-innovation-engine', 'misunderstanding-museum'
  ]) assert.ok(slugs.includes(required), `missing ${required}`);
  for (const project of projects) {
    assert.match(project.github, /^https:\/\/github\.com\/JoyceLeo326\//);
    assert.ok(project.story?.person && project.story?.conflict && project.story?.outcome);
    assert.ok(Array.isArray(project.roles) && project.roles.length > 0);
    assert.ok(['live', 'research', 'unavailable'].includes(project.status));
    if (project.status === 'live') assert.ok(project.primaryUrl, `${project.repo} needs a live primary URL`);
    if (project.status === 'unavailable') {
      assert.equal(project.primaryUrl, '');
      assert.equal(project.backupUrl, '');
    }
  }

  const byRepo = Object.fromEntries(projects.map((project) => [project.repo, project]));
  assert.equal(byRepo['rural-teacher-assistant-deploy'].primaryUrl, './products/rural/');
  assert.equal(byRepo['rural-teacher-assistant-deploy'].backupUrl, 'https://rural-teacher-assistant-amber.vercel.app/');
  assert.equal(byRepo['rural-teacher-assistant-deploy'].sourceVisibility, 'private');
  assert.equal(byRepo['rural-teacher-assistant-deploy'].sourceStatus, 'security-cleanup');
  assert.equal(byRepo['rural-teacher-assistant-deploy'].status, 'live');
  assert.equal(byRepo['meituan-ai-route-planner'].primaryUrl, './products/route/');
  assert.equal(byRepo['meituan-ai-route-planner'].backupUrl, 'https://meituan-ai-route-planner.vercel.app/');
  assert.equal(byRepo['meituan-ai-route-planner'].sourceVisibility, 'private');
  assert.equal(byRepo['meituan-ai-route-planner'].sourceStatus, 'security-cleanup');
  assert.equal(byRepo['meituan-ai-route-planner'].status, 'live');
  assert.equal(byRepo['flowcut-ai-studio'].backupUrl, 'https://flowcut-ai-studio.vercel.app/');
  assert.equal(byRepo['yuanqi-ai-innovation-engine'].sourceVisibility, 'public');
});

test('client rendering is safe and visitor roles change the catalogue', async () => {
  const script = await read('app.js');
  assert.match(script, /addEventListener\(['"]click/);
  assert.match(script, /activeRole/);
  assert.match(script, /textContent/);
  assert.match(script, /createElement/);
  assert.match(script, /unavailable/);
  assert.doesNotMatch(script, /innerHTML\s*=/);
  assert.doesNotMatch(script, /localStorage.*api|api.*localStorage/i);
});

test('mainland-first shell uses local assets, responsive controls, and offline cache', async () => {
  const [html, css, sw] = await Promise.all([read('index.html'), read('styles.css'), read('sw.js')]);
  assert.doesNotMatch(html, /fonts\.googleapis|gstatic|unpkg|jsdelivr|cdnjs/);
  assert.match(html, /\.\/styles\.css/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /@media \(max-width:\s*768px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(sw, /CACHE_PREFIX\s*=\s*['"]portfolio-lab-/);
  assert.match(sw, /startsWith\(CACHE_PREFIX\)/);
  assert.match(sw, /caches\.match/);
});

test('private-source products ship local, subpath-safe mirrors', async () => {
  for (const product of ['route', 'rural']) {
    const productRoot = path.join(root, 'products', product);
    const html = await readFile(path.join(productRoot, 'index.html'), 'utf8');
    const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((ref) => ref.startsWith('./'));

    assert.ok(refs.length > 0, `${product} needs local runtime assets`);
    assert.doesNotMatch(html, /(?:src|href)="\/(?!\/)/, `${product} must not escape its Pages subpath`);
    for (const ref of refs) {
      const localPath = path.resolve(productRoot, ref.split(/[?#]/, 1)[0]);
      assert.ok(localPath.startsWith(productRoot), `${product} reference escaped its mirror root`);
      await access(localPath);
    }

    const files = await readdir(productRoot, { recursive: true });
    assert.ok(files.length >= (product === 'route' ? 52 : 87));
  }

  const routeWorker = await readFile(path.join(root, 'products', 'route', 'sw.js'), 'utf8');
  const ruralWorker = await readFile(path.join(root, 'products', 'rural', 'sw.js'), 'utf8');
  assert.match(routeWorker, /PRECACHE_URLS\s*=\s*\['\.\/'/);
  assert.match(routeWorker, /OWNED_CACHE_PREFIX\s*=\s*['"]ai-route-planner-/);
  assert.match(routeWorker, /startsWith\(OWNED_CACHE_PREFIX\)/);
  assert.match(ruralWorker, /self\.registration\.scope/);
  assert.match(ruralWorker, /CACHE_PREFIX\s*=\s*['"]xiangjiao-shell-/);
  assert.match(ruralWorker, /startsWith\(CACHE_PREFIX\)/);
});

test('portfolio worker caches mirror entrypoints without serving HTML as failed assets', async () => {
  const sw = await read('sw.js');
  const app = await read('app.js');
  assert.match(sw, /CACHE_NAME\s*=\s*`\$\{CACHE_PREFIX\}v3`/);
  assert.match(sw, /\.\/products\/route\/index\.html/);
  assert.match(sw, /\.\/products\/rural\/index\.html/);
  assert.match(sw, /event\.request\.mode === 'navigate'/);
  assert.match(sw, /Response\.error\(\)/);
  assert.doesNotMatch(sw, /catch\(\(\) => caches\.match\('\.\/index\.html'\)\)/);
  assert.match(app, /\.\/products\/route\/sw\.js/);
  assert.match(app, /\.\/products\/rural\/sw\.js/);
  assert.match(app, /Promise\.allSettled/);
});

test('mirror manifest proves the checked artifacts without publishing source history', async () => {
  const manifest = JSON.parse(await read('products/mirror-manifest.json'));
  const generated = await buildMirrorManifest();
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.digestAlgorithm, 'sha256(path\\0normalized-bytes\\0;text-crlf-to-lf)');
  assert.deepEqual(manifest, generated);

  for (const [product, expectedCandidates] of [['route', 5], ['rural', 2]]) {
    const entry = manifest.products[product];
    assert.ok(entry, `${product} needs a manifest entry`);
    assert.match(entry.sourceCommit, /^[0-9a-f]{40}$/);
    assert.equal(entry.buildCommand, 'npm run build:mirror');
    assert.equal(entry.securityGate.historicalCandidateCount, expectedCandidates);
    assert.equal(entry.securityGate.historicalExactMatches, 0);
    assert.equal(entry.securityGate.highConfidenceFileHits, 0);
    assert.equal(entry.securityGate.gitleaksFindings, 0);
    assert.equal(entry.securityGate.gitleaksVersion, '8.30.1');

    assert.ok(entry.fileCount > 0);
    assert.match(entry.artifactSha256, /^[0-9a-f]{64}$/);
  }
});

test('Pages CI runs the same full syntax gate as local verification', async () => {
  const workflow = await read('.github/workflows/pages.yml');
  assert.match(workflow, /- run: npm run check/);
  assert.doesNotMatch(workflow, /- run: npm test/);
});
