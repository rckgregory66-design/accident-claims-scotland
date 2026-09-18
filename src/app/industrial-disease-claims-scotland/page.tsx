import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Industrial Disease Claims Scotland — Occupational Illness Compensation",
  description:
    "Work-related illness claims in Scotland: asbestos, mesothelioma, industrial deafness, vibration white finger, COPD. Time limit runs from diagnosis — free enquiry, no obligation.",
  alternates: { canonical: "/industrial-disease-claims-scotland" },
  openGraph: {
    title: "Industrial Disease Claims Scotland — Occupational Illness Compensation",
    description: "Work-related illness claims in Scotland. Free enquiry, no win no fee available.",
    url: "/industrial-disease-claims-scotland",
  },
};

const faqs = [
  {
    question: "What is an industrial disease claim?",
    answer:
      "An industrial disease claim is a personal injury claim for a medical condition caused or materially worsened by exposure to harmful conditions at work — such as asbestos, excessive noise or vibrating tools. Because many industrial diseases develop over years, time limits run from the date of knowledge rather than the date of exposure.",
  },
  {
    question: "Can I still claim if I was exposed to asbestos many years ago?",
    answer:
      "Yes. In Scotland, the three-year time limit for asbestos disease claims runs from the date you were diagnosed or became aware your illness was caused by workplace asbestos exposure — not from the date of exposure. Claims can be made decades after the original exposure.",
  },
  {
    question: "Can I claim if the employer is no longer trading?",
    answer:
      "Yes in many cases. Your former employer was legally required to hold employers' liability insurance. Even if the company no longer exists, the insurer can often be traced and the claim brought against them. Specialist tracing services assist with this.",
  },
  {
    question: "What is the time limit for industrial disease claims in Scotland?",
    answer:
      "The three-year period runs from the date of knowledge — when you first knew your illness was caused by your working conditions, usually the date of diagnosis. The rules are complex; seek advice promptly.",
  },
  {
    question: "Can I claim for noise-induced hearing loss from decades ago?",
    answer:
      "Yes. The date of knowledge for industrial deafness claims is when you were diagnosed with noise-induced hearing loss caused by your workplace — not when the noise exposure occurred. Recent diagnosis can still be within the time limit.",
  },
];

export default function IndustrialDiseasePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/industrial-disease-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Industrial Disease Claims Scotland" }]}
      h1="Industrial Disease Claims Scotland"
      intro="If you have developed a work-related illness in Scotland, you may be entitled to claim compensation from your former employer — even if the exposure occurred decades ago. Our specialist solicitors handle industrial disease claims including asbestos-related conditions, noise-induced hearing loss, vibration injuries and occupational lung disease."
      tldr={[
        "Industrial disease claims can be made even if your condition developed decades after workplace exposure.",
        "The three-year time limit runs from your date of knowledge — usually the date of diagnosis.",
        "Claims can often be made against former employers who no longer exist via their liability insurers.",
        "Expert medical and occupational hygiene evidence is essential.",
        "Scotland's rules on date of knowledge give more flexibility than pure accident time limits.",
      ]}
      answerBox="In Scotland, industrial disease claims can be made even if your condition developed years or decades after exposure. The three-year time limit runs from your date of knowledge — usually the date of diagnosis or when you became aware your illness was work-related. A free enquiry will assess your circumstances — no obligation."
      sections={[
        {
          heading: "What is an Industrial Disease?",
          content:
            "An industrial disease is a medical condition caused or materially worsened by exposure to harmful substances, conditions or practices in the workplace. Unlike traumatic accidents, industrial diseases often develop slowly over many years. Common examples include asbestos-related diseases, noise-induced hearing loss, vibration-related conditions, and occupational lung diseases.",
        },
        {
          heading: "Industrial Diseases We Handle in Scotland",
          content: "We handle claims for a wide range of occupational diseases:",
          linkedList: [
            { text: "Mesothelioma claims — aggressive cancer caused by asbestos exposure", href: "/mesothelioma-claims-scotland" },
            { text: "Asbestosis claims — chronic lung scarring caused by asbestos fibres", href: "/asbestosis-claims-scotland" },
            { text: "Asbestos claims — all asbestos-related conditions", href: "/asbestos-claims-scotland" },
            { text: "Pleural thickening and pleural plaques — asbestos-related lung lining conditions", href: "/pleural-thickening-claims-scotland" },
            { text: "Noise-induced hearing loss claims — from excessive workplace noise", href: "/noise-induced-hearing-loss-claims-scotland" },
            { text: "Industrial deafness claims — occupational hearing damage", href: "/industrial-deafness-claims-scotland" },
            { text: "Hand-arm vibration syndrome (HAVS) claims", href: "/hand-arm-vibration-claims-scotland" },
            { text: "Vibration white finger claims — vascular finger disorder from vibrating tools", href: "/vibration-white-finger-claims-scotland" },
            { text: "Occupational asthma claims", href: "/occupational-asthma-claims-scotland" },
            { text: "Occupational dermatitis claims", href: "/occupational-dermatitis-claims-scotland" },
            { text: "Repetitive strain injury (RSI) claims", href: "/repetitive-strain-injury-claims-scotland" },
          ],
        },
        {
          heading: "The Date of Knowledge — How Time Limits Work",
          content:
            "The most important concept in industrial disease claims is the date of knowledge. The three-year period runs from the date when you first knew — or ought reasonably to have known — that your condition was significant, that it was caused by your working conditions, and who was responsible. In practice this is usually the date of formal diagnosis, meaning claims can be made many years after the original exposure.",
        },
        {
          heading: "Claiming Against Former Employers",
          content:
            "Many industrial disease claims involve former employers who may have ceased trading, merged, or dissolved. Employers were legally required to hold employers' liability insurance. Even if the company no longer exists, specialist tracing services can locate historic insurers. There are also government compensation schemes for certain conditions such as coal-related respiratory disease.",
        },
        {
          heading: "Evidence Required for Industrial Disease Claims",
          content: "Evidence that supports an industrial disease claim includes:",
          list: [
            "Medical diagnosis and specialist reports confirming the condition",
            "Employment history — where and when you worked and what you were exposed to",
            "Witness statements from former colleagues confirming working conditions",
            "Expert occupational medicine and occupational hygiene evidence",
            "Historical records showing the presence of asbestos, noise levels or other hazards",
          ],
        },
        {
          heading: "Compensation for Industrial Disease in Scotland",
          content:
            "Compensation can cover pain, suffering and loss of amenity (solatium), loss of earnings (past and future), medical treatment and care costs, travel expenses, and — in fatal cases — loss of dependency and loss of society awards for the family.",
        },
      ]}
      subpages={{
        title: "Specialist Industrial Disease Claim Types",
        pages: [
          { label: "Asbestos Claims", href: "/asbestos-claims-scotland", desc: "All asbestos-related conditions" },
          { label: "Mesothelioma Claims", href: "/mesothelioma-claims-scotland", desc: "Asbestos cancer claims" },
          { label: "Asbestosis Claims", href: "/asbestosis-claims-scotland", desc: "Chronic lung scarring" },
          { label: "Pleural Thickening", href: "/pleural-thickening-claims-scotland", desc: "Lung lining thickening" },
          { label: "Industrial Deafness", href: "/industrial-deafness-claims-scotland", desc: "Occupational hearing loss" },
          { label: "Noise-Induced Hearing Loss", href: "/noise-induced-hearing-loss-claims-scotland", desc: "Excessive workplace noise" },
          { label: "Vibration White Finger", href: "/vibration-white-finger-claims-scotland", desc: "HAVS vascular disorder" },
          { label: "Hand-Arm Vibration (HAVS)", href: "/hand-arm-vibration-claims-scotland", desc: "Vibrating tools injuries" },
          { label: "Occupational Asthma", href: "/occupational-asthma-claims-scotland", desc: "Work-related asthma" },
          { label: "Occupational Dermatitis", href: "/occupational-dermatitis-claims-scotland", desc: "Workplace skin conditions" },
          { label: "RSI Claims", href: "/repetitive-strain-injury-claims-scotland", desc: "Repetitive upper limb disorders" },
        ],
      }}
      guideCategory="Industrial Disease"
      guideSlugs={[
        "industrial-disease-delayed-symptoms-scotland",
        "asbestos-claims-scotland",
        "noise-induced-hearing-loss-claims-scotland",
        "vibration-white-finger-claims-scotland",
      ]}
      locationClaimType="industrial disease claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Health and Safety Executive — industrial disease and occupational illness information", url: "https://www.hse.gov.uk/index.htm" },
        { label: "Industrial Injuries Disablement Benefit — GOV.UK", url: "https://www.gov.uk/industrial-injuries-disablement-benefit" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — date of knowledge and time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Accident at Work Claims", href: "/accident-at-work-claims-scotland" },
        { label: "Time Limits Scotland", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
