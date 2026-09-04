import type { Metadata } from "next";

const SITE_URL = "https://acriotech.com";

const defaultDescription =
  "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.";

export function pageMetadata(options: {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
}): Metadata {
  const url = `${SITE_URL}${options.path}`;
  const fullTitle = options.title.includes("Acriotech")
    ? options.title
    : `${options.title} | Acriotech`;
  const imageUrl = options.ogImage ?? "/ogimage.jpeg";
  return {
    title: fullTitle,
    description: options.description ?? defaultDescription,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: options.description ?? defaultDescription,
      url,
      siteName: "Acriotech",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${imageUrl}`,
          width: 1200,
          height: 630,
          alt:
            options.ogImageAlt ??
            "Acriotech — Enterprise Software Engineering",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: options.description ?? defaultDescription,
      images: [`${SITE_URL}${imageUrl}`],
    },
  };
}