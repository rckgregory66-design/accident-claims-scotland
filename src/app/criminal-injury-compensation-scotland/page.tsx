import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Criminal Injury Compensation Scotland | CICA Claims Solicitors",
  description:
    "Claim criminal injury compensation in Scotland through the CICA. Specialist support for victims of violent crime including assault, domestic abuse and sexual violence.",
  alternates: { canonical: "/criminal-injury-compensation-scotland" },
  openGraph: {
    title: "Criminal Injury Compensation Scotland | CICA Claims Solicitors",
    description: "Claim criminal injury compensation in Scotland through the CICA. Free enquiry, sensitive support.",
    url: "/criminal-injury-compensation-scotland",
  },
};

const faqs = [
  {
    question: "What is the Criminal Injuries Compensation Authority (CICA)?",
    answer:
      "The Criminal Injuries Compensation Authority (CICA) is a UK government body that administers the Criminal Injuries Compensation Scheme. The scheme provides compensation to victims of violent crime in Scotland, England and Wales. Awards are made from public funds and do not require a criminal conviction to have been secured.",
  },
  {
    question: "Who can claim criminal injury compensation in Scotland?",
    answer:
      "You may be eligible to claim if: you were a victim of violent crime in Scotland; you reported the crime to the police promptly; you cooperated with police and criminal proceedings; and you did not have unspent criminal convictions that might reduce or bar your award. You must apply within two years of the crime (with very limited exceptions for historic abuse or claims involving children).",
  },
  {
    question: "Do I need a criminal conviction to claim?",
    answer:
      "No. You do not need the perpetrator to have been convicted, or even charged, for you to make a CICA claim. However, you must have reported the crime to the police promptly and cooperated with any investigation or proceedings.",
  },
  {
    question: "How much compensation can I claim through the CICA?",
    answer:
      "CICA awards are made according to the tariff in the Criminal Injuries Compensation Scheme. Awards range from £1,000 for less serious injuries to £500,000 or more for the most serious cases. The tariff sets out fixed amounts for different types of injury. The CICA may also pay loss of earnings and special expenses in qualifying cases.",
  },
  {
    question: "What is the time limit for a CICA claim in Scotland?",
    answer:
      "Applications to the CICA must generally be made within two years of the date of the crime. There are very limited exceptions — for example, for historic childhood abuse claims, or where the applicant was a child at the time of the offence. Do not delay — seek advice immediately.",
  },
];

export default function CriminalInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/criminal-injury-compensation-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Criminal Injury Compensation Scotland" }]}
      h1="Criminal Injury Compensation Scotland"
      intro="If you have been injured as a victim of violent crime in Scotland — including assault, domestic abuse, sexual violence or other offences — you may be entitled to apply for compensation through the Criminal Injuries Compensation Authority (CICA). This page provides general information about that process."
      tldr={[
        "Victims of violent crime in Scotland can claim through the CICA without a criminal conviction.",
        "The CICA time limit is two years from the crime — shorter than standard personal injury claims.",
        "You must have reported the crime to the police and cooperated with any investigation.",
        "CICA awards follow a fixed tariff, ranging from £1,000 to £500,000+.",
        "A civil claim against the perpetrator or a negligent third party may also be possible.",
      ]}
      answerBox="In Scotland, victims of violent crime may be eligible to claim compensation through the Criminal Injuries Compensation Scheme, administered by the CICA. Claims must generally be made within two years of the crime. You do not need a criminal conviction to claim, but you must have reported the crime to the police and cooperated with any investigation. A free enquiry will assess your eligibility."
      sections={[
        {
          heading: "What is the Criminal Injuries Compensation Scheme?",
          content:
            "The Criminal Injuries Compensation Scheme is a UK government scheme that provides compensation to victims of violent crime. It applies across Scotland, England and Wales. Awards are paid from public funds and are made according to a tariff that sets out standard amounts for different types of injury. A criminal conviction is not required.",
        },
        {
          heading: "Who is Eligible to Claim Criminal Injury Compensation?",
          content: "You may be eligible if:",
          list: [
            "You were the victim of a violent crime in Scotland (or another part of Great Britain)",
            "You reported the crime to the police as soon as reasonably practicable",
            "You cooperated with police and any criminal proceedings",
            "You have not been convicted of an unspent criminal offence that might reduce or bar your award",
            "You are applying within the two-year time limit (with very limited exceptions)",
          ],
        },
        {
          heading: "Types of Crime Covered",
          content: "The scheme covers a wide range of violent crimes, including:",
          linkedList: [
            { text: "Assault and common assault", href: "/assault-injury-claim-scotland" },
            { text: "Domestic abuse and domestic violence", href: "/domestic-abuse-injury-claim-scotland" },
            { text: "Sexual assault and rape", href: "/sexual-assault-injury-claim-scotland" },
            { text: "Robbery and mugging", href: "/robbery-injury-claim-scotland" },
            { text: "Knife crime and serious assault", href: "/knife-crime-injury-claim-scotland" },
            { text: "Hate crime injuries", href: "/hate-crime-injury-claim-scotland" },
            { text: "Historic childhood abuse claims", href: "/historic-abuse-claim-scotland" },
          ],
        },
        {
          heading: "How CICA Awards Are Calculated",
          content:
            "CICA awards are made according to the tariff in the Criminal Injuries Compensation Scheme. The tariff sets out fixed amounts for different types and levels of injury. Awards range from £1,000 for relatively minor injuries to significantly higher amounts for serious physical or psychological harm. In qualifying cases, the CICA may also pay loss of earnings and special expenses such as treatment costs. The scheme is separate from civil litigation.",
        },
        {
          heading: "The Application Process",
          content:
            "Applications to the CICA are made online through the CICA website, or with the assistance of a solicitor. A solicitor can help you present your application in the strongest possible terms and manage correspondence with the CICA. The CICA will investigate your claim, obtain police and medical evidence and make an initial decision. If you are unhappy with the decision, you have the right to seek a review and, if necessary, appeal to the First-tier Tribunal.",
        },
        {
          heading: "Time Limit — Act Quickly",
          content:
            "Applications to the CICA must generally be made within two years of the date of the crime. This is a shorter period than the standard personal injury limitation. There are very limited exceptions — for example, for historical childhood sexual abuse where you were a child at the time. Do not assume you have time to spare — seek advice as soon as possible.",
        },
        {
          heading: "Civil Claims Alongside CICA Claims",
          content:
            "In some circumstances, it may also be possible to bring a civil claim for damages against the perpetrator, or against a third party whose negligence contributed to the crime — for example, a negligent employer or inadequate security provider. Your solicitor will advise on whether a civil claim is available in addition to or instead of a CICA claim.",
        },
      ]}
      subpages={{
        title: "Types of Criminal Injury Claim",
        pages: [
          { label: "Assault Claims", href: "/assault-injury-claim-scotland", desc: "Physical assault and common assault" },
          { label: "Domestic Abuse Claims", href: "/domestic-abuse-injury-claim-scotland", desc: "Domestic violence injuries" },
          { label: "Sexual Assault Claims", href: "/sexual-assault-injury-claim-scotland", desc: "Sexual violence and rape" },
          { label: "Historic Abuse Claims", href: "/historic-abuse-claim-scotland", desc: "Childhood sexual and physical abuse" },
          { label: "Knife Crime Claims", href: "/knife-crime-injury-claim-scotland", desc: "Stab wounds and blade injuries" },
          { label: "Hate Crime Claims", href: "/hate-crime-injury-claim-scotland", desc: "Racially and otherwise motivated crime" },
        ],
      }}
      guideCategory="Criminal Injuries"
      guideSlugs={[
        "cica-claims-scotland",
        "historic-abuse-claims-scotland",
        "personal-injury-claim-time-limits-scotland",
      ]}
      locationClaimType="criminal injury compensation claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Criminal Injuries Compensation Authority (CICA) — official scheme administrator", url: "https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority" },
        { label: "Criminal Injuries Compensation Scheme 2012 — the governing tariff scheme", url: "https://www.gov.uk/government/publications/criminal-injuries-compensation-scheme-2012" },
        { label: "GOV.UK — how to apply to CICA", url: "https://www.gov.uk/claim-compensation-criminal-injury" },
      ]}
      related={[
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
