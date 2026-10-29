# Measurement spec and keyword-to-page map (29 Oct 2026)

Status: **hypotheses and a specification, not results.** No Search Console, analytics, CRM, backlink or
AI-citation account was accessed. No volumes, rankings, competitor page reviews or live delivery tests are
claimed. Competitor review (Digby Brown, Thompsons Scotland) has **not** been done.

## Keyword-to-page map (target-intent hypotheses)

Confidence = confidence the page matches the intent. Effort = work still needed. Demand/difficulty: not measured.

| Query family | Intent | Existing route | Decision | Conversion potential | Effort | Confidence |
|---|---|---|---|---|---|---|
| personal injury claims Scotland | Informational/commercial | /personal-injury-claims-scotland | Improve | High | Low | Medium |
| accident claims Scotland | Commercial | / and /personal-injury-claims-scotland | Improve (home is information-led; keep pillar as destination) | High | Low | Medium |
| road traffic accident claims Scotland (car, passenger, pedestrian) | Commercial | /road-traffic-accident-claims-scotland + flat children | Improve | High | Medium | Medium |
| cycling / motorcycle claims | Commercial vs how-to | flat pages (overview) + /guides/… (evidence) | Done: distinct titles, cross-linked | Medium | Low | Medium |
| accident at work claims Scotland; manual handling; falls from height | Commercial | /accident-at-work-claims-scotland, /manual-handling-…, /work-at-height-… | Improve; checklist added to guide | High | Medium | Medium |
| no win no fee solicitors Scotland | Commercial/funding | /no-win-no-fee-solicitors-scotland | Improve; page cannot promise representation | Medium | Low | Medium |
| medical negligence; delayed diagnosis; dental; hospital infection | Commercial | pillar + 3 specialist pages | Improve | Medium | Medium | Medium |
| industrial disease; asbestos | Commercial | /industrial-disease-claims-scotland, /guides/asbestos-… | Improve | Medium | Medium | Medium |
| serious injury; long-term care | Commercial | /serious-injury-claims-scotland + children | Improve; fatal route now in nav | High | Low | Medium |
| personal injury time limits Scotland | Informational | /personal-injury-claim-time-limits-scotland | Improve; verify high-risk wording | Medium | Medium | High |
| evidence, process, compensation | Informational | guides, calculator/planner | Planner checklist done | Medium | Low | Medium |
| [city] accident claims (12 cities) | Local | 12 location pages | Keep; no new town combos | Low-Medium | Low | Low |

Not recommended now: new England-and-Wales pages, mass town-by-claim pages, construction/offshore pages
until enquiry-handling capability for them is confirmed.

## Events (privacy-conscious)

`src/lib/events.ts` dispatches an `acs:event` window event. **No analytics tool is installed**, so nothing is
sent anywhere today. Events: `cta_click` (location only), `form_start`, `form_submit_success`
(= delivery request accepted by the worker, **not** confirmed inbox delivery), `form_submit_error`
(reason: network / rejected / server). Parameters are allow-listed; no names, contact details, dates,
free text or checklist selections. To connect a tool, add a listener for `acs:event` after consent
behaviour is decided, and update the cookie policy first.

## Monthly report

1. Search Console: clicks, impressions, CTR, position by landing page and query group; branded vs non-branded.
2. Index coverage issues, sitemap/404/redirect health, affected commercial routes.
3. Organic landing sessions, successful enquiries (`form_submit_success`), conversion rate with one fixed denominator (organic landing sessions).
4. Qualified enquiries and accepted cases, from the intake records kept by whoever receives enquiries (currently Rick forwards them to Thompsons Solicitors); these are not site analytics.
5. AI referrers visible in analytics, plus a small dated sample of AI answers with cited URLs (incomplete attribution; Google AI-feature traffic cannot be isolated).
6. Content updates, delivery failures (compare worker 5xx and Resend dashboard with received emails), Lighthouse/accessibility changes (lab data, separate from field CWV).

Baseline: compare the 28 days before deployment with each following 28 days, and year-on-year if data exists;
note seasonality and small samples. **Deployment date: 29 Oct 2026** (main at ac9ad13; anchor fix ed5094b). Live form delivery confirmed by a test enquiry the same day. Each month, pick the next three
improvements from observed bottlenecks.

## Crawler policy

See comments in `public/robots.txt`. Google-Extended is currently allowed (covers Gemini training and grounding);
GPTBot, CCBot, ClaudeBot and similar training crawlers are blocked. Whether to change this is the owner's decision.
Retrieval-oriented tokens for some providers exist (e.g. Claude-User, Claude-SearchBot); they are not listed
in robots.txt and fall under the `*` group (allowed). A permissive robots file does not prove Cloudflare firewall
access; check Cloudflare bot settings separately.
