import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Partners & Technology Alliances',
  description: 'Acriotech partners with platforms, cloud providers and engineering teams to deliver enterprise-grade software, from Bhavnagar, India.',
  path: '/company/partners',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
