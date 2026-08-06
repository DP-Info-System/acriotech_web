import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: "The terms governing your use of Acriotech's website and services.",
  path: '/terms-of-service',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
