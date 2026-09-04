import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development',
  description: 'Mobile experiences that respect context and connectivity - Acriotech builds native and cross-platform mobile applications.',
  path: '/services/mobile-app-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Mobile App Development', 'item': 'https://acriotech.com/services/mobile-app-development'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/mobile-app-development#service", name: "Mobile App Development", serviceType: "Mobile App Development", description: "Mobile App Development from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/mobile-app-development" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}