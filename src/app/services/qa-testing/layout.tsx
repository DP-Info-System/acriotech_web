import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'QA & Testing Services',
  description: 'Quality matched to the cost of failure - automated testing, QA engineering and quality assurance from Acriotech.',
  path: '/services/qa-testing',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
