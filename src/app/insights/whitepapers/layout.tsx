import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Whitepapers',
  description: "Deep architectural research and whitepapers from Acriotech's engineering practice.",
  path: '/insights/whitepapers',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
