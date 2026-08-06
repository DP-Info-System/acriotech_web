import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Custom Software Development',
  description: 'Software built for your exact operational reality - bespoke custom software development by a senior, long-term engineering team in India.',
  path: '/solutions/custom-software-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
