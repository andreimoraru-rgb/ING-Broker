import assert from 'node:assert/strict';
import { articles } from '../src/data/articles';

// Editorial destination links only. Image delivery/CDNs are not citations.
// Moldova's Ministry of Energy is a verified local primary source, not a foreign insurer/broker.
// INTACT is a local insurer listed by CNPF using BNM data (list dated 31.03.2026,
// checked 11.11.2026). This citation permission is not a claim of a current licence
// or proof that ING Broker can place a particular product.
// MDED and ANSA public pages were checked 12.11.2026 as Moldova official
// sources on product safety and public recall notices, not product availability.
// BNAA FAQ and Moldova Naval Agency services were checked 12.11.2026.
// A permitted destination does not certify every statement on that site or product eligibility.
const allowed = new Set(['ingbroker.md', 'easigurari.com', 'bnm.md', 'cnpf.md', 'legis.md', 'moldasig.md', 'moldcargo.md', 'grawe.md', 'asc.gov.md', 'caa.md', 'customs.gov.md', 'stisc.gov.md', 'energie.gov.md', 'intact.md', 'mded.gov.md', 'ansa.gov.md', 'bnaa.md', 'anrm.gov.md']);
// Exact Moldova public-source destinations reviewed 15.11.2026 in the
// informational article batch. No wildcard permission or product-eligibility claim.
for (const host of ['cnam.md','donaris.md','rdp.moldelectrica.md','igsu.gov.md','gov.md','ipm.gov.md','amdm.gov.md']) allowed.add(host);
// 20.11.2026: Biroul Național de Statistică (sursă oficială din Moldova) și Acord Grup
// (asigurător local, în lista de parteneri din briefingul V2.0 al lui Andrei Moraru).
for (const host of ['statistica.gov.md','acordgrup.md']) allowed.add(host);
// 20.11.2026: Swiss Re, ghid tehnic CAR (reasigurător, nu asigurător sau broker concurent pe piața din Moldova).
// Aprobat explicit de Andrei Moraru pentru articolul CAR; nu acoperă alte afirmații de pe site.
allowed.add('swissre.com');
// 21.11.2026: textul autentic CMR (UNECE), starea tratatelor (ONU) și traducerea oficială (ANTA, autoritate din Moldova), pentru articolul CMR.
for (const host of ['unece.org','treaties.un.org','anta.gov.md']) allowed.add(host);
for(const denied of ['marsh.com','allianztiriac.ro','energie.gov.md.evil.example','other-broker.md'])assert.equal(allowed.has(denied),false);
const links: {lang:string;slug:string;url:string;host:string}[] = [];
const violations: typeof links = [];
let count = 0;
for (const [lang, list] of Object.entries(articles)) for (const article of list) {
  count++;
  const matches = [...article.content.matchAll(/href\s*=\s*["']([^"']+)["']/gi)];
  for (const match of matches) {
    if (/^(mailto:|tel:|#)/i.test(match[1])) continue;
    const url = new URL(match[1], 'https://www.ingbroker.md');
    const host = url.hostname.replace(/^www\./, '');
    const row = {lang,slug:article.slug,url:url.href,host};
    links.push(row);
    if(!allowed.has(host) && host !== 'rca.bnm.md') violations.push(row);
  }
}
console.log(JSON.stringify({articles:count,byLanguage:Object.fromEntries(Object.entries(articles).map(([k,v])=>[k,v.length])),linkCount:links.length,domains:[...new Set(links.map(x=>x.host))],violations},null,2));
assert.equal(violations.length,0,'Articles must not link to foreign-market or competitor pages');
for(const article of articles.ro.filter(a=>a.reviewStatus==='approved')) assert.doesNotMatch(article.content,/marsh|allianztiriac|Allianz-Țiriac|Documentul românesc|Marsh România/i,article.slug);
