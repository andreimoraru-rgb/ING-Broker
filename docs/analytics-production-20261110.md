# Production measurement guard

Issue: GA4-NONPROD-CONTAMINATION-20261110. Owner explicitly requested remediation without deleting history.

- Only HTTPS ingbroker.md and www.ingbroker.md initialize the existing Google tags and PostHog.
- Localhost, Cloudflare previews, nonstandard ports and lookalike domains do not initialize production measurement.
- Controlled QA uses `?ing_qa=1` before loading the document, or a pre-document `window.__ING_ANALYTICS_QA__ = true`. It is not a persistent user filter. Ordinary visitor navigation remains measured.
- Existing vendor IDs, event names and payloads stay unchanged. The repeated Google initialization command is issued once. This does not certify that the remotely managed GTM container has no overlapping tags; inspect that container separately if duplicates are observed.
- No GA4 property, stream, key-event setting, historical record or permanent data filter is edited. Historical reports need the same production-hostname reporting filter in both comparison periods. This guard does not retroactively remove QA visits.
- For every automated browser QA context, block Google Analytics, Google Tag Manager, DoubleClick, Google Ads measurement, PostHog ingestion and Cloudflare Insights before navigation as a second safety layer. Never send a test form or contact a third party to validate a click.
- Public production reception still needs independent verification. Loading scripts or unit-test spies is not proof of server-side event receipt.

Scope: analytics bootstrap and analytics helper only. All articles, pictures, hero components, CSS, routing, dependencies, consent and forms are unchanged. Rollback: revert this PR; never delete Analytics history.

Official references checked 10 November 2026:
- https://developers.google.com/tag-platform/gtagjs
- https://support.google.com/analytics/answer/10104470?hl=en

Google warns that active exclusion filters permanently discard incoming data. No such filter is enabled here.
