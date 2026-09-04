import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Cloud Infrastructure & Migration',
  description: 'A foundation for scale - resilient, high-availability cloud infrastructure engineered for zero downtime and global scale.',
  path: '/solutions/cloud-infrastructure',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Cloud Infrastructure', 'item': 'https://acriotech.com/solutions/cloud-infrastructure'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/cloud-infrastructure#service", name: "Cloud Infrastructure & Migration", serviceType: "Cloud Infrastructure & Migration", description: "Cloud Infrastructure & Migration from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/cloud-infrastructure" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}