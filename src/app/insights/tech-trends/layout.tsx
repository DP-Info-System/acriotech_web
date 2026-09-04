import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Tech Trends & Opinions',
  description: 'Acriotech engineers cut through the hype cycle - clear-eyed tech trends on AI, cloud, automation and enterprise software.',
  path: '/insights/tech-trends',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Insights', 'item': 'https://acriotech.com/insights'}, {'name': 'Tech Trends', 'item': 'https://acriotech.com/insights/tech-trends'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
