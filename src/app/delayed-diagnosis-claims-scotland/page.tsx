import type { Metadata } from "next";
import ClaimPageTemplate from "@/components/ClaimPageTemplate";

export const metadata: Metadata = {
  title: "Delayed Diagnosis Claims Scotland — Medical Negligence Compensation",
  description:
    "Delayed or missed diagnosis in Scotland? Information on medical negligence claims for late cancer diagnosis, missed conditions and failure to refer. Free enquiry, three-year time limit.",
  alternates: { canonical: "/delayed-diagnosis-claims-scotland" },
  openGraph: {
    title: "Delayed Diagnosis Claims Scotland — Medical Negligence Compensation",
    description: "Delayed diagnosis medical negligence claim in Scotland. Free enquiry — sensitive support.",
    url: "/delayed-diagnosis-claims-scotland",
  },
};

const faqs = [
  {
    question: "Can I claim if my diagnosis was delayed in Scotland?",
    answer:
      "Yes, if the delay fell below the standard of care expected of a reasonably competent medical professional, and that delay caused you harm you would not have suffered had a timely diagnosis been made. Delayed diagnosis claims are a form of medical negligence claim. Common examples include delayed cancer diagnosis, delayed diagnosis of stroke, missed fractures and failure to refer to a specialist.",
  },
  {
    question: "What do I need to prove in a delayed diagnosis claim?",
    answer:
      "You must establish: (1) that the treating clinician or healthcare provider fell below the standard of care expected of a reasonably competent practitioner in that specialism (breach of duty); (2) that the delay in diagnosis caused you a material worsening of your condition or reduced your treatment options and prognosis (causation); and (3) that you have suffered quantifiable harm as a result. Expert medical evidence is essential on both breach and causation.",
  },
  {
    question: "What is the most common type of delayed diagnosis claim?",
    answer:
      "Delayed cancer diagnosis claims are the most common — particularly delayed diagnosis of breast cancer, bowel cancer, lung cancer, cervical cancer and melanoma. In these cases, an earlier diagnosis would often have led to less invasive treatment, a better prognosis and longer life expectancy. Other common delayed diagnosis claims include: delayed stroke diagnosis, delayed appendicitis, delayed diagnosis of meningitis, and missed fractures.",
  },
  {
    question: "What if I was told there was nothing wrong and the condition was later discovered?",
    answer:
      "If a doctor failed to carry out appropriate investigations, failed to refer you to a specialist, or failed to follow up on test results, and a condition was later discovered that should have been identified earlier, you may have a valid claim. The question is whether a reasonably competent doctor would have made the diagnosis or referral at the earlier date.",
  },
  {
    question: "What is the time limit for a delayed diagnosis claim in Scotland?",
    answer:
      "The general time limit is three years from the date of knowledge — typically when you knew or ought to have known that your condition was caused by the delayed diagnosis, not from the original appointment. In practice this is often the date you received the correct diagnosis. Seek advice promptly — these cases require detailed investigation of medical records.",
  },
  {
    question: "Can a family claim if a delayed diagnosis contributed to a death?",
    answer:
      "Yes. If a delayed diagnosis contributed to a death, the deceased's family may bring a claim under the Damages (Scotland) Act 2011. Relatives who can claim include a spouse or civil partner, children and parents. The time limit runs from the date of death or the date of knowledge of the connection between the delayed diagnosis and the death.",
  },
];

export default function DelayedDiagnosisPage() {
  return (
    <ClaimPageTemplate
      metaUrl="/delayed-diagnosis-claims-scotland"
      dateModified="2026-09-18"
      breadcrumbs={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "Delayed Diagnosis Claims Scotland" },
      ]}
      h1="Delayed Diagnosis Claims Scotland"
      intro="A delayed or missed diagnosis can deprive you of the chance to receive timely treatment, leading to a worsened prognosis, more invasive procedures or a reduced life expectancy. If the delay resulted from a breach of the standard of care expected of a competent clinician, you may have a medical negligence claim under Scots law."
      tldr={[
        "Delayed diagnosis claims require proof of breach of the standard of care and causation of harm.",
        "Delayed cancer diagnosis — breast, bowel, lung, cervical — are among the most common claims.",
        "Expert medical evidence on both breach and causation is essential.",
        "Time limit: three years from the date of knowledge — usually from the correct diagnosis.",
        "Family members can claim if a delayed diagnosis contributed to a death.",
      ]}
      answerBox="In Scotland, a delayed or missed diagnosis that caused a material worsening of your condition may give rise to a medical negligence claim. You must show that the delay fell below the standard of care and caused you harm. The time limit is generally three years from when you knew (or ought to have known) of the connection. A free enquiry will assess your case."
      sections={[
        {
          heading: "What Is a Delayed Diagnosis Claim?",
          content:
            "A delayed diagnosis claim arises when a healthcare professional — GP, specialist, radiologist or other clinician — fails to diagnose a condition that a competent practitioner would have identified at an earlier stage, and that failure causes a material worsening of the patient's condition. The claim is a form of medical negligence claim and is assessed against the standard of a reasonably competent professional in the relevant field (the Hunter v Hanley / Bolam test, as modified by Scottish law).",
        },
        {
          heading: "Common Types of Delayed Diagnosis Claim in Scotland",
          content: "Claims commonly arise from:",
          list: [
            "Delayed cancer diagnosis — breast, bowel, lung, cervical, prostate and skin (melanoma)",
            "Delayed stroke or TIA diagnosis — failure to recognise warning signs",
            "Missed or delayed fracture diagnosis — failure to order X-ray or misread imaging",
            "Delayed appendicitis — failure to identify peritonitis risk",
            "Delayed meningitis diagnosis — failure to act on symptoms",
            "Delayed diagnosis of deep vein thrombosis or pulmonary embolism",
            "Failure to refer to a specialist when symptoms warranted it",
          ],
        },
        {
          heading: "The Standard of Care — Hunter v Hanley",
          content:
            "In Scotland, the standard of care in medical negligence cases is governed by the principle in Hunter v Hanley [1955] SC 200, which asks whether a competent practitioner in the relevant field would have departed from the approach taken. A departure that a body of competent practitioners would have approved is not negligent. The case is assessed against what the clinician knew or should have known at the time — not with the benefit of hindsight.",
        },
        {
          heading: "Causation — Proving the Delay Made a Difference",
          content:
            "Even where a breach of duty is established, the claimant must also show that the delayed diagnosis caused material harm — that an earlier diagnosis would have led to a better outcome. This is assessed by medical experts who compare: the likely treatment and prognosis had the diagnosis been made at the correct time; with the actual treatment and prognosis following the delayed diagnosis. In cancer cases, this often involves statistical evidence on survival rates at different stages.",
        },
        {
          heading: "Fatal Delayed Diagnosis Claims",
          content:
            "Where a delayed diagnosis contributed to a death, the deceased's family may bring a claim under the Damages (Scotland) Act 2011. This is a different structure from the law in England and Wales. Close relatives who may claim include a spouse, civil partner, children and parents. Claims can cover solatium, loss of society, and financial dependency. Seek advice at the earliest opportunity — complex medical evidence takes time to obtain.",
        },
        {
          heading: "Evidence and Process",
          content: "Delayed diagnosis claims require:",
          list: [
            "Full medical records — from the original presentations through to the correct diagnosis",
            "Expert medical evidence from a specialist in the relevant clinical field on breach",
            "Expert oncology, neurology or other specialist evidence on causation and prognosis",
            "A detailed chronology of presentations, investigations and clinical decisions",
            "Evidence of the harm suffered as a result of the delay",
          ],
        },
      ]}
      guideSlugs={[
        "medical-negligence-what-to-prove-scotland",
        "nhs-negligence-claims-scotland-explained",
        "cancer-misdiagnosis-claims-scotland",
      ]}
      locationClaimType="delayed diagnosis medical negligence claims"
      faqs={faqs}
      authoritativeSources={[
        { label: "NHS Central Legal Office Scotland — clinical negligence claims", url: "https://www.clo.scot.nhs.uk/" },
        { label: "Damages (Scotland) Act 2011 — fatal accident damages", url: "https://www.legislation.gov.uk/asp/2011/7/contents" },
        { label: "Hunter v Hanley [1955] SC 200 — standard of care in Scotland", url: "https://www.scotcourts.gov.uk/" },
      ]}
      related={[
        { label: "Medical Negligence Claims Scotland", href: "/medical-negligence-claims-scotland" },
        { label: "NHS Negligence Claims Scotland", href: "/nhs-negligence-claims-scotland" },
        { label: "Cancer Misdiagnosis Claims", href: "/cancer-misdiagnosis-claims-scotland" },
        { label: "Fatal Accident Claims", href: "/fatal-accident-claims-scotland" },
        { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
      ]}
    />
  );
}
