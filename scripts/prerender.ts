/**
 * Prerender post-build - rezolvarea BUG-015 (site 100% CSR).
 *
 * PROBLEMA
 * Site-ul e o aplicatie React care se randeaza integral in browser. Googlebot
 * executa JavaScript si se descurca, dar Yandex, Bing si crawlerii AI - GPTBot,
 * ClaudeBot, PerplexityBot - primesc un <div id="root"></div> gol. robots.txt ii
 * lasa sa intre, dar nu au ce citi. Rezultatul: site-ul e practic invizibil pentru
 * motoarele de raspuns AI si pentru piata rusofona.
 *
 * SOLUTIA ALEASA SI DE CE
 * Acest script ruleaza DUPA `vite build`, peste `dist/` deja construit. Porneste un
 * server static local, deschide fiecare URL intr-un Chromium headless, asteapta ca
 * React sa termine de randat si salveaza HTML-ul rezultat ca fisier static.
 *
 * Nu atinge nicio linie din App.tsx, din rute, din componente sau din texte.
 * Alternativa "corecta arhitectural" - migrare la vite-react-ssg sau Astro - ar fi
 * cerut rescrierea celor 24 de rute dintr-un fisier de 1.389 de linii, in paralel cu
 * 4 PR-uri nemergeate care ating acelasi fisier. Raport risc/beneficiu prost.
 *
 * Aceasta solutie e complet reversibila: scoti `&& npm run prerender` din scriptul
 * de build si te intorci exact la comportamentul anterior.
 *
 * GARDA IMPOTRIVA ESECULUI TACUT
 * Daca prerender-ul ar esua in tacere, build-ul ar trece cu HTML gol: site-ul ar
 * parea functional, dar SEO-ul ar fi mort si nu s-ar observa saptamani intregi.
 * De aceea scriptul valideaza fiecare pagina si opreste build-ul cu exit code 1
 * daca rezultatul nu are continut real. Un build rosu se observa imediat; o pagina
 * goala, nu.
 *
 * Rulare: npm run prerender   (automat, ca parte din `npm run build`)
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer, { type Browser } from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');

/** Port local folosit doar pe durata prerender-ului. */
const PORT = 4178;

/** Cate pagini randam simultan. Peste 4 castigul scade si consumul de RAM creste. */
const CONCURRENCY = 4;

/** Sub acest numar de caractere in #root consideram pagina neredata. */
const MIN_ROOT_CHARS = 400;

/** Timp maxim de asteptare per pagina. */
const PAGE_TIMEOUT_MS = 45_000;

/**
 * Rute care nu se randeaza si care NU trebuie sa opreasca build-ul.
 *
 * Aceasta lista nu e o scuza, e un compromis explicit: o pagina deja defecta nu
 * trebuie sa blocheze livrarea fixului de crawlability pentru celelalte 214.
 * Fiecare intrare are nevoie de motiv si de un plan de rezolvare.
 *
 * `/o-nas` - versiunea rusa a paginii „Despre noi". Nu produce continut in #root
 *   nici local, nici in productie (unde e pagina alba pentru vizitatorii rusofoni).
 *   Traducerile `ru.about` si `ru.seo.about` exista, deci cauza e alta si necesita
 *   diagnostic separat. Pagina lipsea deja din sitemap-ro.xml, semn ca problema era
 *   cunoscuta. De rezolvat in PR dedicat; pana atunci ramane in CSR, ca astazi.
 */
const KNOWN_UNRENDERABLE = new Set<string>(['/o-nas']);

/**
 * Deduplicarea <head> plus serializarea paginii, ca SIR de cod.
 *
 * DE CE SIR SI NU FUNCTIE: `page.evaluate(fn)` serializeaza functia primita si o
 * executa in contextul paginii. Acest script ruleaza prin `tsx`, care transpileaza
 * cu esbuild, iar esbuild adauga helperul `__name` functiilor numite din interior.
 * Helperul exista in Node, dar NU in browser, deci evaluarea crapa cu
 * `__name is not defined`. Un sir nu trece prin transpilare, deci problema dispare.
 *
 * CE REZOLVA: fiecare pagina soseste cu trei seturi suprapuse de meta tag-uri -
 * cele statice din index.html, cele emise de componenta <SEO> globala din App.tsx
 * si cele emise de <SEO> al paginii curente. In CSR duplicarea era invizibila; in
 * HTML-ul prerenderizat devine vizibila pentru crawleri: trei <title>, trei
 * <meta name="robots"> etc.
 *
 * Google ia primul <title>, iar primul este cel specific paginii - deci rankingul
 * nu era afectat. Dar duplicarea e un semnal de calitate prost si poate deruta
 * Yandex si crawlerii AI, exact publicul pentru care facem prerender-ul.
 *
 * Pastram PRIMA aparitie a fiecarui tag si eliminam restul. Deduplicarea atinge
 * doar fisierul prerenderizat; sursele raman neschimbate, deci comportamentul in
 * browser este identic cu cel de azi.
 */
const DEDUPE_AND_SERIALIZE = `(function () {
  var seen = {};

  // PAS 1 - robots: castiga cel mai restrictiv, nu primul din document.
  //
  // Pentru <title> primul tag este cel specific paginii, deci "pastreaza primul"
  // functioneaza. Pentru <meta name="robots"> ordinea e alta: tag-ul paginii NU e
  // primul, asa ca regula generala ar fi pastrat varianta permisiva si ar fi anulat
  // exact ce livreaza acest PR - noindex pe cele ~190 de articole sablonate.
  //
  // Regula aplicata aici este si comportamentul documentat al Google pentru tag-uri
  // robots conflictuale pe aceeasi pagina: cel mai restrictiv are prioritate.
  // Deci nu inventam o conventie, ci facem HTML-ul static sa spuna explicit ce ar fi
  // interpretat oricum.
  var robotsTags = Array.prototype.slice.call(
    document.head.querySelectorAll('meta[name="robots"]')
  );
  var restrictive = null;
  for (var r = 0; r < robotsTags.length; r++) {
    var value = (robotsTags[r].getAttribute('content') || '').toLowerCase();
    if (value.indexOf('noindex') !== -1) { restrictive = robotsTags[r]; break; }
  }
  if (restrictive !== null) {
    for (var d = 0; d < robotsTags.length; d++) {
      if (robotsTags[d] !== restrictive) {
        robotsTags[d].parentNode.removeChild(robotsTags[d]);
      }
    }
  }

  // PAS 2 - deduplicare generala: pastreaza prima aparitie a fiecarui tag.
  var children = Array.prototype.slice.call(document.head.children);

  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    var tag = el.tagName.toLowerCase();
    var key = null;

    if (tag === 'title') {
      key = 'title';
    } else if (tag === 'meta') {
      if (el.getAttribute('name')) {
        key = 'meta:name:' + el.getAttribute('name');
      } else if (el.getAttribute('property')) {
        key = 'meta:property:' + el.getAttribute('property');
      } else if (el.getAttribute('http-equiv')) {
        key = 'meta:http-equiv:' + el.getAttribute('http-equiv');
      } else if (el.hasAttribute('charset')) {
        key = 'meta:charset';
      }
    } else if (tag === 'link') {
      var rel = el.getAttribute('rel');
      if (rel === 'canonical') {
        key = 'link:canonical';
      } else if (rel === 'alternate') {
        key = 'link:alternate:' + (el.getAttribute('hreflang') || '');
      }
    }

    if (key === null) continue;
    if (seen[key]) {
      el.parentNode.removeChild(el);
    } else {
      seen[key] = true;
    }
  }

  document.documentElement.setAttribute('data-prerendered', 'true');
  return '<!DOCTYPE html>\\n' + document.documentElement.outerHTML;
})()`;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

/**
 * Server static minimal peste dist/, cu fallback SPA pe index.html.
 * Fallback-ul e esential: rutele de tip /servicii/... nu au fisier propriu inainte
 * de prerender, deci trebuie servite prin index.html ca sa poata randa React Router.
 */
function startServer(): Promise<http.Server> {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      // Fallback SPA.
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

/**
 * Citeste rutele de prerenderizat din public/sitemap.xml.
 *
 * Sitemap-ul e sursa de adevar intentionat: e deja generat din rutele reale de
 * `scripts/generate-sitemap.ts`, deci cele doua nu pot devia una de alta. Cand se
 * adauga o pagina noua in sitemap, intra automat si in prerender.
 */
function readRoutesFromSitemap(): string[] {
  if (!fs.existsSync(SITEMAP)) {
    throw new Error(
      `Nu am gasit ${SITEMAP}. Prerender-ul citeste rutele din sitemap. ` +
      'Ruleaza intai `npm run sitemap`.'
    );
  }

  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1]);

  const routes = new Set<string>(['/']);
  for (const loc of locs) {
    try {
      const { pathname } = new URL(loc);
      routes.add(pathname === '' ? '/' : pathname);
    } catch {
      // Intrare malformata in sitemap - o ignoram, nu oprim build-ul pentru ea.
    }
  }
  return [...routes];
}

/** Transforma o ruta in calea fisierului de iesire: /a/b -> dist/a/b/index.html */
function outputPathFor(route: string): string {
  if (route === '/') return path.join(DIST, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

interface PageResult {
  route: string;
  ok: boolean;
  rootChars: number;
  reason?: string;
}

async function renderRoute(browser: Browser, route: string): Promise<PageResult> {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Identificam prerender-ul explicit, ca sa fie recunoscut in loguri.
    await page.setUserAgent(
      'Mozilla/5.0 (compatible; INGBrokerPrerender/1.0; +https://www.ingbroker.md)'
    );

    await page.goto(`http://127.0.0.1:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: PAGE_TIMEOUT_MS,
    });

    // Asteptam ca React sa fi pus continut real in #root.
    await page.waitForFunction(
      (min: number) => {
        const root = document.getElementById('root');
        return !!root && root.innerHTML.length > min;
      },
      { timeout: PAGE_TIMEOUT_MS },
      MIN_ROOT_CHARS
    );

    const rootChars: number = await page.evaluate(
      () => document.getElementById('root')?.innerHTML.length ?? 0
    );

    const html = (await page.evaluate(DEDUPE_AND_SERIALIZE)) as string;

    const outPath = outputPathFor(route);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');

    return { route, ok: true, rootChars };
  } catch (err) {
    return {
      route,
      ok: false,
      rootChars: 0,
      reason: err instanceof Error ? err.message : String(err),
    };
  } finally {
    await page.close().catch(() => undefined);
  }
}

async function main(): Promise<void> {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html lipseste. Ruleaza `vite build` intai.');
    process.exit(1);
  }

  const routes = readRoutesFromSitemap();
  console.log(`[prerender] ${routes.length} rute de randat, ${CONCURRENCY} in paralel.`);

  const server = await startServer();
  let browser: Browser | undefined;
  const results: PageResult[] = [];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const queue = [...routes];
    const workers = Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length > 0) {
        const route = queue.shift();
        if (!route) break;
        const result = await renderRoute(browser!, route);
        results.push(result);
        const done = results.length;
        if (result.ok) {
          if (done % 25 === 0 || done === routes.length) {
            console.log(`[prerender] ${done}/${routes.length}`);
          }
        } else {
          console.error(`[prerender] ESEC ${result.route}: ${result.reason}`);
        }
      }
    });

    await Promise.all(workers);

    /**
     * Repasare secventiala pentru rutele esuate.
     *
     * Cu 4 pagini randate simultan apar timeout-uri de navigare intermitente, pe
     * rute diferite la fiecare rulare - simptom de contentie de resurse, nu de
     * pagina defecta. O repasare secventiala, fara concurenta, le rezolva.
     *
     * Diferenta fata de KNOWN_UNRENDERABLE: acolo sunt pagini care esueaza
     * determinist si sunt tolerate constient. Aici incercam din nou ceva ce ar
     * trebui sa functioneze. Ce cade si la a doua incercare e problema reala.
     */
    const retryable = results.filter(
      r => !r.ok && !KNOWN_UNRENDERABLE.has(r.route)
    );

    if (retryable.length > 0) {
      console.log(
        `[prerender] repasare secventiala pentru ${retryable.length} rute esuate...`
      );
      for (const failedResult of retryable) {
        const retry = await renderRoute(browser!, failedResult.route);
        const index = results.indexOf(failedResult);
        if (index !== -1) results[index] = retry;
        console.log(
          `[prerender] repasare ${retry.route}: ${retry.ok ? 'reusit' : 'esuat din nou'}`
        );
      }
    }
  } finally {
    await browser?.close().catch(() => undefined);
    server.close();
  }

  const ok = results.filter(r => r.ok);
  const allFailed = results.filter(r => !r.ok);
  const tolerated = allFailed.filter(r => KNOWN_UNRENDERABLE.has(r.route));
  const failed = allFailed.filter(r => !KNOWN_UNRENDERABLE.has(r.route));

  if (tolerated.length > 0) {
    console.warn(
      `\n[prerender] ATENTIE - ${tolerated.length} pagini cunoscute ca defecte, tolerate:`
    );
    for (const t of tolerated) {
      console.warn(`  - ${t.route} (ramane in CSR; vezi KNOWN_UNRENDERABLE)`);
    }
    console.warn('');
  }

  console.log(`[prerender] reusite: ${ok.length}/${routes.length}`);
  if (ok.length > 0) {
    const avg = Math.round(ok.reduce((s, r) => s + r.rootChars, 0) / ok.length);
    console.log(`[prerender] continut mediu in #root: ${avg} caractere`);
  }

  // Garda: orice esec opreste build-ul. Mai bine un deploy blocat si vizibil
  // decat un site publicat cu pagini goale pentru crawleri.
  if (failed.length > 0) {
    console.error(
      `\n[prerender] BUILD OPRIT - ${failed.length} pagini nu au putut fi randate:`
    );
    for (const f of failed.slice(0, 15)) {
      console.error(`  - ${f.route}: ${f.reason}`);
    }
    if (failed.length > 15) console.error(`  ... si inca ${failed.length - 15}`);
    console.error(
      '\nDaca blocajul persista si trebuie sa livrezi urgent, scoate temporar\n' +
      '`&& npm run prerender` din scriptul `build` din package.json. Site-ul revine\n' +
      'la comportamentul de dinainte (CSR), fara alte efecte.\n'
    );
    process.exit(1);
  }

  console.log('[prerender] gata. Crawlerii primesc acum HTML complet.');
}

main().catch(err => {
  console.error('[prerender] eroare neasteptata:', err);
  process.exit(1);
});
