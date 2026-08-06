import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'UI & UX Design Services',
  description: 'Interfaces that make complex work easier to perform - product design, design systems and UI/UX engineering from Acriotech.',
  path: '/services/ui-ux-design',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
