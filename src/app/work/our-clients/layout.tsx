import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Our Clients',
  description: 'Trusted by the Fortune 500 and growing companies - a selection of clients and engagements from Acriotech.',
  path: '/work/our-clients',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Work', 'item': 'https://acriotech.com/work'}, {'name': 'Our Clients', 'item': 'https://acriotech.com/work/our-clients'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
