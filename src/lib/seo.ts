import type { Metadata } from "next";

const SITE_URL = "https://acriotech.com";

const defaultDescription =
  "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.";

export function pageMetadata(options: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${options.path}`;
  const fullTitle = options.title.includes("Acriotech")
    ? options.title
    : `${options.title} | Acriotech`;
  return {
    title: fullTitle,
    description: options.description ?? defaultDescription,
    alternates: { canonical: options.path },
    openGraph: {
      title: fullTitle,
      description: options.description ?? defaultDescription,
      url,
      siteName: "Acriotech",
      locale: "en_IN",
      type: "website",
      images: [`${SITE_URL}/icon.png`],
    },
  };
}