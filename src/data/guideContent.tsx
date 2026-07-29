import Link from "next/link";
import type { ReactNode } from "react";
import { extendedGuideArticles } from "@/data/extendedGuideContent";

function Article({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

const articles: Record<string, ReactNode> = {

  "personal-injury-claim-time-limit-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          In Scotland, the general time limit for personal injury claims is <strong>three years</strong> from the
          date of the accident, or from the date of knowledge — whichever is later. Different rules apply for
          children, adults lacking capacity, industrial disease and fatal accident claims.
        </p>
      </div>

      <h2>The Three-Year Limitation Period in Scotland</h2>
      <p>
        If you have been injured in an accident in Scotland, you generally have three years from the date of the
        accident to raise court proceedings. This three-year period is often called the triennium and is governed by
        the Prescription and Limitation (Scotland) Act 1973. If proceedings are not raised in time, the action may
        become time-barred. Section 19A gives the court a discretion to allow an otherwise time-barred action, but
        an extension should never be assumed.
      </p>

      <h2>What is the &quot;Date of Knowledge&quot;?</h2>
      <p>
        The three-year period does not always run from the date of the accident. In some cases, it runs from the
        &quot;date of knowledge&quot; — the date when you first knew, or ought reasonably to have known, all of the following:
      </p>
      <ul>
        <li>That the injury or condition was significant</li>
        <li>That it was caused by an act or omission of another person or organisation</li>
        <li>The identity of that person or organisation</li>
      </ul>
      <p>
        The date of knowledge rule is particularly important in medical negligence and industrial disease claims,
        where the connection between a harmful act or exposure and a resulting condition may not be apparent
        for years.
      </p>

      <h2>Industrial Disease: When Does the Clock Start?</h2>
      <p>
        Workers exposed to harmful substances or conditions at work — asbestos, excessive noise, vibrating
        tools — may not develop symptoms until many years or even decades later. In these cases, the three-year
        period runs from the date you were diagnosed, or from the date you first knew that your condition
        was caused by your working conditions. This means that claims can often be made many years after
        the original exposure occurred.
      </p>

      <h2>Time Limits for Children</h2>
      <p>
        In Scotland, the general position is that the three-year period does not begin to run until a child
        reaches the age of 16. This means a child who was injured at age 10 would, in most cases, have
        until their 19th birthday to bring a claim. However, a parent or guardian can bring a claim on the
        child&apos;s behalf during their minority — and it is generally advisable to do so to preserve evidence.
      </p>

      <h2>Adults Lacking Legal Capacity</h2>
      <p>
        Adults who lack legal capacity due to mental incapacity are protected under the Adults with Incapacity
        (Scotland) Act 2000. The limitation period is generally suspended for as long as the adult lacks
        capacity. If you are acting as guardian or welfare attorney for a person who has been injured, seek
        legal advice promptly.
      </p>

      <h2>Medical Negligence: Date of Knowledge</h2>
      <p>
        In clinical negligence cases, patients may not immediately know that their harm was caused by a
        medical error rather than an unavoidable complication. The date of knowledge is the date when
        you knew — or ought reasonably to have known — that your harm was caused by negligent medical care.
        This can extend the time in which a claim can be made, but identifying the date of knowledge
        in complex cases often requires expert advice.
      </p>

      <h2>Fatal Accident Claims</h2>
      <p>
        Where a person has died as a result of negligence, the family may bring a claim under the Damages
        (Scotland) Act 2011. The time limit is generally three years from the date of death, or three years
        from the date the family became aware that the death was caused by another party&apos;s negligence.
      </p>

      <h2>Criminal Injury Claims — CICA</h2>
      <p>
        If you are claiming compensation through the Criminal Injuries Compensation Authority (CICA) following
        a violent crime, the time limit is generally <strong>two years</strong> from the date of the crime.
        This is shorter than the standard personal injury limitation period.
      </p>

      <h2>What Happens If You Miss the Deadline?</h2>
      <p>
        Section 19A of the 1973 Act gives the court discretion to allow an action despite expiry of the
        ordinary limitation period. That decision is fact-sensitive and uncertain; it is not a substitute for
        raising proceedings on time. Seek advice promptly after an accident, diagnosis or possible date of knowledge.
      </p>

      <h2>Why You Should Act Early</h2>
      <p>
        Even if your three-year period has not expired, there are important reasons not to delay:
      </p>
      <ul>
        <li>Evidence can be lost or destroyed — CCTV footage may be overwritten within weeks</li>
        <li>Witnesses&apos; memories fade over time</li>
        <li>Medical evidence is strongest when obtained closest to the accident</li>
        <li>Early legal advice allows you to understand your position and make informed decisions</li>
      </ul>

      <p>
        <Link href="/contact" className="text-red-700 font-medium hover:underline">
          Contact us today for a free assessment →
        </Link>
      </p>
    </Article>
  ),

  "accident-at-work-claim-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          Yes. In Scotland, you can claim compensation if you were injured at work within the last three years
          and your employer (or another party) was negligent. You do not lose your job protection by making a
          legitimate workplace injury claim. Your employer&apos;s liability insurers will handle the claim.
        </p>
      </div>

      <h2>Your Employer&apos;s Duty of Care in Scotland</h2>
      <p>
        Employers in Scotland have a legal duty of care to their employees — both under the common law of delict
        and under health and safety legislation including the Health and Safety at Work etc. Act 1974 and its
        associated regulations. This duty means employers must:
      </p>
      <ul>
        <li>Provide a safe place of work</li>
        <li>Provide safe equipment and machinery</li>
        <li>Provide adequate training and supervision</li>
        <li>Implement safe systems of work</li>
        <li>Carry out appropriate risk assessments</li>
      </ul>
      <p>
        If your employer breaches this duty and you suffer an injury as a result, you may have a valid
        workplace accident claim.
      </p>

      <h2>Common Types of Accident at Work Claim in Scotland</h2>
      <p>
        Workplace accident claims arise in many different circumstances, including:
      </p>
      <ul>
        <li>Falls from height — scaffolding, ladders, elevated work platforms</li>
        <li>Manual handling injuries — lifting, lowering, pushing, pulling</li>
        <li>Slips, trips and falls — wet floors, poor lighting, uneven surfaces</li>
        <li>Being struck by falling objects or moving vehicles</li>
        <li>Machinery and equipment accidents</li>
        <li>Defective tools and equipment</li>
        <li>Exposure to hazardous substances</li>
        <li>Construction and site accidents</li>
        <li>Factory and warehouse accidents</li>
      </ul>

      <h2>Will I Lose My Job If I Claim?</h2>
      <p>
        Your employer cannot legally dismiss you or subject you to any detriment simply because you have made
        a legitimate personal injury claim. Making a claim is a legal right. Furthermore, the claim will
        generally be handled by your employer&apos;s employers&apos; liability insurers — not your employer directly.
        If you are concerned about your employment position, speak to your solicitor.
      </p>

      <h2>Reporting Your Accident at Work</h2>
      <p>
        You should report your accident to your employer as soon as possible and ask for it to be recorded
        in the accident book. You should also request a copy of the accident report. Under RIDDOR (Reporting
        of Injuries, Diseases and Dangerous Occurrences Regulations 2013), certain accidents must also be
        reported to the Health and Safety Executive.
      </p>
      <p>
        Failing to report your accident does not prevent you from claiming, but a contemporaneous record
        is strong evidence of what happened and when.
      </p>

      <h2>Gathering Evidence for a Workplace Accident Claim</h2>
      <ul>
        <li>Photograph the scene, any hazards and your injuries</li>
        <li>Obtain contact details for any witnesses</li>
        <li>Keep a copy of the accident report</li>
        <li>Attend your GP or hospital and keep all medical records</li>
        <li>Keep payslips and employment records for wage loss calculations</li>
        <li>Note any comments made by your employer or colleagues at the time</li>
      </ul>

      <h2>Time Limits for Work Accident Claims in Scotland</h2>
      <p>
        The general time limit is three years from the date of the accident. For industrial disease claims
        where symptoms develop over time, the three years runs from your date of knowledge. Do not delay —
        contact a solicitor as early as possible.
      </p>

      <p>
        <Link href="/accident-at-work-claims-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about accident at work claims in Scotland →
        </Link>
      </p>
    </Article>
  ),

  "evidence-for-personal-injury-claim-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          The most important evidence for a Scottish personal injury claim includes medical records, photographs
          of the scene and injuries, witness details, an accident report, and payslips or employment records
          for wage loss. Your solicitor will help you identify and gather the evidence specific to your case.
        </p>
      </div>

      <h2>Why Evidence Matters in Scottish Personal Injury Claims</h2>
      <p>
        In Scotland, the burden of proof in a personal injury claim rests with the person making the claim
        (the pursuer). You must prove, on the balance of probabilities, that the other party was negligent
        and that their negligence caused your injury. Evidence is the foundation of your claim — the stronger
        your evidence, the stronger your position when negotiating with insurers or pursuing proceedings.
      </p>

      <h2>Medical Evidence</h2>
      <p>
        Medical evidence is usually the most important element of a personal injury claim. This includes:
      </p>
      <ul>
        <li>GP records and notes made around the time of the accident</li>
        <li>Hospital records, A&amp;E records and discharge notes</li>
        <li>Physiotherapy, occupational therapy and specialist consultation records</li>
        <li>An independent medical expert&apos;s report — commissioned through your solicitor to assess the nature and prognosis of your injuries</li>
      </ul>
      <p>
        You should seek medical attention as soon as possible after your accident, even if your injury
        seems minor. A contemporaneous medical record is much stronger evidence than a medical examination
        conducted months later.
      </p>

      <h2>Photographs and Video</h2>
      <p>
        Photographs taken at or near the time of the accident can be powerful evidence. Try to capture:
      </p>
      <ul>
        <li>The accident scene — before anything is cleared up or repaired</li>
        <li>Any hazard or defect that caused the accident</li>
        <li>Your injuries — swelling, bruising, lacerations, scarring</li>
        <li>Any damaged property (vehicle damage, torn clothing)</li>
      </ul>
      <p>
        CCTV footage can also be crucial — particularly in supermarket and public place accident claims.
        If your accident was caught on CCTV, ask your solicitor to write to the premises owner immediately
        to request preservation. Footage may be overwritten within days.
      </p>

      <h2>Witness Evidence</h2>
      <p>
        Take the contact details — name, phone number, address or email — of any person who witnessed your
        accident. Witness statements can corroborate your account, confirm the existence of a hazard, or
        support your version of events if the other side disputes liability.
      </p>

      <h2>Accident Reports</h2>
      <ul>
        <li><strong>Workplace accidents:</strong> report to your employer and obtain a copy of the accident book entry</li>
        <li><strong>Road accidents:</strong> obtain a police incident reference number if the accident was reported</li>
        <li><strong>Public place accidents:</strong> ask the premises manager to complete an incident report and give you a copy</li>
      </ul>

      <h2>Financial Records</h2>
      <p>
        To claim for financial losses, you will need evidence of those losses:
      </p>
      <ul>
        <li>Payslips before and after the accident to evidence wage loss</li>
        <li>Receipts and invoices for medical treatment, travel costs and other expenses</li>
        <li>P60s and employment contracts for future earnings assessments in serious cases</li>
        <li>Care diaries if family members have provided care as a result of your injury</li>
      </ul>

      <h2>Do Not Delay Gathering Evidence</h2>
      <p>
        Evidence can deteriorate or disappear quickly. CCTV is overwritten, scenes are repaired, witnesses
        move away and memories fade. Acting quickly to preserve evidence is one of the most valuable things
        you can do for your claim.
      </p>

      <p>
        <Link href="/contact" className="text-red-700 font-medium hover:underline">
          Start your free claim enquiry today →
        </Link>
      </p>
    </Article>
  ),

  "medical-negligence-what-to-prove-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          In Scotland, to succeed in a medical negligence claim you must prove: (1) duty of care; (2) breach
          of that duty (that the care fell below the standard of a reasonably competent practitioner);
          (3) causation (that the breach caused your harm); and (4) that the harm was avoidable. Expert medical
          evidence is essential.
        </p>
      </div>

      <h2>The Legal Test for Medical Negligence in Scotland</h2>
      <p>
        Medical negligence — or clinical negligence — claims in Scotland are brought under the law of delict.
        The test applied by Scottish courts is the same as in English law in this area: the Hunter v Hanley
        (1955) test, which requires that the pursuer demonstrate that the healthcare professional&apos;s conduct fell
        below the standard of the ordinary skilled person exercising that particular art.
      </p>

      <h2>Duty of Care</h2>
      <p>
        A doctor, nurse, GP, dentist, surgeon or other healthcare professional owes a duty of care to their
        patients. This duty arises when a professional-patient relationship exists. It extends to NHS healthcare
        providers, private hospitals, clinics, GPs and other practitioners.
      </p>

      <h2>Breach of Duty</h2>
      <p>
        A breach of duty occurs when the healthcare professional&apos;s conduct falls below the standard of a
        reasonably competent practitioner in that specialty. In Scotland, the test established in Hunter v
        Hanley requires that you prove the practitioner failed to exercise the standard of the ordinary
        skilled person exercising that particular art.
      </p>
      <p>
        Critically, a breach of duty is not simply an adverse outcome or a mistake. Not all medical errors
        amount to negligence. The question is whether a responsible body of practitioners in that specialty
        would have acted in the same way. Expert medical evidence from a specialist in the relevant field
        is required to establish breach.
      </p>

      <h2>Causation</h2>
      <p>
        Even if breach of duty is established, you must also prove that the breach caused or materially
        contributed to your harm. This can be complex in medical cases, because patients often have
        pre-existing conditions or underlying health problems that might have caused the same outcome
        regardless of the alleged negligence.
      </p>
      <p>
        The standard test for causation in Scotland — as in England — is the &quot;but for&quot; test: but for the
        defendant&apos;s breach, would the harm have occurred? In some cases involving multiple contributing
        causes, the material contribution test may apply.
      </p>

      <h2>Avoidable Harm</h2>
      <p>
        It is important to understand that not every bad medical outcome amounts to negligence. Medical
        treatment involves risk, and some complications are known risks of procedures or treatment that
        occur even when the care provided is entirely appropriate. To succeed in a claim, the harm you
        suffered must be one that would not have occurred had the duty of care not been breached.
      </p>

      <h2>The Role of Expert Medical Evidence</h2>
      <p>
        Expert medical evidence is essential in almost every clinical negligence case. Your solicitor will
        instruct an independent expert in the relevant specialty to review your medical records and provide
        an opinion on:
      </p>
      <ul>
        <li>Whether the care you received met the required standard</li>
        <li>If not, how it fell below the required standard (breach)</li>
        <li>Whether the breach caused or materially contributed to your harm (causation)</li>
        <li>The extent of your injury and its likely prognosis (quantum)</li>
      </ul>

      <h2>Time Limits for Medical Negligence Claims in Scotland</h2>
      <p>
        The three-year limitation period applies. It runs from the date of the negligent treatment or — more
        commonly — from the date of knowledge: when you knew or ought reasonably to have known that your
        harm was caused by negligent medical care. This is particularly important because patients often do
        not immediately understand that a complication was caused by negligence.
      </p>

      <p>
        <Link href="/medical-negligence-claims-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about medical negligence claims in Scotland →
        </Link>
      </p>
    </Article>
  ),

  "nhs-negligence-claims-scotland-explained": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          You can make a medical negligence claim against NHS Scotland if you received substandard care
          that caused you avoidable harm. Claims against NHS bodies in Scotland are defended by the Central
          Legal Office. The time limit is three years from the negligent treatment or date of knowledge.
        </p>
      </div>

      <h2>Can You Claim Against NHS Scotland?</h2>
      <p>
        Yes. NHS Scotland provides healthcare to the people of Scotland through fourteen regional Health
        Boards. If you were harmed as a result of negligent care provided by an NHS Scotland hospital,
        GP practice or other NHS facility, you may have a valid clinical negligence claim. The NHS is not
        exempt from liability for negligence.
      </p>

      <h2>How NHS Negligence Claims Work in Scotland</h2>
      <p>
        Claims against NHS Scotland bodies are defended on behalf of the NHS by the Central Legal Office
        (CLO), which is part of NHS National Services Scotland. When your solicitor submits a letter of
        claim, it will be investigated by the CLO and its appointed medical advisers. The process is similar
        to any civil claim in Scotland but involves a specific defender.
      </p>

      <h2>NHS Scotland Health Boards</h2>
      <p>
        Scotland&apos;s NHS is organised into territorial health boards including NHS Greater Glasgow and Clyde,
        NHS Lothian, NHS Grampian, NHS Tayside, NHS Lanarkshire, NHS Ayrshire and Arran, NHS Highland,
        NHS Fife, and others. Each board is responsible for providing healthcare services in its area and
        can be the subject of a clinical negligence claim.
      </p>

      <h2>What Types of NHS Negligence Claims Can You Make?</h2>
      <ul>
        <li>Misdiagnosis or delayed diagnosis — including cancer misdiagnosis</li>
        <li>Surgical errors and post-operative complications caused by negligence</li>
        <li>Medication and prescribing errors</li>
        <li>Birth injuries to mothers and babies</li>
        <li>GP negligence — failure to diagnose, delayed referral</li>
        <li>Hospital-acquired infections caused by negligent hygiene practices</li>
        <li>Anaesthetic errors</li>
        <li>Care home and nursing home negligence</li>
      </ul>

      <h2>Before You Make a Formal Claim: NHS Complaints</h2>
      <p>
        Before commencing a legal claim, some patients choose to pursue a complaint through the NHS Scotland
        complaints procedure. This can sometimes result in an explanation or apology, but it is separate
        from and does not replace a legal claim for compensation. It is important to be aware that the
        limitation period continues to run during any complaints process — seek legal advice early.
      </p>

      <h2>Time Limits</h2>
      <p>
        The three-year limitation period applies to NHS negligence claims in Scotland. It runs from the
        date of the negligent treatment or from your date of knowledge. Do not allow time to run without
        seeking advice.
      </p>

      <p>
        <Link href="/medical-negligence-claims-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about medical negligence claims in Scotland →
        </Link>
      </p>
    </Article>
  ),

  "industrial-disease-delayed-symptoms-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          In Scotland, the three-year time limit for industrial disease claims runs from the &apos;date of
          knowledge&apos; — usually the date of diagnosis — not from the date of exposure. This means claims
          can be made many decades after the original workplace exposure.
        </p>
      </div>

      <h2>What is an Industrial Disease?</h2>
      <p>
        An industrial disease is a medical condition caused or materially worsened by exposure to harmful
        substances or conditions in the workplace. Unlike traumatic accidents, industrial diseases typically
        develop slowly — sometimes over decades — and may not be diagnosed until many years after the
        original exposure has ended.
      </p>

      <h2>Common Industrial Diseases in Scotland</h2>
      <ul>
        <li>Mesothelioma — aggressive cancer caused by asbestos exposure</li>
        <li>Asbestosis — chronic lung disease caused by asbestos fibre inhalation</li>
        <li>Pleural plaques and pleural thickening — asbestos-related lung lining conditions</li>
        <li>Noise-induced hearing loss — from prolonged exposure to excessive noise</li>
        <li>Hand-arm vibration syndrome (HAVS) — from use of vibrating tools</li>
        <li>Vibration white finger — vascular disorder affecting the fingers</li>
        <li>Occupational asthma — triggered by workplace dust, chemicals or fumes</li>
        <li>Occupational dermatitis — skin conditions caused by workplace irritants</li>
      </ul>

      <h2>The Date of Knowledge: How Time Limits Work</h2>
      <p>
        The single most important legal concept in industrial disease claims is the &quot;date of knowledge&quot;.
        The Prescription and Limitation (Scotland) Act 1973 allows the three-year period to begin from
        the date when the claimant first knew, or ought reasonably to have known, all of the following:
      </p>
      <ul>
        <li>That the condition was significant</li>
        <li>That it was attributable to conditions at their workplace</li>
        <li>The identity of their former employer or other responsible party</li>
      </ul>
      <p>
        In practice, the date of knowledge is usually the date of formal diagnosis of the condition —
        or the date the worker received specialist medical advice linking their condition to their
        occupational exposure. This means that a worker who was exposed to asbestos in the 1960s but was
        not diagnosed with mesothelioma until 2024 would have until 2027 to bring their claim.
      </p>

      <h2>Claiming Against Former Employers</h2>
      <p>
        Many industrial disease claims involve former employers who may have ceased trading, merged with
        other companies, or dissolved. Fortunately, employers were legally required to hold employers&apos;
        liability insurance. Even if the company no longer exists, it is often possible to trace the
        historic insurer and bring a claim against them. Specialist tracing services assist with this process.
      </p>

      <h2>Evidence in Industrial Disease Claims</h2>
      <ul>
        <li>Medical diagnosis and specialist reports confirming the condition</li>
        <li>Employment history — where you worked, for how long, and what you were exposed to</li>
        <li>Witness statements from former colleagues confirming working conditions</li>
        <li>Occupational hygiene expert evidence in some cases</li>
        <li>Historical records showing the presence of asbestos, noise levels or other hazards</li>
      </ul>

      <p>
        <Link href="/industrial-disease-claims-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about industrial disease claims in Scotland →
        </Link>
      </p>
    </Article>
  ),

  "what-is-my-accident-claim-worth-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          There is no fixed tariff for personal injury claims in Scotland. The value of your claim depends
          on the nature and severity of your injuries, your financial losses and your future needs. Your
          solicitor will give you an honest assessment — not a guaranteed or inflated figure.
        </p>
      </div>

      <h2>How Compensation is Calculated in Scottish Personal Injury Claims</h2>
      <p>
        Compensation in Scottish personal injury cases is divided into two main categories:
      </p>

      <h2>General Damages (Solatium)</h2>
      <p>
        Solatium compensates you for the non-financial impact of your injury — pain, suffering and loss
        of amenity. The amount depends on the type and severity of your injury, the duration of your
        recovery and any permanent effects on your daily life and activities.
      </p>
      <p>
        Scottish courts and legal practitioners use the Judicial College Guidelines and Scottish judicial
        precedent as reference points. For example:
      </p>
      <ul>
        <li>Minor whiplash with full recovery: typically a few thousand pounds</li>
        <li>Moderate back injury with some permanent symptoms: can be in the tens of thousands</li>
        <li>Severe brain or spinal injury: can reach six figures or more depending on severity</li>
      </ul>
      <p>
        These are broad illustrations only — the actual value in your case will depend on the specific
        medical evidence.
      </p>

      <h2>Special Damages: Financial Losses</h2>
      <p>
        Special damages cover the financial losses you have suffered and will suffer in the future:
      </p>
      <ul>
        <li>Past loss of earnings — income lost while you were off work</li>
        <li>Future loss of earnings — if your injury affects your long-term earning capacity</li>
        <li>Medical treatment and rehabilitation costs</li>
        <li>Care and assistance — professional or family care</li>
        <li>Travel costs to medical appointments</li>
        <li>Home adaptation costs</li>
        <li>Specialist equipment</li>
        <li>Pension loss</li>
      </ul>

      <h2>What Affects the Value of My Claim?</h2>
      <ul>
        <li>The severity of your injuries and how long you are affected</li>
        <li>Your age — a younger claimant may have greater future losses</li>
        <li>Your occupation and earnings level</li>
        <li>Whether you were partly at fault (contributory negligence reduces compensation)</li>
        <li>The quality and strength of the medical evidence</li>
        <li>Whether liability is disputed or admitted</li>
      </ul>

      <h2>Be Realistic About Expectations</h2>
      <p>
        Any solicitor or claims service that promises a specific figure before seeing your medical evidence
        should be approached with caution. Compensation is assessed on the specific facts of each case —
        it cannot be guaranteed. Your solicitor will give you an honest range once the medical evidence
        is available.
      </p>

      <p>
        <Link href="/personal-injury-compensation-scotland" className="text-red-700 font-medium hover:underline">
          Read our full compensation guide for Scotland →
        </Link>
      </p>
    </Article>
  ),

  "can-i-claim-if-partly-at-fault-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          Yes. In Scotland, being partly at fault for your accident does not automatically prevent you from
          claiming compensation. Your award will be reduced to reflect your share of responsibility —
          this is called contributory negligence.
        </p>
      </div>

      <h2>What is Contributory Negligence?</h2>
      <p>
        Contributory negligence occurs when a pursuer (the person making the claim) is found to have
        contributed to their own injury by their own fault. In Scotland, contributory negligence does not
        bar a claim entirely — instead, it reduces the amount of compensation you receive by a percentage
        that reflects your share of the responsibility.
      </p>
      <p>
        For example, if you are found to be 25% contributory negligent, your compensation would be reduced
        by 25%. If you are found to be 50% at fault, your compensation would be halved. The court or
        parties&apos; insurers will apportion blame based on the evidence.
      </p>

      <h2>Common Examples of Contributory Negligence</h2>
      <ul>
        <li>Not wearing a seatbelt in a road traffic accident (typically 15-25% reduction)</li>
        <li>Wearing no or an inappropriate cycling helmet</li>
        <li>Being distracted on a mobile phone as a pedestrian</li>
        <li>Ignoring safety instructions or wearing protective equipment provided by your employer</li>
        <li>Being aware of a hazard but failing to take reasonable care for your own safety</li>
      </ul>

      <h2>Even if Partly At Fault, You May Still Receive Significant Compensation</h2>
      <p>
        Many successful personal injury claims in Scotland involve a degree of contributory negligence.
        The key question is not whether you were entirely blameless, but whether the other party was
        also at fault, and to what degree. A solicitor will assess the likely apportionment of blame
        and advise on its effect on the value of your claim.
      </p>

      <h2>What If I am Mostly at Fault?</h2>
      <p>
        If you were primarily responsible for your accident — for example, if you were entirely at fault
        for a road traffic accident — you would not generally have a valid claim against the other party.
        However, the position is not always clear-cut. Many accidents involve contributions from multiple
        parties. Your solicitor will assess the facts honestly and advise on the viability of your claim.
      </p>

      <p>
        <Link href="/contact" className="text-red-700 font-medium hover:underline">
          Get a free, honest assessment of your claim →
        </Link>
      </p>
    </Article>
  ),

  "what-if-liability-denied-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          If the other side denies liability in Scotland, your solicitor will gather further evidence,
          instruct expert witnesses and — if necessary — raise court proceedings. Many disputed claims
          ultimately settle before reaching a court hearing. Your solicitor will advise on prospects throughout.
        </p>
      </div>

      <h2>What Happens When Liability is Denied?</h2>
      <p>
        When your solicitor sends a formal letter of claim, the other side (or more often their insurer)
        has a period of time to investigate and respond. If they deny liability — that is, they dispute
        that they were at fault for your accident — this does not end your claim. It means the dispute
        will need to be resolved, either through further negotiation or through court proceedings.
      </p>

      <h2>Gathering Further Evidence</h2>
      <p>
        When liability is denied, your solicitor will focus on gathering and strengthening evidence to
        rebut the other side&apos;s position. This may include:
      </p>
      <ul>
        <li>Obtaining CCTV or dashcam footage</li>
        <li>Commissioning accident reconstruction experts</li>
        <li>Obtaining witness statements</li>
        <li>Instructing health and safety experts in workplace cases</li>
        <li>Commissioning engineering reports in defective equipment cases</li>
        <li>Reviewing accident records, risk assessments and training records</li>
      </ul>

      <h2>Raising Court Proceedings</h2>
      <p>
        If liability continues to be denied and the evidence is strong enough to proceed, your solicitor
        may advise raising a court action in the Sheriff Court or Court of Session (depending on the
        value of the claim). Raising proceedings does not mean the case will necessarily go to a court
        hearing — many cases settle after proceedings are raised, once the parties have a clearer picture
        of the respective evidence.
      </p>

      <h2>Will My Case Go to a Full Hearing?</h2>
      <p>
        Only a small minority of disputed personal injury claims in Scotland proceed to a full proof
        (trial). The majority settle before the hearing date, once the evidence is crystallised and both
        sides assess their prospects. Your solicitor will advise you honestly on the likely outcome and
        will recommend whether to accept any settlement offer.
      </p>

      <h2>Honest Assessment of Prospects</h2>
      <p>
        Not every denied claim is worth pursuing. Your solicitor will assess the strength of the evidence
        and advise honestly on your prospects of success. If the evidence is insufficient, your solicitor
        should tell you so clearly rather than encouraging you to continue with an unlikely claim.
      </p>

      <p>
        <Link href="/how-to-claim-compensation-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about the Scottish claims process →
        </Link>
      </p>
    </Article>
  ),

  "do-i-need-to-go-to-court-scotland": (
    <Article>
      <div className="answer-box">
        <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
        <p className="text-blue-800">
          Most personal injury claims in Scotland are resolved through negotiation and settle without
          a court hearing. Only a small percentage of cases proceed to a proof (trial). Your solicitor
          will guide you through every step of the process and will only recommend proceeding to court
          if it is in your best interests.
        </p>
      </div>

      <h2>How Most Scottish Claims Are Resolved</h2>
      <p>
        The majority of personal injury claims in Scotland are settled out of court through negotiation
        between your solicitor and the other side&apos;s insurers. Once your medical evidence is obtained,
        your losses are quantified and a formal offer is made, the parties often reach an agreed settlement
        without the need for any court involvement.
      </p>

      <h2>When Court Proceedings May Be Necessary</h2>
      <p>
        Court proceedings may be required in some circumstances:
      </p>
      <ul>
        <li>The other side denies liability and will not negotiate</li>
        <li>The other side&apos;s settlement offer is unreasonably low</li>
        <li>The limitation period is approaching and proceedings must be raised to protect your claim</li>
        <li>Complex legal issues require judicial determination</li>
      </ul>
      <p>
        Importantly, <strong>raising court proceedings does not mean your case will go to a hearing</strong>.
        Many cases settle after proceedings are raised, at a judicial settlement conference, or during
        the litigation process. A significant proportion of cases are resolved without ever reaching a proof.
      </p>

      <h2>The Scottish Court System for Personal Injury Claims</h2>
      <p>
        Personal injury claims in Scotland are brought in either:
      </p>
      <ul>
        <li><strong>Sheriff Court</strong> — for claims below the Court of Session threshold; cases are heard by a Sheriff. Each area of Scotland has its local Sheriff Court.</li>
        <li><strong>Court of Session</strong> — Scotland&apos;s supreme civil court, based in Edinburgh, which handles higher-value and more complex personal injury cases, with specialist Judges.</li>
      </ul>
      <p>
        Claims handled under the Personal Injury Court at Hamilton Sheriff Court can include cases of
        significant value that would previously have required to be raised in the Court of Session.
      </p>

      <h2>What to Expect If Your Case Goes to Court</h2>
      <p>
        If your case proceeds to a proof (trial), your solicitor will prepare you thoroughly. You may
        be required to give evidence and be questioned by both your own counsel and the other side&apos;s
        legal team. Expert witnesses will also give evidence. The process is managed by your legal team
        and the court — you will not face it alone.
      </p>

      <h2>Your Solicitor&apos;s Role</h2>
      <p>
        Your solicitor will advise you at every stage on whether to accept settlement offers, whether
        to raise proceedings and whether to proceed to a hearing. They will give you honest advice on
        the prospects of success and the likely level of any award, so that you can make informed decisions.
      </p>

      <p>
        <Link href="/how-to-claim-compensation-scotland" className="text-red-700 font-medium hover:underline">
          Learn more about how the Scottish claims process works →
        </Link>
      </p>
    </Article>
  ),
};

export function getGuideContent(slug: string): ReactNode {
  return articles[slug] ?? extendedGuideArticles[slug] ?? (
    <div className="answer-box">
      <p className="text-blue-800">
        Full article content for this guide will be published shortly. In the meantime, please{" "}
        <Link href="/contact" className="underline font-medium">contact us</Link> for advice on this topic.
      </p>
    </div>
  );
}
