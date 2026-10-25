import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { articles } from '../src/data/articles';
import { articleRevisions } from '../src/data/recoveredArticles';

const dir = resolve(process.argv[2] || '../../outputs/content-recovery/2026-10-15');
mkdirSync(dir, { recursive: true });
const gsc = JSON.parse(readFileSync(resolve(dir, 'gsc-excluded-all.json'), 'utf8'));
const selected = articles.ro.filter(a => Object.hasOwn(articleRevisions, a.slug));
const esc = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const csv = (rows: unknown[][]) => '\uFEFF' + rows.map(row => row.map(v => '"' + String(v ?? '').replaceAll('"', '""') + '"').join(',')).join('\n');
const rows: unknown[][] = [['url', 'gsc_reason', 'gsc_report_updated', 'triage', 'live_content_checked', 'publication']];
for (const category of gsc.categories) {
  for (const row of category.rows) {
    const url = row.match(/https?:\/\/[^\s]+/)[0];
    const path = decodeURIComponent(new URL(url).pathname);
    const revised = path.startsWith('/news/') && Object.hasOwn(articleRevisions, path.slice(6));
    let action = 'Inspectare canonical/HTTP individuală înainte de modificare';
    if (/\/(ru|en)(\/|$)/.test(path)) action = 'Rută lingvistică: verifică existența și echivalența; nu traduce automat';
    if (/\/(post|product-page|blog-1)(\/|$)/.test(path)) action = 'Adresă istorică: verifică echivalentul real; fără redirect general către homepage';
    if (/noindex/.test(category.reason)) action = 'Arhivă/utilitar istoric: verifică intenția; nu elimina noindex automat';
    if (/redirecționare/.test(category.reason)) action = 'Verifică destinația și lanțul; sursa redirecționată nu trebuie indexată separat';
    if (/alternativă/.test(category.reason)) action = 'Verifică ținta canonical și intenția consolidării; excluderea poate fi corectă';
    if (/\.(pdf|xml)$/.test(path)) action = 'Nu este articol HTML; verificare tehnică/documentară separată';
    if (revised) action = 'Rescriere originală pregătită + metadate; așteaptă revizuire de specialitate';
    rows.push([url, category.reason, gsc.reportUpdated, action, revised && !path.endsWith('/asigurare-viata-moldova') ? 'Da, HTTP 200/canonical/index-follow/text verificat la 2026-10-15' : 'Nu; triere după raport și structura URL, nu confirmare live', 'Nimic publicat în această rulare']);
  }
}
writeFileSync(resolve(dir, 'excluded-triage.csv'), csv(rows));
writeFileSync(resolve(dir, 'revised-articles.json'), JSON.stringify(selected, null, 2));
writeFileSync(resolve(dir, 'article-review.csv'), csv([['slug', 'title', 'description', 'words', 'sources', 'approval'], ...selected.map(a => [a.slug, a.title, a.seo.description, a.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length, articleRevisions[a.slug].sources.map(s => s[1]).join(' | '), 'Owner + specialist; no named human review claimed'])]));
const html = `<!doctype html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>ING Broker — 15 articole pentru revizuire</title><style>body{margin:0;background:#f4f5f7;color:#1c2533;font:17px/1.7 system-ui,sans-serif}header,main{max-width:960px;margin:auto;padding:24px}header{border-bottom:4px solid #c8172d}h1{font-size:32px;line-height:1.2}h2{font-size:24px;line-height:1.35}h3{font-size:19px}a{color:#a00e21;overflow-wrap:anywhere}details{background:white;margin:20px 0;padding:24px;border:1px solid #d8dde3;border-radius:8px}summary{cursor:pointer;font-weight:700;font-size:21px}.note{padding:14px;background:#fff3d6;border-left:4px solid #a36d00}.meta{font-size:14px;color:#526070}ul,ol{padding-left:24px}@media(max-width:550px){header,main{padding:16px}details{padding:18px}h1{font-size:26px}}</style></head><body><header><p class="meta">ING BROKER · 15 OCTOMBRIE 2026</p><h1>15 articole rescrise pentru verificare</h1><p class="note"><strong>PREVIZUALIZARE — NEPUBLICAT.</strong> Texte pregătite cu asistență AI. Necesită aprobarea proprietarului și validare de specialitate. Nu există o verificare umană atribuită și nu se garantează indexarea.</p><p>Raport GSC actualizat la 9 octombrie 2026. Linkurile interne de mai jos deschid variantele locale pregătite, nu confirmă o publicare.</p></header><main>${selected.map((a,i)=>`<details${i===0?' open':''}><summary>${esc(a.title)}</summary><p class="meta">URL păstrat: /news/${esc(a.slug)}<br>Titlu SEO: ${esc(a.seo.title)}<br>Descriere: ${esc(a.seo.description)}</p>${a.content.replaceAll('href="/news/', 'href="http://127.0.0.1:4177/news/').replaceAll('href="/contact"', 'href="https://www.ingbroker.md/contact"')}</details>`).join('')}</main></body></html>`;
const scopeNotice = '<p class="note"><strong>Actualizare editorială — 16 octombrie 2026.</strong> Un singur articol despre asigurarea de viață în Moldova, distinctă de accidente. Cele patru subdiviziuni, stomatologia și salonul de frumusețe sunt excluse din acest lot. Celelalte nouă texte sunt doar ciorne: publicarea lor este suspendată până la verificarea produselor disponibile în Moldova, a portofoliului ING Broker și a cererii locale. Sursele străine nu confirmă disponibilitatea în Moldova. Nici articolul despre viață nu confirmă automat intermedierea produsului de către ING Broker.</p>';
writeFileSync(resolve(dir, 'articole-pentru-revizuire.html'), html.replaceAll('15 articole', `${selected.length} articole`).replace('ING BROKER · 15 OCTOMBRIE 2026', 'ING BROKER · 16 OCTOMBRIE 2026').replace('</header>', scopeNotice + '</header>'));
console.log(JSON.stringify({ excludedRows: rows.length - 1, revisedArticles: selected.length, output: dir }));
