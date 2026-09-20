import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Hospital Infection Claims Scotland — MRSA, C. diff & HAI Compensation",
  description:
    "Hospital-acquired infection claim in Scotland? MRSA, C. difficile, surgical site infection and HAI compensation. NHS negligence — free enquiry, three-year time limit.",
  alternates: { canonical: "/hospital-infection-claims-scotland" },
  openGraph: {
    title: "Hospital Infection Claims Scotland — MRSA, C. diff & HAI Compensation",
    description: "Hospital infection claim in Scotland — MRSA, C. diff, surgical site infection. Free enquiry.",
    url: "/hospital-infection-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim compensation for a hospital-acquired infection in Scotland?",
    answer:
      "Yes, in some cases. A hospital-acquired infection (HAI) does not automatically give rise to a negligence claim — hospitals cannot eliminate all infection risk. However, if the infection resulted from a breach of infection control standards — such as inadequate hand hygiene protocols, failure to isolate infected patients, improper sterilisation of instruments, or a deficient cleaning regime — you may have a valid medical negligence claim.",
  },
  {
    question: "What types of hospital-acquired infection can lead to a claim?",
    answer:
      "Common HAI claims involve: MRSA (meticillin-resistant Staphylococcus aureus); Clostridioides difficile (C. diff); surgical site infections following operations; urinary tract infections from catheter use; pneumonia acquired during ventilator use; and sepsis arising from an untreated or inadequately treated hospital infection.",
  },
  {
    question: "What do I need to prove in a hospital infection claim?",
    answer:
      "You must prove: (1) that the hospital breached its duty of care — typically by failing to comply with infection control guidelines or procedures; (2) that this breach caused your infection; and (3) that you suffered harm as a result. Causation can be complex in HAI cases as hospitals may argue the infection would have occurred regardless. Expert microbiological and infection control evidence is usually required.",
  },
  {
    question: "What if I contracted MRSA in a Scottish hospital?",
    answer:
      "MRSA claims require evidence that the hospital's infection control procedures were inadequate and that the breach caused your MRSA infection. Evidence such as HAI inspection reports, Healthcare Environment Inspectorate (HEI) reports, and microbiological evidence linking the strain to the ward environment may be relevant. Not every MRSA case indicates negligence, but a pattern of failures or a particularly serious breach can establish liability.",
  },
  {
    question: "What is the time limit for a hospital infection claim in Scotland?",
    answer:
      "The general time limit is three years from the date of knowledge — typically when you knew or reasonably ought to have known that the infection was caused by negligent care, not just by the natural risks of hospitalisation. In practice, this is often around the time medical advice linking the infection to hospital negligence becomes apparent. Seek advice promptly.",
  },
  {
    question: "Can I claim if a family member died from a hospital-acquired infection?",
    answer:
      "Yes. If a hospital-acquired infection contributed to a death caused by negligent infection control, close family members may bring a fatal accident claim under the Damages (Scotland) Act 2011. Relatives who may claim include a spouse, civil partner, children and parents. Contact a solicitor as early as possible to preserve evidence.",
  },
];

export default function HospitalInfectionPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/hospital-infection-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "Hospital Infection Claims Scotland" },
      ]}
      h1="Hospital Infection Claims Scotland"
      intro="Hospital-acquired infections (HAIs) — including MRSA, C. difficile, surgical site infections and sepsis — can cause serious harm, prolonged illness and in the worst cases, death. Where an infection results from a breach of infection control standards, a medical negligence claim against the NHS board responsible may be available under Scots law."
      tldr={[
        "Not every HAI is negligence — you must show a failure of infection control caused the infection.",
        "Common claims: MRSA, C. diff, surgical site infection, catheter-associated UTI, sepsis.",
        "HEI inspection reports and microbiological evidence are key in establishing negligence.",
        "Time limit: three years from date of knowledge — usually from medical advice linking infection to negligence.",
        "Fatal infection claims are available under the Damages (Scotland) Act 2011.",
      ]}
      answerBox="In Scotland, a hospital-acquired infection claim requires proof that the infection was caused by a breach of infection control duty — not merely that an infection occurred. The time limit is generally three years from when you knew (or ought to have known) that negligent care caused the infection. A free enquiry will assess your circumstances with sensitivity."
      sections={[
        {
          heading: "What Is a Hospital-Acquired Infection Claim?",
          content:
            "A hospital-acquired infection (HAI) — also called a healthcare-associated infection — is an infection contracted in a hospital or other healthcare setting that was not present when the patient was admitted. Not every HAI gives rise to a negligence claim: hospitals treat patients who are already vulnerable, and some infection risk is unavoidable. However, where the infection resulted from a breach of infection control policies, NICE guidelines or Health Facilities Scotland standards, a medical negligence claim may be available.",
        },
        {
          heading: "Common Hospital Infections and Claims",
          content: "HAI claims most commonly involve:",
          list: [
            "MRSA — meticillin-resistant Staphylococcus aureus — wound infections, bacteraemia",
            "Clostridioides difficile (C. diff) — often associated with prolonged antibiotic use and inadequate environmental cleaning",
            "Surgical site infections — following orthopaedic, abdominal or cardiac surgery",
            "Catheter-associated urinary tract infections (CAUTIs)",
            "Ventilator-associated pneumonia (VAP)",
            "Sepsis arising from untreated or inadequately treated hospital infection",
          ],
        },
        {
          heading: "Proving Negligence in HAI Claims",
          content:
            "The claimant must establish: first, a breach of the standard of infection control required — whether measured against the relevant NICE guidelines, Scottish Government HAI standards, or the hospital's own policies; second, that the breach caused the infection — not merely that an infection occurred alongside the care. Expert evidence from a microbiologist or infection control specialist is almost always required to address both elements.",
        },
        {
          heading: "Healthcare Environment Inspectorate (HEI) Reports",
          content:
            "The Healthcare Environment Inspectorate (HEI) inspects Scottish NHS hospitals for compliance with HAI standards. Critical or unsatisfactory inspection findings — particularly contemporaneous reports from the time of the patient's admission — can provide strong corroborating evidence of systemic infection control failures. HEI inspection reports are published and can be obtained by solicitors investigating a claim.",
        },
        {
          heading: "Sepsis and HAI Claims",
          content:
            "Sepsis — a life-threatening response to infection — is a leading cause of serious harm and death in NHS hospitals. Where a hospital-acquired infection was not recognised promptly or treated adequately, leading to septic shock or death, a negligence claim may arise both from the infection control failure and from the failure to diagnose and manage the sepsis. Scottish HAI sepsis claims are increasingly recognised as a distinct and serious claim type.",
        },
        {
          heading: "Fatal Hospital Infection Claims",
          content:
            "If a hospital-acquired infection caused or contributed to a death, close relatives may bring a fatal accident claim. Under the Damages (Scotland) Act 2011, claims can be brought by the deceased's spouse, civil partner, children and parents for loss of society, financial dependency, and solatium for the deceased's own suffering before death. These claims require sensitive handling and early instruction of solicitors.",
        },
      ]}
      guideSlugs={[
        "medical-negligence-what-to-prove-scotland",
        "nhs-negligence-claims-scotland-explained",
        "fatal-accident-compensation-scotland",
      ]}
      locationClaimType="hospital-acquired infection and HAI negligence claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "Healthcare Improvement Scotland — Healthcare Environment Inspectorate (HAI inspections)", url: "https://www.healthcareimprovementscotland.scot/" },
        { label: "NHS National Services Scotland — healthcare associated infection", url: "https://www.nss.nhs.scot/antimicrobial-resistance-and-healthcare-associated-infection/" },
        { label: "NHS Central Legal Office Scotland — clinical negligence", url: "https://www.clo.scot.nhs.uk/" },
      ]}
      related={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "NHS Negligence Claims Scotland", href: "/nhs-negligence-claims-scotland" },
        { label: "Fatal Accident Claims", href: "/fatal-accident-claims-scotland" },
        { label: "Delayed Diagnosis Claims", href: "/delayed-diagnosis-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
