import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'AI Integration Services',
  description: 'AI features with a defined job - Acriotech integrates AI into enterprise workflows with strict operational bounds and human oversight.',
  path: '/services/ai-integration',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
