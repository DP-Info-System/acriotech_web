import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Software Consulting Services',
  description: 'Senior technical judgment when the path is unclear - enterprise software consulting and technical advisory from Acriotech.',
  path: '/services/software-consulting',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
