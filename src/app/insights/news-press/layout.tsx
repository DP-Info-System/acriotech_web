import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'News & Press',
  description: 'Company updates and press coverage from Acriotech - announcements, product evolution and media mentions.',
  path: '/insights/news-press',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Insights', 'item': 'https://acriotech.com/insights'}, {'name': 'News & Press', 'item': 'https://acriotech.com/insights/news-press'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
