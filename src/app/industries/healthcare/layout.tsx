import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Healthcare Software Development',
  description: 'Healthcare software engineered for the clinical context - secure, compliant and built around patient workflows.',
  path: '/industries/healthcare',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
