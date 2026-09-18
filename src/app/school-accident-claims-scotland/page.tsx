import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "School Accident Claims Scotland — Child Injury Compensation",
  description:
    "Child injured at school in Scotland? Information on school accident claims, duty of care, playground injuries, sports injuries and claiming on behalf of a child. Free enquiry.",
  alternates: { canonical: "/school-accident-claims-scotland" },
  openGraph: {
    title: "School Accident Claims Scotland — Child Injury Compensation",
    description: "School accident claim for a child in Scotland. Playground, sports and classroom injuries. Free enquiry.",
    url: "/school-accident-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation if my child was injured at school in Scotland?",
    answer:
      "Yes. Schools — whether local authority maintained schools or independent schools — owe pupils a duty of care. Where a child is injured because of inadequate supervision, a defective or unsafe environment, or a failure to take reasonable precautions, a claim may be brought against the school or the local authority. As a parent or guardian, you can bring the claim on behalf of your child.",
  },
  {
    question: "What is the time limit for a school accident claim for a child in Scotland?",
    answer:
      "In Scotland, the limitation period for personal injury claims does not generally run until the child reaches the age of 16. This means that a claim can be brought by the child themselves up to their 19th birthday. However, a parent or guardian can bring a claim on behalf of a child at any time before that. It is advisable to act early to preserve evidence, witness recollections and school records.",
  },
  {
    question: "Who is responsible for a school accident — the school or the council?",
    answer:
      "For local authority schools in Scotland, the local authority (council) is typically the occupier and employer of the teaching and support staff. Claims are therefore usually brought against the local authority. For independent schools, the claim is against the school. Your solicitor will identify the correct defender based on the facts of the accident.",
  },
  {
    question: "Can I claim for a playground injury in Scotland?",
    answer:
      "Yes. Playground injuries can give rise to claims where: the playground equipment was defective or inadequately maintained; the playground surface was unsuitable or in disrepair; supervision was inadequate; or a foreseeable hazard was not addressed. Not every accident during play is actionable — schools are not expected to eliminate all risk — but a failure to take reasonable precautions can found a claim.",
  },
  {
    question: "Can I claim for a sports injury at school?",
    answer:
      "Yes, in some cases. Schools owe a duty to properly supervise sports activities, ensure equipment is safe, and teach activities safely within their competence. A sports injury claim can succeed where: inadequate supervision allowed foreseeable harm; equipment was defective; an activity was beyond the reasonable competence of the supervising teacher; or safety guidance from sport governing bodies was not followed.",
  },
  {
    question: "What compensation can be claimed for a school accident?",
    answer:
      "Compensation can include: solatium for the child's pain, suffering and loss of amenity; the cost of medical treatment and therapy; losses suffered by parents (such as taking time off work to care for the child); and future losses if the injury has a long-term impact on the child's health, development or future earning capacity.",
  },
];

export default function SchoolAccidentPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/school-accident-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "School Accident Claims Scotland" },
      ]}
      h1="School Accident Claims Scotland"
      intro="Schools in Scotland owe pupils a duty of care during the school day, on trips and in extracurricular activities. If your child has been injured at school because of inadequate supervision, a defective environment or a failure to take reasonable precautions, you may be able to claim compensation on their behalf."
      tldr={[
        "Schools owe pupils a duty of care — claims are typically against the local authority.",
        "Children's limitation period does not run until age 16; claims can be brought until age 19.",
        "Playground, sports, classroom and school trip injuries can all give rise to claims.",
        "Early action preserves school records, inspection reports and witness evidence.",
        "Parents or guardians can bring the claim on behalf of a child at any age.",
      ]}
      answerBox="In Scotland, schools and local authorities owe pupils a duty of care. If your child was injured due to inadequate supervision, defective equipment or a failure to take reasonable precautions, you can make a claim on their behalf. The time limit does not run until the child turns 16 — but early action is important to preserve evidence. A free enquiry will assess your circumstances."
      sections={[
        {
          heading: "The School's Duty of Care in Scotland",
          content:
            "Schools in Scotland owe pupils a duty of care both as occupiers of premises (under the Occupiers' Liability (Scotland) Act 1960) and as supervisors of children in their care. The standard expected is that of a careful parent — or, more accurately in a professional context, a reasonably careful and competent teacher or supervisor. The duty applies not only within the school building but on school grounds, on organised school trips, at sports events and in extracurricular activities.",
        },
        {
          heading: "Types of School Accident Claim in Scotland",
          content: "School accident claims commonly involve:",
          list: [
            "Playground injuries — defective equipment, unsuitable surfaces, inadequate supervision",
            "Sports and PE injuries — inadequate supervision, defective equipment, inappropriate activity",
            "Classroom injuries — defective furniture, dangerous materials, science lab accidents",
            "School trip accidents — inadequate planning, supervision or safety assessment",
            "Corridor and staircase accidents — defective flooring, inadequate lighting",
            "Bullying-related injuries — where the school failed to address known bullying",
          ],
        },
        {
          heading: "Time Limits for Children — Scotland",
          content:
            "In Scotland, the three-year limitation period for personal injury claims does not generally begin to run until the claimant reaches the age of 16. This means a child injured at school retains the right to bring a claim until their 19th birthday. However, a parent or guardian can bring a claim on behalf of the child at any time — and doing so promptly is strongly advised, as evidence and school records may not be retained indefinitely.",
        },
        {
          heading: "Local Authority Liability",
          content:
            "For local authority (council-run) schools, the local authority is responsible as both the employer of teaching staff and the occupier of school premises. Claims are brought against the local authority. Councils have significant resources for investigating and defending claims. Prompt instruction of a solicitor ensures that evidence — incident reports, RIDDOR records, maintenance logs and CCTV — is preserved before it becomes unavailable.",
        },
        {
          heading: "Playground Safety and Equipment Standards",
          content:
            "Playground equipment in Scottish schools should comply with BS EN 1176 (playground equipment standards) and BS EN 1177 (impact-attenuating surfaces). A failure to maintain equipment to these standards, or to carry out required inspections, can establish both breach of duty and foreseeability of harm. Inspection records showing known defects that went unrepaired are particularly damaging to a school's defence.",
        },
        {
          heading: "What Compensation Can Be Claimed?",
          content: "School accident compensation in Scotland can include:",
          list: [
            "Solatium — the child's pain, suffering and loss of amenity",
            "Medical treatment, physiotherapy and specialist review costs",
            "Parental losses — time taken from work to care for the child during recovery",
            "Future losses if the injury has a long-term impact on health, education or earning capacity",
            "Tutoring or educational support costs if schooling was disrupted",
          ],
        },
      ]}
      guideSlugs={[
        "slip-trip-fall-claims-scotland",
        "evidence-for-personal-injury-claim-scotland",
        "can-i-claim-if-partly-at-fault-scotland",
      ]}
      locationClaimType="school accident claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Occupiers' Liability (Scotland) Act 1960 — premises duty of care", url: "https://www.legislation.gov.uk/ukpga/1960/30/contents" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits including for children", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
        { label: "BS EN 1176 — playground equipment safety standards", url: "https://www.bsigroup.com/en-GB/standards/bs-en-1176/" },
      ]}
      related={[
        { label: "Public Place Accident Claims Scotland", href: "/public-place-accident-claims-scotland" },
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "Criminal Injury Compensation", href: "/criminal-injury-compensation-scotland" },
      ]}
    />
  );
}
