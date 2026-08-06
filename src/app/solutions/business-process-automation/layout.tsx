import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Business Process Automation',
  description: 'Orchestrate work at scale - automation platforms that make enterprise workflows reliable, auditable and fast.',
  path: '/solutions/business-process-automation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
