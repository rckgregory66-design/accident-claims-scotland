import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Fall From Height at Work Claims Scotland — Ladders, Scaffolds & Roofs",
  description:
    "Information on falls from height at work in Scotland: the Work at Height Regulations 2005, employer duties, evidence, HSE reporting and time limits.",
  alternates: { canonical: "/work-at-height-fall-claims-scotland" },
  openGraph: {
    title: "Fall From Height at Work Claims Scotland",
    description: "Employer duties under the Work at Height Regulations 2005 and how falls from height claims work in Scotland.",
    url: "/work-at-height-fall-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim if I fell from a ladder, scaffold or roof at work in Scotland?",
    answer:
      "Possibly. Employers must take reasonable care for employee safety, and the Work at Height Regulations 2005 set specific duties for work where a person could fall a distance likely to cause injury. A claim requires proof that a breach of duty caused your injury.",
  },
  {
    question: "What do the Work at Height Regulations require?",
    answer:
      "In summary, employers must avoid work at height where reasonably practicable, use suitable equipment to prevent falls where it cannot be avoided, and minimise the distance and consequences of a fall where the risk cannot be eliminated. Work must be planned, supervised and carried out by competent people. HSE publishes guidance on the details.",
  },
  {
    question: "Does it matter if I was self-employed or an agency worker?",
    answer:
      "Yes, it can. The correct defender depends on who controlled the work and the site. Self-employed workers and agency workers may have claims against a site controller or main contractor rather than the person who paid them. Our self-employed injury page explains the issues.",
  },
  {
    question: "What if I was partly to blame, for example by not using the equipment provided?",
    answer:
      "Compensation can be reduced for contributory negligence, but the employer's own failures, such as inadequate training, supervision or unsafe equipment, still matter. The reduction depends on the facts.",
  },
  {
    question: "Should the fall be reported?",
    answer:
      "Serious workplace injuries must be reported by the employer under RIDDOR. Ask that the accident is recorded in the accident book and keep a copy. A regulatory investigation is separate from a civil claim.",
  },
  {
    question: "How long do I have to claim?",
    answer:
      "The general limitation period is three years from the accident or the date of knowledge under section 17 of the Prescription and Limitation (Scotland) Act 1973. Raising court proceedings stops the clock. Seek advice early to preserve evidence.",
  },
];

export default function WorkAtHeightPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/work-at-height-fall-claims-scotland"
      dateModified="2026-09-20"
      breadcrumbs={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Fall From Height at Work Claims" },
      ]}
      h1="Fall From Height at Work Claims Scotland"
      intro="Falls from ladders, scaffolds, roofs and platforms are among the most serious workplace accidents. This page explains employer duties under the Work at Height Regulations 2005, the evidence that matters and how time limits work in Scotland. It is general information, not legal advice."
      tldr={[
        "Employers have duties under the Work at Height Regulations 2005 and at common law.",
        "The regulations follow a hierarchy: avoid, prevent, then minimise falls.",
        "Report the accident, photograph the equipment and record witnesses.",
        "Self-employed and agency workers may have claims against the site controller.",
        "The general limitation period is three years.",
      ]}
      answerBox="If you were injured in a fall from height at work in Scotland, your employer or the person controlling the site may be liable if they failed to follow the Work at Height Regulations 2005 or otherwise failed to take reasonable care. The regulations require work at height to be avoided where practicable, falls to be prevented, and the consequences minimised. The general time limit is three years."
      sections={[
        {
          heading: "What counts as work at height",
          content:
            "HSE describes work at height as work in any place where, if precautions were not taken, a person could fall a distance liable to cause personal injury. That includes ladders and stepladders, scaffolding, roofs, mobile platforms and fragile surfaces, and can include working near an edge or an opening in a floor.",
        },
        {
          heading: "Employer duties: avoid, prevent, minimise",
          content:
            "The Work at Height Regulations 2005 require duty holders to plan and supervise work at height, use competent people, avoid work at height where they reasonably can, use suitable equipment to prevent falls where they cannot, and reduce the distance and consequences of a fall where the risk remains. Guard rails, safe access, edge protection and suitable inspection of equipment are typical measures. Breach of the regulations can support a civil claim, although the outcome still depends on causation and the facts.",
        },
        {
          heading: "Common causes of falls",
          content: "Typical scenarios include:",
          list: [
            "Ladders used where safer access was practicable, or ladders that were defective or not secured",
            "Scaffolding that was incomplete, unsafe or not inspected",
            "Falls through fragile roofs or roof lights",
            "Unprotected edges, openings or mobile platforms",
            "Inadequate training, supervision or rescue planning",
          ],
        },
        {
          heading: "Evidence to preserve",
          content: "Evidence can disappear quickly after a serious fall. Consider the following:",
          list: [
            "The accident book entry and any employer incident report",
            "Photographs of the equipment, edge protection and location before it is changed",
            "Risk assessments, method statements, training and inspection records",
            "Witness names and contact details",
            "Medical records from the day of the fall onwards",
            "Wage records and details of time off work",
          ],
        },
        {
          heading: "Who can be responsible",
          content:
            "Liability may sit with the direct employer, a main contractor, the occupier of the premises or a scaffolding or equipment supplier, depending on who controlled the work and the equipment. Agency and self-employed workers should identify who controlled the site as early as possible.",
        },
        {
          heading: "Serious and long-term injury",
          content:
            "Falls from height can cause spinal, brain and multiple fracture injuries. In serious cases the claim may involve rehabilitation, care, equipment and long-term loss of earnings, which are covered on our serious injury pages.",
        },
      ]}
      guideSlugs={[
        "accident-at-work-claim-scotland",
        "construction-accident-claims-scotland",
        "serious-injury-rehabilitation-scotland",
      ]}
      locationClaimType="accident at work claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Work at Height Regulations 2005", url: "https://www.legislation.gov.uk/uksi/2005/735/contents" },
        { label: "HSE — Work at height", url: "https://www.hse.gov.uk/work-at-height/index.htm" },
        { label: "HSE — RIDDOR reporting", url: "https://www.hse.gov.uk/riddor/" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Accident at Work Claims Scotland", href: "/accident-at-work-claims-scotland" },
        { label: "Self-Employed Injury Claims", href: "/self-employed-injury-claims-scotland" },
        { label: "Serious Injury Claims Scotland", href: "/serious-injury-claims-scotland" },
        { label: "Manual Handling Injury Claims", href: "/manual-handling-injury-claims-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
