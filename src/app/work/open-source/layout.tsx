import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Open Source Contributions',
  description: "We don't just consume, we contribute - open source engineering from Acriotech and our contributors.",
  path: '/work/open-source',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
