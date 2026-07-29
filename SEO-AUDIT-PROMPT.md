# Accident Claims Scotland — Full SEO, AI Search, Legal Content and Conversion Audit Prompt

Act as a senior SEO strategist, technical website auditor, AI-search optimisation specialist, Scottish personal-injury market researcher, legal-content reviewer, accessibility specialist and conversion-focused website consultant.

Carry out a full audit of the **Accident Claims Scotland** website and its local codebase.

## Audit targets

- **Codebase:** the `accident-claims-scotland` project supplied with this prompt
- **Live website:** determine the production canonical URL from the codebase, deployment configuration and verified live pages before beginning the audit
- **Framework:** inspect the repository and report the actual framework, version, rendering approach and deployment setup; do not rely on assumptions
- **Known route families to inspect:** the homepage; personal-injury, road-traffic, accident-at-work, public-place, medical-negligence, serious-injury, industrial-disease, criminal-injury, compensation, claims-process, time-limit and no-win-no-fee pages; guides; contact/about pages; Scottish city/location pages; and all legal, privacy, cookie, complaints and accessibility pages

The purpose is not to produce a generic SEO report. Produce a practical, evidence-led and commercially focused audit showing exactly how the website can improve its visibility in:

- Google and Bing organic search
- Google AI Overviews
- ChatGPT-style search and answers
- Perplexity
- Gemini
- Claude
- Other answer engines and retrieval-based assistants

The website is intended to generate qualified enquiries from people seeking information or legal help following accidents, injuries, occupational exposure or medical negligence in Scotland. Its commercial focus appears to include Scottish personal-injury claims and no-win-no-fee representation or referral where genuinely available. Verify the actual services, business model, geographic coverage and regulated provider before describing them.

---

## Important safeguards

- Audit the live website and the supplied codebase. Do not rely on assumptions, filenames or page titles alone.
- Record the date and time of live checks. Cite the exact URL and evidence for every material finding.
- Treat the site as a **YMYL legal and health-related website**.
- Verify all statements about Scots law, court procedure, limitation/prescription, compensation, funding, fees, medical issues and regulatory status against current authoritative Scottish or UK sources.
- Prefer primary sources such as legislation.gov.uk, the Scottish Courts and Tribunals Service, the Scottish Parliament, the Law Society of Scotland, the Scottish Legal Complaints Commission, the Financial Conduct Authority where relevant, the Information Commissioner’s Office, the Health and Safety Executive, NHS inform, the Criminal Injuries Compensation Authority and official UK or Scottish Government material.
- Distinguish Scots law from the law of England and Wales. Do not apply English Civil Procedure Rules, English fixed-cost rules, the English “three-year limitation” formulation or English legal terminology without verifying that it applies in Scotland.
- Explain the relevance of the **Prescription and Limitation (Scotland) Act 1973**, including the general three-year personal-injury limitation framework, the date-of-knowledge provisions and the court’s equitable discretion, accurately and without presenting any exception or discretion as guaranteed.
- Treat claims involving children, people lacking capacity, fatal accidents, historic abuse, industrial disease, clinical negligence, product liability, accidents abroad, criminal injuries and cross-border facts as potentially subject to different rules. Flag where specialist advice is essential.
- Distinguish ordinary civil personal-injury claims from:
  - Criminal Injuries Compensation Authority applications
  - workplace/industrial-disease claims
  - medical or clinical negligence claims
  - Fatal Accidents Act or relatives’ claims under Scots law
  - employment, benefits, insurance or statutory compensation routes
- Do not imply that these routes are interchangeable.
- Do not give individual legal or medical advice.
- Do not state or imply that compensation, liability, funding, settlement, timescale or case acceptance is guaranteed.
- Do not invent traffic, rankings, search volume, backlinks, conversions, case results, awards, reviews, accreditations, office locations, solicitor identities or competitor metrics. Label estimates and inferences clearly.
- Assess whether “no win, no fee” wording explains the actual funding arrangement, possible deductions, success fees, insurance, unrecovered expenses and circumstances in which a client might pay. Apply the relevant Scottish rules and verify the provider’s terms.
- Assess whether compensation figures or calculators are current, sourced, appropriately qualified and relevant to Scotland.
- Assess whether medical terminology is accurate, plain and appropriately qualified.
- Verify whether the website is itself a regulated law firm, a trading style, a lead generator, a claims-management business or a marketing/referral website. Make the identity, ownership, regulatory status and role of every service provider explicit.
- Check the applicable regulator rather than assuming SRA regulation. For a Scottish solicitor practice, verify Law Society of Scotland details. If another UK legal entity is involved, verify its regulator and jurisdiction.
- Check whether the website’s marketing, testimonials, comparisons, contact forms, cookies and data use comply with applicable professional rules, consumer-protection standards, CAP guidance, PECR and UK GDPR.
- Do not recommend fabricated local offices, doorway pages, fake local testimonials, self-serving review schema or location pages without distinct user value.
- Do not recommend FAQ schema merely to pursue rich results. Discuss its limited Google eligibility and use it only when it truthfully describes visible content.
- Separate:
  1. confirmed live or code-level findings;
  2. reasonable inferences;
  3. checks requiring Search Console, Bing Webmaster Tools, analytics, call tracking, CRM, server logs, hosting, consent platform or deployment access.

---

# 1. Executive Summary

Begin with a plain-English summary of the website’s current position.

Include:

- What the site does well
- What is holding it back
- The biggest missed opportunities
- Whether it looks trustworthy enough for an injured person choosing a Scottish claims solicitor or claims service
- Whether it has sufficient topical depth and genuinely useful original content
- Whether Google and AI systems can clearly identify:
  - the organisation and website owner;
  - the regulated legal provider, if different;
  - the service or referral model;
  - the jurisdictions and geographic coverage;
  - the claim types offered;
  - named experts, authors and reviewers;
  - contact details and physical locations;
  - fees and funding arrangements
- Whether it is immediately clear who may be eligible, which accident and injury types are handled, what deadlines may apply and what happens after an enquiry
- Whether Scots-law concepts and terminology are used consistently
- Whether the city pages provide distinct local value or create doorway-page/thin-content risk
- The top 10 actions to take first, ordered by commercial impact, legal/compliance risk and implementation effort

---

# 2. Confirmed Findings vs Access-Dependent Checks

Create two clearly separated tables.

## Confirmed findings

Include items verified through live crawling, rendering, source inspection, repository inspection, headers, structured-data testing or manual testing.

## Access-dependent checks

Identify exactly what must be checked in:

- Google Search Console
- Bing Webmaster Tools
- GA4 or other analytics
- Consent-management platform
- CRM and call tracking
- Server/CDN logs
- Hosting and deployment platform
- Backlink tools
- Rank-tracking tools
- Form delivery or email system

For every access-dependent check, state the report, metric or evidence required and the decision it would inform.

---

# 3. Technical SEO Audit

Review:

- Indexability and crawlability
- Production vs preview/staging host indexation
- Site architecture and click depth
- URL structure and trailing-slash consistency
- Navigation, breadcrumbs and internal linking
- Page speed and Core Web Vitals
- Mobile usability and mobile conversion flow
- Broken links and redirect chains
- Duplicate, overlapping, templated and thin content
- City/location-page similarity and doorway-page risk
- Title tags and meta descriptions
- H1/H2 hierarchy
- Canonicals
- XML sitemap generation, accuracy and `lastmod`
- `robots.txt`
- Structured data and schema validation
- Image sizes, formats, dimensions, responsive delivery and lazy loading
- Descriptive alt text and correct empty alt attributes for decorative images
- JavaScript rendering and progressive enhancement
- Server rendering/static generation/client rendering behaviour
- Next.js-specific metadata, routing, caching and image issues based on the installed version and its local documentation
- Hosting, CDN, cache headers and Cloudflare issues, if observable
- Generated URLs, query parameters and search/filter pages
- 404 and soft-404 behaviour
- Redirect behaviour for HTTP/HTTPS, www/non-www, uppercase and trailing-slash variants
- Open Graph, X/Twitter and social metadata
- Internationalisation or `hreflang`, only if actually relevant
- Accessibility affecting injured, disabled, neurodivergent or assistive-technology users
- Form usability, keyboard operation, validation, error messages and success states
- Analytics/event tracking and consent behaviour where observable
- Security and trust signals visible to users, including mixed content and unsafe form handling

For each issue state:

- Finding
- Status: Confirmed, Inference or Access Required
- Evidence and affected URL(s), route(s), file(s) or component(s)
- Why it matters
- Severity: Critical, High, Medium or Low
- Exact fix
- Expected impact: SEO, AI visibility, conversion, trust, compliance, accessibility or performance
- Owner: developer, SEO, content, solicitor/compliance, design or analytics

---

# 4. Scottish Personal-Injury Keyword and Search-Intent Audit

Use current UK search results and available keyword evidence. Do not describe a keyword as high-volume without reliable data.

Group relevant searches into:

- Primary commercial keywords
- Secondary and semantic keywords
- Long-tail keywords
- Question-led searches
- No-win-no-fee searches
- Compensation amount and calculator searches
- Eligibility searches
- Time-limit and date-of-knowledge searches
- Evidence, medical report and liability searches
- Injury and condition searches
- Accident-type searches
- Employer/public-body/occupier/negligence searches
- Claims-process searches
- Scotland-wide searches
- City and regional searches only where useful and non-duplicative
- Problem-aware, service-aware and high-intent enquiry searches
- AI conversational queries

Assess, where supported by search demand and genuine services:

- Accident claims Scotland
- Personal injury claims Scotland
- Personal injury solicitor Scotland
- Accident lawyer Scotland
- No win no fee solicitors Scotland
- Road traffic accident claims Scotland
- Car accident claims Scotland
- Accident at work claims Scotland
- Public place accident claims Scotland
- Slip trip and fall claims Scotland
- Medical negligence claims Scotland
- Serious injury claims Scotland
- Industrial disease claims Scotland
- Criminal injury compensation Scotland
- CICA claims Scotland
- Fatal accident claims Scotland
- Compensation claims Scotland
- How to claim compensation in Scotland
- Personal injury compensation Scotland
- Personal injury claim time limit Scotland
- How long do I have to claim after an accident in Scotland?
- What is date of knowledge in a Scottish injury claim?
- Can I claim if an accident was partly my fault?
- What evidence do I need for a personal injury claim?
- Do I need a medical examination?
- How much compensation could I receive?
- How long does a personal injury claim take in Scotland?
- Will I have to go to court?
- Who pays my legal fees?
- What does no win no fee mean in Scotland?
- Can I claim against my employer?
- Can I claim against a council or public authority?
- Can a child make a personal injury claim in Scotland?
- Can I claim for an accident that happened outside Scotland?
- Edinburgh, Glasgow, Aberdeen, Dundee, Inverness, Perth, Stirling, Falkirk, Ayr and Paisley accident/personal-injury searches, only where the site genuinely serves those users

For every indexable major page recommend:

- Current URL
- Page status: Keep, Expand, Merge, Redirect, Noindex or Remove
- One primary keyword and intent
- Supporting keywords and entities
- Recommended title tag
- Recommended H1
- Recommended meta description
- Missing sections
- Recommended internal links
- Cannibalisation risk
- Local-page uniqueness requirement where relevant

Provide a complete keyword-to-URL map assigning one clear primary intent to every indexable page.

---

# 5. AI Search and Answer-Engine Audit

Assess whether AI systems can understand, retrieve, quote and safely summarise the website.

Check for:

- A concise definition of a Scottish personal-injury claim
- Direct but qualified eligibility answers
- Clear explanations of duty, breach/fault, causation, loss and evidence
- Accurate explanations of limitation and date of knowledge in Scotland
- A step-by-step enquiry and claims process
- Balanced compensation guidance
- A clear explanation of no win, no fee, deductions, insurance, outlays and financial risks
- Explanations for each genuine claim type
- A clear distinction between ordinary civil claims, CICA applications, workplace claims, industrial-disease claims, clinical negligence and fatal-accident claims
- Useful answers about contributory negligence, medical evidence and court attendance
- FAQs based on real claimant concerns
- Named and appropriately qualified authors and legal reviewers
- Published and reviewed dates
- Evidence of relevant Scottish experience
- Clear ownership, law-firm/provider identity, regulatory details and claims-handling responsibility
- Citations to primary and authoritative sources
- Structured, self-contained, extractable answer passages
- Consistent entity information
- Accurate schema
- Strong contextual relationships between pages
- Original content worth citing, rather than paraphrased commodity copy
- Server-rendered access to core content without interaction

Recommend specific improvements for AI visibility. Supply suggested short-answer blocks, comparison tables and FAQs, legally qualified and free of guarantees.

---

# 6. Content Gap Analysis

Review all current pages before proposing new ones. Do not propose a new URL where an existing page should be expanded, merged or repositioned.

Assess:

- The core Scottish personal-injury service
- Road-traffic claims
- Workplace accidents
- Public-place and occupiers’ liability claims
- Medical/clinical negligence
- Serious and catastrophic injury
- Industrial disease and occupational illness
- Criminal injury/CICA
- Fatal accidents and bereavement claims, if offered
- Cycling, motorcycle, pedestrian and public-transport claims, if offered
- Product liability, abuse, accidents abroad or public-authority claims, only if offered
- Eligibility, liability and contributory negligence
- Evidence, medical assessment and valuation
- Compensation heads of loss
- Claims process
- Time limits and date of knowledge
- Funding, fees and no-win-no-fee terms
- Guides, FAQs and glossary
- Case studies and compensation examples, only where verifiable and compliant
- About, provider, team, author and reviewer pages
- Regulatory, complaints, privacy, cookie, terms and accessibility pages
- Contact and eligibility-check pages
- Scottish location pages and whether each has real distinct value

Consider these as candidates, not mandatory URLs:

- `/personal-injury-claims-scotland/`
- `/road-traffic-accident-claims-scotland/`
- `/accident-at-work-claims-scotland/`
- `/public-place-accident-claims-scotland/`
- `/medical-negligence-claims-scotland/`
- `/serious-injury-claims-scotland/`
- `/industrial-disease-claims-scotland/`
- `/criminal-injury-compensation-scotland/`
- `/personal-injury-compensation-scotland/`
- `/personal-injury-claim-time-limits-scotland/`
- `/how-to-claim-compensation-scotland/`
- `/no-win-no-fee-solicitors-scotland/`
- injury-specific, evidence and process guides
- existing Scottish city routes

For every recommended content action provide:

- Page title
- Existing or proposed URL
- Primary keyword
- Supporting keywords/entities
- Search intent
- Page summary
- Proposed H2 structure
- Why it matters
- Evidence that it fills a real gap
- Priority
- Action: Create, Expand, Merge, Redirect, Noindex or Remove
- Legal-review requirements

Explicitly identify pages that should **not** be created because they would duplicate another intent or become doorway pages.

---

# 7. Topical Authority Plan

Build a topical map around these candidate clusters, modifying them to match the services actually offered.

## A. Core Scottish Personal-Injury Claims

- Personal-injury claims in Scotland
- Eligibility
- Negligence/fault and causation
- Claims process
- No win no fee and legal costs
- Compensation
- Time limits and date of knowledge
- Evidence and medical assessment

## B. Accident Types

- Road-traffic accidents
- Car, motorcycle, cycling and pedestrian accidents
- Accidents at work
- Slips, trips and public-place accidents
- Occupiers’ and public-authority liability
- Criminal injuries/CICA
- Other accident types only where genuinely handled

## C. Injury and Harm

- Serious and catastrophic injury
- Brain, spinal and orthopaedic injuries
- Psychological injury
- Medical/clinical negligence
- Industrial disease and occupational illness
- Fatal accidents and relatives’ claims
- Rehabilitation, treatment and future needs

## D. Legal, Evidence and Compensation

- Duty of care, fault and contributory negligence
- Prescription and limitation in Scotland
- Accident, witness and documentary evidence
- Medical reports and independent examinations
- Solatium/general damages and financial losses, using accurate Scots terminology
- Loss of earnings, care, treatment and future losses
- Offers, settlement, litigation and court attendance
- Children and protected/vulnerable claimants

## E. Scottish Service Areas and Local Relevance

- Scotland-wide service
- Edinburgh
- Glasgow
- Aberdeen
- Dundee
- Inverness
- Perth
- Stirling
- Falkirk
- Ayr
- Paisley
- Other places only when justified by genuine service coverage and distinct content

For every cluster identify:

- Pillar page
- Supporting pages
- Search intents and keywords
- Internal links and suggested natural anchors
- FAQ opportunities
- Commercial value
- Priority
- Pages that should not be created
- Pages that should be merged to prevent cannibalisation

---

# 8. Page-Level and On-Page SEO Review

Review and improve:

- Titles and meta descriptions
- H1/H2 structure
- Introductions
- Direct-answer summaries
- Copy depth and originality
- Internal links
- Calls to action
- FAQs
- Author and reviewer information
- Source citations
- Trust language
- Readability and tone for injured or distressed users
- Accessibility
- Conversion wording
- Template repetition across claim and location pages

Where useful, rewrite weak examples.

Assess whether relevant pages clearly answer:

- What type of claim is this?
- Who may be eligible?
- Does Scots law apply?
- What if fault is disputed or shared?
- What evidence is needed?
- Is a medical examination required?
- What compensation may be recoverable?
- What is the applicable time limit?
- How does date of knowledge work?
- Are different rules possible for children, capacity, death, disease, abuse, CICA or cross-border cases?
- How long might a claim take?
- Might the claimant need to attend court?
- How does no win no fee work?
- What deductions, outlays or insurance costs could apply?
- Who will provide the legal service?
- What happens after an enquiry?

---

# 9. Competitor Review

Identify genuine current organic-search competitors for Scottish accident and personal-injury claims. Include:

- Scottish specialist personal-injury firms
- Relevant Scottish pages of established UK firms
- Strong informational publishers competing for the same searches
- Current competitors visible for the site’s priority commercial and informational queries

Do not rely on a fixed list or confuse paid advertisers with organic competitors.

Assess:

- Competing domains and specific ranking URLs
- Their strongest topics and keyword coverage
- Content depth, originality and freshness
- Scottish-law accuracy
- Trust and regulatory signals
- Named expertise and legal review
- Case studies, outcomes and substantiated proof
- Internal-linking and hub structure
- FAQ and answer-engine strategy
- Backlink/digital-PR strengths using available evidence
- Conversion journey
- Local strategy
- Weaknesses or inaccuracies that Accident Claims Scotland can address ethically

For each competitor, explain the practical lesson and how the site can differentiate through clear Scots-law guidance, verified expertise, transparent funding, claimant-centred content and a credible local service.

---

# 10. Trust, Authority, Compliance and Conversion Review

Assess:

- Above-the-fold proposition
- Eligibility messaging
- Calls to action
- Callback/enquiry forms
- Phone, email and accessible contact options
- Form length, field necessity, privacy reassurance and error handling
- Confirmation and follow-up expectations
- No-win-no-fee explanation and financial-risk wording
- Identity and legal role of the website owner
- Identity of the instructed or receiving law firm
- Law Society of Scotland or other relevant regulatory details and links
- Named solicitors, authors and reviewers
- Relevant credentials and Scottish experience
- Reviews and testimonials, with verifiability and platform/source
- Case studies and compensation examples
- Process, fee and timescale clarity
- Complaints information and route to the relevant body
- Legal disclaimers
- Privacy, cookies and consent
- Referral, lead-generation and data-sharing transparency
- Claims marketing and professional-advertising compliance
- Visual credibility
- Mobile enquiry journey
- Accessibility for injured and disabled users
- Alternatives to telephone contact
- Reassurance about confidentiality, employer contact and litigation, without unsupported promises

Flag every claim requiring evidence, amendment or legal qualification. Optimise for qualified enquiries rather than conversion volume alone.

---

# 11. Schema Markup Plan

Recommend only schema types matching visible, verifiable content. Consider:

- `Organization`
- `LegalService` or `ProfessionalService`
- `WebSite`
- `WebPage`
- `Service`
- `Person`
- `Article`
- `BreadcrumbList`
- `FAQPage` only where accurate and useful, with a warning about Google rich-result eligibility

Do not:

- use `LocalBusiness` or local addresses unless the business genuinely operates at the declared location;
- mark every Scottish city page as a separate office;
- use self-serving review markup;
- invent addresses, opening hours, awards, prices, authors, professional memberships or sameAs profiles.

Explain where each type belongs. Provide valid JSON-LD examples using placeholders for facts that could not be verified, clearly marked `REPLACE WITH VERIFIED VALUE`. Ensure organisation names, URLs, logos, addresses, contact details, regulator information, authors and `sameAs` properties remain consistent.

---

# 12. Internal-Linking Strategy

Provide:

- A page-to-page linking matrix
- Pillar/hub pages and priority commercial destinations
- Suggested contextual anchor text
- Links from informational guides to relevant claim, time-limit, funding and contact pages
- Links among accident-type, injury, evidence and compensation pages
- Links from city pages to useful national service content
- Breadcrumb recommendations
- Orphan-page prevention
- Cannibalisation safeguards
- Guidance against repetitive exact-match anchors
- Guidance against inserting location anchors merely for SEO

---

# 13. AI-Search-Friendly Content Blocks

Write reusable, legally cautious blocks for:

- What is a personal-injury claim in Scotland?
- Can I make an accident claim in Scotland?
- Who may be eligible?
- What if I was partly at fault?
- What is the personal-injury time limit in Scotland?
- What does date of knowledge mean?
- What evidence will I need?
- Will I need a medical examination?
- How much compensation might be available?
- What losses can be included?
- How long can a claim take?
- Will I have to go to court?
- How does no win no fee work in Scotland?
- Could any fees or deductions apply?
- Can I claim against my employer without losing my job?
- Can a child make a claim?
- How does a CICA application differ from a civil personal-injury claim?
- What happens after I make an enquiry?

For each block:

- Lead with a direct answer
- Use plain English
- State material qualifications
- Avoid guarantees
- Identify when individual Scottish legal advice is required
- Suggest an authoritative primary source
- Keep the answer concise enough for featured snippets or answer-engine extraction

---

# 14. Measurement Plan

Recommend a framework covering:

- Google Search Console and Bing Webmaster Tools
- Organic landing-page performance
- Rankings by topic cluster
- Branded vs non-branded search
- Scotland-wide vs city-query performance
- AI referrals where detectable
- Eligibility-form starts, step progression and completions
- Form submissions
- Phone and email clicks
- Callback requests
- Qualified enquiry rate
- Accepted/instructed client rate if lawful and available
- Conversion rate by landing page, channel and device
- Core Web Vitals
- Index coverage
- Content freshness and review dates

Define event names, trigger conditions, parameters and primary/secondary conversions. Include consent-mode, cookie, call-recording, sensitive personal data and privacy considerations. Do not assume analytics or call tracking is configured.

---

# 15. Prioritised 30-, 60- and 90-Day Roadmap

## First 30 days

- Critical crawl, indexation and status-code fixes
- Legal, regulatory, privacy or trust risks
- Organisation/provider clarity
- Metadata and heading improvements
- High-value legal-content corrections
- Core service, eligibility, limitation and contact journey
- Conversion quick wins
- Basic eligible schema
- Internal-linking fixes
- Form accessibility and consent
- Location-page quality or indexation decisions

## Days 31–60

- Priority accident-type, evidence, compensation and limitation content
- Stronger distinctions between civil, CICA, clinical-negligence and workplace routes
- AI-friendly answer blocks and FAQs
- Author, legal-review and source improvements
- Accessibility and mobile improvements
- Consolidation of overlapping content

## Days 61–90

- Remaining competitor gaps
- Original authority content
- Verifiable case studies or examples
- Ethical digital PR and link acquisition
- Partnerships/citations from relevant Scottish legal, safety, health and community resources
- Ongoing publishing and legal-review schedule
- Conversion testing

For every action state:

- Action
- Why it matters
- Exact implementation approach
- Affected live URL, repository route, file, template or component
- Owner: developer, SEO, content, solicitor/compliance, design or analytics
- Priority: Critical, High, Medium or Low
- Expected impact: SEO, AI visibility, conversion, trust, compliance, accessibility or performance
- Effort: Small, Medium or Large
- Dependencies/access required
- Acceptance criteria

---

# Required Output Format

Use clear headings, concise tables and actionable recommendations. Prefer evidence and exact examples over vague best practice.

Deliver these sections in order:

1. Executive summary
2. Site identity, business model, jurisdiction and technology verified
3. Confirmed findings vs access-dependent checks
4. Technical audit
5. Complete keyword-to-URL map
6. AI-search audit
7. Content gaps
8. Topical map
9. Page-level SEO recommendations
10. Competitor analysis
11. Trust, compliance and conversion review
12. Schema plan
13. Internal-linking matrix
14. Reusable answer blocks
15. Measurement plan
16. 30-, 60- and 90-day roadmap
17. Final developer checklist
18. Final content and solicitor/compliance checklist

For evidence:

- Cite live URLs and authoritative sources as clickable links.
- Cite repository evidence with exact file paths and line numbers.
- State the date checked.
- Label every inference as **Inference**.
- Label every unverified statement as **Requires verification**.
- Include screenshots or rendered evidence for visual, responsive or accessibility problems when tools allow.
- Never present estimated rankings, volumes, authority or impact as measured fact.

---

# Second Deliverable: Implementation Instructions for Claude Code

After the audit, create a separate output titled:

## Implementation Instructions for Claude Code

Translate confirmed audit findings into implementation-ready work based on the actual repository. Do not invent filenames, routes, components, framework APIs or integrations.

Before proposing changes:

1. Read `AGENTS.md` and `CLAUDE.md`.
2. Inspect `package.json`, the installed Next.js version and relevant local Next.js documentation.
3. Inspect all routes under `src/app`.
4. Inspect shared components under `src/components`.
5. Inspect content/configuration under `src/data`.
6. Inspect schema helpers, sitemap generation, robots rules, metadata, forms and analytics.
7. Check the working tree and preserve unrelated user changes.

Cover:

- File- and component-level changes
- Page expansion, consolidation, redirects, noindexing or removal
- Metadata and heading changes
- Copy corrections and direct-answer blocks
- Schema additions or corrections
- Internal-link changes
- Sitemap, robots, canonical and status-code fixes
- Performance improvements
- Accessibility improvements
- Mobile usability
- Form and conversion improvements
- Analytics events with consent safeguards
- Tests and validation

For each task include:

| Field | Requirement |
|---|---|
| Task ID | Stable ID such as `TECH-001`, `CONTENT-001`, `TRUST-001` |
| Priority | Critical, High, Medium or Low |
| Evidence | Audit finding and URL/file evidence |
| Relevant files/routes | Exact existing paths; if unresolved, say what must be located |
| Exact change | Specific implementation instruction |
| Acceptance criteria | Objective pass/fail conditions |
| Dependencies | Access, approval, verified legal copy, design or external configuration |
| Validation | Build, lint, automated test, structured-data test, crawl, Lighthouse, axe, manual QA or legal review |
| Owner | Developer, SEO, content, solicitor/compliance, design or analytics |
| Risk/rollback | Main implementation risk and safe rollback where relevant |

Order tasks so Claude Code can begin with the highest-value, lowest-risk confirmed work without further explanation.

Do not instruct Claude Code to publish unreviewed legal content, fabricate business facts, add fake local entities, deploy without approval or alter unrelated code.

Finish with:

- A recommended implementation sequence
- Commands/tests to run, based only on scripts actually present in `package.json`
- A route-by-route QA checklist
- A list of facts and copy requiring solicitor/compliance approval
- A list of tasks blocked by missing access or unverified business information
