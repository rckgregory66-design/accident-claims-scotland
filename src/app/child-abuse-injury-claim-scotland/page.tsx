import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Child Abuse Compensation Scotland — CICA Claims for Survivors",
  description:
    "Survivor of childhood abuse in Scotland? Information on CICA criminal injury compensation for historic child abuse victims. Sensitive and confidential — free enquiry.",
  alternates: { canonical: "/child-abuse-injury-claim-scotland" },
  openGraph: {
    title: "Child Abuse Compensation Scotland — CICA Claims for Survivors",
    description: "Compensation for child abuse survivors in Scotland — CICA and civil claims. Sensitive enquiry.",
    url: "/child-abuse-injury-claim-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for child abuse that happened years ago in Scotland?",
    answer:
      "Yes, in many cases. For CICA criminal injury compensation, applications can sometimes be accepted out of time for historic childhood abuse, particularly where the abuse occurred in an institutional context and was reported to police as an adult. Civil claims for historic child abuse may also be possible, though the limitation period has often expired — the court has a discretion to allow late claims in cases of childhood abuse. Each case requires careful individual assessment.",
  },
  {
    question: "What types of child abuse can give rise to a CICA claim?",
    answer:
      "The CICA scheme covers physical injuries from violent crime — including physical abuse and sexual abuse where the abuse involved physical violence or penetration. Psychological injuries arising from abuse, where a recognised psychiatric diagnosis has been made, are also compensable. The CICA also covers abuse in institutional settings — such as residential care, schools and churches.",
  },
  {
    question: "Is there a time limit for claiming CICA compensation for childhood abuse?",
    answer:
      "Normally, CICA applications must be made within two years of the incident. For childhood abuse, important exceptions apply: where the applicant was a child at the time, the two-year period generally runs from the date they reach adulthood (18) or from when they report the abuse to police, whichever is later. The CICA also has a discretion to accept late applications where there is a good reason for the delay. These cases require specialist advice.",
  },
  {
    question: "What if the perpetrator has died or cannot be found?",
    answer:
      "A CICA claim does not require the perpetrator to be alive, present or convicted. The CICA obtains information from the police about the abuse and any investigation. If the police investigation is ongoing or you have only recently reported, the CICA will usually await a police outcome before determining the application. Your solicitor can advise on the timing of the application.",
  },
  {
    question: "Can I make a civil claim against an institution that failed to protect me?",
    answer:
      "In some cases, yes. Civil claims for historical child abuse can be brought against institutions — including former care homes, schools, churches and local authorities — whose systemic failures in safeguarding enabled the abuse. These claims face significant limitation period challenges, but the court has a discretion to allow late claims in cases of childhood abuse where it is equitable to do so. Cases require detailed investigation of records and institutional responsibility.",
  },
  {
    question: "Will I have to give evidence or attend court?",
    answer:
      "For CICA applications, you typically do not need to attend court — claims are assessed by CICA caseworkers with supporting medical and police evidence. Civil claims for institutional abuse may involve court proceedings, but many are resolved before trial. Your solicitor will support you at every stage and will keep any court attendance to a minimum where possible.",
  },
];

export default function ChildAbuseInjuryPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/child-abuse-injury-claim-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Criminal Injury Compensation Scotland", href: "/criminal-injury-compensation-scotland" },
        { label: "Child Abuse Compensation Scotland" },
      ]}
      h1="Child Abuse Compensation Scotland"
      intro="Survivors of childhood abuse in Scotland — including physical abuse, sexual abuse and institutional abuse — may be eligible for criminal injury compensation through the CICA and, in some cases, civil claims against institutions that failed to protect them. These claims are handled with the utmost sensitivity and confidentiality."
      tldr={[
        "CICA claims for childhood abuse have special time limit exceptions — the two-year period runs from adulthood or reporting.",
        "Physical and psychological injuries from abuse are compensable — a psychiatric diagnosis is required for psychological claims.",
        "Institutional abuse claims (care homes, schools, churches) are possible — specialist civil litigation.",
        "The perpetrator does not need to be alive, convicted or found for a CICA claim.",
        "Completely confidential — enquiry involves no court attendance in CICA cases.",
      ]}
      answerBox="In Scotland, survivors of childhood abuse can apply for CICA criminal injury compensation — with extended time limits for childhood victims. Civil claims against institutions whose failures enabled abuse are also possible in some cases. Everything is handled with complete sensitivity and confidentiality. A free enquiry will assess your eligibility."
      sections={[
        {
          heading: "CICA Compensation for Child Abuse Survivors",
          content:
            "The Criminal Injuries Compensation Scheme covers injuries resulting from violent crime — including physical and sexual assault. Survivors of childhood abuse can apply for CICA compensation regardless of whether the perpetrator has been convicted, is known or is still alive. The CICA will require evidence of the abuse from police records and medical evidence of the resulting injury. Both physical and recognised psychological injuries are compensable.",
        },
        {
          heading: "Time Limits for Child Abuse CICA Claims",
          content:
            "The standard CICA two-year application period is modified for childhood abuse. Where the applicant was a child at the time of the abuse, the period generally begins when they reach adulthood or when they report the abuse to the police — whichever is later. The CICA also has a discretion to accept applications outside the two-year period where there is a good reason for the delay — as is frequently the case in historic abuse matters. Specialist legal advice is essential to navigate these rules.",
        },
        {
          heading: "Types of Child Abuse Covered",
          content: "CICA claims for child abuse can arise from:",
          list: [
            "Physical abuse — sustained physical violence causing injury",
            "Sexual abuse — assault by penetration or other sexual violence",
            "Institutional abuse in residential care — children's homes, secure units",
            "Abuse in educational settings — boarding schools, religious schools",
            "Abuse in faith settings — churches, mosques, other religious organisations",
            "Abuse by carers, foster carers or family members",
          ],
        },
        {
          heading: "Psychological Injury Claims",
          content:
            "The psychological impact of childhood abuse — including PTSD, complex PTSD, depression, anxiety disorders and the lasting effects on relationships and life opportunities — can be the primary or most significant element of a claim. A diagnosis from a psychiatrist or clinical psychologist is required. In childhood abuse cases, the CICA tariff can award significant sums for recognised psychological conditions, particularly where the abuse was sustained over a long period.",
        },
        {
          heading: "Civil Claims Against Institutions",
          content:
            "Where childhood abuse occurred in an institutional setting — a residential care home, school, church or local authority facility — it may be possible to bring a civil claim against the institution for a failure of duty of care or vicarious liability for the acts of its employees or volunteers. These claims face significant limitation period challenges, as they often concern events many decades ago. The court has a discretion under the Prescription and Limitation (Scotland) Act 1973 to allow late claims where it is equitable to do so, having regard to reasons for the delay, the prejudice to the defender, and the cogency of the evidence available.",
        },
        {
          heading: "Support and Confidentiality",
          content:
            "We understand that coming forward about childhood abuse requires significant courage. All enquiries are handled in complete confidence. We work at the pace that is right for you and can liaise with your support worker, counsellor or other professionals involved in your care. Making a legal claim does not prevent you from continuing with therapeutic support — in many cases, a formal process can assist your journey toward acknowledgment and redress.",
        },
      ]}
      guideSlugs={[
        "personal-injury-claim-time-limit-scotland",
        "what-is-my-accident-claim-worth-scotland",
      ]}
      locationClaimType="child abuse compensation claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Criminal Injuries Compensation Authority (CICA) — official scheme", url: "https://www.gov.uk/claim-compensation-criminal-injury" },
        { label: "Scottish Child Abuse Inquiry — institutional context", url: "https://www.childabuseinquiry.scot/" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — court's discretion", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
      ]}
      related={[
        { label: "Criminal Injury Compensation Scotland", href: "/criminal-injury-compensation-scotland" },
        { label: "Domestic Abuse Claims Scotland", href: "/domestic-abuse-injury-claim-scotland" },
        { label: "Serious Injury Claims Scotland", href: "/serious-injury-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
