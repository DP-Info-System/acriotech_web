import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Abuse Policy',
  description: 'Acriotech Abuse Policy - acceptable use, reporting and enforcement for our engineering services and communications.',
  path: '/abuse-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
