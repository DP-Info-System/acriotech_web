import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development',
  description: 'Mobile experiences that respect context and connectivity - Acriotech builds native and cross-platform mobile applications.',
  path: '/services/mobile-app-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
