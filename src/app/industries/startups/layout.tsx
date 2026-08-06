import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Startup Software Engineering',
  description: 'Engineering for burn rates and scale - build custom software with early architecture, rapid delivery and room to grow.',
  path: '/industries/startups',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
