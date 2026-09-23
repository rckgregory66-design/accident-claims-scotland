import type { PillarChild } from "@/data/pillarChildren";

const PILLAR = "industrial-disease-claims-scotland" as const;
const PUBLISHED = "2026-09-23";

const limitationAct = {
  label: "Prescription and Limitation (Scotland) Act 1973, section 17 — personal injury time limit",
  url: "https://www.legislation.gov.uk/ukpga/1973/52/section/17",
};
const limitationDiscretion = {
  label: "Prescription and Limitation (Scotland) Act 1973, section 19A — court discretion",
  url: "https://www.legislation.gov.uk/ukpga/1973/52/section/19A",
};
const asbestosConditionsAct = {
  label: "Damages (Asbestos-related Conditions) (Scotland) Act 2009",
  url: "https://www.legislation.gov.uk/asp/2009/4/contents",
};
const hseAsbestos = {
  label: "HSE: why is asbestos dangerous?",
  url: "https://www.hse.gov.uk/asbestos/dangerous.htm",
};
const provisionalDamages = {
  label: "Administration of Justice Act 1982, section 12 — provisional damages (Scotland)",
  url: "https://www.legislation.gov.uk/ukpga/1982/53/section/12",
};
const elto = {
  label: "Employers' Liability Tracing Office (ELTO)",
  url: "https://www.elto.org.uk/home/",
};

export const industrialDiseaseChildren: PillarChild[] = [
  // ---------------------------------------------------------------- mesothelioma
  {
    pillar: PILLAR,
    slug: "mesothelioma-claims",
    h1: "Mesothelioma Compensation Claims in Scotland",
    metaTitle: "Mesothelioma Claims Scotland — Compensation and Payment Schemes",
    description:
      "How mesothelioma compensation works in Scotland: claims against employers and insurers, the government payment schemes, time limits and claims by family.",
    hubLabel: "Mesothelioma claims",
    hubDescription: "Asbestos cancer: civil claims, payment schemes and family claims",
    intro:
      "Mesothelioma is a cancer almost always caused by asbestos. If you or a family member has been diagnosed in Scotland, compensation may be available from the employer or insurer responsible for the exposure, or from a government scheme if they cannot be traced. This page explains the routes, the time limits and the evidence. It is general information, not legal advice.",
    tldr: [
      "Mesothelioma is almost exclusively caused by asbestos, and symptoms can appear 15 to 60 years after exposure.",
      "A civil claim can be made against the negligent employer or its employers' liability insurer, even if the company has stopped trading.",
      "If neither the employer nor an insurer can be traced, the Diffuse Mesothelioma Payment Scheme may pay compensation, generally if claimed within 12 months of diagnosis.",
      "The general Scottish time limit is three years from the date of knowledge, which is usually the diagnosis.",
      "Family members can claim after a death, and a claim already under way can generally continue.",
    ],
    answerBox:
      "Yes. A person diagnosed with mesothelioma in Scotland can usually claim damages from an employer, or its insurer, whose negligence exposed them to asbestos, even if the exposure was decades ago. The general limitation period is three years from the date of knowledge, usually diagnosis. If the employer and its insurer cannot be traced, the Diffuse Mesothelioma Payment Scheme may pay compensation, but it generally has to be claimed within 12 months of diagnosis.",
    sections: [
      {
        heading: "What mesothelioma is and why the delay matters",
        content:
          "Mesothelioma is a cancer of the lining of the lungs (the pleura) or, less often, the abdomen. The Health and Safety Executive describes it as almost exclusively caused by asbestos exposure, and NHS inform says it can take 15 to 60 years to develop after exposure. That delay is why a claim today usually concerns work done in the 1950s to the 1990s, in industries such as shipbuilding, construction, power generation, engineering, insulation and railway maintenance across Scotland.",
      },
      {
        heading: "Who can be legally responsible",
        content:
          "A claim is normally based on negligence (delict in Scots law): the employer knew or should have known of the danger and failed to take reasonable precautions, for example by not supplying protection, not damping down dust or not warning workers. Exposure can also arise away from the workplace, such as a family member washing dusty work clothes, or through a building owner, occupier or supplier. Whether a duty was owed, and what was known at the time, depends on the period and the facts.",
      },
      {
        heading: "Several employers and the Compensation Act 2006",
        content:
          "Mesothelioma can be triggered by exposure with several employers over a working life, and medical science cannot say which exposure caused it. Section 3 of the Compensation Act 2006, which applies in Scotland, provides that a person who negligently exposed the victim to asbestos is liable for the whole of the damage caused by the disease, jointly and severally with any other responsible person. The responsible person can then seek a contribution from others. In practice this means a claimant does not have to prove which single exposure caused the illness.",
      },
      {
        heading: "When the employer no longer exists",
        content:
          "A closed or dissolved employer does not necessarily end the claim. Employers have generally been required to hold employers' liability insurance since 1972, and the Employers' Liability Tracing Office database can help identify the insurer. Where an insurer has failed, the Financial Services Compensation Scheme may pay valid employers' liability claims. Our page on tracing employers' liability insurers explains the steps.",
        linkedList: [
          { text: "Tracing employers' liability insurers in Scotland", href: "/industrial-disease-claims-scotland/tracing-employers-liability-insurers" },
        ],
      },
      {
        heading: "Government payment schemes",
        content:
          "Two UK-wide schemes exist alongside the civil claim, and both apply in Scotland. The Diffuse Mesothelioma Payment Scheme (2014) pays people diagnosed on or after 25 July 2012 who were exposed to asbestos at work in the UK, cannot trace the employer or its insurer, and have not made a civil claim or received damages. It generally must be claimed within 12 months of diagnosis, or of the person's death if a dependant is claiming. Separately, the 2008 Diffuse Mesothelioma Scheme allows the Department for Work and Pensions to make a lump sum payment to a person with mesothelioma who was exposed in the UK. Those lump sums can be recovered from later compensation under the Social Security (Recovery of Benefits) Act 1997, so the order of claims matters. Industrial Injuries Disablement Benefit may also be payable. Check the GOV.UK pages and take advice before applying.",
      },
      {
        heading: "Time limits",
        content:
          "For personal injury the general rule in section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years from the date the injury was caused or, if later, the date the injured person first knew, or could reasonably have known, that the injury was significant, was attributable to someone's act or omission, and who that person was. For mesothelioma this is usually the diagnosis. Where the person has died, section 18 applies a similar three-year period for the family's claim, running from the death or the date of knowledge. The court has a discretion under section 19A to allow a late claim in some circumstances, but that should never be relied on. The separate 12-month deadline for the payment scheme is much shorter.",
      },
      {
        heading: "Claims by the family after a death",
        content:
          "Where a person dies with mesothelioma, close relatives can claim under the Damages (Scotland) Act 2011, including for loss of financial support, funeral expenses, and compensation for distress, grief and loss of society. A claim already under way can generally continue on behalf of the estate. Because the illness progresses quickly, starting early also lets the person's own account of their working life be recorded while they are able to give it.",
      },
      {
        heading: "Evidence that helps",
        content: "The following usually matter most:",
        list: [
          "A full employment history, with employers, dates, sites and job titles",
          "Names of former colleagues who can describe the conditions and materials used",
          "Pay slips, P60s, union records, apprenticeship papers or DWP and HMRC employment records",
          "The medical diagnosis, pathology and specialist reports",
          "Records of where asbestos was used, such as insulation, boiler lagging or cladding",
          "Any earlier compensation, benefit or payment-scheme applications",
        ],
      },
      {
        heading: "What compensation can cover",
        content:
          "Damages can include solatium for pain, suffering and loss of amenity, past and future loss of earnings, medical and care costs, and reasonable payment for services provided by relatives under section 8 of the Administration of Justice Act 1982. In a fatal case the relatives' claim is separate. A solicitor can explain how each head of loss is valued on your facts.",
      },
    ],
    faqs: [
      {
        question: "Can I claim mesothelioma compensation if my employer has closed down?",
        answer:
          "Often yes. Employers have generally been required to hold employers' liability insurance since 1972, so the claim can usually be brought against the insurer that covered the relevant period. The Employers' Liability Tracing Office database and the Third Parties (Rights against Insurers) Act 2010 can help where the employer is insolvent or dissolved. If no employer or insurer can be traced, the Diffuse Mesothelioma Payment Scheme may be available.",
      },
      {
        question: "How long do I have to claim for mesothelioma in Scotland?",
        answer:
          "The general limitation period is three years from the date of knowledge, which is usually the date of diagnosis. The Diffuse Mesothelioma Payment Scheme is different: it generally must be claimed within 12 months of diagnosis, or within 12 months of death for a dependant. Because these deadlines differ, get advice as soon as you have a diagnosis.",
      },
      {
        question: "What is the Diffuse Mesothelioma Payment Scheme?",
        answer:
          "It is a government scheme, funded by a levy on employers' liability insurers, that pays compensation to people with diffuse mesothelioma who were exposed to asbestos at work in the UK but cannot trace their employer or its insurer. You cannot have made a civil claim or received damages for the disease. The amount depends on age at diagnosis. It applies across the UK, including Scotland.",
      },
      {
        question: "Can my family claim if the person with mesothelioma has died?",
        answer:
          "Yes. Under the Damages (Scotland) Act 2011, close relatives can claim for loss of support and funeral expenses, and for distress, grief and loss of society. A claim already begun by the person can generally continue for the estate. The time limit for the family's claim is generally three years from the death or from when they knew the death was linked to negligence, with a shorter 12-month deadline for a dependant applying to the payment scheme.",
      },
      {
        question: "Does a government lump sum reduce my civil compensation?",
        answer:
          "It can. Lump sum payments under the 2008 scheme and the Pneumoconiosis etc. (Workers' Compensation) Act 1979 are recoverable from later compensation under the Social Security (Recovery of Benefits) Act 1997. Ask an adviser how any payment interacts with a civil claim before you apply for it or accept a settlement.",
      },
      {
        question: "Do I have to have worked directly with asbestos to claim?",
        answer:
          "No. Claims have been made by people who worked near others handling asbestos, by tradespeople who disturbed old insulation, and by family members exposed to dust on work clothes. Each case turns on whether a duty of care was owed and breached at the time, and on the evidence of exposure.",
      },
      {
        question: "What if I cannot remember every job I did?",
        answer:
          "That is very common because the exposure was decades ago. Employment records, benefit and tax records, union and apprenticeship documents, and former colleagues can all help rebuild a work history. A solicitor can also request records from employers, insurers and public bodies.",
      },
    ],
    sources: [
      { label: "GOV.UK: Diffuse mesothelioma payments — eligibility", url: "https://www.gov.uk/diffuse-mesothelioma-payment/eligibility" },
      { label: "NHS inform: Mesothelioma", url: "https://www.nhsinform.scot/illnesses-and-conditions/cancer/cancer-types-in-adults/mesothelioma" },
      hseAsbestos,
      { label: "Compensation Act 2006, section 3 — mesothelioma damages", url: "https://www.legislation.gov.uk/ukpga/2006/29/section/3" },
      limitationAct,
      { label: "Damages (Scotland) Act 2011", url: "https://www.legislation.gov.uk/asp/2011/7/contents" },
    ],
    guideSlugs: [
      "asbestos-claims-scotland",
      "industrial-disease-delayed-symptoms-scotland",
      "fatal-accident-compensation-scotland",
    ],
    related: [
      { label: "Asbestos Claims Guide", href: "/guides/asbestos-claims-scotland" },
      { label: "Fatal Accident Compensation", href: "/guides/fatal-accident-compensation-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // -------------------------------------------------------------- pleural plaques
  {
    pillar: PILLAR,
    slug: "pleural-plaques-claims",
    h1: "Pleural Plaques Claims in Scotland",
    metaTitle: "Pleural Plaques Claims Scotland — The 2009 Act Explained",
    description:
      "Scots law lets people with asbestos-related pleural plaques claim damages. How the 2009 Act works, what must be proved, time limits and earlier settled claims.",
    hubLabel: "Pleural plaques claims",
    hubDescription: "Why Scotland differs from England, and what you must still prove",
    intro:
      "Pleural plaques are patches of scarring on the lung lining that show a person was exposed to asbestos. In Scotland, unlike in England and Wales, the law says they are an actionable injury. This page explains what that means, what still has to be proved and how time limits work. It is general information, not legal advice.",
    tldr: [
      "Section 1 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 makes asbestos-related pleural plaques actionable harm.",
      "The Act reversed the effect of the House of Lords decision in Rothwell (2007) for Scotland only.",
      "You still have to prove that someone was negligent and that the plaques resulted from their exposure of you to asbestos.",
      "A claim settled or decided before 17 June 2009 is not reopened by the Act.",
      "Plaques are not cancer, but they show past asbestos exposure, so provisional damages can matter.",
    ],
    answerBox:
      "In Scotland, asbestos-related pleural plaques are a personal injury that is not negligible and are actionable harm under section 1 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009, even if they cause no symptoms. You can claim damages if you can prove that a negligent employer or other responsible person exposed you to asbestos and that the exposure caused the plaques. The general time limit is three years from the date of knowledge.",
    sections: [
      {
        heading: "What pleural plaques are",
        content:
          "Pleural plaques are areas of fibrous thickening on the pleura, the membrane around the lungs. They are usually found on a chest X-ray or CT scan taken for another reason, and most people with them have no symptoms. They are not cancer. However, they are a marker that a person has inhaled asbestos fibres in the past, and asbestos exposure carries a risk of more serious disease. A doctor can advise what, if any, follow-up is appropriate in your case.",
      },
      {
        heading: "Why the law in Scotland is different",
        content:
          "In Rothwell v Chemical & Insulating Co Ltd (2007) the House of Lords held that symptomless plaques, and anxiety about future disease, did not amount to actionable damage in England and Wales. The Scottish Parliament responded with the Damages (Asbestos-related Conditions) (Scotland) Act 2009. Section 1 provides that asbestos-related pleural plaques are a personal injury which is not negligible and constitute actionable harm for a claim for damages. Section 4 treats that as having always been the law, subject to exceptions. The Act was challenged by insurers but upheld by the UK Supreme Court in AXA General Insurance Ltd v Lord Advocate (2011).",
      },
      {
        heading: "What you must still prove",
        content:
          "The Act removes the argument that plaques are not an injury. It does not decide who is at fault. Section 1(4) confirms that the ordinary rules on when a person is liable in damages continue to apply. You still have to show that you were exposed to asbestos, that the exposure was the result of a defender's negligence, and that the plaques resulted from that exposure. The medical evidence usually needs to distinguish asbestos plaques from other causes of pleural change.",
      },
      {
        heading: "Earlier claims and the 2007 to 2009 gap",
        content:
          "Section 4(3) provides that the Act has no effect on a claim settled before it came into force, whether or not proceedings had begun, or on proceedings determined before that date. The Act came into force on 17 June 2009. Section 3 also left out of account, for the time limits in sections 17 and 18 of the 1973 Act, the period from 17 October 2007 to that date for actions not yet determined. If you settled or lost a plaques claim before June 2009, it is unlikely to be reopened, and you should get advice on your particular history.",
      },
      {
        heading: "Time limits",
        content:
          "The general personal injury limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, running from the date the injury was caused or, if later, the date of knowledge. For plaques found incidentally, the date of knowledge is often the date the finding was explained to you. Section 19A gives the court a discretion to allow a late claim, but a late start risks losing the right to claim entirely.",
      },
      {
        heading: "Compensation and provisional damages",
        content:
          "Awards for plaques reflect the condition itself, any symptoms, and the anxiety and reasonable concern about future disease. Because plaques show that a person has been exposed to asbestos, a court can in suitable cases make an award of provisional damages under section 12 of the Administration of Justice Act 1982. That allows the person to return for a further award if they later develop a serious asbestos-related disease, such as mesothelioma or asbestosis. Ask an adviser whether a provisional award or a full and final settlement suits your situation, because a full and final settlement can close off later claims.",
      },
      {
        heading: "Evidence to gather",
        content: "Useful evidence includes:",
        list: [
          "The scan or X-ray report showing pleural plaques, and any specialist opinion",
          "A detailed job history identifying where you may have breathed asbestos dust",
          "Colleagues or family who can describe the conditions and materials",
          "Employer, union and tax records for the relevant periods",
          "A note of any symptoms, follow-up appointments and how the diagnosis has affected you",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I claim for pleural plaques in Scotland if I have no symptoms?",
        answer:
          "Yes. Section 1 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 states that asbestos-related pleural plaques are a personal injury which is not negligible and are actionable harm, even though they may not cause any physical symptoms. You must still prove negligence and that the exposure caused the plaques.",
      },
      {
        question: "Why can people in England not claim for pleural plaques?",
        answer:
          "In Rothwell (2007) the House of Lords held that symptomless plaques are not actionable in England and Wales. The Scottish Parliament legislated in 2009 to give a different answer for Scotland. Where the claim is brought can therefore matter, and a solicitor can advise if you worked in more than one part of the UK.",
      },
      {
        question: "Do pleural plaques turn into cancer?",
        answer:
          "Plaques themselves are not cancer. They do indicate past exposure to asbestos, which carries a risk of other asbestos-related diseases. Ask your doctor whether any monitoring is appropriate for you. Do not rely on this page for medical advice.",
      },
      {
        question: "I settled a pleural plaques claim before 2009. Can I reopen it?",
        answer:
          "Generally no. Section 4(3) of the 2009 Act says the earlier sections have no effect on a claim settled before the relevant date, or on legal proceedings determined before it. If your circumstances changed, for example you later developed a different asbestos-related disease, get advice on what your earlier settlement covered.",
      },
      {
        question: "What is the time limit for a pleural plaques claim in Scotland?",
        answer:
          "The general time limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, from the date the injury was caused or, if later, the date you knew that it was significant and attributable to someone's fault. Courts have a limited discretion to allow late claims, but do not rely on it.",
      },
      {
        question: "Can I get provisional damages if I have pleural plaques?",
        answer:
          "In suitable cases, yes. Section 12 of the Administration of Justice Act 1982 lets a Scottish court award provisional damages where there is a proved or admitted risk that the injured person will develop a serious disease in future, and the responsible person was a public authority or was insured or indemnified. The person can then apply for a further award if that disease develops.",
      },
    ],
    sources: [
      asbestosConditionsAct,
      hseAsbestos,
      limitationAct,
      limitationDiscretion,
      provisionalDamages,
    ],
    guideSlugs: ["asbestos-claims-scotland", "industrial-disease-delayed-symptoms-scotland"],
    related: [{ label: "Asbestos Claims Guide", href: "/guides/asbestos-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ asbestosis
  {
    pillar: PILLAR,
    slug: "asbestosis-claims",
    h1: "Asbestosis Compensation Claims in Scotland",
    metaTitle: "Asbestosis Claims Scotland — Compensation and Time Limits",
    description:
      "Asbestosis claims in Scotland: how the 2009 Act treats asbestosis, what to prove against an employer, time limits, provisional damages and payment schemes.",
    hubLabel: "Asbestosis claims",
    hubDescription: "Chronic lung scarring from asbestos and the claim routes",
    intro:
      "Asbestosis is scarring of the lung caused by breathing in asbestos fibres over a long period. If you have been diagnosed in Scotland, you may be able to claim from the employer or insurer responsible for the exposure. This page explains how the law treats asbestosis, the time limits and the evidence involved. It is general information, not legal advice.",
    tldr: [
      "Asbestosis is progressive scarring of the lungs, usually after heavy exposure to asbestos over many years.",
      "Section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 makes asbestosis actionable even where it has not yet impaired the person's physical condition.",
      "You still have to prove negligent exposure and causation.",
      "Provisional damages may allow a further claim if you later develop a more serious disease.",
      "The general time limit is three years from the date of knowledge.",
    ],
    answerBox:
      "Yes. In Scotland asbestosis is a personal injury that is not negligible, and section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 confirms it is actionable harm even if it has not yet caused impairment. You can claim against an employer or other responsible person if you can prove negligent exposure to asbestos that caused the condition. The general limitation period is three years from the date of knowledge, and the employer's insurer can usually be traced if the company has closed.",
    sections: [
      {
        heading: "What asbestosis is",
        content:
          "Asbestosis is a scarring condition of lung tissue. The Health and Safety Executive describes it as normally occurring after heavy exposure to asbestos over many years, causing progressive shortness of breath and in severe cases being fatal. NHS inform gives similar information. It is different from mesothelioma, which is a cancer, although the two can be linked through the same asbestos exposure, and a person with asbestosis should ask their doctor about follow-up.",
      },
      {
        heading: "How Scots law treats asbestosis",
        content:
          "Section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 covers asbestos-related pleural thickening and asbestosis. It provides that, for the avoidance of doubt, such a condition which has not caused and is not causing impairment of a person's physical condition is still a personal injury which is not negligible, and so constitutes actionable harm. This removes any argument that early asbestosis is not an injury. As with all claims, section 2(5) confirms that the usual rules on when someone is liable in damages still apply.",
      },
      {
        heading: "What has to be proved",
        content:
          "A claimant needs to show four things: that they have asbestosis, usually supported by imaging and a respiratory specialist's report; that they were exposed to asbestos dust in a particular job or place; that a defender owed and breached a duty of care to protect them; and that the breach caused or materially contributed to the condition. Because asbestosis usually reflects heavy cumulative exposure, work history evidence is often central. Where several employers were involved, liability can be apportioned between them.",
      },
      {
        heading: "Tracing and insurance",
        content:
          "Most asbestosis claims concern employers that closed decades ago. The employer's liability insurer for the period of exposure is often the effective defender. Our page on tracing employers' liability insurers explains how the Employers' Liability Tracing Office database and the Third Parties (Rights against Insurers) Act 2010 can help.",
        linkedList: [
          { text: "Tracing employers' liability insurers in Scotland", href: "/industrial-disease-claims-scotland/tracing-employers-liability-insurers" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "The general rule in section 17 of the Prescription and Limitation (Scotland) Act 1973 gives three years from the date the injury was caused or, if later, the date of knowledge. For asbestosis this is commonly the date a doctor first told you that you had an asbestos-related lung condition. Section 19A gives the court a discretion to allow a late claim in some cases but should not be relied on.",
      },
      {
        heading: "Compensation and later disease",
        content:
          "Compensation can include solatium for pain, suffering and loss of amenity, loss of earnings if the condition affects work, the cost of care and equipment, and reasonable payment for services provided by relatives under section 8 of the Administration of Justice Act 1982. Because asbestosis carries a continuing risk of further asbestos-related disease, provisional damages under section 12 of the 1982 Act may allow a further award if a serious disease such as mesothelioma develops later. A full and final settlement can prevent that, so take advice first.",
      },
      {
        heading: "Benefits and payment schemes",
        content:
          "Industrial Injuries Disablement Benefit may be payable for prescribed industrial diseases, and GOV.UK explains the qualifying conditions. Some government lump-sum payments for dust diseases can be recovered from later compensation under the Social Security (Recovery of Benefits) Act 1997, so check with an adviser how any benefit or payment interacts with a civil claim.",
      },
    ],
    faqs: [
      {
        question: "Can I claim for asbestosis in Scotland if it is not affecting my breathing yet?",
        answer:
          "Yes. Section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 provides that asbestosis which has not caused and is not causing impairment of a person's physical condition is still a personal injury that is not negligible, and so is actionable harm. You must still prove negligent exposure and causation.",
      },
      {
        question: "What is the difference between asbestosis and mesothelioma?",
        answer:
          "Asbestosis is scarring of lung tissue caused by long-term heavy exposure. Mesothelioma is a cancer of the lining of the lungs or abdomen. Both come from asbestos exposure, but they are different diseases with different prognoses and different claims. If you have asbestosis, ask a doctor about your ongoing risks.",
      },
      {
        question: "How long do I have to claim for asbestosis?",
        answer:
          "The general time limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, from the date the injury was caused or, if later, the date you knew it was significant and attributable to someone's fault. That is commonly the date of diagnosis. Do not rely on the court's discretion to allow late claims.",
      },
      {
        question: "Can I claim if the company I worked for no longer exists?",
        answer:
          "Often, yes. If the employer had employers' liability insurance for the period of exposure, the claim can usually be pursued against the insurer. The Employers' Liability Tracing Office database can help identify insurers, and the Third Parties (Rights against Insurers) Act 2010 lets a claimant pursue an insolvent or dissolved insured's insurer directly.",
      },
      {
        question: "What are provisional damages and do they apply to asbestosis?",
        answer:
          "Provisional damages let a court make an award now while allowing the injured person to apply for more if they later develop a defined serious disease. Section 12 of the Administration of Justice Act 1982 provides for this in Scotland where there is a proved or admitted risk of serious disease and the responsible person was a public body or was insured or indemnified. It can be relevant to asbestosis, but the choice between a provisional award and a full and final settlement needs individual advice.",
      },
      {
        question: "Will Industrial Injuries Disablement Benefit affect my claim?",
        answer:
          "Possibly. Benefits and some lump-sum payments can be recovered from compensation under the Social Security (Recovery of Benefits) Act 1997, so the sum you receive may be adjusted. This is not a reason to avoid claiming a benefit you are entitled to, but it is a reason to ask about the interaction before you settle.",
      },
    ],
    sources: [
      asbestosConditionsAct,
      { label: "NHS inform: Asbestosis", url: "https://www.nhsinform.scot/illnesses-and-conditions/lungs-and-airways/asbestosis/" },
      hseAsbestos,
      limitationAct,
      provisionalDamages,
      { label: "GOV.UK: Industrial Injuries Disablement Benefit", url: "https://www.gov.uk/industrial-injuries-disablement-benefit" },
    ],
    guideSlugs: ["asbestos-claims-scotland", "industrial-disease-delayed-symptoms-scotland", "what-is-my-accident-claim-worth-scotland"],
    related: [{ label: "Asbestos Claims Guide", href: "/guides/asbestos-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------ pleural thickening
  {
    pillar: PILLAR,
    slug: "pleural-thickening-claims",
    h1: "Pleural Thickening Claims in Scotland",
    metaTitle: "Pleural Thickening Claims Scotland — Asbestos Lung Lining",
    description:
      "Asbestos-related pleural thickening claims in Scotland: the 2009 Act, what must be proved, time limits, provisional damages and family claims.",
    hubLabel: "Pleural thickening claims",
    hubDescription: "Asbestos scarring of the lung lining and how a claim works",
    intro:
      "Pleural thickening is scarring and thickening of the membrane around the lungs, and it can be caused by asbestos. If you have been diagnosed in Scotland, you may be able to claim from the employer or insurer responsible for the exposure. This page explains how the law treats the condition and what you have to prove. It is general information, not legal advice.",
    tldr: [
      "Asbestos-related pleural thickening can squeeze the lung and cause breathlessness and chest discomfort.",
      "Section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 makes it actionable, even if it is not yet causing impairment.",
      "You still have to prove negligent exposure to asbestos and causation.",
      "The condition is different from pleural plaques, which are usually localised and symptomless.",
      "The general time limit is three years from the date of knowledge.",
    ],
    answerBox:
      "In Scotland, asbestos-related pleural thickening is a personal injury which is not negligible and is actionable harm under section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009, even if it has not yet impaired your physical condition. You can claim if you can prove that a negligent employer or other responsible person exposed you to asbestos and that this caused the condition. The general time limit is three years from the date of knowledge.",
    sections: [
      {
        heading: "What pleural thickening is",
        content:
          "The pleura is the thin membrane around the lungs. In pleural thickening it becomes scarred and thickened, and if the process worsens the lung itself can be squeezed, causing breathlessness and chest discomfort. The Health and Safety Executive describes this as generally following heavy asbestos exposure. Diffuse thickening is different from pleural plaques, which are usually smaller, discrete areas and often produce no symptoms. Diagnosis is by imaging and a specialist assessment.",
      },
      {
        heading: "How Scots law treats it",
        content:
          "Section 2 of the Damages (Asbestos-related Conditions) (Scotland) Act 2009 names asbestos-related pleural thickening and asbestosis. It provides that such a condition which has not caused and is not causing impairment of a person's physical condition is still a personal injury which is not negligible and so constitutes actionable harm. As with the other sections of the Act, ordinary rules on when a person is liable in damages still apply, and section 4 confirms the Act does not disturb claims settled, or proceedings decided, before it came into force.",
      },
      {
        heading: "What has to be proved",
        content:
          "You need medical evidence that the pleural thickening is asbestos-related rather than the result of some other cause, such as infection, previous surgery or trauma. You also need evidence of exposure to asbestos in a specific job or place, of a negligent failure by the employer or other defender to protect you, and that this caused the condition. Where several employers exposed you, each may be liable in proportion to their contribution.",
      },
      {
        heading: "Impact on work and daily life",
        content:
          "Significant pleural thickening can limit lung capacity, making physical work, stairs and exercise difficult. Evidence of how it affects work, care needs and ordinary activities is important to the value of a claim. Contemporaneous notes of symptoms, occupational health records and statements from family members can help.",
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date the injury was caused or, if later, the date of knowledge. Where a person dies from the condition, section 18 applies a comparable period to the family's claim. Section 19A gives the court a discretion to allow a late claim in some circumstances, which should not be relied upon.",
      },
      {
        heading: "Compensation and future risk",
        content:
          "Compensation can include solatium for pain, suffering and loss of amenity, loss of earnings, care and equipment costs, and reasonable payment for relatives' services under section 8 of the Administration of Justice Act 1982. Where there is a proved or admitted risk of a serious future disease, provisional damages under section 12 of the 1982 Act may be available so that a further award can be sought if the disease develops. A full and final settlement can close off that route, so take advice before agreeing one.",
      },
      {
        heading: "If the employer has gone",
        content:
          "The employer's liability insurer for the period of exposure can often be traced even when the company has closed. Our page on tracing employers' liability insurers explains the process.",
        linkedList: [
          { text: "Tracing employers' liability insurers in Scotland", href: "/industrial-disease-claims-scotland/tracing-employers-liability-insurers" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is pleural thickening the same as pleural plaques?",
        answer:
          "No. Pleural plaques are usually localised patches that often cause no symptoms. Diffuse pleural thickening is a more widespread thickening of the lung lining that can restrict breathing. Both can be caused by asbestos, and both are dealt with in the Damages (Asbestos-related Conditions) (Scotland) Act 2009, but by different sections.",
      },
      {
        question: "Can I claim for pleural thickening if it is not affecting me yet?",
        answer:
          "Yes. Section 2 of the 2009 Act provides that asbestos-related pleural thickening which has not caused and is not causing impairment of a person's physical condition is still actionable harm. You still need to prove negligent exposure and causation.",
      },
      {
        question: "How is pleural thickening diagnosed?",
        answer:
          "It is usually identified on a chest X-ray or CT scan, often alongside lung function tests, and confirmed by a respiratory specialist who considers the pattern, your work history and other possible causes. A claim generally needs a medical report that links the condition to asbestos.",
      },
      {
        question: "What is the time limit for a pleural thickening claim in Scotland?",
        answer:
          "The general limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, from the date the injury was caused or, if later, when you knew it was significant and attributable to someone's fault. That is often the date of diagnosis. Do not rely on court discretion to allow late claims.",
      },
      {
        question: "Can my family claim if I die from an asbestos-related condition?",
        answer:
          "Yes. Close relatives can claim under the Damages (Scotland) Act 2011, including for loss of support, funeral expenses and compensation for distress, grief and loss of society. A separate time limit under section 18 of the 1973 Act applies, generally three years from the death or the family's date of knowledge.",
      },
      {
        question: "What if I later develop a more serious asbestos disease?",
        answer:
          "This is a key reason to take advice before settling. Provisional damages under section 12 of the Administration of Justice Act 1982 may let a court make an award now while preserving the right to seek more if a defined serious disease develops. A full and final settlement usually does not.",
      },
    ],
    sources: [
      asbestosConditionsAct,
      hseAsbestos,
      limitationAct,
      limitationDiscretion,
      provisionalDamages,
      { label: "Damages (Scotland) Act 2011", url: "https://www.legislation.gov.uk/asp/2011/7/contents" },
    ],
    guideSlugs: ["asbestos-claims-scotland", "industrial-disease-delayed-symptoms-scotland"],
    related: [{ label: "Asbestos Claims Guide", href: "/guides/asbestos-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------ repetitive strain injury
  {
    pillar: PILLAR,
    slug: "repetitive-strain-injury-claims",
    h1: "Repetitive Strain Injury (RSI) Claims in Scotland",
    metaTitle: "RSI Claims Scotland — Work-Related Upper Limb Disorders",
    description:
      "Work-related repetitive strain injury claims in Scotland: employer duties, why negligence must be proved, evidence, time limits and what compensation may cover.",
    hubLabel: "Repetitive strain injury (RSI) claims",
    hubDescription: "Work-related upper limb disorders and what a claim needs",
    intro:
      "Repetitive strain injury, often called RSI, is a general term for pain and damage in the arms, hands, shoulders and neck that can be caused or made worse by work. If your condition developed because your employer did not manage the risk properly, you may be able to claim. This page explains how such claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "RSI is not a single diagnosis. It covers upper limb disorders such as tendon, nerve and muscle conditions linked to repetitive or awkward work.",
      "Employers must assess and control the risks, including for display screen equipment, repetitive work and hand-held vibrating tools.",
      "Since 1 October 2013, a breach of health and safety regulations does not by itself give a right to damages, so most claims rest on negligence.",
      "Evidence of the work, the employer's risk assessments and your complaints matters more than in most claims.",
      "The general time limit is three years from the date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for a repetitive strain injury in Scotland if your condition was caused or materially worsened by work and your employer was negligent, for example by failing to assess the risk, provide suitable equipment, allow breaks or act on complaints. Since 1 October 2013 a breach of health and safety regulations does not of itself give a right to damages, so the claim usually rests on negligence. The general time limit is three years from the date of knowledge.",
    sections: [
      {
        heading: "What RSI means in claims",
        content:
          "The Health and Safety Executive uses the term upper limb disorders, which includes aches and pains in the shoulders, arms, wrists, hands and fingers, as well as the neck. It says they can be caused or made worse by work, for example on assembly lines, in construction, in meat or poultry processing and in work with computers. Recognised conditions include carpal tunnel syndrome, tendinopathies and tenosynovitis, and tennis and golfer's elbow. A claim needs a medical diagnosis and an opinion that work was a cause.",
      },
      {
        heading: "What employers must do",
        content:
          "Employers must assess the risks to workers' health and safety and take reasonable steps to control them. The HSE identifies duties to carry out a risk assessment, protect workers from injury caused by repetitive work, protect them from the health risks of display screen equipment, and protect them from hand-transmitted vibration. Relevant regulations include the Management of Health and Safety at Work Regulations 1999 and the Health and Safety (Display Screen Equipment) Regulations 1992. Employers must also involve workers and make sure they know how to report injuries.",
      },
      {
        heading: "Why negligence is the key test",
        content:
          "Before 1 October 2013 a breach of many health and safety regulations could itself give a right to damages. Section 69 of the Enterprise and Regulatory Reform Act 2013 changed that: breach of a duty imposed by health and safety regulations is no longer actionable unless the regulations say so. The regulations are still important evidence of what a reasonable employer should have done, but the claimant normally has to prove that the employer failed to take reasonable care and that the failure caused or contributed to the injury.",
      },
      {
        heading: "Signs an employer may have fallen short",
        content: "Situations that often feature in successful or well-founded claims include:",
        list: [
          "No risk assessment for repetitive tasks, workstations or hand tools",
          "Unsuitable or poorly adjusted chairs, keyboards or benches",
          "High-volume repetitive work without breaks or task rotation",
          "No training in posture, adjustment or reporting symptoms",
          "Complaints or sickness absence that were ignored or not investigated",
          "Increased workload or targets without reviewing the risk",
        ],
      },
      {
        heading: "Evidence that helps",
        content:
          "Because RSI develops gradually, records made at the time are valuable. Keep GP and occupational health records, physiotherapy notes, sickness absence records, emails or messages reporting symptoms, workstation assessments and descriptions of your usual tasks, hours and targets. Colleagues who experienced similar problems can be important witnesses, and a medical expert will need to consider the cause, prognosis and effect on work.",
      },
      {
        heading: "Time limits and date of knowledge",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 gives three years from the date the injury was caused or, if later, the date you first knew, or could reasonably have known, that it was significant and attributable to an act or omission of someone else. With a gradual condition the date of knowledge can be difficult to fix, and an employer may argue you knew earlier, so it is safest to take advice as soon as symptoms are diagnosed. Section 19A gives the court a discretion to allow a late claim, which should not be relied upon.",
      },
      {
        heading: "What compensation can cover",
        content:
          "Compensation can include solatium for pain, suffering and loss of amenity, loss of earnings and pension, the costs of treatment such as physiotherapy or surgery, and reasonable payment for care by relatives under section 8 of the Administration of Justice Act 1982. Where the condition affects your ability to continue in your trade, a claim for handicap on the labour market may also be relevant.",
      },
      {
        heading: "Benefits",
        content:
          "Some work-related conditions may qualify for Industrial Injuries Disablement Benefit. Check the GOV.UK eligibility rules, and ask how any benefit interacts with a compensation claim.",
      },
    ],
    faqs: [
      {
        question: "Can I claim for repetitive strain injury caused by my job in Scotland?",
        answer:
          "Possibly. You need a diagnosed condition, medical evidence that work caused or materially contributed to it, and evidence that your employer failed to take reasonable care, for example by not assessing the risk, not providing suitable equipment, or not acting on complaints. Each case depends on the work and the employer's conduct.",
      },
      {
        question: "Is RSI a medical diagnosis?",
        answer:
          "Not on its own. RSI is a general label. The specific condition might be carpal tunnel syndrome, a tendon condition, epicondylitis or another upper limb disorder. A claim needs a specific diagnosis and a medical opinion linking it to work activities.",
      },
      {
        question: "Does an employer have to protect me from RSI?",
        answer:
          "Employers must assess the risks to workers' health and safety and take reasonable steps to control them. The Health and Safety Executive identifies duties covering repetitive work, display screen equipment and hand-held vibrating tools, and says employers must consult workers and make sure they know how to report injuries.",
      },
      {
        question: "Can I still claim if the employer only breached health and safety regulations?",
        answer:
          "Since 1 October 2013, section 69 of the Enterprise and Regulatory Reform Act 2013 means that breach of health and safety regulations is not of itself actionable unless the regulations provide otherwise. The regulations remain strong evidence of the standard of care, but you normally have to prove negligence.",
      },
      {
        question: "What is the time limit for an RSI claim in Scotland?",
        answer:
          "The general limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, from the date the injury was caused or, if later, the date of knowledge. Because RSI develops gradually, the date of knowledge can be argued over, so do not delay getting advice after diagnosis.",
      },
      {
        question: "Should I tell my employer about my symptoms first?",
        answer:
          "Reporting symptoms promptly is usually sensible for your health and creates a record that the employer was on notice. Keep a copy of any report, and see your GP. Whether and how to raise a formal claim is a separate decision that an adviser can help with.",
      },
      {
        question: "What if I have left the job that caused the problem?",
        answer:
          "You may still be able to claim against the former employer if the time limit has not expired. Old records, colleagues' accounts and your own notes of your duties become more important, so collect them early.",
      },
    ],
    sources: [
      { label: "HSE: Upper limb disorders", url: "https://www.hse.gov.uk/msd/uld/index.htm" },
      { label: "HSE: Musculoskeletal disorders", url: "https://www.hse.gov.uk/msd/index.htm" },
      { label: "Enterprise and Regulatory Reform Act 2013, section 69 — civil liability", url: "https://www.legislation.gov.uk/ukpga/2013/24/section/69" },
      { label: "Health and Safety (Display Screen Equipment) Regulations 1992", url: "https://www.legislation.gov.uk/uksi/1992/2792/contents" },
      limitationAct,
      { label: "GOV.UK: Industrial Injuries Disablement Benefit — eligibility", url: "https://www.gov.uk/industrial-injuries-disablement-benefit/eligibility" },
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland", "personal-injury-claim-time-limit-scotland"],
    related: [
      { label: "Manual Handling Injury Claims", href: "/manual-handling-injury-claims-scotland" },
      { label: "Stress at Work Claims", href: "/stress-at-work-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------- tracing employers' liability insurers
  {
    pillar: PILLAR,
    slug: "tracing-employers-liability-insurers",
    h1: "Tracing Employers' Liability Insurers for Old Employers in Scotland",
    metaTitle: "Tracing Employers' Liability Insurers — Closed Employers",
    description:
      "How to trace the employers' liability insurer of a closed or dissolved Scottish employer: the ELTO database, the 2010 Act, FSCS protection and payment schemes.",
    hubLabel: "Tracing employers' liability insurers",
    hubDescription: "What to do when the employer has closed or been dissolved",
    intro:
      "Industrial disease claims often concern employers that closed decades ago. That does not always end the claim, because the employer's liability insurer may still be liable. This page explains how insurers are traced, how the law helps when a company is insolvent or dissolved, and what to do if no insurer can be found. It is general information, not legal advice.",
    tldr: [
      "Most employers have had to hold employers' liability insurance since 1972, so a closed employer's insurer may still be liable.",
      "The Employers' Liability Tracing Office (ELTO) runs a database of policies that claimants and their advisers can search.",
      "The Third Parties (Rights against Insurers) Act 2010 helps a claimant pursue the insurer of an insolvent or dissolved employer directly.",
      "The Financial Services Compensation Scheme can pay valid employers' liability claims if the insurer itself has failed.",
      "For mesothelioma only, a government payment scheme exists if neither employer nor insurer can be traced.",
    ],
    answerBox:
      "If your employer has closed, you can often still claim against its employers' liability insurer. Employers have generally been legally required to insure since 1972. The Employers' Liability Tracing Office database helps identify the insurer, and the Third Parties (Rights against Insurers) Act 2010 allows a claim against the insurer of an insolvent or dissolved company. If the insurer has failed, the Financial Services Compensation Scheme may pay valid claims, and a separate scheme exists for mesothelioma where nobody can be traced.",
    sections: [
      {
        heading: "Why the insurer matters",
        content:
          "The Employers' Liability (Compulsory Insurance) Act 1969 requires employers to insure against liability for injury or disease suffered by employees at work, so that compensation is available even if the employer cannot pay. It came into force on 1 January 1972. Where an employer has since closed, the claim is often pursued in practice against the insurer that covered the years of exposure. Work before 1972 is different: cover was not compulsory, but many employers held it voluntarily, so old policies are still worth searching for.",
      },
      {
        heading: "What you will need to start",
        content: "Gather as much of the following as you can before searching:",
        list: [
          "The employer's exact name at the time, and any later or earlier trading names",
          "The dates you worked there and the site or address",
          "Any Employer Reference Number (ERN), often found on P45, P60 or P11D documents",
          "Payslips, contracts, union or apprenticeship records and tax or benefit histories",
          "Names of colleagues or managers who can confirm the employer's identity",
        ],
      },
      {
        heading: "The ELTO database",
        content:
          "The Employers' Liability Tracing Office is an independent body formed by the insurance industry. Its database holds records of employers' liability policies going back many decades, and claimants and their advisers can search it by employer name and dates. The Employer Reference Number makes searches more accurate where a company name is common or has changed. It is free for individuals, solicitors and employers to use. A search that finds nothing does not prove that no insurer exists, because records for older policies can be incomplete.",
      },
      {
        heading: "When the company has been dissolved or is insolvent",
        content:
          "The Third Parties (Rights against Insurers) Act 2010 applies where an insured person, including a company, has become insolvent or has been dissolved. It gives a person with a claim rights against the insurer directly, including the ability to seek information about the policy, without first having to restore the company to the register or obtain a separate judgment against it. The Act applies in Scotland, and the time limits for personal injury actions still apply, so do not delay.",
      },
      {
        heading: "When the insurer has failed",
        content:
          "If the insurer itself has become insolvent, the Financial Services Compensation Scheme may pay valid claims. The FSCS says employers' liability insurance is protected in full where the claim is accepted by the insolvency practitioner. Claims are handled by the run-off agent appointed to the failed insurer.",
      },
      {
        heading: "If nobody can be traced",
        content:
          "For diffuse mesothelioma only, the Diffuse Mesothelioma Payment Scheme can pay people who were exposed to asbestos at work in the UK and cannot trace their employer or its insurers. It generally must be claimed within 12 months of diagnosis, and you cannot have made a civil claim or received damages. For other industrial diseases there is no equivalent general scheme, although benefits such as Industrial Injuries Disablement Benefit may be available.",
        linkedList: [
          { text: "Mesothelioma compensation claims in Scotland", href: "/industrial-disease-claims-scotland/mesothelioma-claims" },
        ],
      },
      {
        heading: "Time limits still apply",
        content:
          "Tracing an insurer does not stop the clock. The general limit in section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years from the date of knowledge, which is usually the diagnosis of an industrial disease. Start tracing promptly and take advice on protecting the position while enquiries continue.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if the company I worked for no longer exists?",
        answer:
          "Often yes. If the employer had employers' liability insurance for the period of exposure, the claim can usually be pursued against the insurer. The Third Parties (Rights against Insurers) Act 2010 helps where the employer is insolvent or dissolved, and ELTO can help identify the insurer.",
      },
      {
        question: "What is the Employers' Liability Tracing Office?",
        answer:
          "ELTO is an independent body set up by the insurance industry. It maintains a database of employers' liability insurance policies that claimants and their advisers can search to find the insurer for a given employer and period. It is free for individuals to use.",
      },
      {
        question: "Do I need an Employer Reference Number?",
        answer:
          "It is not essential but it helps, particularly if the company name is common or changed. The ERN is the employer's PAYE reference and is often shown on a P45, P60 or P11D. Search with the name, dates and any ERN you can find.",
      },
      {
        question: "Does the insurance requirement go back before 1972?",
        answer:
          "Compulsory employers' liability insurance came into force on 1 January 1972. Before that, cover was not universally required, but many employers held it voluntarily, so it is still worth searching. A missing record for earlier years does not necessarily mean there was no insurance.",
      },
      {
        question: "What happens if the insurer has also gone bust?",
        answer:
          "The Financial Services Compensation Scheme may pay valid employers' liability claims where the insurer has failed. The scheme funds payments, and claims are handled by the run-off agent appointed to the failed insurer. Eligibility depends on the insurer and the policy, so take advice.",
      },
      {
        question: "Is there any help if I have mesothelioma and cannot trace anyone?",
        answer:
          "Yes. The Diffuse Mesothelioma Payment Scheme is designed for people with diffuse mesothelioma who cannot trace their employer or its insurers and have not made a civil claim. It generally has a 12-month claim deadline from diagnosis, so act quickly.",
      },
      {
        question: "Do the time limits pause while I search for the insurer?",
        answer:
          "No. The usual three-year limit under section 17 of the Prescription and Limitation (Scotland) Act 1973 continues to run. Take advice early so that court proceedings can be raised in time if tracing takes longer than expected.",
      },
    ],
    sources: [
      elto,
      { label: "Employers' Liability (Compulsory Insurance) Act 1969", url: "https://www.legislation.gov.uk/ukpga/1969/57/contents" },
      { label: "Third Parties (Rights against Insurers) Act 2010", url: "https://www.legislation.gov.uk/ukpga/2010/10/contents" },
      { label: "Financial Services Compensation Scheme: insurance protection", url: "https://www.fscs.org.uk/what-we-cover/insurance/" },
      { label: "GOV.UK: Diffuse mesothelioma payments", url: "https://www.gov.uk/diffuse-mesothelioma-payment" },
      limitationAct,
    ],
    guideSlugs: ["industrial-disease-delayed-symptoms-scotland", "asbestos-claims-scotland", "no-win-no-fee-scotland-explained"],
    related: [{ label: "Accident at Work Claims Guide", href: "/guides/accident-at-work-claim-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
