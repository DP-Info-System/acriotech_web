import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Featured Projects & Case Studies',
  description: 'The portfolio - case studies of distributed cloud architecture and zero-trust cybersecurity products engineered by Acriotech.',
  path: '/work/featured-projects',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
