import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Trademark Policy',
  description: 'Acriotech trademark policy - how Acriotech trademarks may be used by partners and third parties.',
  path: '/trademark-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
