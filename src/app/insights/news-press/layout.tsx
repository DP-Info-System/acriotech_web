import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'News & Press',
  description: 'Company updates and press coverage from Acriotech - announcements, product evolution and media mentions.',
  path: '/insights/news-press',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
