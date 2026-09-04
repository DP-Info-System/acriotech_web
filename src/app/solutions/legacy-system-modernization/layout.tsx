import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Legacy System Modernization',
  description: 'Retire your technical debt safely - Acriotech legacy system migration, modernization and modularization with zero downtime.',
  path: '/solutions/legacy-system-modernization',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Legacy System Modernization', 'item': 'https://acriotech.com/solutions/legacy-system-modernization'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/legacy-system-modernization#service", name: "Legacy System Modernization", serviceType: "Legacy System Modernization", description: "Legacy System Modernization from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/legacy-system-modernization" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}