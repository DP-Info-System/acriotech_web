import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Research Reports',
  description: 'Data-driven research reports from Acriotech - engineering benchmarks, technology evidence and architecture research.',
  path: '/insights/research-reports',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
