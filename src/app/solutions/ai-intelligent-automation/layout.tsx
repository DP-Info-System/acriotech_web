import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'AI & Intelligent Automation',
  description: 'Intelligence architected for strict operational bounds - enterprise AI, intelligent automation and cognitive systems from Acriotech.',
  path: '/solutions/ai-intelligent-automation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'AI & Intelligent Automation', 'item': 'https://acriotech.com/solutions/ai-intelligent-automation'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/ai-intelligent-automation#service", name: "AI & Intelligent Automation", serviceType: "AI & Intelligent Automation", description: "AI & Intelligent Automation from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/ai-intelligent-automation" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}