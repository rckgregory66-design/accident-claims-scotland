export const SITE = {
  name: "Accident Claims Scotland",
  domain: "accident-claims-scotland.com",
  url: "https://www.accident-claims-scotland.com",
  tagline: "Information about accident claims across Scotland",
  description:
    "Scottish accident-claim information covering personal injury, medical negligence, industrial disease and related compensation claims.",
};

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
      { label: "Public Place Accidents", href: "/public-place-accident-claims-scotland" },
      { label: "Criminal Injury", href: "/criminal-injury-compensation-scotland" },
    ],
  },
  { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
  { label: "How to Claim", href: "/how-to-claim-compensation-scotland" },
  { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
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
    href: "/serious-injury-claims-scotland#fatal",
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
];

export const TRUST_BADGES = [
  { icon: "✓", text: "No win, no fee available" },
  { icon: "✓", text: "Free initial enquiry" },
  { icon: "✓", text: "Clear claims information" },
  { icon: "✓", text: "No obligation assessment" },
  { icon: "✓", text: "Scotland-focused guidance" },
];
