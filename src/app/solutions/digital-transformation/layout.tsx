import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Digital Transformation Services',
  description: 'Technology is only half the transformation - Acriotech partners across digital transformation, automation, cloud and data.',
  path: '/solutions/digital-transformation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Solutions', 'item': 'https://acriotech.com/solutions'}, {'name': 'Digital Transformation', 'item': 'https://acriotech.com/solutions/digital-transformation'}]);
  const service = serviceSchema({ id: "https://acriotech.com/solutions/digital-transformation#service", name: "Digital Transformation Services", serviceType: "Digital Transformation", description: "Digital Transformation Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/solutions/digital-transformation" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}