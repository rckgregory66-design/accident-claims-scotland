import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Personal Injury Compensation Scotland | How Much Is My Claim Worth?",
  description:
    "Understand what personal injury compensation covers in Scotland. General damages, wage loss, medical costs, care needs and more. No guarantee of amount — free honest assessment.",
  alternates: { canonical: "/personal-injury-compensation-scotland" },
  openGraph: {
    title: "Personal Injury Compensation Scotland | How Much Is My Claim Worth?",
    description: "What personal injury compensation covers in Scotland. Honest assessment — free enquiry.",
    url: "/personal-injury-compensation-scotland",
  },
};

const faqs = [
  {
    question: "How much compensation will I get for my injury in Scotland?",
    answer:
      "There is no fixed tariff for personal injury compensation in Scotland. The amount depends on the nature and severity of your injuries, the impact on your life, your financial losses and your future needs. Scottish courts use the Judicial College Guidelines and judicial precedent as reference points but ultimately assess each case on its own facts. Your solicitor will give you an honest estimate based on the evidence in your case.",
  },
  {
    question: "What is solatium?",
    answer:
      "Solatium is the Scottish legal term for the element of compensation that covers pain, suffering and loss of amenity — the non-financial impact of your injury on your quality of life. It is assessed by reference to the nature and severity of your injuries, the duration of your recovery and the impact on your day-to-day activities.",
  },
  {
    question: "Can I claim for future losses?",
    answer:
      "Yes. If your injury affects your ability to work in the future, or if you will need ongoing care, treatment or adapted accommodation, these future losses can be claimed. Future losses are typically calculated using actuarial tables (the Ogden Tables) to convert future annual losses into a lump sum.",
  },
  {
    question: "What is provisional damages?",
    answer:
      "Provisional damages can be awarded in Scotland where there is a risk that your condition may deteriorate in the future — for example, if you have suffered an asbestos-related condition and there is a risk of developing mesothelioma. A provisional award allows you to return to court to claim further compensation if that deterioration occurs.",
  },
  {
    question: "Can I claim for care provided by a family member?",
    answer:
      "Yes. If a family member has given up time to care for you as a result of your injury, you can claim the value of that care as part of your compensation. This is assessed at a reasonable hourly rate for the services provided, and can cover both past care and future care needs.",
  },
];

export default function CompensationGuidePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/personal-injury-compensation-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Personal Injury Compensation Scotland" }]}
      h1="Personal Injury Compensation Scotland: What Can You Claim?"
      intro="This guide explains what personal injury compensation can cover in Scotland, how it is calculated and what factors affect the amount you may receive. Every case is different — this guide is for information only and does not guarantee any particular outcome."
      tldr={[
        "Compensation splits into solatium (pain and suffering) and special damages (financial losses).",
        "Solatium is assessed using the Judicial College Guidelines and Scottish judicial precedent.",
        "Future losses — including loss of earnings and care — are calculated using the Ogden Tables.",
        "Provisional damages preserve your right to return to court if your condition worsens.",
        "Contributory negligence reduces but does not bar your compensation claim.",
      ]}
      answerBox="In Scotland, personal injury compensation covers two main categories: general damages (solatium) for pain, suffering and loss of amenity; and special damages for your financial losses. The total amount depends entirely on the facts of your case, the nature of your injuries, the evidence available and applicable legal principles. Your solicitor will give you an honest assessment — we do not promise or guarantee any specific outcome."
      sections={[
        {
          heading: "General Damages: Solatium",
          content:
            "Solatium — the Scottish legal term for general damages — compensates you for the pain, suffering and loss of amenity caused by your injury. It is the non-financial element of your compensation, reflecting how your injury has affected your life, your independence, your relationships and your enjoyment of activities. Scottish courts and solicitors use the Judicial College Guidelines (formerly the JSB Guidelines) as reference points for valuing different types and severities of injury, alongside Scottish judicial precedent.",
        },
        {
          heading: "Special Damages: Your Financial Losses",
          content:
            "Special damages cover the financial losses you have suffered and will suffer in the future as a result of your injury. These are calculated on the evidence and must be supported by receipts, payslips and other documentation where possible.",
          list: [
            "Past loss of earnings — income lost while you were unable to work or had reduced earnings",
            "Future loss of earnings — if your injury affects your earning capacity long-term",
            "Medical treatment costs — private physiotherapy, consultations, medication",
            "Rehabilitation costs — occupational therapy, cognitive rehabilitation, physiotherapy",
            "Care and assistance — provided by professional carers or family members",
            "Travel costs — to and from medical appointments",
            "Home adaptations — ramps, handrails, stairlifts, adapted bathrooms",
            "Specialist equipment — wheelchairs, prosthetics, assistive technology",
            "Pension loss — where your injury affects your retirement income",
            "Future care needs — ongoing care costs calculated over your lifetime",
          ],
        },
        {
          heading: "How Serious Injury Compensation is Calculated",
          content:
            "In serious and catastrophic injury cases, the calculation of future losses is complex. Actuarial tables (the Ogden Tables) are used to convert future annual losses into a lump sum, taking account of the claimant's age, life expectancy and the likely impact of future events. Expert evidence from medical specialists, care experts, employment consultants and financial advisers is used to quantify each head of loss.",
        },
        {
          heading: "Provisional Damages in Scotland",
          content:
            "In Scotland, where there is a risk that your condition may deteriorate in the future — for example, in asbestos-related disease cases where there is a risk of developing mesothelioma — the court can award provisional damages. This allows a claimant to accept a settlement or award on the basis of their current condition, while retaining the right to return to court to claim further compensation if the specified deterioration occurs.",
        },
        {
          heading: "Contributory Negligence — Effect on Your Compensation",
          content:
            "If you are found to be partly responsible for your accident, your compensation may be reduced to reflect your share of the blame. This is called contributory negligence. For example, if you were not wearing a seatbelt at the time of a road traffic accident, a percentage reduction may be applied. Your solicitor will advise on the likely impact of contributory negligence in your specific circumstances.",
        },
        {
          heading: "What Factors Affect the Value of My Claim?",
          content: "The key factors that affect the value of a personal injury claim in Scotland include:",
          list: [
            "The nature and severity of your injuries",
            "The duration of your recovery and any permanent disability",
            "Your age and how the injury affects your future life and career",
            "The financial losses you have suffered and are likely to suffer in the future",
            "Whether you were partly responsible for the accident",
            "The strength of the medical evidence",
            "Whether liability is admitted or disputed",
          ],
        },
        {
          heading: "How Long Until I Receive Compensation?",
          content:
            "In straightforward claims where liability is admitted early, interim payments may be available and settlement can be reached within months. In complex cases involving serious injury, the claim may take two to five years or more — partly because it is important not to finalise a settlement before the full impact of your injury is known. Your solicitor will advise on the appropriate timing of settlement in your case.",
        },
        {
          heading: "Important Disclaimer",
          content:
            "The information in this guide is for general information purposes only. No guarantee of any specific level of compensation is made or implied. The value of any personal injury claim in Scotland depends entirely on the facts, evidence and legal principles applicable to that specific case. Your solicitor will give you an honest assessment of your claim based on the evidence — not an inflated estimate.",
        },
      ]}
      guideSlugs={[
        "what-is-my-accident-claim-worth-scotland",
        "contributory-negligence-scotland",
        "serious-injury-rehabilitation-scotland",
      ]}
      locationClaimType="personal injury claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Judicial College Guidelines (England and Wales) — a reference sometimes used when assessing general damages", url: "https://www.judiciary.uk/publications/?s=judicial+college+guidelines" },
        { label: "Ogden Tables — actuarial tables for future loss calculations", url: "https://www.gov.uk/government/publications/ogden-tables-actuarial-compensation-tables-for-injury-and-death" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Compensation Planner", href: "/compensation-calculator-scotland" },
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "How to Claim Compensation", href: "/how-to-claim-compensation-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
      ]}
    />
  );
}
