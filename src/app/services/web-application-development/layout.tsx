import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Web App Development Services',
  description: 'Web products built for the operating context - secure, scalable web application development from Acriotech.',
  path: '/services/web-application-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
