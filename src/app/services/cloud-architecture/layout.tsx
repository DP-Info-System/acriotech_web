import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Cloud Architecture Services',
  description: 'Cloud foundations shaped around how you operate - Acriotech designs cloud infrastructure and architecture foundations.',
  path: '/services/cloud-architecture',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Cloud Architecture', 'item': 'https://acriotech.com/services/cloud-architecture'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/cloud-architecture#service", name: "Cloud Architecture Services", serviceType: "Cloud Architecture", description: "Cloud Architecture Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/cloud-architecture" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}