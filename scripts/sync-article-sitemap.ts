import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { articles } from '../src/data/articles';

// Preserve non-article routes verbatim. Use the real catalogue, not a manual list.
// A build is not a content update date.
const source = readFileSync('public/sitemap.xml', 'utf8');
const entries = [...source.matchAll(/<url>[\s\S]*?<\/url>/g)].map(match => match[0]);
const retained = entries.filter(entry => !/<loc>[^<]*\/news\//.test(entry));
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slugs = articles.ro.map(article => article.slug);
assert.equal(new Set(slugs).size, slugs.length, 'Duplicate article slugs');
const generated = articles.ro.map(article => {
  const loc = escapeXml(new URL(`/news/${article.slug}`, 'https://www.ingbroker.md').href);
  const lastmod = article.updatedAt ? `\n    <lastmod>${article.updatedAt}</lastmod>` : '';
  return `<url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
});
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  ${[...retained, ...generated].join('\n  ')}\n</urlset>\n`;
writeFileSync('public/sitemap.xml', xml);
console.log(JSON.stringify({ articleUrls: generated.length, preservedOtherUrls: retained.length }));
