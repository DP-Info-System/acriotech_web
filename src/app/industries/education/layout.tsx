import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Education Software Development',
  description: 'Education and learning platform engineering for universities, edtech and training organisations. Built for engagement, scale and accessibility.',
  path: '/industries/education',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
