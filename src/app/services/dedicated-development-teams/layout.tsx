import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Dedicated Development Teams',
  description: 'An engineering pod that fits your rhythm - hire a dedicated product engineering team from India to extend your engineering capacity.',
  path: '/services/dedicated-development-teams',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
