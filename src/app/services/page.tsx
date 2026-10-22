"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Database, Search, Layout, Smartphone, Network, Cloud, GitBranch, Cpu, ShieldCheck, HeartHandshake, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceList = [
  { slug: "software-consulting", name: "Software Consulting", desc: "Senior technical judgment when the architectural path is unclear.", icon: Database },
  { slug: "product-discovery", name: "Product Discovery", desc: "Connect user need, business intent, and technical feasibility.", icon: Search },
  { slug: "ui-ux-design", name: "UI & UX Design", desc: "Interfaces that make complex enterprise work easier to perform.", icon: Layout },
  { slug: "web-application-development", name: "Web App Development", desc: "Responsive web applications connecting UX to dependable domain logic.", icon: Code },
  { slug: "mobile-app-development", name: "Mobile App Development", desc: "Experiences that respect context, connectivity, and device permissions.", icon: Smartphone },
  { slug: "api-development-integration", name: "API & Integration", desc: "Resilient event-driven and REST/GraphQL API architectures built for high throughput and fault tolerance.", icon: Network },
  { slug: "cloud-architecture", name: "Cloud Architecture", desc: "Foundations shaped around how your team operates and scales.", icon: Cloud },
  { slug: "devops-ci-cd", name: "DevOps and CI/CD", desc: "A delivery path that connects code, infrastructure, and operational feedback.", icon: GitBranch },
  { slug: "ai-integration", name: "AI Integration", desc: "Production-grade LLM and machine learning integrations engineered with strict data governance and reliability.", icon: Cpu },
  { slug: "qa-testing", name: "QA and Testing", desc: "Quality practice matched to the exact cost and risk of failure.", icon: ShieldCheck },
  { slug: "maintenance-support", name: "Maintenance & Support", desc: "Steady care for software the business absolutely depends on.", icon: HeartHandshake },
  { slug: "dedicated-development-teams", name: "Dedicated Teams", desc: "An engineering team that fits seamlessly into your way of working.", icon: Users },
];

export default function ServicesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              SERVICES &amp; ENGINEERING CAPABILITY
            </div>
            <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              How we <span style={{ color: '#4B61B8' }}>actually build things.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Strategy, design, engineering, and operations in one team. One point of contact, one set of standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="capabilities" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '720px' }}>
             <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
               ENGINEERING CAPABILITIES
             </div>
             <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
               What we can <span style={{ color: '#4B61B8' }}>do for you.</span>
             </h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Twelve capabilities. Every one of them connected to the others.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {serviceList.map((service, i) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={i} 
                style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}
                className="service-card"
              >
                 <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1.25rem' }}>
                   {i < 9 ? `0${i + 1}` : i + 1}
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{service.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{service.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   View service <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .service-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
              border-color: #C7D2FE !important;
            }
          `}</style>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Start with the problem, <span style={{ color: '#4B61B8' }}>not the solution.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                Most projects fail in the requirements phase. We spend real time on discovery because finding out a constraint exists in week one is cheaper than finding it in week ten.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#4B61B8" /> Product and technical discovery</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#4B61B8" /> Architecture options with tradeoffs</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#4B61B8" /> Sequenced delivery plans</li>
              </ul>
            </div>
            <div style={{ background: '#0F172A', padding: '4rem', borderRadius: '24px' }}>
              <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                The best architecture is the one that fits how your team actually works.
              </div>
              <div style={{ color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACRIOTECH ENGINEERING PRINCIPLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Depth + Internal Linking — expands thin hub */}
      <section style={{ padding: '4rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            How engagements <span style={{ color: '#4B61B8' }}>actually work.</span>
          </h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '800px' }}>
            We work as a fixed-scope project team, an embedded engineering extension, or an architecture retainer depending on what the work requires. After an initial call, you get a written scope with a timeline and a number — not a vague estimate we revise later.
          </p>
          <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Explore: <a href="/services/web-application-development" style={{ color: '#4B61B8' }}>Web App Development</a> · <a href="/services/api-development-integration" style={{ color: '#4B61B8' }}>API Integration</a> · <a href="/services/cloud-architecture" style={{ color: '#4B61B8' }}>Cloud Architecture</a> · <a href="/services/devops-ci-cd" style={{ color: '#4B61B8' }}>DevOps</a> · <a href="/services/ai-integration" style={{ color: '#4B61B8' }}>AI Integration</a> · <a href="/solutions/enterprise-software" style={{ color: '#4B61B8' }}>Enterprise Software solution</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
