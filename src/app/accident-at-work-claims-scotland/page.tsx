import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Accident at Work Claims Scotland | Work Injury Compensation Solicitors",
  description:
    "General information about compensation claims for workplace accidents caused by employer negligence in Scotland.",
  alternates: { canonical: "/accident-at-work-claims-scotland" },
  openGraph: {
    title: "Accident at Work Claims Scotland | Work Injury Compensation Solicitors",
    description: "Injured at work in Scotland? Free enquiry, no win no fee available.",
    url: "/accident-at-work-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim against my employer in Scotland without losing my job?",
    answer:
      "Your employer cannot legally dismiss you or subject you to detriment for making a legitimate personal injury claim. Your claim is handled by your employer's liability insurers — not your employer directly. If you are concerned about job security, speak to your solicitor.",
  },
  {
    question: "What are my employer's legal duties in Scotland?",
    answer:
      "Employers in Scotland must provide a safe working environment, safe equipment, adequate training and supervision, safe systems of work, and must carry out required risk assessments. These duties arise under both common law and health and safety legislation including the Health and Safety at Work etc. Act 1974.",
  },
  {
    question: "What if I was partly to blame for my accident at work?",
    answer:
      "Contributory negligence may reduce the amount of compensation you receive, but does not necessarily prevent you from claiming. The court or insurers will apportion blame between the parties. Your solicitor will assess the likely impact on your claim.",
  },
  {
    question: "Can I claim if I am self-employed?",
    answer:
      "Self-employed workers may have more limited rights. However, if you were working on someone else's premises or under the control of another party, you may still have a valid claim. Each case depends on its own facts.",
  },
  {
    question: "What is the time limit for accident at work claims in Scotland?",
    answer:
      "The general time limit is three years from the date of the accident. For industrial disease claims where symptoms appear later, the three years runs from the date of knowledge. Seek advice promptly.",
  },
];

export default function AccidentAtWorkPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/accident-at-work-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Accident at Work Claims Scotland" }]}
      h1="Accident at Work Claims Scotland"
      intro="If you have been injured at work in Scotland, your employer may be legally responsible for your injuries. Our specialist Scottish solicitors handle workplace accident claims for employees across all industries — from construction and manufacturing to offices and retail — with no win, no fee options available."
      tldr={[
        "Employers in Scotland have a legal duty of care to provide a safe working environment.",
        "You cannot be legally dismissed for making a legitimate workplace injury claim.",
        "Your claim is handled by your employer's liability insurers — not your employer personally.",
        "The general time limit is three years from the date of the accident.",
        "Evidence — accident reports, photographs, witness statements — should be gathered immediately.",
      ]}
      answerBox="In Scotland, you may be able to claim compensation if you were injured at work within the last three years and your employer (or a third party) was negligent. Employers have a legal duty to provide a safe workplace, safe equipment and adequate training. A free enquiry will assess whether you have a viable claim — no obligation to proceed."
      sections={[
        {
          heading: "Your Employer's Legal Duty in Scotland",
          content:
            "Employers in Scotland have a duty of care to their employees under both common law and health and safety legislation. This duty includes providing a safe working environment, safe equipment and machinery, adequate training and supervision, safe systems of work, and carrying out appropriate risk assessments. A breach that causes injury may give rise to a valid workplace accident claim.",
        },
        {
          heading: "Common Workplace Accidents in Scotland",
          content: "We handle claims arising from many types of workplace accident:",
          linkedList: [
            { text: "Falls from height — scaffolding, ladders, elevated platforms", href: "/fall-from-height-claims-scotland" },
            { text: "Manual handling injuries — lifting, carrying, pushing and pulling", href: "/manual-handling-injury-claims-scotland" },
            { text: "Slips, trips and falls — wet floors, poor lighting, uneven surfaces", href: "/slips-trips-at-work-scotland" },
            { text: "Construction and site accidents", href: "/construction-accident-claims-scotland" },
            { text: "Factory and manufacturing accidents", href: "/factory-accident-claims-scotland" },
            { text: "Warehouse accidents", href: "/warehouse-accident-claims-scotland" },
            { text: "Defective tools and equipment claims", href: "/defective-equipment-claims-scotland" },
            { text: "Farm and agricultural accident claims", href: "/farm-accident-claims-scotland" },
            { text: "Offshore and oil platform accident claims", href: "/offshore-accident-claims-scotland" },
          ],
        },
        {
          heading: "Who Can Claim for an Accident at Work in Scotland?",
          content: "You may be able to claim if:",
          list: [
            "You were employed at the time of the accident",
            "The accident occurred within the last three years",
            "Your employer (or a third party) was negligent or in breach of health and safety duties",
            "You suffered a physical or psychological injury as a result",
          ],
        },
        {
          heading: "What Evidence Do You Need?",
          content: "Useful evidence for a workplace accident claim includes:",
          list: [
            "Accident report form — report to your employer and obtain a copy of the accident book entry",
            "Photographs of the accident scene, your injuries and any defective equipment",
            "Witness details and statements from colleagues",
            "Medical records from your GP, hospital or occupational health provider",
            "Payslips and employment records for wage loss calculations",
            "Health and safety risk assessments and training records",
          ],
        },
        {
          heading: "What Compensation Can You Claim?",
          content: "Workplace accident compensation in Scotland can cover:",
          list: [
            "Pain, suffering and loss of amenity (solatium)",
            "Past loss of earnings while unable to work",
            "Future loss of earnings if your injury affects your long-term earning capacity",
            "Medical treatment and rehabilitation costs",
            "Care and assistance provided by family members",
            "Travel costs to medical appointments",
          ],
        },
        {
          heading: "Reporting Your Accident at Work",
          content:
            "You should report your accident to your employer and ensure it is entered in the accident book as soon as possible. Certain accidents must also be reported to the Health and Safety Executive (HSE) under RIDDOR regulations. A contemporaneous record is strong evidence. Not reporting an accident does not prevent you from claiming, but it does affect the strength of your case.",
        },
      ]}
      subpages={{
        title: "Specialist Workplace Accident Claim Types",
        pages: [
          { label: "Construction Accident Claims", href: "/construction-accident-claims-scotland", desc: "Site accidents, scaffolding, plant" },
          { label: "Fall from Height Claims", href: "/fall-from-height-claims-scotland", desc: "Scaffolding, ladders, platforms" },
          { label: "Manual Handling Claims", href: "/manual-handling-injury-claims-scotland", desc: "Lifting, carrying, back injuries" },
          { label: "Slips and Trips at Work", href: "/slips-trips-at-work-scotland", desc: "Wet floors, uneven surfaces" },
          { label: "Factory Accident Claims", href: "/factory-accident-claims-scotland", desc: "Machinery, manufacturing injuries" },
          { label: "Warehouse Accident Claims", href: "/warehouse-accident-claims-scotland", desc: "Forklift, racking, picking injuries" },
          { label: "Defective Equipment Claims", href: "/defective-equipment-claims-scotland", desc: "Faulty tools and machinery" },
          { label: "Farm Accident Claims", href: "/farm-accident-claims-scotland", desc: "Agricultural and rural accidents" },
          { label: "Offshore Accident Claims", href: "/offshore-accident-claims-scotland", desc: "Oil platforms, supply vessels" },
          { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland", desc: "Asbestos, hearing loss, vibration" },
        ],
      }}
      guideCategory="Workplace Accidents"
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "construction-accident-claims-scotland",
        "offshore-injury-claims-scotland",
        "evidence-for-personal-injury-claim-scotland",
      ]}
      locationClaimType="accident at work claims"
      faqs={faqs}
      related={[
        { label: "Industrial Disease Claims", href: "/industrial-disease-claims-scotland" },
        { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
