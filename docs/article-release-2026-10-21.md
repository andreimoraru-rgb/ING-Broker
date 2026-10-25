# Approved editorial release — 21 October 2026

## Authorization and scope

Owner explicitly confirmed review of all ten articles, Moldova intermediation capability, and publication on ingbroker.md. Only the ten revised RO articles are released. One life guide; no salon/dental draft and no additional life-guide variants. Other RO and all RU/EN records remain unchanged. No insurance price, acceptance or claims guarantee is introduced.

## Search and reader experience

- Topic-specific original copy, visible FAQs, sources, descriptive filenames and image alt text; no keyword stuffing or invented demand figures.
- Article and Breadcrumb structured data, one H1, unique title/description, self-canonical, index/follow. No false hreflang links to non-equivalent translations.
- Full React-rendered article HTML at the same public URL, independent of JavaScript and identical for all user agents. Build-time artifacts are not separate public pages.
- Last-modified dates updated only for this batch in the existing sitemap. Original publication and source-consultation dates remain unchanged.
- Responsive editorial layout uses the existing Inter font/colors and owner-approved AI imagery with INGRe logo. Captions explicitly disclose AI illustrations.
- No changes to policy issuance, payments, forms or analytics configuration. No ranking, indexing or AI-citation guarantee.

## Verification and rollback

Run `npm run lint`, `npm run build`, `npx tsx scripts/test-content-recovery.ts` and `npx tsx scripts/test-editorial-release.ts`. Compare the ten routes on desktop/mobile and without JavaScript; check HTTP, metadata, image loading, overflow, source/contact links and sitemap after deployment.

Rollback is a Git revert of this release PR, restoring the previous content/template while preserving unrelated changes. The local workspace release report records final commit, PR, deployment and visual QA outcomes. This file describes the release contract, not an assertion that deployment has already completed.
