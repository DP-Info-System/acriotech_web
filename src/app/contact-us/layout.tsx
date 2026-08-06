import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Acriotech",
  description:
    "Contact Acriotech for enterprise software, AI, cloud and automation inquiries. Route your request to enterprise sales, press, investor relations, careers or feedback.",
  path: "/contact-us",
  ogImage: "/ogimage.jpeg",
  ogImageAlt: "Acriotech — Enterprise Software Engineering",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Acriotech",
            "url": "https://acriotech.com/contact-us",
            "isPartOf": {
              "@id": "https://acriotech.com/#organization"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Acriotech Global Pvt. Ltd.",
              "url": "https://acriotech.com",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "info@acriotech.com",
                  "availableLanguage": ["English", "Hindi", "Gujarati"],
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "feedback@acriotech.com"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "press",
                  "email": "press@acriotech.com"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "investor relations",
                  "email": "investors@acriotech.com"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "careers",
                  "email": "info@acriotech.com"
                }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}