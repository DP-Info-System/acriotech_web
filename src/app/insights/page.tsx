"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InsightsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '5rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ARCHITECTURE THOUGHT LEADERSHIP
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We write down <span style={{ color: '#4B61B8' }}>how we engineer systems.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
              Unfiltered technical analysis, empirical architecture benchmarks, and real-world failure analyses authored directly by Acriotech Principal Engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Whitepaper Banner */}
      <section style={{ padding: '3.5rem 0 5rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/insights/whitepapers" style={{ textDecoration: 'none' }}>
             <div 
               style={{ 
                 background: '#0F172A', 
                 borderRadius: '16px', 
                 padding: 'clamp(2rem, 4vw, 3.5rem)', 
                 display: 'grid', 
                 gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', 
                 gap: '3rem', 
                 alignItems: 'center', 
                 boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)',
                 border: '1px solid #334155',
                 position: 'relative',
                 overflow: 'hidden'
               }} 
               className="featured-whitepaper-card"
             >
                {/* Subtle blueprint grid background */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: `
                      linear-gradient(to right, #38BDF8 1px, transparent 1px),
                      linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 10 }}>
                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#4B61B8', color: '#FFFFFF', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                     Featured Whitepaper
                   </div>
                   
                   <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>
                     The Pragmatic Guide to Microservices in 2026
                   </h2>
                   
                   <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                     A practical, data-driven framework for evaluating when distributed microservices justify their operational overhead—and when a modular monolith is the superior enterprise choice.
                   </p>
                   
                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#38BDF8', fontWeight: 700, fontSize: '0.95rem' }}>
                     Examine Complete Whitepaper <ArrowRight size={16} />
                   </div>
                </div>

                {/* Topology Layers Container */}
                <div 
                  className="stack-3d-container"
                  style={{ 
                    background: '#1E293B', 
                    padding: '2rem', 
                    borderRadius: '14px', 
                    border: '1px solid #334155',
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    MICROSERVICES TOPOLOGY LAYERS
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
                    {/* Layer 01 */}
                    <div 
                      className="stack-layer-1"
                      style={{ 
                        background: '#0F172A', 
                        border: '1px solid #38BDF8', 
                        borderRadius: '8px', 
                        padding: '1rem 1.25rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>API Gateway &amp; Edge Ingress</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>Layer 01</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ color: '#38BDF8', fontSize: '0.8rem', lineHeight: 1 }}>↓</span>
                    </div>

                    {/* Layer 02 */}
                    <div 
                      className="stack-layer-2"
                      style={{ 
                        background: '#0F172A', 
                        border: '1px solid #64748B', 
                        borderRadius: '8px', 
                        padding: '1rem 1.25rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#E2E8F0' }}>Core Domain Services Mesh</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#CBD5E1', background: 'rgba(148, 163, 184, 0.15)', border: '1px solid rgba(148, 163, 184, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>Layer 02</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ color: '#38BDF8', fontSize: '0.8rem', lineHeight: 1 }}>↓</span>
                    </div>

                    {/* Layer 03 */}
                    <div 
                      className="stack-layer-3"
                      style={{ 
                        background: '#0F172A', 
                        border: '1px solid #38BDF8', 
                        borderRadius: '8px', 
                        padding: '1rem 1.25rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>Distributed Event Bus &amp; DB Ledger</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>Layer 03</span>
                    </div>
                  </div>
                </div>
             </div>
          </Link>
          
          <style jsx>{`
            .featured-whitepaper-card:hover .stack-layer-1 {
              transform: translateX(6px) translateY(-2px);
            }
            .featured-whitepaper-card:hover .stack-layer-2 {
              transform: translateX(12px) translateY(0px);
            }
            .featured-whitepaper-card:hover .stack-layer-3 {
              transform: translateX(18px) translateY(2px);
            }
            .featured-whitepaper-card:hover {
              transform: translateY(-4px);
              border-color: #38BDF8 !important;
              box-shadow: 0 30px 60px -15px rgba(15,23,42,0.4) !important;
            }
          `}</style>
        </div>
      </section>

      {/* Insights 3-Pillar Multi-Column Card Grid with Guaranteed Gap Spacing */}
      <section style={{ padding: '4rem 0 6rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem', maxWidth: '720px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              RESEARCH &amp; PUBLICATIONS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', margin: 0, marginBottom: '0.75rem' }}>
              Explore technical <span style={{ color: '#4B61B8' }}>publications.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Three engineering pillars covering peer-reviewed benchmarks, architecture webinars, and company milestones.
            </p>
          </div>

          <div className="layout-grid-3 gap-6 w-full">
            {[
              {
                num: "01",
                slug: "research-reports",
                title: "Research Reports",
                desc: "Empirical software engineering studies, latency benchmarks, and architectural scalability analysis under live traffic.",
                tag: "Empirical Studies"
              },
              {
                num: "02",
                slug: "case-studies",
                title: "Production Case Studies",
                desc: "Real-world platform migrations, high-throughput architectures, and empirical latency telemetry under live load.",
                tag: "Execution Evidence"
              },
              {
                num: "03",
                slug: "news-press",
                title: "News & Press",
                desc: "Company milestones, open-source library releases, security compliance certifications, and production announcements.",
                tag: "Engineering Milestones"
              }
            ].map((item) => (
              <div key={item.slug} className="w-full min-w-0">
                <Link
                  href={`/insights/${item.slug}`}
                  className="interactive-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.65rem', marginBottom: '1rem' }}>
                      <span
                        className="card-badge"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#1E293B',
                          background: '#F1F5F9',
                          border: '1px solid #E2E8F0',
                          padding: '0.15rem 0.6rem',
                          borderRadius: '2px',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {item.num}
                      </span>
                      <span
                        className="card-tag"
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          background: '#F8FAFC',
                          color: '#64748B',
                          border: '1px solid #E2E8F0',
                          padding: '0.15rem 0.55rem',
                          borderRadius: '2px'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.6rem 0', color: '#0F172A', letterSpacing: '-0.015em' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className="card-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#4B61B8',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '0.85rem',
                      marginTop: '1.25rem'
                    }}
                  >
                    Browse publication records <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
