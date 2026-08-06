import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Maintenance & Support Services',
  description: 'Steady care for software the business depends on - Acriotech maintenance, support and service level engineering.',
  path: '/services/maintenance-support',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
