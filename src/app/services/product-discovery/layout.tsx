import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Product Discovery Services',
  description: 'Build the right product before building the product - product discovery, requirements, exploration and strategy with Acriotech.',
  path: '/services/product-discovery',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
