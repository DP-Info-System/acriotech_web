import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Cloud Infrastructure & Migration',
  description: 'A foundation for scale - resilient, high-availability cloud infrastructure engineered for zero downtime and global scale.',
  path: '/solutions/cloud-infrastructure',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
