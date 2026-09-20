import Link from "next/link";
import type { ReactNode } from "react";

type Source = { label: string; href: string; note: string };
type Section = { heading: string; body?: string; bullets?: string[] };
type Guide = {
  answer: string;
  distinct: string;
  sections: Section[];
  sources: Source[];
  parent: { href: string; label: string };
};

const commonSources = {
  limitation: {
    label: "Prescription and Limitation (Scotland) Act 1973",
    href: "https://www.legislation.gov.uk/ukpga/1973/52/contents",
    note: "The statutory framework for limitation in Scottish personal injury actions.",
  },
  court: {
    label: "Scottish Courts and Tribunals Service: All-Scotland Sheriff Personal Injury Court",
    href: "https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/",
    note: "Official information about Scotland’s specialist sheriff personal injury court.",
  },
};

const guideData: Record<string, Guide> = {
  "road-traffic-accident-claims-scotland": {
    answer:
      "A Scottish road traffic claim normally turns on who failed to take reasonable care, whether that failure caused injury, and what loss can be proved. Preserve vehicle, scene, witness and medical evidence early; notify the insurer, but do not assume an early offer reflects the claim’s full value.",
    distinct:
      "This guide maps the road-collision evidence chain and the routes for uninsured or untraced drivers. The separate whiplash, cycling and motorcycle guides examine issues unique to those injuries and road users.",
    sections: [
      { heading: "The four questions that decide the claim", bullets: ["Who owed a duty of care and what driving act is criticised?", "What independent evidence supports that account?", "Did the collision cause or worsen the injury?", "What financial and practical losses followed?"] },
      { heading: "Evidence to secure", body: "Record the exact location, direction of travel, weather, lighting, road layout and vehicle damage. Keep dashcam files in their original format, obtain witness details, report the collision where legally required, and ask nearby premises promptly to preserve CCTV. Photographs taken later should not be presented as if they show the scene at the time." },
      { heading: "Liability is often more detailed than ‘rear-end’ or ‘right of way’", body: "Speed, lookout, signalling, stopping distance, junction priority and evasive action may all matter. The Highway Code can be relevant evidence, but a breach does not automatically decide civil liability. Responsibility can be shared, reducing rather than necessarily defeating compensation." },
      { heading: "Uninsured or untraced drivers", body: "The Motor Insurers’ Bureau operates separate schemes where the responsible vehicle was uninsured or cannot be traced. Those routes have their own conditions and evidence requirements, so keep police references, vehicle details and proof of enquiries." },
      { heading: "What compensation may cover", bullets: ["Pain, suffering and loss of amenity", "Past and future earnings or pension loss", "Treatment, travel and care", "Damaged property and other evidenced expenses"] },
    ],
    sources: [
      { label: "The Highway Code: introduction and hierarchy of road users", href: "https://www.gov.uk/guidance/the-highway-code/introduction", note: "Official rules and the hierarchy placing greatest responsibility on those who can cause the greatest harm." },
      { label: "Motor Insurers’ Bureau: making a claim", href: "https://www.mib.org.uk/making-a-claim/", note: "Official routes for claims involving uninsured or untraced drivers." },
      commonSources.limitation,
      commonSources.court,
    ],
    parent: { href: "/road-traffic-accident-claims-scotland", label: "Road traffic accident service overview" },
  },
  "whiplash-claims-scotland": {
    answer:
      "Whiplash is a neck injury caused by a sudden movement. In Scotland, a claim still requires evidence of fault, medical causation and loss; the tariff-based whiplash regime used for many claims in England and Wales should not simply be assumed to apply.",
    distinct:
      "Rather than repeating the general road-accident process, this guide focuses on symptom timing, safe medical action, proof of soft-tissue injury and the Scotland-specific valuation trap.",
    sections: [
      { heading: "Health comes before the claim", body: "NHS inform notes that symptoms can take 24 to 48 hours to develop and commonly improve within two to three months. Seek appropriate medical help, follow clinical advice and treat severe or worsening neurological symptoms as a health issue—not merely claim evidence." },
      { heading: "Why contemporaneous records matter", body: "A diagnosis is not an automatic finding of negligence, but records help establish onset, examination findings, treatment and recovery. Keep a dated symptom and activity diary without exaggeration; note sleep, work, driving, caring and exercise limitations." },
      { heading: "Scotland is not the English portal", body: "Do not value a Scottish claim by copying an online tariff designed for a different legal regime. Valuation considers the medical evidence, duration and effect of symptoms, any psychological injury, financial loss and comparable Scottish or UK judicial awards." },
      { heading: "Disputed causation", body: "Insurers may question low-speed impacts, delayed reporting, pre-existing neck problems or gaps in treatment. The real question is whether the collision caused a new injury or materially worsened an existing condition. Accurate prior medical history strengthens, rather than weakens, a credible analysis." },
      { heading: "Practical file checklist", bullets: ["Collision photographs and repair evidence", "Medical and physiotherapy records", "Medication and travel receipts", "Employer absence and earnings records", "A measured recovery diary"] },
    ],
    sources: [
      { label: "NHS inform: whiplash", href: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/neck-and-back-problems-and-conditions/whiplash/", note: "Symptoms, expected recovery, self-management and when to seek clinical help." },
      { label: "The Highway Code", href: "https://www.gov.uk/guidance/the-highway-code", note: "Official road-use rules relevant to collision evidence." },
      commonSources.limitation,
    ],
    parent: { href: "/road-traffic-accident-claims-scotland", label: "Road traffic accident claims" },
  },
  "cycling-accident-claims-scotland": {
    answer:
      "A cyclist may claim where another road user, a roads authority or another responsible party negligently causes injury. Junction position, passing distance, turning movements, visibility and the precise nature of any road defect usually matter more than generic statements about who had priority.",
    distinct:
      "This guide deals specifically with vulnerable-road-user rules, bike and camera evidence, road-defect cases and common arguments about helmets and shared responsibility.",
    sections: [
      { heading: "Collision patterns worth reconstructing", bullets: ["A vehicle turns across a cyclist’s path", "Unsafe overtaking or close passing", "A door is opened into the cyclist’s route", "A driver emerges from a side road", "A pothole, cover or unsafe roadworks causes a fall"] },
      { heading: "The Highway Code hierarchy", body: "The hierarchy asks road users who can cause the greatest harm to bear the greatest responsibility to reduce danger. Rules on junctions, turning and passing may help explain the expected standard, while the full facts still determine civil liability." },
      { heading: "Preserve cycle-specific evidence", body: "Save helmet or bar-camera footage before it loops, retain the damaged bicycle and clothing, download ride-computer data, photograph sight lines from each approach and obtain a qualified damage estimate. For a road defect, record scale, depth, position, surrounding repairs and lighting without putting yourself in danger." },
      { heading: "Helmet arguments are not automatic", body: "Whether a helmet was worn does not answer who caused a collision. Any argument that protective equipment would have reduced a particular injury requires evidence and is injury-specific; it does not automatically eliminate a claim." },
      { heading: "Identify the correct defender", body: "A motor insurer may respond to a driver claim. A roads authority case requires proof about the defect and its inspection or repair system. Roadworks may engage a contractor or utility. Identifying control of the location is an early priority." },
    ],
    sources: [
      { label: "Highway Code: rules for cyclists", href: "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82", note: "Official cycling rules, positioning and junction guidance." },
      { label: "Highway Code: road users requiring extra care", href: "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225", note: "Official guidance concerning vulnerable road users." },
      commonSources.limitation,
    ],
    parent: { href: "/road-traffic-accident-claims-scotland", label: "Road traffic accident claims" },
  },
  "motorcycle-accident-claims-scotland": {
    answer:
      "Motorcycle claims require the same core proof as other road claims, but visibility, filtering, junction observation, road surface and protective equipment frequently need closer analysis. Serious injury also makes future care, earnings and rehabilitation evidence especially important.",
    distinct:
      "This guide concentrates on motorcycling evidence and arguments—not a repackaged car-accident page—including filtering, SMIDSY-type junction collisions and equipment preservation.",
    sections: [
      { heading: "Common liability disputes", bullets: ["A vehicle turns or emerges across the motorcycle", "A lane-changing driver fails to observe a filtering rider", "Unsafe overtaking or following distance", "Diesel, debris, potholes or defective roadworks", "A collision involving an uninsured or untraced driver"] },
      { heading: "Filtering is a fact-sensitive issue", body: "The mere fact that a rider was filtering does not decide fault. Speed differential, gaps, junctions, visibility, traffic signals and whether either party could reasonably anticipate the other all require evidence." },
      { heading: "Do not dispose of the evidence", body: "Retain the motorcycle, helmet, clothing and damaged equipment until inspection is considered. Save camera and telemetry files, gather independent witnesses and photograph the road from rider and driver viewpoints. A helmet should be replaced for safety when advised, but its evidential condition should first be documented." },
      { heading: "Serious-injury valuation", body: "Beyond the injury itself, a claim may require evidence about surgery, prosthetics, accommodation, transport, paid and family care, career effects and future vulnerability. Early interim payments and rehabilitation can be important where liability is admitted." },
      { heading: "Protective equipment and contribution", body: "Allegations about clothing or equipment must be tied to the injury actually sustained. They do not excuse another road user’s negligence, though properly supported contributory-negligence arguments can affect the final award." },
    ],
    sources: [
      { label: "Highway Code: motorcyclists", href: "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88", note: "Official rules on helmets, visibility, passengers and manoeuvring." },
      { label: "Highway Code: using the road", href: "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203", note: "Official rules relevant to manoeuvres, junctions and road positioning." },
      commonSources.limitation,
    ],
    parent: { href: "/road-traffic-accident-claims-scotland", label: "Road traffic accident claims" },
  },
  "asbestos-claims-scotland": {
    answer:
      "An asbestos claim may remain possible decades after exposure and even where the former employer has dissolved. The urgent work is to establish diagnosis, reconstruct exposure, trace employers and insurers, and calculate limitation from the legally relevant date of knowledge.",
    distinct:
      "This guide is built around long-latency investigation: exposure chronology, insurer tracing, medical causation and alternative statutory-payment routes.",
    sections: [
      { heading: "Conditions are not interchangeable", body: "Mesothelioma, asbestos-related lung cancer, asbestosis and pleural thickening have different medical and evidential features. HSE explains that asbestos disease can emerge long after exposure. A confirmed diagnosis and specialist respiratory evidence are central." },
      { heading: "Build an exposure history", bullets: ["Every employer, site, trade and approximate date", "Tasks that released dust and the products involved", "Co-workers who can describe conditions", "Protective measures, warnings and training", "Secondary exposure through contaminated work clothing"] },
      { heading: "A dissolved employer is not necessarily the end", body: "Historic employers’ liability insurance may respond. Company records, employment records, witness evidence and insurer-tracing databases can be used. Different defendants may be responsible for different exposure periods." },
      { heading: "Limitation needs individual analysis", body: "The three-year framework often turns on when the person knew, or should reasonably have known, that a significant injury was attributable to the act or omission complained of. Diagnosis date is important but should not be treated as an automatic answer in every case." },
      { heading: "Compensation and other schemes", body: "A civil claim can include pain, care, earnings, services and dependency losses. Certain mesothelioma sufferers may also need advice about government lump-sum schemes and benefits; eligibility and interaction with civil damages should be checked, not guessed." },
    ],
    sources: [
      { label: "HSE: why asbestos is dangerous", href: "https://www.hse.gov.uk/asbestos/dangerous.htm", note: "Official explanation of asbestos-related diseases and latency." },
      { label: "GOV.UK: diffuse mesothelioma payment", href: "https://www.gov.uk/diffuse-mesothelioma-payment", note: "Official eligibility information for the Diffuse Mesothelioma Payment Scheme." },
      commonSources.limitation,
    ],
    parent: { href: "/industrial-disease-claims-scotland", label: "Industrial disease claims" },
  },
  "fatal-accident-compensation-scotland": {
    answer:
      "A death caused by wrongful conduct can give rise to claims for the deceased’s own losses and for qualifying relatives’ losses. Scottish law distinguishes financial dependency and services from the relatives’ loss of society; the executor and relatives may have different roles.",
    distinct:
      "This guide separates the estate and relatives’ heads of loss, identifies the evidence needed for each and explains why a criminal case, Fatal Accident Inquiry and civil claim are different processes.",
    sections: [
      { heading: "Two connected but distinct parts", body: "The deceased’s claim may include losses arising before death and can be pursued by the executor. Qualifying relatives may have claims including grief and sorrow, loss of society and guidance, financial support and services, depending on the statutory relationship and facts." },
      { heading: "Evidence for dependency", bullets: ["Wages, pension, benefits and tax records", "Household spending and family finances", "Childcare, DIY, transport and caring services", "The deceased’s likely career and retirement path", "Funeral and other attributable expenses"] },
      { heading: "Who is a relative is a legal question", body: "The Damages (Scotland) Act 2011 defines the relevant categories and relationships. Do not assume that every family member has the same claim or that one relative’s settlement fixes another’s award." },
      { heading: "Other investigations do not replace the civil case", body: "Police, regulators, procurators fiscal and a Fatal Accident Inquiry may investigate different questions. A civil claim applies the civil standard of proof and may proceed on a separate timetable. Preserve documents and ask before sharing privileged material." },
      { heading: "Time and sensitivity", body: "The limitation analysis may run from death or later knowledge, depending on the claim and facts. Early advice also allows an executor to be identified, evidence preserved and family claims coordinated without forcing premature valuation of grief." },
    ],
    sources: [
      { label: "Damages (Scotland) Act 2011", href: "https://www.legislation.gov.uk/asp/2011/7/contents", note: "Primary legislation governing damages where personal injury results in death." },
      { label: "SCTS: Fatal Accident Inquiries", href: "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-and-tribunals/fatal-accident-inquiries/", note: "Official explanation of the purpose and procedure of an FAI." },
      commonSources.limitation,
    ],
    parent: { href: "/serious-injury-claims-scotland", label: "Serious injury claims" },
  },
  "birth-injury-claims-scotland": {
    answer:
      "A poor birth outcome is not by itself proof of negligence. A claim needs expert evidence that maternity or neonatal care fell below the legally required standard and that this probably caused an avoidable injury. Claims for the mother and child must be analysed separately.",
    distinct:
      "This guide explains the mother/child distinction, the clinical timeline and causation evidence, and how future care needs shape a high-value birth injury claim.",
    sections: [
      { heading: "Start with the timeline, not a label", body: "Records may include antenatal notes, CTG traces, medication charts, escalation calls, theatre timing, cord gases, neonatal imaging and follow-up. The questions are what clinicians knew, what reasonable action was required, when it should have happened, and whether the outcome would probably have differed." },
      { heading: "Potential issues that require expert review", bullets: ["Failure to recognise or respond to fetal compromise", "Delay in escalation or delivery", "Management of shoulder dystocia or maternal haemorrhage", "Infection, medication or neonatal-care failures", "Failure to advise about material risks and reasonable alternatives"] },
      { heading: "Mother and baby may have different claims", body: "The injured mother’s physical or psychiatric loss is distinct from a child’s neurological, orthopaedic or other injury. Different experts, limitation questions and future-loss schedules may be needed." },
      { heading: "Planning for a child’s lifetime needs", body: "Where disability is serious, valuation can include therapies, care, case management, education, equipment, adapted accommodation, transport, Court of Protection-equivalent Scottish arrangements, earnings and pension loss. A multidisciplinary assessment is more reliable than a single headline figure." },
      { heading: "Complaints, duty of candour and compensation", body: "A complaint or NHS review may obtain explanations and service learning, but it does not determine civil negligence or award damages. Keep correspondence and records while pursuing the route that matches the desired outcome." },
    ],
    sources: [
      { label: "NHS inform: pregnancy and birth", href: "https://www.nhsinform.scot/ready-steady-baby/", note: "Official Scottish maternity and newborn health information." },
      { label: "SCTS: clinical negligence court rules", href: "https://www.scotcourts.gov.uk/rules-and-practice/rules-of-court/sheriff-court---civil-procedure-rules/chapter-42a-clinical-negligence-actions", note: "Official rules for clinical-negligence actions in sheriff court." },
      commonSources.limitation,
    ],
    parent: { href: "/medical-negligence-claims-scotland", label: "Medical negligence claims" },
  },
  "cancer-misdiagnosis-claims-scotland": {
    answer:
      "A missed or delayed cancer diagnosis is compensable only where care was negligent and the delay probably caused a worse outcome or additional loss. The crucial comparison is between what actually happened and the likely course with competent, timely care.",
    distinct:
      "This guide focuses on counterfactual causation: referrals, pathology and imaging timelines, tumour biology, stage, treatment options and measurable consequences of delay.",
    sections: [
      { heading: "Delay is not automatically negligence", body: "Symptoms can be non-specific and screening is not perfectly accurate. The legal analysis asks whether a reasonably competent clinician should have investigated, safety-netted, referred, interpreted or communicated differently at the relevant time." },
      { heading: "The counterfactual question", body: "Even if breach is proved, an independent expert must consider what would probably have happened without it. Relevant issues can include stage migration, tumour growth, treatment intensity, prognosis, avoidable pain and psychological or financial consequences." },
      { heading: "Create a defensible chronology", bullets: ["First symptoms and consultations", "Safety-netting advice and repeat attendances", "Referral dates and urgency category", "Imaging, pathology and multidisciplinary review", "Diagnosis, staging and treatment", "The effect of delay identified by an appropriate expert"] },
      { heading: "Screening and symptomatic diagnosis differ", body: "A normal screening result does not guarantee that cancer is absent, and screening programmes target particular populations and intervals. New or persistent symptoms still require appropriate clinical consideration. A claim about image or sample interpretation may need a different expert from one about referral." },
      { heading: "Records and privacy", body: "Health information is special-category personal data. A claimant can request relevant records, but a lawful request does not mean every record should be published or sent insecurely. Share medical material through an agreed secure process." },
    ],
    sources: [
      { label: "NHS inform: screening", href: "https://www.nhsinform.scot/healthy-living/screening/", note: "Official explanation of Scottish screening programmes and their limitations." },
      { label: "NHS inform: what is cancer?", href: "https://www.nhsinform.scot/illnesses-and-conditions/cancer/what-is-cancer/", note: "Official patient information about cancer and treatment." },
      { label: "ICO: special category data", href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/", note: "Official guidance explaining the enhanced protection for health information." },
      commonSources.limitation,
    ],
    parent: { href: "/medical-negligence-claims-scotland", label: "Medical negligence claims" },
  },
  "construction-accident-claims-scotland": {
    answer:
      "A construction injury claim may involve an employer, principal contractor, subcontractor, equipment supplier, occupier or another dutyholder. Identify who controlled the work and preserve site evidence before conditions, records and personnel change.",
    distinct:
      "This guide maps the construction dutyholder and evidence problem, including work at height, contractor status, method statements and RIDDOR—rather than repeating general workplace-claim content.",
    sections: [
      { heading: "Control matters more than the badge on a hard hat", body: "Employment status is relevant but not always decisive. Ask who planned the task, controlled the site, supplied equipment, supervised the work and could correct the hazard. More than one party can be legally responsible." },
      { heading: "High-risk patterns", bullets: ["Falls from height or through fragile surfaces", "Struck-by and lifting incidents", "Plant–pedestrian collisions", "Defective, unguarded or unsuitable equipment", "Excavation, collapse, electricity and hazardous substances"] },
      { heading: "Secure the site record", body: "Preserve photographs, induction and training records, risk assessments, method statements, permits, inspection logs, toolbox talks, equipment data and witness details. Record the actual system used—not merely the paperwork created for it." },
      { heading: "RIDDOR is useful, not conclusive", body: "Certain incidents must be reported by the responsible person under RIDDOR. A report can identify timing and the dutyholder’s initial account, but reporting or non-reporting does not itself prove the civil claim." },
      { heading: "Loss and rehabilitation", body: "Construction injuries can affect physical capacity and future employability even after a return to work. Evidence should address pain, treatment, overtime, self-employed accounts, retraining, care and any long-term restriction." },
    ],
    sources: [
      { label: "HSE: construction work at height", href: "https://www.hse.gov.uk/construction/safetytopics/assess.htm", note: "Official guidance on assessing, planning and controlling work at height." },
      { label: "HSE: RIDDOR", href: "https://www.hse.gov.uk/riddor/", note: "Official incident-reporting guidance." },
      commonSources.limitation,
    ],
    parent: { href: "/accident-at-work-claims-scotland", label: "Accident at work claims" },
  },
  "offshore-injury-claims-scotland": {
    answer:
      "An offshore injury may raise Scottish employment and delict issues alongside offshore safety rules, but jurisdiction and the correct defendant depend on the installation, vessel, waters, contract and journey involved. Preserve records immediately and obtain advice before accepting a cross-border assumption.",
    distinct:
      "This guide isolates the jurisdiction, installation-versus-vessel, reporting and evidence issues that make offshore claims different from ordinary workplace accidents.",
    sections: [
      { heading: "First locate the incident legally", bullets: ["Fixed or mobile offshore installation", "Supply or support vessel", "Helicopter or transfer operation", "Port, yard or onshore base", "UK waters, another sector or international waters"] },
      { heading: "Identify every potentially responsible party", body: "The employer, installation operator, vessel owner, aviation operator, contractor, equipment supplier or another entity may control different risks. Contracts and corporate names matter; the familiar brand may not be the legal defender." },
      { heading: "Preserve offshore-specific evidence", body: "Request the incident notification, permit to work, shift and rota records, control-room or voyage data, maintenance logs, weather records, competence records, medevac notes and witness details. Avoid altering original photographs or downloads." },
      { heading: "Regulatory reporting", body: "HSE’s offshore regime includes specific reporting routes and the OMAR system. Regulatory investigation serves public safety and is not the same as a civil claim, but its records and findings may become important evidence." },
      { heading: "Time limits and governing law", body: "Do not assume the usual Scottish three-year summary answers every case. Maritime, aviation, overseas and contractual factors can introduce different forums or deadlines. Early analysis is essential." },
    ],
    sources: [
      { label: "HSE: report offshore incidents to OMAR", href: "https://www.hse.gov.uk/offshore/omar/incidents-to-omar.htm", note: "Official offshore incident-reporting information." },
      { label: "HSE: offshore health and safety", href: "https://www.hse.gov.uk/offshore/", note: "Official offshore regulatory guidance and resources." },
      commonSources.limitation,
    ],
    parent: { href: "/accident-at-work-claims-scotland", label: "Accident at work claims" },
  },
  "council-pavement-trip-claims-scotland": {
    answer:
      "A trip on a council-maintained pavement is not automatically the council’s fault. The claim must identify a dangerous defect, prove it caused the fall and address whether the roads authority’s inspection and maintenance response was reasonable.",
    distinct:
      "This guide focuses on the statutory roads duty, the inspection-system defence and the exact measurements and records needed in a pavement case.",
    sections: [
      { heading: "Prove the defect and mechanism", body: "Take close, mid-range and context photographs with a reliable scale. Record height or depth, dimensions, exact coordinates, walking direction, lighting, weather and what obstructed the view. Photograph safely and do not alter the defect." },
      { heading: "Identify who maintains the route", body: "Not every footway is adopted or council-controlled. A housing provider, private owner, shopping centre, utility or contractor may be responsible. The roads register, title information and works records can clarify control." },
      { heading: "The inspection question", body: "A roads authority is not generally an insurer of perfect pavements. The evidence may include inspection frequency, route classification, the last inspection, prior complaints, repair criteria, response times and whether the system was implemented in practice." },
      { heading: "Request records precisely", bullets: ["Inspection records covering a sensible period", "Complaints and incident reports for the location", "Repair orders and completion records", "Utility opening and reinstatement records", "The applicable inspection and intervention policy"] },
      { heading: "Causation and loss", body: "Record where each foot landed and obtain witness accounts before memory fades. Keep medical notes, damaged footwear, travel and care receipts and wage evidence. An unrelated defect near the scene should not be substituted for the one that caused the fall." },
    ],
    sources: [
      { label: "Roads (Scotland) Act 1984", href: "https://www.legislation.gov.uk/ukpga/1984/54/contents", note: "Primary legislation concerning Scottish roads authorities and road maintenance." },
      { label: "SCTS: All-Scotland Sheriff Personal Injury Court", href: "https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/", note: "Official court information for personal injury procedure." },
      commonSources.limitation,
    ],
    parent: { href: "/public-place-accident-claims-scotland", label: "Public place accident claims" },
  },
  "no-win-no-fee-scotland-explained": {
    answer:
      "In Scotland, ‘no win, no fee’ usually describes a success fee agreement: payment to the provider depends on obtaining a financial benefit. It does not mean every possible cost is automatically zero. The written agreement should explain the success fee, outlays, adverse expenses, insurance, cancellation and termination before you sign.",
    distinct:
      "This is a buyer’s checklist for comparing funding agreements. It separates the success fee from outlays and court expenses and flags the questions marketing slogans omit.",
    sections: [
      { heading: "Ask for the worked example", body: "Request a pounds-and-pence illustration using an assumed damages award. It should show the success fee, VAT treatment, recoverable expenses, unrecovered outlays, insurance premium and the estimated net amount to the client." },
      { heading: "Seven questions before signing", bullets: ["Who is the contracting provider?", "How is the success fee calculated and capped?", "Which heads of damages can the deduction affect?", "Who funds expert reports and court outlays?", "What happens if the case loses?", "What happens if you reject advice or end the agreement?", "Is expenses insurance used and when is its premium payable?"] },
      { heading: "Qualified one-way costs shifting is not a blank cheque", body: "Scottish personal injury proceedings have statutory protection limiting when expenses may be awarded against a pursuer, subject to exceptions. It does not remove every financial or contractual risk. The provider should explain the exceptions and any insurance in plain language." },
      { heading: "Alternatives may be better", body: "Check trade-union membership, household or motor legal-expenses insurance, legal aid eligibility and private funding. Compare control, deductions, cover and provider choice—not only the headline phrase." },
      { heading: "Service and complaints", body: "Keep the signed agreement and all variations. Raise a service concern with the provider first. The Scottish Legal Complaints Commission is the single gateway for complaints about Scottish lawyers and normally expects the lawyer or firm to have had an opportunity to respond." },
    ],
    sources: [
      { label: "Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018", href: "https://www.legislation.gov.uk/asp/2018/10/contents", note: "Primary legislation on success fee agreements and expenses in civil litigation." },
      { label: "SLCC: start a complaint", href: "https://www.scottishlegalcomplaints.org.uk/your-complaint/start-your-complaint/", note: "Official information on complaints about lawyers in Scotland." },
      commonSources.court,
    ],
    parent: { href: "/how-to-claim-compensation-scotland", label: "How the claims process works" },
  },

  "noise-induced-hearing-loss-claims-scotland": {
    answer:
      "Noise-induced hearing loss (NIHL) from workplace exposure is a compensable occupational disease in Scotland. The three-year limitation period runs from the date of knowledge — ordinarily when an audiologist or doctor first tells you that your hearing loss is work-related — not from the date of exposure. Claims can often be made against former employers no longer trading via their historic liability insurers.",
    distinct:
      "This guide focuses on date-of-knowledge limitation, the difference between NIHL and age-related loss, audiological evidence and routes to trace historic insurers. It does not repeat the general industrial-disease framework.",
    sections: [
      { heading: "How noise damages hearing", body: "Repeated or intense noise causes irreversible damage to the hair cells of the cochlea. Damage accumulates over time and may first become apparent as difficulty following conversation in background noise, tinnitus or a muffled quality to sound. Because the change is gradual, many people do not identify a cause or seek assessment until years after the exposure has ended." },
      { heading: "The date of knowledge and limitation", body: "Under the Prescription and Limitation (Scotland) Act 1973, the three years run from the date the pursuer knew — or ought reasonably to have known — that the condition was significant, work-related and attributable to an identifiable employer. A formal audiological diagnosis linking the loss to occupational noise is usually the starting point. An audiogram alone is not enough if it does not identify a cause." },
      { heading: "Distinguishing occupational NIHL from age-related loss", body: "Age-related hearing loss (presbycusis) causes a similar high-frequency pattern. Expert audiology evidence must distinguish the noise-induced component from the background age-related decline. Employers will often argue the entire loss is presbycusis. A specialist audiologist or ENT expert is usually required to give an opinion on the likely noise-induced element." },
      { heading: "Evidence to support a claim", bullets: ["Employment history identifying where and when exposure occurred", "Records of noise levels, complaints, risk assessments or ear protection provision", "Witness statements from former colleagues", "Audiograms and specialist medical opinion on causation", "NIHL disability assessment for quantum purposes"] },
      { heading: "Tracing former employers and insurers", body: "Many NIHL claims involve employers that have ceased trading. Employers were legally required to hold employers' liability insurance. The Employers' Liability Tracing Office (ELTO) database and Companies House records can help identify historic insurers. A solicitor experienced in occupational disease claims will manage this process." },
      { heading: "Industrial Injuries Disablement Benefit", body: "NIHL caused by workplace noise is a prescribed industrial disease (A10). Industrial Injuries Disablement Benefit may be available through DWP alongside a civil claim, subject to the level of assessed disablement. A civil claim and a IIDB award are separate processes." },
    ],
    sources: [
      { label: "HSE: noise-induced hearing loss", href: "https://www.hse.gov.uk/noise/", note: "Official occupational health guidance on NIHL causes, prevention and assessment." },
      { label: "Employers' Liability Tracing Office (ELTO)", href: "https://www.elto.org.uk/", note: "Database for tracing employers' liability insurers for historic employers." },
      { label: "Industrial Injuries Disablement Benefit — GOV.UK", href: "https://www.gov.uk/industrial-injuries-disablement-benefit", note: "State benefit available alongside a civil claim for certain prescribed diseases including NIHL." },
      commonSources.limitation,
    ],
    parent: { href: "/industrial-disease-claims-scotland", label: "Industrial disease claims Scotland" },
  },

  "gp-negligence-claims-scotland": {
    answer:
      "A claim against a GP in Scotland requires proof that the doctor's conduct fell below the standard of a reasonably competent GP, and that the departure from that standard caused avoidable harm. The most common bases are failure to diagnose, delayed referral, prescribing errors and failure to follow up abnormal results. Independent GP expert evidence is essential in every case.",
    distinct:
      "This guide examines the GP-specific standard of care, the common failure patterns, causation difficulties in delayed-diagnosis cases and who is likely to defend a GP claim. It assumes familiarity with the general medical negligence framework.",
    sections: [
      { heading: "The standard of care for a GP", body: "The Scottish test derives from Hunter v Hanley (1955 SC 200): whether the GP failed to exercise the ordinary skill of a competent GP exercising that particular branch of practice. A GP is not required to achieve the standard of a specialist, but must recognise when to refer. The test is not whether another doctor would have acted differently — it is whether the course taken was one no competent GP would have adopted." },
      { heading: "Common failure patterns", bullets: ["Failure to diagnose — not identifying a condition that was or should have been apparent from the history and examination", "Delayed diagnosis — identifying the condition but at a point where earlier action would have made a material difference", "Delayed or absent referral — failing to refer to a specialist or secondary care in time", "Prescribing errors — wrong drug, dose, interaction or monitoring failure", "Failure to follow up abnormal test results — abnormal bloods, imaging or investigation not acted upon"] },
      { heading: "Causation in delayed-diagnosis cases", body: "Even where a failure of care is established, the pursuer must prove that the GP's failure caused or materially contributed to the harm suffered. In delayed-diagnosis cases this requires evidence of what would have happened had the correct diagnosis been made at the earlier date — the stage of disease, treatment available, and the difference in prognosis. This is usually the hardest element to prove and requires specialist expert evidence." },
      { heading: "Who defends a GP claim", body: "Most GPs in Scotland work as independent contractors, so a claim is often defended by the GP's or practice's medical indemnifier rather than by an NHS board. Where the care was provided by NHS board staff, the Central Legal Office (CLO), which acts for NHS Scotland boards, may be involved. Identifying the correct defender is an early task, and a request for the medical records is the normal starting point." },
      { heading: "Medical records and evidence", bullets: ["Full GP records including electronic clinical notes", "Out-of-hours and NHS 24 records", "Hospital and specialist records for comparison", "Any relevant laboratory, radiology or investigation results", "Independent expert GP and specialist opinion on breach and causation"] },
    ],
    sources: [
      { label: "NHS Scotland Central Legal Office", href: "https://www.clo.scot.nhs.uk/", note: "Acts for NHS Scotland health boards; relevant where the care was delivered by board staff." },
      { label: "General Medical Council — duties of a doctor", href: "https://www.gmc-uk.org/professional-standards/professional-standards-for-doctors/good-medical-practice", note: "Professional standards framework relevant to assessing GP conduct." },
      commonSources.limitation,
    ],
    parent: { href: "/medical-negligence-claims-scotland", label: "Medical negligence claims Scotland" },
  },

  "serious-injury-rehabilitation-scotland": {
    answer:
      "In serious injury claims, early rehabilitation can significantly improve long-term outcomes. The Rehabilitation Code provides a framework for early intervention funded by the defendant's insurer. In Scotland, interim payments can be obtained in cases where liability is not seriously disputed, providing funds for private treatment, care and equipment before the claim is resolved.",
    distinct:
      "This guide focuses on rehabilitation access, the Rehabilitation Code, interim payments under Scots law, case management and the expert disciplines involved. It supplements the general serious injury page.",
    sections: [
      { heading: "Why rehabilitation matters in serious injury claims", body: "The earlier appropriate rehabilitation begins, the greater the potential for recovery and reduction of long-term disability. Rehabilitation should not be delayed until the claim is resolved. The cost of rehabilitation is recoverable as a head of loss, and early investment often reduces the overall claim cost by improving the claimant's condition before final assessment." },
      { heading: "The Rehabilitation Code", body: "The Rehabilitation Code (2015) is a voluntary agreement between claimant and defendant solicitor groups. It applies where the defendant admits or is likely to admit liability for a serious injury. Under it, the defendant's insurer should fund or facilitate appropriate rehabilitation while the claim proceeds. Your solicitor will write to the other side's insurer at an early stage to invoke the Code." },
      { heading: "Interim payments in Scotland", body: "Under Scots law, the court can in appropriate cases order an interim payment, typically where liability is admitted or the pursuer is likely to succeed and the defender is insured or a public body. An interim payment provides funds on account of the final award. It can be used to fund treatment, care, adapted accommodation, specialist equipment or any other need that cannot wait for the final resolution of the claim." },
      { heading: "Expert disciplines typically required", bullets: ["Neurologist or neurosurgeon — for brain or spinal injury", "Rehabilitation medicine consultant", "Neuropsychologist — cognitive and psychological effects", "Occupational therapist — care needs, home adaptations, aids and equipment", "Employment consultant — earning capacity and vocational rehabilitation", "Care expert — past and future care and case management costs", "Accommodation expert — housing requirements and adaptation costs"] },
      { heading: "Case management", body: "A specialist case manager (usually a nurse or allied health professional with experience in serious injury) coordinates the medical, therapeutic, social and legal aspects of the rehabilitation programme. They identify the rehabilitation team, monitor progress and ensure the client's needs are met throughout the claim. The cost of case management is recoverable as a loss." },
      { heading: "Provisional damages", body: "Where there is a recognised risk that the claimant's condition will deteriorate in future, Scots law may allow a provisional award with the right to return to court for more if a specified deterioration occurs. Whether this is available and suitable depends on the medical evidence and the case, so it should be raised with a solicitor early." },
    ],
    sources: [
      { label: "Rehabilitation Code 2015 — Insurance and claims industry code", href: "https://www.iua.co.uk/IUA_Member/Publications/Rehabilitation_Code.aspx", note: "The voluntary code governing rehabilitation access in serious injury claims." },
      { label: "Scottish Courts — Court of Session for serious injury claims", href: "https://www.scotcourts.gov.uk/courts-and-tribunals/the-supreme-courts/the-court-of-session/", note: "The Court of Session handles high-value and complex serious injury actions in Scotland." },
    ],
    parent: { href: "/serious-injury-claims-scotland", label: "Serious injury claims Scotland" },
  },

  "slip-trip-fall-claims-scotland": {
    answer:
      "A slip, trip or fall claim in Scotland requires proof that the occupier or responsible party failed to take reasonable care of the pursuer's safety, and that the failure caused injury. The governing statute for premises is the Occupiers' Liability (Scotland) Act 1960. The standard of care owed depends on whether the danger was known or foreseeable, what inspection or maintenance systems were in place, and what the occupier actually did.",
    distinct:
      "This guide focuses on the 1960 Act duty, the role of inspection systems, contributory negligence, the evidence needed for slips and trips respectively, and the common defences. It supplements the general public place accident page.",
    sections: [
      { heading: "The Occupiers' Liability (Scotland) Act 1960", body: "Under the 1960 Act, an occupier must show such care as is reasonable in all the circumstances to see that a person will not suffer injury by reason of any danger due to the state of the premises or anything done or omitted to be done on them. The duty applies to lawful visitors. It is a duty to take reasonable care — not a duty to guarantee safety. The pursuer must show the occupier failed that standard." },
      { heading: "Slip claims: the hazard and the system", body: "Most slip claims arise from wet or contaminated floors. The pursuer must show the floor was in a dangerous condition and that the occupier knew or should have known of the hazard in time to deal with it. Courts will examine: how long the hazard existed, whether regular inspections were carried out, whether cleaning schedules were followed, whether warning signs were placed, and whether the surface itself was appropriate for the foreseeable use." },
      { heading: "Trip claims: the defect and the duty to maintain", body: "Trip claims typically involve physical defects — uneven, broken, raised or damaged surfaces. On private premises the occupier must maintain the premises to a safe standard. On public roads and pavements, the Roads (Scotland) Act 1984 places a duty on the roads authority to manage and maintain them. The Act also gives the authority a defence if it proves that it took such care as was reasonable to secure that the road was not dangerous, so inspection and repair records are usually central." },
      { heading: "Common defences", bullets: ["The hazard was temporary and arose shortly before the accident — the occupier could not reasonably have known of it", "Regular inspections were carried out and the defect was not detectable in the period before the accident", "Warning signs were adequately placed and visible", "Contributory negligence — the pursuer was not taking reasonable care for their own safety", "The defect was too minor (de minimis) to give rise to liability"] },
      { heading: "Evidence to gather", bullets: ["Photographs of the hazard taken as soon as safely possible — before any repair", "A precise description of the location, time and circumstances", "Witness details from anyone who saw the hazard or the accident", "Accident book entry or incident report — ask for a copy immediately", "CCTV preservation request — sent promptly, before footage is overwritten", "Medical attention records from the date of the accident"] },
      { heading: "Contributory negligence", body: "A pursuer's compensation may be reduced if they were partly responsible for their own fall — for example by not looking where they were walking, wearing inappropriate footwear or ignoring a warning sign. Contributory negligence reduces but does not necessarily defeat a claim. The court apportions responsibility between the parties." },
    ],
    sources: [
      { label: "Occupiers' Liability (Scotland) Act 1960", href: "https://www.legislation.gov.uk/ukpga/1960/30/contents", note: "The primary statute governing the duty of care owed by occupiers in Scotland." },
      { label: "Roads (Scotland) Act 1984 — local authority road and footway maintenance duties", href: "https://www.legislation.gov.uk/ukpga/1984/54/contents", note: "Sets the roads authority's maintenance duty and the reasonable-care defence." },
      commonSources.limitation,
    ],
    parent: { href: "/public-place-accident-claims-scotland", label: "Public place accident claims Scotland" },
  },

  "supermarket-accident-claims-scotland": {
    answer:
      "Supermarkets and retailers owe customers a duty under the Occupiers' Liability (Scotland) Act 1960 to take reasonable care to prevent injury. The most common incidents are wet floor slips, spillages, falling goods and trolley or racking hazards. A successful claim usually requires evidence that the hazard was known or should have been found by a reasonable inspection and cleaning system — and was not dealt with in time.",
    distinct:
      "This guide focuses on the specific evidence patterns for supermarket and retail premises claims, the role of inspection records and CCTV, and what common defences retailers raise. It supplements the general slip, trip and fall guide.",
    sections: [
      { heading: "The occupier's duty in a retail context", body: "Retailers know their premises carry higher-than-average slip and spill risks from customer activity, restocking and cleaning. A court will assess whether the retailer's inspection and cleaning regime was proportionate to that risk. A general policy of cleaning hourly may be inadequate if high-risk areas such as the fresh produce or chilled section are not inspected more frequently." },
      { heading: "Wet floor and spillage evidence", body: "Key questions are: how did the spillage arise (customer, restocking, condensation, leak), how long was it there, and when was the area last inspected. Inspection records, cleaning schedules and the incident log all become important. If CCTV covers the area, it may show when the hazard appeared. A preservation request should be made to the store as soon as possible — retail CCTV is often overwritten within days." },
      { heading: "Falling goods and racking hazards", body: "Goods must be stacked safely and racking maintained in good condition. Overstacking, poor racking, protruding packaging or inadequate weight distribution can all give rise to a claim. Evidence of inadequate stock replenishment training or racking inspection is relevant." },
      { heading: "What the retailer's inspection records show", body: "Retailers commonly keep inspection and cleaning logs. These logs often become central to the case — a log showing no inspection for several hours before the accident, or a gap that is unexplained, can establish that the hazard had been present longer than the retailer claims and that reasonable inspection would have found it. The absence of a log entry for the relevant period can be equally significant." },
      { heading: "Common retailer defences", bullets: ["The hazard arose seconds or minutes before the accident and could not reasonably have been found sooner", "Inspections were carried out at appropriate intervals and the hazard was not present at the last inspection", "Warning cones or wet floor signs were in place and were visible", "The customer was not looking where they were walking or was distracted", "The customer was wearing footwear unsuitable for ordinary retail premises"] },
      { heading: "Evidence to preserve immediately", bullets: ["Photographs of the hazard — including the floor surface, any signage and the wider area — taken before leaving the store if safe", "An accident report made at the store — keep your copy", "Witness names and contact details", "Medical attention records from the date of the accident", "Clothing and footwear (do not wash or discard)", "CCTV preservation request to the store manager in writing"] },
    ],
    sources: [
      { label: "Occupiers' Liability (Scotland) Act 1960", href: "https://www.legislation.gov.uk/ukpga/1960/30/contents", note: "The statutory duty owed by occupiers — including retailers — to their visitors." },
      { label: "HSE: slips and trips", href: "https://www.hse.gov.uk/slips/", note: "HSE guidance on preventing slips and trips in workplaces, including retail, relevant to assessing reasonable care." },
      commonSources.limitation,
    ],
    parent: { href: "/public-place-accident-claims-scotland", label: "Public place accident claims Scotland" },
  },

  "vibration-white-finger-claims-scotland": {
    answer:
      "Vibration white finger (VWF), also known as hand-arm vibration syndrome (HAVS), is an occupational disease caused by prolonged use of vibrating tools. A claim in Scotland requires proof that the employer knew or should have known of the risk, failed to take reasonable steps to prevent or reduce exposure, and that the failure caused the condition. The three-year limitation period runs from the date of knowledge — usually when a doctor links symptoms to occupational vibration.",
    distinct:
      "This guide focuses on the HAVS staging system, employer duties under the Control of Vibration at Work Regulations, date-of-knowledge limitation, and the medical evidence required. It supplements the industrial disease overview.",
    sections: [
      { heading: "What is vibration white finger / HAVS?", body: "Hand-arm vibration syndrome is a disorder of the blood vessels, nerves, muscles and joints of the hand, wrist and arm caused by regular use of hand-held vibrating tools. Classic symptoms include episodic whitening (blanching) of the fingers on cold exposure, numbness and tingling, reduced grip strength and pain. The vascular, neurological and musculoskeletal components are each separately assessed and staged under the Stockholm Workshop Scale." },
      { heading: "Employer duties under the Vibration Regulations", body: "The Control of Vibration at Work Regulations 2005 require employers to assess vibration exposure, reduce exposure at source, provide health surveillance for at-risk workers, and take action when exposure levels are exceeded. For exposure since 2005, a failure to do so may breach the Regulations as well as the common-law duty of care. For earlier exposure, the claim rests on the common-law duty and what the employer knew or ought to have known at the time." },
      { heading: "The Stockholm Workshop Scale", body: "HAVS is staged separately for vascular symptoms (stages 0V to 4V) and neurological (sensorineural) symptoms (stages 0SN to 3SN). The staging matters for both diagnosis and quantum. Medical expert evidence from a specialist — usually an occupational physician or rheumatologist — is required to assess and stage the condition." },
      { heading: "Date of knowledge in HAVS claims", body: "Symptoms of VWF often develop gradually and workers may not associate them with work for years. The three-year period runs from when the claimant knew or ought to have known the condition was significant and work-related. A diagnosis by an occupational health physician, GP or specialist linking the symptoms to vibration exposure is usually the anchor for date of knowledge." },
      { heading: "Common employer defences and how to counter them", bullets: ["The claimant's exposure was below the action value — occupational hygiene expert evidence on actual exposure levels is often required", "The symptoms are not HAVS but Raynaud's disease or another condition — specialist medical evidence distinguishes these", "The exposure was after the tools were compliant — employment history and equipment records are important", "The claim is out of time — date-of-knowledge analysis is key; medical records showing when symptoms were first linked to work are critical"] },
      { heading: "Evidence to support a HAVS claim", bullets: ["Employment history and the specific tools and tasks involved", "Estimated vibration exposure levels from tool specifications or occupational hygiene assessment", "Health surveillance records from the employer", "Witness statements from former colleagues", "Medical records and specialist staging report (Stockholm Scale)", "Industrial Injuries Disablement Benefit (A11 — HAVS) assessment where applicable"] },
    ],
    sources: [
      { label: "HSE: hand-arm vibration guidance", href: "https://www.hse.gov.uk/vibration/hav/index.htm", note: "HSE's authoritative guide to HAV risks, legal duties, assessment and health surveillance." },
      { label: "Control of Vibration at Work Regulations 2005", href: "https://www.legislation.gov.uk/uksi/2005/1093/contents", note: "The Regulations setting employer duties for vibration exposure assessment and control." },
      { label: "Industrial Injuries Disablement Benefit — GOV.UK", href: "https://www.gov.uk/industrial-injuries-disablement-benefit", note: "HAVS (A11) is a prescribed disease; IIDB may be claimed alongside a civil claim." },
      commonSources.limitation,
    ],
    parent: { href: "/industrial-disease-claims-scotland", label: "Industrial disease claims Scotland" },
  },

  "care-home-negligence-claims-scotland": {
    answer:
      "Care homes in Scotland owe residents a duty of care under both common law and the Care Inspectorate regulatory regime. Claims typically arise from pressure sores, unexplained falls, poor nutrition and hydration, medication errors and inadequate supervision of residents with dementia. A claim requires evidence that care fell below the standard of a reasonably competent care provider and that the failure caused avoidable harm.",
    distinct:
      "This guide covers the Care Inspectorate framework, the common failure patterns in care homes, access to records, and the role of expert nursing and care evidence. It supplements the medical negligence overview.",
    sections: [
      { heading: "The regulatory framework for Scottish care homes", body: "Care homes in Scotland are regulated and inspected by the Care Inspectorate under the Public Services Reform (Scotland) Act 2010. The Health and Social Care Standards, which replaced the National Care Standards in 2018, set out what good care looks like. Care Inspectorate inspection reports, improvement notices and enforcement actions are publicly available and can provide important context for the standard of care at a particular time and in a particular home." },
      { heading: "Common failure patterns", bullets: ["Pressure sores — failure to carry out adequate pressure risk assessment, reposition regularly, use appropriate equipment and respond to early skin changes", "Unexplained falls — inadequate falls risk assessment, absence of bed rails or sensor mats, failure to supervise mobile residents with dementia", "Malnutrition and dehydration — failure to record food and fluid intake, assess nutritional risk (MUST tool) and act on concerns", "Medication errors — wrong drug, wrong dose, omitted doses or failure to obtain consent", "Failure to call for emergency medical help promptly when a resident's condition deteriorates"] },
      { heading: "Accessing records", body: "A formal Subject Access Request under the UK GDPR can be used to obtain a living resident's care home records (a different route applies for records of someone who has died) — daily care notes, pressure risk assessments, falls logs, medication administration records, nutrition charts and incident reports. These often reveal the gap between the care plan and the care actually delivered. Hospital records will also be important where harm led to a hospital admission." },
      { heading: "Fatal care home cases", body: "Where a resident has died, a fatal accident claim may be available to immediate family under the Damages (Scotland) Act 2011. In appropriate cases, the Procurator Fiscal may investigate the death and a Fatal Accident Inquiry (FAI) may be held under the Inquiries into Fatal Accidents and Sudden Deaths etc. (Scotland) Act 2016. FAI findings can be relevant evidence in a subsequent civil claim, though the two processes are entirely separate." },
      { heading: "Expert evidence required", bullets: ["Care expert (registered nurse or senior care professional) — assessing the standard of care delivered against the care plan and national standards", "Medical expert — causation between the care failure and the harm suffered", "In fatal cases: pathology evidence on cause of death and the contribution of any care failure"] },
    ],
    sources: [
      { label: "Care Inspectorate — Scottish care home regulator", href: "https://www.careinspectorate.com/", note: "Publishes inspection reports, ratings and enforcement information for registered care homes." },
      { label: "Health and Social Care Standards (Scotland, 2017)", href: "https://www.gov.scot/publications/health-social-care-standards-support-life/", note: "The national standards by which care services in Scotland should be assessed." },
      { label: "Damages (Scotland) Act 2011 — fatal accident claims", href: "https://www.legislation.gov.uk/asp/2011/7/contents", note: "Governs fatal accident claims by family members where a death results from negligence." },
      commonSources.limitation,
    ],
    parent: { href: "/medical-negligence-claims-scotland", label: "Medical negligence claims Scotland" },
  },

  "prescription-error-claims-scotland": {
    answer:
      "Prescription and medication errors can cause serious harm and may give rise to a medical negligence claim in Scotland. Errors can occur at prescribing, dispensing or monitoring stage. A successful claim requires proof that the error fell below the standard of a reasonably competent practitioner and caused avoidable harm — not just that the error occurred.",
    distinct:
      "This guide distinguishes prescribing errors (by the doctor) from dispensing errors (by the pharmacist) and monitoring failures, explains causation in medication cases, and outlines the evidence required. It assumes familiarity with the general medical negligence framework.",
    sections: [
      { heading: "Types of prescription and medication error", bullets: ["Wrong drug — prescribing or dispensing a drug not indicated for the patient's condition or contraindicated by other medication", "Wrong dose — too high or too low, or failure to adjust for renal, hepatic or age-related factors", "Wrong patient — dispensing medication intended for a different patient", "Drug interaction — failing to identify a dangerous interaction with existing medication", "Failure to monitor — prescribing a drug that requires regular blood monitoring without doing so", "Failure to obtain informed consent — not warning the patient of material risks of the medication"] },
      { heading: "Who can be liable?", body: "The prescriber (GP, hospital doctor, specialist nurse or other prescriber) and the dispenser (pharmacist or pharmacy technician) may each have separate duties of care. A pharmacist has an independent professional obligation to check prescriptions for apparent errors and to query doses that appear unsafe. If both make separate errors, both may be liable." },
      { heading: "Causation: the hardest element", body: "Even where an error is established, the pursuer must prove that the error caused harm that would not otherwise have occurred. In over-prescribing cases, the question is what harm the excessive dose caused compared to the appropriate dose. In failure-to-prescribe cases, the question is whether the correct treatment would have prevented the harm. Medical expert evidence on the pharmacological effect of the error is essential." },
      { heading: "Monitoring failures", body: "Some drugs — including anticoagulants (warfarin, heparin), lithium, methotrexate, anti-epileptics and certain antibiotics — require regular blood monitoring to ensure they remain within the therapeutic range. Failure to arrange or act on monitoring results is a recognised category of prescribing negligence. Records of monitoring (or its absence) are critical evidence." },
      { heading: "Evidence to obtain", bullets: ["Full GP records including repeat prescription records and medication review notes", "Hospital and specialist prescribing records", "Pharmacy dispensing records and patient medication record", "Laboratory and monitoring results", "Independent expert evidence from a relevant specialist and/or pharmacologist"] },
    ],
    sources: [
      { label: "General Medical Council: Good medical practice", href: "https://www.gmc-uk.org/professional-standards/professional-standards-for-doctors/good-medical-practice", note: "Professional standards relevant to prescribing decisions and patient safety." },
      { label: "General Pharmaceutical Council — standards for pharmacy professionals", href: "https://www.pharmacyregulation.org/standards/standards-for-pharmacy-professionals", note: "Regulatory standards governing pharmacist and pharmacy technician conduct." },
      commonSources.limitation,
    ],
    parent: { href: "/medical-negligence-claims-scotland", label: "Medical negligence claims Scotland" },
  },
};

function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">{guide.answer}</p>
      </div>

      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <h2 className="mt-0 text-lg">What this guide adds</h2>
        <p className="mb-0">{guide.distinct}</p>
      </div>

      {guide.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body && <p>{section.body}</p>}
          {section.bullets && (
            <ul>
              {section.bullets.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </section>
      ))}

      <h2>Authoritative sources</h2>
      <p>
        These primary sources support and contextualise this guide. They are not a substitute for advice on
        the facts of an individual case.
      </p>
      <ul>
        {guide.sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-red-700 font-medium hover:underline">
              {source.label}
            </a>
            {" — "}{source.note}
          </li>
        ))}
      </ul>

      <h2>Next useful steps</h2>
      <p>
        Read the <Link href={guide.parent.href} className="text-red-700 font-medium hover:underline">{guide.parent.label}</Link>,
        {" "}<Link href="/guides/evidence-for-personal-injury-claim-scotland" className="text-red-700 font-medium hover:underline">build an evidence checklist</Link>,
        and <Link href="/guides/personal-injury-claim-time-limit-scotland" className="text-red-700 font-medium hover:underline">check the Scottish time-limit guide</Link>.
      </p>
      <p className="text-sm text-gray-600">
        General information only. The applicable law, forum and deadline depend on the facts. Medical symptoms
        should be assessed by an appropriate healthcare professional.
      </p>
    </>
  );
}

export const extendedGuideArticles: Record<string, ReactNode> = Object.fromEntries(
  Object.entries(guideData).map(([slug, guide]) => [slug, <GuideArticle key={slug} guide={guide} />]),
);
