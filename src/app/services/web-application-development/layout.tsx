import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Web App Development Services',
  description: 'Web products built for the operating context - secure, scalable web application development from Acriotech.',
  path: '/services/web-application-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Web Application Development', 'item': 'https://acriotech.com/services/web-application-development'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/web-application-development#service", name: "Web App Development Services", serviceType: "Web App Development", description: "Web App Development Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/web-application-development" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}