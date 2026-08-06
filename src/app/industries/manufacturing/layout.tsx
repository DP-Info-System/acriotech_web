import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Manufacturing Software Development',
  description: 'Manufacturing and industrial software engineered for the factory floor - IIoT integration, factory operations and predictive maintenance.',
  path: '/industries/manufacturing',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
