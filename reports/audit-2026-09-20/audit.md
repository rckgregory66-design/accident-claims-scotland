# Accident Claims Scotland: Website Audit and Implementation Plan

Audit date: 20 September 2026. Live site: https://accident-claims-scotland.com. Repository: /Users/rickgregory/Projects/accident-claims-scotland (Next.js 16.2.9 static export, Cloudflare Pages, no GitHub remote).

This audit deliberately builds on the earlier work in this repository (audit of 28 July 2026, Batches 1 to 10, then Batches A to C on 18 September). It does not repeat finished work. It lists only what is genuinely still open, with evidence.

Label key: **Verified** = checked directly on the live site or in the repository on 20 Sep 2026. **Inference** = reasoned from evidence. **Unverified** = could not be checked.

## 1. Executive summary

The site is in far better shape than in July. Placeholders are gone, the form now sends through a Cloudflare Worker, security headers are set, the www host redirects, 73 URLs are in the sitemap, every indexable page has a self-canonical, one H1, FAQ schema and source citations.

The biggest remaining problems are:

1. **The search titles and descriptions still say "solicitors" while the About page says the site is not a law firm.** Homepage title: "Personal Injury & Medical Negligence Solicitors". Glasgow and Edinburgh (the two indexable city pages): "Personal Injury Solicitors Glasgow". Contact description: "Speak to Scottish solicitors today. Call, email..." although no phone or email is published. This is the largest trust and advertising-standards risk left, and Google shows these words to the public.
2. **Eight finished guides are hidden.** Batch 9 wrote full content for eight guides, but they were never switched on. About 20 links across the service pages that point to them are silently dropped by the link resolver, so those pages have fewer internal links than the code intends. llms.txt also advertises them (seven return 404). One (GP negligence) is live but orphaned and absent from the sitemap.
3. **Ten official "source" links are broken (404).** Several are on live pages (HSE, NHS inform, Scottish Courts, Judicial College). Broken citations on a legal site damage trust and AI citation confidence.
4. **A few legal statements in the eight held-back guides need correcting before they go live** (GP claims and the Central Legal Office, vibration staging scale, roads authority defence, care home standards, provisional damages citation).
5. **Crawler policy is incomplete.** robots.txt blocks GPTBot, Google-Extended, CCBot, Meta-ExternalAgent and Diffbot, but not ClaudeBot, anthropic-ai, Applebot-Extended or Bytespider (all training crawlers).
6. **Deployment gap.** There is no git remote. Live content already differs from the repo (live serves a GP guide the repo does not build). Commits made here reach the live site only when Rick runs the Cloudflare deploy.

Unknowns that only Rick can settle: who receives enquiries and what the real follow-up process is; whether a solicitor or regulated firm sits behind the site; whether a phone number or email will be published.

## 2. Business and website profile

| Item | Finding | Status |
|---|---|---|
| Operator | Ola Consultants Ltd (About page, llms.txt) | Verified (company number not published; not checked at Companies House) |
| Offer | Information website on Scottish personal injury, medical negligence, industrial disease, road traffic, CICA claims plus an enquiry form | Verified |
| Regulated status | About, Contact and llms.txt say it is not a regulated law firm | Verified |
| Business model | Not stated. Enquiry form goes to a Worker endpoint. Probably lead generation for Scottish solicitors ("marketing and information resource for Scottish solicitors", About) | Inference |
| Audience | People injured in Scotland, or their families; England-based residents injured in Scotland | Verified from copy |
| Conversion actions | Enquiry form (contact page, sticky CTA, CTA sections) | Verified |
| YMYL | Yes: legal, medical, compensation. Highest standard applies | Verified |
| Regulatory context | Law Society of Scotland rules on advertising and title use, ASA/CAP code, UK GDPR (health data in enquiries), Scottish Legal Complaints Commission | Inference; needs compliance review |

## 3. Technology and repository assessment

- Next.js 16.2.9, React 19.2.4, Tailwind 4, `output: "export"`, deployed by Wrangler to Cloudflare Pages (`wrangler.toml`, `pages_build_output_dir = ./out`). Verified.
- `functions/_middleware.js` redirects www to the bare domain (301). Verified live: `https://www...` returns 301 to the bare host; `http://` returns 301. Trailing-slash URLs return 308 to the clean URL. Verified.
- Sitemap generated in `src/app/sitemap.ts` (73 URLs, all `<loc>` on the bare host). Only Glasgow and Edinburgh location pages are indexable; the other ten are `noindex, follow` and correctly omitted. Verified.
- Security headers in `public/_headers` (HSTS, nosniff, frame options, referrer policy, permissions policy, CSP). CSP allows `unsafe-inline` and `unsafe-eval` because of the Next.js runtime; acceptable for a static export, flagged P3. Verified.
- Enquiry form posts to a Cloudflare Worker (`workers/enquiry.js`, `wrangler.enquiry.toml`). Backend and secrets were not touched. Not tested (no forms submitted).
- CI: `.github/workflows/quality.yml` runs `npm run check` (placeholder check, lint, typecheck, build). No GitHub remote exists, so it never runs. Verified.
- Local environment: `node_modules` was missing (the real folder is `node_modules.nosync`). A symlink was created locally (git-ignored). ESLint cannot run because the `fdir` package is missing from that install; typecheck and the production build pass. Lint result: **unverified**.
- Analytics and consent: no third-party scripts observed on rendered pages. Not applicable beyond the cookie policy. Verified on homepage.
- Images: `public/images` is empty. Live early-hints header still preloads `/images/hero-bg.jpg`, which returns 404 on the live site. The current HTML no longer references it (0 matches), so this is a stale Cloudflare Early Hints cache entry. Cannot be fixed in the repo; see "Needs Rick".

## 4. Crawlability, indexing and crawler access

| Check | Result | Status |
|---|---|---|
| robots.txt | `User-agent: *` Allow all, sitemap declared. Training bots blocked: GPTBot, Google-Extended, CCBot, Meta-ExternalAgent, Diffbot | Verified |
| Search and retrieval bots | Googlebot, Bingbot, Applebot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot are all covered by `*` and are allowed. Rationale: these fetch pages to show or cite them in answers, which helps discovery | Verified |
| Training bots not yet blocked | ClaudeBot, anthropic-ai, Applebot-Extended, Bytespider, cohere-ai | Verified gap (P2, Batch 4) |
| Canonicals | Every sitemap URL has a self-referencing canonical | Verified (73 of 73) |
| Meta robots | Index on all sitemap URLs; ten city pages `noindex, follow` | Verified |
| Titles and descriptions | All present. Titles up to about 75 characters on a few pages (statistics, stress at work, contributory negligence); acceptable | Verified |
| H1 | Exactly one per page | Verified |
| Duplicate content | Ten noindexed city pages are template-based (correctly noindexed). Glasgow and Edinburgh have about 1,050 words each with some local court content | Verified |
| Orphans | `/guides/gp-negligence-claims-scotland` is live (200, indexable canonical) but not in the sitemap and not built by the repo | Verified |
| llms.txt | Lists 8 URLs that are not in the sitemap (7 are 404), omits 25 real pages including all batch B and C pages and the location pages | Verified |
| Redirect chains | None found | Verified |
| JavaScript rendering | Content is server-rendered in the HTML; only the form is client-side | Verified |
| Hreflang, pagination | Not applicable | |

## 5. Search intent, AI-question map and information gain

Search volumes and rankings were not measured: no Search Console or paid keyword data was used, so all demand statements below are qualitative (high, medium, niche) and **unverified**.

| Intent | Example question | Best existing page | Gap |
|---|---|---|---|
| Time limits (high) | How long do I have to claim in Scotland? | /personal-injury-claim-time-limits-scotland and the guide | Covered |
| Cost (high) | Is no win no fee available in Scotland? | /no-win-no-fee-solicitors-scotland and guide | Covered |
| Road (high) | Claims after car, pedestrian, cycle, motorcycle accidents | 10 road pages plus 3 guides | Covered |
| Work (high) | Accident at work, stress, manual handling, needlestick | 5 pages plus guides | Work at height falls page missing |
| Medical (medium) | GP negligence, prescription errors, care home neglect, cancer misdiagnosis | Pillar plus 6 pages; GP, prescription and care home guides are hidden | Publish held-back guides (Batch 2) |
| Public place (medium) | Slips, supermarket, council pavements | 4 pages; slip/trip and supermarket guides are hidden | Publish (Batch 2) |
| Industrial disease (medium) | Hearing loss, vibration white finger, asbestos | Pillar, asthma, dermatitis, asbestos guide; hearing and vibration guides hidden | Publish (Batch 2) |
| Animals (medium, niche in Scotland) | Dog bite claim in Scotland | None | New page (Batch 5) |
| Asbestos-related (niche, high need) | Mesothelioma and pleural plaques compensation in Scotland | Asbestos guide only | New page (Batch 5) |
| Local (medium) | Glasgow or Edinburgh accident claims | Two indexable city pages | Copy claims to fix (Batch 1) |

**Information-gain opportunity.** The strongest defensible edge is Scots-law specificity: statute names (Occupiers' Liability (Scotland) Act 1960, Prescription and Limitation (Scotland) Act 1973, Damages (Scotland) Act 2011), Scottish bodies (Central Legal Office, Care Inspectorate, SCTS, CICA, MIB) and clear separation from England and Wales rules (for example, the English whiplash tariff does not apply). Competitor SERP comparison was **not performed** (no verified SERP data source used), so named competitors are not listed.

## 6. Content inventory and indexing priority

| Group | URLs | Action |
|---|---|---|
| Homepage and 7 core pillars | / and the seven claim-type pillars, plus CICA | Index. Improve titles (Batch 1) |
| Process and funding | how to claim, no win no fee, compensation, calculator, time limits, statistics | Index |
| Long-tail service pages | 15 from batches B and C, 10 road detail pages | Index |
| Guides | 22 published, 8 hidden | Index; publish 8 (Batch 2) |
| Trust pages | about, editorial methodology, contact, complaints, privacy, terms, cookies, accessibility | Index; add WebPage schema (Batch 4) |
| City pages | Glasgow, Edinburgh | Index, but fix "solicitors" wording; 10 other cities stay noindex (no change) |

Hub, cluster and supporting-resource map: pillar pages (personal injury, road, work, medical, industrial disease, serious injury, public place, CICA) link to long-tail service pages, which link to guides through `guideSlugs`. That last link layer is what Batch 2 restores.

## 7. Trust, entity, YMYL and regulatory findings

**F1. Solicitor claims in metadata contradict the About page.**
Status: Verified. Evidence: `src/app/page.tsx` lines 12 to 15, `src/app/layout.tsx` lines 15 to 17, `src/app/glasgow-accident-claims/page.tsx` line 5 to 7, the same for Edinburgh and ten other city pages, `src/app/contact/page.tsx` line 8, `src/app/serious-injury-claims-scotland/page.tsx` line 11 ("Specialist serious injury solicitors"), and the location template H1 ("Personal Injury Solicitors Serving {city}"). Live: homepage `<title>` and `og:description` ("Speak to Scottish accident claim solicitors").
Impact: legal and compliance (holding out as solicitors), trust, AI answer accuracy.
Recommendation: rewrite titles, descriptions and the location H1 to describe an information resource. Keep URLs unchanged (the URL `/no-win-no-fee-solicitors-scotland` stays; changing it needs approval).
Priority: P0. Difficulty: low. Risk: a small short-term click-through change from dropping the word "solicitors"; accepted for accuracy. Test: grep for "solicitors" in metadata; build.

**F2. Contact page describes a service and phone contact that the site does not evidence.**
Status: Verified. Evidence: `/contact` says "We will assess your circumstances and give you honest advice" and "A member of our team contacts you by phone", while the same page says telephone, email and office details "will be added when the receiving provider has been confirmed".
Recommendation: soften to neutral wording. Rick must confirm the real process and receiving party (see "Needs Rick").
Priority: P0. Difficulty: low.

**F3. Operator is not in structured data.**
Status: Verified. Evidence: `src/lib/schema.ts` Organization has no operator; About states Ola Consultants Ltd. Recommendation: add `parentOrganization` name only (no invented address or company number). Priority: P2.

**F4. Trust pages have no WebPage or breadcrumb schema** (contact, privacy, cookie, terms, complaints, accessibility). Status: Verified from crawl. Priority: P3.

**F5. Authors and reviewers.** Article schema uses the organisation as author; no named author or solicitor reviewer exists. Status: Verified. Cannot be fixed without real people; see "Needs Rick". Priority: P1 (needs Rick).

## 8. Source quality and accuracy findings

**F6. Ten broken official source links.** Status: Verified by HTTP check of all 91 external links in the source. Broken (404): HSE noise page, HSE retail slips (two URLs), HSE mesothelioma statistics, NHS inform medical records, NHS inform needlestick, SCTS Court of Session, SCTS Fatal Accident Inquiries, SCTS Chapter 42A rules, gov.scot HAI, judiciary.gov.uk Judicial College Guidelines, Headway Rehabilitation Code PDF. hepscotland.co.uk does not resolve. Sites returning 403 to automated requests (GMC, Law Society of Scotland) were not treated as broken. Priority: P1. Fix: Batch 3.

**F7. Legal accuracy problems in the held-back guides** (fix before publishing; Batch 2):
- GP guide says GP claims are handled by the Central Legal Office. GPs are usually independent contractors indemnified separately; the CLO acts for NHS boards. Reword.
- Vibration guide lists the vascular Stockholm stages as 0 to 3; the scale runs 0V to 4V (sensorineural 0SN to 3SN). It also implies the 2005 Regulations applied before 2005.
- Slip/trip guide misstates the roads authority position; the statutory defence is in section 58 of the Roads (Scotland) Act 1984 (authority must show reasonable care). Supermarket guide says retailers are "required" to keep inspection logs; that is not a general legal requirement.
- Care home guide says National Care Standards; the Health and Social Care Standards replaced them in 2018.
- Rehabilitation guide cites the Damages (Scotland) Act 2011 for provisional damages, which is wrong.
- Prescription guide cites a generic NHS inform home page.
Priority: P0 for those pages before they go live.

## 9. Structured data
Existing: Organization, WebSite, WebPage/Service, BreadcrumbList, FAQPage, Article and Speakable on most pages. All supported by visible content. City pages no longer carry `LocalBusiness`. Gaps: F3, F4. No fabricated reviews, ratings or addresses were found. Verified.

## 10. Performance, accessibility and conversion
Batches 7 and 8 covered these. Live headers show `cache-control: public, max-age=0, must-revalidate` on HTML (fine on Cloudflare). No image files are shipped, so image weight is not an issue. A formal Lighthouse or field Core Web Vitals run was **not performed** (no Google data access), so scores are unverified. Conversion friction: no phone or email exists, so the form is the only route (a business decision).

## 11. Prioritised recommendations

**P0**
- F1 Remove solicitor claims from metadata and the location H1 (Batch 1).
- F2 Neutral contact page wording (Batch 1).
- F7 Correct the held-back guides before publishing (Batch 2).

**P1**
- Publish eight finished guides and restore about 20 internal links (Batch 2).
- F6 Repair broken source links (Batch 3).
- F5 Named author and solicitor reviewer (needs Rick).
- llms.txt refresh (Batch 4).

**P2**
- Block remaining training crawlers (Batch 4).
- F3 Operator in Organization schema (Batch 1).
- Two dead `guideSlugs` (`personal-injury-time-limits-scotland`, `contributory-negligence-scotland`) point to nothing; repoint to real guides (Batch 4).
- New sourced pages: dog bites, falls from height, mesothelioma and pleural plaques (Batch 5).

**P3**
- F4 WebPage schema on trust pages (Batch 4).
- Tighten CSP once Next.js allows removing `unsafe-eval` in export mode.
- Fix or add CI that actually runs (needs a git remote).
- Digital PR: a citable Scotland-specific data page already exists (statistics); promote it through Scottish legal and safety bodies. No link schemes.

## 12. 30/60/90-day plan

**Days 0 to 30:** Batches 1 to 4 (this run), deploy manually, request no indexing manually; Rick decides the business-model questions below; Search Console review of "solicitor" query impressions.
**Days 31 to 60:** Named author or reviewer once a real solicitor is confirmed; more sourced long-tail pages (children's claims, accidents abroad by Scottish residents, e-bike or e-scooter once Scottish rules are verified); measure enquiries per page.
**Days 61 to 90:** Review noindexed city pages for real local value or leave them noindexed; quarterly source-link check; re-audit.

## 13. Implementation batches

| Batch | Scope | Files | URLs affected | Benefit | Risk | Tests |
|---|---|---|---|---|---|---|
| 1 | Remove "solicitors" claims from metadata, location H1, contact page; add operator to Organization schema | layout.tsx, page.tsx, 12 city pages, LocationPageTemplate.tsx, contact/page.tsx, serious-injury page, schema.ts | Home, contact, city pages, serious injury | Compliance, trust, honest snippets | Small CTR change | placeholder check, typecheck, build, grep |
| 2 | Correct and publish the 8 held-back guides | guides.ts, extendedGuideContent.tsx, guideFaqs.ts | 8 new URLs (one already live) | Content, internal links, AI citations | Legal wording; hedged | build, sitemap count, link check |
| 3 | Repair broken source links | ~10 page and data files | About 10 pages | Trust, citation quality | Very low | HTTP check of all external links |
| 4 | Crawler policy, llms.txt, dead guide slugs, trust page schema | robots.txt, llms.txt, 2 page files, schema on 6 pages | Site-wide | AI retrieval hygiene | Low | build, curl after deploy |
| 5 | Three new sourced service pages | 3 new page.tsx, sitemap.ts, pillar links | 3 new URLs | Long-tail coverage | Legal accuracy; every claim sourced | build, link check |

## 14. Needs Rick's approval (not done, by design)

1. **Rename `/no-win-no-fee-solicitors-scotland`** (contains "solicitors"). URL change; needs redirect plan.
2. **Publish a real phone, email or address** and confirm who receives enquiries and how they are handled. Then contact page copy can be finalised.
3. **Named author and solicitor reviewer** for legal pages (requires a real, verifiable person).
4. **Merge or noindex decisions** on overlapping pages (for example the road traffic guide and the road traffic pillar). Not touched.
5. **Fix the stale Cloudflare Early Hint** for `/images/hero-bg.jpg` (Cloudflare dashboard setting; hosting change).
6. **Add a git remote** so CI and push-to-deploy work; until then deployment is manual.
7. **Legal sign-off** by a Scottish solicitor on all YMYL pages before promoting the site.
