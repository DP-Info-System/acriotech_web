import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'API Development & Integration',
  description: 'Interfaces built for resilience - Acriotech designs, builds and integrates APIs for long-term interoperability.',
  path: '/services/api-development-integration',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'API Development & Integration', 'item': 'https://acriotech.com/services/api-development-integration'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/api-development-integration#service", name: "API Development & Integration", serviceType: "API Development & Integration", description: "API Development & Integration from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/api-development-integration" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}