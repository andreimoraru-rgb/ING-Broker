// scripts/generate-sitemap.ts
// Run: npx tsx scripts/generate-sitemap.ts
// Add to package.json: "sitemap": "tsx scripts/generate-sitemap.ts"

import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.ingbroker.md';
const TODAY = new Date().toISOString().split('T')[0];
const OUTPUT_DIR = path.resolve(process.cwd(), 'public');

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const staticRoutes: SitemapUrl[] = [
  { loc: '/', lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
  { loc: '/business', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/reinsurance', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/construction-shield', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/renewable-energy', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/property-assets', lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
  { loc: '/oferte', lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
  { loc: '/oferte/flote-auto', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/despre-noi', lastmod: TODAY, changefreq: 'monthly', priority: '0.7' },
  { loc: '/o-nas', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  { loc: '/about-us', lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact', lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
  { loc: '/news', lastmod: TODAY, changefreq: 'daily', priority: '0.8' },
  { loc: '/termeni-si-conditii', lastmod: TODAY, changefreq: 'yearly', priority: '0.3' },
  { loc: '/politica-de-confidentialitate', lastmod: TODAY, changefreq: 'yearly', priority: '0.3' },
];

// Update this list as new articles are published in src/data/articles.ts
const articleSlugs: string[] = [
  'asigurare-energie-regenerabila-moldova',
  'asigurare-cargo-transport-marfa-moldova',
  'asigurari-transport-logistica-cmr-cargo-moldova',
];

const allUrls: SitemapUrl[] = [
  ...staticRoutes,
  ...articleSlugs.map(slug => ({
    loc: `/news/${slug}`,
    lastmod: TODAY,
    changefreq: 'monthly' as const,
    priority: '0.7',
  })),
];

function buildSitemapXml(urls: SitemapUrl[], baseUrl: string): string {
  const entries = urls.map(u => {
    const full = `${baseUrl}${u.loc}`;
    return `  <url>\n    <loc>${full}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), buildSitemapXml(allUrls, SITE_URL), 'utf-8');
console.log(`[sitemap] public/sitemap.xml - ${allUrls.length} URLs`);

const roUrls = allUrls.filter(u => !u.loc.startsWith('/o-nas') && !u.loc.startsWith('/about-us'));
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-ro.xml'), buildSitemapXml(roUrls, SITE_URL), 'utf-8');
console.log(`[sitemap] public/sitemap-ro.xml - ${roUrls.length} URLs`);
