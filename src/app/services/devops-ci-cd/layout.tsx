import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'DevOps & CI/CD Services',
  description: 'A delivery path that makes small changes safe - Acriotech DevOps engineering and CI/CD pipeline implementation.',
  path: '/services/devops-ci-cd',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Services', 'item': 'https://acriotech.com/services'}, {'name': 'DevOps & CI/CD', 'item': 'https://acriotech.com/services/devops-ci-cd'}]);
  const service = serviceSchema({ id: "https://acriotech.com/services/devops-ci-cd#service", name: "DevOps & CI/CD Services", serviceType: "DevOps & CI/CD", description: "DevOps & CI/CD Services from Acriotech — enterprise engineering in Bhavnagar, global delivery.", url: "https://acriotech.com/services/devops-ci-cd" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}