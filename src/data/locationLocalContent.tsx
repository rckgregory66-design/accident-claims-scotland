import Link from "next/link";
import type { ReactNode } from "react";

const TS_TABLE =
  "https://www.transport.gov.scot/publication/reported-road-casualties-scotland-2024/";
const TS_TABLE_FILE =
  "https://www.transport.gov.scot/media/gzzlgdzi/tables-36-39-casualties-by-police-force-division-and-council-rrcs-2024.xlsx";
const SCTS_FIND =
  "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/";
const NPIC =
  "https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/";
const ORDER_2015 = "https://www.legislation.gov.uk/ssi/2015/213";
const ACT_1973 = "https://www.legislation.gov.uk/ukpga/1973/52/contents";

export type LocationExtras = {
  localContent: ReactNode;
  sources: { label: string; url: string }[];
  dateModified: string;
  /** Unique, page-specific wording intended to be counted toward the 600-word index threshold. */
  uniqueText: string;
};

function Links() {
  return (
    <p>
      For the Scottish rules that apply wherever the accident happened, see the{" "}
      <Link href="/personal-injury-claims-scotland">personal injury claims guide</Link>,{" "}
      <Link href="/personal-injury-claim-time-limits-scotland">time limits</Link>,{" "}
      <Link href="/how-to-claim-compensation-scotland">how to claim</Link>,{" "}
      <Link href="/no-win-no-fee-solicitors-scotland">no win, no fee funding</Link> and the{" "}
      <Link href="/compensation-calculator-scotland">compensation planner</Link>.
    </p>
  );
}

function CourtsAndProcedure({ court, courtUrl }: { court: string; courtUrl?: string }) {
  return (
    <>
      <h2>Local courts and the national personal injury court</h2>
      <p>
        Civil personal injury claims arising in this area may be raised in {courtUrl ? <a href={courtUrl} target="_blank" rel="noopener noreferrer">{court}</a> : court}, in another local sheriff court, or in the All-Scotland Sheriff Personal Injury Court, which sits at Edinburgh Sheriff Court and has all-Scotland jurisdiction for personal injury actions over £5,000 (and workplace-related personal injury actions over £1,000) under the All-Scotland Sheriff Court (Sheriff Personal Injury Court) Order 2015. The Scottish Courts and Tribunals Service notes that personal injury actions can still be lodged in local courts. Higher-value or more complex claims may be raised in the Court of Session. A solicitor can advise which court is appropriate.
      </p>
    </>
  );
}

function TimeAndProtocol() {
  return (
    <>
      <h2>Time limits and the pre-action protocol</h2>
      <p>
        Most personal injury claims in Scotland must be started within three years, under the Prescription and Limitation (Scotland) Act 1973. The period usually runs from the accident or from the later date of knowledge. Time while a person is under 16 does not count. Different rules can apply to people who lack capacity, fatal claims and some industrial disease cases. This is general information, not a decision about any individual deadline.
      </p>
      <p>
        Many sheriff court personal injury claims are also expected to follow the Personal Injury Pre-Action Protocol before proceedings are raised. The protocol was introduced by the Act of Sederunt (Sheriff Court Rules Amendment) (Personal Injury Pre-Action Protocol) 2016 and applies, with exceptions, to claims reasonably valued at £25,000 or less, exclusive of interest and expenses, where the accident was on or after 28 November 2016. Clinical negligence, professional negligence and disease claims are among the listed exceptions. Official sources are linked below.
      </p>
    </>
  );
}

function Casualties({
  area,
  killed,
  serious,
  all,
  note,
}: {
  area: string;
  killed: number;
  serious: number;
  all: number;
  note?: string;
}) {
  return (
    <>
      <h2>Reported road casualties in {area}</h2>
      <p>
        Transport Scotland&apos;s final Reported Road Casualties Scotland 2024 statistics record, for {area} in 2024, {killed} people killed, {serious} seriously injured (the publication&apos;s adjusted serious category) and {all} casualties of all severities, on all roads. These are official local-authority figures from Table 36 of that publication. They describe reported injury collisions; they do not measure how many people later made a personal injury claim, and they are not a prediction about any individual case. {note ?? ""}
      </p>
      <p>
        Across Scotland as a whole, the same publication&apos;s accompanying news release states that 161 people were killed in reported road collisions in 2024, 1,978 were seriously injured, and there were 5,734 casualties in total.
      </p>
    </>
  );
}

const commonSources = [
  { label: "Reported Road Casualties Scotland 2024 — Transport Scotland", url: TS_TABLE },
  { label: "Tables 36–39: casualties by police force division and council (Excel)", url: TS_TABLE_FILE },
  { label: "Finalised road casualty statistics for 2024 — Transport Scotland", url: "https://www.transport.gov.scot/news/finalised-road-casualty-statistics-for-2024/" },
  { label: "National Personal Injury Court — Scottish Courts and Tribunals Service", url: NPIC },
  { label: "The All-Scotland Sheriff Court (Sheriff Personal Injury Court) Order 2015", url: ORDER_2015 },
  { label: "Prescription and Limitation (Scotland) Act 1973", url: ACT_1973 },
  { label: "Act of Sederunt (Sheriff Court Rules Amendment) (Personal Injury Pre-Action Protocol) 2016", url: "https://www.legislation.gov.uk/ssi/2016/215" },
  { label: "Find a court — Scottish Courts and Tribunals Service", url: SCTS_FIND },
];

export const LOCATION_EXTRAS: Record<string, LocationExtras> = {
  "aberdeen-accident-claims": {
    dateModified: "2026-11-17",
    sources: [
      ...commonSources,
      { label: "Aberdeen Sheriff Court and Justice of the Peace Court — SCTS", url: "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/aberdeen-sheriff-court-and-justice-of-the-peace-court/" },
    ],
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure
          court="Aberdeen Sheriff Court and Justice of the Peace Court"
          courtUrl="https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/aberdeen-sheriff-court-and-justice-of-the-peace-court/"
        />
        <p>
          Aberdeen Sheriff Court is listed by the Scottish Courts and Tribunals Service in the Sheriffdom of Grampian, Highland and Islands. On the official court page, SCTS states that civil business is based in the Aberdeen Civil Justice Centre and Commercial Court Building in Queen Street, while criminal business is based in the Aberdeen Sheriff and Justice of the Peace Court Building in Castle Street, Aberdeen AB10 1WP. Personal injury actions are civil proceedings, so the Queen Street civil centre is the relevant local listing. People injured in Aberdeen or Aberdeenshire may still have a claim that is raised in the All-Scotland Sheriff Personal Injury Court in Edinburgh, or, in some higher-value cases, in the Court of Session. The court in which a case is raised does not change the fact that Scots law and Scottish procedure apply.
        </p>
        <h2>Hospitals and NHS Grampian</h2>
        <p>
          Hospital treatment in Aberdeen is often provided at Aberdeen Royal Infirmary, which is part of NHS Grampian. A medical negligence claim, if one arises, is a claim in delict about a breach of duty and resulting harm. It is not started simply because treatment took place in Aberdeen, and claims against NHS boards are typically defended by the Central Legal Office. General information is on the{" "}
          <Link href="/medical-negligence-claims-scotland">medical negligence claims</Link> page.
        </p>
        <h2>Roads and workplaces around Aberdeen</h2>
        <p>
          Aberdeen is served by major routes including the A90 and the A96. Road accident claims arising on those routes, or on local roads in the city, are still Scottish personal injury claims: the English and Welsh whiplash tariff does not apply. Workplace and offshore-related injuries are a recurring feature of claims information for the Aberdeen area because of the North Sea oil and gas industry, together with construction, engineering, healthcare, fishing and logistics. That industrial context does not create a separate legal test — fault, causation and loss still have to be proved — but it does explain why many local claims involve workplaces, vessels or helicopter transport as well as ordinary road collisions. See also{" "}
          <Link href="/road-traffic-accident-claims-scotland">road traffic accident claims</Link> and{" "}
          <Link href="/accident-at-work-claims-scotland">accident at work claims</Link>.
        </p>
        <Casualties area="Aberdeen City" killed={3} serious={36} all={85} note="In the same table, Aberdeenshire is recorded separately: 12 people killed, 123 seriously injured and 256 casualties of all severities in 2024." />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "dundee-accident-claims": {
    dateModified: "2026-11-17",
    sources: [
      ...commonSources,
      { label: "Dundee Sheriff Court and Justice of the Peace Court — SCTS", url: "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/dundee-sheriff-court-and-justice-of-the-peace-court/" },
    ],
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure
          court="Dundee Sheriff Court and Justice of the Peace Court"
          courtUrl="https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/dundee-sheriff-court-and-justice-of-the-peace-court/"
        />
        <p>
          Dundee Sheriff Court and Justice of the Peace Court is listed by the Scottish Courts and Tribunals Service in the Sheriffdom of Tayside, Central and Fife. The official court page gives the main location and postal address as Sheriff Court House, 6 West Bell Street, Dundee DD1 9AD. SCTS also states that civil business, except commissary and small estate interviews, is dealt with at the Dundee Civil Justice Hub, and that the High Court of Justiciary also sits in the building. A claim arising in Dundee can still, where the rules allow, be raised in the All-Scotland Sheriff Personal Injury Court in Edinburgh rather than only in the local sheriff court.
        </p>
        <p>
          SCTS describes the court as sitting at the top of Courthouse Square in Dundee city centre. There is no public car park at the court; the nearest multi-storey car park is in Bell Street, and there is metered on-street parking in West Bell Street. The railway station is about half a mile from the court, or about a ten-minute walk, according to the same official directions page.
        </p>
        <h2>Hospitals and NHS Tayside</h2>
        <p>
          The main acute hospital in Dundee is Ninewells Hospital, which is part of NHS Tayside. People in Dundee also use other NHS Tayside services. If the issue is alleged negligent medical care, the legal test is the same as elsewhere in Scotland: duty, breach, causation and loss. There is a dedicated{" "}
          <Link href="/medical-negligence-claims-scotland">medical negligence</Link> guide. This page does not assess any individual episode of care.
        </p>
        <h2>Roads serving Dundee</h2>
        <p>
          Dundee is served by major routes including the A90 and the A92, as well as the city’s own roads and the Tay crossings that connect the city with Fife. Accidents on those routes are assessed under Scots law. The English and Welsh statutory whiplash tariff does not apply. Common claim types from the Dundee area include car, van, motorcycle, pedestrian and cycling collisions, workplace accidents in the city’s harbour, construction, manufacturing, health and retail settings, and public-place accidents. See{" "}
          <Link href="/road-traffic-accident-claims-scotland">road traffic accident claims</Link> and{" "}
          <Link href="/public-place-accident-claims-scotland">public place accident claims</Link>.
        </p>
        <Casualties area="Dundee City" killed={1} serious={58} all={154} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "inverness-accident-claims": {
    dateModified: "2026-11-17",
    sources: [
      ...commonSources,
      { label: "Inverness Justice Centre — SCTS", url: "https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/inverness-justice-centre/" },
    ],
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure
          court="Inverness Justice Centre"
          courtUrl="https://www.scotcourts.gov.uk/courts-and-tribunals/courts-tribunals-and-office-locations/find-us/inverness-justice-centre/"
        />
        <p>
          The Scottish Courts and Tribunals Service lists Inverness Justice Centre as the court building in Inverness, in the Sheriffdom of Grampian, Highland and Islands. The official page says the centre opened on 30 March 2020 and gives the location and postal address as Longman Road, Inverness IV1 1AH. SCTS also states that the High Court of Justiciary sits in the building. Claims from Inverness, the Highlands and the wider area can, where the jurisdictional rules allow, also be raised in the All-Scotland Sheriff Personal Injury Court in Edinburgh. Distance from Edinburgh does not take a Highland claim outside Scots law.
        </p>
        <p>
          According to the official SCTS directions, Inverness railway station is on Academy Street, approximately a quarter of a mile from the Justice Centre, or about a five-minute walk. SCTS also states that Inverness Airport is 10 miles east of the city, reached from the A96, which it describes as the Inverness to Aberdeen main route. Those published directions are useful if you are attending court; they do not affect which legal system applies to a claim arising in the Highlands.
        </p>
        <h2>Hospitals and NHS Highland</h2>
        <p>
          Raigmore Hospital in Inverness is the principal acute hospital for a large part of NHS Highland. People living well beyond the city itself are often treated there. A medical negligence claim, if one is available, still depends on proof of breach of duty and causation, not merely on the fact that treatment was given in Inverness. See the{" "}
          <Link href="/medical-negligence-claims-scotland">medical negligence claims</Link> guide.
        </p>
        <h2>Trunk roads in the Highlands</h2>
        <p>
          Inverness sits on major Highland routes including the A9, the A82 and the A96. Transport Scotland’s casualty statistics for this area are published for the Highland local authority as a whole, not for Inverness city on its own. That matters when you read the figures below: they cover a very large geographical area, including long rural stretches of trunk road, and should not be treated as an Inverness-only total. Road claims from the Highlands are still assessed under Scots law, and the English and Welsh whiplash tariff does not apply.
        </p>
        <Casualties
          area="the Highland local authority (which includes Inverness and a wide surrounding area)"
          killed={17}
          serious={185}
          all={406}
          note="These Highland totals should not be read as Inverness-only figures."
        />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "perth-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Perth (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Perth sits on major routes including the A9 and the A90. Hospital treatment for people in the city is generally provided by NHS Tayside. Road casualty statistics are published for the Perth and Kinross local authority, not for Perth city alone.
        </p>
        <Casualties area="Perth &amp; Kinross" killed={7} serious={89} all={213} note="These figures are for the whole Perth and Kinross council area." />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "stirling-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Stirling (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Stirling is served by major routes including the A9 and the M9. Health services in the area fall under NHS Forth Valley. Road casualty statistics are published for the Stirling local authority area.
        </p>
        <Casualties area="Stirling" killed={9} serious={39} all={136} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "falkirk-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Falkirk (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Falkirk is served by major routes including the M9. Health services in the area fall under NHS Forth Valley. Road casualty statistics are published for the Falkirk local authority area.
        </p>
        <Casualties area="Falkirk" killed={7} serious={40} all={132} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "paisley-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Paisley (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Paisley is in Renfrewshire and is served by major routes including the M8. Health services in the area fall under NHS Greater Glasgow and Clyde. Transport Scotland publishes road casualty statistics for Renfrewshire as a whole, not for Paisley on its own.
        </p>
        <Casualties area="Renfrewshire (which includes Paisley)" killed={6} serious={72} all={193} note="These figures are for the whole Renfrewshire council area and should not be read as Paisley-only totals." />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "ayr-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Ayr (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Ayr is in South Ayrshire and is served by major routes including the A77. Health services in the area fall under NHS Ayrshire and Arran. Transport Scotland publishes road casualty statistics for South Ayrshire, not for Ayr town on its own. Neighbouring East Ayrshire and North Ayrshire have their own published totals.
        </p>
        <Casualties area="South Ayrshire (which includes Ayr)" killed={3} serious={37} all={93} note="These figures are for the whole South Ayrshire council area." />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "dumfries-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the local sheriff court in Dumfries (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Dumfries is served by major routes including the A75. Health services in the area fall under NHS Dumfries and Galloway. Transport Scotland publishes road casualty statistics for Dumfries and Galloway as a whole, not for Dumfries town on its own.
        </p>
        <Casualties area="Dumfries &amp; Galloway" killed={7} serious={83} all={264} note="These figures are for the whole Dumfries and Galloway council area." />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "borders-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="the sheriff courts that serve the Scottish Borders (see the Scottish Courts and Tribunals Service court finder for the current listings)" />
        <p>
          The Scottish Borders are served by major routes including the A7, the A68 and the A1. Health services in the area fall under NHS Borders. Transport Scotland publishes road casualty statistics for the Scottish Borders local authority.
        </p>
        <Casualties area="the Scottish Borders" killed={9} serious={53} all={140} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "glasgow-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="Glasgow Sheriff Court (see the Scottish Courts and Tribunals Service court finder for the current listing)" />
        <p>
          Glasgow is Scotland’s largest city. Health services are provided by NHS Greater Glasgow and Clyde. Major routes serving the city include the M8. Road casualty statistics are published for the Glasgow City local authority.
        </p>
        <Casualties area="Glasgow City" killed={6} serious={235} all={806} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
  "edinburgh-accident-claims": {
    dateModified: "2026-11-17",
    sources: commonSources,
    uniqueText: "",
    localContent: (
      <>
        <CourtsAndProcedure court="Edinburgh Sheriff Court, which also hosts the All-Scotland Sheriff Personal Injury Court" courtUrl="https://www.scotcourts.gov.uk/courts-and-tribunals/sheriff-and-justice-of-the-peace-courts/national-personal-injury-court/" />
        <p>
          Edinburgh Sheriff Court is both the local sheriff court and the seat of the All-Scotland Sheriff Personal Injury Court (the National Personal Injury Court). Health services in the city are provided by NHS Lothian. Road casualty statistics are published for the City of Edinburgh local authority.
        </p>
        <Casualties area="the City of Edinburgh" killed={8} serious={151} all={607} />
        <TimeAndProtocol />
        <Links />
      </>
    ),
  },
};
