import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Business Process Automation',
  description: 'Orchestrate work at scale - automation platforms that make enterprise workflows reliable, auditable and fast.',
  path: '/solutions/business-process-automation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Business Process Automation', 'item': 'https://acriotech.com/solutions/business-process-automation'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/business-process-automation#service", name: "Business Process Automation", serviceType: "Business Process Automation", description: "Business Process Automation from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/business-process-automation" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}