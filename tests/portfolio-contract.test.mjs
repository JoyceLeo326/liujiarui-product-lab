import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

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
  assert.equal(byRepo['rural-teacher-assistant-deploy'].primaryUrl, 'https://rural-teacher-assistant-amber.vercel.app/');
  assert.equal(byRepo['rural-teacher-assistant-deploy'].status, 'live');
  assert.equal(byRepo['meituan-ai-route-planner'].status, 'unavailable');
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
  assert.match(sw, /portfolio-lab-v2/);
  assert.match(sw, /caches\.match/);
});
