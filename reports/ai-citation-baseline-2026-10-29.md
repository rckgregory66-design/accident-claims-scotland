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
- Perplexity's sources include Scottish Law Commission reports dated Feb 2026 on limitation and on damages (e.g. scotlawcom.gov.uk .../2026-02/rep207.pdf). **Not verified here:** whether any reform has been enacted. Before relying on current limitation wording, check whether those reports have changed or will change the law.

## Next sample
Repeat the same five questions in about 4 weeks, adding Google (AI Overviews, UK) and Bing Copilot by hand, and record whether accident-claims-scotland.com appears.
