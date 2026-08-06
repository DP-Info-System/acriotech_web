import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'IPR Complaints Policy',
  description: 'How to file an Intellectual Property Rights (IPR) complaint with Acriotech and how we investigate.',
  path: '/ipr-complaints',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
