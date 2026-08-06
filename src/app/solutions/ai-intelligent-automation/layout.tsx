import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'AI & Intelligent Automation',
  description: 'Intelligence architected for strict operational bounds - enterprise AI, intelligent automation and cognitive systems from Acriotech.',
  path: '/solutions/ai-intelligent-automation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
