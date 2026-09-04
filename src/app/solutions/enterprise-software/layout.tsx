import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Enterprise Software Development',
  description: 'Software that bears the weight of your business - mission critical enterprise software engineered for stability, security and scale.',
  path: '/solutions/enterprise-software',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Enterprise Software', 'item': 'https://acriotech.com/solutions/enterprise-software'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/enterprise-software#service", name: "Enterprise Software Development", serviceType: "Enterprise Software Development", description: "Enterprise Software Development from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/enterprise-software" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}