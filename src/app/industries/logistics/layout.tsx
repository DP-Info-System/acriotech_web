import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Logistics Software Development',
  description: 'Logistics software engineered for physical movement - routing, tracking, scheduling and supply chain visibility.',
  path: '/industries/logistics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Industries', 'item': 'https://acriotech.com/industries'}, {'name': 'Logistics', 'item': 'https://acriotech.com/industries/logistics'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
