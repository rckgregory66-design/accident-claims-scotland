import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Occupational Dermatitis Claims Scotland — Skin Disease at Work Compensation",
  description:
    "Developed occupational dermatitis or contact dermatitis through work in Scotland? Information on industrial skin disease claims, COSHH duties and compensation. Free enquiry.",
  alternates: { canonical: "/occupational-dermatitis-claims-scotland" },
  openGraph: {
    title: "Occupational Dermatitis Claims Scotland — Skin Disease at Work Compensation",
    description: "Occupational skin disease claim in Scotland. Contact dermatitis, industrial disease. Free enquiry.",
    url: "/occupational-dermatitis-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim for occupational dermatitis in Scotland?",
    answer:
      "Yes. Occupational dermatitis — contact dermatitis caused by substances at work — is a prescribed industrial disease in the UK. If your dermatitis was caused by workplace exposure to irritants or allergens, and your employer failed to comply with COSHH regulations, you may have a valid claim for compensation under Scots law.",
  },
  {
    question: "What is the difference between irritant and allergic contact dermatitis?",
    answer:
      "Irritant contact dermatitis (ICD) is caused by repeated skin contact with irritating substances — such as wet work, detergents, oils and solvents — that damage the skin barrier directly. Allergic contact dermatitis (ACD) is an immune-mediated reaction caused by sensitisation to an allergen — such as nickel, chromate, rubber additives (latex) or certain preservatives. Both forms are compensable in occupational disease claims.",
  },
  {
    question: "What jobs cause occupational dermatitis?",
    answer:
      "High-risk occupations include: hairdressers (dyes, bleaches, shampoos); healthcare workers (latex, antiseptics, cleaning products); construction workers (wet cement and chromate); catering and food industry workers (wet work, food substances); mechanics and engineers (metalworking fluids, oils, solvents); printing industry workers (inks and resins); and cleaning and domestic work (wet work, detergents).",
  },
  {
    question: "What must I prove to win an occupational dermatitis claim?",
    answer:
      "You must establish: (1) that you were exposed to an irritant or allergen at work; (2) that your employer failed to comply with COSHH regulations to control that exposure; (3) that the exposure caused or materially contributed to your dermatitis; and (4) that you have suffered harm as a result. A dermatologist or occupational physician is typically instructed to provide expert evidence on diagnosis and causation.",
  },
  {
    question: "What is the time limit for an occupational dermatitis claim in Scotland?",
    answer:
      "The general time limit is three years from the date of knowledge — typically when you knew or ought to have known that your skin condition was caused by your work. This is often around the date of a dermatologist's or occupational physician's diagnosis identifying the occupational cause. Act promptly as workplace exposure records may not be retained indefinitely.",
  },
  {
    question: "Can I claim if the condition has cleared up?",
    answer:
      "Yes. Even if your dermatitis improved after leaving the job or avoiding the allergen, you can still claim for the period of suffering and any lasting sensitisation. Once sensitised to an allergen, even brief exposures can trigger a response — and the ongoing need to avoid exposure may affect employment prospects, which is a recoverable loss.",
  },
];

export default function OccupationalDermatitisPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/occupational-dermatitis-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Industrial Disease Claims Scotland", href: "/industrial-disease-claims-scotland" },
        { label: "Occupational Dermatitis Claims Scotland" },
      ]}
      h1="Occupational Dermatitis Claims Scotland"
      intro="Occupational contact dermatitis — skin inflammation caused by workplace irritants or allergens — is a prescribed industrial disease and one of the most common occupational conditions in Scotland. If your employer failed to comply with COSHH regulations to protect your skin, you may be entitled to compensation."
      tldr={[
        "Occupational dermatitis is a prescribed industrial disease — both irritant and allergic types are claimable.",
        "Employers must assess and control skin exposure under COSHH 2002.",
        "High-risk jobs: hairdressing, healthcare, construction, catering, engineering.",
        "Time limit: three years from when you knew the condition was work-related.",
        "Sensitisation can cause permanent employment restrictions — future loss is recoverable.",
      ]}
      answerBox="In Scotland, if you developed occupational dermatitis through exposure to irritants or allergens at work, and your employer failed their COSHH duty to protect your skin, you may claim compensation. The time limit is three years from your date of knowledge. A free enquiry will assess your circumstances — no obligation."
      sections={[
        {
          heading: "Types of Occupational Dermatitis",
          content:
            "Occupational contact dermatitis has two main forms. Irritant contact dermatitis (ICD) is more common and arises from repeated skin contact with substances that damage the skin's protective barrier — including wet work (regular hand washing, immersion in water), detergents, oils, solvents and cement. Allergic contact dermatitis (ACD) is an immune-mediated reaction that develops after sensitisation to an allergen. Once sensitised, even trace exposures can trigger a reaction. Both forms are prescribed industrial diseases (D5 under the Industrial Injuries Scheme).",
        },
        {
          heading: "High-Risk Occupations in Scotland",
          content: "Occupational dermatitis claims in Scotland commonly arise from:",
          list: [
            "Hairdressers — dyes (paraphenylenediamine), bleaching agents, wet work",
            "Healthcare workers — latex, disinfectants, cleaning products",
            "Construction workers — wet cement (chromate sensitisation), solvents, resins",
            "Catering and food workers — sustained wet work, food substances",
            "Mechanics and engineers — metalworking fluids, cutting oils, degreasers",
            "Printing and graphic arts — inks, UV-curable resins",
            "Cleaning workers — wet work, detergents and biocides",
          ],
        },
        {
          heading: "Employer Duties — COSHH and Skin Surveillance",
          content:
            "The Control of Substances Hazardous to Health Regulations 2002 (COSHH) require employers to assess and control exposure to substances that may cause skin conditions. The HSE publishes industry-specific guidance including its COSHH essentials for hairdressers, healthcare, construction and catering. Employers in high-risk industries must also carry out health surveillance — regular skin checks — where there is a significant risk. Failure to comply with these duties that results in dermatitis can found a claim.",
        },
        {
          heading: "The Consequence of Sensitisation",
          content:
            "Allergic contact dermatitis can have long-term career consequences. Once an employee is sensitised to an allergen — such as chromate in cement or hair dye chemicals — they must avoid future exposure to prevent further reactions. This may make them unable to continue in their previous role or industry, with significant implications for future earnings. Future loss of earnings is recoverable in an occupational dermatitis claim and is calculated by reference to the claimant's career trajectory but for the sensitisation.",
        },
        {
          heading: "Prescribed Industrial Disease and IIDB",
          content:
            "Occupational dermatitis (non-infective) is a prescribed industrial disease (D5) under the Industrial Injuries Scheme. A diagnosis from a specialist may entitle you to Industrial Injuries Disablement Benefit (IIDB) — a no-fault benefit that does not require proof of employer negligence. Your solicitor can advise on both the civil claim and the benefits position.",
        },
        {
          heading: "What Compensation Can I Claim?",
          content: "Occupational dermatitis compensation in Scotland can include:",
          list: [
            "Solatium — pain, suffering and loss of amenity during the period of the condition",
            "Past and future loss of earnings — including career change costs arising from sensitisation",
            "Medical treatment costs — dermatology appointments, prescription costs",
            "Care and assistance from family members",
            "Retraining costs if you cannot return to the occupation that caused the condition",
          ],
        },
      ]}
      guideSlugs={[
        "industrial-disease-delayed-symptoms-scotland",
        "vibration-white-finger-claims-scotland",
        "noise-induced-hearing-loss-claims-scotland",
      ]}
      locationClaimType="occupational dermatitis claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Control of Substances Hazardous to Health Regulations 2002 (COSHH)", url: "https://www.legislation.gov.uk/uksi/2002/2677/contents" },
        { label: "HSE — Skin at work: occupational contact dermatitis", url: "https://www.hse.gov.uk/skin/index.htm" },
        { label: "DWP — Industrial Injuries Disablement Benefit — prescribed diseases", url: "https://www.gov.uk/industrial-injuries-disablement-benefit/what-youll-get" },
      ]}
      related={[
        { label: "Industrial Disease Claims Scotland", href: "/industrial-disease-claims-scotland" },
        { label: "Occupational Asthma Claims", href: "/occupational-asthma-claims-scotland" },
        { label: "Vibration White Finger Claims", href: "/vibration-white-finger-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
