import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Client Testimonials',
  description: "What it's like to build with us - client testimonials and references from Acriotech engineering partners.",
  path: '/work/testimonials',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Work', 'item': 'https://acriotech.com/work'}, {'name': 'Testimonials', 'item': 'https://acriotech.com/work/testimonials'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
