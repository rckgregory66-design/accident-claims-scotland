import type { PillarChild } from "@/data/pillarChildren";
import { limitationAct, limitationDiscretion } from "@/data/pillars/sources";

const PILLAR = "public-place-accident-claims-scotland" as const;
const PUBLISHED = "2026-09-26";

const olsa = {
  label: "Occupiers' Liability (Scotland) Act 1960, section 2 — extent of occupier's duty",
  url: "https://www.legislation.gov.uk/ukpga/1960/30/section/2",
};
const olsaLandlords = {
  label: "Occupiers' Liability (Scotland) Act 1960, section 3 — landlords responsible for repairs",
  url: "https://www.legislation.gov.uk/ukpga/1960/30/section/3",
};
const roadsAct1 = {
  label: "Roads (Scotland) Act 1984, section 1 — powers and duties of local roads authorities",
  url: "https://www.legislation.gov.uk/ukpga/1984/54/section/1",
};
const roadsAct34 = {
  label: "Roads (Scotland) Act 1984, section 34 — clearance of snow and ice",
  url: "https://www.legislation.gov.uk/ukpga/1984/54/section/34",
};
const ucta16 = {
  label: "Unfair Contract Terms Act 1977, section 16 — liability for breach of duty",
  url: "https://www.legislation.gov.uk/ukpga/1977/50/section/16",
};
const foisa = {
  label: "Freedom of Information (Scotland) Act 2002",
  url: "https://www.legislation.gov.uk/asp/2002/13/contents",
};

const contributory =
  "If a court finds that the injured person did not take reasonable care for their own safety, for example by ignoring a warning or wearing unsuitable footwear, their compensation can be reduced to reflect their share of responsibility. It does not necessarily defeat the claim.";

export const publicPlaceChildren: PillarChild[] = [
  // ------------------------------------------------------------------- council
  {
    pillar: PILLAR,
    slug: "council-accident-claims",
    h1: "Council Accident Claims in Scotland",
    metaTitle: "Council Accident Claims Scotland — Roads, Parks and Buildings",
    description:
      "Claiming against a Scottish council after an accident on a road, pavement, park or public building: roads authority duties, occupiers' liability, evidence, time limits.",
    hubLabel: "Council accident claims",
    hubDescription: "Roads, pavements, parks, car parks and public buildings",
    intro:
      "Scottish councils manage most public roads, pavements, parks, car parks and public buildings. If you were injured because a council failed to take reasonable care of one of them, you may be able to claim. This page explains the duties involved, the evidence that matters and the time limits. It is general information, not legal advice.",
    tldr: [
      "Local roads authorities have a statutory duty to manage and maintain public roads under section 1 of the Roads (Scotland) Act 1984.",
      "Other council-run places, such as parks, car parks and buildings, are covered by the Occupiers' Liability (Scotland) Act 1960.",
      "A claim is normally based on negligence, so it must be shown that the council did not take reasonable care.",
      "Inspection and repair records are central, and can be requested under freedom of information law.",
      "The general time limit is three years from the date of the accident.",
    ],
    answerBox:
      "You may be able to claim against a Scottish council if you were injured by a dangerous defect on a road, pavement or council-run property and the council failed to take reasonable care. Local roads authorities must manage and maintain public roads under section 1 of the Roads (Scotland) Act 1984, and council-run premises are subject to the Occupiers' Liability (Scotland) Act 1960. The general time limit is three years from the accident.",
    sections: [
      {
        heading: "Which body is responsible",
        content:
          "Local councils are the local roads authority for most roads and pavements in their area. Trunk roads are managed by Transport Scotland rather than the council. Parks, car parks, leisure centres, schools and other buildings are normally the responsibility of the council as occupier, though some are run by arm's-length organisations or contractors. Working out who was actually responsible for the place, and who was responsible for inspecting or repairing it, is an early step in any claim.",
      },
      {
        heading: "The duty on roads and pavements",
        content:
          "Section 1 of the Roads (Scotland) Act 1984 requires a local roads authority to manage and maintain the roads on its list of public roads. A claim is normally made in negligence, so the pursuer has to show that the council failed to take reasonable care, for example by not repairing a serious defect within a reasonable time after it was reported or should have been found on inspection. The Scottish Act does not contain the statutory reasonable-care defence that applies in England and Wales, but the council will still rely on evidence of its inspection and repair systems.",
      },
      {
        heading: "The duty in parks, car parks and buildings",
        content:
          "Where the council is the occupier, section 2 of the Occupiers' Liability (Scotland) Act 1960 requires it to show such care as is reasonable in all the circumstances to see that a person entering will not suffer injury by reason of dangers due to the state of the premises or things done or omitted on them. Broken paving, missing handrails, defective play equipment, unlit stairs and unsafe trees can all raise these questions.",
      },
      {
        heading: "Common council claims",
        content: "Typical circumstances include:",
        list: [
          "Trips on raised, cracked or broken pavements and kerbs",
          "Potholes and road surface defects affecting cyclists, motorcyclists and pedestrians",
          "Defective manhole covers, drains and road furniture",
          "Falls in parks, on steps or in council car parks",
          "Injuries from defective play equipment",
          "Falls on council premises such as libraries, halls and leisure centres",
        ],
      },
      {
        heading: "Evidence",
        content: "Because defects are often repaired quickly, evidence needs to be secured early:",
        list: [
          "Photographs of the defect with something for scale, and the wider surroundings, taken as soon as it is safe",
          "The exact location, date and time, and any street or site name",
          "Names of witnesses",
          "A written report to the council and its reference number",
          "Medical records showing the injury and how it happened",
          "Any earlier complaints or reports of the same defect, including from neighbours",
        ],
      },
      {
        heading: "Asking for inspection and repair records",
        content:
          "Councils are subject to the Freedom of Information (Scotland) Act 2002, and a request can be made for inspection schedules, defect reports, repair records and complaints for the location. Requests should be specific about the place and the period. Responses are generally due within 20 working days, and the Scottish Information Commissioner can be asked to review a refusal. A solicitor can also request these records as part of a claim.",
      },
      {
        heading: "Contributory negligence and time limits",
        content: contributory,
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date of injury or date of knowledge. Section 19A gives a limited discretion to allow late claims, which should not be relied on.",
      },
    ],
    faqs: [
      {
        question: "Can I claim against the council if I tripped on a broken pavement?",
        answer:
          "Possibly. Councils are the roads authority for most pavements and must manage and maintain them under the Roads (Scotland) Act 1984. You would need to show the council failed to take reasonable care, for example by not repairing a serious defect within a reasonable time after it was reported or should have been found. Evidence of the defect is essential.",
      },
      {
        question: "Does the council have a statutory defence for road defects in Scotland?",
        answer:
          "Not in the form found in England and Wales. The Roads (Scotland) Act 1984 places duties on the roads authority, and a claim is normally made in negligence. The council will still rely on its inspection and repair records to show it took reasonable care.",
      },
      {
        question: "How do I find out whether the council knew about the defect?",
        answer:
          "You can make a freedom of information request under the Freedom of Information (Scotland) Act 2002 for inspection records, defect reports and complaints about the location. Responses are generally due within 20 working days. A solicitor can also request the records.",
      },
      {
        question: "Who is responsible for trunk roads such as the A9 or M8?",
        answer:
          "Trunk roads are managed by Transport Scotland and its operating companies rather than the local council. Identifying the right roads authority is an important first step.",
      },
      {
        question: "What if I was injured in a council park or play area?",
        answer:
          "The council, as occupier, must show reasonable care under the Occupiers' Liability (Scotland) Act 1960. Evidence of the defect, inspection records and how the accident happened is needed. Children injured in playgrounds have longer limitation periods.",
      },
      {
        question: "How long do I have to claim against a council?",
        answer:
          "The general limit is three years from the date of the accident or, if later, the date of knowledge. Councils are not treated differently from other defenders on this point, and evidence disappears quickly, so act early.",
      },
    ],
    sources: [
      roadsAct1,
      olsa,
      foisa,
      { label: "Transport Scotland: the trunk road network", url: "https://www.transport.gov.scot/transport-network/roads/the-trunk-road-network/" },
      { label: "Scottish Information Commissioner", url: "https://www.foi.scot/" },
      limitationAct,
    ],
    guideSlugs: ["council-pavement-trip-claims-scotland", "slip-trip-fall-claims-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Road Defect Accident Claims", href: "/road-defect-accident-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // --------------------------------------------------------------- ice and snow
  {
    pillar: PILLAR,
    slug: "ice-and-snow-accident-claims",
    h1: "Ice and Snow Accident Claims in Scotland",
    metaTitle: "Ice and Snow Accident Claims Scotland — Who Is Responsible",
    description:
      "Falls on ice and snow in Scotland: the council's duty under section 34 of the Roads (Scotland) Act 1984, occupiers and employers, what to prove, evidence and time limits.",
    hubLabel: "Ice and snow accident claims",
    hubDescription: "Winter falls on pavements, car parks and private land",
    intro:
      "Scottish winters make ice and snow a common cause of serious falls. Whether you can claim depends on where you fell, who was responsible for the area and whether they took reasonable care. This page explains the position for public roads, private premises and workplaces. It is general information, not legal advice.",
    tldr: [
      "Roads authorities must take such steps as they consider reasonable to prevent snow and ice endangering safe passage over public roads (Roads (Scotland) Act 1984, section 34).",
      "Businesses and other occupiers must show reasonable care under the Occupiers' Liability (Scotland) Act 1960.",
      "Employers must take reasonable care for the safety of access to and around the workplace.",
      "Nobody is expected to remove every trace of ice, so what was reasonable is the central question.",
      "Photograph the surface, your footwear and the surroundings immediately.",
    ],
    answerBox:
      "You may be able to claim for a fall on ice or snow in Scotland if the body responsible for the area failed to take reasonable care. Roads authorities must take such steps as they consider reasonable to prevent snow and ice endangering safe passage over public roads (section 34, Roads (Scotland) Act 1984), and occupiers of premises must show reasonable care under the Occupiers' Liability (Scotland) Act 1960. The general time limit is three years from the fall.",
    sections: [
      {
        heading: "Public roads and pavements",
        content:
          "Section 34 of the Roads (Scotland) Act 1984 provides that a roads authority shall take such steps as they consider reasonable to prevent snow and ice endangering the safe passage of pedestrians and vehicles over public roads. That is a duty of reasonable steps, not a promise that every surface will be clear. Councils set priorities for gritting and clearing, and a claim would examine whether the council's winter service, and what it did at that location, met the standard of reasonable care. How a breach of the section translates into a civil claim is a legal question on which specialist advice is needed, and the usual basis is negligence.",
      },
      {
        heading: "Private premises, car parks and shops",
        content:
          "Occupiers of premises such as shops, pubs, offices, housing estates and car parks must show such care as is reasonable in the circumstances under section 2 of the Occupiers' Liability (Scotland) Act 1960. In winter that can include gritting, clearing entrances and paths, using mats and warning signs, and inspecting regularly. Where the premises are used for business, a notice that purports to exclude liability for personal injury caused by negligence is void under section 16 of the Unfair Contract Terms Act 1977.",
      },
      {
        heading: "Landlords and shared areas",
        content:
          "In blocks of flats and shared housing, responsibility for paths and stairs can rest with the landlord, a factor or owners collectively. Where a landlord is responsible for repair and maintenance of the premises, section 3 of the 1960 Act extends the duty of care to them. Work out who manages the common areas and who was responsible for winter maintenance.",
      },
      {
        heading: "Employers",
        content:
          "Employers must take reasonable care to keep the workplace and the way in and out of it reasonably safe, which includes winter maintenance of car parks, yards and paths under their control. See our guidance on slips and trips at work.",
        linkedList: [
          { text: "Slips and trips at work claims in Scotland", href: "/accident-at-work-claims-scotland/slips-and-trips-at-work-claims" },
        ],
      },
      {
        heading: "What has to be shown",
        content:
          "The claimant needs to show where and how they fell, that the surface was dangerously icy or snowy, that a defender was responsible for the area, and that the defender failed to take reasonable care, for example by having no winter maintenance system, failing to follow its own gritting plan, or ignoring a known hazard. Where conditions were changing rapidly, the timing and weather records matter.",
      },
      {
        heading: "Evidence",
        content: "Useful evidence includes:",
        list: [
          "Photographs of the ice or snow, the surface and the surrounding area, taken immediately",
          "Photographs of your footwear, kept unwashed if possible",
          "Weather records for the day and the preceding days",
          "Names of witnesses, and whether others had slipped in the same place",
          "The council's or occupier's winter maintenance plan and gritting records, requested in writing or under freedom of information law",
          "Any report made after the fall, and medical records",
        ],
      },
      {
        heading: "Contributory negligence and time limits",
        content:
          contributory + " Footwear and the care taken in obviously icy conditions are the usual points. The general limit under section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years from the fall or date of knowledge.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I slipped on an icy pavement in Scotland?",
        answer:
          "Possibly. The roads authority must take such steps as it considers reasonable to prevent snow and ice endangering safe passage over public roads, and a claim would examine whether it took reasonable care at that place. Private occupiers have separate duties under the Occupiers' Liability (Scotland) Act 1960.",
      },
      {
        question: "Does the council have to grit every pavement?",
        answer:
          "No. Section 34 of the Roads (Scotland) Act 1984 requires such steps as the authority considers reasonable, which depends on its priorities and resources. The question in a claim is whether what it did, or failed to do, at the relevant place was reasonable.",
      },
      {
        question: "Who is responsible for icy paths outside a shop or in a car park?",
        answer:
          "The occupier of the premises, who must show reasonable care under the Occupiers' Liability (Scotland) Act 1960. A notice saying the occupier is not responsible for injury does not remove liability for negligence on business premises.",
      },
      {
        question: "What if I slipped on the icy path to my block of flats?",
        answer:
          "It depends on who manages the common areas. It may be a landlord, a factor or the owners collectively. Check your title and factoring arrangements and report the fall in writing to whoever is responsible.",
      },
      {
        question: "Can I be blamed for slipping in icy weather?",
        answer:
          "It may be argued that you did not take reasonable care, for example by wearing unsuitable shoes or walking where the danger was obvious. That can reduce compensation if the court agrees, but it does not necessarily defeat the claim.",
      },
      {
        question: "What is the time limit for a claim after a fall on ice?",
        answer:
          "The general limit is three years from the date of the fall or, if later, the date of knowledge. Evidence such as photographs, weather records and gritting logs is easy to lose, so gather it straight away.",
      },
    ],
    sources: [
      roadsAct34,
      olsa,
      olsaLandlords,
      ucta16,
      foisa,
      limitationAct,
    ],
    guideSlugs: ["slip-trip-fall-claims-scotland", "council-pavement-trip-claims-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------- occupiers' liability
  {
    pillar: PILLAR,
    slug: "occupiers-liability-explained",
    h1: "The Occupiers' Liability (Scotland) Act 1960 Explained",
    metaTitle: "Occupiers' Liability Scotland — The 1960 Act Explained",
    description:
      "How the Occupiers' Liability (Scotland) Act 1960 works: who is an occupier, the reasonable care standard, warning signs, landlords, children and what a claim must prove.",
    hubLabel: "Occupiers' liability explained",
    hubDescription: "Who is an occupier, and what reasonable care means",
    intro:
      "Most claims for accidents in shops, pubs, car parks, parks and other premises in Scotland depend on one short statute, the Occupiers' Liability (Scotland) Act 1960. This page explains who counts as an occupier, what standard of care applies, what notices can and cannot do, and what a claimant has to prove. It is general information, not legal advice.",
    tldr: [
      "Section 2 requires an occupier to show such care as is reasonable in all the circumstances to see that a person entering will not suffer injury from dangers due to the state of the premises or things done or omitted on them.",
      "The duty rests on the person with occupation or control of the premises, not necessarily the owner.",
      "It is a duty of reasonable care, not a guarantee of safety.",
      "On business premises, a notice excluding liability for personal injury caused by negligence is void.",
      "Landlords responsible for repairs can owe the same duty under section 3.",
    ],
    answerBox:
      "Under section 2 of the Occupiers' Liability (Scotland) Act 1960, an occupier of premises must show such care as is reasonable in all the circumstances to see that a person entering will not suffer injury or damage by reason of dangers due to the state of the premises or anything done or omitted to be done on them. It is a standard of reasonable care, not strict liability, and the general limitation period for injury is three years.",
    sections: [
      {
        heading: "What the Act says",
        content:
          "Section 2(1) provides that the care an occupier is required to show towards a person entering the premises, in respect of dangers due to the state of the premises or to anything done or omitted to be done on them and for which the occupier is in law responsible, is such care as in all the circumstances of the case is reasonable to see that the person will not suffer injury or damage by reason of any such danger. The duty applies unless the occupier is entitled to and does extend, restrict, modify or exclude their obligations by agreement.",
      },
      {
        heading: "Who is an occupier",
        content:
          "The duty falls on the person who has occupation or control of the premises. That can be a shop operator, a council, a pub tenant, a housing association or a contractor in control of a site, and not necessarily the owner. Where several parties share control, more than one may be responsible. Identifying the right defender is a first step.",
      },
      {
        heading: "Reasonable care depends on the circumstances",
        content:
          "The standard is flexible. A supermarket with heavy footfall may be expected to inspect more often than a remote path. A hazard that arose seconds before an accident is treated differently from one that existed for hours. The court considers how likely harm was, how serious it would be and what precautions were practicable. The type of entrant matters too, and more care may be needed for children.",
      },
      {
        heading: "Dangers due to the state of the premises or things done on them",
        content: "The Act covers hazards such as:",
        list: [
          "Wet, greasy or contaminated floors and spillages",
          "Broken, uneven or missing surfaces, steps and handrails",
          "Poor lighting and obstructions in walkways",
          "Falling objects, unsafe stock storage and unstable fittings",
          "Icy or snowy paths and car parks",
          "Activities taking place on the premises, such as events or work being done nearby",
        ],
      },
      {
        heading: "Warning signs and exclusion notices",
        content:
          "A visible, adequate warning can be part of reasonable care, but it does not excuse a hazard that could easily have been removed. On premises used for business, section 16 of the Unfair Contract Terms Act 1977 makes void any notice that purports to exclude or restrict liability for death or personal injury resulting from negligence, and awareness of a notice is not itself enough to show that a person voluntarily accepted the risk. A sign saying that management takes no responsibility for injury does not remove liability on business premises.",
      },
      {
        heading: "Landlords",
        content:
          "Section 3 provides that where premises are occupied under a tenancy under which the landlord is responsible for maintenance or repair, the landlord must show towards persons on the premises the same care in respect of dangers arising from any failure in that responsibility as an occupier would. This matters for common stairs, roofs and communal areas.",
      },
      {
        heading: "What a claimant must prove",
        content: "To succeed, a claimant generally needs to show:",
        list: [
          "The defender was the occupier, or otherwise responsible for the premises",
          "There was a danger due to the state of the premises or something done on them",
          "The defender failed to take reasonable care in relation to it",
          "That failure caused the injury",
          "The losses claimed resulted from the injury",
        ],
      },
      {
        heading: "Contributory negligence and time limits",
        content:
          contributory + " The general time limit is three years from the accident or date of knowledge under section 17 of the Prescription and Limitation (Scotland) Act 1973; children are treated differently.",
      },
    ],
    faqs: [
      {
        question: "Who counts as an occupier in Scotland?",
        answer:
          "The person or organisation with occupation or control of the premises, which may be a shop operator, council, tenant or housing provider rather than the owner. Where control is shared, more than one party may owe a duty.",
      },
      {
        question: "Does the occupier have to guarantee my safety?",
        answer:
          "No. Section 2 of the 1960 Act requires reasonable care in all the circumstances, not a guarantee of safety. The question is whether the occupier's precautions were reasonable given the danger and the circumstances.",
      },
      {
        question: "Does a sign saying the owner is not responsible remove liability?",
        answer:
          "Not for personal injury caused by negligence on business premises. Section 16 of the Unfair Contract Terms Act 1977 makes such notices void where they purport to exclude liability for death or personal injury from negligence in the course of business or on business premises.",
      },
      {
        question: "Are landlords covered by the Act?",
        answer:
          "Yes, in some cases. Under section 3, where a landlord is responsible for the maintenance or repair of premises, they owe the same care as an occupier in respect of dangers arising from any failure in that responsibility.",
      },
      {
        question: "Does the duty differ for children?",
        answer:
          "The standard is reasonable care in all the circumstances, and what is reasonable can depend on who is likely to be on the premises. Where children are foreseeable, more may be needed. The limitation period for children also differs.",
      },
      {
        question: "What is the time limit for a claim under the 1960 Act?",
        answer:
          "For personal injury, generally three years from the accident or, if later, the date of knowledge under section 17 of the Prescription and Limitation (Scotland) Act 1973. Children are treated differently. Gather evidence early.",
      },
    ],
    sources: [
      olsa,
      olsaLandlords,
      ucta16,
      { label: "Occupiers' Liability (Scotland) Act 1960 — full text", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["slip-trip-fall-claims-scotland", "supermarket-accident-claims-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [
      { label: "Dog Bite Claims", href: "/dog-bite-claims-scotland" },
      { label: "Shop Accident Claims", href: "/shop-accident-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------ restaurant / pub / cafe
  {
    pillar: PILLAR,
    slug: "restaurant-pub-and-cafe-accident-claims",
    h1: "Restaurant, Pub and Café Accident Claims in Scotland",
    metaTitle: "Restaurant, Pub and Café Accident Claims Scotland",
    description:
      "Injured in a restaurant, pub or café in Scotland? Slips, scalds, glass, stairs, allergens and food poisoning: what a claim needs, who is responsible, evidence and time limits.",
    hubLabel: "Restaurant, pub and café claims",
    hubDescription: "Spills, scalds, glass, stairs, allergens and food poisoning",
    intro:
      "Hospitality venues combine busy floors, hot food, glass, stairs and food safety risks. If you were injured because a restaurant, pub or café did not take reasonable care, you may be able to claim. This page explains the main situations and what a claim would need in Scotland. It is general information, not legal advice.",
    tldr: [
      "The venue's occupier must show reasonable care under the Occupiers' Liability (Scotland) Act 1960.",
      "Common accidents include slips on spills, scalds, broken glass, falls on stairs and poor lighting.",
      "Allergen and food-poisoning claims turn on food safety and information duties and on proof of cause.",
      "A no-responsibility sign does not remove liability for negligence on business premises.",
      "Ask for CCTV to be preserved and report the incident before you leave, if you can.",
    ],
    answerBox:
      "You may be able to claim if you were injured in a Scottish restaurant, pub or café because the venue failed to take reasonable care, for example by leaving spills, defective floors, stairs or lighting, or by failing to manage hot food, glass or allergen risks. The occupier's duty comes from the Occupiers' Liability (Scotland) Act 1960, and the general time limit is three years from the incident.",
    sections: [
      {
        heading: "The venue's duty",
        content:
          "The operator in control of the premises must show such care as is reasonable in all the circumstances to see that customers will not suffer injury from dangers due to the state of the premises or things done on them. In busy hospitality settings that means systems for spotting and dealing with spills, keeping walkways clear, lighting steps and stairs and managing hazards such as hot liquids and glass. A notice disclaiming responsibility does not remove liability for personal injury caused by negligence on business premises.",
      },
      {
        heading: "Common accidents",
        content: "Claims regularly involve:",
        list: [
          "Slips on spilled drinks, food or recently mopped floors without warning signs",
          "Falls on stairs, steps, uneven floors or loose carpet",
          "Poor lighting in car parks, gardens and toilets",
          "Scalds from hot drinks, soup or dishes served or carried carelessly",
          "Injuries from broken or badly stored glass",
          "Collapsing chairs, tables and fittings",
          "Falls on icy entrances or outdoor seating areas",
        ],
      },
      {
        heading: "Food allergies",
        content:
          "Food businesses in Scotland must identify and provide information about the 14 recognised allergens in food they serve. Food Standards Scotland provides guidance on managing allergens. A claim after an allergic reaction would look at what allergen information was given, whether the venue took reasonable care over cross-contamination and staff training, and whether the reaction was caused by the food served. Medical evidence of the reaction and its cause is important.",
      },
      {
        heading: "Food poisoning",
        content:
          "Food incidents should be reported to the local authority's environmental health department. A food poisoning claim needs evidence that the food you ate caused the illness, and that the venue failed to meet the required standard of hygiene or care. Keep receipts and details of what you ate, seek medical attention, ask your GP about stool tests, and note whether others became ill. Environmental health records may be relevant.",
      },
      {
        heading: "Evidence",
        content: "Useful evidence includes:",
        list: [
          "Photographs of the hazard, the floor, stairs, lighting or item involved",
          "Names of staff on duty and other customers who saw the incident",
          "A report to the manager, with a copy of any incident report",
          "A written request for CCTV to be preserved",
          "Receipts, bookings or bank records showing you were there",
          "Medical records, and photographs of injuries as they develop",
        ],
      },
      {
        heading: "Contributory negligence and time limits",
        content:
          contributory + " The general time limit is three years from the incident or date of knowledge under section 17 of the Prescription and Limitation (Scotland) Act 1973.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I slipped on a spill in a pub or restaurant?",
        answer:
          "Possibly. The venue must show reasonable care to see that customers will not suffer injury from dangers on the premises. A claim would look at how long the spill had been there, what inspection and cleaning systems existed and whether there was a warning. CCTV is often key.",
      },
      {
        question: "What if there was a sign saying the venue accepts no responsibility?",
        answer:
          "A sign purporting to exclude liability for personal injury caused by negligence on business premises is void under section 16 of the Unfair Contract Terms Act 1977. The venue's duty of reasonable care remains.",
      },
      {
        question: "Can I claim after an allergic reaction to food in a restaurant?",
        answer:
          "Possibly. Food businesses must identify and provide information on the recognised allergens. A claim would look at what information you were given, what the venue did to avoid cross-contamination, staff training and whether the food served caused the reaction. Medical evidence is essential.",
      },
      {
        question: "How do I prove food poisoning came from a particular meal?",
        answer:
          "It can be difficult. Useful evidence includes what you ate and when, receipts, medical tests, whether others became ill and any environmental health findings. Report the incident to the local council's environmental health department and see your GP promptly.",
      },
      {
        question: "Should I ask for CCTV to be kept?",
        answer:
          "Yes, as soon as possible and preferably in writing. Footage is often overwritten within days, and it can show how long a hazard existed and how the accident happened.",
      },
      {
        question: "What is the time limit for a claim against a restaurant or pub?",
        answer:
          "The general limit is three years from the date of the incident or, if later, the date of knowledge. Evidence disappears quickly, so act early.",
      },
    ],
    sources: [
      olsa,
      ucta16,
      { label: "Food Standards Scotland: managing allergens", url: "https://www.foodstandards.gov.scot/business-guidance/running-a-food-business/managing-allergens" },
      { label: "Food Standards Scotland: food safety advice for consumers", url: "https://www.foodstandards.gov.scot/consumer-advice/food-safety" },
      limitationAct,
    ],
    guideSlugs: ["slip-trip-fall-claims-scotland", "supermarket-accident-claims-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [
      { label: "Hotel Accident Claims", href: "/hotel-accident-claims-scotland" },
      { label: "Shop Accident Claims", href: "/shop-accident-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------ sports and leisure
  {
    pillar: PILLAR,
    slug: "sports-and-leisure-injury-claims",
    h1: "Sports and Leisure Injury Claims in Scotland",
    metaTitle: "Sports and Leisure Injury Claims Scotland — Gyms, Pools, Pitches",
    description:
      "Sports and leisure injury claims in Scotland: facility and equipment failures, organiser and coach duties, injuries from other players, risk acceptance and time limits.",
    hubLabel: "Sports and leisure injury claims",
    hubDescription: "Gyms, pools, pitches, events and organised activities",
    intro:
      "Sport carries risks that everyone accepts, but that does not excuse a badly maintained pool, a faulty machine or a careless coach. This page explains when a sports or leisure injury can give rise to a claim in Scotland, who may be responsible, and the evidence needed. It is general information, not legal advice.",
    tldr: [
      "Participants accept the ordinary risks of a sport, but not negligence by an organiser, coach, facility or, in serious cases, another player.",
      "Facilities such as gyms, pools and sports centres owe a duty of reasonable care as occupiers.",
      "Equipment suppliers and manufacturers may be responsible for faulty kit.",
      "A waiver or notice cannot exclude liability for personal injury caused by negligence on business premises.",
      "The general time limit is three years, with different rules for children.",
    ],
    answerBox:
      "You may be able to claim for a sports or leisure injury in Scotland if it was caused by someone else's negligence, such as an unsafe facility or equipment, inadequate supervision or instruction, or careless conduct beyond the accepted risks of the game. Participants accept the ordinary risks of a sport, but not carelessness by others. A notice or waiver cannot exclude liability for personal injury caused by negligence on business premises. The general time limit is three years.",
    sections: [
      {
        heading: "Risks you accept and risks you do not",
        content:
          "Taking part in sport involves an accepted level of risk, such as collisions in contact sports. That does not mean anyone taking part accepts an unsafe pitch, a defective piece of equipment, careless instruction or foul play well outside the rules. The question is whether someone failed to take reasonable care and that failure caused the injury.",
      },
      {
        heading: "Gyms, pools and sports centres",
        content:
          "Operators of leisure facilities are occupiers and must show reasonable care under the Occupiers' Liability (Scotland) Act 1960. That includes maintaining equipment and surfaces, providing proper induction and supervision, controlling wet floors and pool areas, and having sensible safety and first aid arrangements. Where the operator is a business, section 16 of the Unfair Contract Terms Act 1977 means a notice or waiver purporting to exclude liability for personal injury caused by negligence is void, and awareness of such a notice is not itself enough to show that you voluntarily accepted the risk.",
      },
      {
        heading: "Coaches, instructors and organisers",
        content:
          "Coaches, instructors and event organisers owe a duty to take reasonable care for participants, which includes suitable instruction, appropriate matching of participants, safe venues and equipment and, where children are involved, proper supervision. Claims involving school activities may raise separate issues, addressed in our school accident guidance.",
        linkedList: [
          { text: "School accident claims in Scotland", href: "/school-accident-claims-scotland" },
        ],
      },
      {
        heading: "Injuries caused by other participants",
        content:
          "A player who injures another is not liable merely because injury occurs in a contact sport. A claim generally needs evidence of conduct that a reasonable participant in that sport would recognise as falling below the standard expected, such as a reckless challenge well outside the rules. Referee reports, video and witness accounts can be important, and the participant's insurer or the club's cover may be relevant.",
      },
      {
        heading: "Faulty equipment",
        content:
          "Where kit or equipment failed, the seller, hirer or manufacturer may be responsible. A claim against a manufacturer may be available under the Consumer Protection Act 1987 without proving carelessness. Keep the item and do not repair or return it.",
      },
      {
        heading: "Evidence",
        content: "Useful evidence includes:",
        list: [
          "Photographs of the facility, surface, equipment and the place where you were hurt",
          "Membership, booking or ticket records, and any waiver or terms you signed",
          "The incident or accident report, and names of staff and witnesses",
          "Coaching or induction records and details of who supervised",
          "Video, CCTV or match footage",
          "Medical records, including sports medicine or physiotherapy reports",
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the injury or date of knowledge. For children the period generally does not begin until age 16. Section 19A gives a limited discretion to allow late claims, which should not be relied on.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I was injured playing sport in Scotland?",
        answer:
          "Possibly, if the injury was caused by someone else's negligence, such as an unsafe facility or equipment, careless coaching or supervision, or reckless conduct outside the accepted risks of the sport. Ordinary risks of the game are accepted by participants.",
      },
      {
        question: "Does a waiver I signed at a gym stop me claiming?",
        answer:
          "Not for personal injury caused by negligence on business premises. Section 16 of the Unfair Contract Terms Act 1977 makes a term or notice that purports to exclude liability for death or personal injury from negligence void, and awareness of it is not by itself evidence that you accepted the risk.",
      },
      {
        question: "Can I claim against another player who injured me?",
        answer:
          "Sometimes. Contact sports involve accepted risks, but a player may be liable for conduct that a reasonable participant would recognise as falling below the standard expected, such as a reckless tackle well outside the rules. Evidence of what happened is critical.",
      },
      {
        question: "Who is responsible if a piece of sports equipment broke?",
        answer:
          "It depends on who supplied, maintained or hired the equipment, and whether the failure was due to a defect or poor maintenance. A claim may lie against the facility operator, the hirer or the manufacturer. Keep the equipment.",
      },
      {
        question: "What if my child was hurt at a sports club?",
        answer:
          "The club and its coaches must take reasonable care, including proper supervision and safe equipment. Children are treated differently for limitation, with the three-year period generally not starting until age 16, but evidence should be secured promptly.",
      },
      {
        question: "What is the time limit for a sports injury claim?",
        answer:
          "The general limit is three years from the date of the injury or, if later, the date of knowledge. Take advice early, particularly if you are unsure who is responsible.",
      },
    ],
    sources: [
      olsa,
      ucta16,
      { label: "Consumer Protection Act 1987 — product liability", url: "https://www.legislation.gov.uk/ukpga/1987/43/contents" },
      { label: "sportscotland — the national agency for sport", url: "https://sportscotland.org.uk/" },
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["slip-trip-fall-claims-scotland", "evidence-for-personal-injury-claim-scotland", "what-is-my-accident-claim-worth-scotland"],
    related: [{ label: "School Accident Claims", href: "/school-accident-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
