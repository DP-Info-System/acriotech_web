import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Insights, Research & Tech Trends',
  description: 'Engineering insights from Acriotech - case studies, research reports, tech trends, webinars and whitepapers on enterprise software, AI and cloud.',
  path: '/insights',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Insights', 'item': 'https://acriotech.com/insights'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
