# AI citation baseline, 29 Oct 2026

One sample, taken once, before most changes had been live for an hour. Repeat with the same questions
monthly (see the measurement spec). **Result: accident-claims-scotland.com was not cited in any of the 10 answers.**

## Method and limits
- Date/time: 29 Oct 2026, about 20:35-20:38 UTC. Location: United Kingdom, language: en.
- ChatGPT: DataForSEO ChatGPT scraper with web search forced (5 questions). Perplexity: DataForSEO LLM API, model `sonar-pro`, web search on (same 5 questions).
- Not sampled: Google AI Overviews / AI Mode, Bing Copilot, the consumer apps themselves. API output can differ from what a person sees. Answers vary run to run; one sample proves little.

## Fixed questions
1. How long do I have to make a personal injury claim in Scotland?
2. How does no win no fee work for personal injury claims in Scotland?
3. What evidence do I need for a road traffic accident claim in Scotland?
4. Can I claim compensation for an accident at work in Scotland?
5. Will benefits be deducted from my personal injury compensation in Scotland?

## What was cited (domains; full URLs in the raw responses)
| Q | ChatGPT cited | Perplexity cited |
|---|---|---|
| 1 | legislation.gov.uk (PLSA 1973), citizensadvice.org.uk/scotland, scotlawcom.gov.uk, gov.scot | citizensadvice.org.uk/scotland, mfmac.com, thorntons-law.co.uk, irwinmitchell.com, parliament.scot, harpermacleod.co.uk, carpentersgroup.co.uk, scotlawcom.gov.uk |
| 2 | mygov.scot, citizensadvice.org.uk/scotland, parliament.scot (SB 2653, SB 2424) | citizensadvice.org.uk/scotland, irwinmitchell.com, harpermacleod.co.uk, thompsons-scotland.co.uk, slatergordon.co.uk, joneswhyte.co.uk, mshblegal.com |
| 3 | mygov.scot, scottishciviljusticecouncil.gov.uk | drummondmiller.co.uk, joneswhyte.co.uk, harpermacleod.co.uk, scottishclaimshelpline.co.uk, legalexpert.co.uk, deeside.com, beaconjournal.com |
| 4 | citizensadvice.org.uk/scotland, legislation.gov.uk | irwinmitchell.com, citizensadvice.org.uk/scotland, thompsons-scotland.co.uk, harpermacleod.co.uk, national-accident-helpline.co.uk, mshblegal.com, digbybrown.co.uk |
| 5 | gov.uk (CRU guidance), moneyhelper.org.uk, mygov.scot, legislation.gov.uk | citizensadvice.org.uk/scotland, scotlawcom.gov.uk, personal-injury-claims-scotland.co.uk, lawhive.co.uk, sintons.co.uk, parliament.scot, legislation.gov.uk |

Patterns:
- ChatGPT leaned entirely on official and public-body sources (legislation, Citizens Advice Scotland, mygov.scot, Scottish Parliament, SCJC, GOV.UK). No law firm or claims site appeared in its five answers.
- Perplexity mixed official sources with regulated Scottish firms (Harper Macleod, Thompsons, Digby Brown, Jones Whyte, Thorntons) and a few claims-helpline or lead-style sites.
- Citizens Advice Scotland's personal-injury page appeared in 9 of 10 answers.

## Implications (hypotheses, not measured effects)
- Citation share for generic questions looks driven by authority. This site's best route is being the clear, sourced, Scotland-specific page that links to the same primary sources; it already links to many.
- The no-win-no-fee answers cited the statutory success-fee cap (20% / 10% / 2.5% bands) and Scottish Parliament briefings. Check that /no-win-no-fee-solicitors-scotland states the cap correctly and links the Scottish Parliament briefing.
- Correction (same day): Perplexity's links to scotlawcom.gov.uk files in a "2026-02" folder are upload paths, not report dates. `rep207.pdf` is the December 2007 report (Scot Law Com No 207), not a new one. The Commission's Report on Damages for Personal Injury (No 266) is a separate, December 2024 report with a draft Damages (Scotland) Bill; I could not confirm that any bill has been introduced or enacted. See the limitation check below.

## Next sample
Repeat the same five questions in about 4 weeks, adding Google (AI Overviews, UK) and Bing Copilot by hand, and record whether accident-claims-scotland.com appears.

## Limitation reform check (29 Oct 2026)
- Section 17 of the Prescription and Limitation (Scotland) Act 1973 (three years, date of knowledge) is what the site relies on; I found no sign it has been changed.
- Report No 266 (Dec 2024) recommends amending the 1973 Act, mainly to remove a limitation problem for asymptomatic conditions such as pleural plaques; a wider review of limitation is described as a later project. I could not confirm any enacted change or an introduced bill (the Scottish Parliament bills page I could reach was incomplete). Re-check the Scottish Parliament bill tracker before the next refresh.
- The site does not discuss pleural plaques or asymptomatic conditions, so nothing needs changing now.
