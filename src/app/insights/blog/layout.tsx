import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Engineering Blog',
  description: 'Opinions from Acriotech engineers derived from production outages - engineering insights, field notes and architecture stories.',
  path: '/insights/blog',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Insights', 'item': 'https://acriotech.com/insights'}, {'name': 'Blog', 'item': 'https://acriotech.com/insights/blog'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
