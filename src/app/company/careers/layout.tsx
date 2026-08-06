import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'Careers at Acriotech',
  description: 'Join Acriotech. We are always looking for talented developers, cloud architects and QA specialists who take pride in writing clean, reliable code.',
  path: '/company/careers',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
