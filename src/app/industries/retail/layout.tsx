import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Retail & E-commerce Software',
  description: 'Retail and e-commerce software engineered for milliseconds - fast digital storefronts built for scale and conversion.',
  path: '/industries/retail',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
