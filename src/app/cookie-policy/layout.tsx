import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Privacy-first-Cookies',
  description: 'How Acriotech uses cookies and similar technologies on acriotech.com to improve performance and personalisation.',
  path: '/cookie-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
