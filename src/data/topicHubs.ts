export interface TopicLink {
  label: string;
  href: string;
  description: string;
}

export const CORE_CLAIM_LINKS: TopicLink[] = [
  {
    label: "Personal injury claims in Scotland",
    href: "/personal-injury-claims-scotland",
    description: "Eligibility, fault, evidence and the main civil-claims framework.",
  },
  {
    label: "How the claims process works",
    href: "/how-to-claim-compensation-scotland",
    description: "From an initial enquiry and evidence gathering to settlement or court proceedings.",
  },
  {
    label: "Personal injury time limits",
    href: "/personal-injury-claim-time-limits-scotland",
    description: "The general three-year framework, date of knowledge and important exceptions.",
  },
  {
    label: "No win, no fee in Scotland",
    href: "/no-win-no-fee-solicitors-scotland",
    description: "Funding terminology, possible deductions and questions to ask before signing.",
  },
  {
    label: "Personal injury compensation",
    href: "/personal-injury-compensation-scotland",
    description: "How injury, financial loss, care and future needs may affect valuation.",
  },
];

export const CATEGORY_HUBS: Record<string, TopicLink> = {
  "General Advice": CORE_CLAIM_LINKS[0],
  Compensation: CORE_CLAIM_LINKS[4],
  "Funding & Costs": CORE_CLAIM_LINKS[3],
  "Road Accidents": {
    label: "Road traffic accident claims",
    href: "/road-traffic-accident-claims-scotland",
    description: "The main guide to car, motorcycle, cycling, pedestrian and passenger claims.",
  },
  "Workplace Accidents": {
    label: "Accident at work claims",
    href: "/accident-at-work-claims-scotland",
    description: "Employer fault, workplace evidence and common work-accident scenarios.",
  },
  "Medical Negligence": {
    label: "Medical negligence claims",
    href: "/medical-negligence-claims-scotland",
    description: "Breach of duty, causation, expert evidence and claims involving NHS or private care.",
  },
  "Industrial Disease": {
    label: "Industrial disease claims",
    href: "/industrial-disease-claims-scotland",
    description: "Occupational exposure, delayed symptoms, historic employers and date of knowledge.",
  },
  "Serious Injury": {
    label: "Serious injury claims",
    href: "/serious-injury-claims-scotland",
    description: "Rehabilitation, future needs and complex claims involving life-changing injury.",
  },
  "Public Place Accidents": {
    label: "Public place accident claims",
    href: "/public-place-accident-claims-scotland",
    description: "Occupiers, councils, slips, trips and the evidence needed after a public-place accident.",
  },
  "Criminal Injuries": {
    label: "Criminal injury compensation claims",
    href: "/criminal-injury-compensation-scotland",
    description: "CICA applications, tariff awards, eligibility and the criminal injuries compensation scheme.",
  },
};
