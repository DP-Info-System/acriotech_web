import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Open Source Contributions',
  description: "We don't just consume, we contribute - open source engineering from Acriotech and our contributors.",
  path: '/work/open-source',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Work', 'item': 'https://acriotech.com/work'}, {'name': 'Open Source', 'item': 'https://acriotech.com/work/open-source'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
