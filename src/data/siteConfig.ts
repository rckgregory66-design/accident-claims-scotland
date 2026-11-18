export const SITE = {
  name: "Accident Claims Scotland",
  domain: "accident-claims-scotland.com",
  url: "https://accident-claims-scotland.com",
  tagline: "Information about accident claims across Scotland",
  description:
    "Scottish accident-claim information covering personal injury, medical negligence, industrial disease and related compensation claims.",
};

/** Display, tel: and schema forms of the site phone number. Use only these. */
export const PHONE = {
  display: "0141 566 8059",
  href: "tel:+441415668059",
  // Schema form as published on personal-injury-claims-scotland.co.uk (no spaces).
  schema: "+441415668059",
} as const;

/** Registered office of the operator, as published on personal-injury-claims-scotland.co.uk. */
export const REGISTERED_OFFICE = {
  streetAddress: "3 Sharrow Lane",
  addressLocality: "Sheffield",
  postalCode: "S11 8AE",
  addressCountry: "GB",
  display: "3 Sharrow Lane, Sheffield, England, S11 8AE",
} as const;

/** Operator company details, as published on personal-injury-claims-scotland.co.uk. */
export const OPERATOR = {
  legalName: "OLA Consultants Ltd",
  companyNumber: "14446269",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/14446269",
} as const;

/**
 * Partner solicitor firm named on personal-injury-claims-scotland.co.uk.
 * Law Society of Scotland registration applies to this firm, not to the website operator.
 */
export const REFERRAL_FIRM = {
  name: "Thompsons Scotland LLP",
  regulator: "the Law Society of Scotland",
  registrationNumber: "31477",
  companyNumber: "SO307922",
  registeredOffice: "70 Wellington Street, Glasgow, G2 6UA",
} as const;

export const NAV_LINKS = [
  {
    label: "Claim Types",
    href: "/personal-injury-claims-scotland",
    children: [
      { label: "Personal Injury", href: "/personal-injury-claims-scotland" },
      { label: "Road Traffic Accidents", href: "/road-traffic-accident-claims-scotland" },
      { label: "Accident at Work", href: "/accident-at-work-claims-scotland" },
      { label: "Medical Negligence", href: "/medical-negligence-claims-scotland" },
      { label: "Industrial Disease", href: "/industrial-disease-claims-scotland" },
      { label: "Serious Injury", href: "/serious-injury-claims-scotland" },
      { label: "Fatal Accident Claims", href: "/guides/fatal-accident-compensation-scotland" },
      { label: "Public Place Accidents", href: "/public-place-accident-claims-scotland" },
      { label: "Criminal Injury", href: "/criminal-injury-compensation-scotland" },
    ],
  },
  { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
  { label: "How to Claim", href: "/how-to-claim-compensation-scotland" },
  { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
  { label: "Calculator", href: "/compensation-calculator-scotland" },
  { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CLAIM_TYPES = [
  {
    label: "Road Traffic Accident",
    href: "/road-traffic-accident-claims-scotland",
    icon: "🚗",
    desc: "Car, motorcycle, cycling, pedestrian and passenger claims",
  },
  {
    label: "Accident at Work",
    href: "/accident-at-work-claims-scotland",
    icon: "🏗️",
    desc: "Employer negligence, unsafe workplaces, manual handling injuries",
  },
  {
    label: "Medical Negligence",
    href: "/medical-negligence-claims-scotland",
    icon: "🏥",
    desc: "NHS and private healthcare errors, misdiagnosis, surgical negligence",
  },
  {
    label: "Industrial Disease",
    href: "/industrial-disease-claims-scotland",
    icon: "🏭",
    desc: "Asbestos, mesothelioma, industrial deafness, vibration injury",
  },
  {
    label: "Serious Injury",
    href: "/serious-injury-claims-scotland",
    icon: "⚕️",
    desc: "Brain injury, spinal injury, amputation, complex regional pain",
  },
  {
    label: "Public Place Accident",
    href: "/public-place-accident-claims-scotland",
    icon: "🏙️",
    desc: "Slips, trips and falls in supermarkets, pavements, public buildings",
  },
  {
    label: "Fatal Accident Claims",
    href: "/guides/fatal-accident-compensation-scotland",
    icon: "🕊️",
    desc: "Bereavement claims and dependency claims for families",
  },
  {
    label: "Criminal Injury",
    href: "/criminal-injury-compensation-scotland",
    icon: "⚖️",
    desc: "CICA compensation claims for victims of violent crime",
  },
];

export const LOCATIONS = [
  { label: "Glasgow", href: "/glasgow-accident-claims" },
  { label: "Edinburgh", href: "/edinburgh-accident-claims" },
  { label: "Aberdeen", href: "/aberdeen-accident-claims" },
  { label: "Dundee", href: "/dundee-accident-claims" },
  { label: "Inverness", href: "/inverness-accident-claims" },
  { label: "Stirling", href: "/stirling-accident-claims" },
  { label: "Perth", href: "/perth-accident-claims" },
  { label: "Paisley", href: "/paisley-accident-claims" },
  { label: "Ayr", href: "/ayr-accident-claims" },
  { label: "Falkirk", href: "/falkirk-accident-claims" },
  { label: "Scottish Borders", href: "/borders-accident-claims" },
  { label: "Dumfries", href: "/dumfries-accident-claims" },
];

export const TRUST_BADGES = [
  { icon: "✓", text: "Scots law information" },
  { icon: "✓", text: "Official sources linked" },
  { icon: "✓", text: "Not a law firm" },
  { icon: "✓", text: "Sending an enquiry is free" },
];

/** Enquiry Worker endpoint used by the enquiry and callback forms. */
export const ENQUIRY_WORKER_URL =
  "https://accident-claims-scotland-enquiries.rckgregory66.workers.dev";

/**
 * WhatsApp / chat button. Leave blank to keep the button visible but disabled.
 * When a number is published, set the digits including the country code, with no + or spaces
 * (for example 441415668059). The button then links to https://wa.me/{number}.
 */
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_HREF = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : "";

/** Reviewer shown on “reviewed by” fields. Leave name empty to keep the line hidden. */
export const REVIEWER = {
  name: "",
  role: "",
} as const;

/**
 * Trust block fields. The TrustBlock component renders nothing until at least one
 * of these is filled, so no invented solicitor name, review or case example can go live.
 */
export const TRUST = {
  panelSolicitorName: "",
  panelSolicitorRegulator: "",
  reviews: [] as { quote: string; attribution: string; sourceUrl: string }[],
  caseExamples: [] as { title: string; summary: string; sourceUrl: string }[],
};

export const CALLBACK_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"] as const;
