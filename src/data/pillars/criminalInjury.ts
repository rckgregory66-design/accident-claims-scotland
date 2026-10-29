import type { AuthoritativeSource } from "@/components/ClaimPageTemplate";
import type { PillarChild } from "@/data/pillarChildren";
import { limitationAct } from "@/data/pillars/sources";

const PILLAR = "criminal-injury-compensation-scotland" as const;
const PUBLISHED = "2026-10-29";

/*
 * Facts on these pages come from CICA's own guidance and GOV.UK, checked on
 * 29 October 2026:
 * - Criminal injuries compensation: a guide (time limits, eligibility, conduct,
 *   criminal record, multiple injuries, other payments, review and appeal)
 * - GOV.UK "Claim compensation": eligibility and "how much you can get"
 *   (£1,000 to £250,000 injury payment, £500,000 maximum total, examples)
 * - Annex B of the 2012 Scheme as quoted in [2025] UKUT 262 (AAC)
 */
const cicaGuide: AuthoritativeSource = {
  label: "CICA: Criminal injuries compensation — a guide",
  url: "https://www.gov.uk/guidance/criminal-injuries-compensation-a-guide",
};
const cicaEligibility: AuthoritativeSource = {
  label: "GOV.UK: Claim compensation if you were the victim of a violent crime — eligibility",
  url: "https://www.gov.uk/claim-compensation-criminal-injury/eligibility",
};
const cicaHowMuch: AuthoritativeSource = {
  label: "GOV.UK: Criminal injuries compensation — how much you can get",
  url: "https://www.gov.uk/claim-compensation-criminal-injury/how-much-you-can-get",
};
const scheme2012: AuthoritativeSource = {
  label: "Criminal Injuries Compensation Scheme 2012 (amended), in force from 13 June 2019",
  url: "https://www.gov.uk/government/publications/criminal-injuries-compensation-scheme-2012",
};
const annexBDecision: AuthoritativeSource = {
  label: "Upper Tribunal, [2025] UKUT 262 (AAC) — quotes the Scheme's definition of a crime of violence (Annex B)",
  url: "https://caselaw.nationalarchives.gov.uk/ukut/aac/2025/262",
};
const victimSupportScotland: AuthoritativeSource = {
  label: "mygov.scot: Support for victims and witnesses of crime in Scotland",
  url: "https://www.mygov.scot/victim-witness-support/",
};

const crimeOfViolence =
  "CICA can only pay for an injury caused by a 'crime of violence' as the Scheme defines it in Annex B. That means a crime involving a physical attack; another violent act or omission that causes physical injury; a threat that causes fear of immediate violence in circumstances that would frighten a person of reasonable firmness; a sexual assault without consent; or arson or fire-raising. The act must be intentional or reckless.";

const timeLimits =
  "You must apply as soon as reasonably practicable and, for an adult, normally within two years of the incident. CICA can extend this only where exceptional circumstances stopped you applying earlier and the evidence lets it decide without extensive further enquiries. If you were under 18, the application must be received by your 20th birthday if the incident was reported to the police before you turned 18, or within two years of the first police report if it was reported later. Do not wait for a criminal trial to finish.";

const conductAndRecord =
  "CICA can refuse or reduce an award if your conduct before, during or after the incident contributed to it, for example by provoking it or willingly taking part in a fight. Being drunk or on drugs only counts if it directly played a part in provoking the incident. An unspent criminal conviction can also reduce or bar an award; for an incident in Scotland, CICA applies the disclosure periods set by the Management of Offenders (Scotland) Act 2019.";

const representation =
  "Applying to CICA is free and you do not need a representative. CICA cannot pay for one, and a representative working on a no win, no fee basis usually keeps a share of the award, so check how much before agreeing. Free help may be available from victim support organisations or a trade union.";

const otherPayments =
  "CICA is a scheme of last resort. It must reduce or withhold an award where you have received, or are entitled to, compensation for the same injury from a court order, a settled civil claim or a compensation order made in criminal proceedings. Apply anyway, and keep CICA told about any other claim.";

const reviewAndAppeal =
  "If you disagree with CICA's decision, you can ask for a review in writing within 56 days. A different claims officer looks at it again, and the result can go up, down or stay the same. If you disagree with the review, you can appeal to the First-tier Tribunal (Criminal Injuries Compensation) within 90 days of the review decision.";

const sharedFaqs = {
  conviction: {
    question: "Does someone have to be convicted before I can claim?",
    answer:
      "No. The person who injured you does not have to be identified, charged or convicted. CICA decides on the balance of probabilities, using police and medical evidence. You must have reported the crime to the police and co-operated, as far as reasonably practicable, in bringing the offender to justice.",
  },
  cost: {
    question: "Does it cost anything to apply to CICA?",
    answer:
      "Applying is free and you do not need a representative. CICA may ask you to pay for initial medical evidence, up to £50. If you choose a paid representative, CICA will not cover the cost, and a no win, no fee representative usually takes a share of the award.",
  },
};

export const criminalInjuryChildren: PillarChild[] = [
  // ------------------------------------------------------------------ assault
  {
    pillar: PILLAR,
    slug: "assault-claims",
    h1: "Assault Injury Compensation in Scotland",
    metaTitle: "Assault Injury Compensation Scotland — CICA and Civil Claims",
    description:
      "Compensation after an assault in Scotland: CICA eligibility, the two-year time limit, how conduct and convictions affect awards, and civil claims against an attacker.",
    hubLabel: "Assault claims",
    hubDescription: "Physical attacks, CICA eligibility and civil claims",
    intro:
      "If you were injured in an assault in Scotland, you may be able to apply to the Criminal Injuries Compensation Authority (CICA), and in some cases bring a civil claim. This page explains who qualifies, the time limits and what can reduce an award. It is general information, not legal advice.",
    tldr: [
      "An assault is a 'physical attack', which is one of the crimes of violence the Scheme covers.",
      "You must report the assault to the police; nobody needs to be convicted.",
      "Adults normally have two years from the incident to apply to CICA.",
      "Injury payments range from £1,000 to £250,000, with a maximum total award of £500,000.",
      "Your own conduct, such as provoking the incident, or an unspent conviction can reduce or bar an award.",
    ],
    answerBox:
      "If you were injured in an assault in Scotland, you can usually apply to the Criminal Injuries Compensation Authority. The assault must be reported to the police, and adults normally have two years to apply. Nobody needs to be convicted. Injury payments range from £1,000 to £250,000, and a civil claim against the attacker may also be possible.",
    sections: [
      { heading: "Is an assault a 'crime of violence'?", content: crimeOfViolence },
      {
        heading: "What CICA can pay for",
        content:
          "To qualify, your injury must be listed in the tariff of injuries at Annex E of the Scheme. Injury payments range from £1,000 to £250,000 depending on the injury, how far you recover and how long the effects last. If you have more than one qualifying injury, CICA pays 100% of the most serious, 30% of the second and 15% of the third. It cannot pay for more than three injuries. A mental injury qualifies only if it is disabling, lasts at least six weeks and is diagnosed by a psychiatrist or clinical psychologist.",
        list: [
          "Physical injuries listed in the tariff",
          "Disabling mental injury, diagnosed by a psychiatrist or clinical psychologist",
          "Loss of earnings, but only after 28 full weeks of being unable to work, paid at the statutory sick pay rate",
          "Special expenses, such as care, home adaptations or damaged glasses or dentures, where you were incapacitated for more than 28 weeks",
        ],
      },
      { heading: "Time limits", content: timeLimits },
      { heading: "What can reduce or stop an award", content: conductAndRecord },
      {
        heading: "Reporting to the police",
        content:
          "The Scheme requires the assault to have been reported to the police, and as soon as reasonably practicable. Telling your employer or a doctor is not enough. If you delayed, CICA will ask why and will take account of your age, capacity and wellbeing at the time and whether the effect of the incident made it impossible to report earlier.",
      },
      {
        heading: "A civil claim against the attacker or someone else",
        content:
          "You can also sue the person who assaulted you for damages in the Scottish courts. The general time limit is three years. In practice, many attackers have no money to pay. A civil claim may be more useful against a third party whose negligence allowed the assault, such as an employer or a venue with inadequate security. " +
          otherPayments,
      },
      { heading: "Getting help and paying for it", content: representation },
      { heading: "If you disagree with CICA's decision", content: reviewAndAppeal },
    ],
    faqs: [
      {
        question: "Can I claim for a minor assault?",
        answer:
          "Only if the injury is listed in the Scheme's tariff of injuries. The lowest injury payment is £1,000. Injuries that are not described in the tariff do not qualify.",
      },
      sharedFaqs.conviction,
      {
        question: "Will being drunk at the time affect my claim?",
        answer:
          "Not simply because you were drunk. CICA says it does not take into account intoxication that made you more vulnerable to becoming a victim. It only counts if your drinking or drug use directly played a part in provoking the incident.",
      },
      {
        question: "I was hurt in a fight. Can I still claim?",
        answer:
          "Possibly not. CICA can refuse or reduce an award where your conduct contributed to the incident, for example if you provoked it, intended to fight, or willingly took part. It looks at all the circumstances, including any history of violence between you and the other person.",
      },
      {
        question: "Can I claim if I was assaulted at work?",
        answer:
          "Yes, if it was a crime of violence and you meet the other conditions. You may also have a civil claim against your employer if it failed to take reasonable steps to protect you. CICA expects you to pursue other compensation that is available and will reduce its award by any damages you receive for the same injury.",
      },
      sharedFaqs.cost,
    ],
    sources: [cicaGuide, cicaEligibility, cicaHowMuch, scheme2012, annexBDecision, limitationAct, victimSupportScotland],
    guideSlugs: ["personal-injury-claim-time-limit-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [
      { label: "Domestic Abuse Injury Claims", href: "/domestic-abuse-injury-claim-scotland" },
      { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ sexual assault
  {
    pillar: PILLAR,
    slug: "sexual-assault-claims",
    h1: "Sexual Assault and Rape Compensation in Scotland",
    metaTitle: "Sexual Assault Compensation Scotland — CICA Claims Explained",
    description:
      "Compensation for survivors of sexual assault or rape in Scotland: CICA eligibility, police reporting, time limits for adults and children, and civil claims.",
    hubLabel: "Sexual assault and rape",
    hubDescription: "CICA awards for sexual violence and time limits",
    intro:
      "If you survived sexual assault or rape in Scotland, you may be able to apply for compensation from the Criminal Injuries Compensation Authority (CICA). This page explains the rules calmly and plainly. It is general information, not legal advice, and support is available whether or not you decide to claim.",
    tldr: [
      "A sexual assault without consent is a crime of violence under the Scheme, even without physical injury.",
      "The crime must be reported to the police, but nobody needs to be convicted.",
      "Adults normally have two years to apply; special rules apply if you were under 18.",
      "CICA pays whichever is higher of the sexual assault award or the mental injury award, not both.",
      "For childhood abuse, a civil claim in Scotland has no time limit.",
    ],
    answerBox:
      "Survivors of sexual assault or rape in Scotland can apply to the Criminal Injuries Compensation Authority. The assault must have been reported to the police, but nobody needs to be convicted. Adults normally have two years to apply, and longer limits apply if you were under 18. Awards follow the tariff and can include extra payments for pregnancy or infection.",
    sections: [
      {
        heading: "Does the Scheme cover sexual assault?",
        content:
          "Yes. The Scheme's definition of a crime of violence expressly includes 'a sexual assault to which a person did not in fact consent'. You do not need a separate physical injury. In Scotland, sexual offences, including rape and sexual assault, are defined by the Sexual Offences (Scotland) Act 2009.",
      },
      {
        heading: "How awards are worked out",
        content:
          "Awards follow the tariff of injuries at Annex E of the Scheme. GOV.UK gives £11,000 as one example of a sexual assault tariff payment; the amount depends on the offence and its effects. If you also have a mental injury, CICA pays whichever of the sexual assault award or the mental injury award is higher, not both. Extra tariff payments are available if, as a direct result, you became pregnant, lost a pregnancy or contracted a sexually transmitted infection. Loss of earnings and special expenses can be added where you were unable to work for more than 28 weeks.",
      },
      {
        heading: "Reporting to the police",
        content:
          "CICA can only pay if the crime was reported to the police. Telling a doctor, support worker or employer is not enough. If you reported late, CICA will ask why and will consider your age, capacity and wellbeing at the time, and whether the effect of the assault meant you could not reasonably report it earlier. Delayed reporting is common after sexual violence, and it does not automatically defeat a claim.",
      },
      { heading: "Time limits", content: timeLimits },
      {
        heading: "Civil claims in the Scottish courts",
        content:
          "You may also be able to sue the person responsible, or an organisation that failed to protect you, for damages. For an adult, the general time limit is three years. For abuse suffered as a child, section 17A of the Prescription and Limitation (Scotland) Act 1973 removes the time limit for a civil claim. " +
          otherPayments,
      },
      { heading: "Getting help and paying for it", content: representation },
      { heading: "If you disagree with CICA's decision", content: reviewAndAppeal },
    ],
    faqs: [
      sharedFaqs.conviction,
      {
        question: "Can I still claim if I reported the assault years later?",
        answer:
          "Possibly. The crime must be reported to the police, and CICA asks why any report was delayed. It considers your age, capacity and wellbeing at the time. If you were under 18, the application must normally be received by your 20th birthday, or within two years of your first police report if you reported after turning 18.",
      },
      {
        question: "Can I get compensation for both the assault and PTSD?",
        answer:
          "Not both. Where a mental injury follows a sexual assault, CICA pays whichever of the two awards is higher. A mental injury must be disabling, last at least six weeks and be diagnosed by a psychiatrist or clinical psychologist.",
      },
      {
        question: "Is there a time limit for a civil claim for childhood sexual abuse in Scotland?",
        answer:
          "No. Section 17A of the Prescription and Limitation (Scotland) Act 1973 removed the time limit for civil claims for abuse suffered as a child. The CICA time limits are separate and still apply to a CICA application.",
      },
      {
        question: "Will my details be shared with the person who assaulted me?",
        answer:
          "CICA collects information from the police and medical sources to decide your application and handles it under its privacy notice. It is a separate process from the criminal case. A civil claim in court is different, because the person you sue will be a party to it.",
      },
      sharedFaqs.cost,
    ],
    sources: [
      cicaGuide,
      cicaEligibility,
      cicaHowMuch,
      scheme2012,
      annexBDecision,
      { label: "Sexual Offences (Scotland) Act 2009", url: "https://www.legislation.gov.uk/asp/2009/9/contents" },
      {
        label: "Prescription and Limitation (Scotland) Act 1973, section 17A — no time limit for childhood abuse claims",
        url: "https://www.legislation.gov.uk/ukpga/1973/52/section/17A",
      },
      victimSupportScotland,
    ],
    guideSlugs: ["personal-injury-claim-time-limit-scotland"],
    related: [
      { label: "Child Abuse Compensation", href: "/child-abuse-injury-claim-scotland" },
      { label: "Domestic Abuse Injury Claims", href: "/domestic-abuse-injury-claim-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ knife crime
  {
    pillar: PILLAR,
    slug: "knife-crime-claims",
    h1: "Knife Crime and Stabbing Compensation in Scotland",
    metaTitle: "Knife Crime Compensation Scotland — Stab Injury CICA Claims",
    description:
      "Compensation after a stabbing or knife attack in Scotland: CICA injury, scarring and earnings payments, multiple injuries, fatal cases and the two-year time limit.",
    hubLabel: "Knife crime and stabbings",
    hubDescription: "Stab wounds, scarring and fatal knife crime",
    intro:
      "If you were stabbed or injured with a knife or other weapon in Scotland, or lost a relative to knife crime, you may be able to claim from the Criminal Injuries Compensation Authority (CICA). This page explains what can be paid and the rules that apply. It is general information, not legal advice.",
    tldr: [
      "A knife attack is a physical attack, so it is a crime of violence under the Scheme.",
      "Injury payments range from £1,000 to £250,000, with a maximum total award of £500,000.",
      "Several injuries are paid at 100%, 30% and 15% of their tariff values, up to three injuries.",
      "Families can claim bereavement, dependency and funeral payments after a fatal stabbing.",
      "Adults normally have two years to apply, and the crime must be reported to the police.",
    ],
    answerBox:
      "If you were stabbed or injured with a weapon in Scotland, you can usually apply to the Criminal Injuries Compensation Authority within two years. Payments follow the Scheme's tariff and can cover wounds, scarring, disabling mental injury, and lost earnings after 28 weeks. Close relatives can claim bereavement, dependency and funeral payments if someone was killed.",
    sections: [
      { heading: "Does a knife attack qualify?", content: crimeOfViolence },
      {
        heading: "Injuries, scarring and more than one injury",
        content:
          "Stab wounds often cause several injuries at once, such as wounds, internal injury, nerve damage and scarring. The tariff values each injury. CICA pays 100% of the most serious, 30% of the second and 15% of the third, and it cannot pay for more than three. GOV.UK gives £2,400 as the tariff example for facial scarring that causes significant disfigurement, and up to £250,000 for the most serious injuries, such as complete paralysis.",
      },
      {
        heading: "Lost earnings and expenses after a serious stabbing",
        content:
          "If the injury leaves you unable to work, or able to work only a few hours a week, for more than 28 full weeks, CICA can pay loss of earnings from week 29, at the statutory sick pay rate. You must have been in work at the time, or have a work history in the previous three years or a good reason for not having one. Special expenses, such as care, equipment and home adaptations, can be paid from the date of injury once the 28-week test is met.",
      },
      {
        heading: "When someone has died",
        content:
          "Qualifying relatives of a person who died as a result of a crime of violence can apply. Qualifying relatives include a spouse or civil partner, a partner who lived with them for at least two years, parents and children. Payments can include a bereavement payment (GOV.UK gives £11,000 as an example), a child's payment of £2,000 for each year until the child turns 18, financial dependency payments, and a funeral payment of £2,500, or up to £5,000 if higher costs are reasonable. Anyone who paid for the funeral can claim funeral costs.",
      },
      { heading: "Time limits", content: timeLimits },
      { heading: "What can reduce or stop an award", content: conductAndRecord },
      { heading: "Getting help and paying for it", content: representation },
      { heading: "If you disagree with CICA's decision", content: reviewAndAppeal },
    ],
    faqs: [
      sharedFaqs.conviction,
      {
        question: "Can I claim for a scar from a knife wound?",
        answer:
          "Yes, scarring is listed in the Scheme's tariff. The amount depends on where the scar is and how significant it is. GOV.UK gives £2,400 as the example for facial scarring causing significant disfigurement. A scar is valued alongside your other injuries under the multiple-injury rules.",
      },
      {
        question: "My son was killed in a stabbing. What can our family claim?",
        answer:
          "Qualifying relatives, including parents, children and a spouse or partner, can apply for a bereavement payment. Children under 18 who depended on the person can get a child's payment, and financial dependants can get a dependency payment. Whoever paid for the funeral can claim £2,500, or up to £5,000 if higher costs were reasonable.",
      },
      {
        question: "I witnessed a stabbing. Can I claim?",
        answer:
          "If a loved one was injured and you were present and saw it, or were involved in the immediate aftermath, you may claim for a disabling mental injury diagnosed by a psychiatrist or clinical psychologist. Seeing it on video or being told about it later does not qualify.",
      },
      {
        question: "Can CICA refuse my claim because I have a criminal record?",
        answer:
          "It can. Certain unspent convictions, including any that led to a custodial sentence or a community order, mean no award can be made. Other unspent convictions lead to a reduced or withheld award unless there are exceptional reasons. For incidents in Scotland, CICA applies Scottish disclosure periods.",
      },
      sharedFaqs.cost,
    ],
    sources: [cicaGuide, cicaEligibility, cicaHowMuch, scheme2012, annexBDecision, victimSupportScotland],
    guideSlugs: ["fatal-accident-compensation-scotland", "personal-injury-claim-time-limit-scotland"],
    related: [
      { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
      { label: "Scarring and Burn Injury Claims", href: "/serious-injury-claims-scotland/serious-burn-injury-claims" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ robbery
  {
    pillar: PILLAR,
    slug: "robbery-claims",
    h1: "Robbery and Mugging Injury Compensation in Scotland",
    metaTitle: "Robbery Injury Compensation Scotland — Mugging CICA Claims",
    description:
      "Injured in a robbery or mugging in Scotland? How CICA treats violence and threats, why stolen property is not covered, mental injury rules and the time limit.",
    hubLabel: "Robbery and mugging",
    hubDescription: "Injuries and fear caused by violent theft",
    intro:
      "If you were hurt or badly frightened during a robbery or mugging in Scotland, you may be able to claim from the Criminal Injuries Compensation Authority (CICA). The Scheme compensates injury, not stolen property. This page explains what qualifies. It is general information, not legal advice.",
    tldr: [
      "CICA pays for injury caused by the violence or threats in a robbery, not for what was taken.",
      "A threat counts only if it caused fear of immediate violence that would frighten a person of reasonable firmness.",
      "A mental injury must be disabling, last at least six weeks and be diagnosed by a psychiatrist or clinical psychologist.",
      "Lost or damaged physical aids, such as glasses or dentures, are covered only in serious, long-term cases.",
      "Adults normally have two years to apply, and the crime must be reported to the police.",
    ],
    answerBox:
      "If you were injured in a robbery or mugging in Scotland, you can usually apply to the Criminal Injuries Compensation Authority within two years. The Scheme pays for injury caused by violence or by threats of immediate violence, not for stolen money or belongings. A mental injury must be disabling, last six weeks and be diagnosed by a specialist.",
    sections: [
      {
        heading: "Robbery and the Scheme",
        content:
          "In Scots law, robbery is theft carried out by violence or by threats. The Scheme does not compensate the theft itself. It pays for the injury you suffered, if the robbery involved a crime of violence as defined in Annex B, for example a physical attack or a threat causing fear of immediate violence. " +
          crimeOfViolence,
      },
      {
        heading: "If you were threatened but not physically hurt",
        content:
          "A threat can be a crime of violence if it caused you to fear immediate violence in circumstances that would put a person of reasonable firmness in that fear, such as being threatened with a weapon. Without a physical injury, you would need a mental injury that is disabling, has a substantial effect on everyday life such as work or relationships, lasts at least six weeks and is diagnosed by a psychiatrist or clinical psychologist.",
      },
      {
        heading: "Stolen and damaged property",
        content:
          "Cash, phones, bags and other stolen property are not covered. The only property the Scheme pays for is something you relied on as a physical aid, such as glasses, dentures or a walking stick, lost or damaged in the incident. That is a special expense, available only where your injury left you unable to work, or similarly incapacitated, for more than 28 weeks. Check your home or travel insurance for other losses.",
      },
      {
        heading: "Robbery at work",
        content:
          "If you were robbed at work, for example in a shop, bank, petrol station or delivery job, you can still apply to CICA. You may also have a civil claim against your employer if it failed to take reasonable steps to protect staff, such as training, staffing levels or security. " +
          otherPayments,
      },
      { heading: "Time limits", content: timeLimits },
      { heading: "What can reduce or stop an award", content: conductAndRecord },
      { heading: "If you disagree with CICA's decision", content: reviewAndAppeal },
    ],
    faqs: [
      {
        question: "Can I get compensation for my stolen phone or cash?",
        answer:
          "Not from CICA. The Scheme compensates injury caused by a crime of violence, not stolen property. The only exception is a physical aid you relied on, such as glasses or dentures, and only in serious cases where you were incapacitated for more than 28 weeks. Your own insurance may cover other losses.",
      },
      {
        question: "I was threatened with a knife but not hurt. Can I claim?",
        answer:
          "Possibly, if the threat made you fear immediate violence and would have frightened a person of reasonable firmness. You would need a disabling mental injury lasting at least six weeks, diagnosed by a psychiatrist or clinical psychologist.",
      },
      sharedFaqs.conviction,
      {
        question: "I was robbed at work. Should I claim from CICA or my employer?",
        answer:
          "Possibly both. CICA expects you to pursue other compensation that is available. If your employer was negligent, a civil claim may be worth more, but CICA will reduce or recover its award by any damages you receive for the same injury.",
      },
      {
        question: "How long do I have to apply?",
        answer:
          "Apply as soon as reasonably practicable. For an adult, that is normally within two years of the robbery. CICA can extend this only in exceptional circumstances where the evidence allows a decision without extensive further enquiries.",
      },
      sharedFaqs.cost,
    ],
    sources: [cicaGuide, cicaEligibility, cicaHowMuch, scheme2012, annexBDecision, victimSupportScotland],
    guideSlugs: ["accident-at-work-claim-scotland", "personal-injury-claim-time-limit-scotland"],
    related: [{ label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ hate crime
  {
    pillar: PILLAR,
    slug: "hate-crime-claims",
    h1: "Hate Crime Injury Compensation in Scotland",
    metaTitle: "Hate Crime Injury Compensation Scotland — CICA Eligibility",
    description:
      "Injured in a hate crime in Scotland? When CICA can pay, why the attack must be a crime of violence, how verbal abuse is treated, and the two-year time limit.",
    hubLabel: "Hate crime injuries",
    hubDescription: "Violence motivated by prejudice",
    intro:
      "If you were attacked or threatened in Scotland because of your race, religion, disability, sexual orientation, transgender identity or another characteristic, you may be able to claim from the Criminal Injuries Compensation Authority (CICA). Eligibility depends on the violence, not the motive. This page explains how. It is general information, not legal advice.",
    tldr: [
      "CICA compensates injury from a crime of violence; a hate motive does not by itself make a crime eligible.",
      "A physical attack, or a threat causing fear of immediate violence, can qualify.",
      "Verbal or online abuse without a threat of immediate violence is unlikely to qualify, however distressing.",
      "The award depends on the injury, not on the motive behind the crime.",
      "Report the crime to the police; adults normally have two years to apply.",
    ],
    answerBox:
      "If you were injured in a hate crime in Scotland, you can apply to the Criminal Injuries Compensation Authority if the crime involved violence: a physical attack, or a threat causing fear of immediate violence. The award depends on your injury, not the motive. Adults normally have two years to apply, and the crime must be reported to the police.",
    sections: [
      {
        heading: "Hate crime in Scotland",
        content:
          "In Scotland, an offence aggravated by prejudice is dealt with under the Hate Crime and Public Order (Scotland) Act 2021. Prejudice can relate to age, disability, race, colour, nationality, ethnic or national origins, religion, sexual orientation, transgender identity or variations in sex characteristics. The aggravation can make the criminal sentence heavier. It does not change how CICA calculates compensation.",
      },
      {
        heading: "When a hate crime qualifies for CICA",
        content:
          "CICA can only pay for an injury caused by a crime of violence. A physical attack qualifies. So can a threat that caused you to fear immediate violence in circumstances that would frighten a person of reasonable firmness. Abuse that is shouted, written or posted online, without a threat of immediate violence, is unlikely to be a crime of violence under the Scheme. It is still a crime and should still be reported. " +
          crimeOfViolence,
      },
      {
        heading: "Mental injury",
        content:
          "Many hate crime victims suffer lasting fear or anxiety. A mental injury qualifies only if it is disabling, meaning it substantially affects everyday activities such as work, study or relationships. It must last at least six weeks and be diagnosed by a psychiatrist or clinical psychologist. Where a physical and a mental injury both qualify, the multiple-injury rules apply: 100%, 30% and 15% of the three most serious.",
      },
      {
        heading: "Reporting",
        content:
          "The crime must be reported to the police, and as soon as reasonably practicable. In Scotland you can also report a hate crime through a third-party reporting centre. Make sure the incident is also recorded by Police Scotland, because CICA will ask the police to confirm the report.",
      },
      { heading: "Time limits", content: timeLimits },
      { heading: "What can reduce or stop an award", content: conductAndRecord },
      { heading: "Getting help and paying for it", content: representation },
    ],
    faqs: [
      {
        question: "Can I get compensation for racist or homophobic verbal abuse?",
        answer:
          "Usually not from CICA, unless the abuse included a threat that made you fear immediate violence and would have frightened a person of reasonable firmness. The Scheme only compensates injury caused by a crime of violence. Verbal abuse is still a crime and should be reported to the police.",
      },
      {
        question: "Does a hate crime get a higher award?",
        answer:
          "No. CICA pays according to the injury in the tariff, how far you recover and how long the effects last. The hate motive can increase the criminal sentence, but it does not change the CICA award.",
      },
      sharedFaqs.conviction,
      {
        question: "I was attacked online and now have anxiety. Can I claim?",
        answer:
          "Unlikely. Online abuse rarely involves a threat of immediate violence of the kind the Scheme requires. If you received a threat that made you fear immediate violence, a disabling mental injury diagnosed by a psychiatrist or clinical psychologist may qualify.",
      },
      {
        question: "Where can I get support after a hate crime in Scotland?",
        answer:
          "You can report to Police Scotland or through a third-party reporting centre, and victim support services in Scotland can help whether or not you claim. The mygov.scot victim and witness support page lists the main services.",
      },
      sharedFaqs.cost,
    ],
    sources: [
      cicaGuide,
      cicaEligibility,
      cicaHowMuch,
      scheme2012,
      annexBDecision,
      { label: "Hate Crime and Public Order (Scotland) Act 2021", url: "https://www.legislation.gov.uk/asp/2021/14/contents" },
      victimSupportScotland,
    ],
    guideSlugs: ["personal-injury-claim-time-limit-scotland"],
    related: [{ label: "Domestic Abuse Injury Claims", href: "/domestic-abuse-injury-claim-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
