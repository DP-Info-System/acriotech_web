import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Cloud Architecture Services',
  description: 'Cloud foundations shaped around how you operate - Acriotech designs cloud infrastructure and architecture foundations.',
  path: '/services/cloud-architecture',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
