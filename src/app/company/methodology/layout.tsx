import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Software Engineering Methodology',
  description: "Acriotech's six-step engineering workflow: discovery and audit, system architecture, UI/UX engineering, development sprints, deployment and QA, and scale and support.",
  path: '/company/methodology',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
