# Growth plan and Claude Code master prompt (29 October 2026)

Site: https://accident-claims-scotland.com · Repo: `rckgregory66-design/accident-claims-scotland` · Operator: Ola Consultants Ltd (information site, not a law firm).

Builds on `reports/audit-2026-09-20/audit.md`, `reports/phase2-build-log-2026-09.md` and `reports/audit-2026-09-27/audit.md`. It does not repeat what those closed.

Evidence used: a crawl of the static export (133 HTML documents, 123 indexable), DataForSEO ranked keywords, Google Ads volumes and a live SERP for the largest head term (UK, October 2026), a DataForSEO backlink summary, and primary sources on legislation.gov.uk and GOV.UK. Search Console data was **not** available (the Ahrefs GSC tools are not on the current plan), so there is no traffic or click baseline in this report.

---

## A. Website growth opportunity summary

The site is technically sound and unusually deep for its age: 0 broken internal links, one H1 and a self-canonical on every indexable page, FAQPage schema on 124 pages, static HTML that needs no JavaScript to read, robots and `llms.txt` aligned with a deliberate AI-crawler policy, and a CI check that blocks placeholder copy and unsupported regulatory claims.

Content is not the constraint. **Authority is.** The site ranks between roughly position 36 and 90 for every head term it appears for. Its backlink profile is 35 referring domains, all generic `.com`, `.shop` and `.site` hosts, with a DataForSEO spam score of 62 and nothing from Scottish legal, news, charity or public-sector sources. The pages that win these SERPs (Thompsons Scotland, Digby Brown, GOV.UK, mygov.scot, Victim Support Scotland) win on trust signals the site does not yet have.

The second constraint is **conversion ownership**. The site says it is not a law firm and that outcomes are not guaranteed, which is right, but the open business decisions from September (who receives enquiries, contact details, a named reviewer) still decide whether traffic can become revenue.

Commercially, the biggest single prize is criminal injuries compensation. It has more search demand than every personal injury head term combined, and the SERP is mostly government and charity pages with only two law firms.

## B. Priority growth opportunities

UK monthly search volumes from Google Ads via DataForSEO (October 2026). Positions are DataForSEO's last observed rank.

| Query | Volume | Current position | Page | Assessment |
|---|---|---|---|---|
| criminal injuries compensation scotland | 480 | ~88 (for a close variant) | `/criminal-injury-compensation-scotland` | Largest prize. Content is accurate and deep; needs authority and an exact-intent title (done today). |
| personal injury claims scotland | 210 | ~78 (wrong page ranking) | `/personal-injury-claims-scotland` | Fixed on 29 Oct by consolidating anchors to the hub. Watch which URL Google picks. |
| medical negligence solicitors scotland | 140 | not ranking | `/medical-negligence-claims-scotland` | High intent, but "solicitors" wording conflicts with not-a-law-firm status. Win the informational variant; do not claim to be solicitors. |
| no win no fee solicitors scotland | 140 | 36 | `/no-win-no-fee-solicitors-scotland` | Best-placed commercial page. Authority and on-page proof will move it. |
| personal injury solicitors scotland | 90 | not ranking | (hub) | Same "solicitors" constraint. |
| personal injury compensation calculator | 90 | not ranking | `/compensation-calculator-scotland` | Page is a planner (correctly: no invented valuations). Only build a real estimator from a licensed, current source. |
| whiplash compensation calculator | 70 | not ranking | `/guides/whiplash-claims-scotland` | Distinctive angle: the English whiplash tariff does not apply in Scotland (verified, see below). |
| whiplash claim scotland | 50 | not ranking | `/guides/whiplash-claims-scotland` | Same page; strengthen with the verified extent point. |
| personal injury solicitors glasgow / edinburgh | 50 each | not ranking | city pages | Worth keeping indexed. |
| personal injury solicitors aberdeen / dundee | 10 each | n/a | noindex city pages | Demand is too low to justify thin city pages. Keep noindex. |

Live People-Also-Ask for the CICA term (all now answered on the hub): how long CICA takes to pay, how much compensation, why CICA rejects claims, whether to accept the first offer, whether you need a solicitor.

**Content gaps worth building** (each is a distinct intent, not a rewrite):

1. CICA payout timing and interim payments, but only from a primary CICA source (GOV.UK does not state decision times; the "make a claim" page only gives a 10-working-day reply time for enquiries).
2. A Scottish procedure explainer: the compulsory pre-action protocol for lower-value claims, the All-Scotland Sheriff Personal Injury Court, and privative jurisdiction. Verify each figure against legislation.gov.uk and SCTS before publishing.
3. An original data page built from Transport Scotland road casualty statistics and HSE RIDDOR data for Scotland, as a citable asset for journalists and AI answers (the existing statistics page is the natural home).

**Conversion gaps:** no named reviewer or author on YMYL pages; enquiry routing undecided; 10 indexable pages have no form (legal and policy pages, which is correct).

## C. Customised Claude Code master prompt

Copy everything inside the fence into a new Claude Code session that has this repository attached.

```text
You are working on accident-claims-scotland.com, a Next.js 16 static-export site
deployed to Cloudflare Pages from the main branch of
rckgregory66-design/accident-claims-scotland. Read AGENTS.md first: this Next.js
version has breaking changes, so check node_modules/next/dist/docs before writing
framework code.

BUSINESS CONTEXT
- Operator: Ola Consultants Ltd. The site is an information website about personal
  injury and compensation claims under Scots law. It is NOT a law firm and must
  never say or imply it is ("our solicitors", "we handle", "we will assess").
- Revenue model: qualified enquiries passed to a claims partner. Who receives
  enquiries is an open business decision; do not invent a partner, phone number,
  address, SRA/Law Society status, testimonial or case result.
- Audience: people in Scotland injured in road, workplace, public-place, medical,
  industrial-disease, serious-injury and criminal-injury (CICA) situations, and
  their families. YMYL: accuracy beats volume.
- Market: Scotland only. Never import England-and-Wales rules (whiplash tariff,
  Official Injury Claim portal, Highways Act s.58, CPR).

READ BEFORE ACTING
reports/audit-2026-09-20/audit.md, reports/phase2-build-log-2026-09.md,
reports/audit-2026-09-27/audit.md, reports/growth-plan-2026-10-29.md. Do not redo
work those files mark as fixed.

EXECUTION RULES (prevent analysis paralysis)
1. Audit quickly, then act: a 20-minute crawl of the build is enough to start.
2. Proportionate verification. Level 1 routine copy: editorial check only.
   Level 2 factual claims: check one reliable source. Level 3 legal deadlines,
   statutes, award figures, court jurisdiction, scheme rules: verify against
   legislation.gov.uk, GOV.UK, mygov.scot, SCTS, HSE or NHS inform, record the
   source in the page's sources list, or leave the claim out.
3. Never invent statistics, valuations, quotes, credentials or reviews.
4. Work in batches: objective, change, test, commit, report, next.
5. Preserve URLs, titles that rank, schema, and the enquiry worker. No URL moves
   or redirects without Rick's approval.
6. A blocker on one page does not block unrelated work.
7. Make decisions; recommend one option with a one-line reason.
8. Branch and open a PR. Do not merge to main or deploy without approval.

LOCAL BUILD NOTE
If Google Fonts is unreachable in the sandbox, stub the Inter import in
src/app/layout.tsx for the build only and restore it before committing.
Quality gate: npm run check (placeholders, lint, typecheck, build,
check:pillars) must pass before every commit.

PHASE 1 - AUDIT (time-boxed)
Build, then crawl out/: titles, meta descriptions, H1s, canonicals, robots,
JSON-LD types and parse errors, internal links (broken, orphans, inlinks per
page), word counts, duplicate titles across URLs. Compare against the last
audit. Output a short table of NEW issues only.

PHASE 2 - ACCURACY AND TRUST
Scan for: law-firm language, guarantees, unsourced award amounts, English-law
leakage, outdated scheme figures. Fix Level 3 items with a primary source or
remove them. Log anything needing a Scottish solicitor in a review list.

PHASE 3 - SEARCH INTENT
Use the dataforseo MCP (location United Kingdom) for ranked keywords, volumes
and live SERPs with People-Also-Ask. Map each query cluster to ONE owning URL.
Fix cannibalisation by re-angling and re-anchoring before considering redirects.
Priority clusters: criminal injuries compensation; personal injury claims;
no win no fee; medical negligence; whiplash Scotland; compensation calculator.

PHASE 4 - AI SEARCH (AEO/GEO)
Every money page opens with a 40-60 word direct answer, uses question-led H2s
that mirror real PAA wording, states the Scots-law distinction explicitly, and
cites a primary source. Keep RagAnswerCapsule, Speakable and llms.txt in sync
with titles. Treat llms.txt as experimental. Do not promise citations.

PHASE 5 - ARCHITECTURE
Six pillars with children under /{pillar}/{child} via src/lib/pillarChildRoute
and src/data/pillars/*.ts; road traffic uses flat URLs (leave them). Add a child
only for a distinct intent with demand. Every child: 6-7 FAQs, sources, hub and
sibling links, sitemap and llms.txt entries (check:pillars enforces this).

PHASE 6 - CONTENT QUALITY
British English, plain language, no filler. Do not lengthen strong pages. Each
page answers its query in the first screen and ends with a relevant next step.

PHASE 7 - INFORMATION GAIN
Build only from real data: (a) Scotland injury statistics page from Transport
Scotland and HSE RIDDOR releases, with method notes and download links;
(b) CICA tariff explainer quoting Annex E of the Scheme with exact figures and
the source; (c) a Scottish procedure explainer (pre-action protocol, Personal
Injury Court, privative jurisdiction) with every figure verified.

PHASE 8 - STRUCTURED DATA
Keep Organization (with logo and Companies House identifier), WebSite,
WebPage, BreadcrumbList, Article and FAQPage. Do not add LegalService,
AggregateRating or Review. Add a Person reviewer only once a real, consenting,
verifiable reviewer exists.

PHASE 9 - TECHNICAL
Confirm sitemap lastmod reflects real edits, robots policy unchanged unless
asked, CSP still allows the enquiry worker, Early Hint fix holds, IndexNow runs
after deploy (npm run indexnow).

PHASE 10 - AUTHORITY
Draft (do not send) an outreach list and pitches for: the statistics asset to
Scottish local and trade press; resource-page links from Scottish advice
charities and university law clinics where genuinely useful; corrections to
outlets that misstate Scots-law rules. Flag the spammy backlink profile for a
manual review; do not disavow without approval.

PHASE 11 - CONVERSION AND DESIGN
Check the enquiry form end to end on a preview, reduce fields to essentials,
make the mobile sticky CTA context-aware (CICA pages should not promise a
civil claim), and keep the visual language restrained and editorial rather
than template-like. No stock imagery of injuries.

PHASE 12 - IMPLEMENTATION ORDER
P0 accuracy errors and broken functionality; P1 money-page intent and
cannibalisation; P2 information-gain assets, schema and links; P3 experimental
AI-search work. Report after each batch with test results.

PHASE 13 - MEASUREMENT
Do not fabricate baselines. If Search Console access is available, record
clicks, impressions and positions for the priority clusters on the day work
ships, then monthly. Track enquiries by source page via the enquiry worker.
Re-run the dataforseo ranked-keywords check monthly and log it in reports/.

REPORTING
End each session with: what shipped (commits), what was verified and against
which source, what is blocked and why, and the next three batches.
```

## D. Recommended execution sequence

1. **Shipped today (this PR):** cycling and motorcycle cannibalisation resolved; Personal Injury Court location corrected; CICA hub retitled to the searched wording with three PAA answers. See "Changes in this PR".
2. **Business decisions (Rick, blocks conversion work):** who receives enquiries; whether a Scottish solicitor will review and be named; contact details. Without these, traffic gains cannot be monetised or trusted.
3. **Authority (biggest ranking lever, weeks to months):** build the Scotland statistics asset first, because it is the only thing on the site a journalist or charity would link to. Then outreach.
4. **Content gaps in section B,** each verified at Level 3 before publishing.
5. **Measurement:** connect Search Console API access (or export monthly) so the next review has a real baseline.

Dependencies: named reviewer before any Person schema; verified sources before any procedure or CICA timing page; Rick's approval before any URL change.

## Changes in this PR

| Batch | Change | Why |
|---|---|---|
| 1 | Guides at `/guides/cycling-accident-claims-scotland` and `/guides/motorcycle-accident-claims-scotland` retitled to their evidence and liability angle; they now link to the road pages as parent; road-defect and passenger pages link to the cycling, motorcycle and bus pages. `llms.txt` updated. | Two URLs per topic shared one title and one intent. The road pages had 1 inlink each; now 3 (cycling, motorcycle) and 2 (bus). Content overlap was low (about 18% similar), so re-angling is enough and no redirect is needed. |
| 2 | "Do I need to go to court" guide: the Personal Injury Court sits at Edinburgh Sheriff Court, not Hamilton. | Factual error. Source: SSI 2015/213, article 2. |
| 3 | CICA hub: title and H1 use "criminal injuries"; new description; three FAQs (need a solicitor, accept the first decision, why claims are refused), which also appear in FAQPage schema (8 questions). | Largest head term on the site. Solicitor answer from GOV.UK ("You do not have to use a legal adviser... you cannot claim the cost back"). Review and appeal limits match the criminal injury pillar content already on the site. |

Verified for this report: Civil Liability Act 2018, s.13(1) — the Act "extends to England and Wales only", subject to listed exceptions that do not include the whiplash provisions.

Not done, deliberately: meta descriptions over 160 characters on about 60 pages (Google rewrites most of them; mass edits add churn for little gain); titles over 60 characters (same reason); un-noindexing Aberdeen, Dundee and other city pages (about 10 searches a month each).

## Sources

- [legislation.gov.uk: Civil Liability Act 2018, section 13](https://www.legislation.gov.uk/ukpga/2018/29/section/13/data.htm?view=plain)
- [legislation.gov.uk: SSI 2015/213, article 2](https://www.legislation.gov.uk/ssi/2015/213/article/2/data.html)
- [GOV.UK: Claim compensation for a criminal injury, make a claim](https://www.gov.uk/claim-compensation-criminal-injury/make-claim)
- DataForSEO: Google Ads search volume, Labs ranked keywords, live SERP, backlinks summary (UK, retrieved 29 October 2026)
