import type { Metadata } from "next";
import Link from "next/link";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Road Traffic Accident Claims Scotland — Compensation Guide",
  description:
    "Injured in a road accident in Scotland? Information on car, motorcycle, cycling, pedestrian and whiplash claims under Scots law. Three-year time limit — free enquiry, no obligation.",
  alternates: { canonical: "/road-traffic-accident-claims-scotland" },
  openGraph: {
    title: "Road Traffic Accident Claims Scotland — Compensation Guide",
    description: "Injured in a road traffic accident in Scotland? Free enquiry, no win no fee available.",
    url: "/road-traffic-accident-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim if the other driver was uninsured?",
    answer:
      "Yes. If you were injured by an uninsured or untraced driver in Scotland, you may be able to claim through the Motor Insurers' Bureau (MIB). Specific time limits and procedures apply to MIB claims. A solicitor will manage this process on your behalf.",
  },
  {
    question: "What if I was a passenger in a car that was involved in an accident?",
    answer:
      "As a passenger you can generally claim against the driver responsible — this may be the driver of the vehicle you were in, the other driver, or both. Being a passenger does not affect your right to claim.",
  },
  {
    question: "Can I claim for whiplash after a car accident in Scotland?",
    answer:
      "Yes. Scotland has different whiplash rules from England and Wales — the English Civil Liability Act 2018 whiplash reforms do not apply in Scotland. You can claim for whiplash and related soft tissue injuries with the support of medical evidence.",
  },
  {
    question: "How long do I have to claim after a road accident in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident. For uninsured or untraced driver claims through the MIB, shorter or different time limits may apply. Do not delay in seeking advice.",
  },
  {
    question: "What if I was partly at fault for the road accident?",
    answer:
      "Contributory negligence may reduce the compensation you receive, but does not necessarily prevent you from claiming. For example, not wearing a seatbelt typically results in a 15–25% reduction. Your solicitor will advise on the likely impact on your claim.",
  },
];

export default function RoadTrafficAccidentPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/road-traffic-accident-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Road Traffic Accident Claims Scotland" }]}
      h1="Road Traffic Accident Claims Scotland"
      intro="If you were injured in a road traffic accident in Scotland that was not your fault, you may be entitled to claim compensation. This page explains claims involving car occupants, motorcycle riders, cyclists, pedestrians and passengers."
      tldr={[
        "You can claim if you were injured in a road accident in Scotland within the last three years.",
        "Scotland's whiplash rules are different from England and Wales — the 2018 reforms do not apply here.",
        "Uninsured and untraced driver claims can be made through the Motor Insurers' Bureau (MIB).",
        "Contributory negligence (e.g. not wearing a seatbelt) reduces but does not bar your claim.",
        "Compensation covers pain and suffering, earnings loss, medical costs and vehicle damage.",
      ]}
      answerBox="In Scotland, you can make a road traffic accident claim if you were injured within the last three years and the accident was caused by another driver's negligence or a road defect. Claims can be made even if the other driver was uninsured. A free enquiry will assess your circumstances — no obligation."
      sections={[
        {
          heading: "Road Traffic Accident Claims in Scotland",
          content:
            "A road traffic accident claim is a personal injury claim made by someone injured in a collision on a public road in Scotland. Claims can arise from car accidents, van accidents, lorry accidents, motorcycle accidents, cycling accidents, pedestrian accidents and accidents involving passengers. The claim is generally made against the at-fault driver's insurer.",
        },
        {
          heading: "Types of Road Accident Claims We Handle",
          content: "We handle the full range of road traffic accident claims in Scotland:",
          linkedList: [
            { text: "Car accident claims — rear-end shunts, junction accidents, multi-vehicle collisions", href: "/car-accident-claims-scotland" },
            { text: "Motorcycle accident claims — including accidents at junctions and on rural roads", href: "/motorcycle-accident-claims-scotland" },
            { text: "Cycling accident claims — involving motor vehicles, poor road surfaces and road defects", href: "/cycling-accident-claims-scotland" },
            { text: "Pedestrian accident claims — being struck by vehicles while crossing or walking", href: "/pedestrian-accident-claims-scotland" },
            { text: "Passenger claims — injured while travelling as a passenger in any vehicle", href: "/passenger-accident-claims-scotland" },
            { text: "Hit and run claims — through the Motor Insurers' Bureau", href: "/hit-and-run-claims-scotland" },
            { text: "Uninsured driver claims — through the MIB uninsured drivers agreement", href: "/uninsured-driver-claims-scotland" },
            { text: "Whiplash and soft tissue injury claims", href: "/whiplash-claims-scotland" },
          ],
        },
        {
          heading: "Common Injuries in Road Traffic Accidents",
          content: "Injuries we regularly deal with in road accident claims include:",
          list: [
            "Whiplash and soft tissue injuries to the neck, back and shoulders",
            "Head and brain injuries — concussion to severe traumatic brain injury",
            "Fractures — wrists, arms, legs, ribs, pelvis",
            "Knee and shoulder injuries",
            "Facial injuries and scarring",
            "Psychological injury — PTSD, anxiety and depression following a collision",
            "Spinal injuries — disc herniations and spinal cord damage",
          ],
        },
        {
          heading: "Whiplash Claims in Scotland — Different From England",
          content:
            "Scotland has its own rules on whiplash and soft tissue injury claims. The Civil Liability Act 2018 — which introduced a fixed tariff for whiplash claims and a new small claims portal in England and Wales — does not apply in Scotland. Scottish whiplash claims are assessed on their individual facts and medical evidence, as they have always been. This means that soft tissue injury claims in Scotland are not subject to the English tariff system.",
        },
        {
          heading: "Uninsured and Untraced Drivers — MIB Claims in Scotland",
          content:
            "If you were injured by an uninsured driver or a driver who cannot be traced (a hit and run), you may be able to claim through the Motor Insurers' Bureau (MIB). Specific time limits and procedural requirements apply to MIB claims. A solicitor will manage this process on your behalf.",
        },
        {
          heading: "Which Scottish Road-Accident Route Applies?",
          content: (
            <div className="not-prose overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead className="bg-[#0f2044] text-white">
                  <tr><th className="p-4">Situation</th><th className="p-4">Usual route</th><th className="p-4">Important distinction</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="p-4 font-semibold">Identified insured driver</td><td className="p-4">Claim against the responsible party, normally handled by an insurer</td><td className="p-4">Injury and vehicle losses should be evidenced separately even when discussed together.</td></tr>
                  <tr className="bg-slate-50"><td className="p-4 font-semibold">Identified uninsured driver</td><td className="p-4"><Link className="text-red-700 underline" href="/uninsured-driver-claims-scotland">MIB Uninsured Drivers&apos; Agreement</Link></td><td className="p-4">The MIB investigates responsibility and insurance status; scheme conditions apply.</td></tr>
                  <tr><td className="p-4 font-semibold">Hit-and-run or untraced vehicle</td><td className="p-4"><Link className="text-red-700 underline" href="/hit-and-run-claims-scotland">MIB Untraced Drivers&apos; Agreement</Link></td><td className="p-4">Prompt police reporting and reasonable tracing evidence are especially important.</td></tr>
                  <tr className="bg-slate-50"><td className="p-4 font-semibold">Road defect</td><td className="p-4"><Link className="text-red-700 underline" href="/road-defect-accident-claims-scotland">Road authority, contractor, utility or private controller</Link></td><td className="p-4">A defect alone does not prove legal responsibility; inspection and notice evidence matters.</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "Injury Compensation and Vehicle Loss Are Not Identical Claims",
          content: (
            <>
              <p>They can arise from the same collision but depend on different evidence. The injury claim requires medical causation, prognosis and proof of financial consequences. Vehicle repair, total-loss value, excess, hire and loss-of-use questions depend on ownership, engineering and market evidence, insurance terms and reasonable mitigation.</p>
              <p>An insurer payment for repairs is not automatically full settlement of an injury claim. Equally, proving vehicle damage does not by itself establish the nature or value of an injury. Ask what each offer covers and preserve the wording.</p>
            </>
          ),
        },
        {
          heading: "What to Do After a Road Accident in Scotland",
          content: "Steps to take following a road traffic accident:",
          list: [
            "Call the police if required — certain accidents must be reported",
            "Seek medical attention promptly, even if your injury feels minor initially",
            "Obtain the other driver's name, address, vehicle registration and insurance details",
            "Take photographs of the scene, vehicle damage and your injuries if possible",
            "Take contact details for any witnesses",
            "Report the accident to your own insurer",
            "Keep records of all expenses and losses related to your injury",
            "Speak to a solicitor before accepting any offer from the other side's insurer",
          ],
        },
        {
          heading: "What Compensation Can You Claim After a Road Accident?",
          content:
            "Compensation can cover your pain and suffering (solatium), loss of earnings, medical treatment and rehabilitation, vehicle repair or replacement, car hire costs, travel expenses and other financial losses arising from your injury. In serious injury cases, future care costs and pension loss may also be recovered.",
        },
        {
          heading: "Scottish Road Casualty Context",
          content: (
            <>
              <p>
                Transport Scotland&apos;s provisional 2025 figures record 5,535 road casualties: 134 fatalities,
                1,906 people seriously injured and 3,495 slightly injured. Car users accounted for 3,092
                casualties, while pedestrians, motorcyclists and cyclists face a disproportionate risk of
                serious harm.
              </p>
              <p>
                <a
                  href="https://www.transport.gov.scot/publication/key-reported-road-casualties-scotland-2025/key-findings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-medium hover:underline"
                >
                  Read Transport Scotland&apos;s 2025 key findings
                </a>
              </p>
            </>
          ),
        },
        {
          heading: "Authoritative Road Claim Sources",
          content: (
            <ul>
              <li><a href="https://www.gov.uk/guidance/the-highway-code" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">The Highway Code</a> — official road-user rules and guidance.</li>
              <li><a href="https://www.mib.org.uk/making-a-claim/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Motor Insurers&apos; Bureau</a> — uninsured and untraced-driver routes.</li>
              <li><a href="https://www.legislation.gov.uk/ukpga/1973/52/contents" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Prescription and Limitation (Scotland) Act 1973</a> — Scottish limitation framework.</li>
              <li><a href="https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">All-Scotland Sheriff Personal Injury Court</a> — official court information.</li>
            </ul>
          ),
        },
      ]}
      subpages={{
        title: "Specialist Road Traffic Accident Claim Types",
        pages: [
          { label: "Car Accident Claims", href: "/car-accident-claims-scotland", desc: "Rear-end shunts, junction collisions" },
          { label: "Motorcycle Accident Claims", href: "/motorcycle-accident-claims-scotland", desc: "Junction accidents, rural road crashes" },
          { label: "Cycling Accident Claims", href: "/cycling-accident-claims-scotland", desc: "Motor vehicle collisions, road defects" },
          { label: "Pedestrian Accident Claims", href: "/pedestrian-accident-claims-scotland", desc: "Struck by vehicle while on foot" },
          { label: "Passenger Accident Claims", href: "/passenger-accident-claims-scotland", desc: "Injured as a passenger" },
          { label: "Whiplash Claims Scotland", href: "/whiplash-claims-scotland", desc: "Soft tissue injury after collision" },
          { label: "Hit and Run Claims", href: "/hit-and-run-claims-scotland", desc: "MIB untraced driver claims" },
          { label: "Uninsured Driver Claims", href: "/uninsured-driver-claims-scotland", desc: "MIB uninsured driver agreement" },
          { label: "Serious Road Injuries", href: "/serious-road-traffic-injury-claims-scotland", desc: "Rehabilitation and lifetime needs" },
          { label: "Fatal Road Accidents", href: "/fatal-road-accident-claims-scotland", desc: "Executor, relatives and dependency" },
          { label: "Road Defect Accidents", href: "/road-defect-accident-claims-scotland", desc: "Potholes, surfaces and roadworks" },
          { label: "Children Injured on Roads", href: "/child-road-accident-claims-scotland", desc: "Child passengers, pedestrians and cyclists" },
          { label: "Early Insurer Offers", href: "/early-insurer-offers-road-accident-scotland", desc: "What to check before accepting" },
          { label: "Contributory Negligence", href: "/contributory-negligence-road-accident-scotland", desc: "Partly at fault? You can still claim" },
        ],
      }}
      guideCategory="Road Accidents"
      guideSlugs={[
        "road-traffic-accident-claims-scotland",
        "whiplash-claims-scotland",
        "cycling-accident-claims-scotland",
        "motorcycle-accident-claims-scotland",
      ]}
      locationClaimType="road traffic accident claims"
      faqs={faqs}
      related={[
        { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
