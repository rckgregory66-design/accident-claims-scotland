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
  },
];

export const roadTrafficPageSlugs = new Set(roadTrafficPages.map((page) => `/${page.slug}`));
