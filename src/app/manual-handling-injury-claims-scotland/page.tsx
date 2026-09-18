import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Manual Handling Injury Claims Scotland — Lifting & Carrying Injuries",
  description:
    "Injured by manual handling at work in Scotland? Information on employer duties, MHOR regulations, lifting injuries, back injuries and compensation. Free enquiry, no win no fee.",
  alternates: { canonical: "/manual-handling-injury-claims-scotland" },
  openGraph: {
    title: "Manual Handling Injury Claims Scotland — Lifting & Carrying Injuries",
    description: "Manual handling injury at work in Scotland? Free enquiry, no win no fee available.",
    url: "/manual-handling-injury-claims-scotland",
  },
};

const faqs = [
  {
    question: "What is a manual handling injury claim?",
    answer:
      "A manual handling injury claim arises when you are injured at work as a result of lifting, carrying, pushing, pulling or otherwise handling loads — and your employer failed to comply with their legal duties to reduce that risk. Manual handling injuries are one of the most common causes of workplace injury in Scotland, particularly back, shoulder and neck injuries.",
  },
  {
    question: "What duties do employers owe under manual handling regulations?",
    answer:
      "The Manual Handling Operations Regulations 1992 require employers to: avoid hazardous manual handling where reasonably practicable; assess the risk of any manual handling operations that cannot be avoided; and reduce the risk of injury to the lowest reasonably practicable level. Employers must also provide appropriate training and, where necessary, mechanical aids.",
  },
  {
    question: "Can I claim if the injury built up gradually rather than in a single accident?",
    answer:
      "Yes. Many manual handling injuries — particularly back pain and musculoskeletal conditions — develop gradually through repeated handling over time. The three-year time limit runs from the date of knowledge, which is typically the date you knew (or ought to have known) that your condition was connected to your manual handling work.",
  },
  {
    question: "What if I was partly to blame for the manual handling injury?",
    answer:
      "Contributory negligence may reduce your compensation but will not necessarily bar your claim. Even if you did not use the mechanical aids provided, or lifted improperly on occasion, your employer's failure to adequately assess and control risk may still give rise to liability. Your solicitor will assess the facts of your case.",
  },
  {
    question: "What compensation can I claim for a manual handling injury?",
    answer:
      "Compensation can cover pain, suffering and loss of amenity (solatium), loss of earnings if you have been unable to work, medical treatment and physiotherapy costs, and future losses if the injury has a long-term impact on your working capacity. The amount depends on the severity and permanence of the injury.",
  },
  {
    question: "What is the time limit for a manual handling injury claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident or the date of knowledge. For gradually developing conditions, the three years runs from when you knew or ought to have known that the condition was work-related. Do not delay — seek legal advice promptly.",
  },
];

export default function ManualHandlingPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/manual-handling-injury-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Manual Handling Injury Claims Scotland" },
      ]}
      h1="Manual Handling Injury Claims Scotland"
      intro="Manual handling injuries — including back injuries, hernias and musculoskeletal conditions caused by lifting, carrying, pushing or pulling — are among the most common workplace injuries in Scotland. If your employer failed to comply with their duties under the Manual Handling Operations Regulations 1992, you may be entitled to compensation."
      tldr={[
        "Employers must avoid, assess and reduce manual handling risks under the MHOR 1992.",
        "Back injuries, hernias and shoulder injuries are common manual handling claims.",
        "Gradually developing conditions carry a three-year time limit from date of knowledge.",
        "Contributory negligence may reduce but not necessarily bar your claim.",
        "Free enquiry — no win no fee available for eligible manual handling claims.",
      ]}
      answerBox="In Scotland, if you have been injured through manual handling at work — whether a single incident or a gradually developing condition — your employer may be liable if they failed to comply with the Manual Handling Operations Regulations 1992. The time limit is generally three years from the accident or date of knowledge. A free enquiry will assess your circumstances."
      sections={[
        {
          heading: "What Are Manual Handling Injuries?",
          content:
            "Manual handling covers any transporting or supporting of a load by bodily force — including lifting, putting down, pushing, pulling, carrying and moving. Injuries arise from single incidents (such as lifting a heavy object incorrectly) and from cumulative handling over time. Common injuries include lumbar spine injuries, disc prolapse, hernias, rotator cuff injuries, and repetitive strain injuries.",
        },
        {
          heading: "Employer Duties — Manual Handling Operations Regulations 1992",
          content:
            "The Manual Handling Operations Regulations 1992 (MHOR) impose a three-stage hierarchy of duties on employers:",
          list: [
            "Avoid the need for hazardous manual handling so far as reasonably practicable — for example, by using mechanical handling equipment",
            "Assess the risk from any hazardous manual handling that cannot be avoided",
            "Reduce the risk of injury from that handling to the lowest level reasonably practicable — for example, by providing trolleys, hoists or team lifting",
          ],
        },
        {
          heading: "Common Manual Handling Claim Scenarios",
          content:
            "Manual handling claims arise across many sectors in Scotland, including:",
          list: [
            "Healthcare workers — patient handling, hoisting and transfers without adequate equipment",
            "Warehouse and logistics — heavy or awkward loads, insufficient mechanical aids",
            "Construction — materials handling on site without appropriate equipment",
            "Retail — stock movement and shelf stacking without proper training",
            "Care homes — resident moving and handling without hoists or adequate staffing",
            "Offshore and oil — restricted space handling without adequate equipment",
          ],
        },
        {
          heading: "Cumulative Manual Handling Injuries",
          content:
            "Many manual handling conditions develop gradually rather than from a single accident. Chronic back conditions, occupational musculoskeletal disorders and soft tissue injuries can all result from repeated handling over months or years. In these cases, the three-year time limit runs from the date of knowledge — typically when you were first told by a doctor that your condition was caused or contributed to by your work.",
        },
        {
          heading: "Evidence in Manual Handling Claims",
          content:
            "Key evidence in manual handling claims includes:",
          list: [
            "Employer's risk assessment records (or evidence of the absence of any assessment)",
            "Training records showing what manual handling training was or was not provided",
            "Mechanical aid records — whether hoists, trolleys or other aids were available",
            "RIDDOR accident reports if the incident was reportable",
            "Medical records documenting the injury and any connection to work",
            "Witness evidence from colleagues who handled the same loads",
          ],
        },
        {
          heading: "What Compensation Can I Claim?",
          content: "Manual handling injury compensation in Scotland can include:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Past and future loss of earnings and pension",
            "Medical treatment and physiotherapy costs",
            "Care and assistance provided by family members",
            "Future care or treatment costs if the condition is long-term",
          ],
        },
      ]}
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "evidence-for-personal-injury-claim-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="manual handling injury claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Manual Handling Operations Regulations 1992 — the governing workplace statute", url: "https://www.legislation.gov.uk/uksi/1992/2793/contents" },
        { label: "HSE — Manual Handling at Work: A Brief Guide", url: "https://www.hse.gov.uk/pubns/indg143.htm" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Construction Accident Claims", href: "/construction-accident-claims-scotland" },
        { label: "Offshore Injury Claims", href: "/offshore-injury-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
