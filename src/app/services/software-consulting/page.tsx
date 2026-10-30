"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, Navigation, Layers, Code2, Terminal, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SoftwareConsulting() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563EB' }}>
                STRATEGIC ADVISORY &amp; ARCHITECTURE REVIEWS
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Senior technical judgment when the <span style={{ color: '#2563EB' }}>path is unclear.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
              Consulting turns architectural uncertainty, delivery friction, or a difficult technology choice into a decision a team can confidently act on. We bring decades of enterprise engineering experience to your boardroom.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1rem 2.2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'all 0.2s', fontSize: '1rem' }}>
                Book an Advisory Session <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Catalyst */}
      <section className="dark-section" style={{ padding: '5.5rem 0', background: '#0F172A', color: '#FFFFFF', position: 'relative' }}>
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
            <div className="layout-split-hero gap-12 items-start">
               <div>
                 <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                   EXECUTIVE INTERVENTION
                 </div>
                 <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>The Catalyst</h2>
                 <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7 }}>
                   Organizations typically bring our consulting practice in when the cost of making the wrong technical decision outweighs the cost of the project itself.
                 </p>
               </div>
               <div className="layout-grid-2 gap-4">
                 {[
                   { icon: Layers, title: "Platform Stagnation", text: "Engineering moving too slowly, burdened by legacy technical debt that teams lack the authority to replace." },
                   { icon: Navigation, title: "Technology Selection", text: "Unbiased, vendor-neutral analysis on whether to build, buy, or assemble your next core system foundation." },
                   { icon: Code2, title: "Architecture Review", text: "Before committing millions to a new build, validating system capacity, fault tolerance, and multi-region SLAs." },
                   { icon: FileText, title: "M&A Due Diligence", text: "Forensic code evaluation, cloud security auditing, and team topology inspection of acquisition targets." }
                 ].map((item, i) => (
                    <div key={i} style={{ background: '#1E293B', padding: '1.75rem', borderRadius: '12px', border: '1px solid #334155' }}>
                       <item.icon size={24} color="#38BDF8" style={{ marginBottom: '1rem' }} />
                       <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.5rem' }}>{item.title}</h4>
                       <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 2: The Consulting Process */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              STRUCTURED ADVISORY RUNBOOK
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>How We Consult</h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              We don't deliver generic slide decks. We inspect source code, map dependency graphs, and formulate production-ready architecture deliverables.
            </p>
          </div>

          {/* Stepped Deliverable Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            
            {/* Step 1: Week 1-2 Discovery & Audit + C4 System Context Blueprint */}
            <div className="layout-grid-2 gap-8 items-center">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    Phase 01 &bull; Weeks 1&ndash;2
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Audit &amp; Discovery</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Discovery &amp; Forensic Audit</h3>
                <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We embed ourselves with your team. We review architecture diagrams, read actual source code, map CI/CD pipelines, and interview key engineering and business stakeholders to diagnose the real points of friction.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {["Source Code Inspection", "Repository Audits", "Pipeline Profiling", "Stakeholder Interviews"].map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', background: '#F1F5F9', color: '#334155', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Visual Deliverable 1: C4 System Context Wireframe */}
              <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid #334155', padding: '2rem', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={16} color="#38BDF8" />
                    <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700 }}>C4 System Context Architecture</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>Production Blueprint</span>
                </div>

                {/* Diagram Vector Layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ flex: 1, background: '#1E293B', border: '1px solid #475569', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>CLIENT LAYER</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>Web &amp; Mobile Apps</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#38BDF8', fontSize: '0.8rem' }}>&rarr; TLS 1.3 &rarr;</div>
                    <div style={{ flex: 1, background: '#1E293B', border: '1px solid #38BDF8', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#38BDF8' }}>EDGE INGRESS</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>API Gateway / Auth</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', color: '#64748B', fontSize: '0.8rem' }}>&darr; Async Event Bus (Kafka) &darr;</div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '6px', padding: '0.6rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748B' }}>SERVICE A</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CBD5E1' }}>Order Core</div>
                    </div>
                    <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '6px', padding: '0.6rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748B' }}>SERVICE B</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CBD5E1' }}>Billing Ledger</div>
                    </div>
                    <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '6px', padding: '0.6rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748B' }}>SERVICE C</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CBD5E1' }}>Telemetry</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #334155', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                  <span>Scope: 2.4M LOC Scanned</span>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>Identified 14 Bottlenecks</span>
                </div>
              </div>
            </div>

            {/* Step 2: Tradeoff Matrix (Left) + Options Engineering (Right) */}
            <div className="layout-grid-2 gap-8 items-center">
              {/* Visual Deliverable 2: 4-Dimension Tradeoff Matrix */}
              <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid #334155', padding: '2rem', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} color="#38BDF8" />
                    <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700 }}>Decision &amp; Trade-Off Matrix</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>Evaluation Framework</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { dim: "Cost Efficiency", optA: "40%", optB: "85%", winner: "Option B" },
                    { dim: "Time-to-Market", optA: "80%", optB: "65%", winner: "Option A" },
                    { dim: "Operational Risk", optA: "35%", optB: "90%", winner: "Option B" },
                    { dim: "Maintainability", optA: "45%", optB: "95%", winner: "Option B" }
                  ].map((row, rIdx) => (
                    <div key={rIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                        <span style={{ color: '#CBD5E1' }}>{row.dim}</span>
                        <span style={{ color: '#38BDF8', fontWeight: 600 }}>Favors: {row.winner}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        <div style={{ background: '#1E293B', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: row.optA, height: '100%', background: '#64748B' }}></div>
                        </div>
                        <div style={{ background: '#1E293B', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: row.optB, height: '100%', background: '#2563EB' }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #334155', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                  <span>Monolith Modularization vs Clean Re-write</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>Consensus Reached</span>
                </div>
              </div>

              {/* Text Explaining Step 2 */}
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    Phase 02 &bull; Weeks 3&ndash;4
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Option Analysis</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Options Engineering &amp; Trade-Offs</h3>
                <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  There is no single "perfect" architecture—only trade-offs. We model 2 to 3 viable architectural pathways with clear comparisons of total cost of ownership (TCO), time-to-delivery, talent availability, and long-term maintenance risk.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {["Cost-Benefit Modeling", "Vendor Risk Analysis", "Cloud Native vs Hybrid", "Team Feasibility"].map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', background: '#F1F5F9', color: '#334155', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Synthesis, ADRs, & Board-Ready Blueprint */}
            <div className="layout-grid-2 gap-8 items-center">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    Phase 03 &bull; Weeks 5&ndash;6
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Blueprint &amp; Alignment</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Architecture Decision Record (ADR)</h3>
                <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  We author formal, unambiguous Architecture Decision Records (ADRs). These documents lock in technical decisions, provide rationale, establish risk mitigations, and prevent circular debates within your engineering teams.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {["Signed ADR Blueprint", "Executive Consensus", "Jira Epic Backlog", "Clear Direction"].map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', background: '#F1F5F9', color: '#334155', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Visual Deliverable 3: Signed ADR Blueprint Card */}
              <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid #334155', padding: '2rem', color: '#FFFFFF', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={16} color="#38BDF8" />
                    <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700 }}>Architecture Decision Record</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#34D399', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                    Signed &amp; Approved
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.75rem' }}>
                  Reference: Architecture Decision Record #42
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1rem' }}>
                  Adoption of Asynchronous Event-Driven Backbone with Zero-Downtime Rollout
                </div>

                <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '1rem' }}>
                  <span style={{ color: '#38BDF8', fontWeight: 700 }}>Engineering Impact:</span> Decouples high-volume checkout flow from legacy ERP database. P99 latency drops from 420ms to 18ms under 50k req/sec peak load.
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#94A3B8', borderTop: '1px solid #334155', paddingTop: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={14} color="#38BDF8" />
                    <span>Sign-off: Principal Architect &amp; VP Eng</span>
                  </div>
                  <span>Version 1.0 Final</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: Deliverables */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div className="layout-split-hero gap-12 items-center">
             <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
               <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Concrete Output Deliverables</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {[
                   "System Context & C4 Architecture Schematics",
                   "Prioritized Technical Debt Remediation Backlog",
                   "Target Operating Model & Team Topology Mapping",
                   "Cloud Cost & TCO Multi-Year Projection Models",
                   "Independent Vendor Assessment Scorecards"
                 ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                     <FileText size={18} color="#2563EB" />
                     <span style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.9rem' }}>{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             <div>
                <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  MEASURABLE VALUE
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Leave behind usable blueprints, not slides.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  A successful consulting engagement doesn't end with a PowerPoint presentation. It ends with an actionable technical blueprint your engineers can execute the very next morning.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7 }}>
                  We provide concrete, developer-ready artifacts: sequence diagrams for complex workflows, API contract schemas, and an import-ready backlog configured for immediate sprint velocity.
                </p>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
