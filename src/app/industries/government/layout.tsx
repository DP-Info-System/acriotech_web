import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Government Software Solutions',
  description: 'Government software engineered for absolute compliance, security and public sector scale.',
  path: '/industries/government',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
