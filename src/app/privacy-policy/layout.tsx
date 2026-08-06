import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Acriotech collects, uses and protects personal information across acriotech.com and our services.',
  path: '/privacy-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
