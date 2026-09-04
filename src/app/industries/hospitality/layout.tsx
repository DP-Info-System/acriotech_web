import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Hospitality Software Development',
  description: 'Hospitality software engineered for the guest experience - bookings, operations and service delivery.',
  path: '/industries/hospitality',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Industries', 'item': 'https://acriotech.com/industries'}, {'name': 'Hospitality', 'item': 'https://acriotech.com/industries/hospitality'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
