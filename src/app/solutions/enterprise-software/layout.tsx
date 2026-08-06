import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Enterprise Software Development',
  description: 'Software that bears the weight of your business - mission critical enterprise software engineered for stability, security and scale.',
  path: '/solutions/enterprise-software',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
