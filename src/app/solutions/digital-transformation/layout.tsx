import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Digital Transformation Services',
  description: 'Technology is only half the transformation - Acriotech partners across digital transformation, automation, cloud and data.',
  path: '/solutions/digital-transformation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
