import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Refund Policy',
  description: 'Acriotech refund and cancellation policy for our consulting and engineering engagements.',
  path: '/refund-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
