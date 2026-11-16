# ING Broker - site corporativ

Site React/Vite, publicat din GitHub prin Cloudflare Pages. Nu modifica hero-ul, paleta sau designul global în cadrul corecțiilor editoriale.

## Pornire locală

Este necesar Node.js. După o clonare nouă:

```sh
npm ci
npm run sitemap
npm run dev
```

Comanda `sitemap` pregătește și indexul ușor al catalogului, corpurile separate ale articolelor și versiunile selectate pentru publicare. Aceste fișiere generate sunt excluse din Git. Ruleaz-o înainte de prima pornire locală sau de prima verificare TypeScript. Build-ul o rulează automat.

Site-ul comercial nu are nevoie de o cheie AI pentru funcționarea obișnuită. Nu configura chei secrete în build-ul frontend. Orice integrare AI nouă necesită o soluție server verificată separat și aprobările aplicabile.

## Verificare

```sh
npm run build
npm run lint
npx tsx scripts/test-audit-remediation.ts
```

Build-ul produce HTML inițial pentru articolele revizuite și rutele prioritare declarate în `src/data/staticRoutes.ts`. Nu considera un build reușit drept publicare sau indexare Google confirmată.

## Conținut și traduceri

- Sursele RO rămân în catalogul și fișierele editoriale existente, cu aceiași identificatori și aceleași adrese.
- Traducerile individuale sunt în `src/data/article-content/ru` și `src/data/article-content/en`.
- Numai versiunile selectate explicit în `src/data/translation-release.json`, care trec și controlul de pregătire, pot înlocui traducerile existente.
- Un fișier salvat sau `reviewStatus: approved` nu înseamnă publicare verificată. Sunt necesare revizia editorială, testele, previzualizarea și controlul live desktop/mobil.
- Păstrează condițiile și limitările, sursele și datele reale de revizie. Nu inventa disponibilitatea produselor, prețuri, calificări sau rezultate.

Publică prin branch și PR verificat. Păstrează istoricul pentru rollback. Nu include rapoarte interne, documente ale clienților sau secrete în repository-ul public.
