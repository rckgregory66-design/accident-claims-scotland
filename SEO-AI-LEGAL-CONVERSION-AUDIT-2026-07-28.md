# Accident Claims Scotland: SEO, AI Search, Legal Content and Conversion Audit

**Audit date:** 28 July 2026  
**Live check:** 28 July 2026, approximately 14:00–15:00 BST  
**Codebase:** `/Users/rickgregory/Desktop/accident-claims-scotland`  
**Live declared canonical:** `https://accident-claims-scotland.com` (non-`www`)  
**Repository base URL:** `https://www.accident-claims-scotland.com` (`www`) — this conflicts with the deployed canonical and sitemap/robots configuration  
**Scope:** repository inspection, production rendering, live DOM checks, public search results, local build/lint checks and authoritative-source review.  
**Important:** This is a marketing/content/technical audit, not legal advice. Every substantive legal statement must be approved by a suitably qualified Scottish solicitor before publication.

## 1. Executive summary

### Current position

The site has a promising information architecture, a broad set of Scotland-specific service pages, useful direct-answer components, crawlable server-rendered content, breadcrumbs, a sitemap and a sizeable guide library. Its strongest strategic idea is to answer genuinely useful Scottish claimant questions instead of publishing only generic sales copy.

It is nevertheless **not safe or commercially ready in its present public state**. The production homepage presents the website as a regulated Scottish legal practice while publishing unresolved placeholders for the firm name, phone, email, office address, membership number, solicitor reviewer and review dates. The structured data repeats those placeholders. The enquiry form does not transmit an enquiry: it waits 800 ms and displays “Enquiry Received”. A potential claimant can therefore believe that sensitive legal/medical information has reached a regulated solicitor when it has not. This is the highest-priority trust, conversion and potential consumer/compliance risk.

The site’s owner, operator, controller, regulated provider and actual business model cannot be identified from the inspected live content or code. It is not possible to verify whether this is a law firm, a trading style, a marketing/referral service or a lead generator. Until those facts are supplied and independently verified, claims such as “our Scottish claims solicitors”, “regulated Scottish practice”, “solicitor-led claims”, “we handle” and “regulated by the Law Society of Scotland” are unsupported.

The content has good topical breadth but insufficient demonstrated expertise. Articles use future or unverified dates, have no named authors or reviewers, cite almost no primary sources, and make legal assertions across clinical negligence, industrial disease, fatal claims, offshore work, CICA and children’s claims without an accountable expert. AI systems can extract the copy, but they cannot reliably resolve who wrote it, who reviewed it, what entity stands behind it or why it should be trusted.

The ten city pages are largely generated from one template. Some city-specific wording exists, but most pages are too similar and do not prove offices, local teams, local casework or unique local usefulness. Their `LegalService` + `LocalBusiness` markup implies a local business in each place without a verified address. This creates material doorway-page and misleading-schema risk.

### What the site does well

- Clear Scotland-wide subject and predominantly Scots-law terminology.
- Logical commercial pillars for personal injury, road traffic, work, public place, medical negligence, serious injury, industrial disease, CICA, compensation, process, limitation and funding.
- App Router pages render core text in HTML; only interactive components need client JavaScript.
- Useful answer boxes, TL;DR panels, FAQs, breadcrumbs and related-content modules.
- Descriptive, human-readable URLs and mostly one H1 per template.
- Sitemap and permissive `robots.txt` are present.
- No intrusive pop-up or observable third-party tracker was encountered in the rendered homepage check.
- Consent checkbox and privacy link appear on the enquiry form.
- Copy commonly qualifies outcomes and mentions evidence, liability and causation.

### What is holding it back

1. Unverified identity and regulatory claims on a YMYL website.
2. A fake-success enquiry form that sends nothing.
3. Placeholder contact, complaints, privacy, author, review-date and schema data on production.
4. Location pages and local schema that imply unverified local operations.
5. Unsupported service-scope and funding claims.
6. No real solicitor authorship, review trail, credentials or source citations.
7. Overlapping guide and service-page intents.
8. Repetitive location and service templates with limited original evidence.
9. Global metadata supplies a homepage canonical to pages that do not override it; current pages mostly override it, but this is fragile.
10. Technical QA is failing: ESLint reports 26 errors.

### Trust verdict

**No.** An injured person should not be asked to trust this site until the operator, legal provider, regulatory status, data controller, contact routes, fee model, complaints path and form delivery are all real, visible and verified. The visual design looks plausible, but the unresolved placeholders and unsupported regulatory assertions undermine it immediately.

### Can search and AI systems identify the essential entities?

| Entity/fact | Verdict | Evidence |
|---|---|---|
| Website owner/operator | No | No verified legal entity in `siteConfig.ts`, About, footer or legal pages |
| Regulated provider | No | `[LAW FIRM NAME]` and `[Law Society of Scotland Membership Number]` |
| Service/referral model | No | Copy alternates between “our solicitors”, “claims service” and “practice” |
| Jurisdiction | Partly | Scotland and Scots law are stated, but cross-border limits are not consistently defined |
| Claim types | Yes, as assertions | Clear navigation and pages, but actual provider scope is unverified |
| Authors/reviewers | No | `[SOLICITOR NAME]` and `[DATE]` |
| Contact details/location | No | Placeholder phone, email and address |
| Funding/fees | Partly | General explanation exists; actual agreement, deductions, outlays and provider terms are unknown |
| Eligibility/deadlines/process | Partly | Strong discoverability, but several summaries oversimplify limitation and special routes |

### Top 10 actions

| Priority | Action | Impact | Effort | Owner |
|---|---|---:|---:|---|
| 1 | **Immediately take the public site out of lead-generation mode**: disable forms and unsupported regulated/legal-service assertions or place the site behind a noindex maintenance page until verified facts are supplied. | Critical compliance/trust | Low | Compliance + developer |
| 2 | Verify and publish operator, data controller, legal provider, regulator/membership link, registered address, real phone/email, service model and geographic scope. | Critical compliance/conversion/AI | Medium | Directors + solicitor |
| 3 | Replace simulated form success with secure delivery, server-side validation, spam protection, logging, error recovery and a truthful acknowledgement. Test end to end. | Critical conversion/data | Medium | Developer + operations |
| 4 | Have a Scottish personal-injury solicitor review every legal/service page; add named author/reviewer profiles, credentials, dates and material source citations. | High trust/SEO/AI | High | Solicitor + content |
| 5 | Remove all placeholder and future/unverified dates from live HTML and JSON-LD; prevent deployment when placeholder tokens remain. | High trust/quality | Low | Developer |
| 6 | Remove `LocalBusiness` schema from city pages and noindex most city pages until each has verifiable, distinct value. Never imply an office that does not exist. | High SEO/compliance | Low | SEO + developer |
| 7 | Consolidate overlapping guide/service intents, especially limitation, road traffic, accident at work, no-win-no-fee and compensation. | High SEO/AI | Medium | SEO + content |
| 8 | Rewrite limitation, CICA, fatal-claim, medical-negligence, industrial-disease and funding content against primary sources; distinguish raising court proceedings from merely contacting a solicitor. | High legal/trust | High | Solicitor |
| 9 | Fix lint errors; add CI checks for build, lint, broken links, placeholder tokens, schema and sitemap/canonical consistency. | Medium technical | Medium | Developer |
| 10 | After relaunch, connect Search Console, Bing Webmaster Tools, GA4 (or privacy-respecting analytics), consent, CRM and call tracking with documented events and retention rules. | High measurement | Medium | Analytics + privacy |

## 2. Confirmed findings and access-dependent checks

### Confirmed findings

| Finding | Status | Evidence | Severity |
|---|---|---|---|
| Host/canonical signals conflict | Confirmed | Requested/live browser URL remained `https://www.accident-claims-scotland.com/`, while homepage declared canonical and `og:url` as `https://accident-claims-scotland.com`; About and Glasgow also canonically declare non-`www`; repository `SITE.url`, sitemap and robots use `www` | High |
| Placeholder phone is visible and linked | Confirmed | Live header/hero; `src/data/siteConfig.ts:5`; `ClaimForm.tsx:43–45` | Critical |
| Unsupported Law Society regulation statements are public | Confirmed | Live header, hero and footer; `siteConfig.ts`; `page.tsx`; no firm/member identity supplied | Critical |
| Form does not send data but reports success | Confirmed | `ClaimForm.tsx:25–30`: timeout followed by `setSubmitted(true)`; no API call | Critical |
| Placeholder firm/address/email/member data are emitted in organisation schema | Confirmed | `src/lib/schema.ts:3–49` plus `siteConfig.ts` | Critical |
| City pages emit `LocalBusiness` without a verified local address | Confirmed | `localBusinessSchema()` and `LocationPageTemplate.tsx` | High |
| Published/reviewed dates and solicitor names are placeholders | Confirmed | Claim template and location template; legal pages also contain `[DATE]` | High |
| Core content is server-rendered/static-capable | Confirmed | Next.js App Router server components; client boundary limited to form/header/FAQ; live DOM contains full text | Positive |
| Framework is Next.js 16.2.9 / React 19.2.4 | Confirmed | `package.json`; App Router under `src/app` | Informational |
| Deployment is consistent with Vercel but not proven | Inference | Vercel response behaviour/assets and README; no `vercel.json` or hosting configuration in repository | Low |
| Sitemap contains all service, location, guide and legal routes | Confirmed | `src/app/sitemap.ts`; live sitemap endpoint configured | Positive |
| Static sitemap pages omit `lastModified` | Confirmed | Only guides receive `lastModified`; service/legal/location pages do not | Low |
| `robots.txt` allows all crawlers | Confirmed | `public/robots.txt` | Positive/monitor |
| SearchAction points to a non-existent search function | Confirmed | `schema.ts` points to `/guides?search=...`; guides page has no demonstrated search feature | Medium |
| Lint fails | Confirmed | 26 `react/no-unescaped-entities` errors on 28 July 2026 | Medium |
| The repository has extensive uncommitted work | Confirmed | `git status --short` shows most routes/components untracked plus modified core files | Medium deployment risk |
| Location content is heavily templated | Confirmed | Ten pages use `LocationPageTemplate`; eight are ~363 source words and share near-identical copy/FAQs | High |
| No Open Graph image is configured | Confirmed | Root metadata has OG/Twitter text but no image; no route OG image file | Medium |
| Site uses no content images beyond icons/emoji in inspected routes | Confirmed | Public assets are starter SVGs/favicon; content is text/emoji | Low performance, medium credibility |

### Access-dependent checks

| System | Required report/evidence | Decision informed |
|---|---|---|
| Google Search Console | Page indexing, sitemap status, canonical selected by Google, crawl stats, HTTPS, manual actions/security, Core Web Vitals, search results by page/query/device/country, links | Which URLs are indexed; cannibalisation; real query demand; CWV priorities; penalties |
| Bing Webmaster Tools | Index Explorer, Site Scan, crawl errors, search keywords/pages, backlinks, IndexNow status | Bing indexation and technical defects; whether IndexNow is worthwhile |
| GA4/analytics | Landing pages, engaged sessions, form-start/form-error/form-success/call/email events, device, source/medium, consent state | Conversion funnel, mobile friction, content value, paid/organic quality |
| Consent platform | Cookie inventory, categories, default state, consent logs, tag firing before/after choice, withdrawal | PECR/UK GDPR compliance and whether analytics data is lawful/reliable |
| CRM/form system | Test submissions with timestamps, field mapping, delivery logs, duplicate/spam handling, acknowledgement, response SLA, lawful-basis/retention records | Whether enquiries arrive and receive appropriate handling |
| Call tracking | Number ownership, dynamic-number insertion, consent, recordings, missed calls, qualification/outcomes | Phone conversion and privacy risk |
| Server/CDN logs | Bot/user-agent requests, status codes, cache hits, 404s, query parameters, staging hosts | Crawl waste, soft 404s, AI crawler access, caching and unwanted hosts |
| Hosting/deployment | Vercel/project ownership, production domains, preview deployment protection, environment variables, deployment history, rollback, headers | Confirm host, stop preview indexation, secure secrets and forms |
| Backlink tool | Referring domains/pages, anchors, lost links, toxic/manual patterns, competitor link intersections | Digital PR priorities; do not infer authority without it |
| Rank tracker | Agreed Scotland/UK location, mobile/desktop, exact query set, SERP features | Baseline share of voice and whether city pages merit investment |
| Email system | SPF, DKIM, DMARC, inbound alias, ticketing/CRM routing and monitored mailbox | Form acknowledgement/delivery reliability and impersonation risk |

## 3. Technical SEO, accessibility and performance

| Finding | Status | Evidence/affected area | Why it matters | Severity | Exact fix | Impact | Owner |
|---|---|---|---|---|---|---|---|
| Public YMYL pages contain placeholders | Confirmed | Sitewide templates, legal pages, schema | Destroys trust; may mislead users/crawlers | Critical | Block deployment on regex `\[[A-Z][^]]+\]`; replace only with verified facts; otherwise noindex/maintenance | Trust/compliance/SEO | Developer + compliance |
| Form gives false success | Confirmed | `ClaimForm.tsx` | Lost claims and potentially missed deadlines | Critical | POST to secure server action/API; persist correlation ID; show success only after accepted response; show recoverable error; alert ops on failure | Conversion/compliance | Developer |
| No server-side form validation or abuse protection | Confirmed | Client-only `required`; no endpoint | Data quality/security | High | Validate/sanitise server-side, rate-limit, honeypot or privacy-safe CAPTCHA, CSRF/origin checks, size limits | Security/conversion | Developer |
| Legal/medical free-text has no explicit special-category handling | Confirmed | Form asks injuries/incident | Health data is likely; privacy notice is generic | High | Name controller/processors/recipients, purpose, lawful basis and Article 9 condition as applicable; minimise fields; define retention and rights | Compliance | Privacy counsel |
| LocalBusiness schema fabricates local presence | Confirmed | All ten city routes | Misleading entity/local signals | High | Remove LocalBusiness/address; use `WebPage` + `Service` with `areaServed` only if genuine; add office only where staffed and verifiable | SEO/compliance | Developer + SEO |
| Organisation schema fabricates facts | Confirmed | Sitewide JSON-LD | Entity confusion and trust risk | Critical | Suppress organisation/legal-service markup until verified; then use one stable `@id` and exact legal name | AI/SEO/trust | Developer |
| SearchAction is not supported by site search | Confirmed | `webSiteSchema()` | Invalid/misleading action | Medium | Remove until a working search results experience exists | Schema | Developer |
| FAQ schema is emitted broadly | Confirmed | Service/location templates | Google FAQ rich results are generally restricted and schema adds little when generic | Low | Keep only where questions/answers are visible and useful; do not measure success by rich results; omit from repetitive local pages | SEO | SEO |
| Canonical host conflicts with browser URL, repository and sitemap | Confirmed | Live canonical is non-`www`; browser stayed on `www`; repository/sitemap/robots use `www` | Splits indexing/link signals and indicates deployed source/config drift | High | Select one host after DNS/hosting review (recommend the host with established links); 308 every alternate in one hop; use it in metadataBase, canonicals, OG, sitemap and robots | Crawl | Developer |
| Redirect matrix not verifiable from restricted shell | Access required | HTTP/www/case/slash variants | Duplicate URLs/chain risk | Medium | Test at edge and document single-hop 308 rules | SEO | Developer |
| Static sitemap lacks meaningful modification dates | Confirmed | `sitemap.ts` | Weak recrawl signal; fake dates are worse | Low | Add dates from a real reviewed-content registry/deployment record; never use current build time | SEO | Developer/content |
| Future/unverified article dates | Confirmed | All guides use modified `2026-06-01` regardless of review evidence | Freshness manipulation risk | High | Store actual publication/review dates per article and reviewer; update only for substantive change | Trust/AI | Content/compliance |
| No social image | Confirmed | Root metadata | Poor previews and weaker sharing/brand credibility | Medium | Add verified branded `opengraph-image` and Twitter image; 1200×630; meaningful alt | Conversion | Design/developer |
| No content imagery or proof assets | Confirmed | Sitewide | Limits trust and accessibility context, though it keeps pages light | Medium | Add authentic team/provider/process visuals only; optimise dimensions/AVIF/WebP; avoid stock “injured person” clichés | Trust/conversion | Design |
| Navigation dropdown/button depends on JS | Confirmed | `Header.tsx` client component | Core links may be less robust without JS | Medium | Render an accessible `<details>` or CSS-capable fallback; preserve server-rendered links in DOM | Accessibility/crawl | Developer |
| FAQ accordion depends on JS | Confirmed | `FAQ.tsx` | Answers may exist in DOM but interaction must be keyboard/AT robust | Low | Prefer native `<details><summary>`; test focus, expanded state and headings | Accessibility | Developer |
| Emoji used as interface/claim icons | Confirmed | Claim cards and template sidebars | Inconsistent rendering/noisy AT names | Low | Use decorative SVGs with `aria-hidden=true`; retain textual labels | Accessibility/design | Developer |
| Sticky mobile CTA may obscure content | Inference | `MobileStickyCta` fixed layout | Common WCAG/mobile issue | Medium | Test 320 px width, 200% zoom, landscape and virtual keyboard; add bottom content padding and dismiss option if needed | Accessibility/conversion | Design/dev |
| Form confirmation is not announced | Inference | Conditional render, no live region/focus management | Screen-reader users may miss result | Medium | Move focus to result heading; `role=status`/appropriate live region; preserve entered data on error | Accessibility | Developer |
| No skip-link implementation demonstrated | Inference | `main id="main-content"` exists, but no skip link found in inspected header | Keyboard navigation | Medium | Add first-focusable “Skip to main content” link | Accessibility | Developer |
| Lint failure | Confirmed | 26 errors | Weak release discipline | Medium | Fix JSX entity errors; make lint/build mandatory in CI | Quality | Developer |
| Google font fetched through `next/font` | Confirmed | `layout.tsx` | Usually self-hosted by build, but build environments need font retrieval/cache | Low | Pin/cache build; consider local font if repeatable builds fail | Performance | Developer |
| No observable images causing LCP bloat | Confirmed | Homepage | Positive | — | Keep hero text-first; measure real LCP before adding assets | Performance | Design |
| Actual CWV unavailable | Access required | Field data needed | Lab estimates are not user experience | High | Use GSC CrUX + PageSpeed/Lighthouse for representative templates; prioritise field LCP/INP/CLS | Performance | Developer |
| 404 component exists | Confirmed | `not-found.tsx` | Positive, but status/soft-404 needs live test | Low | Verify unknown URLs return 404, are not canonicalised to home, and have noindex if desired | SEO | Developer |
| Preview/staging indexation unknown | Access required | No deployment config | Duplicate environment risk | High | Password/protect previews; `X-Robots-Tag: noindex`; audit Search Console host variants | SEO | DevOps |
| Security headers unknown | Access required | Browser DOM is not a full edge-header audit | Trust/security | Medium | Check CSP, HSTS, Referrer-Policy, Permissions-Policy, nosniff, frame-ancestors | Security | Developer |

### Framework, rendering and deployment

- **Framework:** Next.js **16.2.9**, React **19.2.4**, TypeScript, Tailwind CSS 4.
- **Router/rendering:** App Router. Most pages are server components and statically renderable. Dynamic guides use `generateStaticParams`, so core guide content can be pre-rendered. Header, FAQ and form are client components.
- **Metadata:** Next.js Metadata API with a root `metadataBase` and route-level canonicals.
- **Deployment:** The production host is live and behaviour is consistent with Vercel, but the repository has no deployment manifest and this cannot be confirmed without platform access.
- **Caching:** No explicit caching or revalidation strategy is configured. Static content should be cached by the framework/platform; verify production headers and purge behaviour.
- **Next.js-specific recommendation:** keep factual metadata co-located with reviewed content, use metadata files for robots/sitemap/OG imagery, and do not emit schema facts that are not visible and verified.

## 4. Keyword, intent and URL map

No reliable first-party volume data was supplied. The labels below are **intent classifications, not volume claims**. Current search results show active competition from Winn Solicitors Scotland, Scotland Claims, Accident Claims Scotland `.co.uk`, Scottish Accident, Stewart Legal, Gildeas, Slater and Gordon and specialist Scottish firm pages. Validate demand in Search Console, Ads Keyword Planner or a licensed tool before expanding.

### Major indexable pages

| Current URL | Action | Primary intent/keyword | Supporting entities | Recommended title | Recommended H1 | Missing/next sections | Cannibalisation/internal links |
|---|---|---|---|---|---|---|---|
| `/` | Keep after identity fix | accident claims Scotland; mixed commercial | Scottish personal injury solicitor, claim check | Accident Claims Scotland: Scottish Personal Injury Solicitors | Accident Claims in Scotland: Speak to a Verified Scottish Personal Injury Solicitor | Verified provider, who receives enquiry, eligibility triage, funding summary, reviewer | Link to every pillar; avoid duplicating full PI pillar |
| `/personal-injury-claims-scotland` | Expand/review | personal injury claims Scotland | negligence, causation, evidence, solatium | Personal Injury Claims Scotland: Eligibility, Process and Funding | Personal Injury Claims in Scotland | Clear elements of claim, special cases, provider proof, sources | Canonical pillar; guides link here |
| `/road-traffic-accident-claims-scotland` | Keep/expand | road traffic accident claims Scotland | car, motorcycle, cycling, pedestrian, MIB, whiplash | Road Traffic Accident Claims Scotland: A Practical Guide | Road Traffic Accident Claims in Scotland | MIB/uninsured/untraced, evidence, insurer contact, cross-border | Merge/reposition same-intent RTA guide |
| `/accident-at-work-claims-scotland` | Keep/expand | accident at work claim Scotland | employer duty, RIDDOR, HSE, PPE | Accident at Work Claims Scotland: Rights, Evidence and Process | Accident at Work Claims in Scotland | Employment reassurance carefully qualified, evidence preservation, HSE sources | Merge/reposition same-intent guide |
| `/public-place-accident-claims-scotland` | Keep/expand | public place accident claims Scotland | occupiers’ liability, council, supermarket, slip/trip | Public Place Accident Claims Scotland | Claims for Accidents in Public Places in Scotland | Occupier/council distinctions; notice/CCTV; defensible case examples | Support with slip/supermarket/council guides |
| `/medical-negligence-claims-scotland` | Keep; solicitor rewrite | medical negligence claims Scotland | clinical negligence, NHS board, breach, causation | Medical Negligence Claims Scotland: What Must Be Proved | Medical Negligence Claims in Scotland | Complaints vs damages, expert evidence, consent, causation, CLO terminology, sources | Hub for GP/NHS/birth/cancer/etc. |
| `/serious-injury-claims-scotland` | Keep; split fatal section if offered | serious injury claims Scotland | brain, spinal, amputation, rehabilitation | Serious Injury Claims Scotland: Compensation and Rehabilitation | Serious Injury Claims in Scotland | Interim payments qualified, rehabilitation code, future loss, capacity | Link fatal guide; consider fatal pillar only with genuine service |
| `/industrial-disease-claims-scotland` | Keep; solicitor rewrite | industrial disease claims Scotland | mesothelioma, NIHL, HAVS, historic employer | Industrial Disease Claims Scotland: Exposure, Evidence and Time Limits | Industrial Disease and Occupational Illness Claims in Scotland | Insurer tracing, medical/exposure proof, statutory schemes distinction | Hub for asbestos/NIHL/HAVS |
| `/criminal-injury-compensation-scotland` | Keep; rewrite | CICA claims Scotland | 2012 Scheme, crime of violence, tariff, police report | CICA Claims Scotland: Eligibility, Time Limits and Awards | Criminal Injury Compensation (CICA) Claims in Scotland | Make civil/CICA distinction prominent; two-year rule; conduct/convictions; tariff; review/appeal | Never blend three-year civil deadline into CICA content |
| `/personal-injury-compensation-scotland` | Keep; legal review | personal injury compensation Scotland | solatium, past/future loss, care, earnings | Personal Injury Compensation in Scotland: What Can Be Claimed? | Personal Injury Compensation in Scotland | Valuation evidence, interest/tax caveats, examples only if sourced | Merge “what is my claim worth” guide or make it methodology-only |
| `/how-to-claim-compensation-scotland` | Keep | how to claim compensation Scotland | enquiry, investigation, medical report, negotiation, court | How to Claim Compensation in Scotland: The Personal Injury Process | How to Make a Personal Injury Claim in Scotland | Who handles each step, response expectations, alternatives, court routes | Process pillar; link evidence/court guides |
| `/personal-injury-claim-time-limits-scotland` | Keep; authoritative rewrite | personal injury claim time limit Scotland | 1973 Act ss17, 18, 19A; date of knowledge | Personal Injury Time Limits in Scotland: The Three-Year Rule | Personal Injury Claim Time Limits in Scotland | “Raise proceedings” wording, statutory knowledge test, discretion not guarantee, special routes | Merge same-intent guide; retain one canonical |
| `/no-win-no-fee-solicitors-scotland` | Keep only after terms verified | no win no fee solicitors Scotland | success fee agreement, deductions, outlays, insurance | No Win No Fee in Scotland: Costs, Deductions and Risks | How No Win No Fee Personal Injury Claims Work in Scotland | Actual provider agreement, cap/percentage, VAT, outlays, ATE, termination, adverse expenses | Merge same-intent guide |
| `/guides` | Keep | Scottish personal injury guides | topic hubs, authors, reviewed dates | Scottish Personal Injury Guides | Scottish Personal Injury Guides Reviewed by Scottish Solicitors | Category navigation, author/reviewer, methodology, search only if real | Link guides to pillars and vice versa |
| `/about` | Replace placeholders/expand | about Accident Claims Scotland | owner, firm, solicitors, regulator | About Accident Claims Scotland and the Legal Provider | Who Operates Accident Claims Scotland? | Exact legal roles, firm/team profiles, membership links, locations, editorial policy | Primary entity page |
| `/contact` | Keep after form fix | contact personal injury solicitor Scotland | callback, phone, email, accessibility | Contact Accident Claims Scotland | Make a Confidential Initial Enquiry | Who receives data, response time, urgent/deadline warning, accessible channels | CTA destination |
| Legal pages | Keep; noindex terms/accessibility only if strategy demands | navigational/compliance | controller, cookies, complaints, accessibility | Accurate descriptive titles | Plain H1 | Verified entities/dates/processes | Footer links; generally indexable is acceptable |

### City/location pages

| URLs | Current action | Primary intent if retained | Uniqueness requirement |
|---|---|---|---|
| `/glasgow-accident-claims`, `/edinburgh-accident-claims` | Noindex until verified; later Keep only if evidence supports | personal injury solicitor Glasgow/Edinburgh | Real provider coverage, named nearest office/team or clear remote model, local court/health/transport context used helpfully, unique local FAQs, genuine cases/testimonials only with consent and evidence |
| `/aberdeen-accident-claims` | Noindex; potentially expand | accident claims Aberdeen | Offshore expertise must be genuinely offered and evidenced; no invented office |
| `/dundee-accident-claims`, `/inverness-accident-claims`, `/stirling-accident-claims`, `/perth-accident-claims`, `/paisley-accident-claims`, `/ayr-accident-claims`, `/falkirk-accident-claims` | Noindex or merge to one Scotland service-area page | local navigational intent | Retain only where page adds material claimant value beyond replacing a city name; otherwise doorway risk |

Recommended local title pattern, only when justified: `Personal Injury Solicitors Serving Glasgow | [Verified Firm]`. Recommended H1: `Personal Injury Claims for People in Glasgow`. “Serving” avoids implying an office.

### Guide inventory: keyword-to-URL map and action

| Guide slug | Primary intent | Action/parent |
|---|---|---|
| `personal-injury-claim-time-limit-scotland` | how long to claim in Scotland | **Merge/301** to time-limit pillar |
| `accident-at-work-claim-scotland` | can I claim after work accident | **Merge or reposition** as eligibility guide; parent work pillar |
| `evidence-for-personal-injury-claim-scotland` | evidence needed | Keep; parent PI/process |
| `medical-negligence-what-to-prove-scotland` | what must be proved | Keep; parent medical |
| `nhs-negligence-claims-scotland-explained` | NHS negligence process | Keep after expert review; parent medical |
| `industrial-disease-delayed-symptoms-scotland` | delayed symptoms/date of knowledge | Keep; parent industrial |
| `what-is-my-accident-claim-worth-scotland` | claim value | **Merge or narrow** to valuation methodology; parent compensation |
| `can-i-claim-if-partly-at-fault-scotland` | contributory negligence | Keep; parent PI |
| `what-if-liability-denied-scotland` | disputed liability | Keep; parent PI/process |
| `do-i-need-to-go-to-court-scotland` | court attendance | Keep; parent process |
| `road-traffic-accident-claims-scotland` | RTA claims | **Merge/301** to RTA pillar |
| `whiplash-claims-scotland` | whiplash Scotland | Keep; parent RTA |
| `construction-accident-claims-scotland` | construction injury | Keep only if offered; parent work |
| `asbestos-claims-scotland` | asbestos disease claim | Keep with specialist review; parent industrial |
| `noise-induced-hearing-loss-claims-scotland` | NIHL claim | Keep; parent industrial |
| `gp-negligence-claims-scotland` | GP negligence | Keep if offered; parent medical |
| `birth-injury-claims-scotland` | birth injury claim | Keep only with genuine expertise; parent medical |
| `serious-injury-rehabilitation-scotland` | rehabilitation in serious claims | Keep; parent serious |
| `fatal-accident-compensation-scotland` | fatal claim Scotland | Keep if offered; parent serious or future fatal pillar |
| `slip-trip-fall-claims-scotland` | slip/trip claim | Keep; parent public place |
| `supermarket-accident-claims-scotland` | supermarket accident | Keep if distinct evidence advice; parent public place |
| `council-pavement-trip-claims-scotland` | council pavement claim | Keep after legal correction/review; parent public place |
| `offshore-injury-claims-scotland` | offshore injury claim | Keep only with verified jurisdictional expertise; parent work |
| `vibration-white-finger-claims-scotland` | HAVS/VWF claim | Keep; parent industrial |
| `care-home-negligence-claims-scotland` | care-home negligence | Keep only if service scope clear; may involve different legal theories; parent medical/PI |
| `prescription-error-claims-scotland` | prescription error | Keep; parent medical |
| `cancer-misdiagnosis-claims-scotland` | cancer misdiagnosis | Keep only with verified expertise; parent medical |
| `cycling-accident-claims-scotland` | cycling accident | Keep; parent RTA |
| `motorcycle-accident-claims-scotland` | motorcycle accident | Keep; parent RTA |
| `no-win-no-fee-scotland-explained` | funding explained | **Merge/301** to funding pillar |

If more guides exist after the inspected excerpt, apply the same rule: one primary intent, one canonical owner, and no service-page duplicate.

### Query groups to target within existing pages

- **Commercial:** accident claims Scotland; personal injury claims/solicitors Scotland; RTA, work, public place, clinical negligence, serious injury, industrial disease and CICA claims Scotland.
- **Eligibility:** can I claim; partly at fault; employer/council/public authority; child; cross-border; delayed diagnosis.
- **Evidence/process:** accident report, witness/CCTV, medical records/report/examination, liability denied, settlement, court attendance.
- **Funding:** no win no fee Scotland; deductions; success fee; outlays; insurance; who pays.
- **Compensation:** solatium; loss of earnings; care/treatment/travel/future needs; how valuation works. Do not publish a calculator until its methodology, sources and limitations are legally reviewed.
- **Conversational/AI:** “What happens after I contact a Scottish personal injury solicitor?”, “Does contacting a solicitor stop the three-year clock?”, “Is CICA the same as suing the attacker?”, “Can a Scottish court allow a late personal-injury action?”

## 5. AI search and answer-engine audit

### Current assessment

Core answers are extractable because the pages render meaningful text without interaction and use question headings, answer boxes and lists. That is a sound foundation for Google AI Overviews, Bing/Copilot, ChatGPT search, Perplexity, Gemini and other retrieval systems.

The entity layer is unusable, however. The site asks systems to connect `[LAW FIRM NAME]`, `Accident Claims Scotland`, a placeholder address and an unverified `LegalService`. There are no real people, reviewer credentials, regulator profiles, consistent external identities or source citations. This makes confident citation unsafe. Commodity wording and repetitive location pages provide little reason for an answer engine to cite this domain over primary sources or established Scottish firms.

### Specific improvements

1. Put a verified entity panel on every page: “This website is operated by X. Legal services are provided by Y, a Scottish solicitor practice regulated by Z, membership number N. Enquiries go to Y / are referred to Y under [plain explanation].”
2. Give every legal article a named Scottish solicitor author or reviewer, profile URL, relevant accreditation/experience, `datePublished`, `dateModified`, review scope and citations.
3. Write 40–80 word answer blocks that state the general rule, the important qualification and the next safe step.
4. Link legal claims inline to legislation/GOV.UK/SCTS/HSE/NHS/ICO sources.
5. Separate civil negligence, CICA, employment/benefits, statutory disease schemes and complaints routes in comparison tables.
6. Publish original material only when verifiable: anonymised case methodology, evidence checklists, process timelines, expert interviews or aggregated first-party questions. Do not invent results.
7. Maintain stable terminology and IDs across visible copy and JSON-LD.
8. Make authorship, editorial policy and corrections process crawlable.

### Useful comparison block

| Route | Who decides/pays | Core test | Typical deadline warning | Key source |
|---|---|---|---|---|
| Civil personal-injury claim | Negotiated with defender/insurer or determined by a Scottish court | Fault/duty, breach, causation and loss | Court proceedings generally must be raised within the applicable limitation period | 1973 Act; SCTS |
| CICA application | Criminal Injuries Compensation Authority | Eligibility under the 2012 Scheme; tariff and evidence rules | Adult applications normally within two years, subject to limited exceptions | GOV.UK/CICA |
| Workplace safety complaint | HSE/local authority as regulator | Possible safety-law breach | Not a substitute for a damages claim | HSE |
| NHS complaint | Relevant NHS board/ombudsman route | Service/complaint standards | Not the same as a damages action and does not necessarily protect limitation | NHS Scotland/SPSO |

## 6. Content gaps and actions

Review and consolidate before creating anything.

| Page/action | URL | Intent | Proposed H2 structure | Gap evidence | Priority/legal review |
|---|---|---|---|---|---|
| Expand core eligibility | Existing PI pillar | eligibility for Scottish PI claim | What a claim is; elements; who may claim; shared fault; evidence; special cases; next step | Current direct answer is too categorical | High; solicitor |
| Expand funding with actual terms | Existing NWNF pillar | costs/deductions | Agreement used; if lose; if win; success fee; VAT; outlays; insurance; termination; examples; questions to ask | Provider terms absent | Critical; solicitor/compliance |
| Expand limitation | Existing limitation pillar | three-year rule/date of knowledge | s17; knowledge facts; children; death; incapacity; disease; clinical negligence; s19A; CICA/cross-border exclusions | Current summaries conflate “make/start claim” with raising proceedings | Critical; solicitor |
| Add “who handles your enquiry” | About + contact, not a new thin URL | provider/referral model | Operator; recipient; legal provider; regulator; data sharing; acceptance; complaints | Entity cannot be identified | Critical; compliance |
| Add medical assessment guide | Existing process/evidence page or one guide | do I need a medical examination | Why; who instructs; independence; records; attendance; report; privacy; disputed findings | Explicit user intent not fully owned | Medium; solicitor + clinician review |
| Add child claimant section | Existing PI + limitation pages | child personal injury claim Scotland | Who can act; limitation; settlement/court safeguards; capacity/turning 16; advice | Important special case | High; solicitor |
| Add cross-border section | Existing PI/process page | accident outside Scotland / non-Scottish parties | Applicable law/jurisdiction; travel/package/product routes; shorter limits; urgent advice | Current Scotland-wide assertion lacks boundary | High; specialist review |
| Strengthen fatal claims | Existing guide; new pillar only if truly offered | fatal accident claims Scotland | Who may claim; estate/deceased claim; relatives; financial dependency; evidence; inquests/FAI distinction; limitation | Current serious-injury paragraph is too compressed | High; specialist |
| Editorial policy | About sub-section or `/editorial-policy` only if substantive | how legal content is produced | Authors; review cadence; sources; corrections; AI use; conflicts | Needed for YMYL trust | Medium; compliance |

### Do not create

- Ten more town pages or neighbourhood pages.
- “Solicitors near me” doorway pages.
- Separate thin pages for every synonym of accident claim/compensation lawyer.
- A second limitation, no-win-no-fee, RTA, work-accident or compensation overview.
- “Average payout” pages or calculators without current, Scottish-relevant methodology and solicitor sign-off.
- Office pages without genuine staffed locations.
- Case-result or testimonial pages without auditable evidence, consent and qualifications.

## 7. Topical authority and internal-link plan

| Cluster | Pillar | Supporting pages | Natural anchors | Commercial value / merge controls |
|---|---|---|---|---|
| Core PI | `/personal-injury-claims-scotland` | eligibility, evidence, shared fault, denied liability, court | “evidence for a Scottish injury claim”, “if fault is shared” | Highest; homepage remains brand/commercial gateway, not a duplicate |
| Process/funding/compensation | process, funding, compensation and limitation pillars | medical exam, evidence, court, valuation | “three-year limitation framework”, “how funding deductions work” | High; merge overview guides into pillars |
| Road traffic | RTA pillar | whiplash, cycling, motorcycle; future pedestrian/MIB only if substantive | “road-traffic claim evidence”, “uninsured driver claims” | High; redirect duplicate RTA guide |
| Work | work pillar | construction, offshore; future employer reassurance section | “accident at work claim”, “preserve workplace evidence” | High; merge duplicate overview |
| Public place | public-place pillar | slip/trip, supermarket, council pavement | “occupiers’ liability claim”, “council road-defect evidence” | Medium/high; distinguish occupier vs roads authority |
| Medical | medical pillar | proof, NHS, GP, birth, prescription, cancer, care home | “breach and causation in clinical negligence” | High but highest YMYL review burden |
| Serious/fatal | serious pillar | rehabilitation, fatal guide | “future-care evidence”, “relatives’ claims after a death” | High; no injury micro-pages without depth |
| Industrial disease | industrial pillar | asbestos, NIHL, HAVS, delayed symptoms | “date of knowledge in disease claims” | High; cite disease/statutory scheme distinctions |
| CICA | CICA pillar | one reviewed guide only if a distinct sub-intent appears | “CICA’s two-year application rule” | Medium; isolate from civil three-year messaging |
| Location | one Scotland service-area hub initially | at most verified high-value city pages | “serving people across Scotland” | Medium; no exact-match footer spam |

### Linking rules

- Every guide links once near the first relevant decision point to its pillar, once to limitation when time-sensitive, once to funding where relevant and once to contact with a descriptive non-pressuring CTA.
- Pillars link to 3–6 genuinely useful guides, not every article.
- Breadcrumbs: Home → Claim type/Guides → Article. City pages: Home → Areas served → City, if an areas hub exists.
- Vary anchors naturally; avoid sitewide exact-match city anchors.
- Add automated orphan checking to CI and maintain one content registry for URL, parent, primary intent, author, reviewer and dates.

## 8. On-page, trust and conversion review

### Above the fold

Current H1 and proposition are keyword-clear but unsupported. Replace with a factual formulation after provider verification:

> **Personal injury claims in Scotland, handled by [verified firm].**  
> Speak to a Scottish personal-injury team about whether a civil claim or another route may apply. An initial enquiry does not guarantee that your case will be accepted.

Directly below:

> Accident Claims Scotland is [trading style/website] operated by [legal entity]. Legal services are provided by [firm], regulated by [regulator] under membership number [verified number]. [Explain referral relationship, if any.]

### Form

- Ask only the minimum needed initially: name, one contact method, broad claim category, date and short description.
- Explain who receives the data before the submit button.
- Offer phone, email and accessible callback options, but only real monitored channels.
- Do not promise “confidential” until data flows/processors/security are documented.
- State a realistic response window and what to do if a limitation date is close. Make clear that submitting the form does not stop a time limit and does not create a solicitor-client relationship.
- Preserve entered values when validation/delivery fails.
- Confirmation must provide a reference and be sent only after durable acceptance.

Suggested acknowledgement:

> **We have received your enquiry (reference [ID]).** It will be reviewed by [verified recipient]. We aim to contact you within [verified period]. Sending this form does not mean that a solicitor has accepted your case and does not stop any legal time limit. If a deadline may be close, seek urgent independent advice.

### Claims requiring evidence or amendment

Remove or prove:

- “Regulated by the Law Society of Scotland”
- “our Scottish solicitors”
- “regulated Scottish practice”
- “solicitor-led claims/service”
- every “we handle” claim type
- “no win, no fee available”
- “no obligation” and “confidential” operational promises
- office/location coverage claims
- author/reviewer and date assertions
- implied expertise in offshore, birth injury, cancer, asbestos and catastrophic injury

Legally qualify:

- “accident was not your fault” (shared fault can still be relevant).
- “within the last three years” (not the complete statutory test; proceedings generally need to be raised in time).
- “missing the deadline extinguishes your right” (use careful limitation language; distinguish prescription).
- court discretion under section 19A (never imply extension is routine).
- compensation/time estimates.
- “you will not pay if unsuccessful” unless the actual agreement deals with outlays, insurance, termination, dishonesty/non-cooperation and adverse expenses.
- employer/job reassurance; do not promise no employment consequences.

## 9. Competitor review

The public search snapshot on 28 July 2026 surfaced these organic competitors. Rankings vary by location, device and personalisation; this is not a rank report.

| Competitor | Visible strength | Weakness/opportunity | Practical lesson |
|---|---|---|---|
| Winn Solicitors (Scotland) LLP, `winnscotland.com` | Clear firm identity, contact details, service categories, process and partner network | Broad promotional statements need close qualification | Match entity clarity and exceed it with transparent funding and primary sources |
| Scotland Claims, `scotlandclaims.co.uk` | Strong “100% compensation” differentiation and callback journey | Aggressive guarantees/comparisons create evidential/compliance questions | Differentiate through balanced, verifiable explanation rather than superlatives |
| ACS Accident Claims Scotland, `accidentclaimsscotland.co.uk` | Exact-match brand history and focused PI categories | Potentially dated/generic presentation | Avoid brand confusion; make legal entity and domain unmistakable |
| Scottish Accident, `scottishaccident.co.uk` | Multilingual intake, clear registered/FCA identity, end-to-end accident-management proposition | Claims-management/referral model differs from a solicitor practice | State model as clearly; accessible multilingual service is a real differentiator if operationally supported |
| Stewart Legal, `stewartlegal.co.uk` | Named specialist/solicitor-advocate positioning, broad Scottish PI scope | Broad scope still requires deep topic support | Named expertise is more persuasive than anonymous “specialists” |
| Gildeas, `gildeas.net` | Recognised Scottish firm, Law Society-accredited specialist claim, guide assets | Some publisher material may be less structured for answers | Build verifiable expert profiles and accessible HTML guides |
| Slater and Gordon Scotland | Brand authority, detailed Scottish funding content | National brand may feel less locally specific | Win on precise Scots-law explanations and transparent local responsibility |
| SCTS/GOV.UK/HSE/NHS/legislation.gov.uk | Primary authority and high citation trust | Not commercial or personalised | Cite them; add plain-English decision support they do not provide |

Backlink strength, traffic and conversion cannot be inferred from SERPs. Use licensed backlink data and analytics before claiming a gap.

## 10. Legal accuracy and authoritative-source review

### Limitation

The key source is the [Prescription and Limitation (Scotland) Act 1973](https://www.legislation.gov.uk/ukpga/1973/52/contents). The site should explain that section 17 generally bars an action for personal injuries unless proceedings are brought within the statutory period calculated under the section, including the relevant date-of-knowledge provisions. It should identify the statutory knowledge facts accurately, not reduce them to “discovering negligence”. Section 19A gives the court equitable discretion to allow an otherwise time-barred personal-injury action, but exercise is case-specific and never guaranteed. Children, incapacity, death, disease, abuse, product liability, accidents abroad and CICA require separate analysis.

Use “limitation” for the personal-injury triennium and avoid casually calling it a “prescriptive period”. Most importantly, **contacting a solicitor or submitting this form is not the same as raising court proceedings**.

### CICA

The [official CICA guide](https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide) says adult applications should normally be made as soon as reasonably practicable and not later than two years after the incident, with distinct provisions for applicants who were under 18 and limited extension conditions. Eligibility and awards come from the 2012 Scheme/tariff. This is not an ordinary negligence action and must not inherit the sitewide three-year wording.

### Court process

The [Scottish Courts and Tribunals Service National Personal Injury Court page](https://scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/) confirms an all-Scotland specialist sheriff court. Do not imply every claim is brought there or that the user will never attend court. Explain that forum/procedure depends on the case and that many claims settle without a proof/trial.

### Funding

The site must publish the actual Scottish funding arrangement, not a generic “no win no fee” slogan. Have a Scottish solicitor check the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 framework and applicable success-fee regulations/current professional guidance. Explain:

- what agreement the client signs;
- whether the percentage includes VAT;
- which damages form the calculation base and any statutory cap;
- treatment of future damages;
- outlays and after-the-event insurance;
- adverse expenses/QOCS limits and exceptions;
- early termination, rejection of advice, dishonesty or non-cooperation;
- who receives recovered judicial expenses.

### Privacy/marketing

The enquiry is likely to contain health information. The controller/processor/referral chain, lawful basis, special-category condition, retention, international transfers and data-subject rights need specific review. Cookie consent is required before non-essential storage/access under PECR; a static cookie policy is not a consent mechanism. Claims-management marketing may also engage FCA rules depending on the operator/model. See the [ICO cookies guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) and [ASA/CAP claims-management guidance](https://www.asa.org.uk/advice-online/litigation-claims-management.html).

## 11. Schema plan

### Use after verification

- Sitewide: `Organization` (or `LegalService` only when the operator really is the regulated provider), `WebSite`.
- Service page: `WebPage` + `Service`, `isPartOf`, `provider` pointing to one verified organisation ID.
- Article: `Article` with real `Person` author/reviewer, actual dates and publisher.
- Breadcrumbs: `BreadcrumbList`.
- FAQs: `FAQPage` only for visible, non-repetitive questions; do not expect Google rich results.
- City page: `WebPage`/`Service.areaServed`; no `LocalBusiness` or local address unless a genuine location operates there.

### Verified-value template

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.accident-claims-scotland.com/#organization",
      "name": "REPLACE WITH VERIFIED LEGAL NAME",
      "alternateName": "Accident Claims Scotland",
      "url": "https://www.accident-claims-scotland.com/",
      "telephone": "REPLACE WITH VERIFIED VALUE",
      "email": "REPLACE WITH VERIFIED VALUE",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "REPLACE WITH VERIFIED VALUE",
        "addressLocality": "REPLACE WITH VERIFIED VALUE",
        "postalCode": "REPLACE WITH VERIFIED VALUE",
        "addressCountry": "GB"
      },
      "sameAs": [
        "REPLACE WITH VERIFIED REGULATOR OR OFFICIAL PROFILE URL"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.accident-claims-scotland.com/#website",
      "url": "https://www.accident-claims-scotland.com/",
      "name": "Accident Claims Scotland",
      "publisher": {
        "@id": "https://www.accident-claims-scotland.com/#organization"
      }
    }
  ]
}
```

If the website operator and legal provider differ, model both as separate organisations and state the relationship visibly; do not collapse them into one entity.

## 12. Reusable AI-search-friendly answer blocks

These are editorial starting points, not approved legal text.

**What is a personal-injury claim in Scotland?**  
A personal-injury claim is a civil claim seeking damages for injury and related loss caused by another person or organisation’s legally actionable fault. A claimant generally needs evidence of fault, causation and loss. Different rules may apply to criminal injuries, workplace schemes, clinical negligence and cross-border cases. Source: Prescription and Limitation (Scotland) Act 1973 and specialist Scottish advice.

**Can I make an accident claim in Scotland?**  
You may be able to claim if Scots law applies, another party was legally at fault, that fault caused injury and loss, and court proceedings can still be raised in time. Shared fault does not always prevent a claim, but may reduce damages. Eligibility depends on the facts and evidence.

**Who may be eligible?**  
An injured adult, a child acting through an appropriate representative, or in some circumstances relatives or an executor after a death may have a claim. The correct claimant, procedure and time limit depend on the circumstances, so specialist advice is important.

**What if I was partly at fault?**  
A claim may still be possible. Under contributory-negligence principles, damages can be reduced to reflect the claimant’s share of responsibility. The percentage is evidence- and case-specific; it should not be predicted without examining the facts.

**What is the personal-injury time limit in Scotland?**  
For many Scottish personal-injury actions, court proceedings generally must be raised within three years of the injury or a later statutory date of knowledge. The calculation and exceptions are fact-sensitive. Children, incapacity, death, disease, abuse, CICA and cross-border matters may differ. Contacting a solicitor alone does not raise proceedings. Source: 1973 Act, sections 17–19A.

**What does date of knowledge mean?**  
Date of knowledge is a statutory concept used when relevant facts about the injury, its attribution and the defender were not known at the time. It is not automatically the date of diagnosis or the date someone was told “negligence occurred”. Actual and reasonably discoverable knowledge may matter. A Scottish solicitor should assess the evidence.

**What evidence will I need?**  
Useful evidence can include medical records, accident reports, photographs, CCTV, witness details, correspondence, employment records and proof of financial loss. The evidence needed varies by claim. Preserve it promptly and avoid changing or overstating what happened.

**Will I need a medical examination?**  
Often, medical evidence is needed to connect the accident with the injury and assess prognosis. A solicitor may arrange an independent examination by an appropriate expert. Whether one is needed, and what records are reviewed, depends on the claim.

**How much compensation might be available?**  
There is no reliable figure without evidence. Scottish damages may include compensation for pain and suffering (often called solatium) and proved past or future financial losses such as earnings, care, treatment or travel. Severity, prognosis, causation and evidence all affect value.

**What losses can be included?**  
Depending on the case, damages may cover solatium, lost earnings, care and assistance, treatment, travel, equipment, accommodation and future needs. Every item must be legally recoverable, caused by the wrong and supported by evidence; double recovery is not allowed.

**How long can a claim take?**  
There is no fixed duration. A straightforward admitted-liability claim may resolve sooner than a serious-injury, clinical-negligence or disputed-liability case. Treatment, prognosis, expert evidence and court procedure can all affect timing. Do not settle before the evidence allows a responsible valuation.

**Will I have to go to court?**  
Many claims settle without a proof or trial, but court proceedings may be needed to protect a time limit or resolve liability/value. Starting proceedings does not necessarily mean a final hearing. Your solicitor should explain the forum, risks and whether attendance may be required. Source: SCTS.

**How does no win no fee work in Scotland?**  
“No win no fee” is a general label, not a complete price. The written agreement should explain what happens if the claim wins or loses, any success fee or deduction, VAT, outlays, insurance, adverse-expense risk and termination. Terms vary, so read the actual agreement before signing.

**Could fees or deductions apply?**  
Yes, depending on the agreement. A success fee, VAT, insurance premium or unrecovered outlay may be relevant, while statutory caps and special treatment may apply to parts of damages. The provider should give a worked explanation based on its verified terms.

**Can I claim against my employer without losing my job?**  
An employee may have a civil claim where an employer’s breach caused injury, and employers commonly carry liability insurance. Employment consequences cannot be guaranteed. Keep records, obtain advice and raise any retaliation or dismissal concern with an employment-law specialist.

**Can a child make a claim?**  
Potentially, yes, through the appropriate adult procedure. Scottish limitation and court safeguards for children differ from the standard adult position. Because age, capacity and settlement approval affect the route, seek Scottish advice promptly rather than waiting.

**How does CICA differ from a civil claim?**  
CICA applies the Criminal Injuries Compensation Scheme and tariff; it is not a negligence action and the offender does not need to be sued. Adult applications are normally subject to a two-year rule, with limited exceptions. A civil claim may sometimes exist separately. Source: GOV.UK/CICA.

**What happens after I make an enquiry?**  
The recipient should confirm who has received the information, check urgency and conflicts, assess whether the matter is within scope, and explain funding and next steps. An enquiry is not the same as case acceptance and does not stop a time limit. The current website must not use this block until its form actually delivers enquiries.

## 13. 30/60/90-day implementation plan

### First 72 hours

- Disable or unpublish the public form and unsupported claims.
- Remove placeholder JSON-LD and local-business markup.
- Decide whether to place the whole domain behind a maintenance/noindex response.
- Preserve logs and investigate whether anyone has used the simulated form.
- Establish real ownership, controller and legal-provider facts.

### Days 1–30

- Implement/test secure enquiry delivery and operational response.
- Replace all placeholders and create verified About, Contact, Privacy, Cookies, Terms and Complaints content.
- Complete solicitor review of homepage, PI, limitation, funding and CICA pages first.
- Remove/noindex thin city pages.
- Fix lint and create CI release gates.
- Create one content registry and merge duplicate intents with single-hop 301s.

### Days 31–60

- Review remaining service pages and highest-value guides.
- Add expert profiles, citations, real dates and editorial policy.
- Add measured analytics/consent and connect GSC/Bing.
- Run accessibility testing with keyboard, screen reader, 200%/400% zoom and mobile devices.
- Establish CWV baseline and fix template-level issues.

### Days 61–90

- Relaunch only after compliance sign-off and end-to-end form tests.
- Submit clean sitemap; request recrawl for priority pages.
- Begin evidence-led digital PR and expert commentary, not bulk link building.
- Use real query/conversion data to decide which city pages and new guides deserve investment.
- Review qualified-enquiry rate, not raw form volume.

## Final conclusion

The site’s information architecture is substantially better than a typical thin exact-match lead-generation site, and it could become a useful Scottish personal-injury resource. Its present public implementation, however, creates a severe mismatch between appearance and reality. The launch gate is not “more SEO content”; it is verified identity, lawful and truthful operation, real enquiry delivery, accountable Scottish legal review and removal of fabricated placeholder signals. Only after those are fixed should indexation, local expansion, AI visibility and conversion optimisation proceed.
