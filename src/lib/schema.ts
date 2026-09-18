import { SITE } from "@/data/siteConfig";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: [
      { "@type": "Country", name: "Scotland" },
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "City", name: "Aberdeen" },
      { "@type": "City", name: "Dundee" },
      { "@type": "City", name: "The Borders" },
      { "@type": "City", name: "Dumfries" },
    ],
    knowsAbout: [
      "Personal Injury Law Scotland",
      "Medical Negligence Claims",
      "Industrial Disease Claims",
      "Road Traffic Accident Claims",
      "Workplace Accident Claims",
      "Scots Delict Law",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(pageUrl && { "@id": `${SITE.url}${pageUrl}#breadcrumb` }),
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function howToSchema(steps: { name: string; text: string }[], name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  speakableSelectors,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  speakableSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}${url}#article`,
    headline: title,
    description,
    url: `${SITE.url}${url}`,
    datePublished,
    dateModified,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    ...(speakableSelectors && {
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: speakableSelectors,
      },
    }),
  };
}

export function servicePageSchema({
  name,
  url,
  description,
  dateModified,
  speakableSelectors,
}: {
  name: string;
  url: string;
  description: string;
  dateModified: string;
  speakableSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}${url}#webpage`,
    name,
    description,
    url: `${SITE.url}${url}`,
    dateModified,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    breadcrumb: `${SITE.url}${url}#breadcrumb`,
    ...(speakableSelectors && {
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: speakableSelectors,
      },
    }),
  };
}

export function locationPageSchema(location: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/${slug}#webpage`,
    name: `Accident Claims Scotland — ${location}`,
    url: `${SITE.url}/${slug}`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: [
      { "@type": "Thing", name: "Personal injury claims in Scotland" },
      { "@type": "Place", name: location, containedInPlace: { "@type": "Country", name: "Scotland" } },
    ],
    breadcrumb: { "@id": `${SITE.url}/${slug}#breadcrumb` },
    description: `General information about personal injury and accident claims for people in ${location} and surrounding areas.`,
  };
}
