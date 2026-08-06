import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: 'DevOps & CI/CD Services',
  description: 'A delivery path that makes small changes safe - Acriotech DevOps engineering and CI/CD pipeline implementation.',
  path: '/services/devops-ci-cd',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
