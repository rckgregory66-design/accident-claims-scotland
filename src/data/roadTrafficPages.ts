export interface RoadSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RoadTrafficPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  answer: string;
  keyPoints: string[];
  sections: RoadSection[];
  sources: { label: string; href: string; note: string }[];
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
}

const limitation = {
  label: "Prescription and Limitation (Scotland) Act 1973",
  href: "https://www.legislation.gov.uk/ukpga/1973/52/contents",
  note: "The statutory limitation framework for Scottish personal injury actions.",
};
const highwayCode = {
  label: "The Highway Code",
  href: "https://www.gov.uk/guidance/the-highway-code",
  note: "Official road-use rules and guidance relevant to standards of driving and road-user conduct.",
};
const mib = {
  label: "Motor Insurers’ Bureau: making a claim",
  href: "https://www.mib.org.uk/making-a-claim/",
  note: "Official information about claims involving uninsured or untraced drivers.",
};

export const roadTrafficPages: RoadTrafficPage[] = [
  {
    slug: "car-accident-claims-scotland",
    title: "Car Accident Claims in Scotland",
    description: "A detailed Scottish guide to car accident liability, evidence, insurance, injuries, financial losses and the claims process.",
    category: "Car accidents",
    answer: "A car-accident claim in Scotland normally requires evidence that another person failed to take reasonable care, that this caused injury, and that the resulting losses can be proved. Preserve scene, vehicle, witness, insurer and medical evidence before accepting any settlement.",
    keyPoints: ["Fault is decided from evidence, not simply where the vehicles finished.", "Passengers, drivers and other road users may all have separate claims.", "An admission at the scene is useful but not necessarily conclusive.", "Injury and vehicle-loss evidence should be recorded separately.", "Court proceedings normally need to be raised within the applicable limitation period."],
    sections: [
      { heading: "How car-collision liability is reconstructed", paragraphs: ["Relevant evidence includes road layout, direction of travel, signals, speed, visibility, braking, vehicle damage and what each person could reasonably have seen. Police conclusions, dashcam, CCTV and independent witnesses can be important, but no single item automatically decides every civil claim."], bullets: ["Rear-end and sudden-braking collisions", "Junction and turning disputes", "Lane changes and merging traffic", "Roundabout positioning", "Motorway and multi-vehicle collisions"] },
      { heading: "What to preserve immediately", paragraphs: ["Save original dashcam files before they overwrite, photograph every vehicle and the wider road layout, obtain witness details and keep insurer correspondence. Record symptoms accurately and seek appropriate medical assessment. Do not repair or dispose of important physical evidence before its condition is documented."], bullets: ["Vehicle registrations and insurance details", "Exact time and location", "Weather, lighting and road condition", "Recovery, storage and repair documents", "Medical attendance and medication"] },
      { heading: "Injury losses and vehicle losses", paragraphs: ["The personal-injury element can include pain, earnings, care, treatment and future needs. The vehicle element can involve repair value, total loss, excess, recovery, storage, loss of use or replacement transport. Different legal and evidential issues can apply, so an offer resolving one should not be assumed to resolve everything."] },
      { heading: "Insurer contact and early offers", paragraphs: ["An insurer may contact an injured person quickly. Give accurate information, but understand whether an offer is provisional, property-only or intended as full and final settlement. An injury should not be valued before its prognosis and financial consequences can be assessed reliably."] },
    ],
    sources: [highwayCode, limitation, { label: "GOV.UK: vehicle insurance after an accident", href: "https://www.gov.uk/vehicle-insurance/if-youre-in-an-accident", note: "Official information on exchanging details, reporting and insurance." }],
    related: [{ label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Whiplash claims", href: "/guides/whiplash-claims-scotland" }, { label: "Evidence checklist", href: "/guides/evidence-for-personal-injury-claim-scotland" }],
    faqs: [
      { question: "How long do I have to make a car accident claim in Scotland?", answer: "In Scotland the general time limit is three years from the date of the accident. If you did not know at the time that you had suffered a significant injury, the three years may run from the date you gained that knowledge. Missing the deadline can bar your claim entirely, so seek advice promptly." },
      { question: "Can I claim if the accident was partly my fault?", answer: "Yes. Scotland applies contributory negligence, which means your compensation may be reduced to reflect your share of responsibility, but a claim is not automatically defeated. Courts assess each party's contribution based on evidence, so a partial fault argument is no reason to avoid getting advice." },
      { question: "What should I do at the scene of a car accident in Scotland?", answer: "Exchange names, addresses and insurance details with every driver involved. Photograph vehicles, road markings, damage, weather conditions and any visible injuries. Note the time, location and any witnesses, and preserve dashcam footage before it overwrites. Report to police if required by law or recommended by your insurer." },
      { question: "Do I have to go to court for a car accident claim?", answer: "Most car accident claims in Scotland settle without a court hearing. Proceedings may be raised to protect limitation periods even where negotiation continues, and a hearing becomes more likely if liability or the value of losses is seriously disputed. Your adviser will explain when raising proceedings becomes necessary." },
      { question: "Can a passenger in the at-fault car make a claim?", answer: "Yes. An innocent passenger can normally claim against whichever driver or drivers caused the collision, including the driver of the vehicle they were in. The insurer of the at-fault vehicle usually responds rather than the driver personally." },
      { question: "How is compensation calculated after a car accident in Scotland?", answer: "Compensation covers general damages for pain, suffering and loss of amenity, and special damages for financial losses such as earnings, treatment costs, care and vehicle repair or replacement. The Judicial College Guidelines and Scots court awards are reference points, but the value of your specific claim depends on the medical evidence and your provable losses." },
      { question: "What if the other driver disputes liability?", answer: "A liability dispute means you will need to build a case from dashcam footage, witness statements, police reports, accident reconstruction and photographic evidence. Your adviser can gather and present this. The claim may still succeed even without an admission from the other driver." },
    ],
  },
  {
    slug: "pedestrian-accident-claims-scotland",
    title: "Pedestrian Accident Claims in Scotland",
    description: "Scottish pedestrian collision claims: crossings, junctions, reversing vehicles, vulnerable-road-user duties, evidence and contributory negligence.",
    category: "Pedestrian accidents",
    answer: "A pedestrian may claim where a driver, rider, roads authority or another responsible party negligently causes injury. Crossing away from a formal crossing or being partly responsible does not automatically defeat a claim; visibility, speed, lookout and opportunity to avoid the collision require careful reconstruction.",
    keyPoints: ["Pedestrians are vulnerable road users under the Highway Code hierarchy.", "The driver’s lookout and speed remain important even where crossing conduct is disputed.", "CCTV must often be preserved quickly.", "Children require an age-sensitive assessment of responsibility.", "Serious injuries need early care and future-loss evidence."],
    sections: [
      { heading: "Common pedestrian collision patterns", paragraphs: ["Claims frequently arise at zebra and signal-controlled crossings, side-road junctions, car parks, bus stops and when vehicles reverse. The correct analysis considers what each road user could see and how much time was available to react."], bullets: ["Turning across a pedestrian’s path", "Failure to stop at a crossing", "Reversing from a bay or driveway", "Excessive speed for visibility", "Vehicles mounting a footway"] },
      { heading: "Evidence from the pedestrian viewpoint", paragraphs: ["Photograph sight lines at the relevant time of day, locate cameras, retain clothing and damaged possessions, and identify witnesses. Police collision records and vehicle data may assist. A serious case may require collision reconstruction, medical, care and employment experts."] },
      { heading: "Contributory negligence is not automatic", paragraphs: ["Distraction, alcohol, dark clothing or crossing position may be raised by an insurer. The defender must connect the alleged conduct to the collision or injury. The court considers the pedestrian’s age and circumstances as well as the danger created by the vehicle."] },
      { heading: "Compensation after a serious pedestrian injury", paragraphs: ["Pedestrian impacts can produce multiple orthopaedic, neurological and psychological injuries. The claim should address rehabilitation, care, accommodation, mobility, education or career effects and future vulnerability—not only the initial diagnosis."] },
    ],
    sources: [{ label: "Highway Code: pedestrians", href: "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35", note: "Official pedestrian rules and crossing guidance." }, { label: "Highway Code: road users requiring extra care", href: "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225", note: "Official guidance concerning vulnerable road users." }, limitation],
    related: [{ label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Serious injury claims", href: "/serious-injury-claims-scotland" }, { label: "Partly at fault", href: "/guides/can-i-claim-if-partly-at-fault-scotland" }],
    faqs: [
      { question: "Can I claim if I was hit by a car while crossing the road in Scotland?", answer: "Yes. A driver must give way to pedestrians crossing or waiting to cross at a junction, and must not drive dangerously close to them at any crossing. If a driver failed in that duty and caused your injury, you can investigate a claim regardless of whether you were on a formal crossing." },
      { question: "Does it matter that I wasn't at a pedestrian crossing when I was hit?", answer: "Not automatically. Crossing away from a formal crossing point may be raised as contributory negligence, but a driver still has a duty to see and avoid pedestrians who are reasonably visible. Courts will examine speed, visibility and the driver's opportunity to stop or swerve." },
      { question: "How long do I have to claim after a pedestrian accident in Scotland?", answer: "The general time limit is three years from the accident date or, if later, from when you first knew the injury was significant. Children have extended time limits. Evidence such as CCTV footage is lost quickly, so instruct an adviser without delay even if proceedings do not need to be raised immediately." },
      { question: "What if the driver said I ran out in front of them?", answer: "This is a standard insurer defence. It is tested against objective evidence including CCTV, witness accounts, sight lines, vehicle speed and impact marks. A driver's account of events is not automatically conclusive, and your version, supported by evidence, remains relevant." },
      { question: "Can I claim compensation if I was hit on the pavement?", answer: "Yes, and the duty on drivers is particularly clear in such cases. A vehicle mounting a kerb or footway is almost always a serious breach. Document the exact location of impact and gather CCTV promptly." },
      { question: "I was partly at fault — can I still get compensation?", answer: "Yes. Scotland uses contributory negligence rules, meaning compensation is reduced by the proportion of fault attributed to you, but you do not lose your entire claim. The precise reduction depends on the facts and the evidence of each party's conduct." },
    ],
  },
  {
    slug: "passenger-accident-claims-scotland",
    title: "Passenger Accident Claims in Scotland",
    description: "A Scottish guide for passengers injured in cars, taxis, buses, coaches and other vehicles, including seatbelts, multiple drivers and insurance.",
    category: "Passenger claims",
    answer: "An injured passenger can usually investigate a claim against whichever driver or other party caused the collision, including the driver of the vehicle in which they were travelling. Where responsibility is disputed between drivers, evidence can be gathered against more than one potential defender.",
    keyPoints: ["A passenger does not have to choose a driver’s version at the outset.", "Family or friendship with a driver does not transfer the claim personally to them; an insurer usually responds.", "Taxi and bus evidence can include operator records and onboard CCTV.", "Seatbelt arguments are fact-sensitive.", "Keep tickets, booking records and journey details."],
    sections: [
      { heading: "Who may be responsible?", paragraphs: ["The responsible party may be the host driver, another motorist, an employer, a vehicle operator, a manufacturer or a roads authority. Multi-vehicle cases should not be reduced to an unsupported assumption about one driver."] },
      { heading: "Taxi, private-hire, bus and coach evidence", paragraphs: ["Preserve the booking receipt or ticket, vehicle and operator details, route, stop, driver identity and other passenger details. Ask promptly for onboard or street CCTV to be retained. Sudden movement cases require evidence explaining why the manoeuvre was unsafe rather than merely uncomfortable."] },
      { heading: "Seatbelts and child restraints", paragraphs: ["A failure to use an available restraint may lead to an evidence-based contributory-negligence argument about whether it caused or worsened a particular injury. It does not determine who caused the collision, and no fixed deduction should be assumed without analysing the medical and factual evidence."] },
      { heading: "Passenger losses", paragraphs: ["A passenger claim can include injury, earnings, care, treatment, travel and damaged belongings. It normally does not include the driver’s vehicle loss unless the passenger owned the vehicle or incurred a separate recoverable expense."] },
    ],
    sources: [highwayCode, { label: "GOV.UK: seat belts and child restraints", href: "https://www.gov.uk/seat-belts-law", note: "Official information on seat-belt and child-restraint requirements." }, limitation],
    related: [{ label: "Car accident claims", href: "/car-accident-claims-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Evidence checklist", href: "/guides/evidence-for-personal-injury-claim-scotland" }],
    faqs: [
      { question: "Can I claim against the driver of the car I was in?", answer: "Yes. An innocent passenger can investigate a claim against the driver of their own vehicle if that driver caused the accident through negligence. The claim is usually met by the driver's motor insurer rather than the driver personally, so the relationship between you and the driver need not prevent a claim." },
      { question: "I was in a taxi when the accident happened — who do I claim against?", answer: "You may have a claim against the taxi driver, their employer or the operator, depending on who caused the accident and the employment or licensing arrangement. Preserve your booking receipt, the vehicle details and any onboard camera evidence. Other drivers involved may also be responsible." },
      { question: "Does not wearing a seatbelt mean I can't claim?", answer: "Not wearing a seatbelt does not defeat a claim, but an insurer may argue your injuries would have been less severe if you had worn one. Any reduction in compensation must be based on medical evidence linking the absence of a seatbelt to the specific injuries you suffered, not on a fixed percentage." },
      { question: "What if two drivers were both at fault for the accident I was injured in?", answer: "You can pursue claims against both drivers. In Scotland, defenders who are jointly liable may each be responsible for the full amount, and you are not required to apportion blame at the outset. Evidence of each driver's contribution will be relevant to how the claim is resolved." },
      { question: "I was a bus passenger and the driver braked suddenly — can I claim?", answer: "Sudden braking that causes a passenger to fall or be thrown forward is not automatically negligent. The question is whether the driver had reasonable cause for the manoeuvre or whether it was avoidable. Onboard CCTV and operator maintenance records can be important evidence." },
      { question: "How long do I have to make a passenger claim in Scotland?", answer: "The standard time limit is three years from the date of the accident or date of knowledge. Children have longer. Act promptly because onboard and road CCTV is typically overwritten within days." },
    ],
  },
  {
    slug: "uninsured-driver-claims-scotland",
    title: "Uninsured Driver Claims in Scotland",
    description: "How Scottish claims involving uninsured drivers work through the Motor Insurers’ Bureau, including evidence, police reporting and insurance checks.",
    category: "MIB claims",
    answer: "If an identified driver caused injury but had no valid insurance, compensation may be available under the Motor Insurers’ Bureau Uninsured Drivers’ Agreement. The route has its own conditions, exclusions and cooperation requirements, so preserve the driver, vehicle, police and insurance evidence.",
    keyPoints: ["This route is for an identified but uninsured responsible driver.", "A hit-and-run normally uses the separate Untraced Drivers’ Agreement.", "Report appropriately and keep the police reference.", "The MIB investigates liability as well as insurance status.", "Read the current agreement rather than relying on generic civil-claim summaries."],
    sections: [
      { heading: "Uninsured versus untraced", paragraphs: ["An identified driver without effective insurance is different from a driver or vehicle that cannot be traced. Selecting the correct MIB route matters because the agreements contain different procedures and requirements."] },
      { heading: "Evidence the MIB may require", paragraphs: ["Keep the registration, driver identity, photographs, witness information, police reference, insurer searches and correspondence. The MIB may investigate whether the driver was liable and whether another insurer is obliged to satisfy the claim."] },
      { heading: "What may be compensated", paragraphs: ["Depending on the agreement and facts, a claim may include personal injury and qualifying property loss. Excesses, exclusions and recovery from another source must be checked against the agreement in force on the relevant date."] },
      { heading: "Deadlines and cooperation", paragraphs: ["Do not assume that every MIB procedural deadline is identical to the Scottish court limitation period. Applicants may need to report, provide documents, cooperate with investigation and notify the MIB of proceedings or offers."] },
    ],
    sources: [mib, { label: "GOV.UK: compensation for victims of uninsured drivers", href: "https://www.gov.uk/compensation-victim-uninsured-driver", note: "Official overview of the MIB route." }, limitation],
    related: [{ label: "Hit-and-run claims", href: "/hit-and-run-claims-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Liability denied", href: "/guides/what-if-liability-denied-scotland" }],
    faqs: [
      { question: "What happens if the driver who hit me had no insurance?", answer: "If the driver is identified but uninsured, a claim may be made through the Motor Insurers' Bureau under the Uninsured Drivers' Agreement. The MIB investigates liability and covers injury compensation and qualifying property losses, subject to conditions in the current agreement." },
      { question: "Do I need to report the accident to the police to claim against an uninsured driver?", answer: "Yes. Police reporting is a condition of the MIB Uninsured Drivers' Agreement. Keep the police incident reference number and any written confirmation of the report. Cooperate with any investigation as required by the agreement." },
      { question: "How is an uninsured driver claim different from an ordinary car accident claim?", answer: "Instead of pursuing the driver's insurer directly, the claim goes through the MIB. The process has its own timescales, documentation requirements and exclusions. The MIB investigates both liability and insurance status, so cooperate fully and preserve all evidence." },
      { question: "Can I claim for property damage as well as injury from an uninsured driver?", answer: "Property loss may be recoverable under the MIB agreement, but specific conditions and possible excesses apply. Check the current agreement for what vehicle and property damage is covered, because not all costs are automatically included." },
      { question: "What if I knew the driver had no insurance and still got in the car?", answer: "If you voluntarily accepted a lift from someone you knew to be uninsured, the MIB may reduce or refuse your compensation under the agreement's conditions. Each case is assessed on its specific facts." },
      { question: "How long does an MIB uninsured driver claim take in Scotland?", answer: "Timescales vary depending on the complexity of the injuries, the evidence available and whether liability is disputed. Simple claims can resolve within months; serious injury or disputed liability cases typically take longer. The MIB has its own procedural timelines separate from ordinary court limitation rules." },
    ],
  },
  {
    slug: "hit-and-run-claims-scotland",
    title: "Hit-and-Run and Untraced Driver Claims in Scotland",
    description: "Scottish hit-and-run claims under the MIB Untraced Drivers’ Agreement: reporting, tracing evidence, injuries, property loss and deadlines.",
    category: "MIB claims",
    answer: "Where the responsible driver or vehicle cannot be identified after a hit-and-run, the MIB Untraced Drivers’ Agreement may provide a route to compensation. Prompt police reporting, proof of reasonable tracing efforts and careful preservation of scene evidence are particularly important.",
    keyPoints: ["Record any part of the registration and vehicle description immediately.", "Look for doorbell, traffic, business and dashcam footage.", "Keep the police incident reference and evidence of reporting.", "The MIB still investigates fault and causation.", "Untraced-driver conditions differ from ordinary insurer claims."],
    sections: [
      { heading: "Immediate tracing steps", paragraphs: ["Write down the vehicle’s make, model, colour, direction, damage, occupants and any registration characters. Identify witnesses and cameras before recordings are overwritten. Police reporting and lawful insurer or registration enquiries may later show that the vehicle is traceable."] },
      { heading: "Proving a collision without the other driver", paragraphs: ["The absence of the responsible driver makes contemporaneous evidence more important. Medical records, scene debris, vehicle damage, emergency calls, location data and independent witnesses can corroborate what happened."] },
      { heading: "MIB investigation", paragraphs: ["The MIB can examine whether an unidentified driver probably caused the incident, whether reasonable tracing steps were taken and whether the injury and losses are supported. An application is not automatically accepted because the other vehicle left."] },
      { heading: "Property damage and exclusions", paragraphs: ["Property claims under the untraced route can be subject to particular conditions. Check the current agreement and do not dispose of a damaged vehicle or possessions before their condition and value are evidenced."] },
    ],
    sources: [mib, { label: "GOV.UK: uninsured or hit-and-run drivers", href: "https://www.gov.uk/compensation-victim-uninsured-driver", note: "Official overview of compensation routes." }, limitation],
    related: [{ label: "Uninsured-driver claims", href: "/uninsured-driver-claims-scotland" }, { label: "Road-accident evidence", href: "/guides/evidence-for-personal-injury-claim-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }],
    faqs: [
      { question: "Can I claim compensation after a hit-and-run in Scotland?", answer: "Yes. Where the responsible driver cannot be identified, you may be able to claim through the MIB Untraced Drivers' Agreement. You must report the incident to the police, take reasonable steps to trace the vehicle, and cooperate with the MIB's investigation." },
      { question: "What if I only caught part of the number plate?", answer: "Any registration characters, vehicle description, direction, damage or identifying features should be noted immediately and provided to police. The MIB or police may be able to trace the vehicle from partial information. If tracing succeeds, the claim moves from the untraced to the uninsured driver route." },
      { question: "How soon does CCTV footage need to be preserved after a hit-and-run?", answer: "Many systems overwrite footage within 24 to 72 hours. Ask police to request preservation of council, shop, business and doorbell camera footage as quickly as possible. Dashcam footage from other vehicles nearby can also be valuable." },
      { question: "Do I need a witness for a hit-and-run claim?", answer: "A witness is helpful but not essential. The MIB will examine all available corroborating evidence including CCTV, scene marks, medical records and emergency call logs. Providing as much contemporaneous evidence as possible strengthens the application." },
      { question: "Is there a time limit for making a hit-and-run claim through the MIB?", answer: "The MIB agreement has its own application deadlines which may differ from the standard Scottish court limitation period of three years. Apply to the MIB as soon as possible and seek legal advice promptly to ensure you meet all procedural requirements." },
      { question: "Can I claim for my damaged vehicle in a hit-and-run?", answer: "Property damage may be claimed under the untraced drivers' agreement, but conditions and possible exclusions apply. Do not repair or dispose of your vehicle before its damage and value are properly documented." },
    ],
  },
  {
    slug: "serious-road-traffic-injury-claims-scotland",
    title: "Serious Road Traffic Injury Claims in Scotland",
    description: "Scottish road claims involving brain, spinal, amputation, multiple fracture and other life-changing injuries, rehabilitation and future needs.",
    category: "Serious road injuries",
    answer: "A serious road-injury claim must plan for the injured person’s lifetime needs, not merely compensate the initial diagnosis. Liability evidence, early rehabilitation, interim funding, multidisciplinary experts and a properly tested future-loss model are central.",
    keyPoints: ["Do not settle before prognosis and future needs are reliable.", "Case management and rehabilitation may begin before final settlement.", "Care provided by family should be recorded.", "Accommodation, equipment and transport may require specialist evidence.", "Capacity and financial-management arrangements may need consideration."],
    sections: [
      { heading: "Building the multidisciplinary case", paragraphs: ["The evidence may include neurology, neuropsychology, orthopaedics, psychiatry, rehabilitation, occupational therapy, care, accommodation, assistive technology and employment experts. The right disciplines depend on functional consequences, not just diagnostic labels."] },
      { heading: "Immediate and interim needs", paragraphs: ["Where liability permits, interim payments may fund rehabilitation, equipment, care or accommodation before final resolution. Requests should be supported by clear needs and costs; they are not guaranteed simply because the injury is severe."] },
      { heading: "Lifetime financial analysis", paragraphs: ["Future care, lost earnings, pension loss, therapies, equipment replacement, transport, housing and deputyship or guardianship-type costs may need projections. Assumptions about life expectancy, contingencies and public provision should be transparent."] },
      { heading: "Family evidence and hidden loss", paragraphs: ["Record unpaid care, supervision, household services, travel, work changes and the effect on relationships. Family evidence can explain real-world function between formal medical appointments."] },
    ],
    sources: [{ label: "SCTS: All-Scotland Sheriff Personal Injury Court", href: "https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/", note: "Official information about Scotland’s specialist personal injury court." }, { label: "Transport Scotland: 2025 road casualty findings", href: "https://www.transport.gov.scot/publication/key-reported-road-casualties-scotland-2025/key-findings/", note: "Official provisional Scottish casualty statistics." }, limitation],
    related: [{ label: "Serious injury claims", href: "/serious-injury-claims-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Compensation guide", href: "/personal-injury-compensation-scotland" }],
    faqs: [
      { question: "What counts as a serious road injury for a compensation claim in Scotland?", answer: "Serious road injuries typically include traumatic brain injury, spinal cord injury, amputations, severe multiple fractures, significant burns and major psychological disorders. The defining feature is that the injury has lasting consequences on daily life, work, care needs and independence." },
      { question: "Should I settle my serious injury claim quickly?", answer: "No. Settling before prognosis and future needs are properly established risks significantly undervaluing your claim. Compensation for serious injuries needs to account for lifetime care, lost earnings, treatment, accommodation adaptations and other long-term costs. These cannot be reliably assessed until the medical picture is clear." },
      { question: "Can I get an interim payment while my serious injury claim is ongoing?", answer: "Yes, in appropriate cases. Where liability is reasonably clear, an interim payment from the insurer may fund rehabilitation, equipment, care or accommodation while the claim is resolved. The request must be supported by evidence of need and cost." },
      { question: "Who pays for my care and rehabilitation while my serious injury claim is ongoing?", answer: "Your existing NHS entitlement remains in place. Where liability is admitted or sufficiently clear, a structured rehabilitation agreement funded by the insurer may also be available. Interim payments can be used for private treatment or care when clinically justified and properly evidenced." },
      { question: "Can family members who provide care after a serious road accident be compensated?", answer: "Yes. The cost of gratuitous care provided by family or friends is a recognised head of loss in Scotland. Keep a detailed record of the care provided — hours, tasks and the effect on the carer’s own work and life — from the date of the accident." },
      { question: "How long does a serious road injury claim take in Scotland?", answer: "Complex serious injury cases routinely take two to five years or longer. Settling too early is a greater risk than delay when the medical position is still evolving. Your adviser should explain the timeline and the reasons for any recommendation to resolve before long-term prognosis is fully established." },
    ],
  },
  {
    slug: "fatal-road-accident-claims-scotland",
    title: "Fatal Road Accident Claims in Scotland",
    description: "A sensitive guide to Scottish fatal road claims, executors, relatives, dependency, loss of society, evidence and other investigations.",
    category: "Fatal road accidents",
    answer: "A death caused by a road collision may give rise to claims by the deceased’s executor and qualifying relatives. Scottish law distinguishes the deceased’s losses, financial dependency and services from relatives’ loss of society; police or criminal proceedings do not themselves determine the civil claim.",
    keyPoints: ["The executor and relatives may pursue different heads of loss.", "Qualifying relationships are defined by Scottish legislation.", "Dependency evidence includes income and unpaid family services.", "A prosecution is not required for a civil claim.", "Fatal Accident Inquiries and civil claims answer different questions."],
    sections: [
      { heading: "The estate and relatives’ claims", paragraphs: ["The deceased’s pre-death losses may be pursued by the executor. Qualifying relatives can have distinct claims for grief and sorrow, loss of society and guidance, financial support and services. The appropriate claimant and documentation should be identified early."] },
      { heading: "Road-collision evidence", paragraphs: ["Police investigation, vehicle examination, CCTV, telematics, toxicology, post-mortem evidence and witnesses may be relevant. Families should preserve correspondence and obtain advice before assuming that a criminal outcome decides civil responsibility."] },
      { heading: "Dependency and services", paragraphs: ["Income, pensions, household spending, childcare, transport, maintenance and caring work can all matter. Evidence should reflect what the deceased actually contributed and what was likely to happen in the future."] },
      { heading: "Coordinating investigations", paragraphs: ["A criminal prosecution, regulatory investigation, inquest outside Scotland or Fatal Accident Inquiry may proceed separately. Their purposes and legal tests differ from a damages action."] },
    ],
    sources: [{ label: "Damages (Scotland) Act 2011", href: "https://www.legislation.gov.uk/asp/2011/7/contents", note: "Primary legislation governing damages where personal injury results in death." }, { label: "SCTS: Fatal Accident Inquiries", href: "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-and-tribunals/fatal-accident-inquiries/", note: "Official explanation of the FAI process." }, limitation],
    related: [{ label: "Fatal accident compensation guide", href: "/guides/fatal-accident-compensation-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }, { label: "Serious injury claims", href: "/serious-injury-claims-scotland" }],
    faqs: [
      { question: "Who can claim compensation after a fatal road accident in Scotland?", answer: "The deceased's executor can claim for losses suffered before death. Qualifying relatives — including a spouse or civil partner, children, parents and certain other family members — can claim for loss of society and guidance, grief and sorrow, and financial dependency. Scottish law defines qualifying relatives specifically, so seek advice early." },
      { question: "Do I need a criminal conviction to make a civil claim after a fatal road accident?", answer: "No. A civil claim for damages and a criminal prosecution are separate proceedings with different legal tests. A driver can be acquitted in a criminal court but still found liable in a civil action, and vice versa. A civil claim can proceed in parallel with, or independently of, any criminal case." },
      { question: "What is a Fatal Accident Inquiry and how does it affect a compensation claim?", answer: "A Fatal Accident Inquiry (FAI) is a judicial public inquiry held in Scotland to establish the circumstances of certain deaths. Its findings may be relevant evidence in a civil damages claim, but the FAI's conclusions do not automatically determine civil liability. A civil claim can be raised before, during or after an FAI." },
      { question: "How long do relatives have to make a claim after a fatal road accident in Scotland?", answer: "The general time limit under the Prescription and Limitation (Scotland) Act 1973 is three years from the date of death or from the date a relative first had knowledge that a claim was possible. Do not wait for criminal proceedings to conclude before taking civil advice." },
      { question: "What financial losses can be claimed after a fatal road accident?", answer: "Claims can include the deceased's pre-death losses, financial dependency (income, pension, household services, childcare), loss of society and guidance, travel and funeral expenses. Each head of loss requires evidence such as employment and pension records, a schedule of the deceased's unpaid contributions and expert evidence where appropriate." },
      { question: "Can I claim if a family member died in an accident that was partly their fault?", answer: "Yes, subject to a reduction for contributory negligence. If the deceased was partly responsible, the amount recoverable by relatives is reduced proportionally. This does not prevent a claim, but the proportion of responsibility must be assessed from the collision evidence." },
    ],
  },
  {
    slug: "road-defect-accident-claims-scotland",
    title: "Road Defect Accident Claims in Scotland",
    description: "Claims caused by potholes, unsafe surfaces, missing signs, roadworks and debris in Scotland, including authority, contractor and evidence issues.",
    category: "Road defects",
    answer: "A collision caused by a pothole or road defect is not automatically the roads authority’s legal responsibility. The claim must identify who controlled the road or works, prove the defect caused the incident, and examine inspection, notice, maintenance and response evidence.",
    keyPoints: ["Identify whether the road is trunk, local, private or under roadworks control.", "Record dimensions, position, sight lines and warnings safely.", "Inspection and repair records can be decisive.", "A contractor or utility may share responsibility.", "Keep the cycle, motorcycle or vehicle damage evidence."],
    sections: [
      { heading: "Identify the responsible network", paragraphs: ["Transport Scotland manages trunk roads through operating arrangements, while local authorities manage most other public roads. Private roads, construction sites, utilities and roadworks may introduce different responsible parties."] },
      { heading: "Document the exact defect", paragraphs: ["Use wide, approach and close photographs with a reliable scale. Record coordinates, lane position, lighting, weather, signs, barriers and whether the defect was obscured. Never place yourself in live traffic to gather evidence."] },
      { heading: "Inspection, notice and response", paragraphs: ["Relevant records may include route hierarchy, inspection frequency, prior reports, works orders, intervention criteria and repair completion. A defect existing at the time of a later photograph does not by itself prove how long it had been present."] },
      { heading: "Mechanism and vehicle evidence", paragraphs: ["Explain how the defect caused loss of control or impact. Retain damaged wheels, tyres, suspension, bicycle or motorcycle components and obtain an appropriate engineering assessment where necessary."] },
    ],
    sources: [{ label: "Roads (Scotland) Act 1984", href: "https://www.legislation.gov.uk/ukpga/1984/54/contents", note: "Primary legislation concerning Scottish roads authorities." }, { label: "Transport Scotland: trunk road network", href: "https://www.transport.gov.scot/transport-network/roads/the-trunk-road-network/", note: "Official information about Scotland’s trunk-road network." }, limitation],
    related: [{ label: "Cycling accident claims", href: "/guides/cycling-accident-claims-scotland" }, { label: "Motorcycle accident claims", href: "/guides/motorcycle-accident-claims-scotland" }, { label: "Council pavement claims", href: "/guides/council-pavement-trip-claims-scotland" }],
    faqs: [
      { question: "Can I claim for an accident caused by a pothole in Scotland?", answer: "Yes, if the roads authority responsible for maintaining that road knew or should have known about the defect and failed to act within a reasonable time. The claim must establish that the defect caused your accident and that the authority’s inspection and maintenance record fell short of the required standard." },
      { question: "Who is responsible for roads in Scotland — the council or the Scottish Government?", answer: "Trunk roads (major A roads and motorways) are managed by Transport Scotland through operating companies. Local roads are managed by the relevant local council. Private roads, car parks and roadworks areas may have different responsible parties. Identifying the correct defender early is essential." },
      { question: "How do I prove a pothole caused my accident?", answer: "Photograph the defect with a scale object, record its exact position and GPS coordinates, note the time and conditions, and identify witnesses and nearby cameras. Preserve your damaged vehicle or bicycle components before repair. Inspection and repair records obtained from the roads authority can show how long the defect had been reported." },
      { question: "What if the council says they inspected the road and it was fine?", answer: "Inspection records and dates are relevant but not conclusive. The question is whether the inspection was adequate — the correct frequency, standard and method for that road classification — and whether the defect was present and reportable at the inspection date. Expert analysis of the records may be needed." },
      { question: "Can I claim if the accident was caused by roadworks?", answer: "Yes. The company or contractor responsible for the roadworks owes a duty to road users to sign, guard and manage the works safely. Claims may lie against the contractor, the road authority, a utility company or a combination, depending on who controlled the works." },
      { question: "How long do I have to make a road defect claim in Scotland?", answer: "Three years from the date of the accident or date of knowledge. Evidence deteriorates quickly — roads are repaired, CCTV overwrites and witnesses’ memories fade — so investigate promptly even if proceedings do not need to be raised immediately." },
    ],
  },
  {
    slug: "child-road-accident-claims-scotland",
    title: "Child Road Accident Claims in Scotland",
    description: "Scottish road claims involving children as passengers, pedestrians or cyclists, including responsibility, evidence, court approval and future needs.",
    category: "Children’s road claims",
    answer: "A parent or appropriate representative can investigate a road-accident claim for an injured child. Liability must reflect the child’s age and understanding, and any settlement should protect the child’s interests and account for education, development and future needs.",
    keyPoints: ["Adult standards should not simply be applied to a young child.", "A parent can usually seek advice before the child turns 16.", "Evidence should address education and development.", "Serious injuries may require long-term reassessment.", "Settlement and management of funds require child-specific safeguards."],
    sections: [
      { heading: "Children as pedestrians, cyclists and passengers", paragraphs: ["The evidence should reflect the child’s height, visibility, route, supervision, developmental understanding and the driver’s duty to anticipate vulnerable road users. Child-restraint evidence may be relevant in passenger cases."] },
      { heading: "Who conducts the claim?", paragraphs: ["An appropriate adult may act for the child, subject to Scottish procedural safeguards. Potential conflicts must be considered where the adult or family driver may also be involved in the collision."] },
      { heading: "Education and developmental evidence", paragraphs: ["School absence, additional support, concentration, mobility, emotional effects and lost activities should be recorded. Serious injury assessment may need paediatric, neuropsychological, educational and care expertise."] },
      { heading: "Time limits and early evidence", paragraphs: ["Special limitation rules apply to children, but delay can still destroy CCTV, witness memory and medical or school evidence. Do not wait solely because the child may have longer to raise proceedings."] },
    ],
    sources: [{ label: "Highway Code: children", href: "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225", note: "Official guidance on road users requiring extra care." }, { label: "Children and Young People (Scotland) Act 2014", href: "https://www.legislation.gov.uk/asp/2014/8/contents", note: "Broader Scottish legislation concerning children and young people." }, limitation],
    related: [{ label: "Pedestrian accident claims", href: "/pedestrian-accident-claims-scotland" }, { label: "Passenger accident claims", href: "/passenger-accident-claims-scotland" }, { label: "Road traffic accident claims hub", href: "/road-traffic-accident-claims-scotland" }],
    faqs: [
      { question: "Can I make a road accident claim on behalf of my child in Scotland?", answer: "Yes. A parent or other appropriate adult can instruct a solicitor and investigate a claim on a child's behalf. Any settlement involving a child must be approved by the court to protect the child's interests, and any award is managed for the benefit of the child." },
      { question: "What is the time limit for a child's road accident claim in Scotland?", answer: "For a child, the three-year limitation period does not begin until their eighteenth birthday. This means a claim can generally be brought at any time before the child turns 21. However, delay causes evidence to be lost, so it is advisable to investigate early even if proceedings are not raised immediately." },
      { question: "Is a child treated as partly at fault if they ran into the road?", answer: "Contributory negligence for a child is assessed by reference to the standard of behaviour expected of a child of that age, not an adult. Young children are held to a much lower standard. Drivers have a positive duty to anticipate that children may act unpredictably." },
      { question: "My child was injured as a passenger in a school bus — can I claim?", answer: "Yes, if the driver or operator was negligent. Preserve the route details, operator information, driver identity and any onboard camera evidence. Report the incident to the school and the transport operator, and keep written records of all correspondence." },
      { question: "What compensation can a child receive for a serious road accident injury in Scotland?", answer: "A child's claim can include pain and suffering, loss of amenity, the effect on education and development, care needs, future earnings loss and any long-term treatment or support requirements. Future losses are assessed over the child's anticipated working and care lifetime and can be substantial." },
      { question: "Do I need the court's approval to settle my child's road accident claim?", answer: "Yes. In Scotland, any settlement of a personal injury claim on behalf of a child must be approved by the court. This protects the child from an inadequate settlement being accepted on their behalf. Court approval is a formal step that your adviser will guide you through." },
    ],
  },
  {
    slug: "early-insurer-offers-road-accident-scotland",
    title: "Early Insurer Offers After a Road Accident in Scotland",
    description: "What to check before accepting an early road-accident settlement offer in Scotland, including prognosis, full-and-final wording and financial loss.",
    category: "Insurer offers",
    answer: "An early insurer offer may be convenient, but accepting a full-and-final settlement can prevent recovery if symptoms persist or further losses emerge. Establish exactly what the offer covers, whether liability is admitted and whether medical prognosis and financial losses are complete.",
    keyPoints: ["Check whether the offer is injury-only, property-only or global.", "Read any full-and-final settlement wording.", "Do not assume symptoms will resolve without medical evidence.", "Include earnings, care, treatment and future loss where supported.", "Keep written records of every offer and acceptance term."],
    sections: [
      { heading: "Why insurers make early offers", paragraphs: ["Early resolution can reduce cost and uncertainty for everyone, but the information available shortly after a collision may be incomplete. The key question is not whether an offer is early; it is whether the evidence is sufficient to value the losses safely."] },
      { heading: "Define what is being settled", paragraphs: ["Ask whether the payment addresses vehicle repairs, excess, hire, personal injury, expenses or every claim arising from the collision. An interim or property payment should be documented so it cannot be misunderstood as full settlement."] },
      { heading: "Medical prognosis and developing symptoms", paragraphs: ["Whiplash may resolve quickly, while other orthopaedic, neurological or psychological problems may take longer to diagnose or stabilise. Medical evidence should distinguish pre-existing conditions from injury caused or worsened by the collision."] },
      { heading: "Build the loss schedule", paragraphs: ["Include evidenced earnings, pension effects, treatment, travel, medication, care, damaged property and future expenditure. Avoid double recovery and keep receipts, wage records and explanations of unpaid family assistance."] },
    ],
    sources: [{ label: "Financial Conduct Authority: insurance conduct rules", href: "https://www.handbook.fca.org.uk/handbook/ICOBS/", note: "Official rules governing insurers’ conduct of business." }, { label: "NHS inform: whiplash", href: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/neck-and-back-problems-and-conditions/whiplash/", note: "Official health information about symptoms and recovery." }, limitation],
    related: [{ label: "Car accident claims", href: "/car-accident-claims-scotland" }, { label: "What is my claim worth?", href: "/guides/what-is-my-accident-claim-worth-scotland" }, { label: "Liability denied", href: "/guides/what-if-liability-denied-scotland" }],
    faqs: [
      { question: "Should I accept the insurer’s first offer after a road accident in Scotland?", answer: "Not without checking what it covers and whether your losses and prognosis are fully established. Early offers are sometimes made before medical evidence is complete. Accepting a full-and-final settlement prevents you from returning if symptoms worsen or new losses emerge." },
      { question: "What does ‘full and final settlement’ mean?", answer: "A full-and-final settlement means you release all future claims arising from the accident in exchange for the agreed payment. Once signed, you cannot return for more compensation even if your condition deteriorates. Make sure all current and future losses are properly valued before agreeing." },
      { question: "Can an insurer pressure me to settle quickly?", answer: "Insurers are regulated by the FCA and must treat customers fairly. However, they have a commercial interest in resolving claims quickly. You are entitled to take time to understand your losses and to take independent advice before accepting any offer." },
      { question: "What if the insurer’s offer doesn’t cover all my losses?", answer: "You can reject or counter the offer. Prepare a schedule of all losses — injury, earnings, treatment, care, travel, vehicle — supported by evidence, and make a reasoned counter-proposal. If agreement cannot be reached, the claim can proceed to litigation." },
      { question: "Does accepting compensation for vehicle damage affect my injury claim?", answer: "Vehicle and injury claims are separate. Accepting a vehicle damage payment should not affect your injury claim provided the insurer has not required you to sign a full-and-final release of all claims. Read any paperwork carefully before signing." },
      { question: "How long do I have to decide whether to accept an insurer’s offer?", answer: "There is no fixed deadline to accept an offer, but the three-year limitation period for raising court proceedings continues to run. Do not let time pressure from an insurer cause you to miss the limitation deadline or accept an inadequate offer. Seek advice before the deadline expires." },
    ],
  },
];

export const roadTrafficPageSlugs = new Set(roadTrafficPages.map((page) => `/${page.slug}`));
