# Audit 02 - SEO Baseline
# ingbroker.md Sprint 10 - 2026-06-18

## robots.txt - Status curent

Fisier prezent la `public/robots.txt`. Partial configurat.

**Prezenti:** GPTBot, ChatGPT-User, Google-Extended, Claude-Web, PerplexityBot, Bytespider
**Lipsesc:** ClaudeBot, anthropic-ai, Applebot, Applebot-Extended, cohere-ai, CCBot, Meta-ExternalAgent, FacebookBot, Perplexity-User

Nota: sitemap.xml referit in robots.txt dar fisierul NU exista (404).

Evaluare: 5/10

## sitemap.xml - Status

**LIPSESTE COMPLET.** Nu exista `public/sitemap.xml`. robots.txt refera un sitemap inexistent.
Googlebot primeste 404 la cererea sitemap-ului.

Evaluare: 0/10 - critic

## llms.txt - Status

**LIPSESTE.** Standard nou (2024-2025) pentru AI context.
Perplexity, ChatGPT, Claude il folosesc pentru AI Overviews.

Evaluare: 0/10

## index.html - Meta Tags si Erori

### Ce exista (pozitiv):
- title, description, keywords - prezente
- `robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` - bine configurat
- Open Graph complet (title, description, image, url, type, locale)
- Twitter Card prezenta
- Favicon SVG + PNG + apple-touch-icon
- Preconnect pentru fonts, images, Cloudflare
- Schema JSON-LD InsuranceAgency statica (cu date corecte, tel: +373 69 526 003)

### Erori HTML critice (index.html linia 78-83):
```
<div id="root"></div>div>  <- TAG CORUPT
</html>html>               <- HTML DUPLICAT
  </body></title>          <- STRUCTURA GRESITA
    </head>                <- TAG EXTRA
```
Aceste erori pot afecta parsarea de catre Googlebot.

### Problema schema duplicata:
- index.html: schema statica cu telefon CORECT (+373 69 526 003)
- App.tsx (react-helmet, dinamic): schema cu telefon GRESIT (+373 22 123 456 - placeholder!)
Schema dinamica suprascrie cea statica. Googlebot vede telefonul gresit.

## Schema Markup - Status curent

| Tip schema | Prezent | Note |
|---|---|---|
| InsuranceAgency | DA (partial) | Telefon gresit in versiunea dinamica |
| FAQPage | NU | Homepage are FAQ fara schema |
| BreadcrumbList | NU | Lipseste complet |
| Article | NU | Articolele din /news/* nu au schema |
| Service | NU | Paginile B2B fara schema Service |
| Person | NU | Nu exista pagini autor |
| HowTo | NU | Lipseste |
| LocalBusiness cu geo | Partial | In FleetAutoPage.tsx exista, restul nu |

Evaluare schema: 3/10

## Pagini existente indexabile (estimare)

| URL | H1 | Meta | Schema | Prioritate indexare |
|---|---|---|---|---|
| / | DA | DA | Partial (tel gresit) | P0 |
| /business | DA | DA | Nu | P0 |
| /reinsurance | DA | DA | Nu | P0 |
| /construction-shield | DA | DA | Nu | P0 |
| /oferte/flote-auto | DA (optimizat) | DA (optimizat) | DA (complet) | P0 |
| /renewable-energy | DA | DA | Partial | P1 |
| /contact | DA | DA | Nu | P1 |
| /despre-noi | DA | DA | Nu | P1 |
| /news/* | DA | DA | Nu Article | P1 |

## Top 10 Probleme SEO (prioritizate)

1. [P0] Telefon gresit in schema dinamica (App.tsx linia 1207)
2. [P0] Erori HTML in index.html (tag-uri corupte)
3. [P0] Sitemap.xml inexistent (Googlebot nu poate descoperi paginile)
4. [P1] llms.txt absent
5. [P1] robots.txt incomplet (7 AI crawlers blocati)
6. [P1] SPA CSR pur - risc indexare
7. [P1] Pagini B2B strategice inexistente (/servicii/*)
8. [P1] FAQPage schema lipseste pe homepage (6 FAQ-uri nevalorificate)
9. [P2] Article schema lipseste pe toate articolele
10. [P2] Multilingv fara URL-uri distincte pentru RU/EN
