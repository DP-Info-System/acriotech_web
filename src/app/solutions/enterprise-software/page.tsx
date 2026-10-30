"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Network, ShieldAlert, Cpu, Lock, Key, FileCheck } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSoftware() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section 
        style={{ 
          paddingTop: 'calc(var(--spacing-section) * 1.3)', 
          paddingBottom: '6rem', 
          background: '#FFFFFF', 
          borderBottom: '1px solid #E2E8F0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                ENTERPRISE DISTRIBUTED SYSTEMS
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.7rem, 4.5vw, 60px)', 
                fontWeight: 800, 
                color: '#0F172A', 
                letterSpacing: '-0.03em', 
                lineHeight: 1.1, 
                marginBottom: '1.5rem' 
              }}
            >
              Software that bears the <br/>
              <span style={{ color: '#4B61B8' }}>weight of your balance sheet.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '720px' }}>
              When system failure carries direct regulatory fines and customer churn. We architect and harden distributed enterprise platforms engineered for extreme concurrency, continuous auditability, and zero downtime.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
              <Link 
                href="/contact-us" 
                style={{ 
                  background: '#0F172A', 
                  color: '#FFFFFF', 
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  fontWeight: 600, 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                Speak with a Principal Architect <ArrowRight size={18} />
              </Link>
              <Link 
                href="/work/featured-projects" 
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #CBD5E1', 
                  color: '#0F172A', 
                  padding: '1rem 1.75rem', 
                  borderRadius: '8px', 
                  fontWeight: 600, 
                  textDecoration: 'none' 
                }}
              >
                View Case Studies &rarr;
              </Link>
            </div>

            {/* Technical Metadata Spec Strip */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', fontSize: '0.85rem', color: '#64748B' }}>
              <div><strong style={{ color: '#0F172A' }}>SLA:</strong> 99.99% Contractual</div>
              <div><strong style={{ color: '#0F172A' }}>Latency:</strong> &lt;18ms P99 Edge</div>
              <div><strong style={{ color: '#0F172A' }}>Consistency:</strong> Zero-Loss Dual Write</div>
              <div><strong style={{ color: '#0F172A' }}>IP Ownership:</strong> 100% Client Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Complex System Integration */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="layout-split-hero gap-12 items-center w-full">
            {/* Left Column: Architecture Pillars */}
            <div className="w-full min-w-0">
               <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                 SYSTEM INTEGRATION ARCHITECTURE
               </div>
               <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 40px)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                 Complex System Integration
               </h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                 Enterprise software cannot operate in a vacuum. We engineer high-throughput event buses and resilient bridge layers that tie modern cloud services to legacy core mainframes without packet loss.
               </p>

               {/* Connected Architecture Pillars */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                 {/* Pillar 1 */}
                 <div 
                   style={{ 
                     background: '#FFFFFF', 
                     border: '1px solid #CBD5E1', 
                     borderRadius: '12px', 
                     padding: '1.5rem', 
                     display: 'flex', 
                     gap: '1.25rem',
                     boxShadow: '0 4px 15px rgba(15,23,42,0.03)',
                     position: 'relative'
                   }}
                 >
                   <div style={{ width: '44px', height: '44px', background: '#EFF6FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Network size={22} color="#4B61B8" />
                   </div>
                   <div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                       <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', margin: 0 }}>Event-Driven Architecture</h4>
                       <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', background: '#F1F5F9', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>Kafka &amp; RabbitMQ</span>
                     </div>
                     <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.55, margin: 0 }}>
                       Decoupled publish-subscribe backbones guaranteeing at-least-once or exactly-once message semantics under burst conditions.
                     </p>
                   </div>
                 </div>

                 {/* Pillar 2 */}
                 <div 
                   style={{ 
                     background: '#FFFFFF', 
                     border: '1px solid #CBD5E1', 
                     borderRadius: '12px', 
                     padding: '1.5rem', 
                     display: 'flex', 
                     gap: '1.25rem',
                     boxShadow: '0 4px 15px rgba(15,23,42,0.03)',
                     position: 'relative'
                   }}
                 >
                   <div style={{ width: '44px', height: '44px', background: '#EFF6FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Cpu size={22} color="#4B61B8" />
                   </div>
                   <div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                       <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', margin: 0 }}>Legacy API &amp; CDC Wrappers</h4>
                       <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', background: '#F1F5F9', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>Debezium &amp; gRPC</span>
                     </div>
                     <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.55, margin: 0 }}>
                       Secure gRPC/REST facades around legacy SOAP services and direct database change-data-capture pipelines with zero mainframe disruption.
                     </p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Right Column: Dark Navy System Topology Metric Card */}
            <div className="w-full min-w-0">
              <div 
                style={{ 
                  background: '#0F172A', 
                  borderRadius: '18px', 
                  padding: '2.5rem', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: '#FFFFFF',
                  boxShadow: '0 20px 40px -10px rgba(15,23,42,0.4)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      System Topology Metrics
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Production Baseline
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>Message Ingestion Throughput</span>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>120,000+ msg/s</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #4B61B8 0%, #38BDF8 100%)' }} />
                    </div>
                  </div>

                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>Partition Failover SLA</span>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#60A5FA' }}>&lt; 3.0s Auto-Heal</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: '98%', height: '100%', background: '#22C55E' }} />
                    </div>
                  </div>

                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>Legacy Mainframe Connectors</span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>SOAP / gRPC / DB-CDC</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>Audit Trail Immutability</span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#38BDF8' }}>Cryptographic Hash Chain</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: '#94A3B8', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Dual-Run Verification</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>Active &amp; Monitored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Built for the Auditor */}
      <section style={{ padding: 'calc(var(--spacing-section) * 1.2) 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
             <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
               <ShieldAlert size={26} color="#4B61B8" />
             </div>
             <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
               AUDIT &amp; COMPLIANCE FRAMEWORK
             </div>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 42px)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
               Built for the Auditor
             </h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.65 }}>
               Compliance is not an afterthought or a quarterly panic. Every tier is engineered as an interlocking stratum with cryptographic verification baked into the pipeline.
             </p>
          </div>
          
          {/* 4 Defense-in-Depth Strata */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1040px', margin: '0 auto' }}>
            {[
              {
                stratum: "01 PERSISTENCE",
                title: "Data at Rest",
                badge: "AES-256-GCM",
                desc: "Automated cryptographic volume encryption across all transactional databases, read replicas, and object storage buckets with hardware HSM key rotation.",
                icon: <Lock size={20} color="#4B61B8" />
              },
              {
                stratum: "02 TRANSPORT",
                title: "Data in Transit",
                badge: "TLS 1.3 + mTLS",
                desc: "Mutual TLS enforced on all service-to-service ingress and RPC calls. Ephemeral certificates rotated continuously via Envoy sidecars with zero cipher suite fallback.",
                icon: <Network size={20} color="#2563EB" />
              },
              {
                stratum: "03 IDENTITY",
                title: "Access Control & Perimeter",
                badge: "RBAC + WebAuthn MFA",
                desc: "Zero-Trust least-privilege boundary enforcement. Granular role-based ACLs mapped to corporate identity providers with continuous session re-authentication.",
                icon: <Key size={20} color="#38BDF8" />
              },
              {
                stratum: "04 EVIDENCE",
                title: "Cryptographic Audit Ledger",
                badge: "Immutable SHA-256 Chain",
                desc: "Append-only, cryptographically hashed ledger recording all state mutations and privilege escalation events, exportable directly to compliance auditors.",
                icon: <FileCheck size={20} color="#22C55E" />
              }
            ].map((layer, i) => (
              <div 
                key={i} 
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '14px', 
                  border: '1px solid #CBD5E1', 
                  padding: '1.75rem 2.25rem',
                  boxShadow: '0 4px 16px rgba(15,23,42,0.03)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="grid grid-cols-1 md:grid-cols-[1.3fr_1.5fr_auto] gap-6 items-center w-full transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: i === 3 ? '#22C55E' : '#4B61B8' }} />

                <div className="w-full min-w-0" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {layer.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                      {layer.stratum}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {layer.title}
                    </h3>
                  </div>
                </div>

                <div className="w-full min-w-0">
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                    {layer.desc}
                  </p>
                </div>

                <div className="w-full md:w-auto flex md:justify-end">
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: '6px', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0F172A', whiteSpace: 'nowrap' }}>
                    {layer.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Escalation & SLA Support */}
      <section className="dark-section" style={{ padding: 'calc(var(--spacing-section) * 1.2) 0', background: '#0F172A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3.5rem', maxWidth: '720px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              ESCALATION &amp; SLA MATRIX
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Unwavering Support SLAs
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
              Enterprise software requires enterprise backing. Escalations route directly to the senior engineers who authored your codebase, bypassing tier-1 support scripts.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            {/* Severity 1 */}
            <div 
              style={{ 
                background: '#1E293B', 
                borderRadius: '14px', 
                border: '1px solid rgba(96, 165, 250, 0.35)', 
                padding: '1.75rem 2rem',
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_auto] gap-6 items-center w-full"
            >
              <div className="w-full min-w-0" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ position: 'relative', width: '12px', height: '12px', flexShrink: 0 }}>
                  <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#38BDF8', opacity: 0.75 }} className="animate-ping" />
                  <span style={{ position: 'relative', display: 'block', width: '12px', height: '12px', borderRadius: '50%', background: '#38BDF8' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', letterSpacing: '0.05em' }}>CRITICAL PRIORITY</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Severity 1 &mdash; Production Down</h3>
                </div>
              </div>

              <div className="w-full min-w-0" style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                Complete core platform outage or data loss risk. Direct principal engineer page.
              </div>

              <div className="w-full md:w-auto flex md:justify-end flex-col md:items-end">
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#38BDF8' }}>&lt; 15 Mins</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>24/7/365 On-Call</div>
              </div>
            </div>

            {/* Severity 2 */}
            <div 
              style={{ 
                background: '#1E293B', 
                borderRadius: '14px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '1.75rem 2rem',
                position: 'relative'
              }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_auto] gap-6 items-center w-full lg:ml-10"
            >
              <div className="w-full min-w-0" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.05em' }}>HIGH PRIORITY</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Severity 2 &mdash; Core Impairment</h3>
                </div>
              </div>

              <div className="w-full min-w-0" style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                Major feature degradation with active workaround available.
              </div>

              <div className="w-full md:w-auto flex md:justify-end flex-col md:items-end">
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>&lt; 1 Hour</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Extended Hours</div>
              </div>
            </div>

            {/* Severity 3 */}
            <div 
              style={{ 
                background: '#1E293B', 
                borderRadius: '14px', 
                border: '1px solid rgba(255,255,255,0.06)', 
                padding: '1.75rem 2rem',
                position: 'relative'
              }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_auto] gap-6 items-center w-full lg:ml-20"
            >
              <div className="w-full min-w-0" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#64748B', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', letterSpacing: '0.05em' }}>STANDARD PRIORITY</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#E2E8F0', margin: 0 }}>Severity 3 &mdash; Minor Query</h3>
                </div>
              </div>

              <div className="w-full min-w-0" style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                Non-blocking bug, documentation clarification, or configuration inquiry.
              </div>

              <div className="w-full md:w-auto flex md:justify-end flex-col md:items-end">
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#94A3B8' }}>&lt; 24 Hours</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Business Sprint</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
