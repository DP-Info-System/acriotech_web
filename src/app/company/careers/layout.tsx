import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: 'Careers at Acriotech',
  description: 'Join Acriotech. We are always looking for talented developers, cloud architects and QA specialists who take pride in writing clean, reliable code.',
  path: '/company/careers',
});

const jobPostings = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Backend Node.js Developer",
    description: "Build production systems and high-throughput microservices for enterprise clients. Node.js, microservices, Kubernetes, AWS. Remote Global.",
    datePosted: "2026-09-04T09:00:00+05:30",
    validThrough: "2026-12-31T23:59:59+05:30",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@id": "https://acriotech.com/#organization" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" } },
    url: "https://acriotech.com/company/careers",
    directApply: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Full Stack Developer",
    description: "Full-stack product engineering — React/Next.js, Node.js, PostgreSQL, cloud. Remote Global.",
    datePosted: "2026-09-04T09:00:00+05:30",
    validThrough: "2026-12-31T23:59:59+05:30",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@id": "https://acriotech.com/#organization" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" } },
    url: "https://acriotech.com/company/careers",
    directApply: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Frontend Developer",
    description: "Craft premium enterprise UIs — React, Next.js, design systems. Remote Global.",
    datePosted: "2026-09-04T09:00:00+05:30",
    validThrough: "2026-12-31T23:59:59+05:30",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@id": "https://acriotech.com/#organization" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" } },
    url: "https://acriotech.com/company/careers",
    directApply: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Flutter Developer",
    description: "Native & cross-platform mobile — Flutter, integrations, offline-first. Remote Global.",
    datePosted: "2026-09-04T09:00:00+05:30",
    validThrough: "2026-12-31T23:59:59+05:30",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@id": "https://acriotech.com/#organization" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" } },
    url: "https://acriotech.com/company/careers",
    directApply: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Go and Rust Developer",
    description: "Systems engineering — Go, Rust, WASM, eBPF, high-performance services. Remote Global.",
    datePosted: "2026-09-04T09:00:00+05:30",
    validThrough: "2026-12-31T23:59:59+05:30",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@id": "https://acriotech.com/#organization" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" } },
    url: "https://acriotech.com/company/careers",
    directApply: true,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbSchema([{'name': 'Home', 'item': 'https://acriotech.com'}, {'name': 'Company', 'item': 'https://acriotech.com/company'}, {'name': 'Careers', 'item': 'https://acriotech.com/company/careers'}]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {jobPostings.map((job, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }} />
      ))}
      {children}
    </>
  );
}
