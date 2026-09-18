import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Occupational Asthma Claims Scotland — Work-Induced Asthma Compensation",
  description:
    "Developed asthma through work in Scotland? Information on occupational asthma claims, sensitisers, employer duties and industrial disease compensation. Free enquiry.",
  alternates: { canonical: "/occupational-asthma-claims-scotland" },
  openGraph: {
    title: "Occupational Asthma Claims Scotland — Work-Induced Asthma Compensation",
    description: "Occupational asthma claim in Scotland. Industrial disease compensation — free enquiry.",
    url: "/occupational-asthma-claims-scotland",
  },
};

const faqs = [
  {
    question: "What is occupational asthma and can I claim for it in Scotland?",
    answer:
      "Occupational asthma is asthma caused by inhaling sensitising agents at work. It is distinct from asthma aggravated by workplace conditions (occupational exacerbation of pre-existing asthma). If you developed asthma as a result of exposure to a sensitiser in your workplace, and your employer failed to comply with COSHH regulations and relevant exposure limits, you may have a valid industrial disease claim under Scots law.",
  },
  {
    question: "What jobs and substances cause occupational asthma?",
    answer:
      "Occupational asthma is caused by sensitisers — substances that cause the immune system to sensitise, so that subsequent exposure triggers an asthmatic response. High-risk occupations include: bakers and flour millers (flour and grain dust); healthcare workers (latex, glutaraldehyde); paint sprayers and woodworkers (isocyanates, hardwood dust); laboratory and pharmaceutical workers; welders (welding fume); and hairdressers (persulphate bleaching agents).",
  },
  {
    question: "What is the difference between occupational asthma and work-aggravated asthma?",
    answer:
      "Occupational asthma is caused by workplace sensitisation — the employee did not have asthma before, or had pre-existing asthma that was worsened by occupational sensitisation to a new agent. Work-aggravated asthma exists where a pre-existing asthmatic condition is worsened by general workplace irritants such as dust, cold air or exertion, without sensitisation. Both may give rise to a claim, but occupational asthma claims are typically more straightforward.",
  },
  {
    question: "What do I need to prove for an occupational asthma claim?",
    answer:
      "You must prove: (1) that you were exposed to a known sensitising substance at work; (2) that your employer failed to comply with COSHH regulations to control that exposure; (3) that the exposure caused your asthma (or materially contributed to its development); and (4) that you have suffered loss as a result. Medical evidence from a respiratory physician and occupational hygienist evidence on exposures are typically required.",
  },
  {
    question: "What is the time limit for an occupational asthma claim in Scotland?",
    answer:
      "The general time limit is three years from the date of knowledge — typically when you knew or ought to have known that your asthma was caused by your work. This is often around the date of a respiratory specialist's diagnosis linking the condition to occupational exposure. Seek advice promptly as historical employment and exposure records may not be retained indefinitely.",
  },
  {
    question: "Can I still claim if I no longer work for the employer?",
    answer:
      "Yes. Many occupational asthma claims are brought against former employers. The claim will typically be covered by the employer's employers' liability insurance, which remains in force even after the employer ceases to trade in many cases. Your solicitor will trace the relevant insurer through the Employers' Liability Tracing Office (ELTO) if necessary.",
  },
];

export default function OccupationalAsthmaPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/occupational-asthma-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Industrial Disease Claims Scotland", href: "/industrial-disease-claims-scotland" },
        { label: "Occupational Asthma Claims Scotland" },
      ]}
      h1="Occupational Asthma Claims Scotland"
      intro="Occupational asthma — asthma caused by inhaling sensitising agents at work — is a prescribed industrial disease in the UK. If your asthma was caused or materially contributed to by your employer's failure to control exposure to a sensitising substance, you may be entitled to compensation under Scots law."
      tldr={[
        "Occupational asthma is caused by workplace sensitisers — flour, isocyanates, latex, hardwood dust, welding fume.",
        "Employer must comply with COSHH regulations to control sensitiser exposure.",
        "Time limit: three years from date of knowledge — usually from respiratory specialist diagnosis.",
        "Claims can be brought against current and former employers; insurers are traced if needed.",
        "Free enquiry — no win no fee available for eligible industrial disease claims.",
      ]}
      answerBox="In Scotland, if you developed asthma through workplace exposure to a sensitising substance — and your employer failed to control that exposure under COSHH regulations — you may have an occupational asthma claim. The time limit is three years from when you knew the condition was work-related. A free enquiry will assess your case."
      sections={[
        {
          heading: "What Is Occupational Asthma?",
          content:
            "Occupational asthma is a condition in which the airways become sensitised by a substance inhaled at work. Once sensitised, subsequent exposure to even small quantities of the same substance can trigger an asthmatic response — chest tightness, wheeze, breathlessness and cough. Occupational asthma is listed as a prescribed industrial disease (D7) under the Industrial Injuries Scheme, and a diagnosis can support entitlement to Industrial Injuries Disablement Benefit (IIDB) in addition to a civil claim.",
        },
        {
          heading: "High-Risk Occupations and Sensitisers",
          content: "Occupational asthma claims in Scotland commonly arise from:",
          list: [
            "Bakers and flour mill workers — wheat and grain flour dust",
            "Automotive spray painters — isocyanate-based paints (MDI, TDI, HDI)",
            "Woodworkers — hardwood dust (oak, beech, western red cedar)",
            "Healthcare and laboratory workers — latex, glutaraldehyde, cleaning products",
            "Welders and metalworkers — welding fume, chrome and nickel compounds",
            "Hairdressers — persulphate bleaching agents",
            "Pharmaceutical and food industry workers — enzymes, antibiotics, flour",
          ],
        },
        {
          heading: "Employer Duties — COSHH Regulations",
          content:
            "The Control of Substances Hazardous to Health Regulations 2002 (COSHH) require employers to: assess the risk of exposure to substances hazardous to health; prevent or adequately control exposure; use appropriate engineering controls and respiratory protective equipment (RPE); monitor exposure levels against Workplace Exposure Limits (WELs); carry out health surveillance for workers exposed to known sensitisers; and provide information and training. A failure to comply with these duties that results in occupational asthma can establish liability.",
        },
        {
          heading: "The Role of Medical Evidence",
          content:
            "Occupational asthma claims require expert medical evidence on diagnosis and causation. A chest physician or occupational respiratory specialist will typically review your clinical history, spirometry results, peak flow diary records and immunological tests (specific IgE, skin prick testing). Occupational hygiene evidence of exposure levels in the workplace is also often required to establish the link between the exposure and the condition.",
        },
        {
          heading: "Prescribed Industrial Disease and IIDB",
          content:
            "Occupational asthma is a prescribed industrial disease under the Industrial Injuries Scheme (Prescription D7). If you have been diagnosed with occupational asthma, you may also be entitled to claim Industrial Injuries Disablement Benefit (IIDB) from the Department for Work and Pensions. This is a no-fault benefit and does not require you to prove your employer was negligent. Your solicitor can advise on both the civil claim and the benefits entitlement.",
        },
        {
          heading: "What Compensation Can I Claim?",
          content: "Occupational asthma compensation in Scotland can cover:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Past and future loss of earnings if the condition affects your ability to work",
            "The cost of medication and medical treatment",
            "Cost of retraining if you cannot return to the occupation that caused the condition",
            "Care and assistance from family members",
            "Future losses if the condition is permanent or progressive",
          ],
        },
      ]}
      guideSlugs={[
        "industrial-disease-delayed-symptoms-scotland",
        "asbestos-claims-scotland",
        "noise-induced-hearing-loss-claims-scotland",
      ]}
      locationClaimType="occupational asthma claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Control of Substances Hazardous to Health Regulations 2002 (COSHH)", url: "https://www.legislation.gov.uk/uksi/2002/2677/contents" },
        { label: "HSE — Occupational asthma: work-related asthma and respiratory sensitisation", url: "https://www.hse.gov.uk/asthma/" },
        { label: "DWP — Industrial Injuries Disablement Benefit prescribed diseases", url: "https://www.gov.uk/industrial-injuries-disablement-benefit/what-youll-get" },
      ]}
      related={[
        { label: "Industrial Disease Claims Scotland", href: "/industrial-disease-claims-scotland" },
        { label: "Asbestos Claims Scotland", href: "/asbestos-claims-scotland" },
        { label: "Noise-Induced Hearing Loss Claims", href: "/noise-induced-hearing-loss-claims-scotland" },
        { label: "Vibration White Finger Claims", href: "/vibration-white-finger-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
