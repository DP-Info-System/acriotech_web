import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'GDPR Compliance',
  description: 'How Acriotech complies with the EU General Data Protection Regulation (GDPR) for personal data and data subject rights.',
  path: '/gdpr-compliance',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
