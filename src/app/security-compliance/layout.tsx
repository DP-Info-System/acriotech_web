import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Security Compliance',
  description: "Acriotech's security and compliance posture - secure development practices, product security and customer compliance.",
  path: '/security-compliance',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
