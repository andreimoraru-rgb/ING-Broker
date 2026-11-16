import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareArticleData } from './prepare-article-data';
import type { Article } from '../src/data/articles';

// Synthetic fixtures only. Never generate against or mutate the real release.
const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const realRelease = join(repository, 'src/data/translation-release.json');
const digest = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const realReleaseHash = digest(readFileSync(realRelease));
const temporaryParent = realpathSync(tmpdir());
const root = mkdtempSync(join(temporaryParent, 'ing-translation-generation-'));
const rootReal = realpathSync(root);
const body = `<h2>Fixture section</h2><p>${Array(1510).fill('fixture').join(' ')}</p>`;
const base: Article = {
  id: 'fixture', slug: 'fixture', title: 'Test fixture', excerpt: 'Test fixture',
  content: body, image: '/fixture.webp', date: '2026-11-16', author: 'Fixture team',
  tags: ['fixture'], seo: { title: 'Fixture', description: 'Fixture', keywords: 'fixture' },
};
const catalog: Record<string, Article[]> = { ro: [], ru: [], en: [] };
const keys: string[] = [];
const data = join(root, 'src/data');
const manifest = join(data, 'translation-release.json');
const source = join(data, 'article-content');
const metadata = join(data, 'articleMetadata.ts');
const reports: Array<{ phase: string; published: number; legacy: number }> = [];
let symlinkCheck: { status: 'passed' | 'skipped'; reason?: string };

function snapshot(directory: string): Record<string, string> {
  const hashes: Record<string, string> = {};
  if (!existsSync(directory)) return hashes;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    assert.ok(!entry.isSymbolicLink(), `Unexpected fixture symlink: ${file}`);
    if (entry.isDirectory()) {
      for (const [key, hash] of Object.entries(snapshot(file))) hashes[`${entry.name}/${key}`] = hash;
    } else hashes[entry.name] = digest(readFileSync(file));
  }
  return hashes;
}

function outputSnapshot() {
  return {
    published: snapshot(join(data, 'article-content-published')),
    legacy: snapshot(join(data, 'article-content-legacy')),
    metadata: existsSync(metadata) ? digest(readFileSync(metadata)) : null,
  };
}

function checkCounts(phase: string, published: number, legacy: number) {
  const count = (bucket: string) => Object.keys(snapshot(join(data, bucket))).filter(file => file.endsWith('.json')).length;
  assert.equal(count('article-content-published'), published, `${phase}: published`);
  assert.equal(count('article-content-legacy'), legacy, `${phase}: legacy`);
  reports.push({ phase, published, legacy });
}

function generate() {
  return prepareArticleData({ root, catalog, log: () => {} });
}

try {
  for (const lang of ['ro', 'ru', 'en']) mkdirSync(join(source, lang), { recursive: true });
  for (let i = 0; i < 107; i++) {
    const article: Article = { ...base, id: `fixture-${i}`, slug: `fixture-topic-${i}`, reviewStatus: 'approved' };
    catalog.ro.push(article);
    writeFileSync(join(source, 'ro', `${article.slug}.json`), JSON.stringify(article));
    if (i >= 101) continue;
    for (const lang of ['ru', 'en']) {
      catalog[lang].push({ ...article, content: '<p>Previous runtime body</p>', reviewStatus: undefined });
      writeFileSync(join(source, lang, `${article.slug}.json`), JSON.stringify({ ...article, title: `${lang} fixture` }));
      keys.push(`${lang}/${article.slug}`);
    }
  }
  assert.equal(keys.length, 202);
  const initialSources = snapshot(source);
  const initialCatalog = digest(JSON.stringify(catalog));

  writeFileSync(manifest, '[]');
  generate();
  checkCounts('empty release', 107, 202);
  assert.deepEqual(snapshot(source), initialSources);

  // Test opposite-bucket cleanup, obsolete slugs and preservation of other files.
  const orphan = join(data, 'article-content-published/ro/retired-fixture.json');
  const keep = join(data, 'article-content-legacy/ru/keep.txt');
  writeFileSync(orphan, '{"fixture":"obsolete generated output"}');
  writeFileSync(keep, 'Unrelated file must survive');
  writeFileSync(manifest, JSON.stringify(keys));
  generate();
  checkCounts('release 202', 309, 0);
  assert.ok(!existsSync(orphan));
  assert.equal(readFileSync(keep, 'utf8'), 'Unrelated file must survive');
  assert.deepEqual(snapshot(source), initialSources);
  const firstRelease = outputSnapshot();

  generate();
  checkCounts('repeat release 202', 309, 0);
  assert.deepEqual(outputSnapshot(), firstRelease, 'Generation must be idempotent');
  assert.deepEqual(snapshot(source), initialSources);

  // An unapproved override replaces its published output with the legacy body.
  const pendingPath = join(source, 'ru/fixture-topic-0.json');
  const approvedBytes = readFileSync(pendingPath);
  const pending = JSON.parse(approvedBytes.toString());
  pending.reviewStatus = 'pending';
  writeFileSync(pendingPath, JSON.stringify(pending));
  const pendingSources = snapshot(source);
  const resolved = generate();
  checkCounts('one pending translation', 308, 1);
  assert.notEqual(resolved.ru[0].reviewStatus, 'approved');
  assert.ok(!existsSync(join(data, 'article-content-published/ru/fixture-topic-0.json')));
  assert.equal(JSON.parse(readFileSync(join(data, 'article-content-legacy/ru/fixture-topic-0.json'), 'utf8')).content, catalog.ru[0].content);
  assert.deepEqual(snapshot(source), pendingSources);
  writeFileSync(pendingPath, approvedBytes);

  // A late parse failure must not partially overwrite or clean existing output.
  const brokenPath = join(source, 'en/fixture-topic-100.json');
  const validBytes = readFileSync(brokenPath);
  writeFileSync(brokenPath, '{invalid fixture');
  const beforeFailure = outputSnapshot();
  assert.throws(generate, SyntaxError);
  assert.deepEqual(outputSnapshot(), beforeFailure);
  writeFileSync(brokenPath, validBytes);

  writeFileSync(manifest, '[]');
  generate();
  checkCounts('rollback empty release', 107, 202);
  assert.deepEqual(snapshot(source), initialSources);
  assert.equal(digest(JSON.stringify(catalog)), initialCatalog, 'Input catalog must not be mutated');

  const beforeUnsafeSlug = outputSnapshot();
  assert.throws(() => prepareArticleData({ root, catalog: { ...catalog, ro: [{ ...catalog.ro[0], slug: '../escape' }] }, log: () => {} }), /Unsafe article slug/);
  assert.deepEqual(outputSnapshot(), beforeUnsafeSlug);

  // Directory junctions work without administrator privileges on Windows.
  const unsafeRoot = join(root, 'unsafe-fixture');
  const unsafeData = join(unsafeRoot, 'src/data');
  const outside = join(root, 'outside-generated-roots');
  mkdirSync(unsafeData, { recursive: true });
  mkdirSync(outside);
  writeFileSync(join(unsafeData, 'translation-release.json'), '[]');
  writeFileSync(join(outside, 'sentinel.json'), '{"preserve":true}');
  const outsideBefore = snapshot(outside);
  const link = join(unsafeData, 'article-content-published');
  let linkCreated = false;
  try {
    symlinkSync(outside, link, process.platform === 'win32' ? 'junction' : 'dir');
    linkCreated = true;
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (!['EPERM', 'EACCES', 'ENOSYS'].includes(code ?? '')) throw error;
    symlinkCheck = { status: 'skipped', reason: `Host denied fixture symlink creation: ${code}` };
  }
  if (linkCreated) {
    try {
      assert.ok(lstatSync(link).isSymbolicLink());
      assert.throws(() => prepareArticleData({ root: unsafeRoot, catalog: { ro: [], ru: [], en: [] }, log: () => {} }), /Unsafe generated directory/);
      assert.deepEqual(snapshot(outside), outsideBefore);
      assert.ok(!existsSync(join(unsafeData, 'articleMetadata.ts')));
      symlinkCheck = { status: 'passed' };
    } finally {
      unlinkSync(link);
    }
  }
  assert.equal(digest(readFileSync(realRelease)), realReleaseHash, 'Real manifest must remain unchanged');
  console.log(JSON.stringify({ passed: true, transitions: reports, sourceFilesPreserved: Object.keys(initialSources).length, sourceHashUnchanged: true, realManifestUnchanged: true, idempotent: true, pendingHeld: true, malformedInputPreflight: true, traversalRejected: true, generatedSymlinkCheck: symlinkCheck }, null, 2));
} finally {
  // Delete only this uniquely named, resolved test fixture, never a repo/source root.
  const rel = relative(temporaryParent, rootReal);
  assert.ok(rel && rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel));
  assert.ok(basename(rootReal).startsWith('ing-translation-generation-'));
  assert.equal(realpathSync(root), rootReal);
  rmSync(rootReal, { recursive: true, force: true });
}
