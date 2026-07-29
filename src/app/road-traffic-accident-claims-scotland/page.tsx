import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Road Traffic Accident Claims Scotland | Car Accident Solicitors Scotland",
  description:
    "Claim compensation after a road traffic accident in Scotland. Specialist solicitors for car, motorcycle, cycling, pedestrian and whiplash claims. Free enquiry, no win no fee.",
  alternates: { canonical: "/road-traffic-accident-claims-scotland" },
  openGraph: {
    title: "Road Traffic Accident Claims Scotland | Car Accident Solicitors Scotland",
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
      intro="If you were injured in a road traffic accident in Scotland that was not your fault, you may be entitled to claim compensation. Our Scottish solicitors handle claims for car accident victims, motorcycle riders, cyclists, pedestrians and passengers — with no win, no fee options available."
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
