import type { PillarChild } from "@/data/pillarChildren";
import { limitationAct, limitationDiscretion } from "@/data/pillars/sources";

const PILLAR = "medical-negligence-claims-scotland" as const;
const PUBLISHED = "2026-09-24";

const cnoris = {
  label: "NHS National Services Scotland: Clinical Negligence and Other Risks Indemnity Scheme (CNORIS)",
  url: "https://www.nss.nhs.scot/legal/clinical-negligence-and-other-risks-indemnity-scheme-cnoris/guide-to-the-clinical-negligence-and-other-risks-indemnity-scheme-cnoris/",
};
const damagesAct2011 = {
  label: "Damages (Scotland) Act 2011",
  url: "https://www.legislation.gov.uk/asp/2011/7/contents",
};
const montgomery = {
  label: "Montgomery v Lanarkshire Health Board [2015] UKSC 11 — Supreme Court press summary",
  url: "https://caselaw.nationalarchives.gov.uk/uksc/2015/11/press-summary/1",
};
const nhsComplaints = {
  label: "NHS inform: Feedback, complaints and your rights",
  url: "https://www.nhsinform.scot/care-support-and-rights/health-rights/feedback-and-complaints/feedback-complaints-and-your-rights",
};

const standardOfCare =
  "The Scottish test comes from Hunter v Hanley (1955). To succeed where a doctor is said to have departed from normal practice, a pursuer has to show that there is a usual and normal practice, that the defender did not follow it, and that no professional of ordinary skill acting with ordinary care would have taken the course the defender took. A poor outcome, or a recognised complication, is not by itself negligence.";

export const medicalNegligenceChildren: PillarChild[] = [
  // -------------------------------------------------------------------- surgical
  {
    pillar: PILLAR,
    slug: "surgical-negligence-claims",
    h1: "Surgical Negligence Claims in Scotland",
    metaTitle: "Surgical Negligence Claims Scotland — What Must Be Proved",
    description:
      "How surgical negligence claims work in Scotland: the Hunter v Hanley test, consent, complications versus negligence, NHS and private claims, evidence and time limits.",
    hubLabel: "Surgical negligence claims",
    hubDescription: "Errors during or after an operation, and what must be proved",
    intro:
      "Surgery always carries risk, and a complication is not automatically negligence. But where an operation was performed carelessly, or the risks and alternatives were not properly explained, a claim may be possible. This page explains the legal test in Scotland, the evidence needed and the time limits. It is general information, not legal advice.",
    tldr: [
      "A recognised complication is not automatically negligence; the question is whether the care fell below the accepted standard.",
      "The Scottish test comes from Hunter v Hanley (1955) and normally needs independent expert evidence.",
      "Consent is judged separately, under Montgomery v Lanarkshire Health Board (2015).",
      "NHS boards are usually the defender for hospital surgeons, and claims are backed by the CNORIS scheme.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "You may have a surgical negligence claim in Scotland if the surgery or after-care fell below the standard expected of a reasonably competent practitioner and this caused you avoidable harm, or if you were not told about material risks or reasonable alternatives. A known complication alone is not enough. Independent expert evidence is normally essential, and the general time limit is three years from the date of the injury or date of knowledge.",
    sections: [
      {
        heading: "Complication or negligence?",
        content:
          "Every operation has known risks even when done properly, such as bleeding, infection or nerve injury. A claim needs more than a bad result. It needs evidence that the surgeon, anaesthetist or team did something, or failed to do something, that fell below the accepted standard, and that this caused harm that would otherwise have been avoided.",
      },
      {
        heading: "The legal test in Scotland",
        content: standardOfCare,
      },
      {
        heading: "Examples of what may give rise to a claim",
        content: "Situations that are commonly examined in surgical claims include:",
        list: [
          "Operating on the wrong site, side or patient",
          "Retained swabs, instruments or other items",
          "Damage to nerves, bowel, blood vessels or other structures beyond an accepted risk",
          "Anaesthetic errors or failure to monitor during surgery",
          "Failure to recognise and treat a post-operative complication in time",
          "Inadequate supervision of a junior surgeon",
          "Failure to obtain proper consent",
        ],
      },
      {
        heading: "Consent is a separate question",
        content:
          "Even if the operation was performed competently, you may have a claim if you were not properly told about a material risk or a reasonable alternative and you would have chosen differently. That test comes from Montgomery v Lanarkshire Health Board (2015), not from Hunter v Hanley. Our page on informed consent explains it.",
        linkedList: [
          { text: "Informed consent claims in Scotland", href: "/medical-negligence-claims-scotland/informed-consent-claims" },
        ],
      },
      {
        heading: "Who is the defender",
        content:
          "Hospital surgeons and staff working for an NHS board are normally employed by the board, which is then the defender. NHS boards in Scotland are members of the Clinical Negligence and Other Risks Indemnity Scheme (CNORIS), and the NHS Central Legal Office provides legal advice on claims. Private hospitals and consultants are different, and may have separate insurers or indemnifiers. Working out who was responsible for each stage of care is an early step.",
      },
      {
        heading: "Evidence",
        content: "A surgical negligence claim usually depends on the following:",
        list: [
          "Your complete medical records, including consent forms, operation notes, anaesthetic charts and nursing notes",
          "A record of what you were told before the operation, and by whom",
          "Independent expert reports on standard of care, causation and your prognosis",
          "Photographs and details of scarring or functional loss, and its effect on daily life and work",
          "Records of the cost of any corrective treatment",
        ],
      },
      {
        heading: "Time limits",
        content:
          "Under section 17 of the Prescription and Limitation (Scotland) Act 1973 the general period is three years from the date of the injury or, if later, the date you knew, or could reasonably have known, that it was significant and attributable to an act or omission of someone else. Different rules apply to children and adults lacking capacity. Section 19A gives the court a limited discretion to allow a late claim, which should not be relied on.",
      },
    ],
    faqs: [
      {
        question: "Is a complication after surgery always negligence?",
        answer:
          "No. Recognised complications can occur even when surgery is performed properly. A claim needs evidence that the care fell below the standard of a reasonably competent practitioner and that this, rather than the underlying risk, caused the harm.",
      },
      {
        question: "What is the legal test for surgical negligence in Scotland?",
        answer:
          "The test comes from Hunter v Hanley (1955). Where a departure from normal practice is alleged, the pursuer must show a usual and normal practice, that the defender did not follow it, and that no professional of ordinary skill acting with ordinary care would have taken the course the defender took.",
      },
      {
        question: "Do I need an expert to bring a surgical negligence claim?",
        answer:
          "Almost always. Independent expert evidence from a suitably qualified surgeon is normally needed on the standard of care and on causation, and other experts may be needed on your prognosis and losses.",
      },
      {
        question: "Can I claim if I was not warned about a risk that then happened?",
        answer:
          "Possibly. Under Montgomery v Lanarkshire Health Board (2015) a doctor must take reasonable care to ensure the patient knows of material risks and reasonable alternatives. You would also need to show that, properly informed, you would have chosen differently.",
      },
      {
        question: "Who do I claim against if I was treated on the NHS?",
        answer:
          "Usually the NHS health board responsible for the hospital, which is legally responsible for its employed staff. NHS boards in Scotland are covered by the CNORIS scheme, and the NHS Central Legal Office advises on claims. Private treatment is different.",
      },
      {
        question: "How long do I have to make a surgical negligence claim?",
        answer:
          "The general time limit is three years from the date of the injury or, if later, the date of knowledge. Children and adults lacking capacity have different rules. Do not rely on the court's discretion to allow late claims.",
      },
    ],
    sources: [
      cnoris,
      montgomery,
      { label: "NHS inform: Feedback, complaints and your rights", url: nhsComplaints.url },
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["medical-negligence-what-to-prove-scotland", "nhs-negligence-claims-scotland-explained", "evidence-for-personal-injury-claim-scotland"],
    related: [{ label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // -------------------------------------------------------------------- hospital
  {
    pillar: PILLAR,
    slug: "hospital-negligence-claims",
    h1: "Hospital Negligence Claims in Scotland",
    metaTitle: "Hospital Negligence Claims Scotland — Ward and Emergency Care",
    description:
      "Hospital negligence claims in Scotland: failures in emergency, ward and discharge care, falls, pressure sores and monitoring, who is responsible, evidence and time limits.",
    hubLabel: "Hospital negligence claims",
    hubDescription: "Emergency, ward and discharge care failures",
    intro:
      "Most hospital care is safe and skilled, but when monitoring, treatment or communication fails, the harm can be serious. If you were injured because hospital care fell below the accepted standard, you may be able to claim. This page explains the ground covered by hospital claims in Scotland, who is responsible and what evidence matters. It is general information, not legal advice.",
    tldr: [
      "Hospital claims can arise from emergency department decisions, ward monitoring, medication, falls, pressure sores and unsafe discharge.",
      "The test is whether care fell below the standard of a reasonably competent practitioner and caused avoidable harm.",
      "NHS boards are usually the defender for hospital staff they employ.",
      "Medical records and independent expert evidence are central.",
      "A complaint and a claim are separate, with different time limits.",
    ],
    answerBox:
      "You may be able to claim for hospital negligence in Scotland if hospital staff failed to provide care of the standard expected of a reasonably competent practitioner and this caused you avoidable harm. The claim is usually made against the NHS health board responsible, and independent expert evidence is normally needed. The general time limit is three years from the injury or date of knowledge, and a complaint does not stop that clock.",
    sections: [
      {
        heading: "Where hospital care can go wrong",
        content: "Claims commonly examine failures such as:",
        list: [
          "Delay in assessing, escalating or treating a deteriorating patient",
          "Emergency department errors, including missed injuries or misread scans",
          "Failure to monitor observations, fluid balance, blood sugar or after-effects of surgery",
          "Falls in hospital where risk assessments or precautions were not carried out",
          "Pressure sores that developed because turning, skin checks or equipment were neglected",
          "Medication errors, including wrong drug, wrong dose or missed doses",
          "Unsafe or premature discharge without proper follow-up",
          "Poor communication or handover between teams",
        ],
      },
      {
        heading: "The legal standard",
        content: standardOfCare,
      },
      {
        heading: "Who is responsible",
        content:
          "Doctors, nurses and other staff employed by an NHS board are normally the board's responsibility, and the board is the defender in a claim. NHS boards are members of CNORIS and the NHS Central Legal Office advises them. A private hospital, an agency nurse or an independent contractor may raise different questions, so the first step in any claim is establishing who was responsible for the care at each stage.",
      },
      {
        heading: "Causation is often the hard part",
        content:
          "A patient who was already seriously ill may have been harmed by the illness rather than by any failing. The claim has to show, on the balance of probabilities, that different care would have avoided or reduced the harm. Expert evidence on what would have happened with proper care is usually decisive.",
      },
      {
        heading: "Records, complaints and evidence",
        content:
          "You can ask for your health records, which is usually free, and request them early. Observation charts, nursing notes, medication records, imaging and discharge letters are often key. Keep any letters from the health board, and note the names of staff and dates where you can. A complaint to the health board is a separate process from a claim and does not stop the limitation clock. See our page on NHS complaints and the duty of candour.",
        linkedList: [
          { text: "NHS complaints, the duty of candour and negligence claims", href: "/medical-negligence-claims-scotland/nhs-complaints-and-duty-of-candour" },
        ],
      },
      {
        heading: "Related hospital issues covered elsewhere",
        content: "These topics have their own guidance:",
        linkedList: [
          { text: "Hospital-acquired infection claims", href: "/hospital-infection-claims-scotland" },
          { text: "Delayed diagnosis claims", href: "/delayed-diagnosis-claims-scotland" },
          { text: "Prescription error claims", href: "/prescription-error-claims-scotland" },
          { text: "Birth injury claims", href: "/birth-injury-claims-scotland" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 gives three years from the date of the injury or date of knowledge. Children and adults lacking capacity are treated differently. Section 19A gives the court a limited discretion, which should not be relied upon.",
      },
    ],
    faqs: [
      {
        question: "Can I claim if I fell in hospital?",
        answer:
          "Possibly. A claim would look at whether hospital staff assessed your falls risk and took reasonable precautions, whether you were left unsupervised when you needed help, and whether the fall caused harm that would otherwise not have occurred. Records of the risk assessment and incident report are important.",
      },
      {
        question: "Can I claim for a pressure sore that developed in hospital?",
        answer:
          "Possibly, if staff failed to assess your risk, reposition you, use appropriate equipment, check your skin or act when a sore developed, and this caused avoidable harm. Nursing records are key evidence.",
      },
      {
        question: "Who do I claim against for negligent NHS hospital care in Scotland?",
        answer:
          "Usually the NHS health board responsible for the hospital, which is legally responsible for staff it employs. NHS boards are members of the CNORIS scheme, and the NHS Central Legal Office advises them on claims.",
      },
      {
        question: "Does making a complaint stop the time limit running?",
        answer:
          "No. A complaint to the health board or the Scottish Public Services Ombudsman is separate from a legal claim. The three-year limitation period continues to run unless court proceedings are raised.",
      },
      {
        question: "How do I get my hospital records?",
        answer:
          "You can normally make a subject access request to the health board for your own records, which is usually free. Ask for the complete record, including observation charts, nursing notes and imaging, and keep a copy of your request.",
      },
      {
        question: "What if the patient was already seriously ill?",
        answer:
          "You can still have a claim if negligent care made the outcome worse or brought it forward, but you will need expert evidence separating the effects of the illness from the effects of any failing. The claim is for the additional harm caused, not for the underlying illness.",
      },
    ],
    sources: [
      cnoris,
      nhsComplaints,
      { label: "Healthcare Improvement Scotland", url: "https://www.healthcareimprovementscotland.scot/" },
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["nhs-negligence-claims-scotland-explained", "medical-negligence-what-to-prove-scotland", "prescription-error-claims-scotland"],
    related: [{ label: "Public Place Accident Claims", href: "/public-place-accident-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ----------------------------------------------------------------- misdiagnosis
  {
    pillar: PILLAR,
    slug: "misdiagnosis-claims",
    h1: "Misdiagnosis Claims in Scotland",
    metaTitle: "Misdiagnosis Claims Scotland — Wrong, Missed or Late Diagnosis",
    description:
      "Wrong, missed or late diagnosis in Scotland: when a diagnostic error is negligent, why causation decides many claims, evidence and time limits.",
    hubLabel: "Misdiagnosis claims",
    hubDescription: "Wrong, missed or late diagnosis and why causation matters",
    intro:
      "A misdiagnosis can mean the wrong condition was identified, the right condition was missed, or the correct diagnosis came too late. Diagnosis is hard and not every error is negligent, but where a competent practitioner would have got it right, and the mistake caused harm, a claim may be possible. This page explains the legal tests in Scotland. It is general information, not legal advice.",
    tldr: [
      "Misdiagnosis covers wrong, missed and delayed diagnosis.",
      "An honest error of judgment is not necessarily negligence; the question is whether no doctor of ordinary skill would have made it.",
      "Causation often decides the claim: would timely diagnosis and treatment have changed the outcome?",
      "Records of symptoms, appointments and test results are important evidence.",
      "The general time limit is three years from the injury or date of knowledge.",
    ],
    answerBox:
      "A misdiagnosis claim in Scotland needs two things: proof that the diagnosis fell below the standard of a reasonably competent practitioner, meaning a doctor of ordinary skill acting with ordinary care would not have made the error; and proof that the error caused you avoidable harm, meaning earlier or correct diagnosis would have led to a better outcome. The general time limit is three years from the injury or date of knowledge.",
    sections: [
      {
        heading: "Types of diagnostic error",
        content: "Diagnostic claims usually involve one of the following:",
        list: [
          "A wrong diagnosis, leading to unnecessary or harmful treatment",
          "A missed diagnosis, where symptoms or test results were not acted on",
          "A delayed diagnosis, where the right diagnosis was reached later than it should have been",
          "Misreading scans, X-rays, screening or laboratory results",
          "Failure to refer, to order tests or to follow up abnormal results",
          "Failure to take a proper history or examine the patient",
        ],
      },
      {
        heading: "The legal test",
        content: standardOfCare,
      },
      {
        heading: "Why diagnosis claims are difficult",
        content:
          "Diagnosis often involves judgment where symptoms are vague or overlap with common conditions. The law recognises that a competent doctor may reasonably reach a conclusion that later proves wrong. A claim is stronger where warning signs were clear and were ignored, guidance was not followed, tests were not ordered or results were not acted on.",
      },
      {
        heading: "Causation: what difference would it have made?",
        content:
          "Even if the diagnosis was negligently late, you must show that the delay caused harm. Expert evidence will address the likely course of the condition with timely diagnosis and treatment compared with what actually happened. In some conditions a delay makes little difference, and in others it is decisive, so this question is investigated carefully.",
      },
      {
        heading: "Evidence",
        content: "Useful evidence includes:",
        list: [
          "Your GP and hospital records, including referral letters, test requests and results",
          "A dated note of your symptoms and each appointment, and what you were told",
          "Imaging and laboratory reports, and any later corrected reports",
          "Independent expert opinion on standard of care and causation",
          "Evidence of the effect on your health, work and family life",
        ],
      },
      {
        heading: "Related pages",
        content: "Some diagnostic problems have their own guidance:",
        linkedList: [
          { text: "Delayed diagnosis claims in Scotland", href: "/delayed-diagnosis-claims-scotland" },
          { text: "Cancer misdiagnosis claims in Scotland", href: "/cancer-misdiagnosis-claims-scotland" },
          { text: "GP negligence claims in Scotland", href: "/gp-negligence-claims-scotland" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "Under section 17 of the Prescription and Limitation (Scotland) Act 1973 the general limit is three years from the date the injury was caused or, if later, the date of knowledge. With a delayed diagnosis, that is usually when you learnt that the diagnosis had been missed or late and that this had caused harm. Different rules apply to children and adults lacking capacity.",
      },
    ],
    faqs: [
      {
        question: "Is a wrong diagnosis always negligence?",
        answer:
          "No. Doctors can reach a wrong conclusion without being negligent. The question is whether no doctor of ordinary skill, acting with ordinary care, would have made the same error, applying the Hunter v Hanley test. You must also show that the error caused you harm.",
      },
      {
        question: "What if the diagnosis was late but the outcome would have been the same?",
        answer:
          "If timely diagnosis would not have changed the outcome, the delay may not have caused any actionable harm. It could still affect the period of suffering or treatment needed, which expert evidence will address.",
      },
      {
        question: "Can I claim if my GP missed my symptoms?",
        answer:
          "Possibly. A claim looks at whether the GP's actions in history-taking, examination, referral and follow-up met the standard expected, and whether a proper approach would have led to an earlier diagnosis. Records of your appointments are essential.",
      },
      {
        question: "What if a scan or test was misread?",
        answer:
          "A misread scan can support a claim if a reasonably competent radiologist or reporter would not have missed the finding, and if the miss led to delayed treatment and harm. An independent expert would review the original images.",
      },
      {
        question: "How do I get my medical records?",
        answer:
          "You can normally ask your GP practice and the relevant health board for copies of your records, which is usually free. Ask for the complete record, including test results and referral letters, and for imaging to be preserved.",
      },
      {
        question: "What is the time limit for a misdiagnosis claim in Scotland?",
        answer:
          "The general limit is three years from the date the injury was caused or, if later, the date you knew it was significant and attributable to someone's fault. For a missed diagnosis this may be later than the original appointment, but do not delay taking advice.",
      },
    ],
    sources: [
      { label: "NHS inform: Feedback, complaints and your rights", url: nhsComplaints.url },
      cnoris,
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["medical-negligence-what-to-prove-scotland", "cancer-misdiagnosis-claims-scotland", "gp-negligence-claims-scotland"],
    related: [{ label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // --------------------------------------------------------------------- consent
  {
    pillar: PILLAR,
    slug: "informed-consent-claims",
    h1: "Informed Consent Claims in Scotland: The Montgomery Test",
    metaTitle: "Informed Consent Claims Scotland — The Montgomery Test",
    description:
      "How informed consent claims work in Scotland after Montgomery v Lanarkshire Health Board: material risks, alternatives, what you must prove and time limits.",
    hubLabel: "Informed consent claims",
    hubDescription: "Material risks, alternatives and the Montgomery test",
    intro:
      "Doctors must give patients the information they need to make their own decisions about treatment. The leading case, Montgomery v Lanarkshire Health Board, came from Scotland and applies across the UK. This page explains what it says, what you would need to prove and how consent claims differ from other clinical negligence claims. It is general information, not legal advice.",
    tldr: [
      "Montgomery v Lanarkshire Health Board (2015) is a Scottish case decided by the UK Supreme Court.",
      "A doctor must take reasonable care to ensure the patient knows of material risks and of reasonable alternative treatments.",
      "A risk is material if a reasonable person in the patient's position would attach significance to it, or the doctor is or should be aware the patient would.",
      "You must also show that, properly informed, you would have chosen differently.",
      "A signed consent form is not conclusive proof of proper consent.",
    ],
    answerBox:
      "In Scotland a doctor must take reasonable care to ensure that a patient is aware of any material risks of a recommended treatment and of any reasonable alternatives. This is the Montgomery test, from Montgomery v Lanarkshire Health Board (2015). To claim, you must show that a material risk or alternative was not properly explained, that you would have chosen differently if it had been, and that the risk then materialised and caused harm.",
    sections: [
      {
        heading: "The Montgomery case",
        content:
          "Nadine Montgomery, who had diabetes, gave birth to a son who suffered severe disabilities because of shoulder dystocia. Her obstetrician had not told her of the 9 to 10 per cent risk of that complication or offered a caesarean section as an alternative. The UK Supreme Court held that the earlier approach, which asked what a responsible body of medical opinion would disclose, was not the right test for consent. The court decided that a patient is entitled to be told about material risks and reasonable alternatives.",
      },
      {
        heading: "What the test says",
        content:
          "A doctor is under a duty to take reasonable care to ensure that the patient is aware of any material risks involved in a recommended treatment, and of any reasonable alternative or variant treatments. A risk is material if, in the circumstances, a reasonable person in the patient's position would be likely to attach significance to it, or the doctor is or should reasonably be aware that this patient would attach significance to it. The court recognised only limited exceptions, such as emergencies when the patient cannot decide.",
      },
      {
        heading: "How this differs from the Hunter v Hanley test",
        content:
          "For diagnosis and treatment the Scottish standard remains that from Hunter v Hanley (1955), which asks whether the defender's course was one no professional of ordinary skill would have taken. Consent is judged on a patient-centred basis and not by what a body of doctors would say. A claim can sometimes involve both.",
      },
      {
        heading: "What you would have to prove",
        content: "A consent claim generally needs the following to be shown:",
        list: [
          "There was a material risk, or a reasonable alternative, that was not adequately explained",
          "You would have chosen differently, for example a different treatment or no treatment, had you been properly informed",
          "The risk that was not disclosed then materialised",
          "That materialisation caused you harm that you would otherwise have avoided",
        ],
      },
      {
        heading: "Consent forms and conversations",
        content:
          "A signature on a consent form is evidence but is not conclusive. What matters is what was actually discussed, how much time you had and whether the information was given in a way you could understand. Records of your consultations, patient information leaflets, and anything you wrote down at the time can all be important.",
      },
      {
        heading: "Evidence",
        content: "Useful evidence includes:",
        list: [
          "The consent form and the clinic letters or notes of the discussion",
          "Patient information leaflets you were given, and when",
          "Your own account of what was and was not said, ideally recorded soon afterwards",
          "Independent expert evidence on the risk and on alternatives available at the time",
          "Evidence of the treatment you say you would have chosen instead",
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 17 of the Prescription and Limitation (Scotland) Act 1973 gives three years from the date the injury was caused or, if later, the date of knowledge. For consent claims the date of knowledge may be when you first realised that you had not been told of a risk that then happened. Do not delay in taking advice.",
      },
    ],
    faqs: [
      {
        question: "What is the Montgomery test for consent?",
        answer:
          "It comes from Montgomery v Lanarkshire Health Board (2015). A doctor must take reasonable care to ensure the patient knows of any material risks of a recommended treatment and of any reasonable alternative treatments. A risk is material if a reasonable person in the patient's position would attach significance to it, or the doctor is or should be aware that this patient would.",
      },
      {
        question: "Does signing a consent form mean I gave informed consent?",
        answer:
          "Not necessarily. A signed form is evidence, but the question is what was actually explained to you and whether it covered the material risks and alternatives. A form signed shortly before treatment, without discussion, may carry little weight.",
      },
      {
        question: "Do I have to prove I would have declined the treatment?",
        answer:
          "You must show that, properly informed, you would have made a different choice, such as choosing an alternative treatment or declining. In Montgomery the court accepted that she would have chosen a caesarean section. Your own account and the surrounding circumstances are considered.",
      },
      {
        question: "Does the doctor have to tell me about every possible risk?",
        answer:
          "No. The duty covers material risks, not every conceivable one. Materiality depends on the significance the risk would have for a reasonable person in your position, and on what the doctor knew or should have known about you.",
      },
      {
        question: "Are there exceptions to the duty to disclose?",
        answer:
          "Only limited ones. The Supreme Court recognised, for example, that a doctor may treat without disclosure in an emergency where the patient cannot decide, and that in rare cases information may be withheld if disclosure would be seriously detrimental to health. These exceptions are narrow.",
      },
      {
        question: "What is the time limit for a consent claim in Scotland?",
        answer:
          "The general limit is three years from the date the injury was caused or, if later, the date you knew it was significant and attributable to someone's fault. For consent claims, that may be when you first learned that a risk should have been disclosed, but seek advice promptly.",
      },
    ],
    sources: [
      montgomery,
      cnoris,
      limitationAct,
      limitationDiscretion,
    ],
    guideSlugs: ["medical-negligence-what-to-prove-scotland", "birth-injury-claims-scotland", "nhs-negligence-claims-scotland-explained"],
    related: [{ label: "Serious Injury Claims", href: "/serious-injury-claims-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ---------------------------------------------------- complaints and candour
  {
    pillar: PILLAR,
    slug: "nhs-complaints-and-duty-of-candour",
    h1: "NHS Complaints, the Duty of Candour and Negligence Claims in Scotland",
    metaTitle: "NHS Complaints and Duty of Candour Scotland — Claims Explained",
    description:
      "How NHS complaints in Scotland, the organisational duty of candour and the Ombudsman relate to a negligence claim, including time limits and what each route can achieve.",
    hubLabel: "NHS complaints and duty of candour",
    hubDescription: "Complaints, apologies and how they relate to a claim",
    intro:
      "After harm in healthcare, people often want answers, an apology and reassurance that it will not happen again, and sometimes compensation. In Scotland these aims are pursued through different routes: the NHS complaints procedure, the Scottish Public Services Ombudsman, the duty of candour and a legal claim. This page explains how they fit together. It is general information, not legal advice.",
    tldr: [
      "A complaint and a negligence claim are separate processes with different aims and time limits.",
      "NHS complaints should normally be made within 6 months of the event or of realising there was cause for complaint, and generally no later than 12 months after the event.",
      "You normally complete the health board's complaints process before going to the Scottish Public Services Ombudsman.",
      "An organisational duty of candour has applied to health and care services in Scotland since 1 April 2018.",
      "Neither a complaint nor a candour process stops the three-year limitation period.",
    ],
    answerBox:
      "In Scotland, an NHS complaint asks the health board to explain and put things right. It is separate from a negligence claim, which seeks compensation and has its own three-year time limit. Complaints should normally be made within 6 months of the event or of finding out about it, and no later than 12 months after the event unless there is good reason. A complaint does not stop the limitation clock for a claim.",
    sections: [
      {
        heading: "Making an NHS complaint",
        content:
          "NHS inform explains that you can give feedback or complain to the health board or service that provided the care. Normally a complaint must be made within 6 months of the event, or within 6 months of finding out there was a reason to complain, but no more than 12 months after the event, although the time limit can sometimes be extended. Complaints are handled in stages, starting with early resolution and moving to a formal investigation if needed. Independent help is available from the Patient Advice and Support Service run by Citizens Advice Scotland.",
      },
      {
        heading: "The Scottish Public Services Ombudsman",
        content:
          "If you are unhappy with the health board's final response, you can take the complaint to the Scottish Public Services Ombudsman (SPSO), the final stage for complaints about public services in Scotland. The SPSO explains that you normally must first have completed the board's complaints process, and should complain within a year of becoming aware of the matter, with discretion to extend in special circumstances. The Ombudsman can recommend remedies such as an apology or action to improve, but does not award damages in the way a court can.",
      },
      {
        heading: "The organisational duty of candour",
        content:
          "The Health (Tobacco, Nicotine etc. and Care) (Scotland) Act 2016 introduced an organisational duty of candour on health, care and social work services, which took effect on 1 April 2018. Where an unintended or unexpected incident results in death or harm of a kind defined in the Act, the organisation must follow a procedure that includes notifying the person affected, apologising, offering a meeting to give an account of what happened, reviewing the incident and offering support. The Act provides that an apology or other step taken under the procedure does not of itself amount to an admission of negligence or breach of statutory duty.",
      },
      {
        heading: "How these routes differ from a claim",
        content: "The routes have different purposes:",
        list: [
          "A complaint seeks an explanation, apology and changes to practice, not compensation",
          "The Ombudsman reviews whether the board handled the complaint and the care properly and can recommend remedies",
          "The duty of candour requires openness and an account of what happened but does not decide legal liability",
          "A negligence claim seeks damages and needs proof of breach of the standard of care and of causation",
        ],
      },
      {
        heading: "Can I do both?",
        content:
          "Yes. Many people complain and also take advice about a claim. The information you obtain through a complaint, such as a written investigation report, can help you understand what happened, and the health board's own records are important evidence. Be aware that a complaint does not pause or extend the three-year limitation period for a claim, and that only raising court proceedings stops it running.",
      },
      {
        heading: "Time limits compared",
        content:
          "Complaints to the health board have a short period, normally 6 months from the event or from realising there was a cause for complaint, with an outer limit of 12 months from the event. The SPSO period is about a year from becoming aware. A negligence claim generally has three years under section 17 of the Prescription and Limitation (Scotland) Act 1973 from the date of injury or date of knowledge. Because the complaint and claim periods differ, take advice early if you are considering both.",
      },
    ],
    faqs: [
      {
        question: "How long do I have to make an NHS complaint in Scotland?",
        answer:
          "Normally within 6 months of the event you want to complain about, or within 6 months of finding out there was a reason to complain, but no later than 12 months after the event. The time limit can sometimes be extended if there was good reason for the delay.",
      },
      {
        question: "What is the Scottish Public Services Ombudsman?",
        answer:
          "The SPSO is the final stage for complaints about most public services in Scotland, including the NHS. It normally considers a complaint only after the health board's own process is complete, and you should generally complain within a year of becoming aware of the matter.",
      },
      {
        question: "What is the duty of candour?",
        answer:
          "It is a legal duty on health, care and social work organisations in Scotland, in force since 1 April 2018. When an unintended or unexpected incident causes death or defined harm, the organisation must follow a procedure that includes notifying the person affected, apologising, offering a meeting and reviewing the incident.",
      },
      {
        question: "Does an apology under the duty of candour mean the NHS admits negligence?",
        answer:
          "No. The 2016 Act provides that an apology or other step taken under the duty of candour procedure does not of itself amount to an admission of negligence or breach of statutory duty. Legal liability is decided separately.",
      },
      {
        question: "Does making a complaint stop the time limit for a claim?",
        answer:
          "No. Only raising court proceedings stops the three-year limitation period. A complaint, an SPSO investigation or a candour review does not pause it.",
      },
      {
        question: "Can I get compensation through a complaint?",
        answer:
          "Not in the way a court can award damages. A complaint can lead to an explanation, an apology and changes in practice. If you want compensation you would need to bring a negligence claim, which has different legal tests and a different time limit.",
      },
    ],
    sources: [
      nhsComplaints,
      { label: "SPSO: Time limit for making complaints", url: "https://www.spso.org.uk/time-limit-for-making-complaints-to-spso" },
      { label: "Health (Tobacco, Nicotine etc. and Care) (Scotland) Act 2016 — duty of candour procedure", url: "https://www.legislation.gov.uk/asp/2016/14/part/2/crossheading/duty-of-candour-procedure" },
      { label: "Patient Rights (Scotland) Act 2011", url: "https://www.legislation.gov.uk/asp/2011/5/contents" },
      limitationAct,
    ],
    guideSlugs: ["nhs-negligence-claims-scotland-explained", "medical-negligence-what-to-prove-scotland", "personal-injury-claim-time-limit-scotland"],
    related: [{ label: "Personal Injury Time Limits", href: "/personal-injury-claim-time-limits-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  // ------------------------------------------------------------------------ fatal
  {
    pillar: PILLAR,
    slug: "fatal-medical-negligence-claims",
    h1: "Fatal Medical Negligence Claims in Scotland",
    metaTitle: "Fatal Medical Negligence Claims Scotland — Family Claims",
    description:
      "When a death may have been caused by medical negligence in Scotland: who can claim under the Damages (Scotland) Act 2011, what can be recovered, time limits and inquiries.",
    hubLabel: "Fatal medical negligence claims",
    hubDescription: "Family claims after a death caused by negligent care",
    intro:
      "Losing someone after healthcare that may have fallen short is devastating, and families often want to know what went wrong and whether they have a legal claim. This page explains who can claim in Scotland, what can be recovered, how the Procurator Fiscal and inquiries fit in, and the time limits. It is general information, not legal advice.",
    tldr: [
      "Close relatives may claim under the Damages (Scotland) Act 2011 where death resulted from negligent care.",
      "Recoverable losses can include loss of support, funeral expenses and compensation for distress, grief and loss of society for immediate family.",
      "The claim still requires proof of breach of the standard of care and that it caused the death.",
      "The Procurator Fiscal may investigate some deaths, and a Fatal Accident Inquiry can be held where the Lord Advocate considers it in the public interest.",
      "Time limits for a family claim generally run from the date of death or the date of knowledge.",
    ],
    answerBox:
      "In Scotland, close relatives of someone who died because of negligent medical care can bring a claim under the Damages (Scotland) Act 2011. Recoverable amounts can include loss of financial support, funeral expenses, and, for immediate family, compensation for distress, grief and sorrow and loss of society. The family must prove the care fell below the standard expected and that it caused the death. The general time limit is three years from the death or date of knowledge.",
    sections: [
      {
        heading: "Who can claim",
        content:
          "The 2011 Act defines who counts as a relative, including a spouse, civil partner or cohabiting partner, a parent or child, and others accepted as part of the family. Section 4 makes the responsible person liable to immediate family for the sums described below, and to other relatives for loss of support only. Whether a particular person is a qualifying relative, and what they can claim, can turn on their relationship to the person who died.",
      },
      {
        heading: "What can be recovered",
        content:
          "Under section 4 of the 2011 Act the sums that can be claimed are compensation for loss of support the relative has suffered or is likely to suffer after the death, together with reasonable funeral expenses; and, for immediate family, a sum the court thinks just for distress and anxiety endured in contemplation of the person's suffering before death, for grief and sorrow, and for loss of the society and guidance of the person who died. The statute does not fix a set sum; it is for the court to decide what it considers just.",
      },
      {
        heading: "What must be proved",
        content: standardOfCare,
      },
      {
        heading: "Causation is central",
        content:
          "The family must show, on the balance of probabilities, that the negligent care caused or materially contributed to the death, and that with proper care the person would have lived or lived longer. Where the person was already seriously ill, expert evidence is needed to separate the effect of the illness from the effect of the failing.",
      },
      {
        heading: "The Procurator Fiscal and inquiries",
        content:
          "In Scotland, certain deaths are reported to the Crown Office and Procurator Fiscal Service, which investigates and decides whether further action is appropriate. A Fatal Accident Inquiry is mandatory only in specified cases, such as deaths in the course of employment or in custody. Otherwise the Lord Advocate may direct one where it is in the public interest. Families can ask the Procurator Fiscal about the position. An inquiry does not decide civil liability, but its findings can be valuable evidence.",
      },
      {
        heading: "Complaints and candour",
        content:
          "Families can complain to the health board and, after that, to the Scottish Public Services Ombudsman, and the duty of candour may apply. These routes are separate from a claim and do not stop the limitation period. See our page on complaints and the duty of candour.",
        linkedList: [
          { text: "NHS complaints, the duty of candour and negligence claims", href: "/medical-negligence-claims-scotland/nhs-complaints-and-duty-of-candour" },
        ],
      },
      {
        heading: "Time limits",
        content:
          "Section 18 of the Prescription and Limitation (Scotland) Act 1973 applies where death results from personal injuries, generally allowing three years from the date of death or, if later, the date the relative knew or could reasonably have known that the death was attributable to an act or omission. A court has a limited discretion under section 19A to allow a late claim, which should not be relied upon. If the person began a claim before dying, a solicitor can advise how it continues.",
      },
    ],
    faqs: [
      {
        question: "Who can claim if someone dies because of medical negligence in Scotland?",
        answer:
          "Qualifying relatives under the Damages (Scotland) Act 2011, which include a spouse, civil partner, cohabitant, parents and children. Immediate family can claim for loss of support, funeral expenses and for distress, grief and loss of society. Other relatives may claim loss of support only.",
      },
      {
        question: "How much compensation can a family recover?",
        answer:
          "The Act does not set a fixed figure. Loss of support is calculated from the actual financial dependency, and other sums are what the court considers just. The amount depends on the relationship, the circumstances and the evidence.",
      },
      {
        question: "Will there be a Fatal Accident Inquiry?",
        answer:
          "Not automatically. Inquiries are mandatory in specified cases such as deaths in the course of employment or in custody. Otherwise the Lord Advocate may direct an inquiry where it is in the public interest. Families can ask the Procurator Fiscal about the position.",
      },
      {
        question: "What is the time limit for a fatal medical negligence claim?",
        answer:
          "Generally three years from the date of death or, if later, the date the relative knew or could reasonably have known that the death was attributable to negligence. The court has a limited discretion to allow late claims, but it should not be relied upon.",
      },
      {
        question: "Can we complain to the health board as well as claim?",
        answer:
          "Yes. A complaint, an SPSO investigation and the duty of candour process are separate from a claim and can provide information. None of them stops the limitation period, so take advice early if you are considering a claim.",
      },
      {
        question: "Do we need expert evidence?",
        answer:
          "Yes. A claim depends on independent expert medical evidence about the standard of care and whether it caused the death, and often on evidence from a pathologist or other specialist. Your medical records are the starting point.",
      },
    ],
    sources: [
      damagesAct2011,
      { label: "Damages (Scotland) Act 2011, section 4 — sums payable to relatives", url: "https://www.legislation.gov.uk/asp/2011/7/section/4" },
      { label: "COPFS: Guide to Fatal Accident Inquiries", url: "https://www.copfs.gov.uk/services/bereavement-support/guide-to-fatal-accident-inquiries/" },
      { label: "Inquiries into Fatal Accidents and Sudden Deaths etc. (Scotland) Act 2016", url: "https://www.legislation.gov.uk/asp/2016/2/contents" },
      { label: "Prescription and Limitation (Scotland) Act 1973, section 18 — death claims", url: "https://www.legislation.gov.uk/ukpga/1973/52/section/18" },
      limitationDiscretion,
    ],
    guideSlugs: ["fatal-accident-compensation-scotland", "medical-negligence-what-to-prove-scotland", "nhs-negligence-claims-scotland-explained"],
    related: [{ label: "Fatal Accident Compensation Guide", href: "/guides/fatal-accident-compensation-scotland" }],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];
