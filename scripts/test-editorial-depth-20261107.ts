import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { articles } from '../src/data/articles';
import { editorialDepth20261107 } from '../src/data/editorialDepth20261107';
import { withoutDuplicateBodyPhoto } from './article-design-guard';

const countWords = (html: string) => (html.replace(/<[^>]+>/g, ' ').replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]*);/gi, ' ').match(/[\p{L}\p{N}]+(?:[-'][\p{L}\p{N}]+)*/gu) || []).length;
const rows = Object.keys(editorialDepth20261107).map(slug => {
  const article = articles.ro.find(a => a.slug === slug);
  assert.ok(article, slug);
  const words = countWords(article.content);
  assert.ok(words >= 1500, `${slug}: ${words}`);
  assert.equal(article.updatedAt, '2026-11-07');
  assert.equal(articles.ro.filter(a => a.image === article.image).length, 1, `${slug}: image reused`);
  assert.ok(existsSync(`public${article.image}`));
  assert.ok(article.imageAlt && article.imageAlt.length > 20);
  assert.ok(article.content.includes('Întrebări frecvente'));
  assert.ok(article.content.includes('7 noiembrie 2026'));
  assert.ok(article.content.includes('bnm.md'));
  assert.ok((article.content.match(/<h2>/g) || []).length >= 8);
  assert.doesNotMatch(article.content, /[\u2013\u2014]|ghid complet|garantăm|cel mai bun preț|<h1\b|<script\b|javascript:/i);
  for (const match of article.content.matchAll(/href="\/news\/([^"]+)"/g)) {
    assert.ok(articles.ro.some(a => a.slug === match[1]), `${slug}: bad related URL ${match[1]}`);
  }
  return { id: article.id, slug, words, image: article.image, uniqueImage: true, status: 'local-content-check-passed-not-live-complete' };
});
for (const file of ['src/pages/ArticlePage.tsx', 'src/pages/Home.tsx', 'src/index.css']) {
  if (!existsSync(file)) continue;
  let baseline = execFileSync('git', ['show', `284852d:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
  // Owner explicitly requested that the hero photograph not repeat in the body.
  if (file === 'src/pages/ArticlePage.tsx') baseline = withoutDuplicateBodyPhoto(baseline);
  assert.equal(readFileSync(file, 'utf8').replace(/\r\n/g, '\n'), baseline, `${file}: design changed`);
}
console.log(JSON.stringify({ passed: true, individualDrafts: rows.length, designUnchanged: true, rows }, null, 2));
