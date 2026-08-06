import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Case Studies',
  description: 'Proof of execution from Acriotech - engineering case studies across banking, logistics, healthcare and cloud infrastructure.',
  path: '/insights/case-studies',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
