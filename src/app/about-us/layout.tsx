import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: 'Acriotech is an enterprise software engineering company in Bhavnagar, India. Learn about the team building software, AI systems, cloud platforms and automation that ambitious businesses rely on.',
  path: '/about-us',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'About Us', 'item': 'https://acriotech.com/about-us'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
