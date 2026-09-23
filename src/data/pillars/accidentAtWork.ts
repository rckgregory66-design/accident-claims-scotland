import type { PillarChild } from "@/data/pillarChildren";
import {
  civilLiabilityBreach,
  hswa,
  limitationAct,
  limitationDiscretion,
  managementRegs,
  puwer,
  riddor,
} from "@/data/pillars/sources";

const PILLAR = "accident-at-work-claims-scotland" as const;
const PUBLISHED = "2026-09-23";

const negligenceNote =
  "Since 1 October 2013, section 69 of the Enterprise and Regulatory Reform Act 2013 has meant that breach of a health and safety regulation is not, by itself, a basis for a civil claim. The regulations remain strong evidence of what a reasonable employer should have done, but the claim itself normally rests on negligence (delict) at common law.";

export const accidentAtWorkChildren: PillarChild[] = [
  // --------------------------------------------------------------------- factory
  {
    pillar: PILLAR,
    slug: "factory-accident-claims",
    h1: "Factory and Manufacturing Accident Claims in Scotland",
    metaTitle: "Factory Accident Claims Scotland — Machinery and Plant Injuries",
    description:
      "Injured in a factory or manufacturing plant in Scotland? How claims work for machinery, guarding, PPE and training failures, plus evidence and time limits.",
    hubLabel: "Factory accident claims",
    hubDescription: "Machinery, guarding, chemicals and manufacturing injuries",
    intro:
      "Factories and manufacturing plants combine machinery, moving vehicles, heavy loads and hazardous substances. If you were injured because your employer did not manage those risks properly, you may be able to claim. This page explains the duties, the evidence and the time limits in Scotland. It is general information, not legal advice.",
    tldr: [
      "Employers must provide safe equipment, safe systems of work, training and supervision.",
      "Typical causes include unguarded machinery, poor maintenance, missing training and inadequate protective equipment.",
      "Since October 2013 the claim normally rests on negligence, using health and safety regulations as evidence of the standard of care.",
      "Preserve the machine, the maintenance history and the accident record wherever possible.",
      "The general time limit is three years from the date of the injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim if you were injured in a Scottish factory or manufacturing plant because your employer failed to take reasonable care, for example by not guarding machinery, not maintaining equipment, not training you, or not providing suitable protective equipment. The claim normally rests on negligence, and health and safety regulations are strong evidence of the standard expected. The general time limit is three years.",
    sections: [
      {
        heading: "The employer's duties in a manufacturing setting",
        content:
          "Employers owe a common law duty to take reasonable care for the safety of their employees, including safe plant and equipment, a safe system of work, competent colleagues and a safe place of work. Health and safety legislation adds detailed standards, including the Provision and Use of Work Equipment Regulations 1998 for machinery, the Manual Handling Operations Regulations 1992, the Personal Protective Equipment at Work Regulations 1992 and the Control of Substances Hazardous to Health Regulations 2002.",
      },
      {
        heading: "How factory accidents commonly happen",
        content: "Situations that regularly give rise to claims include:",
        list: [
          "Contact with unguarded or poorly guarded moving parts, rollers and presses",
          "Failure to isolate or lock off machinery during cleaning, repair or clearing jams",
          "Crush, entanglement and amputation injuries",
          "Being struck by forklifts, pallet trucks or other workplace vehicles",
          "Burns, scalds and chemical exposure",
          "Lifting and handling injuries on production lines",
          "Slips on oily, wet or dusty floors",
        ],
      },
      {
        heading: "Why negligence is the test",
        content: negligenceNote,
      },
      {
        heading: "Evidence to preserve",
        content:
          "Manufacturing accidents usually turn on technical detail, so the sooner evidence is secured the better.",
        list: [
          "Photographs or video of the machine, guards, controls and area, before any change or repair",
          "The make, model and serial number of the equipment",
          "Maintenance, inspection and fault records, and any earlier near-misses or complaints",
          "Risk assessments, safe systems of work and your training and induction records",
          "The accident book entry and any RIDDOR report",
          "CCTV, if it exists, and names of colleagues who saw the accident",
          "Medical records, and payslips for lost earnings",
        ],
      },
      {
        heading: "HSE investigations and the Procurator Fiscal",
        content:
          "Serious workplace accidents may be investigated by the Health and Safety Executive. In Scotland, decisions on prosecution are taken by the Crown Office and Procurator Fiscal Service rather than by HSE. An investigation or prosecution is separate from a civil claim, and a civil claim does not depend on a prosecution, but any HSE findings and documents can be valuable evidence.",
      },
      {
        heading: "When someone else is responsible",
        content:
          "Responsibility can sit with more than the direct employer. A machine supplier, installer or maintenance contractor may be liable for a defect, and agency staff may claim against the agency, the host business or both. If the equipment your employer provided was defective through a third party's fault, the Employers' Liability (Defective Equipment) Act 1969 can make the employer liable too. See our page on defective work equipment claims.",
        linkedList: [
          { text: "Defective work equipment claims in Scotland", href: "/accident-at-work-claims-scotland/defective-work-equipment-claims" },
        ],
      },
      {
        heading: "Time limits and compensation",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date the injury was caused or, if later, the date of knowledge. Section 19A gives the court a discretion to allow late claims but this should not be relied upon. Compensation can include solatium for pain and suffering, past and future loss of earnings, treatment costs, and reasonable payment for care by relatives under section 8 of the Administration of Justice Act 1982.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I was injured on a factory machine in Scotland?",
        answer:
          "Possibly. You need to show that your employer or another party failed to take reasonable care, for example by not guarding the machine, not maintaining it, not training you, or not providing safe systems of work, and that this caused your injury. Health and safety regulations are strong evidence of the standard expected.",
      },
      {
        question: "Does it matter if I made a mistake when the accident happened?",
        answer:
          "It can affect the value of a claim through contributory negligence, but it does not necessarily defeat the claim. Employers are expected to anticipate ordinary human error, particularly with dangerous machinery, and to design safe systems accordingly.",
      },
      {
        question: "Should I keep the machine or equipment as evidence?",
        answer:
          "You may not control the equipment, but you can photograph it as soon as possible and ask in writing that it is preserved and not altered or disposed of. Its condition, guarding and maintenance history are often central to the claim.",
      },
      {
        question: "Will the Health and Safety Executive prosecute my employer?",
        answer:
          "Not necessarily. Serious incidents may be investigated by HSE, and in Scotland decisions on prosecution are taken by the Crown Office and Procurator Fiscal Service. A civil claim does not depend on a prosecution, and a prosecution does not by itself compensate you.",
      },
      {
        question: "I am an agency worker at a factory. Who do I claim against?",
        answer:
          "It depends on who controlled the work, the equipment and the training. Liability may rest with the agency, the business where you were working or both. Keep your contract, assignment details and payslips, and identify who gave you instructions and induction.",
      },
      {
        question: "How long do I have to claim?",
        answer:
          "The general limit is three years from the date of the injury or, if later, the date you knew it was significant and attributable to someone's fault. Do not rely on the court's discretion to allow a late claim.",
      },
    ],
    sources: [
      puwer,
      { label: "Manual Handling Operations Regulations 1992", url: "https://www.legislation.gov.uk/uksi/1992/2793/contents" },
      { label: "Personal Protective Equipment at Work Regulations 1992", url: "https://www.legislation.gov.uk/uksi/1992/2966/contents" },
      civilLiabilityBreach,
      riddor,
      limitationAct,
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland", "what-is-my-accident-claim-worth-scotland"],
    related: [{ label: "Manual Handling Injury Claims", href: "/manual-handling-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------------ farm
  {
    pillar: PILLAR,
    slug: "farm-accident-claims",
    h1: "Farm and Agricultural Accident Claims in Scotland",
    metaTitle: "Farm Accident Claims Scotland — Vehicles, Livestock, Falls",
    description:
      "Farm accident claims in Scotland: who can claim, vehicles, livestock and falls from height, employee and self-employed positions, evidence and time limits.",
    hubLabel: "Farm accident claims",
    hubDescription: "Vehicles, livestock, machinery and falls on farms",
    intro:
      "Farming is one of the most hazardous industries in Britain. Whether you work on a farm, contract for one or are visiting, a serious accident may give rise to a claim if someone failed to take reasonable care. This page explains who can claim, against whom, and what evidence matters in Scotland. It is general information, not legal advice.",
    tldr: [
      "The Health and Safety Executive identifies vehicles, falling objects, falls from height, animals and machinery as the main causes of death in agriculture.",
      "Employees can claim against an employer; the self-employed and family members need a responsible third party.",
      "Contractors, landlords, machinery suppliers and visitors' hosts can all be involved.",
      "Preserve equipment and photograph the scene before anything is moved or repaired.",
      "The general time limit is three years, and children are treated differently.",
    ],
    answerBox:
      "You may be able to claim for a farm accident in Scotland if someone else failed to take reasonable care. An employee can normally claim against the farm business and its employers' liability insurer. A self-employed farmer or family worker needs to identify a responsible party such as a contractor, supplier, landlord or another occupier. The general time limit is three years from the date of the injury or date of knowledge.",
    sections: [
      {
        heading: "Why farm accidents are different",
        content:
          "HSE reports that moving or overturning vehicles, falling objects, falls from height, animals and machinery continue to be the main causes of death in agriculture, with transport the largest single cause. Many farm workers are self-employed, family members or seasonal and contract workers, so working out who owed a duty of care is often the hardest part of a claim.",
      },
      {
        heading: "Employees on farms",
        content:
          "An employee has the same rights as any other worker. The farm business owes a duty to provide safe vehicles and machinery, a safe system of work, training, and suitable access to heights and livestock areas, and should carry employers' liability insurance. Common problems include untrained drivers, vehicles without proper maintenance or visibility aids, unsafe roofs and ladders, and unguarded power take-off shafts.",
      },
      {
        heading: "Self-employed farmers and family members",
        content:
          "A self-employed farmer cannot claim against their own business, and family members who are not employees may have no employer to claim against. A claim may still be possible against someone else who was responsible: a contractor who worked negligently, a supplier or manufacturer of defective machinery, a landlord or neighbouring occupier who let a hazard exist, or a driver on the road. Section 1 of the Employers' Liability (Defective Equipment) Act 1969 applies only to employees, but a defective-product claim under the Consumer Protection Act 1987 does not depend on employment.",
      },
      {
        heading: "Livestock and animal injuries",
        content:
          "Injuries from cattle and other livestock are a leading cause of harm on farms. Liability can arise under the general law of negligence, for example where a handler or keeper failed to take reasonable precautions, and in some cases under section 1 of the Animals (Scotland) Act 1987, which depends on the species of animal and the circumstances. Whether it applies to a particular animal is a legal question that a solicitor can advise on.",
      },
      {
        heading: "Visitors, contractors and children",
        content:
          "People who are not employees, such as delivery drivers, contractors, customers at farm shops and visitors, may be owed a duty by the occupier under the Occupiers' Liability (Scotland) Act 1960. Children are particularly at risk on farms and are treated differently for limitation purposes, with the three-year period generally not running until age 16.",
      },
      {
        heading: "Evidence to preserve",
        content: "Useful evidence in farm accident claims includes:",
        list: [
          "Photographs of the vehicle, machine, roof, ladder, building or animal handling area, and the ground conditions",
          "Make, model and registration or serial number of any vehicle or machine involved",
          "Servicing and maintenance history and any earlier faults or complaints",
          "Training and licence records for drivers and operators",
          "Names and contact details of anyone who saw the accident",
          "Any RIDDOR report or HSE contact, and the accident record",
          "Medical records, and earnings and business records for loss calculations",
        ],
      },
      {
        heading: "Fatal farm accidents",
        content:
          "Where a death occurs in the course of employment or occupation in Scotland, a Fatal Accident Inquiry is generally mandatory unless the Lord Advocate waives it because the circumstances have been established in other proceedings. Relatives may also have claims under the Damages (Scotland) Act 2011.",
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date of injury or date of knowledge, and section 19A gives the court a discretion that should not be relied upon. Where the claim is against a manufacturer under the Consumer Protection Act 1987, additional time rules apply, so take advice early on defective machinery.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I am a self-employed farmer injured on my own farm?",
        answer:
          "You cannot normally claim against your own business, but you may be able to claim against someone else who caused the accident, such as a contractor, a supplier of defective machinery, a driver or a neighbouring occupier. The facts decide whether a responsible party exists.",
      },
      {
        question: "What are the most common causes of serious farm accidents?",
        answer:
          "HSE identifies vehicles, falling objects, falls from height, animals and machinery as the main causes of death in agriculture, with transport the largest single cause. Similar hazards produce many serious non-fatal injuries.",
      },
      {
        question: "Can I claim if I was hurt by cattle?",
        answer:
          "Possibly. A claim may be based on negligence if someone failed to take reasonable precautions in handling or housing the animals, and in some circumstances on the Animals (Scotland) Act 1987. Whether either route applies depends on the animal and the circumstances, so get advice.",
      },
      {
        question: "Can family members working on the farm claim?",
        answer:
          "Family members who are employees have the same rights as any employee. Those who are not employees need a responsible third party. Family arrangements on farms can be informal, so payslips, tax records and evidence of the work you did are important.",
      },
      {
        question: "What if a visitor or child was hurt on a farm?",
        answer:
          "The occupier may owe a duty of care to visitors under the Occupiers' Liability (Scotland) Act 1960. For children, the three-year limitation period generally does not start until they reach 16, but evidence should still be preserved promptly.",
      },
      {
        question: "Should I report a farm accident to HSE?",
        answer:
          "Deaths, specified serious injuries and injuries causing more than seven days' incapacity to a worker must be reported by the responsible person under RIDDOR. If you think an incident should have been reported, you can raise it with HSE. A report is a notification, not a finding of fault.",
      },
    ],
    sources: [
      { label: "HSE: Health and safety in agriculture", url: "https://www.hse.gov.uk/agriculture/hsagriculture.htm" },
      { label: "HSE: Agriculture — transport", url: "https://www.hse.gov.uk/agriculture/experience/transport.htm" },
      { label: "HSE: Agriculture — falls from height", url: "https://www.hse.gov.uk/agriculture/experience/falls-from-height.htm" },
      { label: "HSE: Agriculture — livestock", url: "https://www.hse.gov.uk/agriculture/topics/livestock.htm" },
      { label: "Occupiers' Liability (Scotland) Act 1960", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
      { label: "Consumer Protection Act 1987 — product liability", url: "https://www.legislation.gov.uk/ukpga/1987/43/contents" },
      limitationAct,
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland", "fatal-accident-compensation-scotland"],
    related: [
      { label: "Dog Bite and Animal Injury Claims", href: "/dog-bite-claims-scotland" },
      { label: "Fall from Height Claims", href: "/work-at-height-fall-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // -------------------------------------------------------------------- warehouse
  {
    pillar: PILLAR,
    slug: "warehouse-accident-claims",
    h1: "Warehouse and Logistics Accident Claims in Scotland",
    metaTitle: "Warehouse Accident Claims Scotland — Forklifts, Lifting, Racking",
    description:
      "Warehouse and logistics accident claims in Scotland: forklift, racking, manual handling and falls injuries, agency workers, evidence and time limits.",
    hubLabel: "Warehouse accident claims",
    hubDescription: "Forklifts, racking, manual handling and workplace transport",
    intro:
      "Warehouses and distribution centres depend on forklifts, vehicles, heavy lifting and high racking, often with time pressure and a large temporary workforce. If you were hurt because those risks were not managed, you may be able to claim. This page explains how claims work in Scotland. It is general information, not legal advice.",
    tldr: [
      "HSE identifies manual handling, slips and trips, workplace transport and falls from height as key warehouse risks.",
      "Forklift and vehicle incidents often need evidence of segregation, training, lighting and traffic management.",
      "Agency and temporary workers can claim, but who is responsible may be disputed.",
      "The claim normally rests on negligence, using health and safety regulations as evidence.",
      "The general time limit is three years from the date of injury or date of knowledge.",
    ],
    answerBox:
      "You may be able to claim for a warehouse accident in Scotland if your employer or the operator of the site failed to take reasonable care, for example over forklift traffic management, training, manual handling, racking, floor conditions or work at height. Agency workers can claim, and the responsible party may be the agency, the site operator or both. The general time limit is three years.",
    sections: [
      {
        heading: "The main warehouse hazards",
        content:
          "HSE guidance on warehousing identifies manual handling and musculoskeletal disorders, slips and trips, workplace transport and falls from height as topics needing special attention. In freight and logistics, lifting and moving by hand is a leading cause of reportable injury, and forklift trucks and other vehicles regularly strike pedestrians.",
      },
      {
        heading: "Forklifts and workplace transport",
        content:
          "Claims after forklift or vehicle incidents often examine whether pedestrians and vehicles were kept apart, whether routes were marked and lit, whether operators were trained and authorised, whether the vehicle was properly maintained and equipped with warnings, and whether the pace of work encouraged unsafe practices. Lifting equipment and work equipment duties are found in the Lifting Operations and Lifting Equipment Regulations 1998 and PUWER.",
      },
      {
        heading: "Manual handling and repetitive work",
        content:
          "Picking, packing and loading can cause back, shoulder and limb injuries through single incidents or cumulative strain. The Manual Handling Operations Regulations 1992 expect employers to avoid hazardous manual handling where reasonably practicable, assess what cannot be avoided and reduce the risk. Evidence of the load weights, handling frequency, targets and training is often important.",
        linkedList: [
          { text: "Manual handling injury claims in Scotland", href: "/manual-handling-injury-claims-scotland" },
        ],
      },
      {
        heading: "Racking, falling objects and work at height",
        content:
          "Poorly maintained or overloaded racking, unstable pallets and unsafe access equipment can cause serious injuries. Claims may involve the racking owner, installer or inspector as well as the employer.",
      },
      {
        heading: "Agency, temporary and delivery workers",
        content:
          "Warehouses often use agency staff, and visiting delivery drivers attend the site as non-employees. Responsibility depends on who controlled the work, equipment and training. It may sit with the agency, the business running the site or both, and drivers may claim against their own employer, the site occupier under the Occupiers' Liability (Scotland) Act 1960, or both. Keep contracts, assignment details, payslips and induction records.",
      },
      {
        heading: "Why negligence is the test",
        content: negligenceNote,
      },
      {
        heading: "Evidence and time limits",
        content:
          "Preserve CCTV requests promptly, as footage is often overwritten. Also gather the accident book entry, RIDDOR report, risk assessments, training and licence records, maintenance records for the vehicle or equipment, and witness names. Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date of injury or date of knowledge.",
      },
    ],
    faqs: [
      {
        question: "Can I claim after being hit by a forklift at work in Scotland?",
        answer:
          "Possibly. The claim would look at whether the employer or site operator took reasonable care over traffic routes, segregation, training, maintenance and supervision. CCTV, the incident report and witness accounts are often central, so request preservation of footage early.",
      },
      {
        question: "I was an agency worker in a warehouse. Who is responsible?",
        answer:
          "It depends on who controlled the work, the equipment, the training and the site. The agency, the warehouse operator or both may owe duties. You can normally still claim, and an adviser can work out which party or insurer to pursue.",
      },
      {
        question: "Can I claim for a back injury from lifting at work?",
        answer:
          "You may be able to if the employer failed to avoid or reduce hazardous manual handling, for example through poor assessment, inadequate equipment, excessive loads, unrealistic targets or lack of training. Medical evidence linking the injury to the work is essential.",
      },
      {
        question: "What if I was hurt by a delivery to a warehouse but do not work there?",
        answer:
          "A visiting driver may claim against the site occupier under the Occupiers' Liability (Scotland) Act 1960 if the site was unsafe, and may have separate claims against their own employer or others. The facts of the visit and the conditions of the site are key.",
      },
      {
        question: "Does the employer's insurance cover warehouse accidents?",
        answer:
          "Employers must generally hold employers' liability insurance for injuries to employees, and site operators normally hold public liability insurance for visitors. Claims are usually dealt with by the relevant insurer.",
      },
      {
        question: "How long do I have to claim?",
        answer:
          "The general limit is three years from the date of injury or, if later, the date you knew it was significant and attributable to someone's fault. Gradual injuries can raise questions about the date of knowledge, so do not delay taking advice.",
      },
    ],
    sources: [
      { label: "HSE: Warehousing", url: "https://www.hse.gov.uk/logistics/warehousing.htm" },
      { label: "HSE: Warehousing and storage — a guide to health and safety (HSG76)", url: "https://www.hse.gov.uk/pubns/books/hsg76.htm" },
      { label: "HSE: Manual handling at work", url: "https://www.hse.gov.uk/msd/manual-handling/index.htm" },
      { label: "Lifting Operations and Lifting Equipment Regulations 1998", url: "https://www.legislation.gov.uk/uksi/1998/2307/contents" },
      puwer,
      limitationAct,
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [
      { label: "Manual Handling Injury Claims", href: "/manual-handling-injury-claims-scotland" },
      { label: "Self-Employed Injury Claims", href: "/self-employed-injury-claims-scotland" },
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ---------------------------------------------------------------- defective equipment
  {
    pillar: PILLAR,
    slug: "defective-work-equipment-claims",
    h1: "Defective Work Equipment Claims in Scotland",
    metaTitle: "Defective Work Equipment Claims Scotland — Faulty Tools and Plant",
    description:
      "Injured by faulty tools, machinery or equipment at work in Scotland? How employer duties, the 1969 Defective Equipment Act and product liability claims work.",
    hubLabel: "Defective equipment claims",
    hubDescription: "Faulty tools, machinery and the 1969 Defective Equipment Act",
    intro:
      "If a tool, machine, vehicle or piece of safety equipment failed at work and injured you, more than one party may be legally responsible: your employer, the maker or supplier, or a maintenance contractor. This page explains the routes in Scotland and the evidence that matters. It is general information, not legal advice.",
    tldr: [
      "Employers must provide work equipment that is suitable, maintained, inspected and used by trained people.",
      "The Employers' Liability (Defective Equipment) Act 1969 can make an employer liable where a defect was a third party's fault.",
      "A manufacturer or supplier may also be liable, including under the Consumer Protection Act 1987.",
      "Do not let the equipment be repaired, scrapped or returned before it has been recorded and preserved.",
      "The general time limit is three years, with extra time rules for product claims.",
    ],
    answerBox:
      "If you were injured at work by defective equipment in Scotland, you may be able to claim against your employer and, separately, against the manufacturer, supplier or maintenance contractor. Under the Employers' Liability (Defective Equipment) Act 1969, an employer can be treated as liable where equipment it provided was defective because of a third party's fault, whether or not that party is identified. The general time limit is three years.",
    sections: [
      {
        heading: "What employers must do about equipment",
        content:
          "The Provision and Use of Work Equipment Regulations 1998 require equipment provided for use at work to be safe, maintained in a safe condition, inspected where deterioration could create danger, and used only by people who have received adequate information, instruction and training. HSE guidance adds that equipment should have suitable safety measures such as guarding, controls and emergency stops. These duties are relevant evidence of what a reasonable employer should have done.",
      },
      {
        heading: "The Employers' Liability (Defective Equipment) Act 1969",
        content:
          "Section 1 of this Act provides that where an employee is injured in the course of employment in consequence of a defect in equipment provided by the employer for the purposes of the employer's business, and the defect is attributable wholly or partly to the fault of a third party, whether identified or not, the injury is deemed to be also attributable to the employer's negligence. The Act applies in Scotland. This helps an employee who cannot show that the employer itself was careless, for example where a manufacturer made a faulty part. The employer can then seek to recover from the third party.",
      },
      {
        heading: "Claims against the maker or supplier",
        content:
          "A defective product that causes injury can also give rise to a direct claim against the producer or others in the supply chain, including under the Consumer Protection Act 1987, which does not depend on proving carelessness. This route is available to people who are not employees, for example the self-employed. Time rules for product claims are more complex than for ordinary personal injury, so take advice promptly, particularly for older equipment.",
      },
      {
        heading: "Maintenance and repair contractors",
        content:
          "Equipment that fails after being serviced or repaired may point to the contractor. Records of who inspected or repaired it, and when, are important. A hire company or lessor may also be responsible if the equipment was hired in.",
      },
      {
        heading: "Why negligence and defect are the tests",
        content: negligenceNote,
      },
      {
        heading: "Evidence to preserve",
        content:
          "Equipment cases are won or lost on the condition of the item. Try to secure the following as early as possible:",
        list: [
          "The item itself, in the condition it was in when it failed",
          "Photographs and video from several angles, including labels, serial numbers and guards",
          "Purchase, hire, servicing and inspection records, and repair invoices",
          "Manufacturer manuals, warnings, recalls and safety notices",
          "Previous faults, complaints, near-misses or repair requests",
          "Your training and induction record",
          "The accident book entry and any RIDDOR report",
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally gives three years from the date of injury or date of knowledge. Section 19A gives the court a limited discretion to allow a late claim, but do not rely on it. Product claims are subject to additional rules, including a longer-term cut-off, so ask about the equipment's age.",
      },
    ],
    faqs: [
      {
        question: "What is the Employers' Liability (Defective Equipment) Act 1969?",
        answer:
          "It provides that where an employee is injured because of a defect in equipment their employer provided for the business, and the defect was attributable wholly or partly to a third party's fault, the injury is deemed also to be attributable to the employer's negligence. The employer can then seek to recover from the third party. The Act applies in Scotland.",
      },
      {
        question: "Can I claim if the tool was faulty but my employer did nothing wrong?",
        answer:
          "Possibly. Under the 1969 Act an employer can be liable where the defect came from a third party's fault, such as a manufacturer, even if the employer itself was not careless. You may also have a direct claim against the manufacturer or supplier.",
      },
      {
        question: "What should I do with the faulty equipment?",
        answer:
          "Ask in writing that it is kept, unrepaired and unaltered, and photograph it if you can. Repairing, scrapping or returning it can destroy the evidence needed to show what went wrong.",
      },
      {
        question: "Can I claim if I was self-employed and my own tool failed?",
        answer:
          "The 1969 Act protects employees, but a self-employed person may have a claim against the manufacturer or supplier, including under the Consumer Protection Act 1987, or against a contractor who serviced the item.",
      },
      {
        question: "Does it matter if the equipment was old?",
        answer:
          "It can matter. Age affects what a reasonable employer should have done in maintenance and replacement, and product claims have additional time limits. Provide whatever purchase, servicing and inspection records exist.",
      },
      {
        question: "What if I was not trained to use the equipment?",
        answer:
          "Lack of training can itself be a breach of the employer's duty and is relevant even where the equipment was not defective. Training and induction records are important evidence.",
      },
    ],
    sources: [
      puwer,
      { label: "Employers' Liability (Defective Equipment) Act 1969, section 1", url: "https://www.legislation.gov.uk/ukpga/1969/37/section/1" },
      { label: "Consumer Protection Act 1987 — product liability", url: "https://www.legislation.gov.uk/ukpga/1987/43/contents" },
      civilLiabilityBreach,
      riddor,
      limitationAct,
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Self-Employed Injury Claims", href: "/self-employed-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // -------------------------------------------------------------- slips and trips
  {
    pillar: PILLAR,
    slug: "slips-and-trips-at-work-claims",
    h1: "Slips and Trips at Work Claims in Scotland",
    metaTitle: "Slips and Trips at Work Claims Scotland — Employer Duties",
    description:
      "Slipped or tripped at work in Scotland? How employer duties on floors, contamination, cleaning and winter conditions affect a claim, with evidence and time limits.",
    hubLabel: "Slips and trips at work",
    hubDescription: "Wet floors, contamination, uneven surfaces and winter hazards",
    intro:
      "Slips and trips are among the most common causes of injury at work, from kitchens and shop floors to car parks in winter. If your employer did not take reasonable care to keep floors and walkways safe, you may be able to claim. This page explains the duties and evidence in Scotland. It is general information, not legal advice.",
    tldr: [
      "HSE describes slips and trips as the most common cause of major injury in workplaces, and says contamination is involved in almost all slips.",
      "The Workplace (Health, Safety and Welfare) Regulations 1992 require floors and traffic routes to be suitable and kept in good condition.",
      "Employers should assess slip risks, control contamination and clean safely.",
      "A claim is normally about negligence, using the regulations as evidence.",
      "Photograph the area and your footwear straight away, and report the accident.",
    ],
    answerBox:
      "You may be able to claim for a slip or trip at work in Scotland if your employer failed to take reasonable care to keep floors and walkways safe, for example by leaving spills, obstructions, poor lighting or icy areas unmanaged. The Workplace (Health, Safety and Welfare) Regulations 1992 set standards for floors and traffic routes and are strong evidence of what a reasonable employer should do. The general time limit is three years.",
    sections: [
      {
        heading: "What the law expects of employers",
        content:
          "The Management of Health and Safety at Work Regulations 1999 require employers to assess risks, including slip and trip risks, and to act on them. The Workplace (Health, Safety and Welfare) Regulations 1992 require floors and traffic routes to be suitable for their purpose, in good condition and free from obstructions. HSE says that a clean, dry, smooth floor is rarely a slip risk, and that contamination, such as water, fluids, dust and waste, is involved in almost all slips.",
      },
      {
        heading: "Common causes",
        content: "Typical circumstances in claims include:",
        list: [
          "Wet, greasy or contaminated floors in kitchens, food production, cleaning or retail",
          "Spills not cleaned up or not marked",
          "Trailing cables, boxes and equipment in walkways",
          "Worn, loose or uneven flooring, damaged mats and steps",
          "Poor lighting or unmarked changes of level",
          "Icy or snowy car parks, paths and yards, where winter maintenance is inadequate",
          "Unsuitable footwear supplied or required by the employer",
        ],
      },
      {
        heading: "Why negligence is the test",
        content: negligenceNote,
      },
      {
        heading: "Contributory negligence and footwear",
        content:
          "An employer may argue that you were not looking where you were going, or wore unsuitable footwear. This can reduce compensation if proved, but it does not automatically defeat a claim, particularly where the employer required particular footwear or the hazard was one it should have controlled. Keep the shoes you wore.",
      },
      {
        heading: "Evidence to gather straight away",
        content: "Because floors are cleaned or repaired quickly, early evidence matters:",
        list: [
          "Photographs of the area, the spill or defect, lighting and any warning signs",
          "Photographs of your footwear and clothing, kept unwashed if possible",
          "The accident book entry, and any RIDDOR report",
          "Names of witnesses and anyone who cleaned or attended",
          "Cleaning rotas, inspection logs and risk assessments if you can request them",
          "CCTV requests, made in writing as soon as possible",
          "Medical records showing the injury and its cause",
        ],
      },
      {
        heading: "Time limits and compensation",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 generally allows three years from the date of the injury or date of knowledge. Compensation can include solatium for pain and suffering, loss of earnings, treatment costs and reasonable payment for relatives' care under section 8 of the Administration of Justice Act 1982. Fractures, head injuries and back injuries from falls can have lasting effects on work.",
      },
      {
        heading: "Slips outside your own workplace",
        content:
          "If you slipped in a shop, supermarket or public place rather than your own workplace, a different framework applies, mainly the Occupiers' Liability (Scotland) Act 1960. See our public place accident guidance for those cases.",
        linkedList: [
          { text: "Public place accident claims in Scotland", href: "/public-place-accident-claims-scotland" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I claim if I slipped on a wet floor at work in Scotland?",
        answer:
          "Possibly, if your employer failed to take reasonable care, for example by not cleaning or marking a spill, not maintaining the floor, or not having a system for dealing with contamination. Evidence of how long the hazard existed and what the employer knew is important.",
      },
      {
        question: "Does the employer have to keep car parks and paths clear of ice?",
        answer:
          "Employers must take reasonable care for safe access to and around the workplace, which can include winter maintenance of the areas they control. What is reasonable depends on the site, the weather and the systems in place, so evidence of gritting records and warnings matters.",
      },
      {
        question: "What if I was rushing or not looking when I fell?",
        answer:
          "That may be argued as contributory negligence, which can reduce compensation if the court finds you were partly to blame. It does not usually remove the claim if the employer's failure was a real cause of the accident.",
      },
      {
        question: "Do I need to report the accident to claim?",
        answer:
          "Reporting is not a condition of a claim, but a prompt entry in the accident book is strong evidence that the accident happened as you describe. Employers must report some injuries under RIDDOR, such as certain fractures and injuries causing more than seven days' incapacity.",
      },
      {
        question: "Should I keep my shoes?",
        answer:
          "Yes. Your footwear may be relevant to the cause of the fall and to any argument about contributory negligence. Keep them, unwashed if possible, and photograph them.",
      },
      {
        question: "How long do I have to bring a slip or trip claim?",
        answer:
          "The general limit is three years from the date of the accident, or the date of knowledge if later. Injury and evidence both deteriorate with time, so take advice as soon as you can.",
      },
    ],
    sources: [
      { label: "HSE: Slips and trips", url: "https://www.hse.gov.uk/slips/" },
      { label: "HSE: Slips and trips — employers", url: "https://www.hse.gov.uk/slips/employers.htm" },
      { label: "Workplace (Health, Safety and Welfare) Regulations 1992", url: "https://www.legislation.gov.uk/uksi/1992/3004/contents" },
      managementRegs,
      civilLiabilityBreach,
      limitationAct,
    ],
    guideSlugs: ["slip-trip-fall-claims-scotland", "accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Public Place Accident Claims", href: "/public-place-accident-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------- reporting (RIDDOR)
  {
    pillar: PILLAR,
    slug: "reporting-an-accident-at-work",
    h1: "Reporting an Accident at Work in Scotland: RIDDOR and the Accident Book",
    metaTitle: "Reporting an Accident at Work Scotland — RIDDOR Explained",
    description:
      "How to report an accident at work in Scotland: the accident book, what employers must report to HSE under RIDDOR, fatal accident inquiries and how it affects a claim.",
    hubLabel: "Reporting an accident at work",
    hubDescription: "The accident book, RIDDOR reports and what happens next",
    intro:
      "After an accident at work you may be unsure who has to be told and what happens next. This page explains the accident book, the employer's legal duty to report certain incidents to the Health and Safety Executive under RIDDOR, what happens after a workplace death in Scotland, and how reporting relates to a compensation claim. It is general information, not legal advice.",
    tldr: [
      "Tell your employer promptly and make sure the accident is written in the accident book.",
      "Employers or other responsible people must report deaths, specified injuries, over-seven-day incapacity, some diseases and dangerous occurrences to HSE under RIDDOR.",
      "A RIDDOR report is a legal notification, not a finding of fault.",
      "Not reporting does not prevent a claim, but weakens the evidence.",
      "In Scotland a death in the course of employment generally leads to a mandatory Fatal Accident Inquiry.",
    ],
    answerBox:
      "You should report an accident at work to your employer as soon as possible and make sure it is recorded in the accident book. Separately, the employer or another responsible person must report deaths, specified serious injuries, injuries causing more than seven days' incapacity, certain diseases and dangerous occurrences to the Health and Safety Executive under RIDDOR. Failing to report does not stop you claiming, but a prompt record makes your account easier to prove.",
    sections: [
      {
        heading: "Step one: tell your employer and get it recorded",
        content:
          "Report the accident to your employer or supervisor immediately, or as soon as you are able, and ask for it to be entered in the accident book. Check that the entry is accurate and complete, including the date, time, place, what happened and your injuries, and keep a copy or photograph. If your employer refuses, write down that you reported it, and to whom, and keep any message or email.",
      },
      {
        heading: "What must be reported under RIDDOR",
        content:
          "The Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 require the responsible person, usually the employer, to notify the enforcing authority of certain work-related incidents. According to HSE, these include:",
        list: [
          "The death of any person from a work-related accident, with the exception of suicides",
          "Specified injuries to workers, including fractures other than to fingers, thumbs and toes, amputations, injuries likely to cause permanent loss or reduction of sight, serious burns, scalping needing hospital treatment, loss of consciousness from head injury or asphyxia, and crush injuries to the head or torso that damage the brain or internal organs",
          "Injuries that make a worker unable to do their normal work for more than seven consecutive days, reportable within 15 days",
          "Certain work-related diseases and dangerous occurrences",
          "Injuries to people who are not workers, such as visitors, where they are taken from the site to hospital for treatment",
        ],
      },
      {
        heading: "Employers must also keep records",
        content:
          "Employers must record accidents even where no report to HSE is needed, and HSE guidance refers to keeping a record of injuries causing more than three days' incapacity. Check HSE's guide to reporting accidents and incidents for the current requirements for your workplace.",
      },
      {
        heading: "Is a RIDDOR report an admission of fault?",
        content:
          "No. A RIDDOR report is a legal notification to the enforcing authority. It records that an incident occurred, and it is not a finding of liability. However, the report and any later HSE investigation can provide useful information for a claim, so ask your employer, or the solicitor you instruct, to obtain a copy.",
      },
      {
        heading: "If your employer has not reported it",
        content:
          "If you believe a reportable incident has not been reported, you can raise it with HSE. This does not prevent you making a claim, and it does not require you to have already instructed a solicitor. Take advice if you are worried about how raising it will affect your job.",
      },
      {
        heading: "Workplace deaths in Scotland",
        content:
          "When someone dies in a work accident in Scotland, the death is reported to the Crown Office and Procurator Fiscal Service, which investigates and decides whether criminal proceedings are appropriate, working with HSE. Under the Inquiries into Fatal Accidents and Sudden Deaths etc. (Scotland) Act 2016, a Fatal Accident Inquiry is generally mandatory where a person dies as a result of an accident in Scotland while acting in the course of their employment or occupation, although the Lord Advocate can in some circumstances waive it where the circumstances have been sufficiently established in other proceedings. Relatives may also have a civil claim under the Damages (Scotland) Act 2011.",
      },
      {
        heading: "How reporting affects your claim",
        content:
          "Reporting is not a legal requirement for a claim to succeed. However, contemporaneous records are among the strongest evidence of how an accident happened and can be decisive if liability is disputed. Whether or not you have reported, the general time limit for a personal injury claim under section 17 of the Prescription and Limitation (Scotland) Act 1973 is three years from the date of injury or date of knowledge.",
      },
    ],
    faqs: [
      {
        question: "Do I have to report an accident at work in Scotland?",
        answer:
          "You should tell your employer and have the accident recorded in the accident book, because it is the best evidence of what happened. The legal duty to report certain incidents to HSE under RIDDOR falls mainly on the employer or other responsible person, not on the injured worker.",
      },
      {
        question: "What injuries must an employer report to HSE?",
        answer:
          "According to HSE, they include deaths, specified injuries such as fractures other than to fingers, thumbs and toes, amputations, serious burns and certain head and crush injuries, and injuries that keep a worker off normal duties for more than seven consecutive days. Some diseases and dangerous occurrences are also reportable.",
      },
      {
        question: "Can I still claim if the accident was never reported?",
        answer:
          "Yes. Reporting is not a requirement for a claim. But a missing record makes it harder to prove what happened, so gather other evidence such as photographs, witness names, messages to your employer and medical records as soon as you can.",
      },
      {
        question: "Does a RIDDOR report mean my employer admits liability?",
        answer:
          "No. It is a legal notification to the enforcing authority. It is not an admission of fault or a finding that anyone was negligent.",
      },
      {
        question: "What happens after a fatal accident at work in Scotland?",
        answer:
          "The death is reported to the Crown Office and Procurator Fiscal Service, which investigates and decides whether to prosecute. A Fatal Accident Inquiry is generally mandatory for a death in the course of employment in Scotland, unless the Lord Advocate waives it. Relatives may also have a civil claim under the Damages (Scotland) Act 2011.",
      },
      {
        question: "How long do I have to claim after an accident at work?",
        answer:
          "The general limit is three years under section 17 of the Prescription and Limitation (Scotland) Act 1973, from the date of the injury or, if later, the date of knowledge. Reporting to HSE or your employer does not stop the clock, and only raising court proceedings does.",
      },
    ],
    sources: [
      riddor,
      { label: "HSE: Reportable incidents", url: "https://www.hse.gov.uk/riddor/reportable-incidents.htm" },
      { label: "HSE: Specified, reportable injuries to workers", url: "https://www.hse.gov.uk/riddor/specified-injuries.htm" },
      { label: "HSE: Reporting accidents and incidents at work (INDG453)", url: "https://www.hse.gov.uk/pubns/indg453.htm" },
      { label: "COPFS: Guide to Fatal Accident Inquiries", url: "https://www.copfs.gov.uk/services/bereavement-support/guide-to-fatal-accident-inquiries/" },
      { label: "Inquiries into Fatal Accidents and Sudden Deaths etc. (Scotland) Act 2016", url: "https://www.legislation.gov.uk/asp/2016/2/contents" },
      hswa,
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["accident-at-work-claim-scotland", "evidence-for-personal-injury-claim-scotland", "fatal-accident-compensation-scotland"],
    related: [{ label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
