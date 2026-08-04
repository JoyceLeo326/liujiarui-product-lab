import test from 'node:test';
import assert from 'node:assert/strict';
import { auditProjects } from '../scripts/release-audit.mjs';

test('release audit resolves mirror paths and reports only safe metadata', async () => {
  const requested = [];
  const fakeFetch = async (url) => {
    requested.push(url);
    return new Response(`<!doctype html><title>安全镜像</title><main>${'可验证交付与完整用户旅程。'.repeat(12)}</main>`, {
      status: 200,
      headers: { 'content-type': 'text/html; charset=utf-8' }
    });
  };
  const results = await auditProjects([
    { name: '镜像项目', primaryUrl: './mirrors/example/' },
    { name: '公开项目', primaryUrl: 'https://example.test/product/' }
  ], { baseUrl: 'https://portfolio.test/lab/', fetchImpl: fakeFetch });

  assert.deepEqual(requested, [
    'https://portfolio.test/lab/mirrors/example/',
    'https://example.test/product/'
  ]);
  assert.ok(results.every((result) => result.ok));
  assert.ok(results.every((result) => !('body' in result)));
});

test('release audit blocks a credential-shaped bundle without echoing it', async () => {
  const credential = `sk-${'x'.repeat(32)}`;
  const fakeFetch = async () => new Response(`<script>const token='${credential}'</script>`, {
    status: 200,
    headers: { 'content-type': 'text/html' }
  });
  const [result] = await auditProjects([{ name: '风险项目', primaryUrl: './risk/' }], {
    baseUrl: 'https://portfolio.test/', fetchImpl: fakeFetch
  });

  assert.equal(result.ok, false);
  assert.match(result.issue, /credential-shaped content/);
  assert.doesNotMatch(JSON.stringify(result), new RegExp(credential));
});
