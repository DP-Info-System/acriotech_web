"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Database, Lock, Hexagon } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    name: "Amazon Web Services",
    tier: "Advanced Consulting Partner",
    desc: "We build globally distributed, highly available architectures on AWS using EKS, Lambda, and DynamoDB. Certified experts in Security and Database migrations.",
    icon: Cloud
  },
  {
    name: "Google Cloud Platform",
    tier: "Premier Partner",
    desc: "Leveraging GCP's superior networking and BigQuery data warehousing to build high-throughput analytics engines and machine learning pipelines.",
    icon: Database
  },
  {
    name: "Vercel",
    tier: "Agency Partner",
    desc: "We exclusively deploy our Next.js monoliths and frontend applications on Vercel's edge network for unparalleled core web vitals and developer velocity.",
    icon: Hexagon
  },
  {
    name: "Cloudflare",
    tier: "Enterprise Partner",
    desc: "Protecting infrastructure at the edge. We implement Cloudflare Zero Trust, WAF, and DDoS mitigation for all public-facing enterprise deployments.",
    icon: Lock
  }
];

export default function PartnersPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
            Technology Partners
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            We stand on the <br/><span style={{ color: '#2563EB' }}>shoulders of giants.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            We don&apos;t reinvent the wheel. We integrate best-in-class managed services and cloud infrastructure to deliver secure, scalable systems.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
             {partners.map((partner, i) => (
               <div key={i} style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }} className="partner-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ width: '56px', height: '56px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <partner.icon size={28} color="#2563EB" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>{partner.name}</h3>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{partner.tier}</div>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>{partner.desc}</p>
               </div>
             ))}
          </div>
          <style jsx>{`
            .partner-card:hover {
              box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
              border-color: #CBD5E1 !important;
              background: #FFFFFF !important;
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, marginBottom: '1.5rem' }}>Want to become a partner?</h2>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '3rem' }}>We are always looking for cutting-edge infrastructure and SaaS tools to accelerate our clients&apos; roadmaps.</p>
          <Link href="/contact-us" style={{ background: '#2563EB', color: '#FFFFFF', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
