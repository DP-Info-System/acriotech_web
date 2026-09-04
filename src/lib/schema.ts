export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function serviceSchema(opts: {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": opts.id,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: { "@id": "https://acriotech.com/#organization" },
    url: opts.url,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: opts.url,
      availableLanguage: ["en"],
    },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[], id = "https://acriotech.com/#faq") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
