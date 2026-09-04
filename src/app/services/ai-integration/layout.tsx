import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'AI Integration Services',
  description: 'AI features with a defined job - Acriotech integrates AI into enterprise workflows with strict operational bounds and human oversight.',
  path: '/services/ai-integration',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'AI Integration', 'item': 'https://acriotech.com/services/ai-integration'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/ai-integration#service", name: "AI Integration Services", serviceType: "AI Integration", description: "AI Integration Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/ai-integration" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}