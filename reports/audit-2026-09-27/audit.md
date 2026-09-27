# Technical SEO and AI-citation audit (27 September 2026)

Site: https://accident-claims-scotland.com. Builds on `reports/audit-2026-09-20/audit.md` and `reports/phase2-build-log-2026-09.md`. It does not repeat items those reports closed.

## Method and evidence

- **Build crawl.** `npm run build` (static export, 125 HTML documents), then every file in `out/` was parsed for title, meta description, robots, canonical, H1 to H4, `<a href>`, and JSON-LD. A breadth-first search from `/` measured click depth and inlinks. This is the exact HTML a crawler receives before any JavaScript runs.
- **Live checks.** DataForSEO on-page fetches of `/`, `/nhs-negligence-claims-scotland` and `/images/hero-bg.jpg`, plus Lighthouse 13.4 (desktop) on `/medical-negligence-claims-scotland`. This container's network policy blocks direct requests to the domain.
- **Labels.** **Mandatory** = a spec or Google requirement that is broken. **Recommended** = Google or W3C best practice. **Experimental** = unconfirmed or beta signals.

## Summary

| # | Issue | Class | Status |
|---|---|---|---|
| 1 | 18 internal links on 11 pages return 404 | Mandatory | **Fixed** |
| 2 | `/scotland-personal-injury-statistics` is in the sitemap but has no inlinks | Recommended | **Fixed** |
| 3 | Homepage H1 and H2 say "Solicitors" on a site that says it is not a law firm | Recommended (trust, YMYL) | **Fixed** |
| 4 | The No Win No Fee H1 has the same "Solicitors" conflict | Recommended | **Fixed** (H1 only, URL unchanged) |
| 5 | Homepage answer block promises an "assessment" and is not an extractable answer | Recommended | **Fixed** |
| 6 | Some titles are too long or duplicate the brand; the PI hub title targets the wrong intent | Recommended | **Fixed** |
| 7 | JSON-LD: wrong `about`, breadcrumb given as a text string, a dangling `@id`, "The Borders" typed as a City | Recommended | **Fixed** |
| 8 | Sitemap `lastmod` is a fixed date for 49 URLs | Recommended | **Fixed** |
| 9 | A guide's legal correction is not reflected in its `dateModified` | Recommended | **Fixed** |
| 10 | Content-hashed JS/CSS bundles have no long-lived cache policy | Recommended | **Fixed** (inference, see below) |
| 11 | Cloudflare Early Hint preloads a 404 image | Recommended | Open (dashboard setting) |
| 12 | Two noindex location pages are orphaned | Recommended | Open (your decision) |
| 13 | Articles have no named author or reviewer, and the Organization has no `logo` or `sameAs` | Recommended (YMYL E-E-A-T) | Open (needs real data) |
| 14 | Weak internal linking to 8 detail pages (1 inlink each) | Recommended | Open |
| 15 | FAQPage, HowTo, Speakable and llms.txt: what to expect from each | Informational | No change |

Checked and found correct: every indexable URL has one H1 and a self-referencing canonical. Every sitemap URL returns a built page, and no noindex page is in the sitemap. All JSON-LD parses. All 112 URLs in `llms.txt` resolve. Critical content and links are in the initial HTML, so nothing depends on client-side rendering. Lighthouse lab results: LCP 0.40 s, CLS 0, total blocking time is negligible, and the SEO score is 100. robots.txt matches the stated policy (details under item 15).

---

## Phase 1: Information architecture and internal links

### 1. Broken internal links from the "Related Claim Types" pills

- **Target URL / Template:** `ClaimPageTemplate` → related pill row (`src/components/ClaimPageTemplate.tsx`). Affected pages: `/manual-handling-injury-claims-scotland`, `/shop-accident-claims-scotland`, `/delayed-diagnosis-claims-scotland`, `/dental-negligence-claims-scotland`, `/occupational-dermatitis-claims-scotland`, `/hotel-accident-claims-scotland`, `/hospital-infection-claims-scotland`, `/contributory-negligence-road-accident-scotland`, `/occupational-asthma-claims-scotland`, `/self-employed-injury-claims-scotland` (plus `/nhs-negligence-claims-scotland`, linked 3 times).
- **Element / Signal:** Internal links that return 404.
- **Diagnostic Finding & Evidence:** Section links go through `resolveInternalHref()`, which rewrites guide slugs to `/guides/*`. The pill row rendered `r.href` directly, so 18 links pointed at flat URLs that were never built. Examples: `/nhs-negligence-claims-scotland`, `/gp-negligence-claims-scotland`, `/asbestos-claims-scotland`, `/fatal-accident-claims-scotland`, and the typo `/uninsured-driver-claim-scotland`. A live DataForSEO fetch of `https://accident-claims-scotland.com/nhs-negligence-claims-scotland` returned **HTTP 404**. Google follows links to discover pages and uses anchor text as a relevance signal (Search Central, "Link best practices"). A 404 target wastes the link and the crawl request, and sends users to a dead end on a YMYL page.
- **Implementation / Code Fix (shipped):**
  ```tsx
  {related.flatMap((r) => {
    const href = resolveInternalHref(r.href);
    return href ? [{ ...r, href }] : [];
  }).map((r) => ( <Link key={r.href} href={r.href}>…</Link> ))}
  ```
  Also corrected at source: the typo now points to `/uninsured-driver-claims-scotland`, and the two medical pages now link "Fatal Medical Negligence Claims" to `/medical-negligence-claims-scotland/fatal-medical-negligence-claims`, a closer topical match than the general fatal-accident guide. A re-crawl finds **0 broken internal links** (it was 18).

### 2. Orphaned statistics page

- **Target URL / Template:** `/scotland-personal-injury-statistics`
- **Element / Signal:** Orphan page (listed in the sitemap, 0 internal links to it).
- **Diagnostic Finding & Evidence:** A BFS from `/` never reached the page, and no HTML document linked to it. It exists only in `sitemap.xml` and `llms.txt`. Google says a sitemap helps discovery but does not replace linking ("Every page you care about should have a link from at least one other page", Search Central, "Link best practices"). A statistics page is also the page most likely to be cited by AI answer engines, which find pages through links.
- **Implementation / Code Fix (shipped):** `src/components/Footer.tsx`, Information column:
  ```ts
  { label: "Injury Statistics", href: "/scotland-personal-injury-statistics" },
  ```
  The page is now at depth 1 from every page.

### 12. Orphaned noindex location pages (open)

- **Target URL / Template:** `/borders-accident-claims`, `/dumfries-accident-claims`
- **Element / Signal:** Unlinked resources.
- **Diagnostic Finding & Evidence:** Both are built and set to `noindex, follow`, and neither is in `LOCATIONS` or linked anywhere (0 inlinks). They cannot rank, and no user can reach them. They were also listed as "City" entities in the Organization `areaServed` (fixed in item 7).
- **Implementation / Code Fix:** Your decision. Either delete `src/app/borders-accident-claims/` and `src/app/dumfries-accident-claims/`, which makes the URLs 404 (Google treats 404 and 410 almost the same), or add them to `LOCATIONS` so users can reach them. No change was made.

### 14. Detail pages with a single inlink (open)

- **Target URL / Template:** `/contributory-negligence-road-accident-scotland`, `/early-insurer-offers-road-accident-scotland`, `/fatal-road-accident-claims-scotland`, `/serious-road-traffic-injury-claims-scotland`, `/child-road-accident-claims-scotland`, `/needlestick-injury-claims-scotland`, `/dental-negligence-claims-scotland`, `/occupational-dermatitis-claims-scotland`
- **Element / Signal:** Low internal link equity (depth 2, 1 inlink each, from the hub only).
- **Diagnostic Finding & Evidence:** These pages are shallow enough, but they get no contextual links from the guides that cover the same questions. For example, `/guides/can-i-claim-if-partly-at-fault-scotland` does not link to the contributory negligence road page. Contextual anchors help Google understand how pages relate (Search Central, "Link best practices").
- **Implementation / Code Fix:** In `src/data/extendedGuideContent.tsx`, add one in-body link per pair:

  | Guide | Link to |
  |---|---|
  | can-i-claim-if-partly-at-fault | `/contributory-negligence-road-accident-scotland` |
  | what-is-my-accident-claim-worth | `/early-insurer-offers-road-accident-scotland` |
  | fatal-accident-compensation | `/fatal-road-accident-claims-scotland` |
  | serious-injury-rehabilitation | `/serious-road-traffic-injury-claims-scotland` |
  | nhs-negligence-claims-scotland-explained | `/dental-negligence-claims-scotland` |
  | noise-induced-hearing-loss / vibration-white-finger | `/occupational-dermatitis-claims-scotland` |

  Not shipped: this is editorial copy and should go into the planned solicitor review.

### Page-type intent map (reference)

| Template | Primary entity | Intent | Conversion |
|---|---|---|---|
| `/` | Accident Claims Scotland (the website) | Navigational and informational | Enquiry form (hero) |
| Pillar hubs (`/*-claims-scotland`) | The claim category under Scots law | Commercial investigation | CTA → `/contact` |
| Pillar children (`/{pillar}/{slug}`) | A specific injury or scenario | Informational, with commercial follow-on | CTA → `/contact` |
| `/guides/*` | A question ("Can I…", "How long…") | Informational | Related guides → hub |
| Road traffic detail (flat) | The road-accident scenario | Commercial investigation | CTA → `/contact` |
| Glasgow and Edinburgh | Claims in that city | Local commercial | Enquiry form |
| Trust pages | The organisation | Navigational | none |

---

## Phase 2: On-page copy

### 3. Homepage H1 and H2 claim "Solicitors"

- **Target URL / Template:** `/` (`src/app/page.tsx`)
- **Element / Signal:** H1 and H2 do not match the page's entity.
- **Diagnostic Finding & Evidence:** Live H1: "Accident Claims Scotland: Personal Injury Solicitors Helping People Claim Compensation". Live H2: "Accident Claim Solicitors Across Scotland". The meta description, `/about` and `llms.txt` all say the site is *not a law firm*. Google's Search Quality Rater Guidelines put pages on legal and financial topics (YMYL) under the highest trust standard, and contradictory claims about who is responsible for a site reduce trust. Nothing is penalised automatically. The problem is misrepresentation, and it may also breach Law Society of Scotland and CAP rules on who may call themselves a solicitor. AI engines that quote the H1 would repeat the false claim.
- **Implementation / Code Fix (shipped):**
  - H1: `Accident Claims in Scotland: How Personal Injury Compensation Works`
  - H2: `Accident Claim Information Across Scotland`
  - Card "Expert guidance / …claims handled with specialist knowledge…" → `Sourced guidance / Personal injury, medical negligence, industrial disease and serious injury guides that cite legislation and official sources.`
  - Card "No obligation enquiry": removed "We will give you an honest assessment of your claim", because an information site cannot promise an assessment.

### 4. No Win No Fee H1

- **Target URL / Template:** `/no-win-no-fee-solicitors-scotland`
- **Element / Signal:** H1 and breadcrumb label.
- **Diagnostic Finding & Evidence:** H1 "No Win No Fee Solicitors Scotland" has the same conflict as item 3. The page title already reads "No Win No Fee Claims Scotland — How Funding Works", so the H1 did not match the title either.
- **Implementation / Code Fix (shipped):** H1 → `No Win No Fee Claims in Scotland: How Funding Works`; breadcrumb → `No Win No Fee Claims Scotland`. The URL is unchanged. Renaming it needs a 301 and your approval, as the 20 Sep audit notes.

### 5. Homepage answer block (AI-extractable summary)

- **Target URL / Template:** `/` → `.answer-box`
- **Element / Signal:** Opening summary block.
- **Diagnostic Finding & Evidence:** The old 64-word block ended in a sales line ("A free enquiry will give you a clear initial assessment"). It also stated the date-of-knowledge rule loosely. Under the Prescription and Limitation (Scotland) Act 1973 s.17, the three years run from the later of the injury date or the date the person became aware of the facts, and s.17(3) disregards time under legal disability, including being under 16.
- **Implementation / Code Fix (shipped, 59 words):**
  > Usually, yes, if someone else's negligence caused your injury and you act within three years. Under Scots law that period runs from the accident or, if later, the date you knew the injury was serious enough to claim and was caused by someone else. Time under 16 does not count. You must prove fault and that it caused your injury.

### 6. Title and description replacements

Google may rewrite titles it judges to be too long or poorly matched to the page ("Influencing title links"). Meta descriptions are not a ranking factor. Their job is to earn the click from a snippet.

- **Target URL / Template:** `/`
  - **Element / Signal:** Title is 81 characters and truncated; the description is 190 characters, so "Not a law firm." is cut off.
  - **Implementation / Code Fix (shipped):** Title `Accident Claims Scotland | Personal Injury Claim Information`. Description `How personal injury claims work in Scotland: the three-year time limit, evidence, no win no fee funding and compensation. Plain-English guidance on Scots law. Not a law firm.`
- **Target URL / Template:** `/scotland-personal-injury-statistics`
  - **Element / Signal:** Title is 88 characters with the brand appended by hand (the root layout has no title template, so the brand only appears where a page adds it).
  - **Implementation / Code Fix (shipped):** `Scotland Personal Injury Statistics — Official Data & Figures`
- **Target URL / Template:** `/personal-injury-claims-scotland`
  - **Element / Signal:** Title does not match the page's intent.
  - **Diagnostic Finding & Evidence:** The title was "Personal Injury Claims Scotland — Free Claim Enquiry", which is transactional wording for a 1,600-word informational hub.
  - **Implementation / Code Fix (shipped):** Title `Personal Injury Claims Scotland — Time Limits, Proof and Funding`. Description `How a personal injury claim works in Scotland: who can claim, the three-year time limit, what must be proved, how no win no fee funding works and what compensation covers.` The OG tags are updated to match.

Proposed, not shipped (low priority): 8 of the 10 location templates are noindex, so their H1s do not matter for search. For the two indexable pages, shorten the H1 from "Accident Claims Glasgow: Personal Injury Claim Information for Glasgow and Surrounding Areas" to `Accident Claims in Glasgow: Personal Injury Claim Information`, and the same for Edinburgh.

---

## Phase 3: Structured data

### 7. Entity binding errors

- **Target URL / Template:** `src/lib/schema.ts` (every page)
- **Element / Signal:** Wrong or unresolved JSON-LD relationships.
- **Diagnostic Finding & Evidence:**
  1. `WebPage.about` and `Article.about` pointed to `#organization`. That tells knowledge graphs every guide is *about the website*, not about, say, GP negligence. schema.org defines `about` as "the subject matter of the content".
  2. `WebPage.breadcrumb` was a URL string, which schema.org's type system reads as a text or URL value, not a reference to the BreadcrumbList.
  3. The homepage WebPage pointed at `/#breadcrumb`, but its BreadcrumbList had no `@id`, so the reference dangled.
  4. `areaServed` listed "The Borders" and "Dumfries" as `City`, and those pages are noindex.
  5. `parentOrganization` had no `@id`, so it could not be referenced.
- **Implementation / Code Fix (shipped):**
  ```ts
  // Organization
  parentOrganization: { "@type": "Organization", "@id": `${SITE.url}/#operator`, name: "Ola Consultants Ltd", legalName: "Ola Consultants Ltd" },
  areaServed: { "@type": "Country", name: "Scotland", sameAs: "https://www.wikidata.org/wiki/Q22" },
  // WebSite
  inLanguage: "en-GB",
  // WebPage
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE.url}/#organization` },
  breadcrumb: { "@id": `${SITE.url}${url}#breadcrumb` },   // was a string; `about` removed
  // Article
  mainEntityOfPage: `${SITE.url}${url}`,                     // `about` removed
  ```
  Homepage: `breadcrumbSchema([{ name: "Home", url: SITE.url }], "/")`. Verified after the build: every `breadcrumb.@id` on all 125 documents resolves to a BreadcrumbList on the same page.

### 13. Author, reviewer, logo and sameAs (open, needs real data)

- **Target URL / Template:** Every Article (62 pages) and the Organization node.
- **Element / Signal:** No named Person entity, no `logo`, no `sameAs`.
- **Diagnostic Finding & Evidence:** Articles name the Organization as author. Google accepts that as valid, but for legal YMYL content its Quality Rater Guidelines and "Creating helpful, reliable, people-first content" ask "who created the content" and whether they have relevant expertise. The Organization has no `logo`. Google's Organization documentation recommends one (at least 112×112 px, crawlable), and `sameAs` links to verifiable profiles. None can be invented. They must be real.
- **Implementation / Code Fix (fill in real values, then add to `schema.ts`):**
  ```json
  {
    "@type": "Organization",
    "@id": "https://accident-claims-scotland.com/#operator",
    "name": "Ola Consultants Ltd",
    "legalName": "Ola Consultants Ltd",
    "identifier": { "@type": "PropertyValue", "propertyID": "Companies House", "value": "<company number>" },
    "sameAs": ["https://find-and-update.company-information.service.gov.uk/company/<company number>"]
  }
  ```
  ```json
  "reviewedBy": {
    "@type": "Person",
    "@id": "https://accident-claims-scotland.com/about#<reviewer-slug>",
    "name": "<full name>",
    "jobTitle": "Solicitor",
    "memberOf": { "@type": "Organization", "name": "Law Society of Scotland" },
    "sameAs": ["<Law Society of Scotland Find a Solicitor profile URL>"]
  }
  ```
  Put `reviewedBy` on the WebPage node, and add `logo: { "@type": "ImageObject", url: ".../logo.png", width: 512, height: 512 }` once a square logo file exists in `public/`.

---

## Phase 4: Crawl, rendering and delivery

### 8. Sitemap `lastmod` was hard-coded

- **Target URL / Template:** `/sitemap.xml` (`src/app/sitemap.ts`)
- **Element / Signal:** Inaccurate `<lastmod>`.
- **Diagnostic Finding & Evidence:** All 41 static pages, 2 location pages and 10 road pages had `lastmod` 2026-07-29, although many were edited in Batches 1 to 10 (for example the homepage copy and the hub link repairs in September). Google "uses the `<lastmod>` value if it's consistently and verifiably accurate" (Search Central, "Build and submit a sitemap"). A fixed date teaches Google to ignore the field. Google also ignores `<priority>` and `<changefreq>`. They are harmless and were left in.
- **Implementation / Code Fix (shipped):** `lastmod` is now the last git commit date of the page's source file (`git log -1 --format=%cI -- <file>`). If the repository is shallow, as in a CI checkout, it falls back to the old fixed date, so dates are never misreported as the clone date. Guides and pillar children keep their explicit `dateModified`.

### 9. Stale `dateModified` after a legal correction

- **Target URL / Template:** `/guides/council-pavement-trip-claims-scotland`
- **Element / Signal:** `dateModified` (Article schema, visible date, sitemap).
- **Diagnostic Finding & Evidence:** Commit `852dc4d` (23 Sep 2026) corrected a material legal error in this guide (the roads-authority defence), but `guides.ts` still said `2026-07-29`. Google recommends updating `dateModified` when content changes significantly ("Influence your byline dates").
- **Implementation / Code Fix (shipped):** `dateModified: "2026-09-23"`.

### 10. Cache policy for hashed assets

- **Target URL / Template:** `/_next/static/*`
- **Element / Signal:** HTTP `Cache-Control`.
- **Diagnostic Finding & Evidence:** *Inference, not measured.* `public/_headers` sets only security headers. Cloudflare Pages' default for static assets forces a revalidation on every request. Next.js names every file under `/_next/static/` by its content hash, so the file never changes and can be cached for a year (web.dev, "HTTP cache"). The live Lighthouse run showed no performance problem (LCP 0.40 s), so the gain is fewer conditional requests on repeat visits. To verify after deploy: `curl -sI https://accident-claims-scotland.com/_next/static/chunks/<file>.js | grep -i cache-control`.
- **Implementation / Code Fix (shipped):**
  ```
  /_next/static/*
    Cache-Control: public, max-age=31536000, immutable
  ```

### 11. Early Hint preloads a 404 (open)

- **Target URL / Template:** All pages → `Link: </images/hero-bg.jpg>; rel=preload`
- **Element / Signal:** Resource that returns 404.
- **Diagnostic Finding & Evidence:** Still live: a DataForSEO fetch of `/images/hero-bg.jpg` returned **404** today. Nothing in the repository emits this header, so it comes from Cloudflare's Early Hints cache (first raised on 20 Sep). Every visit wastes a request.
- **Implementation / Code Fix:** In the Cloudflare dashboard, go to Speed → Optimization → Content Optimization and purge the cache, or turn Early Hints off and on again. Code cannot fix this.

### Rendering and mobile (checked, no issue)

- Static export: each route's HTML already contains its H1, body copy, navigation links, breadcrumbs and JSON-LD. The build crawl read all of them without running JavaScript. The DataForSEO fetch without JavaScript returned the full heading tree for `/`.
- One HTML document serves every device, with a responsive layout, so mobile and desktop content match by construction. Lighthouse lab (desktop): LCP 0.40 s, CLS 0, max potential FID 21 ms. No field (CrUX) data was available. Check the Core Web Vitals report in Search Console for mobile field INP.
- Status codes: www and http redirect to the bare HTTPS host with one 301 (verified 20 Sep, middleware unchanged). Unknown URLs return a real 404 (verified today), so there are no soft 404s.

---

## 15. Signals to keep, with realistic expectations

| Signal | Status | Expectation |
|---|---|---|
| FAQPage (114 pages) | Valid, matches visible FAQs | Since August 2023 Google shows FAQ rich results only for well-known government and health sites. Expect none here. The markup is still valid and gives machines a clean Q&A structure. |
| HowTo (`/how-to-claim-compensation-scotland`) | Valid | Google removed HowTo rich results in September 2023. No SERP effect. |
| Speakable | Present | Google calls it beta, for news publishers, US English. No effect for this site. The selectors are harmless. |
| `llms.txt` | 112 URLs, all resolve | A community proposal. No major answer engine has confirmed it uses the file. Keep it accurate at low cost. |
| robots.txt AI rules | Correct for the stated policy | GPTBot, ClaudeBot, CCBot and Google-Extended are training crawlers and are blocked. OAI-SearchBot (ChatGPT search), Claude-SearchBot, PerplexityBot and Googlebot (which also feeds AI Overviews) are allowed by `User-agent: *`. Blocking Google-Extended does not affect Search or AI Overviews (Google, "Common crawlers"). |

## Validation

`npm run check` passes: placeholder check, ESLint, `tsc`, `next build` (129 routes) and the pillar checker (30 children). A re-crawl of the build shows 0 broken internal links, 0 orphan indexable pages, one H1 per page, self-canonicals on all indexable pages, and every JSON-LD block parses with no dangling `@id`.

Changes reach the live site only after a Cloudflare Pages deploy. After deploy, resubmit with `npm run indexnow` and request re-crawl of `/` in Search Console.
