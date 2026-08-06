import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Our Work - Engineering Portfolio',
  description: "We ship production code. See Acriotech's engineering portfolio, case studies, open source and client work.",
  path: '/work',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
