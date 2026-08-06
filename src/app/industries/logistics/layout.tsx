import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Logistics Software Development',
  description: 'Logistics software engineered for physical movement - routing, tracking, scheduling and supply chain visibility.',
  path: '/industries/logistics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
