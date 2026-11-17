import Link from "next/link";

/** Sourced Scots-law process snapshot for money pages. All figures and rules are cited. */
export default function ScotsClaimProcess({ headingLevel = "h2" as "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="prose-legal">
      <H id="scottish-courts">Which Scottish courts hear personal injury claims?</H>
      <p>
        Personal injury claims in Scotland are raised in the Scottish courts, not in the courts of England and Wales. A claim may be brought in a local sheriff court, in the All-Scotland Sheriff Personal Injury Court, or in the Court of Session, depending on the value and nature of the case.
      </p>
      <p>
        The All-Scotland Sheriff Personal Injury Court — also described by the Scottish Courts and Tribunals Service as the National Personal Injury Court — was established on 22 September 2015. It sits at Edinburgh Sheriff Court, in the sheriffdom of Lothian and Borders, and has jurisdiction throughout Scotland for actions of damages for personal injuries where the sum sued for exceeds £5,000. Workplace-related personal injury actions can be brought there where the sum exceeds £1,000. That jurisdiction is set out in the All-Scotland Sheriff Court (Sheriff Personal Injury Court) Order 2015. The Scottish Courts and Tribunals Service notes that personal injury actions can still be lodged in local sheriff courts.
      </p>
      <p>
        Higher-value or more complex claims may be raised in the Court of Session. The Scottish Courts and Tribunals Service describes the National Personal Injury Court as handling many cases over £100,000, complementing higher-value personal injury cases raised in the Court of Session. A solicitor can advise which court is appropriate in a particular case.
      </p>
      <p>
        Read more in the <Link href="/personal-injury-claims-scotland">personal injury claims guide</Link> and the <Link href="/how-to-claim-compensation-scotland">step-by-step claims process</Link>. Official sources: the{" "}
        <a href="https://www.legislation.gov.uk/ssi/2015/213" target="_blank" rel="noopener noreferrer">2015 Order</a>
        {" "}and the{" "}
        <a href="https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/" target="_blank" rel="noopener noreferrer">National Personal Injury Court</a>
        {" "}pages.
      </p>

      <H id="three-year-limit">The three-year limitation period</H>
      <p>
        Most personal injury claims in Scotland must be started within three years. That period is set by the Prescription and Limitation (Scotland) Act 1973. It usually runs from the date of the accident, or from the later “date of knowledge” — when the injured person knew, or could reasonably have known, that the injury was sufficiently serious to justify bringing a claim and was attributable to an act or omission. Time while a person is under 16 does not count towards the three years. Different rules can apply to people who lack legal capacity, to fatal claims and to some industrial disease cases. Missing the deadline can bar the claim. This is general information, not a decision about any individual time limit.
      </p>
      <p>
        <Link href="/personal-injury-claim-time-limits-scotland">Read the Scottish time-limits guide</Link>. Statute:{" "}
        <a href="https://www.legislation.gov.uk/ukpga/1973/52/contents" target="_blank" rel="noopener noreferrer">Prescription and Limitation (Scotland) Act 1973</a>.
      </p>

      <H id="pre-action-protocol">The Personal Injury Pre-Action Protocol</H>
      <p>
        Before many sheriff court personal injury actions are raised, the parties are expected to follow the Personal Injury Pre-Action Protocol. It was introduced by the Act of Sederunt (Sheriff Court Rules Amendment) (Personal Injury Pre-Action Protocol) 2016 and applies to accidents or other circumstances on or after 28 November 2016. The protocol is set out in Appendix 4 of the Ordinary Cause Rules. Its aims include the fair, just and timely settlement of disputes before proceedings start, and early disclosure of information.
      </p>
      <p>
        The protocol applies to claims for damages for personal injuries unless, among other exceptions: the claimant reasonably estimates that the total value of the claim, exclusive of interest and expenses, exceeds £25,000; the claimant is not represented by a solicitor during the protocol stages; or the injuries arise from alleged clinical or professional negligence, or take the form of a disease. Where the protocol applies, the sheriff will normally expect parties to have complied before proceedings are commenced. If a party has failed, without just cause, to comply, the sheriff may sist (pause) the action to allow compliance, or may make or modify an award of expenses.
      </p>
      <p>
        Official sources:{" "}
        <a href="https://www.legislation.gov.uk/ssi/2016/215" target="_blank" rel="noopener noreferrer">SSI 2016/215</a>
        {" "}and the{" "}
        <a href="https://www.scottishciviljusticecouncil.gov.uk/new-rules/2016/07/25/new-compulsory-pre-action-protocol" target="_blank" rel="noopener noreferrer">Scottish Civil Justice Council summary</a>.
        {" "}See also <Link href="/how-to-claim-compensation-scotland">how to claim compensation in Scotland</Link>.
      </p>

      <H id="success-fee-caps">How no win, no fee works under the 2018 Act</H>
      <p>
        Many Scottish personal injury claims are funded by a success fee agreement, often described as no win, no fee. The Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018, and the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 (Success Fee Agreements) Regulations 2020, cap the success fee that can be taken from the client&apos;s financial benefit. For personal injury claims the cap, which includes VAT, is 20% of the first £100,000, 10% of the amount over £100,000 up to £500,000, and 2.5% of the amount over £500,000. Those percentages are maxima, not a fixed rate. The regulations apply to success fee agreements entered into on or after 27 April 2020. A solicitor should set the agreed terms out in writing before you instruct them. If the claim does not succeed, you should not have to pay your solicitor&apos;s success fee, but you should still ask what, if anything, you could remain responsible for.
      </p>
      <p>
        <Link href="/no-win-no-fee-solicitors-scotland">Read how no win, no fee funding works in Scotland</Link>. Official sources: the{" "}
        <a href="https://www.legislation.gov.uk/asp/2018/10/contents" target="_blank" rel="noopener noreferrer">2018 Act</a>
        {" "}and{" "}
        <a href="https://www.legislation.gov.uk/ssi/2020/110/made" target="_blank" rel="noopener noreferrer">SSI 2020/110</a>.
      </p>
    </div>
  );
}
