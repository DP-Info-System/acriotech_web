import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Industries We Serve',
  description: 'Acriotech engineers software for manufacturing, healthcare, education, logistics, retail, financial services, hospitality, government and startups.',
  path: '/industries',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
