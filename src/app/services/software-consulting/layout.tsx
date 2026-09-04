import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Software Consulting Services',
  description: 'Senior technical judgment when the path is unclear - enterprise software consulting and technical advisory from Acriotech.',
  path: '/services/software-consulting',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Software Consulting', 'item': 'https://acriotech.com/services/software-consulting'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/software-consulting#service", name: "Software Consulting Services", serviceType: "Software Consulting", description: "Software Consulting Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/software-consulting" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}