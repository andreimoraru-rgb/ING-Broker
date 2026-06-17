# Audit 01 - Tech Stack Inventory
# ingbroker.md Sprint 10 - 2026-06-18

## Framework si Stack

| Component | Detaliu |
|---|---|
| **Framework** | Vite 6.2 + React 19 + TypeScript 5.8 |
| **Routing** | React Router DOM v7.13 (BrowserRouter) |
| **Styling** | Tailwind CSS v4.1 + @tailwindcss/vite plugin |
| **Animatii** | Framer Motion (pachet: `motion` v12.23) |
| **SEO** | react-helmet-async v3 |
| **Icons** | lucide-react v0.546 |
| **AI** | @google/genai v1.47 (Gemini - folosit in AIStudio page) |
| **Build tool** | Vite 6.2 |
| **Deploy** | Cloudflare Pages (auto pe push main) |
| **Domain** | https://ingbroker.md |

## Renderizare: CSR SPA Pur

**CRITIC:** Site-ul este 100% Client-Side Rendering (CSR). Nu exista SSR sau SSG.
Implicatie SEO: Googlebot primeste HTML gol la prima cerere. Continutul
apare doar dupa executia JavaScript, cu intarziere de zile/saptamani in indexare.

## Sistem de Routing - Rute detectate (21 total)

```
/                          -> Homepage (inline in App.tsx)
/product/:category/:productId -> GenericProductPage
/business                  -> BusinessPage
/business/:productId       -> BusinessProductPage
/reinsurance               -> ReinsurancePage
/construction-shield       -> ConstructionShieldPage
/oferte                    -> OffersPage
/oferte/flote-auto         -> FleetAutoPage
/oferte/transportatori-auto -> FleetAutoPage (301 redirect)
/news                      -> NewsInsightsPage
/news/:slug                -> ArticlePage
/contact                   -> ContactPage
/ai-studio                 -> AIStudio
/admin/ai-tools            -> AdminAITools
/despre-noi                -> AboutPage (ro)
/o-nas                     -> AboutPage (ru)
/about-us                  -> AboutPage (en)
/termeni-si-conditii       -> TermsPage
/politica-de-confidentialitate -> PrivacyPage
/renewable-energy          -> RenewableEnergyPage
/property-assets           -> PropertyAssetsPage
```

## Sistem Multilingv

- Tip: State-based (`useState<Language>('ro')` in App.tsx), NU URL-based
- Exceptie: /despre-noi, /o-nas, /about-us au URL-uri distincte
- Limbi: RO (default), RU, EN
- **Problema SEO:** Google nu poate indexa versiunile RU/EN - nu au URL-uri unice

## Build si Deploy

- Build: `vite build` -> output `dist/`
- Deploy: Cloudflare Pages, automat la push pe `main`
- Routing SPA: `public/_redirects` cu `/* /index.html 200`

## Probleme identificate

| # | Problema | Severitate |
|---|---|---|
| P0 | CSR SPA pur - continut invizibil la crawlere fara JS | CRITIC |
| P0 | Telefon gresit in schema App.tsx: "+373 22 123 456" (placeholder) | CRITIC |
| P0 | Erori HTML in index.html: `</div>div>`, `</html>html>` | CRITIC |
| P1 | Nu exista sitemap.xml | INALT |
| P1 | llms.txt lipseste | INALT |
| P1 | robots.txt incomplet (lipsesc 7 AI crawlers) | INALT |
| P1 | Multilingv bazat pe state - versiunile RU/EN nu sunt indexabile | INALT |
| P2 | Nu exista pagini /servicii/ cu URL-uri SEO-optimizate B2B | MEDIU |
| P2 | Schema Organization duplicata in index.html SI App.tsx | MEDIU |
