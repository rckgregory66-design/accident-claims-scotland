import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Domestic Abuse Injury Claims Scotland — CICA Compensation for Victims",
  description:
    "Injured through domestic abuse or violence in Scotland? Information on CICA criminal injury compensation for domestic abuse victims. Sensitive support — free enquiry.",
  alternates: { canonical: "/domestic-abuse-injury-claim-scotland" },
  openGraph: {
    title: "Domestic Abuse Injury Claims Scotland — CICA Compensation for Victims",
    description: "Criminal injury compensation for domestic abuse victims in Scotland. Sensitive, confidential enquiry.",
    url: "/domestic-abuse-injury-claim-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim criminal injury compensation for domestic abuse in Scotland?",
    answer:
      "Yes. Victims of domestic abuse who have sustained physical or psychological injury may be eligible to apply for compensation through the Criminal Injuries Compensation Authority (CICA). The scheme applies across Scotland, England and Wales. You must have reported the abuse to the police and cooperated with any investigation or criminal proceedings. CICA awards are made from public funds and do not require a criminal conviction.",
  },
  {
    question: "Do I need to be living separately from the abuser to claim?",
    answer:
      "The CICA scheme does not require you to be living separately from the person who harmed you, but claims where the perpetrator was living in the same household at the time of the abuse were historically more restricted. Reforms to the scheme have removed the former 'same household' bar in most cases. You should seek advice on your specific circumstances — each case is assessed individually.",
  },
  {
    question: "What types of domestic abuse give rise to a CICA claim?",
    answer:
      "The CICA scheme covers physical injuries from assaults — including bruising, fractures, disfigurement and more serious injuries. Psychological injuries arising from a sustained campaign of abuse or from a serious assault are also covered, where a recognised psychiatric diagnosis has been made. Financial abuse, coercive control and harassment without physical injury do not in themselves give rise to CICA claims, but a pattern of physical violence that causes recognised harm does.",
  },
  {
    question: "What is the time limit for a domestic abuse CICA claim?",
    answer:
      "Applications to the CICA must generally be made within two years of the incident or the end of the abuse. For historic childhood abuse that is only being reported as an adult, there are limited exceptions. The CICA has discretion to accept late applications in exceptional circumstances, but delay weakens the claim significantly. Seek advice as soon as you feel safe to do so.",
  },
  {
    question: "Will my abuser be told I have made a CICA claim?",
    answer:
      "The CICA will not notify the perpetrator that you have made a claim. However, the CICA will obtain information from the police about the incident and any criminal investigation. Your application will be treated in confidence. If you have safety concerns, discuss these with your solicitor — there are ways to protect your address and personal details through the process.",
  },
  {
    question: "Can I claim for psychological injury from domestic abuse?",
    answer:
      "Yes. The CICA scheme recognises psychological injuries caused by violence or threats of violence. A recognised psychiatric diagnosis — such as PTSD, clinical depression or a complex trauma disorder — is required. A diagnosis from your GP or a psychiatrist should be obtained as part of your claim.",
  },
];

export default function DomesticAbuseInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/domestic-abuse-injury-claim-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Criminal Injury Compensation Scotland", href: "/criminal-injury-compensation-scotland" },
        { label: "Domestic Abuse Injury Claims Scotland" },
      ]}
      h1="Domestic Abuse Injury Claims Scotland"
      intro="Victims of domestic abuse in Scotland who have sustained physical or psychological injuries may be able to claim compensation through the Criminal Injuries Compensation Authority (CICA). This page provides general information about the CICA application process for domestic abuse claims — handled with sensitivity and complete confidentiality."
      tldr={[
        "CICA criminal injury compensation is available to domestic abuse victims in Scotland.",
        "You do not need a criminal conviction — but the abuse must have been reported to police.",
        "Both physical and recognised psychological injuries are compensable.",
        "Time limit: two years from the incident or end of the abuse — shorter than standard personal injury.",
        "Your address and identity can be protected during the process — your abuser is not told.",
      ]}
      answerBox="In Scotland, victims of domestic abuse who have suffered physical or psychological injury can apply for criminal injury compensation through the CICA. No criminal conviction is required, but the abuse must have been reported to the police. The time limit is generally two years. Claims are handled in complete confidence. A free, sensitive enquiry will assess your eligibility."
      sections={[
        {
          heading: "The Criminal Injuries Compensation Scheme — Domestic Abuse",
          content:
            "The Criminal Injuries Compensation Scheme provides compensation to victims of violent crime — including domestic abuse — in Scotland, England and Wales. Awards are made from public funds according to a fixed tariff linked to the type and severity of injury. No criminal conviction is required. The scheme was reformed to remove the former same-household bar that previously prevented some domestic abuse victims from claiming.",
        },
        {
          heading: "Eligibility for Domestic Abuse CICA Claims",
          content: "You may be eligible to claim if:",
          list: [
            "You were a victim of physical violence or credible threats of violence from a current or former partner or family member",
            "You sustained a physical injury, or a recognised psychological injury arising from the abuse",
            "You reported the abuse to the police",
            "You cooperated with police and any criminal proceedings",
            "You apply within two years of the incident or the end of the abuse (limited exceptions apply)",
            "You do not have relevant unspent criminal convictions that could reduce or bar an award",
          ],
        },
        {
          heading: "Physical and Psychological Injuries",
          content:
            "The CICA tariff covers a wide range of physical injuries from assault — including minor wounds and bruising, fractures, scarring and disfigurement, loss of teeth, and more serious injuries. Psychological injuries arising from domestic abuse — including PTSD, complex trauma disorder, depression and anxiety disorders — are also covered where a recognised psychiatric diagnosis has been made. A report from your GP or a psychiatrist will be required to support the psychological injury element of the claim.",
        },
        {
          heading: "Protecting Your Safety During the Process",
          content:
            "We understand that safety is paramount for many domestic abuse survivors. Your solicitor can advise on practical steps to protect your identity and address during the CICA application process. Applications can be managed without disclosing your address to the CICA or to the police. If you have a non-disclosure order or are known to a refuge or support organisation, inform your solicitor so that arrangements can be put in place.",
        },
        {
          heading: "The CICA Application Process",
          content:
            "CICA applications can be made online through the official CICA website or with the assistance of a solicitor. A solicitor can help you present your claim in the clearest and strongest terms, gather the required medical evidence and police information, and respond to CICA enquiries. If the CICA makes an unsatisfactory decision, you have the right to request a review and, if necessary, appeal to the First-tier Tribunal.",
        },
        {
          heading: "Support Services",
          content:
            "Making a CICA claim does not prevent you from using support services. Scottish domestic abuse support organisations — including Scottish Women's Aid and Refuge — provide practical and emotional support that can be accessed alongside a legal claim. Your solicitor can work alongside support services.",
        },
      ]}
      guideSlugs={[
        "personal-injury-claim-time-limit-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="domestic abuse criminal injury compensation claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Criminal Injuries Compensation Authority (CICA) — official scheme information", url: "https://www.gov.uk/claim-compensation-criminal-injury" },
        { label: "Criminal Injuries Compensation Scheme 2012 — the governing tariff scheme", url: "https://www.gov.uk/government/publications/criminal-injuries-compensation-scheme-2012" },
        { label: "Scottish Women's Aid — domestic abuse support in Scotland", url: "https://womensaid.scot/" },
      ]}
      related={[
        { label: "Criminal Injury Compensation Scotland", href: "/criminal-injury-compensation-scotland" },
        { label: "Child Abuse Compensation Scotland", href: "/child-abuse-injury-claim-scotland" },
        { label: "Serious Injury Claims Scotland", href: "/serious-injury-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
