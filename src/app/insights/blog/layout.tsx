import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Engineering Blog',
  description: 'Opinions from Acriotech engineers derived from production outages - engineering insights, field notes and architecture stories.',
  path: '/insights/blog',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
