import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Software Services & Development',
  description: 'The disciplines behind durable software - software consulting, product discovery, UI/UX design, development, cloud, DevOps, QA and support from Acriotech.',
  path: '/services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
