import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Solutions - Enterprise Software & AI',
  description: 'Enterprise software, AI, cloud, automation and data engineering solutions from Acriotech - engineering built to carry the weight of the business.',
  path: '/solutions',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
