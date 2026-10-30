"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Factory, Stethoscope, GraduationCap, Truck, ShoppingBag, Landmark, UtensilsCrossed, Building, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface IndustryItem {
  slug: string;
  num: string;
  name: string;
  desc: string;
  specs: string[];
  icon: any;
}

const industryList: IndustryItem[] = [
  { 
    slug: "manufacturing", 
    num: "01",
    name: "Heavy Manufacturing & Industrial", 
    desc: "SCADA integrations, floor telemetry streaming, edge anomaly inference, and multi-plant inventory reconciliation for global industrial leaders.", 
    specs: ["Sub-10ms Edge Sampling", "Air-Gapped Failover", "OPC-UA / MQTT"],
    icon: Factory
  },
  { 
    slug: "healthcare", 
    num: "02",
    name: "Healthcare & Life Sciences", 
    desc: "Bi-directional Epic/Cerner connectors, telehealth streaming, diagnostic image pipelines, and zero-trust PHI encryption at rest and in transit.", 
    specs: ["FHIR Interoperability", "Immutable Audit Vault", "Field-Level Encryption"],
    icon: Stethoscope
  },
  { 
    slug: "financial-services", 
    num: "03",
    name: "Financial Services", 
    desc: "High-throughput settlement engines, anti-fraud ML pipelines, and audit-immutable ledger storage meeting global regulatory standards.", 
    specs: ["Sub-20ms Latency", "ACID Compliance", "Zero Data Loss RPO"],
    icon: Landmark
  },
  { 
    slug: "logistics", 
    num: "04",
    name: "Logistics & Freight", 
    desc: "Dynamic routing engines, warehouse robotics coordination, and fleet telemetry under intermittent network conditions.", 
    specs: ["Real-Time GPS Ingestion", "Automated EDI Exchange", "Offline Sync Engine"],
    icon: Truck
  },
  { 
    slug: "retail", 
    num: "05",
    name: "Retail & Headless E-Commerce", 
    desc: "Microservices catalog and checkout engines built to withstand holiday traffic bursts without scaling latency degradation or checkout drop-off.", 
    specs: ["High-Concurrency Checkout", "Edge Cart State", "Global CDN Invalidation"],
    icon: ShoppingBag
  },
  { 
    slug: "education", 
    num: "06",
    name: "Higher Ed & EdTech", 
    desc: "Scalable learning management runtimes, automated assessment verification, and high-concurrency virtual classroom infrastructure.", 
    specs: ["WebRTC Concurrency", "LTI Interoperability", "FERPA Compliance"],
    icon: GraduationCap
  },
  { 
    slug: "hospitality", 
    num: "07",
    name: "Hospitality & Travel", 
    desc: "Central reservation engines, dynamic room pricing matrices, and unified customer identity timelines across international property portfolios.", 
    specs: ["Multi-Currency Settlement", "Sub-Second Rate Sync", "Unified Customer Profiles"],
    icon: UtensilsCrossed
  },
  { 
    slug: "government", 
    num: "08",
    name: "Government & Public Sector", 
    desc: "High-assurance cloud infrastructure, citizen self-service identity portals, and compliance-first multi-agency data segregation.", 
    specs: ["Sovereign Cloud Isolation", "Accessibility Compliance", "Role-Based Access Control"],
    icon: Building
  },
  { 
    slug: "startups", 
    num: "09",
    name: "High-Growth Scaleups", 
    desc: "Architectural foundations for venture-backed platforms outgrowing their initial prototype and requiring enterprise-grade availability.", 
    specs: ["Rapid Pod Ramp-Up", "Readiness Audits", "Zero Technical Debt"],
    icon: Rocket
  },
];

export default function IndustriesIndexPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '5rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                DOMAIN EXPERTISE
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Engineering decisions change when <span style={{ color: '#4B61B8' }}>the risk model changes.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.65, maxWidth: '800px', margin: 0 }}>
              Acriotech engineers deeply understand the regulatory mandates, compliance protocols, fault tolerances, and operational friction points of your specific sector before proposing a single architecture diagram.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors: Guaranteed 3-Column Grid with Active Dark-Navy Hover */}
      <section style={{ padding: '5rem 0 6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ marginBottom: '3.5rem', maxWidth: '780px' }}>
             <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
               PRODUCTION DOMAIN SPECIALIZATION
             </div>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
               Sectors we actively serve.
             </h2>
             <p style={{ fontSize: '1.15rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
               Nine consequential verticals where downtime carries legal liabilities, executive scrutiny, and direct balance-sheet loss.
             </p>
          </div>
          
          {/* Clean 3-Column Responsive Grid with Active Card Spotlight Transfer */}
          <div className="layout-grid-3 gap-6 w-full">
            {industryList.map((ind, i) => {
              const isActive = activeIndustry === i;

              return (
                <div key={i} className="w-full min-w-0" onMouseEnter={() => setActiveIndustry(i)}>
                  <Link 
                    href={`/industries/${ind.slug}`} 
                    style={{ 
                      background: isActive ? '#0F172A' : '#FFFFFF', 
                      color: isActive ? '#FFFFFF' : '#0F172A', 
                      padding: '2.25rem', 
                      borderRadius: '2px', 
                      border: isActive ? '1px solid #38BDF8' : '1px solid #E2E8F0', 
                      textDecoration: 'none', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', 
                      boxShadow: isActive 
                        ? '0 20px 40px -15px rgba(15, 23, 42, 0.35)' 
                        : '0 4px 12px -2px rgba(15,23,42,0.03)',
                      transform: isActive ? 'translateY(-3px)' : 'none',
                      height: '100%'
                    }}
                  >
                    <div>
                      {/* Top Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: isActive ? '#38BDF8' : '#4B61B8' }}>
                          {ind.num}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                        <ind.icon size={22} color={isActive ? '#38BDF8' : '#4B61B8'} />
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.015em', color: isActive ? '#FFFFFF' : '#0F172A' }}>
                          {ind.name}
                        </h3>
                      </div>

                      <p style={{ color: isActive ? '#CBD5E1' : '#475569', lineHeight: 1.6, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                        {ind.desc}
                      </p>
                    </div>

                    <div>
                      {/* Specs badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                        {ind.specs.map(spec => (
                          <span 
                            key={spec} 
                            style={{ 
                              fontSize: '0.72rem', 
                              fontWeight: 600,
                              background: isActive ? 'rgba(255,255,255,0.06)' : '#F8FAFC', 
                              color: isActive ? '#93C5FD' : '#64748B', 
                              border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0', 
                              padding: '0.2rem 0.5rem', 
                              borderRadius: '2px' 
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isActive ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.9rem', borderTop: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                        View industry details →
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulated Environments Banner */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#4B61B8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                COMPLIANCE ARCHITECTURE
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem' }}>
                Engineered for <span style={{ color: '#4B61B8' }}>strict audit posture.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Every sector brings non-negotiable statutory requirements. Before writing production code, our principal architects define data boundary policies, immutable cryptographic trails, and deterministic disaster recovery parameters tailored directly to your regulatory body.
              </p>
            </div>

            <div style={{ background: '#0F172A', padding: '3.5rem', borderRadius: '16px', border: '1px solid #334155', color: '#FFFFFF', position: 'relative' }}>
              <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                ENGINEERING PRINCIPLE
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.35 }}>
                &ldquo;We do not treat compliance as an afterthought remediation sprint. Auditability, data isolation, and cryptographic integrity are foundational design primitives from day one.&rdquo;
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #334155', paddingTop: '1.25rem' }}>
                <ShieldCheck size={20} color="#38BDF8" />
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Verified Across HIPAA, SOC 2, PCI-DSS, and ISO 27001 Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
