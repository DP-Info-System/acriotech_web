import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Webinars & Engineering Talks',
  description: 'Watch how Acriotech builds - webinars, engineering talks and software architecture deep dives.',
  path: '/insights/webinars',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Insights', 'item': 'https://acriotech.com/insights'}, {'name': 'Webinars', 'item': 'https://acriotech.com/insights/webinars'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
