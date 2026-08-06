import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: 'Acriotech is an enterprise software engineering company in Bhavnagar, India. Learn about the team building software, AI systems, cloud platforms and automation that ambitious businesses rely on.',
  path: '/about-us',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
