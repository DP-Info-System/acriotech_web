import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Financial Services Software Development',
  description: 'Software for financial services built for strict operational bounds - where audit trails and precision are non-negotiable.',
  path: '/industries/financial-services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Industries', 'item': 'https://acriotech.com/industries'}, {'name': 'Financial Services', 'item': 'https://acriotech.com/industries/financial-services'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
