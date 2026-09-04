import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Product Discovery Services',
  description: 'Build the right product before building the product - product discovery, requirements, exploration and strategy with Acriotech.',
  path: '/services/product-discovery',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'Product Discovery', 'item': 'https://acriotech.com/services/product-discovery'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/product-discovery#service", name: "Product Discovery Services", serviceType: "Product Discovery", description: "Product Discovery Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/product-discovery" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}