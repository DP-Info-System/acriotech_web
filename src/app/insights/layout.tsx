import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Insights, Research & Tech Trends',
  description: 'Engineering insights from Acriotech - case studies, research reports, tech trends, webinars and whitepapers on enterprise software, AI and cloud.',
  path: '/insights',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
