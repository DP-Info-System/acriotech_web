import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Data Analytics & Engineering',
  description: 'Turn fragmented data into predictable growth - data engineering, analytics pipelines and business intelligence from Acriotech.',
  path: '/solutions/data-analytics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
