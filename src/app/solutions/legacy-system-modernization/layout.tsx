import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Legacy System Modernization',
  description: 'Retire your technical debt safely - Acriotech legacy system migration, modernization and modularization with zero downtime.',
  path: '/solutions/legacy-system-modernization',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
