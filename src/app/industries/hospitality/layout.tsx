import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Hospitality Software Development',
  description: 'Hospitality software engineered for the guest experience - bookings, operations and service delivery.',
  path: '/industries/hospitality',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
