import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Featured Projects & Case Studies',
  description: 'The portfolio - case studies of distributed cloud architecture and zero-trust cybersecurity products engineered by Acriotech.',
  path: '/work/featured-projects',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Work', 'item': 'https://acriotech.com/work'}, {'name': 'Featured Projects', 'item': 'https://acriotech.com/work/featured-projects'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
