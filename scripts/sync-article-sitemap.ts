import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { articles } from '../src/data/articles';
import { prepareArticleData } from './prepare-article-data';
import { serviceRoutes, businessRouteAliases, romanianRouteRedirects, canonicalCommercialRoutes } from '../src/data/staticRoutes';
import { translations } from '../src/translations';
import { localizedPath } from '../src/utils/localizedRoutes';
const resolved = prepareArticleData();

// Preserve non-article routes verbatim. Use the real catalogue, not a manual list.
// A build is not a content update date.
const source = readFileSync('public/sitemap.xml', 'utf8');
const entries = [...source.matchAll(/<url>[\s\S]*?<\/url>/g)].map(match => match[0]);
const retained = entries.filter(entry => !/<loc>[^<]*\/news\//.test(entry) && !/<loc>[^<]*\/(?:o-nas|about-us)<\/loc>/.test(entry) && !Object.keys({ ...businessRouteAliases, ...romanianRouteRedirects }).some(path => entry.includes(`https://www.ingbroker.md${path}</loc>`)));
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slugs = articles.ro.map(article => article.slug);
assert.equal(new Set(slugs).size, slugs.length, 'Duplicate article slugs');
const generated = Object.entries(resolved).flatMap(([lang, list]) => list.filter(a => a.reviewStatus === 'approved').map(article => {
  const loc = escapeXml(new URL(localizedPath(`/news/${article.slug}`, lang as 'ro' | 'ru' | 'en'), 'https://www.ingbroker.md').href);
  const lastmod = article.updatedAt ? `\n    <lastmod>${article.updatedAt}</lastmod>` : '';
  const equivalents = ['ro', 'ru', 'en'].filter(locale => resolved[locale].some(a => a.slug === article.slug && a.reviewStatus === 'approved'));
  const alternates = equivalents.length === 3 ? equivalents.map(locale => `\n    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(new URL(localizedPath(`/news/${article.slug}`, locale as 'ro' | 'ru' | 'en'), 'https://www.ingbroker.md').href)}"/>`).join('') : '';
  return `<url>\n    <loc>${loc}</loc>${lastmod}${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
}));
const extraRoutes = [...serviceRoutes, ...canonicalCommercialRoutes, ...translations.ro.business.lines.map(p => businessRouteAliases[`/business/${p.id}`] || `/business/${p.id}`)];
for (const path of extraRoutes) {
  const loc = `https://www.ingbroker.md${path}`;
  if (!retained.some(entry => entry.includes(`<loc>${loc}</loc>`))) retained.push(`<url><loc>${loc}</loc></url>`);
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  ${[...retained, ...generated].join('\n  ')}\n</urlset>\n`;
writeFileSync('public/sitemap.xml', xml);
console.log(JSON.stringify({ articleUrls: generated.length, preservedOtherUrls: retained.length }));
