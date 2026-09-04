import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-pjs",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://acriotech.com'),
  title: "Acriotech | Enterprise Software Engineering",
  description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
  authors: [{ name: "Acriotech Pvt. Ltd." }],
  creator: "Acriotech Pvt. Ltd.",
  publisher: "Acriotech Pvt. Ltd.",
  alternates: {
    canonical: 'https://acriotech.com/',
  },
  openGraph: {
    title: "Acriotech | Enterprise Software Engineering",
    description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
    url: 'https://acriotech.com',
    siteName: 'Acriotech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://acriotech.com/ogimage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Acriotech — Enterprise Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Acriotech | Enterprise Software Engineering",
    description: "Acriotech is an IT and Software Company in Bhavnagar, India. We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
    images: ['https://acriotech.com/ogimage.jpeg'],
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
              "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
              "@id": "https://acriotech.com/#organization",
              "name": "Acriotech Global Pvt. Ltd.",
              "legalName": "Acriotech Global Private Limited",
              "description": "Enterprise software, AI and cloud engineering company in Bhavnagar, India.",
              "image": ["https://acriotech.com/ogimage.jpeg"],
              "logo": "https://acriotech.com/custom-logo.svg",
              "url": "https://acriotech.com",
              "telephone": "+91-98795-12345",
              "email": "info@acriotech.com",
              "priceRange": "$$",
              "foundingDate": "2020-01-01",
              "slogan": "Engineering Software. Building Future.",
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
                "https://www.linkedin.com/company/acrio-tech",
                "https://github.com/acriotech"
              ],
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Germany" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "telephone": "+91-98795-12345",
                  "email": "info@acriotech.com",
                  "availableLanguage": ["English", "Hindi", "Gujarati"],
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+91-98795-12345",
                  "email": "support@acriotech.com",
                  "availableLanguage": ["English"],
                  "areaServed": "Worldwide"
                }
              ]
            }),
          }}
        />
        {/* WebSite + SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://acriotech.com/#website",
              "url": "https://acriotech.com",
              "name": "Acriotech",
              "description": "Enterprise software, AI systems, automation platforms and cloud infrastructure.",
              "publisher": { "@id": "https://acriotech.com/#organization" },
              "inLanguage": "en-IN"
            }),
          }}
        />
        {/* FAQPage for GEO — 10 homepage FAQs (visible in FAQAccordion, matched verbatim) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://acriotech.com/#faq",
              "mainEntity": [
                { "@type": "Question", "name": "What is your typical project timeline?", "acceptedAnswer": { "@type": "Answer", text: "Depending on the complexity, our initial discovery and architecture phase takes 2-4 weeks. Full deployment of MVP or v1.0 usually ranges from 3-6 months with iterative agile delivery. See our methodology: https://acriotech.com/company/methodology" } },
                { "@type": "Question", "name": "Do you provide ongoing support after deployment?", "acceptedAnswer": { "@type": "Answer", text: "Yes, we offer enterprise SLA support (15m S1 / 1hr S2 / 24hr S3), proactive infrastructure monitoring, and continuous integration of new features. See maintenance & support: https://acriotech.com/services/maintenance-support" } },
                { "@type": "Question", "name": "How do you handle data security and compliance?", "acceptedAnswer": { "@type": "Answer", text: "We embed security at the architectural level (Zero-Trust, AES-256 at rest, TLS 1.3) and ensure compliance with GDPR, HIPAA, SOC2 from day one. See security & compliance: https://acriotech.com/security-compliance" } },
                { "@type": "Question", "name": "Can you scale an existing, legacy architecture?", "acceptedAnswer": { "@type": "Answer", text: "Yes. We audit legacy systems, decouple monoliths into microservices, and migrate to scalable cloud infrastructures with zero downtime. See legacy modernization: https://acriotech.com/solutions/legacy-system-modernization" } },
                { "@type": "Question", "name": "What technologies do you specialize in?", "acceptedAnswer": { "@type": "Answer", text: "React, Next.js, Node.js, Python, Rust, Go; infrastructure AWS/GCP/Azure/Kubernetes for orchestration. See custom software: https://acriotech.com/solutions/custom-software-development" } },
                { "@type": "Question", "name": "Do you offer custom API development?", "acceptedAnswer": { "@type": "Answer", text: "Yes. We design high-performance RESTful and GraphQL APIs, with secure authentication, rate limiting, and robust documentation. See API development: https://acriotech.com/services/api-development-integration" } },
                { "@type": "Question", "name": "How does your pricing model work?", "acceptedAnswer": { "@type": "Answer", text: "Fixed-price for well-defined scopes (from $40k module • $140-350k platform) and flexible retainer for ongoing product development. Custom scoped in 24h. See dedicated teams: https://acriotech.com/services/dedicated-development-teams" } },
                { "@type": "Question", "name": "What is your approach to UI/UX design?", "acceptedAnswer": { "@type": "Answer", text: "We combine rigorous user research with modern, accessible design systems. Enterprise software shouldn't look like legacy. See UI/UX design: https://acriotech.com/services/ui-ux-design" } },
                { "@type": "Question", "name": "Can you integrate AI or machine learning into our products?", "acceptedAnswer": { "@type": "Answer", text: "Yes. We build scalable AI data pipelines, integrate LLMs, and deploy predictive analytics tailored to your business logic. See AI & intelligent automation: https://acriotech.com/solutions/ai-intelligent-automation" } },
                { "@type": "Question", "name": "Do you handle DevOps and CI/CD setup?", "acceptedAnswer": { "@type": "Answer", text: "Yes, automated testing, deployment pipelines, and IaC using Terraform/Ansible are core to delivery. See DevOps & CI/CD: https://acriotech.com/services/devops-ci-cd" } }
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
