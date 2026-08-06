import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Tech Trends & Opinions',
  description: 'Acriotech engineers cut through the hype cycle - clear-eyed tech trends on AI, cloud, automation and enterprise software.',
  path: '/insights/tech-trends',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
