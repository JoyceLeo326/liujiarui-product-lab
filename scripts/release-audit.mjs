import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const credentialPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /AIza[0-9A-Za-z_-]{30,}/,
  /AKIA[0-9A-Z]{16}/,
  /(?:api|secret)[_-]?key\s*[:=]\s*["'][a-f0-9]{24,}["']/i
];
const blockedRuntimeHosts = /fonts\.googleapis|gstatic|unpkg|jsdelivr|cdnjs/i;

function resolveProductUrl(value, baseUrl) {
  return new URL(value, baseUrl).href;
}

async function auditOne(project, options) {
  const url = resolveProductUrl(project.primaryUrl, options.baseUrl);
  const startedAt = Date.now();
  try {
    const response = await options.fetchImpl(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(options.timeoutMs),
      headers: { 'user-agent': 'liujiarui-product-lab-release-audit/1.0' }
    });
    const contentType = response.headers.get('content-type') || '';
    const body = await response.text();
    let issue = '';
    if (!response.ok) issue = `HTTP ${response.status}`;
    else if (!contentType.toLowerCase().includes('text/html')) issue = 'primary URL is not HTML';
    else if (credentialPatterns.some((pattern) => pattern.test(body))) issue = 'credential-shaped content found';
    else if (blockedRuntimeHosts.test(body)) issue = 'blocked remote runtime asset found';
    else if (body.length < 120) issue = 'HTML response is unexpectedly small';

    return {
      name: project.name,
      url,
      ok: issue === '',
      status: response.status,
      contentType: contentType.split(';')[0],
      bytes: Buffer.byteLength(body),
      durationMs: Date.now() - startedAt,
      ...(issue ? { issue } : {})
    };
  } catch (error) {
    return {
      name: project.name,
      url,
      ok: false,
      status: null,
      durationMs: Date.now() - startedAt,
      issue: error?.name === 'TimeoutError' ? 'request timed out' : 'request failed'
    };
  }
}

export async function auditProjects(projects, {
  baseUrl = 'https://joyceleo326.github.io/liujiarui-product-lab/',
  fetchImpl = fetch,
  timeoutMs = 15_000
} = {}) {
  return Promise.all(projects.map((project) => auditOne(project, { baseUrl, fetchImpl, timeoutMs })));
}

async function main() {
  const projects = JSON.parse(await readFile(new URL('../projects.json', import.meta.url), 'utf8'));
  const baseUrl = process.argv[2] || 'https://joyceleo326.github.io/liujiarui-product-lab/';
  const results = await auditProjects(projects, { baseUrl });
  console.table(results.map(({ name, ok, status, durationMs, issue = '' }) => ({ name, ok, status, durationMs, issue })));
  const failures = results.filter((result) => !result.ok);
  if (failures.length) {
    console.error(`${failures.length} primary product URL(s) failed the release audit.`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
