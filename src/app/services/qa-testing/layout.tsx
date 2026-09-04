import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'QA & Testing Services',
  description: 'Quality matched to the cost of failure - automated testing, QA engineering and quality assurance from Acriotech.',
  path: '/services/qa-testing',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'QA & Testing', 'item': 'https://acriotech.com/services/qa-testing'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/qa-testing#service", name: "QA & Testing Services", serviceType: "QA & Testing", description: "QA & Testing Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/qa-testing" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}