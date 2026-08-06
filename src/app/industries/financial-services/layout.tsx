import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Financial Services Software Development',
  description: 'Software for financial services built for strict operational bounds - where audit trails and precision are non-negotiable.',
  path: '/industries/financial-services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
