# Indexing and crawlability audit — accident-claims-scotland.com (17 Nov 2026)

Full write-up: `/workspace/acs-audit.md`. Search Console baseline (last 3 months, sc-domain): 4 clicks, 16.1K impressions, average position 65; 115 indexed, 129 not indexed (61 of those 404). Sitemap has 123 URLs.

## What was already fine

- Sitemap lists the 123 indexable canonical URLs and omits the 10 noindex city pages and all 404 aliases.
- robots.txt allows search and retrieval crawlers, blocks training-only bots, and declares the sitemap.
- IndexNow is already configured (`85bbed6cbe5d11d11409a9d53b134cd2`).
- www already 301s to apex.
- The 11 noindex URLs are intentional: 10 thin city pages plus the `/404` template. Glasgow and Edinburgh stay indexable.

## What this change fixes

- Header "Claim Types" children and the mobile menu are now always in the server HTML (toggled with the `hidden` attribute), so the nine pillar links are visible to no-JS crawlers.
- Footer now also links the high-impression long-tail pages that were missing, including `/stress-at-work-claims-scotland` and `/school-accident-claims-scotland`.
- `public/_redirects` adds 301s from formerly used flat URLs and typo/planned slugs (for example `/mesothelioma-claims-scotland`, `/offshore-injury-claims-scotland`, `/guides/whiplash-claim-scotland-guide`, `/compare/no-win-no-fee-vs-legal-expenses-insurance-scotland`) to the closest live page. `/our-team` and `/reviews` are left as 404s — there is no genuine content to send them to.
- Trailing-slash URLs (`/about/`) now 301 rather than 308, in `functions/_middleware.js`.
- Internal href aliases go through `resolveInternalHref`, so stale labels such as "Offshore Accident Claims" become real links again rather than unlinked text.

## Left for later

- Money-page / guide pairs (road traffic, cycling, motorcycle, time limits, no win no fee) may explain "Google chose a different canonical" and some alternate-canonical rows. Do not merge them without a dedicated review.
- Publishing after merge is a Cloudflare Pages deploy; there is no Lovable publish step for this repo.
