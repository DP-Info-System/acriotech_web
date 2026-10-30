"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, FolderOpen, Terminal } from "lucide-react";
import Link from "next/link";

const workList = [
  {
    slug: "featured-projects",
    num: "01",
    name: "Featured Production Systems",
    tag: "High-Throughput Platforms",
    desc: "A curated record of enterprise platforms built and maintained under intense production concurrency — with thorough documentation of the architectural constraints that shaped them.",
    icon: FolderOpen,
    specs: ["Sub-50ms P99 Latency", "Zero Data Loss SLAs", "Multi-Region Active-Active"]
  },
  {
    slug: "our-clients",
    num: "02",
    name: "Enterprise Client Partnerships",
    tag: "Average Tenure: 3+ Years",
    desc: "Consequential enterprises in healthcare, financial services, and critical logistics that depend on Acriotech for continuous platform velocity. Here is why engineering leadership stays.",
    icon: Users,
    specs: ["Fortune 500 & Scaleups", "Embedded Pod Model", "Direct Executive Escalation"]
  },
  {
    slug: "open-source",
    num: "03",
    name: "Open Source & Architecture Standards",
    tag: "Cloud-Native Tooling",
    desc: "Hardened infrastructure modules, Terraform configurations, benchmarking harnesses, and architecture decision records we author and maintain for the wider systems engineering community.",
    icon: Terminal,
    specs: ["Terraform Verified Modules", "Kubernetes Operators", "MIT License"]
  },
];

export default function WorkIndexPage() {
  const [hoveredRecord, setHoveredRecord] = useState<number | null>(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '5rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                PRODUCTION EVIDENCE &middot; SINCE 2012
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We build software <span style={{ color: '#4B61B8' }}>that survives production.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
              Any agency can ship a fragile prototype. We evaluate architectural engineering by what is running smoothly two years later under peak transactional load with zero unplanned downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Case Study Showcase */}
      <section style={{ padding: '4rem 0 5rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/work/featured-projects" style={{ textDecoration: 'none' }}>
             <div
               style={{
                 background: '#0F172A',
                 borderRadius: '2px',
                 padding: 'clamp(2rem, 4vw, 3.5rem)',
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                 gap: '3rem',
                 boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)',
                 position: 'relative',
                 overflow: 'hidden',
                 border: '1px solid #334155',
                 alignItems: 'center'
               }}
               className="featured-card"
             >
                {/* Subtle grid background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.08,
                    backgroundImage: `
                      linear-gradient(to right, #38BDF8 1px, transparent 1px),
                      linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 10 }}>
                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                     <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                       Flagship System Rebuild
                     </span>
                     <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>Active Production</span>
                   </div>

                   <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                     Global Retail Infrastructure: <span style={{ color: '#38BDF8' }}>Monolith to Headless Fabric</span>
                   </h2>

                   <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                     An international retail platform processing millions in daily sales faced cascading holiday timeouts. We refactored their transactional core into decoupled microservices with Next.js edge caching and Redis state partitioning.
                   </p>

                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#38BDF8', fontWeight: 700, fontSize: '0.95rem' }}>
                     View Case Study <ArrowRight size={16} />
                   </div>
                </div>

                {/* Right Visual: Architecture Metrics HUD */}
                <div style={{ position: 'relative', zIndex: 10, background: '#1E293B', borderRadius: '2px', padding: '2rem', border: '1px solid #334155' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#38BDF8', textTransform: 'uppercase' }}>
                      Architecture Metrics
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>Production SLA</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF' }}>60% Reduction</div>
                        <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>P95 LATENCY</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.2rem' }}>Global TTFT dropped from 1.8s down to 320ms</div>
                    </div>

                    <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF' }}>10x Peak Traffic</div>
                        <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>BURST CAPACITY</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.2rem' }}>Zero memory saturation during Black Friday peak</div>
                    </div>

                    <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#38BDF8' }}>99.99%</div>
                        <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>VERIFIED UPTIME</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.2rem' }}>Zero downtime through 18 consecutive months</div>
                    </div>
                  </div>
                </div>
             </div>
          </Link>
          <style jsx>{`
            .featured-card:hover {
              transform: translateY(-4px);
              border-color: #38BDF8 !important;
              box-shadow: 0 30px 60px -15px rgba(15,23,42,0.4) !important;
            }
          `}</style>
        </div>
      </section>

      {/* Engineering Records: Guaranteed 3-Column Grid with Active Dark-Navy Hover */}
      <section style={{ padding: '5rem 0 7rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3.5rem', maxWidth: '750px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              ENGINEERING ARCHIVE &amp; RECORDS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', margin: 0, marginBottom: '0.75rem' }}>
              Explore our <span style={{ color: '#4B61B8' }}>engineering records.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Structured architectural records spanning production case studies, long-standing client relationships, and public open-source foundations.
            </p>
          </div>

          <div className="layout-grid-3 gap-6 w-full">
            {workList.map((wk, i) => {
              const isActive = hoveredRecord === i;

              return (
                <div
                  key={i}
                  className="w-full min-w-0"
                  onMouseEnter={() => setHoveredRecord(i)}
                  onMouseLeave={() => setHoveredRecord(null)}
                >
                  <Link
                    href={`/work/${wk.slug}`}
                    className={`interactive-card ${isActive ? 'is-active' : ''}`}
                    style={{
                      background: isActive ? '#0B132B' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#0F172A',
                      padding: '1.25rem',
                      borderRadius: '2px',
                      border: isActive ? '1px solid #38BDF8' : '1px solid #E2E8F0',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive
                        ? '0 20px 40px -15px rgba(15, 23, 42, 0.35)'
                        : '0 4px 12px -2px rgba(15, 23, 42, 0.03)',
                      transform: isActive ? 'translateY(-3px)' : 'none',
                      height: '100%'
                    }}
                  >
                    <div>
                      {/* Top Header: High-Contrast Index Badge & Icon */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingBottom: '0.65rem', marginBottom: '0.85rem' }}>
                        <span
                          className="card-badge"
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: isActive ? '#38BDF8' : '#1E293B',
                            background: isActive ? 'rgba(56, 189, 248, 0.15)' : '#F1F5F9',
                            border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #E2E8F0',
                            padding: '0.15rem 0.55rem',
                            borderRadius: '2px',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {wk.num}
                        </span>
                        <div style={{ width: '28px', height: '28px', borderRadius: '2px', background: isActive ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <wk.icon size={15} color={isActive ? '#38BDF8' : '#4B61B8'} />
                        </div>
                      </div>

                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: isActive ? '#38BDF8' : '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                        {wk.tag}
                      </div>

                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-0.015em', color: isActive ? '#FFFFFF' : '#0F172A', lineHeight: 1.3 }}>
                        {wk.name}
                      </h3>

                      <p style={{ color: isActive ? '#CBD5E1' : '#64748B', lineHeight: 1.55, fontSize: '0.84rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {wk.desc}
                      </p>
                    </div>

                    <div>
                      {/* Compact Square Tags (2-3 tags) */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                        {wk.specs.slice(0, 3).map(spec => (
                          <span
                            key={spec}
                            className="card-tag"
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              background: isActive ? 'rgba(255,255,255,0.06)' : '#F8FAFC',
                              color: isActive ? '#93C5FD' : '#64748B',
                              border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
                              padding: '0.15rem 0.6rem',
                              borderRadius: '2px'
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div 
                        className="card-link"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isActive ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.82rem', borderTop: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: '0.75rem' }}
                      >
                        View engineering record <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
