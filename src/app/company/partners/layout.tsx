import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Partners & Technology Alliances',
  description: 'Acriotech partners with platforms, cloud providers and engineering teams to deliver enterprise-grade software, from Bhavnagar, India.',
  path: '/company/partners',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Company', 'item': 'https://acriotech.com/company'}, {'name': 'Partners', 'item': 'https://acriotech.com/company/partners'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
