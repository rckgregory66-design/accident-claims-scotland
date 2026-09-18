import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Medical Negligence Claims Scotland | Scottish Clinical Negligence Solicitors",
  description:
    "Injured by medical negligence in Scotland? Get clear advice on NHS negligence, misdiagnosis, surgical errors, birth injury and delayed diagnosis claims. Free enquiry, no win no fee.",
  alternates: { canonical: "/medical-negligence-claims-scotland" },
  openGraph: {
    title: "Medical Negligence Claims Scotland | Scottish Clinical Negligence Solicitors",
    description: "Injured by medical negligence in Scotland? Free enquiry, no win no fee available.",
    url: "/medical-negligence-claims-scotland",
  },
};

const faqs = [
  {
    question: "What is medical negligence in Scotland?",
    answer:
      "Medical negligence in Scotland occurs when a healthcare professional fails to provide the standard of care expected of a reasonably competent practitioner, and that failure causes avoidable harm to the patient. You must prove duty of care, breach of that duty, and causation.",
  },
  {
    question: "Can I claim against the NHS in Scotland?",
    answer:
      "Yes. Claims against NHS Scotland — including any NHS health board and its hospitals and GP practices — are defended by the Central Legal Office. You can claim for any avoidable harm caused by substandard NHS care.",
  },
  {
    question: "How do I prove medical negligence?",
    answer:
      "To succeed you must prove: (1) a duty of care was owed; (2) that care fell below the standard of a reasonably competent practitioner (breach of duty); and (3) the breach caused your harm (causation). Independent expert medical evidence from a specialist in the relevant field is essential.",
  },
  {
    question: "How long do I have to bring a medical negligence claim in Scotland?",
    answer:
      "The general time limit is three years from the date of the negligent act, or three years from the date of knowledge — when you knew or ought to have known your harm was caused by negligence. Different rules apply to children and adults lacking capacity.",
  },
  {
    question: "How much compensation can I claim for medical negligence?",
    answer:
      "Compensation depends on the nature and severity of your injury, the impact on your life and livelihood, your financial losses and your future needs. There is no fixed tariff — each case is assessed on its own facts with expert medical and financial evidence.",
  },
  {
    question: "Can I claim if a loved one died due to medical negligence?",
    answer:
      "Yes. Fatal medical negligence claims can be brought under the Damages (Scotland) Act 2011. These may cover the deceased's own losses, financial dependency claims and loss of society awards for close family members.",
  },
];

export default function MedicalNegligencePage() {
  return (
    <ClaimPageTemplate
      metaUrl="/medical-negligence-claims-scotland"
      dateModified="2026-06-16"
      breadcrumbs={[{ label: "Medical Negligence Claims Scotland" }]}
      h1="Medical Negligence Claims Scotland"
      intro="If you or a family member has suffered avoidable harm as a result of substandard medical care in Scotland, you may have the right to make a clinical negligence claim. Our specialist solicitors handle claims against NHS Scotland, hospitals, GPs, surgeons and other healthcare providers."
      tldr={[
        "Medical negligence requires proof of duty of care, breach of duty and causation.",
        "Claims can be made against NHS Scotland, private hospitals, GPs, surgeons and dentists.",
        "The time limit is three years from the date of negligence or date of knowledge.",
        "Independent expert medical evidence is essential in every clinical negligence case.",
        "Children and adults lacking capacity have special time limit protections.",
      ]}
      answerBox="In Scotland, a medical negligence claim can be made if you received care that fell below the standard of a reasonably competent practitioner, and that failure caused you avoidable harm. The time limit is three years from the negligent treatment or your date of knowledge. A free enquiry will assess whether you have a viable claim — no obligation."
      sections={[
        {
          heading: "What is Medical Negligence?",
          content:
            "Medical negligence — or clinical negligence — occurs when a doctor, nurse, surgeon, GP, dentist or other healthcare professional fails to deliver the standard of care that a reasonably competent practitioner would provide, and that failure causes avoidable harm to a patient. Not every poor medical outcome is negligence. The Scottish test — established in Hunter v Hanley (1955) — requires the pursuer to demonstrate that the practitioner failed to exercise the standard of the ordinary skilled person exercising that particular art.",
        },
        {
          heading: "What Must Be Proved in a Medical Negligence Claim?",
          content: "A medical negligence claim in Scotland requires you to prove three things:",
          list: [
            "Duty of care — a healthcare professional or organisation owed you a duty of care",
            "Breach of duty — their treatment or omission fell below the standard of a reasonably competent practitioner in that specialty",
            "Causation — the breach caused or materially contributed to your injury or harm",
          ],
        },
        {
          heading: "Types of Medical Negligence Claims in Scotland",
          content: "We handle the full range of clinical negligence claims:",
          linkedList: [
            { text: "NHS negligence claims — against NHS Scotland boards and hospitals", href: "/nhs-negligence-claims-scotland" },
            { text: "GP negligence — failure to diagnose, delayed referral, prescribing errors", href: "/gp-negligence-claims-scotland" },
            { text: "Surgical negligence — errors during operations, wrong-site surgery, anaesthetic errors", href: "/surgical-negligence-claims-scotland" },
            { text: "Misdiagnosis and delayed diagnosis claims", href: "/misdiagnosis-claims-scotland" },
            { text: "Cancer misdiagnosis claims — delayed or missed cancer diagnosis", href: "/cancer-misdiagnosis-claims-scotland" },
            { text: "Birth injury claims — injuries to mothers and babies during labour and delivery", href: "/birth-injury-claims-scotland" },
            { text: "Dental negligence — extraction errors, failed treatment, nerve damage", href: "/dental-negligence-claims-scotland" },
            { text: "Care home negligence — inadequate care, falls, pressure sores", href: "/care-home-negligence-claims-scotland" },
            { text: "Prescription errors and medication mistakes", href: "/prescription-error-claims-scotland" },
            { text: "Fatal medical negligence claims", href: "/fatal-medical-negligence-claims-scotland" },
          ],
        },
        {
          heading: "The Role of Expert Medical Evidence",
          content:
            "Medical negligence claims in Scotland depend on independent expert medical evidence. Your solicitor will instruct an expert in the relevant specialty to review your records and provide an opinion on whether the care was negligent, whether it caused your harm, and the extent of your injury. This evidence is the foundation of your claim.",
        },
        {
          heading: "NHS and Private Healthcare Claims",
          content:
            "Claims can be made against NHS Scotland (defended by the Central Legal Office), individual NHS boards, private hospitals, private clinics and independent practitioners. The legal process is the same regardless of whether the negligence occurred in an NHS or private setting.",
        },
        {
          heading: "Children and Adults Lacking Capacity",
          content:
            "Special time limit rules apply to children and adults who lack legal capacity. A child in Scotland generally has until age 19 to bring a claim (three years after reaching 16). Adults lacking capacity are also given special protections. Seek advice as early as possible.",
        },
        {
          heading: "Time Limits for Medical Negligence Claims in Scotland",
          content:
            "The general time limit is three years from the date of the negligent treatment, or three years from your date of knowledge — when you knew or ought to have known that your harm was caused by negligence. Do not delay in seeking advice.",
        },
        {
          heading: "What Compensation Can You Claim?",
          content:
            "Compensation in medical negligence cases can cover solatium (pain, suffering and loss of amenity), loss of earnings, cost of private treatment, rehabilitation costs, care and assistance, home adaptations, future losses and other expenses. The amount depends on the specific facts and is quantified with expert medical and financial evidence.",
        },
      ]}
      subpages={{
        title: "Specialist Medical Negligence Claim Types",
        pages: [
          { label: "NHS Negligence Claims", href: "/nhs-negligence-claims-scotland", desc: "Claims against NHS Scotland boards" },
          { label: "Hospital Negligence", href: "/hospital-negligence-claims-scotland", desc: "Surgical errors, post-operative care" },
          { label: "GP Negligence", href: "/gp-negligence-claims-scotland", desc: "Missed diagnosis, delayed referral" },
          { label: "Surgical Negligence", href: "/surgical-negligence-claims-scotland", desc: "Errors during operations" },
          { label: "Misdiagnosis Claims", href: "/misdiagnosis-claims-scotland", desc: "Wrong or delayed diagnosis" },
          { label: "Cancer Misdiagnosis", href: "/cancer-misdiagnosis-claims-scotland", desc: "Delayed cancer detection" },
          { label: "Birth Injury Claims", href: "/birth-injury-claims-scotland", desc: "Injuries to mothers and babies" },
          { label: "Dental Negligence", href: "/dental-negligence-claims-scotland", desc: "Failed treatment, nerve damage" },
          { label: "Care Home Negligence", href: "/care-home-negligence-claims-scotland", desc: "Falls, neglect, pressure sores" },
          { label: "Prescription Errors", href: "/prescription-error-claims-scotland", desc: "Wrong medication or dose" },
          { label: "Delayed Diagnosis", href: "/delayed-diagnosis-claims-scotland", desc: "Late diagnosis causing harm" },
          { label: "Fatal Medical Negligence", href: "/fatal-medical-negligence-claims-scotland", desc: "Bereavement and dependency claims" },
        ],
      }}
      guideCategory="Medical Negligence"
      guideSlugs={[
        "medical-negligence-what-to-prove-scotland",
        "nhs-negligence-claims-scotland-explained",
        "gp-negligence-claims-scotland",
        "birth-injury-claims-scotland",
      ]}
      locationClaimType="medical negligence claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "NHS Central Legal Office — defends NHS Scotland clinical negligence claims", url: "https://www.clo.scot.nhs.uk/" },
        { label: "Prescription and Limitation (Scotland) Act 1973 — time limits for clinical negligence", url: "https://www.legislation.gov.uk/ukpga/1973/52/contents" },
        { label: "General Medical Council — professional standards for doctors", url: "https://www.gmc-uk.org/" },
      ]}
      related={[
        { label: "Personal Injury Claims Scotland", href: "/personal-injury-claims-scotland" },
        { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
        { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
