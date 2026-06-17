# Audit 04 - SPA Crawlability Analysis
# ingbroker.md Sprint 10 - 2026-06-18

## Problema Fundamentala: CSR SPA

ingbroker.md este React CSR pur. La orice cerere HTTP, crawlerul primeste:

```html
<div id="root"></div>  <!-- GOL - continut absent fara JS -->
<script type="module" src="/src/main.tsx"></script>
```

Continutul real (H1, text, FAQ, schema dinamica) apare DOAR dupa executia JS.

## Comportament Googlebot cu SPA

Google afirma ca poate randa JavaScript, dar cu restrictii importante:
1. Renderizarea JS are loc in "Wave 2" - poate dura zile sau saptamani
2. Nu toate paginile primesc renderizare completa
3. Crawl budget mai scump pentru SPA
4. Continut generat dinamic poate fi indexat partial sau deloc

**Concluzie:** Pentru un site B2B de nisa cu continut tehnic de valoare,
SPA pur CSR este o alegere suboptima pentru SEO.

## Comparatie HTML crawler vs. browser

### HTML primit de crawler (fara JS executat):
- Titlu: "ING Broker Moldova | Asigurari si Reasigurari de Elita" (static index.html)
- Description: text generic din index.html
- Schema: InsuranceAgency (statica, OK dar cu erori HTML in jur)
- H1: ABSENT
- Continut pagina: ABSENT
- Meta per-pagina (react-helmet): ABSENT

### HTML dupa executia JS (browser):
- Titlu, description: injectate de react-helmet per pagina - corecte
- Schema dinamica: injectata per pagina
- H1, continut complet: vizibil
- FAQ, produse, texte B2B: randate complet

**Diferenta: 85-95% din continut lipseste in varianta HTML pur**

## Erori HTML Critice in index.html (linia 78-83)

```html
<div id="root"></div>div>   <- CORUPT: "div>" extra
</html>html>                <- HTML DUPLICAT
  </body></title>           <- ORDINE GRESITA
    </head>                 <- TAG EXTRA ORFAN
```

Aceste erori pot face browsere si crawlere sa parseze gresit pagina.
Prioritate fix: INALT.

## Solutii Disponibile (in ordinea efortului)

### Solutia 1: Fix HTML + Schema statica imbunatatita (2-4h - RECOMANDAT ACUM)
- Repara erorile HTML din index.html
- Adauga schema mai completa in index.html (statica, disponibila si fara JS)
- Impact: +10-20% crawlabilitate imediata

### Solutia 2: Prerender cu vite-plugin-prerender (8-16h)
- Instaleaza `vite-plugin-prerender` sau `@prerenderer/plugin-vite`
- Configureaza prerender pentru top 15 rute statice
- La build time, genereaza HTML complet pentru fiecare ruta
- Cloudflare Pages serveste HTML static crawlerilor
- Impact: +40-60% indexabilitate in 30-60 zile

### Solutia 3: SSR cu Cloudflare Workers (40+ h - viitor)
- Migreaza la React SSR
- Cel mai bun pentru SEO dar efort mare
- Recomandat pentru versiunea 2.0 a site-ului

## Plan de actiune Sprint 10

**Saptamana 1 (imediat):**
- Fix erori HTML index.html
- Fix telefon gresit schema
- robots.txt, llms.txt, sitemap.xml

**Saptamana 2 (daca timp):**
- Investigare prerender pentru rute principale statice
- FAQPage schema statica in index.html pentru homepage

## Estimare impact SEO

| Actiune | Efort | Impact indexare estimat |
|---|---|---|
| Fix erori HTML | 30 min | +5% |
| Fix telefon schema | 5 min | +5% (date corecte) |
| robots.txt complet | 15 min | +3% AI visibility |
| llms.txt | 30 min | +10% AI Overviews |
| sitemap.xml | 2h | +20% descoperire pagini |
| Prerender | 8-16h | +40-60% indexare |
| Pagini B2B pillar (4) | 20h | +200% keywords acoperite |
