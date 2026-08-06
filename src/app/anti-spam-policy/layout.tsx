import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Anti-Spam Policy',
  description: 'Acriotech anti-spam policy for email and marketing communications. We follow GDPR and CAN-SPAM best practices.',
  path: '/anti-spam-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
