import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Webinars & Engineering Talks',
  description: 'Watch how Acriotech builds - webinars, engineering talks and software architecture deep dives.',
  path: '/insights/webinars',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
