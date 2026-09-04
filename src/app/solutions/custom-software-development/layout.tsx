import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Custom Software Development',
  description: 'Software built for your exact operational reality - bespoke custom software development by a senior, long-term engineering team in India.',
  path: '/solutions/custom-software-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Custom Software Development', 'item': 'https://acriotech.com/solutions/custom-software-development'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/custom-software-development#service", name: "Custom Software Development", serviceType: "Custom Software Development", description: "Custom Software Development from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/custom-software-development" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}