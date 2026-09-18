import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Dental Negligence Claims Scotland — Dentist Compensation Claims",
  description:
    "Dental negligence claim in Scotland? Information on negligent dental treatment, nerve damage, incorrect extractions, failed implants and crowns. Free enquiry, three-year time limit.",
  alternates: { canonical: "/dental-negligence-claims-scotland" },
  openGraph: {
    title: "Dental Negligence Claims Scotland — Dentist Compensation Claims",
    description: "Dental negligence compensation in Scotland. Nerve damage, wrong tooth, failed implants. Free enquiry.",
    url: "/dental-negligence-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim against a dentist for negligence in Scotland?",
    answer:
      "Yes. Dentists owe their patients a duty of care and must meet the standard expected of a reasonably competent dental practitioner. If your dentist fell below that standard and you suffered harm as a result — including pain, further treatment costs, nerve damage or tooth loss — you may have a valid dental negligence claim under Scots law.",
  },
  {
    question: "What are common examples of dental negligence?",
    answer:
      "Common dental negligence claims include: extraction of the wrong tooth; negligent nerve damage during extractions or implants; failure to diagnose oral cancer or periodontal disease; incorrect or poorly executed crowns, bridges or implants; failure to take adequate X-rays; unnecessary extraction where the tooth could have been saved; delayed diagnosis of dental infections leading to serious complications; and failure to obtain informed consent for procedures.",
  },
  {
    question: "Can I claim for nerve damage caused by dental treatment?",
    answer:
      "Yes. Nerve damage — particularly to the inferior alveolar nerve or lingual nerve — is one of the most serious dental negligence injuries. It can cause permanent numbness, altered sensation or chronic pain in the lip, tongue or chin. If the nerve damage resulted from a dentist's failure to use appropriate techniques or imaging, or to warn you of the risk, you may have a valid claim.",
  },
  {
    question: "What is the time limit for a dental negligence claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the negligent treatment or the date of knowledge — typically when you knew or ought to have known that the harm was caused by the treatment rather than by the underlying dental condition. Seek advice promptly.",
  },
  {
    question: "Can I claim against an NHS dentist and a private dentist?",
    answer:
      "Yes. The duty of care and the standard expected is the same regardless of whether the dentist provides NHS or private treatment. For NHS dental claims, the NHS Central Legal Office (CLO) in Scotland handles dental practitioner claims alongside general medical negligence. For private dental negligence, the claim is against the dental practice and its indemnity insurer.",
  },
  {
    question: "What compensation can I receive for dental negligence?",
    answer:
      "Dental negligence compensation can cover: solatium for pain and suffering; the cost of remedial treatment — including replacement crowns, implants or reconstruction; future dental costs; lost earnings if the injury affected your ability to work; and compensation for any permanent injury such as nerve damage, tooth loss or disfigurement.",
  },
];

export default function DentalNegligencePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/dental-negligence-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "Dental Negligence Claims Scotland" },
      ]}
      h1="Dental Negligence Claims Scotland"
      intro="Negligent dental treatment — including wrong tooth extractions, nerve damage, failed implants and failure to diagnose oral conditions — can cause lasting harm. If your dentist fell below the standard of care expected of a competent practitioner, you may be entitled to compensation under Scots law."
      tldr={[
        "Dentists owe patients the same standard of care as other healthcare professionals.",
        "Common claims: wrong tooth extracted, nerve damage, failed implants, missed oral cancer.",
        "NHS and private dental negligence claims are treated similarly.",
        "Time limit: three years from the date of treatment or date of knowledge.",
        "Compensation covers remedial dental costs, pain and any lasting injury.",
      ]}
      answerBox="In Scotland, dental negligence claims arise where a dentist fails to meet the standard of a reasonably competent practitioner, causing harm to the patient. Both NHS and private dental claims are available. The time limit is generally three years from the treatment date or date of knowledge. A free enquiry will assess your circumstances — no obligation."
      sections={[
        {
          heading: "What Is Dental Negligence?",
          content:
            "Dental negligence is a form of medical negligence that arises when a dental practitioner — including a dentist, dental hygienist, oral surgeon or maxillofacial specialist — fails to provide care that meets the standard expected of a reasonably competent practitioner in that field. The standard is assessed under the same Hunter v Hanley test that applies to all medical negligence claims in Scotland.",
        },
        {
          heading: "Common Types of Dental Negligence Claim",
          content: "Dental negligence claims in Scotland commonly involve:",
          list: [
            "Wrong tooth extraction — extracting a healthy tooth instead of the intended tooth",
            "Nerve damage — inferior alveolar nerve or lingual nerve damage during extractions or implants",
            "Failed or negligently placed dental implants",
            "Negligent crown or bridge work — poor fit, failure, damage to adjacent teeth",
            "Failure to diagnose periodontal (gum) disease leading to tooth loss",
            "Failure to diagnose or refer oral cancer at an early stage",
            "Negligent root canal treatment",
            "Failure to take necessary X-rays before treatment",
            "Failure to obtain informed consent for a procedure",
          ],
        },
        {
          heading: "Nerve Damage in Dental Claims",
          content:
            "Inferior alveolar nerve and lingual nerve injuries are among the most serious dental negligence injuries. They can result in permanent numbness, altered sensation (paraesthesia), burning pain or hyperalgesia in the lip, tongue, chin or cheek. While some risk of nerve proximity exists in extractions and implants, a negligent failure to use appropriate techniques, proper imaging (such as CBCT scanning), or to warn the patient adequately of the risk, may give rise to a claim.",
        },
        {
          heading: "Informed Consent in Dental Treatment",
          content:
            "Following the Supreme Court decision in Montgomery v Lanarkshire Health Board [2015], healthcare providers — including dentists — must obtain genuine informed consent by discussing all material risks with the patient. A failure to warn of a material risk that materialises may give rise to a claim even where the treatment itself was technically competent. This applies to surgical extractions, implants and other procedures carrying risk of nerve injury or other complications.",
        },
        {
          heading: "NHS and Private Dental Claims",
          content:
            "Claims against NHS dental practitioners in Scotland are typically managed by the NHS Central Legal Office (CLO) alongside general medical claims. Private dental negligence claims are brought against the dental practice and its dental defence organisation (DDO) or indemnity insurer. The standard of care is the same whether treatment is NHS or private. However, private treatment may involve larger remedial costs.",
        },
        {
          heading: "What Compensation Can I Claim?",
          content: "Dental negligence compensation can include:",
          list: [
            "Solatium — pain, suffering and loss of amenity",
            "Cost of remedial dental treatment — replacement work, reconstruction, implants",
            "Future dental care costs",
            "Lost earnings if the injury caused absence from work",
            "Compensation for permanent injury — nerve damage, tooth loss, disfigurement",
          ],
        },
      ]}
      guideSlugs={[
        "medical-negligence-what-to-prove-scotland",
        "nhs-negligence-claims-scotland-explained",
        "gp-negligence-claims-scotland",
      ]}
      locationClaimType="dental negligence claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "General Dental Council — standards for dental professionals", url: "https://www.gdc-uk.org/" },
        { label: "NHS Central Legal Office Scotland — dental practitioner claims", url: "https://www.clo.scot.nhs.uk/" },
        { label: "Scottish Dental Clinical Effectiveness Programme — clinical guidelines", url: "https://www.sdcep.org.uk/" },
      ]}
      related={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "NHS Negligence Claims Scotland", href: "/nhs-negligence-claims-scotland" },
        { label: "GP Negligence Claims Scotland", href: "/gp-negligence-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
      ]}
    />
  );
}
