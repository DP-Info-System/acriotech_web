import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Data Analytics & Engineering',
  description: 'Turn fragmented data into predictable growth - data engineering, analytics pipelines and business intelligence from Acriotech.',
  path: '/solutions/data-analytics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Data Analytics', 'item': 'https://acriotech.com/solutions/data-analytics'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/data-analytics#service", name: "Data Analytics & Engineering", serviceType: "Data Analytics & Engineering", description: "Data Analytics & Engineering from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/data-analytics" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}