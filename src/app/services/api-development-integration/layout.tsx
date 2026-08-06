import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'API Development & Integration',
  description: 'Interfaces built for resilience - Acriotech designs, builds and integrates APIs for long-term interoperability.',
  path: '/services/api-development-integration',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
