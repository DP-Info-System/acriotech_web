import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Dedicated Development Teams',
  description: 'An engineering pod that fits your rhythm - hire a dedicated product engineering team from India to extend your engineering capacity.',
  path: '/services/dedicated-development-teams',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Dedicated Development Teams', 'item': 'https://acriotech.com/services/dedicated-development-teams'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/dedicated-development-teams#service", name: "Dedicated Development Teams", serviceType: "Dedicated Development Teams", description: "Dedicated Development Teams from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/dedicated-development-teams" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}