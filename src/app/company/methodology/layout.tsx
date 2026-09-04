import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Software Engineering Methodology',
  description: "Acriotech's six-step engineering workflow: discovery and audit, system architecture, UI/UX engineering, development sprints, deployment and QA, and scale and support.",
  path: '/company/methodology',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Company', 'item': 'https://acriotech.com/company'}, {'name': 'Methodology', 'item': 'https://acriotech.com/company/methodology'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
