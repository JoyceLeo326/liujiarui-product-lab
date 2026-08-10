import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'products', 'mirror-manifest.json');
const textExtensions = new Set([
  '.css', '.html', '.js', '.json', '.md', '.svg', '.txt', '.webmanifest', '.xml'
]);

const productMetadata = {
  route: {
    sourceCommit: 'b18be85fb067706b70acf44c14227c88ff27c79a',
    buildCommand: 'npm run build:mirror',
    securityGate: {
      historicalCandidateCount: 5,
      historicalExactMatches: 0,
      workflowPolicyFileHits: 0,
      highConfidenceFileHits: 0,
      gitleaksFindings: 0,
      gitleaksVersion: '8.30.1'
    }
  },
  rural: {
    sourceCommit: '71d06e85b311019433d332bb9194519b1af66862',
    buildCommand: 'npm run build:mirror',
    securityGate: {
      historicalCandidateCount: 2,
      historicalExactMatches: 0,
      workflowPolicyFileHits: 0,
      highConfidenceFileHits: 0,
      gitleaksFindings: 0,
      gitleaksVersion: '8.30.1'
    }
  }
};

async function listFiles(productRoot, directory = productRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(productRoot, absolute));
    if (entry.isFile()) files.push(path.relative(productRoot, absolute).replaceAll('\\', '/'));
  }
  return files.sort((left, right) => left < right ? -1 : left > right ? 1 : 0);
}

function normalizeArtifactBytes(relative, bytes) {
  if (!textExtensions.has(path.extname(relative).toLowerCase())) return bytes;

  let text = bytes.toString('utf8');
  let normalized = text.replaceAll('\r\n', '\n');
  while (normalized !== text) {
    text = normalized;
    normalized = text.replaceAll('\r\n', '\n');
  }
  return Buffer.from(normalized, 'utf8');
}

async function digestProduct(productRoot, files) {
  const digest = createHash('sha256');
  for (const relative of files) {
    digest.update(relative, 'utf8');
    digest.update('\0');
    const bytes = await readFile(path.join(productRoot, relative));
    digest.update(normalizeArtifactBytes(relative, bytes));
    digest.update('\0');
  }
  return digest.digest('hex');
}

export async function buildMirrorManifest() {
  const products = {};
  for (const [product, metadata] of Object.entries(productMetadata)) {
    const productRoot = path.join(root, 'products', product);
    const files = await listFiles(productRoot);
    products[product] = {
      ...metadata,
      fileCount: files.length,
      artifactSha256: await digestProduct(productRoot, files)
    };
  }

  return {
    schemaVersion: 1,
    digestAlgorithm: 'sha256(path\\0normalized-bytes\\0;text-crlf-to-lf)',
    products
  };
}

async function writeManifest() {
  const manifest = await buildMirrorManifest();
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
}

async function checkManifest() {
  const actual = JSON.parse(await readFile(manifestPath, 'utf8'));
  const expected = await buildMirrorManifest();
  assert.deepEqual(actual, expected, 'Mirror manifest is stale; run npm run manifest:write.');
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const command = process.argv[2] ?? '--check';
  if (command === '--write') await writeManifest();
  else if (command === '--check') await checkManifest();
  else throw new Error(`Unknown mirror manifest command: ${command}`);
}
