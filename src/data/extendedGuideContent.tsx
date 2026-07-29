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
