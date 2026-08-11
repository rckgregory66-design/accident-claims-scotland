# Money Pages SEO Audit

Detected → accident-claims-scotland.com / Scotland, United Kingdom / Scottish personal-injury and accident-claims lead generation

Audit date: 11 August 2026

## Data sources and scope

DataForSEO authentication succeeded. DataForSEO Labs does not accept `Scotland` as a database location for `ranked_keywords`; the supported country database `United Kingdom` was therefore used while all evaluated queries remained Scotland-specific.

Paid calls used:

- Google UK `ranked_keywords/live`, positions 1–100, limit 1,000.
- Google Ads UK `search_volume/live` for 28 focused money terms and variants.
- Google UK `competitors_domain/live`.
- Google UK organic live SERPs for the four missing-page themes.

Total DataForSEO cost incurred: **$0.22136**. Null volume or CPC is reported as **null/unavailable**, never zero.

Repository and production evidence used:

- Production `robots.txt`, sitemap and live HTTP/title/canonical/robots checks.
- Repo routes, metadata, guides, road-traffic page data and sitemap generator.

## Critical technical finding

The production site and repo are out of alignment:

- `src/data/siteConfig.ts` declares `https://www.accident-claims-scotland.com`.
- Live www pages canonicalise to `https://accident-claims-scotland.com`.
- Both www and non-www return HTTP 200 instead of one redirecting to the other.
- The live sitemap uses non-www URLs, while `robots.txt` points to the www sitemap URL.
- The repo sitemap is designed to emit 63 URLs; production exposes 47.
- Ten detailed road-traffic routes exist in the repo but return production 404.
- Production lists three `/compare` URLs absent from the current repo routes.

This can split ranking signals and explains why DataForSEO reports ranking URLs across both www and non-www hosts.

## Measured domain performance

DataForSEO found **8 ranking keywords in positions 1–100**. The domain has no top-10 rankings and no position 11–30 rankings in the returned dataset.

| Keyword | UK volume | CPC | Position | Ranking URL |
|---|---:|---:|---:|---|
| injury at work scotland | 50 | $82.87 | 60 | `/accident-at-work-claims-scotland` (www) |
| injured at work scotland | 50 | $82.87 | 61 | `/accident-at-work-claims-scotland` (www) |
| accident at work scotland | 70 | $10.00 | 62 | `/accident-at-work-claims-scotland` (www) |
| accident claims scotland | 70 | $45.14 | 68 | homepage (non-www) |
| injury claims scotland | 70 | $29.44 | 81 | homepage (non-www) |
| medical negligence lawyer scotland | 210 | $21.05 | 88 | `/medical-negligence-claims-scotland` (www) |
| personal injury claim scotland | 170 | $36.77 | 91 | `/personal-injury-compensation-scotland` (www) |
| injury claim scotland | 70 | $29.44 | 98 | `/personal-injury-compensation-scotland` (www) |

## Money-page inventory and verdicts

| Category | Exists? | Best rank | Money keyword (volume; CPC) | Verdict |
|---|---|---:|---|---|
| Core accident claims | Yes: homepage | #68 | accident claims scotland (70; $45.14) | ⚠ improve (#68) |
| No Win No Fee | Yes: `/no-win-no-fee-solicitors-scotland` plus guide | None top 100 | no win no fee solicitors scotland (140; $50.07) | ⚠ exists, not ranking |
| Compensation / claim value | Yes: `/personal-injury-compensation-scotland` | #91 | personal injury claim scotland (170; $36.77) | ⚠ improve (#91) |
| Compensation calculator | No: candidate URL returns 404 | None | compensation calculator scotland (20; $7.35) | ✗ build |
| Am I eligible / can I claim? | No dedicated page; intent dispersed across FAQs | None | tested variants: volume/CPC null | ✗ build only after intent validation |
| Process / how it works | Yes: `/how-to-claim-compensation-scotland` | None top 100 | how to claim compensation scotland (null; null) | ⚠ exists, not ranking |
| Time limits / deadlines | Yes: `/personal-injury-claim-time-limits-scotland` plus guide | None top 100 | personal injury claim time limits scotland (null; null) | ⚠ exists, not ranking |
| Costs / funding / fees | Yes: no-win-no-fee page and guide | None top 100 | personal injury claim costs scotland (null; null) | ⚠ exists, not ranking |
| Types of claim / service range | Yes: personal-injury hub and service hubs | Site #81; hub none | personal injury claims scotland (170; $36.77) | ⚠ hub exists, not ranking |
| Reviews / testimonials | No: `/reviews` returns 404 | None | personal injury solicitor reviews scotland (null; null) | ✗ build only with verified reviews |
| About / team / E-E-A-T | Partial: `/about` exists; no named team page | None | personal injury solicitors scotland (90; $40.18) | ⚠ materially incomplete |
| Contact / free consultation | Yes: `/contact` with form | None | free personal injury consultation scotland (null; null) | ⚠ exists, not ranking |
| Locations / areas covered | Yes: 10 city pages | None | Glasgow (70; $14.05), Edinburgh (50; $9.94) | ⚠ exists, not ranking |
| Road traffic accident hub | Yes: `/road-traffic-accident-claims-scotland` | None | road traffic accident claims scotland (10; CPC null) | ⚠ exists, not ranking |
| Car accident detail page | Repo route exists; production returns 404 | None | car accident claims scotland (30; $54.62) | ⚠ built in repo, not live |
| Medical negligence | Yes: `/medical-negligence-claims-scotland` | #88 | medical negligence lawyer scotland (210; $21.05) | ⚠ improve (#88) |
| Accident at work | Yes: `/accident-at-work-claims-scotland` | #60 | accident at work scotland (70; $10.00) | ⚠ improve (#60) |
| Industrial disease | Yes: `/industrial-disease-claims-scotland` | None | industrial disease claims scotland (null; null) | ⚠ exists, not ranking |
| Serious injury | Yes: `/serious-injury-claims-scotland` | None | serious injury claims scotland (10; CPC null) | ⚠ exists, not ranking |
| Public-place accidents | Yes: `/public-place-accident-claims-scotland` | None | public place accident claims scotland (null; null) | ⚠ exists, not ranking |
| Criminal injury / CICA | Yes: `/criminal-injury-compensation-scotland` | None | criminal injury compensation scotland (590; $7.02) | ⚠ exists, not ranking |
| Detailed road-traffic cluster | 10 routes in repo; all return 404 live | None | car accident term measured; other exact terms mostly null | ⚠ built, not live/indexable |

No category qualifies as `✓ strong`: nothing ranks in the top 10.

## Opportunity calculation

For terms with both volume and CPC, this audit uses **volume × CPC** as a transparent commercial-intent index. It is not traffic, revenue or a forecast.

| Page/theme | Volume | CPC | Volume × CPC | Current state |
|---|---:|---:|---:|---|
| No Win No Fee | 140 | $50.07 | 7,009.80 | Live; no top-100 ranking |
| Personal injury claims | 170 | $36.77 | 6,250.90 | Hub not ranking; compensation URL #91 |
| Medical negligence lawyer | 210 | $21.05 | 4,420.50 | #88 |
| Criminal injury compensation | 590 | $7.02 | 4,141.80 | Live; no top-100 ranking |
| Personal injury solicitors Scotland / trust | 90 | $40.18 | 3,616.20 | About/team incomplete; service hub not ranking |
| Accident claims Scotland | 70 | $45.14 | 3,159.80 | Homepage #68 |
| Car accident claims | 30 | $54.62 | 1,638.60 | Repo page returns 404 live |
| Personal injury solicitors Glasgow | 70 | $14.05 | 983.50 | Page live; no top-100 ranking |
| Accident at work Scotland | 70 | $10.00 | 700.00 | #62 |
| Personal injury solicitors Edinburgh | 50 | $9.94 | 497.00 | Page live; no top-100 ranking |
| Compensation calculator | 20 | $7.35 | 147.00 | Missing |

Null figures are excluded from the multiplication rather than treated as zero.

## BUILD / FIX THESE FIRST

### 1. Fix hostname and deployment drift

Numbers behind priority: only 8 top-100 keywords; DataForSEO splits ranking URLs between www and non-www; 10 repo road pages return 404; production sitemap is 47 URLs versus 63 expected.

Brief: choose one host, 301 redirect the other, align canonicals/robots/sitemap, deploy the intended repo revision and verify every sitemap URL returns 200 and self-canonicalises.

### 2. Improve `/no-win-no-fee-solicitors-scotland`

Primary keyword: `no win no fee solicitors scotland` — volume 140, CPC $50.07, opportunity index 7,009.80, no top-100 ranking.

Brief: sharpen intent around Scottish success-fee agreements, deductions, outlays, adverse expenses, insurance, cancellation and questions before signing; strengthen prominent internal links from every claim hub and the contact journey.

### 3. Improve `/personal-injury-claims-scotland`

Primary keyword: `personal injury claims scotland` — volume 170, CPC $36.77, index 6,250.90. The intended hub does not rank; `/personal-injury-compensation-scotland` ranks #91 for the singular variant, indicating intent/cannibalisation problems.

Brief: make the hub the unambiguous primary page for general claims/solicitor intent, separate it from valuation intent, consolidate internal anchors and inspect title/H1/canonical signals.

### 4. Improve `/medical-negligence-claims-scotland`

Measured query: `medical negligence lawyer scotland` — volume 210, CPC $21.05, index 4,420.50, current position #88.

Brief: strengthen Scottish clinical-negligence service intent, verifiable reviewer credentials, NHS/private pathways, expert-evidence process and contextual links from the GP, NHS, birth-injury, prescription-error and cancer-misdiagnosis guides.

### 5. Improve `/criminal-injury-compensation-scotland`

Primary keyword: `criminal injury compensation scotland` — volume 590, CPC $7.02, index 4,141.80, no top-100 ranking.

Brief: align the page tightly to CICA eligibility, reporting/cooperation, two-year timing, tariff/application process and the difference between CICA and civil claims; benchmark official sources that dominate this intent.

### 6. Improve core homepage targeting

Primary keyword: `accident claims scotland` — volume 70, CPC $45.14, index 3,159.80, position #68.

Brief: resolve host duplication first, then clarify the homepage's Scotland-wide proposition, entity/operator trust, claim-type pathways and enquiry action without competing with the personal-injury hub.

### 7. Publish the road-traffic detail cluster

Lead measured term: `car accident claims scotland` — volume 30, CPC $54.62, index 1,638.60. The repo page exists but returns 404 production.

Exact live slugs required:

1. `/car-accident-claims-scotland`
2. `/pedestrian-accident-claims-scotland`
3. `/passenger-accident-claims-scotland`
4. `/uninsured-driver-claims-scotland`
5. `/hit-and-run-claims-scotland`
6. `/serious-road-traffic-injury-claims-scotland`
7. `/fatal-road-accident-claims-scotland`
8. `/road-defect-accident-claims-scotland`
9. `/child-road-accident-claims-scotland`
10. `/early-insurer-offers-road-accident-scotland`

Brief: deploy the existing routes, add them to the canonical production sitemap and verify 200/indexable/self-canonical responses. Do not recreate content already present in the repo.

### 8. Improve `/accident-at-work-claims-scotland`

Measured term: `accident at work scotland` — volume 70, CPC $10.00, index 700.00, position #62. Higher-CPC variants `injury at work scotland` and `injured at work scotland` rank #60/#61 with volume 50 and CPC $82.87 each.

Brief: expand query matching around injured-at-work eligibility and evidence, reinforce specialist guide links and preserve a clear enquiry path.

### 9. Build `/compensation-calculator-scotland`

Primary keyword: `compensation calculator scotland` — volume 20, CPC $7.35, index 147.00.

Brief: create an educational claim-components tool, not a settlement promise. Explain solatium and evidenced past/future losses, disclose limitations and route results to relevant guides/enquiry.

Top competitor pages for this exact query:

- #1 `https://www.thompsons-scotland.co.uk/compensation-calculator`
- #2 `https://www.dallasmcmillan.co.uk/personal-injury/compensation-calculator/`
- #3 `https://www.scotlandclaims.co.uk/compensationcalculator.aspx`

### 10. Eligibility page: validate before building

Candidate slug: `/can-i-make-a-personal-injury-claim-scotland`.

All tested eligibility variants returned null volume/CPC. The broader query `can i claim compensation scotland` has mixed intent: its top four results concern criminal-injury/victim compensation, not general personal injury. Do not target that wording with a generic page without Search Console evidence.

Observed SERP competitors for the broader query:

- #1 `https://www.mygov.scot/compensation-criminal-injury`
- #2 `https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority`
- #5 `https://www.thompsons-scotland.co.uk/compensation-claims-new`

### 11. Team and reviews: trust assets, not unsupported SEO pages

`personal injury solicitors scotland` has volume 90 and CPC $40.18, but the top results are service/home pages, not team pages. Improve `/about` with verifiable operator, author and reviewer credentials and connect it to the primary service hub. Create `/our-team` only when genuine profiles are available.

Top competitors:

- #1 `https://www.harpermacleod.co.uk/expertise/individuals-families/personal-injury-claims-scotland/`
- #2 `https://www.thompsons-scotland.co.uk/`
- #3 `https://www.digbybrown.co.uk/`

The reviews query has null volume. Its SERP is led by third-party review platforms and firms with established reputational evidence. Build `/reviews` only with genuine, authorised reviews.

Review SERP examples:

- #1 `https://uk.trustpilot.com/review/www.thompsons-scotland.co.uk`
- #4 `https://www.digbybrown.co.uk/why-would-you-use-digby-brown`
- #5 `https://www.reviewsolicitors.co.uk/top/personal-injury/city-centre`

## QUICK WINS

There are **no position 11–30 pages** in DataForSEO's full returned top-100 dataset, so no evidence-backed quick wins meet the requested definition.

The nearest measured pages are still far outside quick-win range:

- Accident at work: #60–62.
- Homepage/core accident claims: #68 and #81.
- Medical negligence: #88.
- Compensation/personal injury: #91 and #98.

These are improvement projects, not small top-10 pushes.

## Domain competitors

DataForSEO `competitors_domain` returned 136 competitors. Leading relevant domains in the first returned set include:

| Domain | Average position across intersections | Organic keyword count | Estimated organic traffic (ETV) |
|---|---:|---:|---:|
| digbybrown.co.uk | 2.875 | 1,615 | 8,123.57 |
| thompsons-scotland.co.uk | 2.875 | 1,632 | 15,850.50 |
| harpermacleod.co.uk | 8.875 | 3,990 | 26,925.25 |
| irwinmitchell.com | 11.000 | 16,351 | 188,433.02 |
| slatergordon.co.uk | 13.500 | 11,512 | 128,242.72 |
| 100compensationscotland.co.uk | 28.625 | 44 | 10.18 |
| watermans.co.uk | 44.875 | 1,553 | 6,109.85 |
| scottishclaimshelpline.co.uk | 46.625 | 234 | 255.50 |

These metrics describe each competitor's broader UK organic footprint, not traffic for one query.

## Prioritised execution order

1. Resolve www/non-www and live/repo deployment drift.
2. Improve No Win No Fee.
3. Correct personal-injury hub versus compensation-page intent/cannibalisation.
4. Improve medical negligence.
5. Improve criminal injury/CICA.
6. Improve homepage/core accident claims.
7. Publish the ten existing road-traffic detail pages.
8. Improve accident at work.
9. Build the cautious compensation calculator.
10. Enhance verifiable E-E-A-T on About; add Team/Reviews only when evidence exists.
11. Defer a standalone eligibility page until query data confirms a distinct intent.

No source files were edited and no deployment was performed as part of this audit.
