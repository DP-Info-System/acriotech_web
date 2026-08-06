import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Client Testimonials',
  description: "What it's like to build with us - client testimonials and references from Acriotech engineering partners.",
  path: '/work/testimonials',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
