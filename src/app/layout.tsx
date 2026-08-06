import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acriotech.com'),
  title: "Acriotech | Enterprise Software Engineering",
  description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
  keywords: ["Software Company in Bhavnagar", "IT Company in Bhavnagar", "Enterprise Software Bhavnagar", "AI Systems", "Cloud Infrastructure", "Automation Platforms", "Acriotech"],
  authors: [{ name: "Acriotech Pvt. Ltd." }],
  creator: "Acriotech Pvt. Ltd.",
  publisher: "Acriotech Pvt. Ltd.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Acriotech | Enterprise Software Engineering",
    description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
    url: 'https://acriotech.com',
    siteName: 'Acriotech',
    locale: 'en_IN',
    type: 'website',
    images: ['https://acriotech.com/icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Acriotech | Enterprise Software Engineering",
    description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
    images: ['https://acriotech.com/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Bhavnagar',
    'geo.position': '21.7645;72.1519',
    'ICBM': '21.7645, 72.1519'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* Organization + LocalBusiness Schema for Bhavnagar SEO (server-rendered) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://acriotech.com/#organization",
              "name": "Acriotech Global Pvt. Ltd.",
              "description": "Enterprise software, AI and cloud engineering company in Bhavnagar, India.",
              "image": "https://acriotech.com/icon.png",
              "url": "https://acriotech.com",
              "email": "info@acriotech.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14, Shiv Narayan Complex, Virani Circle, Kaliyabid",
                "addressLocality": "Bhavnagar",
                "addressRegion": "Gujarat",
                "postalCode": "364002",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.7645,
                "longitude": 72.1519
              },
              "hasMap": "https://maps.google.com/?q=14,+Shiv+Narayan+Complex,+Virani+Circle,+Kaliyabid,+Bhavnagar+-+364002,+Gujarat,+India",
              "sameAs": [
                "https://www.linkedin.com/company/acrio-tech"
              ],
              "areaServed": ["IN", "US", "GB", "AE", "EU"],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
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
                  "contactType": "press",
                  "email": "press@acriotech.com",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "investor relations",
                  "email": "investors@acriotech.com",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer feedback",
                  "email": "feedback@acriotech.com",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "social responsibility",
                  "email": "responsible@acriotech.com",
                  "availableLanguage": "English"
                }
              ]
            }),
          }}
        />
        {/* Default Google Consent Mode v2 setup */}
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* Load Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVERY94FZL"
          strategy="lazyOnload"
        />
        {/* Load Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="0VjxtvAV5Spo9/ii75o6Ag"
          strategy="lazyOnload"
        />
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NVERY94FZL');
            `,
          }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
