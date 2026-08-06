import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Our Clients',
  description: 'Trusted by the Fortune 500 and growing companies - a selection of clients and engagements from Acriotech.',
  path: '/work/our-clients',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
