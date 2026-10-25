# Content recovery — draft for owner and specialist review

## Release approval — 2026-10-21 (supersedes historical HOLD below)

The owner explicitly confirmed reviewing all ten revised articles and that ING Broker can intermediate the products in Moldova, and instructed publication. The approved batch excludes beauty salons, dental benefits and the three extra life-topic revisions. The ten records now have `reviewStatus: approved` and `updatedAt: 2026-10-21`. Original source-consultation dates and publication dates are preserved. Approval is not a guarantee of insurer acceptance, coverage, Google indexing or AI citations. Release evidence is recorded separately in `docs/article-release-2026-10-21.md`.

Date: 2026-10-15. Base: `b25ab8f` on origin/main. Branch: `codex/content-recovery-2026-10-15`.

Latest scope update 2026-10-16: **10 local drafts**, 194 other RO records unchanged. One general `asigurare-viata-moldova` replaces the four life-topic revisions. Dental benefits and beauty salons are excluded from the batch. Life insurance is explicitly distinct from accident insurance, supported by local BNM/GRAWE sources. The remaining nine drafts are HOLD: verify Moldova availability, ING intermediation capability and local demand before selecting topics for publication; foreign sources alone do not satisfy this gate. No production pages were deleted or published. Existing excluded URLs remain untouched. Earlier 15-article counts and QA below are historical, not the current batch.

## Scope and evidence

Authenticated Search Console report, last updated 2026-10-09: 456 excluded URLs (14 crawled/not indexed; 6 discovered/not indexed; 174 duplicates without selected canonical; 248 Google-selected alternative canonical; 6 proper alternate; 4 noindex; 4 redirects). Fifteen current Romanian article URLs occur in the first two groups. All 15 were inspected live on 2026-10-15: HTTP 200, self-canonical, index/follow and generic repeated content. The report does not prove that content is the sole cause of exclusion.

This draft replaces those 15 existing RO articles, not 456 pages. IDs, URLs, images, original date fields, 189 other RO records and all 198 RU + 198 EN records are preserved. No original publication date was independently authenticated; its previous value is retained and normalized only for revised Article JSON-LD. The revision date is 2026-10-15, not a claim that this draft is live.

## Editorial changes

- Topic-specific answers and practical preparation checklists, 45 visible FAQ answers, contextual related-article/contact links, unique descriptions/titles and source references.
- Removed unsupported leadership, universal availability, guaranteed outcomes, price and retention claims from the selected articles. No new quotes, premiums, statistics or availability promises.
- Topics: D&O, business interruption, surety, employer liability, environmental remediation, employee dental benefits, roads, bridges/tunnels, irrigation, greenhouses, beauty salons, mortgage life, family life, diaspora life and business-owner life.
- No automatically translated equivalents. Authorship proposed as the editorial organization, not a fictitious named specialist. Drafts were prepared with AI assistance. No human/legal review is claimed.

## Technical changes

- Revised articles own their Article/Breadcrumb metadata; global homepage FAQ/HowTo is suppressed only on the selected RO routes.
- Do not advertise nonexistent/unreviewed RU/EN equivalents through hreflang for this lot. Existing behavior on other routes is preserved.
- Canonical and article/breadcrumb URLs use www consistently. Article headline matches the visible H1; revision date is shown and used in dateModified. Article image is used for social metadata.
- React 19's native metadata does not remove the static shell defaults. Marked static metadata is removed only while viewing a revised article and restored on departure, preventing duplicated titles/descriptions in this batch. Shell fallback values are not rewritten.
- Small-screen back-button positioning is adjusted only for this batch to avoid obscuring the date. No hero image, brand colors, forms or payment/issuance logic changed.
- All 15 URLs already exist in the sitemap. No sitemap regenerated, no redirect/canonical/noindex mass changes, no Search Console validation or indexing requests submitted.

## Research and limits

Firecrawl MCP returned 402 (credits); CLI was not authenticated. Transparent browser/web fallback, public pages only, robots checked, no contact or personal-data collection. Four entities examined in depth, one additional exploratory entity searched. Original checklists are editorial recommendations, not copied policy wording.

- BNM (MD), contract-reading guidance: https://bnm.md/ro/content/care-sunt-elementele-unui-contract-de-asigurare-si-la-ce-sa-fim-atenti-cand-il-semnam
- MOLDASIG (MD), property/machinery/interruption: https://moldasig.md/property-insurance-for-legal-persons
- GRAWE (MD), life categories: https://www.grawe.md/asigurare-viata/
- Marsh (RO), surety: https://www.marsh.com/ro-ro/services/surety.html
- Marsh (RO), environmental risk: https://www.marsh.com/ro-ro/services/environmental-risk.html
- Marsh (RO), construction: https://www.marsh.com/ro-ro/industries/construction.html
- Allianz-Țiriac (RO), D&O IPID version 01.10.2018: https://www.allianztiriac.ro/content/dam/onemarketing/cee/azro/documente/ipid/IPID_Raspundere_civila_a_managerilor_ALLIANZ_PROTECT.pdf — historical version currently accessible, explicitly limited eligibility outside Romania; NOT a current Moldova offer.
- Google AI guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google FAQ feature status: https://developers.google.com/search/updates — no FAQ rich-result promise or new FAQPage markup.

## Three review passes

1. Factual/source pass: distinguished source facts from original questions/checklists; flagged foreign territorial limits and old IPID version; did not invent local product availability.
2. Risk-language pass: removed guarantees and unsupported statistics; separated broker/insurer roles and made contract-dependent limits explicit. This is editorial screening, NOT a legal opinion or specialist approval.
3. Editorial/technical pass: distinct intent, direct lead, H2/H3, useful FAQ, source/CTA links; automated checks and desktop/mobile browser tests. No guarantee of indexing, traffic, AI citation or revenue.

## Tests and reproduction

- `npm ci --ignore-scripts` (lockfile unchanged).
- `npm run lint` and `npm run build`.
- `npx tsx scripts/test-content-recovery.ts`: 15 replacements; 189 RO / 198 RU / 198 EN unchanged; stable URL/ID/image/date/tags; sitemap entries; valid related URLs; no embedded H1 or generic promise snippets.
- Browser QA at 1440px and 390px for all 15 routes: single H1/title/description/canonical; zero invalid language alternates; no horizontal overflow; 3 visible questions each; Article + Breadcrumb; no unrelated homepage FAQ/HowTo; no page errors. Route return to homepage restores static defaults; return to revised article removes them again.
- `git -c core.whitespace=cr-at-eol diff --check` (repository uses CRLF).

Known issues: build warns about ~1.6 MB JavaScript bundle; npm audit reports 18 dependency vulnerabilities (2 critical), with package manifests/lockfile unchanged. Exploitability/deployed reachability was not established; dependency triage is a release gate, not automatically fixed in an editorial change. This is a rendered-browser check, not a substitute for Google's live URL Inspection. Unrelated global Organization metadata and other generic articles still need separate review.

## Mandatory approval before release

- [ ] Owner approves each revised topic and the editorial organization attribution.
- [ ] Qualified reviewer validates definitions/distinctions, contract language, privacy instructions and relevant MD requirements. No reviewer is named before their actual review.
- [ ] ING confirms whether it can analyze/intermediate the requested product structures; change or remove any unsuitable CTA/topic.
- [ ] Review 2018 RO D&O reference; replace with a suitable current source if it cannot be retained as a clearly labeled comparative example.
- [ ] Triage dependency findings before deployment; document applicability/remediation.
- [ ] Check analytics reception using non-sensitive test parameters after approved deploy; do not interpret tests as leads.

## Post-approval and rollback

Do not merge this draft without the gates above. After approval, deploy the chosen subset, verify content/metadata/links/mobile and analytics live, then use GSC URL Inspection and authorized indexing requests where appropriate. Compare indexation and per-page/query/country impressions/clicks at 14/28 days; no new scheduled monitor was created. Roll back through a revert PR for the merge commit, not a reset of user files. No production deployment was performed during preparation.

Local evidence and 456-row triage are retained in the project output folder `outputs/content-recovery/2026-10-15/`; they are not included in the public repository.
