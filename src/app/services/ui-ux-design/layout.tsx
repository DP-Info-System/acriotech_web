import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'UI & UX Design Services',
  description: 'Interfaces that make complex work easier to perform - product design, design systems and UI/UX engineering from Acriotech.',
  path: '/services/ui-ux-design',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'UI/UX Design', 'item': 'https://acriotech.com/services/ui-ux-design'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/ui-ux-design#service", name: "UI & UX Design Services", serviceType: "UI & UX Design", description: "UI & UX Design Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/ui-ux-design" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}