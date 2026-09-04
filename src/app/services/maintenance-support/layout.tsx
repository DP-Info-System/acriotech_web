import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Maintenance & Support Services',
  description: 'Steady care for software the business depends on - Acriotech maintenance, support and service level engineering.',
  path: '/services/maintenance-support',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Maintenance & Support', 'item': 'https://acriotech.com/services/maintenance-support'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/maintenance-support#service", name: "Maintenance & Support Services", serviceType: "Maintenance & Support", description: "Maintenance & Support Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/maintenance-support" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}