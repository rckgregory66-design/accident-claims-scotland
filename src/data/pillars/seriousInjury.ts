import type { PillarChild } from "@/data/pillarChildren";
import { limitationAct, limitationDiscretion } from "@/data/pillars/sources";

const PILLAR = "serious-injury-claims-scotland" as const;
const PUBLISHED = "2026-09-25";

const provisionalDamages = {
  label: "Administration of Justice Act 1982, section 12 — provisional damages (Scotland)",
  url: "https://www.legislation.gov.uk/ukpga/1982/53/section/12",
};
const servicesByRelatives = {
  label: "Administration of Justice Act 1982, section 8 — services rendered by relatives",
  url: "https://www.legislation.gov.uk/ukpga/1982/53/section/8",
};
const discountRateAct = {
  label: "Damages (Investment Returns and Periodical Payments) (Scotland) Act 2019",
  url: "https://www.legislation.gov.uk/asp/2019/4/contents",
};
const awiAct = {
  label: "Adults with Incapacity (Scotland) Act 2000",
  url: "https://www.legislation.gov.uk/asp/2000/4/contents",
};

const evidenceNote =
  "Serious injury claims are valued on evidence from several disciplines. A claim commonly involves medical experts on the injury and prognosis, a care expert and occupational therapist on care and equipment needs, an employment expert on work capacity, and an accountant or actuary on future loss, as well as evidence of how the injury has changed daily life.";

const headsOfLoss = [
  "Solatium for pain, suffering and loss of amenity",
  "Past and future loss of earnings, including pension loss",
  "The cost of care and case management, now and in the future",
  "Reasonable payment for care provided by relatives (section 8, Administration of Justice Act 1982)",
  "Medical treatment, rehabilitation and therapy",
  "Adapted accommodation, equipment and transport",
];

export const seriousInjuryChildren: PillarChild[] = [
  // ------------------------------------------------------------------ brain injury
  {
    pillar: PILLAR,
    slug: "brain-injury-claims",
    h1: "Brain Injury Claims in Scotland",
    metaTitle: "Brain Injury Claims Scotland — Evidence, Capacity and Care",
    description:
      "Brain injury compensation claims in Scotland: mild to severe injury, hidden cognitive and behavioural effects, expert evidence, capacity, care and time limits.",
    hubLabel: "Brain injury claims",
    hubDescription: "Head injuries, cognitive effects, capacity and lifelong care",
    intro:
      "A brain injury can change a person's thinking, behaviour, personality and independence, sometimes in ways that are not obvious to others. If your injury was caused by someone else's fault, you may be able to claim. This page explains how brain injury claims work in Scotland, the evidence they need and the time limits. It is general information, not legal advice.",
    tldr: [
      "Brain injuries range from concussion to severe injury, and effects can be cognitive, emotional, behavioural and physical.",
      "Many effects are hidden, so neuropsychological and family evidence is often central.",
      "Claims can arise from road, work, public place, medical and criminal incidents.",
      "Capacity may be affected, which raises additional legal steps.",
      "The general time limit is three years, with special rules for children and adults lacking capacity.",
    ],
    answerBox:
      "You may be able to claim for a brain injury in Scotland if it was caused by someone else's negligence or, in some cases, by a violent crime. Claims depend on medical and neuropsychological evidence of the injury and its long-term effects, evidence from family and colleagues about changes in behaviour and function, and assessment of care and work capacity. The general time limit is three years from the injury or date of knowledge.",
    sections: [
      {
        heading: "Types of brain injury",
        content:
          "Brain injuries range from concussion to severe traumatic brain injury. NHS inform describes falls, violence and sport as common causes of concussion, and says symptoms of post-concussion syndrome can be physical, psychological or cognitive. More severe injuries can involve prolonged unconsciousness, bleeding or swelling in the brain and lasting disability. Brain damage can also follow lack of oxygen or a stroke, sometimes because of delayed or negligent medical care.",
      },
      {
        heading: "Hidden effects",
        content:
          "Some of the most significant consequences are not visible. They include memory and concentration problems, slowed thinking, fatigue, headaches, mood change, irritability, reduced inhibition, loss of insight, and difficulty with planning and organising. Someone may look well and still be unable to sustain work or relationships. Neuropsychological testing and accounts from family and colleagues about how the person was before and after the injury are often essential.",
      },
      {
        heading: "How claims arise",
        content: "Brain injury claims can arise from:",
        list: [
          "Road traffic collisions, including cyclists, pedestrians and motorcyclists",
          "Workplace accidents, such as falls from height and being struck by objects",
          "Falls in public places or on defective premises",
          "Assaults, where a criminal injuries claim may also be relevant",
          "Medical negligence, for example delayed treatment or errors at birth",
        ],
      },
      {
        heading: "Capacity and decision making",
        content:
          "A significant brain injury can affect a person's capacity to manage the claim and their money. In Scotland the Adults with Incapacity (Scotland) Act 2000 provides for guardianship and intervention orders. Our page on capacity and guardianship explains the process.",
        linkedList: [
          { text: "Capacity and guardianship after a serious injury", href: "/serious-injury-claims-scotland/capacity-and-guardianship-after-serious-injury" },
        ],
      },
      {
        heading: "Evidence and experts",
        content: evidenceNote,
      },
      {
        heading: "What compensation can cover",
        content: "Damages in a brain injury claim may include:",
        list: [...headsOfLoss, "A claim for handicap on the labour market where the injury reduces future employability"],
      },
      {
        heading: "Early rehabilitation and payments on account",
        content:
          "Early rehabilitation can affect long-term outcomes, and in some cases an interim payment may be available while the claim continues. Where there is a proved or admitted risk of future serious deterioration, such as epilepsy, provisional damages under section 12 of the Administration of Justice Act 1982 may allow a further award later. See our page on periodical payments and the discount rate for how large future losses are dealt with.",
        linkedList: [
          { text: "Periodical payments and the discount rate in Scotland", href: "/serious-injury-claims-scotland/periodical-payments-and-the-discount-rate" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "The general limit under section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years from the injury or, if later, the date of knowledge. Children and adults lacking capacity are treated differently. Section 19A gives the court a limited discretion to allow a late claim, which should not be relied upon.",
      },
    ],
    faqs: [
      {
        question: "Can I claim for a mild brain injury or concussion?",
        answer:
          "Possibly. Even where scans are normal, concussion and post-concussion symptoms can be significant and lasting. A claim would depend on medical evidence of the injury and its effects and on proof that someone else's fault caused it.",
      },
      {
        question: "How is a brain injury claim valued?",
        answer:
          "By assessing the injury's severity and effects on daily life, work and relationships, together with the cost of care, treatment, equipment and accommodation, and past and future financial loss. Expert evidence from several specialists is normally needed.",
      },
      {
        question: "Why is family evidence important?",
        answer:
          "Brain injury often changes personality, behaviour and insight in ways the injured person may not recognise. Statements from family, friends and colleagues about how the person was before and after are important evidence of the injury's real effects.",
      },
      {
        question: "What happens if the injured person cannot manage the claim?",
        answer:
          "If a person lacks capacity to conduct the claim or manage their affairs, legal steps such as guardianship or an intervention order under the Adults with Incapacity (Scotland) Act 2000 may be needed. A solicitor can explain what applies.",
      },
      {
        question: "Can I claim if the brain injury was caused by an assault?",
        answer:
          "Possibly. A civil claim may be available against the person responsible if they can be identified and have means or insurance. A claim to the Criminal Injuries Compensation Authority may also be relevant, and it has its own strict rules and deadlines.",
      },
      {
        question: "What is the time limit for a brain injury claim in Scotland?",
        answer:
          "The general limit is three years from the injury or the date of knowledge. Different rules apply to children and adults lacking capacity. Do not rely on the court's discretion to allow late claims, and take advice early.",
      },
    ],
    sources: [
      { label: "NHS inform: Concussion", url: "https://www.nhsinform.scot/illnesses-and-conditions/injuries/head-and-neck-injuries/concussion/" },
      { label: "NHS inform: Post-concussion syndrome", url: "https://www.nhsinform.scot/illnesses-and-conditions/injuries/head-and-neck-injuries/post-concussion-syndrome-pcs/" },
      awiAct,
      provisionalDamages,
      servicesByRelatives,
      limitationAct,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Criminal Injury Compensation", href: "/criminal-injury-compensation-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------ spinal injury
  {
    pillar: PILLAR,
    slug: "spinal-injury-claims",
    h1: "Spinal Injury Claims in Scotland",
    metaTitle: "Spinal Injury Claims Scotland — Paralysis, Care and Adaptations",
    description:
      "Spinal cord injury claims in Scotland: causes, the national spinal unit, care and accommodation needs, expert evidence, provisional damages and time limits.",
    hubLabel: "Spinal injury claims",
    hubDescription: "Paralysis, lifelong care, accommodation and equipment",
    intro:
      "A spinal cord injury can bring paralysis, loss of sensation and a lifetime of medical and care needs. Where the injury was caused by someone else's fault, compensation can pay for care, adaptations and lost income. This page explains how spinal injury claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "The Queen Elizabeth National Spinal Injuries Unit in Glasgow is Scotland's national service for adults with traumatic spinal cord injury.",
      "Claims turn on future needs: care, accommodation, equipment, therapy and loss of earnings.",
      "Causes include road and work accidents, falls, sport and delayed or negligent medical care.",
      "Provisional damages or periodical payments may be relevant to long-term needs.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for a spinal injury in Scotland if it was caused by someone else's negligence, for example in a road, work or public place accident or through negligent medical care. Claims are among the most complex because they value a lifetime of care, accommodation, equipment and lost income. The general time limit is three years from the injury or date of knowledge, and provisional damages or periodical payments may be relevant.",
    sections: [
      {
        heading: "Spinal injury care in Scotland",
        content:
          "The Queen Elizabeth National Spinal Injuries Unit at the Queen Elizabeth University Hospital in Glasgow is Scotland's national service, responsible for the acute and long-term care of adults with traumatic and non-progressive spinal cord injury. Treatment records and rehabilitation reports from the unit are usually central evidence in a claim.",
      },
      {
        heading: "How spinal injuries happen",
        content: "Common causes that give rise to claims include:",
        list: [
          "Road traffic collisions, including motorcycle and cycling accidents",
          "Falls from height at work or in public places",
          "Being struck or crushed at work",
          "Diving and sports incidents where a third party is at fault",
          "Delayed diagnosis or treatment of conditions such as cauda equina syndrome, or errors in spinal surgery",
        ],
      },
      {
        heading: "What a claim has to value",
        content:
          "A spinal injury claim looks far ahead. It assesses the level and completeness of injury, the person's life expectancy, and their needs for care, therapies, equipment, transport and specialist housing. It also assesses their ability to work and the future loss of earnings and pension. Small differences in assumptions about life expectancy or care hours can change the value significantly.",
      },
      {
        heading: "Care and adapted accommodation",
        content:
          "Compensation can include the cost of professional care, reasonable payment for care given by relatives under section 8 of the Administration of Justice Act 1982, and the cost of adapting or buying suitable housing. Evidence from a care expert and an occupational therapist about what is needed at home is important.",
      },
      {
        heading: "Evidence and experts",
        content: evidenceNote,
      },
      {
        heading: "Provisional damages and periodical payments",
        content:
          "Where there is a risk of later deterioration, provisional damages under section 12 of the Administration of Justice Act 1982 may allow a further application. Large future losses can also be provided for by periodical payments rather than a single lump sum, which our page on the discount rate and periodical payments explains.",
        linkedList: [
          { text: "Periodical payments and the discount rate in Scotland", href: "/serious-injury-claims-scotland/periodical-payments-and-the-discount-rate" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date of the injury or date of knowledge. Section 19A gives a limited discretion to allow late claims, which should not be relied upon. Because of the complexity, early advice matters in spinal injury cases.",
      },
    ],
    faqs: [
      {
        question: "Where are spinal injuries treated in Scotland?",
        answer:
          "The Queen Elizabeth National Spinal Injuries Unit in Glasgow is the national service for adults with traumatic and non-progressive spinal cord injury in Scotland, offering acute surgical management and inpatient and outpatient rehabilitation.",
      },
      {
        question: "What can compensation for a spinal injury cover?",
        answer:
          "It can cover pain, suffering and loss of amenity, past and future loss of earnings, professional care and reasonable payment for relatives' care, equipment, therapy, transport and adapted accommodation, subject to the evidence.",
      },
      {
        question: "Can I claim if a spinal injury was caused by delayed medical treatment?",
        answer:
          "Possibly. If a condition was negligently missed or treated late and this caused permanent injury that would otherwise have been avoided, a clinical negligence claim may be possible. It depends on expert evidence of both the standard of care and causation.",
      },
      {
        question: "What if my needs change in future?",
        answer:
          "Provisional damages under section 12 of the Administration of Justice Act 1982 can allow a further application if a defined serious deterioration occurs. Periodical payments can also adjust with inflation. Both need individual advice.",
      },
      {
        question: "Do I need to pay for care up front while the claim continues?",
        answer:
          "Early payments on account may be available in some cases where liability is not in dispute, to fund treatment and rehabilitation while the claim continues. Whether one is available depends on the facts.",
      },
      {
        question: "What is the time limit for a spinal injury claim?",
        answer:
          "The general limit is three years from the injury or, if later, the date of knowledge. Children and adults lacking capacity are treated differently. Do not rely on the court's discretion to allow late claims.",
      },
    ],
    sources: [
      { label: "Queen Elizabeth National Spinal Injuries Unit", url: "https://www.spinalunit.scot.nhs.uk/" },
      { label: "NHS National Services Scotland: Spinal injuries service", url: "https://www.nss.nhs.scot/specialist-healthcare/specialist-services/spinal-injuries/" },
      provisionalDamages,
      servicesByRelatives,
      discountRateAct,
      limitationAct,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland", "motorcycle-accident-claims-scotland"],
    related: [{ label: "Road Traffic Accident Claims", href: "/road-traffic-accident-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------- amputation
  {
    pillar: PILLAR,
    slug: "amputation-claims",
    h1: "Amputation Claims in Scotland",
    metaTitle: "Amputation Claims Scotland — Limb Loss, Prosthetics and Work",
    description:
      "Amputation injury claims in Scotland: traumatic and surgical limb loss, prosthetic costs over a lifetime, phantom pain, work capacity, evidence and time limits.",
    hubLabel: "Amputation claims",
    hubDescription: "Limb loss, prosthetic costs and long-term needs",
    intro:
      "Losing a limb changes daily life, work and independence, and brings long-term costs for prosthetics, therapy and adaptations. If an amputation resulted from someone else's fault, you may be able to claim. This page explains how amputation claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "Amputation may be traumatic, at the time of the accident, or surgical, following injury or medical error.",
      "Prosthetic limbs need replacing and maintaining over a lifetime, which is a major part of a claim.",
      "Phantom limb pain and psychological effects can be significant and are real.",
      "Serious workplace amputations are reportable to HSE under RIDDOR.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for an amputation in Scotland if the limb was lost, or had to be removed, because of someone else's negligence, such as a workplace, road or medical error. A claim values the loss itself, lifetime prosthetic and therapy costs, adaptations, care and lost earnings. The general time limit is three years from the injury or date of knowledge.",
    sections: [
      {
        heading: "How amputations arise",
        content: "Claims commonly involve:",
        list: [
          "Traumatic amputation in a workplace machinery or vehicle accident",
          "Amputation in a road collision",
          "Surgical amputation following a crush, burn or other serious injury",
          "Amputation following delayed diagnosis or negligent treatment, for example of infection or blocked blood supply",
        ],
      },
      {
        heading: "Workplace amputations and reporting",
        content:
          "Under RIDDOR an amputation of an arm, hand, finger, thumb, leg, foot or toe from a work accident is a reportable specified injury, including where the amputation is done surgically after the accident. The employer or other responsible person must report it to the Health and Safety Executive. The report and any investigation can provide useful evidence.",
      },
      {
        heading: "Life after amputation",
        content:
          "NHS inform explains that rehabilitation starts with physiotherapy and simple exercises and continues with learning to use a prosthetic limb where one is fitted. It also explains that phantom limb sensations, sometimes painful, are real and can be treated. Recovery includes physical, practical and psychological adjustment, and each can have a financial impact.",
      },
      {
        heading: "The cost of prosthetics over a lifetime",
        content:
          "A claim has to consider the prosthetic limbs a person is likely to need across their life expectancy, including replacement, repair, sockets, everyday and specialist limbs, and related care. Evidence from a prosthetics specialist and a rehabilitation expert helps to establish which limbs are reasonably needed and how often they must be replaced.",
      },
      {
        heading: "Work and everyday life",
        content:
          "Amputation can end or limit a person's occupation, particularly in manual work, and adaptations may be needed at home and in a vehicle. Compensation can reflect past and future loss of earnings, reduced employability, adaptations and the cost of care and assistance, including reasonable payment for care provided by relatives.",
      },
      {
        heading: "Evidence and experts",
        content: evidenceNote,
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the injury or, if later, the date of knowledge. Where an amputation resulted from an earlier missed or negligent diagnosis, the date of knowledge can be argued to be later than the amputation. Section 19A gives a limited discretion to allow late claims, which should not be relied upon.",
      },
    ],
    faqs: [
      {
        question: "What can I claim for after losing a limb?",
        answer:
          "Compensation can include pain, suffering and loss of amenity, loss of earnings, lifetime prosthetic, therapy and equipment costs, adaptations to home and car, and care, including reasonable payment for care by relatives, depending on the evidence.",
      },
      {
        question: "Are prosthetic costs covered for life?",
        answer:
          "A claim can include the cost of prosthetics reasonably needed over the person's life expectancy, including replacement and repair. Expert evidence helps establish what is needed and how often.",
      },
      {
        question: "Is phantom limb pain taken into account?",
        answer:
          "Yes. NHS inform explains that phantom limb pain is real and can be treated. Its effect on daily life, sleep, work and mood is part of the medical evidence that shapes the value of a claim.",
      },
      {
        question: "Must an amputation at work be reported?",
        answer:
          "Yes. Under RIDDOR, amputations of an arm, hand, finger, thumb, leg, foot or toe from a work accident are reportable specified injuries. The employer or other responsible person must report them to HSE. Failure to report does not prevent a claim.",
      },
      {
        question: "Can I claim if the amputation followed medical negligence?",
        answer:
          "Possibly. If a condition was negligently missed or badly treated and an amputation followed that would otherwise have been avoided, a clinical negligence claim may be possible. Expert evidence on the standard of care and causation is needed.",
      },
      {
        question: "How long do I have to claim?",
        answer:
          "Generally three years from the date of injury or, if later, the date of knowledge. Different rules apply to children and adults lacking capacity. Take advice early.",
      },
    ],
    sources: [
      { label: "NHS inform: Amputation", url: "https://www.nhsinform.scot/tests-and-treatments/surgical-procedures/amputation/amputation/" },
      { label: "NHS inform: Recovering from an amputation", url: "https://www.nhsinform.scot/tests-and-treatments/surgical-procedures/amputation/recovering-from-an-amputation/" },
      { label: "HSE: Specified, reportable injuries to workers (RIDDOR)", url: "https://www.hse.gov.uk/riddor/specified-injuries.htm" },
      servicesByRelatives,
      limitationAct,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland", "accident-at-work-claim-scotland"],
    related: [
      { label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" },
      { label: "Reporting an Accident at Work", href: "/accident-at-work-claims-scotland/reporting-an-accident-at-work" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------------ burns
  {
    pillar: PILLAR,
    slug: "serious-burn-injury-claims",
    h1: "Serious Burn Injury Claims in Scotland",
    metaTitle: "Serious Burn Injury Claims Scotland — Scarring and Recovery",
    description:
      "Serious burn injury claims in Scotland: causes, scarring, skin grafts, psychological effects, compensation, evidence and time limits.",
    hubLabel: "Serious burn injury claims",
    hubDescription: "Burns, scalds, scarring and long-term recovery",
    intro:
      "Serious burns can mean long hospital treatment, repeated surgery, lasting scarring and psychological harm. Where a burn was caused by someone else's fault, compensation may be available. This page explains how burn injury claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "Serious burns can need skin grafts and can take months or years to heal, and deep burns usually leave visible scarring.",
      "Claims value the physical injury, scarring, psychological effects, future surgery and loss of earnings.",
      "Workplace, chemical, fire, scald and defective product incidents can all give rise to claims.",
      "Serious workplace burns are reportable to HSE.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for a serious burn in Scotland if it was caused by someone else's negligence, such as an employer failing to control a workplace hazard, an occupier failing to maintain premises, or a defective product. Claims can cover the injury, scarring, psychological effects, future surgery and lost earnings. The general time limit is three years from the injury or date of knowledge.",
    sections: [
      {
        heading: "How serious burns happen",
        content: "Claims commonly involve:",
        list: [
          "Workplace incidents involving hot surfaces, steam, molten material, electricity or fire",
          "Chemical burns from inadequately controlled substances",
          "Scalds in kitchens, catering and hospitality",
          "Fires or explosions caused by defective installations, appliances or gas equipment",
          "Faulty products, including heaters, batteries and appliances",
          "Road traffic collisions involving fire",
        ],
      },
      {
        heading: "Treatment and scarring",
        content:
          "NHS inform explains that a severe burn may need review by a specialist and, in some cases, a skin graft to replace burnt skin with skin from another part of the body. Deep or severe burns can take months or even years to heal fully and usually leave some visible scarring. Injuries to the face, hands and joints can affect appearance and function particularly seriously.",
      },
      {
        heading: "Psychological effects",
        content:
          "A traumatic burn can cause anxiety, flashbacks, depression, sleep problems and difficulty with body image, sometimes long after the physical wounds have healed. A psychological injury can be part of the claim where it is supported by medical evidence, for example from a psychiatrist or psychologist.",
      },
      {
        heading: "Workplace burns and reporting",
        content:
          "Under RIDDOR, serious burns from a work accident are reportable specified injuries. HSE describes these as burns, including scalding, covering more than 10 per cent of the body or causing significant damage to the eyes, respiratory system or other vital organs. The report and any investigation can provide evidence.",
      },
      {
        heading: "What compensation can cover",
        content: "Damages may include:",
        list: [
          ...headsOfLoss,
          "The cost of future scar treatment, plastic surgery, psychological therapy and pressure garments",
        ],
      },
      {
        heading: "Evidence and experts",
        content: evidenceNote,
      },
      {
        heading: "Children",
        content:
          "Children are at particular risk from scalds and fires, and scarring can affect them for life. For children the three-year limitation period generally does not begin until age 16, but evidence about the cause should be preserved promptly.",
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally gives three years from the injury or, if later, the date of knowledge. Section 19A gives a limited discretion to allow a late claim, which should not be relied on.",
      },
    ],
    faqs: [
      {
        question: "Can I claim for scarring from a burn?",
        answer:
          "Yes, where the burn was caused by someone else's negligence. Scarring, including its visible impact and any functional limitation, is part of the pain, suffering and loss of amenity claim, and the cost of future scar treatment can be claimed if it is supported by expert evidence.",
      },
      {
        question: "Can I claim for psychological effects after a burn?",
        answer:
          "Yes. Psychological injury such as anxiety, PTSD or depression can form part of the claim if it is supported by medical evidence from a suitably qualified expert.",
      },
      {
        question: "Must a serious burn at work be reported?",
        answer:
          "Yes. Under RIDDOR, serious burns from a work accident, including those covering more than 10 per cent of the body or causing significant damage to eyes, respiratory system or other vital organs, are reportable specified injuries. The employer or another responsible person must report them to HSE.",
      },
      {
        question: "What if a defective product caused the burn?",
        answer:
          "A claim may be possible against the manufacturer or supplier, including under the Consumer Protection Act 1987 which does not depend on proving carelessness. Keep the product and packaging and do not repair or dispose of it.",
      },
      {
        question: "How long do I have to claim?",
        answer:
          "The general limit is three years from the injury or, if later, the date of knowledge. For children the period generally does not begin until age 16. Take advice early.",
      },
      {
        question: "Should I keep photographs of the injury?",
        answer:
          "Yes. Dated photographs at each stage of healing are valuable evidence of the injury and scarring, alongside treatment records. Keep any damaged clothing and the item that caused the burn.",
      },
    ],
    sources: [
      { label: "NHS inform: Burns and scalds", url: "https://www.nhsinform.scot/illnesses-and-conditions/injuries/skin-injuries/burns-and-scalds/" },
      { label: "HSE: Specified, reportable injuries to workers (RIDDOR)", url: "https://www.hse.gov.uk/riddor/specified-injuries.htm" },
      { label: "Consumer Protection Act 1987 — product liability", url: "https://www.legislation.gov.uk/ukpga/1987/43/contents" },
      servicesByRelatives,
      limitationAct,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // --------------------------------------------------------------------------- CRPS
  {
    pillar: PILLAR,
    slug: "complex-regional-pain-syndrome-claims",
    h1: "Complex Regional Pain Syndrome (CRPS) Claims in Scotland",
    metaTitle: "CRPS Claims Scotland — Complex Regional Pain Syndrome",
    description:
      "Complex regional pain syndrome claims in Scotland: how CRPS is diagnosed, proving it followed an injury, disputed causation and prognosis, evidence and time limits.",
    hubLabel: "CRPS claims",
    hubDescription: "Persistent severe pain after injury and how it is proved",
    intro:
      "Complex regional pain syndrome, or CRPS, is a poorly understood condition in which persistent, severe pain follows an injury and is out of proportion to it. If CRPS developed after an accident or medical treatment caused by someone else's fault, a claim may be possible. This page explains how such claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "NHS describes CRPS as a poorly understood condition causing persistent severe pain, usually after an injury, and usually in one limb.",
      "Diagnosis is clinical and can be difficult, so diagnosis and causation are often disputed.",
      "Claims depend on medical evidence that CRPS is present and that the accident or treatment caused it.",
      "Prognosis varies, so future loss is assessed carefully.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for CRPS in Scotland if it developed after an injury or treatment caused by someone else's negligence. The NHS describes CRPS as a poorly understood condition, usually triggered by an injury, with severe, long-lasting pain, usually in one limb. Because diagnosis is clinical and can be hard, claims turn on specialist medical evidence of the diagnosis, its cause and its prognosis. The general time limit is three years.",
    sections: [
      {
        heading: "What CRPS is",
        content:
          "The NHS describes CRPS as a poorly understood condition in which a person experiences persistent, severe and debilitating pain. Most cases are triggered by an injury, but the pain is much more severe and long-lasting than normal. It usually affects one limb, though it can spread. The skin can become extremely sensitive, and the area can swell, stiffen or change colour or temperature. It often improves over time, but some people have pain for many years.",
      },
      {
        heading: "Why CRPS claims are contested",
        content:
          "There is no single test for CRPS. The NHS notes that diagnosing it can be difficult because tests are needed to rule out other causes. In a claim, the other side may dispute that the claimant has CRPS at all, that it was caused by the accident rather than something else, or how severe and long-lasting it is. These questions are decided on expert medical evidence.",
      },
      {
        heading: "What has to be shown",
        content: "A CRPS claim generally needs evidence that:",
        list: [
          "Someone owed you a duty of care and breached it, for example in a road, work or public place accident, or in medical care",
          "You have CRPS, diagnosed by a suitably qualified specialist applying accepted criteria",
          "The injury or treatment caused the CRPS, and it is not explained by another cause",
          "The condition has had the effects you describe on daily life, work and mood",
        ],
      },
      {
        heading: "When medical treatment is involved",
        content:
          "CRPS can follow surgery, casting or a fracture. A claim on that basis would need to show negligent care rather than just an unwelcome outcome, applying the standard set out in Hunter v Hanley, and that the negligence caused the CRPS. Our medical negligence guidance explains that test.",
        linkedList: [
          { text: "Medical negligence claims in Scotland", href: "/medical-negligence-claims-scotland" },
        ],
      },
      {
        heading: "Prognosis and future loss",
        content:
          "Because CRPS varies from person to person, a claim needs careful expert evidence on likely recovery, the need for treatment and pain management, and the effect on work. Where there is a risk of later worsening or spread, provisional damages under section 12 of the Administration of Justice Act 1982 may be considered.",
      },
      {
        heading: "Evidence and experts",
        content: evidenceNote,
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally gives three years from the injury or, if later, the date of knowledge. Where CRPS appears after an initial injury, the date on which you knew of the condition and its link to someone's fault can be an issue. Take advice early. Section 19A gives a limited discretion, which should not be relied upon.",
      },
    ],
    faqs: [
      {
        question: "Can I claim for CRPS after an accident in Scotland?",
        answer:
          "Possibly, if CRPS developed because of an accident or treatment caused by someone else's negligence. You need specialist evidence that you have CRPS and that the accident or treatment caused it.",
      },
      {
        question: "Why is CRPS diagnosis disputed in claims?",
        answer:
          "There is no single definitive test. The NHS notes that diagnosis can be difficult because tests are needed to rule out other causes. The other side may challenge whether you have CRPS, what caused it and how severe it is.",
      },
      {
        question: "Does CRPS get better?",
        answer:
          "The NHS says CRPS often gradually improves over time, but some people have pain for many years. A claim relies on specialist evidence of your likely prognosis.",
      },
      {
        question: "Can I claim if CRPS followed surgery?",
        answer:
          "Only if the surgery or care was negligent and that negligence caused the CRPS. A recognised complication of properly performed surgery is not, by itself, negligence.",
      },
      {
        question: "What evidence helps a CRPS claim?",
        answer:
          "Prompt medical attention, consistent records of symptoms, specialist pain and neurology reports, photographs of visible changes, records of treatment, and evidence of the effect on work and daily life.",
      },
      {
        question: "What is the time limit for a CRPS claim?",
        answer:
          "The general limit is three years from the date of injury or, if later, the date of knowledge. Do not rely on the court's discretion to allow late claims.",
      },
    ],
    sources: [
      { label: "NHS: Complex regional pain syndrome", url: "https://www.nhs.uk/conditions/complex-regional-pain-syndrome/" },
      provisionalDamages,
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ---------------------------------------------------- periodical payments / discount rate
  {
    pillar: PILLAR,
    slug: "periodical-payments-and-the-discount-rate",
    h1: "Periodical Payments and the Discount Rate in Scottish Injury Claims",
    metaTitle: "Periodical Payments and Discount Rate Scotland — Future Loss",
    description:
      "How future losses are valued in Scottish serious injury claims: the personal injury discount rate, Government Actuary, periodical payment orders and structured settlements.",
    hubLabel: "Periodical payments and the discount rate",
    hubDescription: "How future losses are valued and paid in Scotland",
    intro:
      "In a serious injury claim, most of the value is often future care and loss of earnings. Two rules decide how that is turned into money: the personal injury discount rate, which reduces a lump sum to reflect early payment, and periodical payments, which pay part of the award as a regular income. Scotland now has its own approach to both. This page explains them. It is general information, not legal advice.",
    tldr: [
      "A lump sum for future loss is discounted because it is paid now and can be invested.",
      "In Scotland the discount rate is set under the Damages (Investment Returns and Periodical Payments) (Scotland) Act 2019 by reference to the Government Actuary's report, not by the England and Wales rules.",
      "Scottish courts have a statutory power to order periodical payments.",
      "Periodical payments can protect against outliving a lump sum, but need to be secure.",
      "The right choice depends on the person's needs, and needs specialist financial and legal advice.",
    ],
    answerBox:
      "In Scotland, the personal injury discount rate used to turn future losses into a lump sum is set under the Damages (Investment Returns and Periodical Payments) (Scotland) Act 2019, with the Government Actuary reporting on the rate to be used. The same Act gives Scottish courts power to order damages to be paid wholly or partly as periodical payments. Which route suits a person depends on their injury, needs and financial circumstances.",
    sections: [
      {
        heading: "Why a discount rate is needed",
        content:
          "If a person will need care or lose income for decades, paying all of that now as a lump sum gives them money before it is needed, and it can be invested in the meantime. The court therefore reduces the lump sum by a discount rate. The higher the rate, the smaller the lump sum. Because small changes in the rate make large differences in serious injury claims, it is significant to both sides.",
      },
      {
        heading: "How the rate is set in Scotland",
        content:
          "The Damages (Investment Returns and Periodical Payments) (Scotland) Act 2019 replaced the earlier method for setting the rate in Scotland. It provides a statutory method that requires the Government Actuary to report on the rate by reference to a notional portfolio intended to reflect the investment choices of a typical pursuer, and provides for regular review. The rate can therefore differ from the one used in England and Wales. Check the rate currently in force before relying on any figure.",
      },
      {
        heading: "Periodical payments",
        content:
          "Instead of, or as well as, a lump sum, damages can be paid as regular payments, sometimes for life. The 2019 Act gives Scottish courts a power to make periodical payment orders in personal injury cases. Structured settlements, where payments are made through annuities bought for the injured person, are a related way of doing this by agreement. The court must be satisfied that continuity of payment is reasonably secure.",
      },
      {
        heading: "Advantages and disadvantages",
        content: "The choice involves trade-offs:",
        list: [
          "Payments for life cannot run out if the person lives longer than expected",
          "Payments can be linked to inflation, which protects the value of care costs",
          "Payments stop when the person dies, so a lump sum may suit those who want to leave capital to family",
          "A lump sum gives flexibility, for example to buy a home, but carries investment and longevity risk",
          "Security of the paying party is a key issue",
        ],
      },
      {
        heading: "Provisional damages",
        content:
          "Separately, provisional damages under section 12 of the Administration of Justice Act 1982 can be used where there is a proved or admitted risk of a serious deterioration, such as epilepsy after a head injury, allowing a later application for a further award.",
      },
      {
        heading: "Advice and experts",
        content:
          "These decisions rely on actuarial, financial and care evidence, and on a realistic view of the person's life expectancy and needs. They also interact with benefits and, where a person lacks capacity, with the arrangements for managing their money. See our page on capacity and guardianship.",
        linkedList: [
          { text: "Capacity and guardianship after a serious injury", href: "/serious-injury-claims-scotland/capacity-and-guardianship-after-serious-injury" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the personal injury discount rate?",
        answer:
          "It is the assumed rate of return used to reduce a lump sum for future losses, because the money is paid now and can be invested. A higher rate reduces the lump sum and a lower rate increases it.",
      },
      {
        question: "Is the discount rate the same in Scotland as in England?",
        answer:
          "Not necessarily. In Scotland the rate is set under the Damages (Investment Returns and Periodical Payments) (Scotland) Act 2019, using a report from the Government Actuary and a notional portfolio meant to reflect a typical pursuer's investments. It can therefore differ from the England and Wales rate.",
      },
      {
        question: "Can a Scottish court order periodical payments?",
        answer:
          "Yes. The 2019 Act gave Scottish courts a power to make periodical payment orders in personal injury cases, and the court must be satisfied the payments are reasonably secure.",
      },
      {
        question: "What is a structured settlement?",
        answer:
          "It is an agreement settling a claim so that damages are wholly or partly paid as periodical payments, with the injured person receiving them under annuities bought for them by the paying party or its insurer. It can be for life or a fixed period.",
      },
      {
        question: "Which is better, a lump sum or periodical payments?",
        answer:
          "It depends on the injury, life expectancy, care needs and the person's circumstances. Payments for life protect against running out of money, but a lump sum gives flexibility and can be passed on. Take specialist legal and financial advice before deciding.",
      },
      {
        question: "Can damages be reviewed later if my condition worsens?",
        answer:
          "Provisional damages under section 12 of the Administration of Justice Act 1982 allow a further application if a specified serious deterioration develops, but only where the court makes a provisional award. Periodical payments can also be linked to inflation.",
      },
    ],
    sources: [
      discountRateAct,
      { label: "Damages Act 1996, section 2 — periodical payments", url: "https://www.legislation.gov.uk/ukpga/1996/48/section/2" },
      provisionalDamages,
      { label: "Ogden Tables — actuarial compensation tables for injury and death", url: "https://www.gov.uk/government/publications/ogden-tables-actuarial-compensation-tables-for-injury-and-death" },
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland"],
    related: [{ label: "Compensation Guide", href: "/personal-injury-compensation-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // --------------------------------------------------------------- capacity / guardianship
  {
    pillar: PILLAR,
    slug: "capacity-and-guardianship-after-serious-injury",
    h1: "Capacity and Guardianship After a Serious Injury in Scotland",
    metaTitle: "Capacity and Guardianship After Serious Injury — Scotland",
    description:
      "What happens when a serious injury affects a person's capacity in Scotland: the Adults with Incapacity Act, guardianship, managing a claim and protecting compensation.",
    hubLabel: "Capacity and guardianship",
    hubDescription: "When an injured adult cannot manage a claim or their money",
    intro:
      "After a brain injury or other serious injury, a person may not be able to make some or all decisions about their care, money or a legal claim. Scots law has a framework for this. This page explains the main legal routes under the Adults with Incapacity (Scotland) Act 2000 and how they relate to a compensation claim. It is general information, not legal advice.",
    tldr: [
      "The Adults with Incapacity (Scotland) Act 2000 covers adults aged 16 or over who cannot make some or all decisions.",
      "A guardianship order, granted by the sheriff, can give a person powers over welfare, finances or both.",
      "Capacity is decision-specific, and can change over time.",
      "The Office of the Public Guardian and the Mental Welfare Commission provide information and oversight.",
      "Special limitation rules can apply to adults lacking capacity, so take advice.",
    ],
    answerBox:
      "In Scotland, the Adults with Incapacity (Scotland) Act 2000 provides for adults who cannot make some or all decisions because of illness, injury, learning disability or a related condition. A guardianship or intervention order can give someone legal authority over the adult's welfare, property and financial affairs, and may be needed to raise or settle a compensation claim and to manage the money. Capacity is assessed for each decision.",
    sections: [
      {
        heading: "What capacity means",
        content:
          "Capacity is about whether a person can make a particular decision at a particular time. Someone with a serious injury might be able to decide some things and not others, and capacity can improve or worsen over time. Assessments are made by doctors and, in legal cases, experts.",
      },
      {
        heading: "The Adults with Incapacity (Scotland) Act 2000",
        content:
          "The Act provides a framework for safeguarding the welfare and finances of adults aged 16 or over who lack capacity to make some or all decisions because of mental illness, learning disability, dementia or a related condition, or an inability to communicate. Part 6 creates welfare and financial intervention orders and guardianship. Provisions can be tailored, so a person may need help only with managing money, or may also need a guardian for welfare decisions.",
      },
      {
        heading: "Guardianship and intervention orders",
        content:
          "A guardianship order can be applied for by one or more individuals, or a local authority, and is granted by the sheriff. It is suitable where someone needs long-term decision making on their behalf, and it can appoint a guardian over property, financial affairs and personal welfare. An intervention order deals with a specific decision or action. The Office of the Public Guardian (Scotland) provides information and guidance and supervises financial guardians.",
      },
      {
        heading: "How this affects a compensation claim",
        content:
          "If the injured person cannot instruct a solicitor or manage the claim, someone with legal authority may need to act for them. Settlement and the management of any award also need thought. Depending on the size of the award and the person's needs, arrangements might include a guardian with financial powers, a trust, or periodical payments, and each has consequences for benefits, care funding and tax that should be checked with specialist advisers.",
      },
      {
        heading: "Support and oversight",
        content:
          "The Mental Welfare Commission for Scotland explains the Act and protects the rights of adults with incapacity. The Office of the Public Guardian provides guidance for guardians, including on managing an adult's finances. Families should also consider whether powers of attorney existed before the injury.",
      },
      {
        heading: "Time limits",
        content:
          "The general personal injury limit under section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years, and special rules can apply where the injured person lacks capacity. Do not assume the time limit is paused, and take advice early to protect the position.",
      },
    ],
    faqs: [
      {
        question: "What is a guardianship order in Scotland?",
        answer:
          "It is an order, granted by the sheriff under the Adults with Incapacity (Scotland) Act 2000, that appoints a person or office holder as guardian for an adult who lacks capacity. It can give powers over property and finances, personal welfare or both.",
      },
      {
        question: "Who can apply for guardianship?",
        answer:
          "One or more individuals acting together, such as family members or carers, or a local authority. The application is to the sheriff court, and support is available from the Office of the Public Guardian and the Mental Welfare Commission.",
      },
      {
        question: "Can someone else bring a claim for an adult who lacks capacity?",
        answer:
          "Someone with legal authority, such as a guardian with the right powers, may need to act. Exactly who can instruct a solicitor and raise or settle a claim depends on the person's circumstances, so take advice early.",
      },
      {
        question: "Does the injured person's capacity always stay the same?",
        answer:
          "No. Capacity is specific to each decision and can change. Someone may recover capacity, or lose it for some decisions but not others. Assessments are made at the time a decision is needed.",
      },
      {
        question: "What happens to compensation for someone who lacks capacity?",
        answer:
          "It needs to be managed for the person's benefit. Depending on the person's needs and the size of the award, arrangements can include a guardian with financial powers, a trust or periodical payments. The effect on benefits and care funding should be checked with specialist advisers.",
      },
      {
        question: "Does the time limit stop while a person lacks capacity?",
        answer:
          "Special rules can affect how the time limit applies, but you should not assume that the clock is paused. Take advice early to protect the claim.",
      },
    ],
    sources: [
      awiAct,
      { label: "Mental Welfare Commission for Scotland: Adults with Incapacity Act", url: "https://www.mwcscot.org.uk/law-and-rights/adults-incapacity-act" },
      { label: "Office of the Public Guardian (Scotland)", url: "https://www.publicguardian-scotland.gov.uk/" },
      limitationAct,
    ],
    guideSlugs: ["serious-injury-rehabilitation-scotland", "what-is-my-accident-claim-worth-scotland"],
    related: [{ label: "Medical Negligence Claims", href: "/medical-negligence-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
