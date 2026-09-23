# Phase 2 build log: pillar and child content (23 to 26 September 2026)

Site: https://accident-claims-scotland.com. Builds on `reports/audit-2026-09-20/audit.md`. Batches 1 to 5 of that audit had already shipped; this log covers Batches 6 to 10.

## What shipped

Architecture: five existing pillar hubs now each have child pages one level below at `/{pillar}/{child-slug}`. All children render through one template (`src/lib/pillarChildRoute.tsx` and `ClaimPageTemplate`), with content held as typed data in `src/data/pillars/*.ts`. Each child has 6 to 7 FAQs (visible and in FAQPage JSON-LD), Article, BreadcrumbList, WebPage and sitewide Organization schema, a breadcrumb and "More in" grid back to the hub and siblings, and a sourced "authoritative sources" list. The hubs link out to every child. Children are in `sitemap.xml` and `llms.txt`.

| Batch | Pillar | Pages | Commit |
|---|---|---|---|
| 6 | Industrial disease | mesothelioma, pleural plaques, asbestosis, pleural thickening, RSI, tracing employers' liability insurers | 890b85a |
| 7 | Accident at work | factory, farm, warehouse, defective equipment, slips and trips, reporting (RIDDOR) | b150e98 |
| 8 | Medical negligence | surgical, hospital, misdiagnosis, informed consent (Montgomery), NHS complaints and duty of candour, fatal claims | da89612 |
| 9 | Serious injury | brain, spinal, amputation, burns, CRPS, discount rate and periodical payments, capacity and guardianship | 51f133b |
| 10 | Public place | council, ice and snow, occupiers' liability explained, restaurant/pub/café, sports and leisure | 852dc4d |

30 child pages in total. Sitemap grew from 73 to 113 URLs. Each batch was built, pushed, confirmed live on Cloudflare Pages and submitted to IndexNow (`npm run indexnow`).

## Legal accuracy correction (needs Rick's awareness)

The 20 September audit (section 8, F7) and, following it, the live council-pavement guide stated that the Roads (Scotland) Act 1984 gives roads authorities a statutory reasonable-care defence ("section 58"). That is wrong. The provision is section 58 of the Highways Act 1980, which applies in England and Wales only. A search of the full text of the Roads (Scotland) Act 1984 finds no equivalent. The guide (`src/data/extendedGuideContent.tsx`) and the new council and ice-and-snow pages now say the claim is in negligence and that no separate statutory defence exists in the Scottish Act. The audit document itself has not been edited.

## Other fixes made on the way

- Removed "our specialist solicitors" and "we handle" wording from the personal injury, accident at work, medical negligence, industrial disease, serious injury, road, public place and home pages (audit F1 body copy; the site says it is not a law firm).
- Removed the unsupported statement that employees "cannot legally be dismissed" for claiming (accident at work hub).
- Repaired about 30 dead internal links on the pillar hubs that the link resolver had been silently rendering as plain text.
- Lint now works (it was scanning `node_modules.nosync`); three unescaped apostrophes fixed.
- New `npm run check:pillars` (part of `npm run check`) validates FAQ count, schema, canonical, hub links, sitemap membership, meta lengths and internal links on every child page.

## How claims were verified

Statutory wording was read from legislation.gov.uk (2009 Asbestos Act ss.1 to 4, Compensation Act 2006 s.3, Damages (Scotland) Act 2011 ss.4 and 14, Administration of Justice Act 1982 ss.8 and 12, Roads (Scotland) Act 1984 ss.1 and 34, Occupiers' Liability (Scotland) Act 1960 ss.2 and 3, UCTA 1977 s.16, ERRA 2013 s.69, AWI (Scotland) Act 2000). Practical and scheme details came from HSE, GOV.UK, NHS inform, SPSO, COPFS, FSCS and Food Standards Scotland pages. Every external URL in the new pages returned HTTP 200 when checked. Case names (Hunter v Hanley, Rothwell, AXA v Lord Advocate, Montgomery) are cited in prose only, and Montgomery links to the National Archives press summary.

Not verified and deliberately left out: current Scottish discount rate figure, current CICA scheme details, any compensation award amounts.

## Still open

1. Scottish solicitor legal review of all new YMYL pages before promoting them (audit item 7; no page has been reviewed by a practising solicitor).
2. Named author or reviewer (audit F5): Article schema still names the organisation as author. Needs a real, verifiable person.
3. Business decisions from the audit: contact details, who receives enquiries, renaming `/no-win-no-fee-solicitors-scotland`.
4. Criminal injury hub has five dead child links (assault, hate crime, knife crime, robbery, sexual assault). Not built because CICA scheme rules should be checked against current sources first.
5. Road traffic pillar still uses flat URLs for its 10 detail pages. Moving them to `/road-traffic-accident-claims-scotland/...` needs 301 redirects and Rick's approval, so they were left alone.
6. Personal injury hub and the remaining flat long-tail pages are not yet part of the nested structure.
7. The stale Cloudflare Early Hint for `/images/hero-bg.jpg` (dashboard setting) is still open from the 20 September audit.
