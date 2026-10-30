"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Shield, SearchCode, CheckCircle } from "lucide-react";
import Link from "next/link";

type PyramidTier = "unit" | "integration" | "e2e";

interface TierDetail {
  id: PyramidTier;
  title: string;
  subtitle: string;
  share: string;
  executionTime: string;
  coverageTarget: string;
  color: string;
  desc: string;
  specs: string[];
}

const pyramidDetails: Record<PyramidTier, TierDetail> = {
  e2e: {
    id: "e2e",
    title: "End-to-End & Smoke Tests",
    subtitle: "Apex Tier (5–10% of Suite)",
    share: "5–10%",
    executionTime: "< 4.5m Full Suite",
    coverageTarget: "Critical Core Flows",
    color: "#93C5FD",
    desc: "Simulating authentic end-user sessions via headless Chromium/WebKit. Reserved strictly for non-negotiable revenue paths: checkout, SSO auth, and webhook reconciliation.",
    specs: ["Headless Playwright Suite", "Network Idle Synchronization", "Multi-Browser Grid", "Zero Flakiness Threshold"]
  },
  integration: {
    id: "integration",
    title: "Integration & API Contract Tests",
    subtitle: "Middle Tier (20–30% of Suite)",
    share: "20–30%",
    executionTime: "< 120ms per Contract",
    coverageTarget: "80%+ API Schemas",
    color: "#3B82F6",
    desc: "Verifying inter-service RPCs, Kafka event serialization, database transactional integrity, and Redis cache invalidation without requiring a browser runtime.",
    specs: ["Pact Contract Testing", "PostgreSQL Testcontainers", "OpenAPI Spec Validation", "Idempotency Probing"]
  },
  unit: {
    id: "unit",
    title: "Unit & Pure Component Tests",
    subtitle: "Foundational Base (60–70% of Suite)",
    share: "60–70%",
    executionTime: "< 15ms per Spec",
    coverageTarget: "85%+ Domain Logic",
    color: "#1D4ED8",
    desc: "Lightning-fast mathematical verification of domain models, state machines, and algorithmic transformers. Executed on every local git commit within seconds.",
    specs: ["Vitest / Jest Engine", "Deterministic Mocks", "Edge Case Boundary Spikes", "Zero Network Dependency"]
  }
};

export default function QATesting() {
  const [activeTier, setActiveTier] = useState<PyramidTier>("unit");
  const currentTier = pyramidDetails[activeTier];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563EB' }}>
              QUALITY ASSURANCE &amp; RELIABILITY ENGINEERING
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Quality matched to the <br/><span style={{ color: '#2563EB' }}>cost of failure.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
            Not every auxiliary button requires 100% test coverage. But mission-critical business transactions must never fail in production. We implement layered, risk-weighted testing architectures to give engineering teams high-confidence release gates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '0.9rem 2.2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              Audit Your QA Pipeline <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Interactive Testing Pyramid */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              RISK-WEIGHTED COVERAGE MODEL
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Testing Pyramid Architecture</h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', maxWidth: '680px', margin: '0 auto' }}>
              Click or hover any tier in the pyramid stack to inspect execution latency, target coverage, and verification boundaries.
            </p>
          </div>

          <div className="layout-split-hero gap-12 items-center">
            {/* Left Column: Interactive Tier Telemetry */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563EB' }}>
                  {currentTier.subtitle}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748B', background: '#F1F5F9', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Allocation: {currentTier.share}
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                {currentTier.title}
              </h3>

              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                {currentTier.desc}
              </p>

              {/* Metrics Readout */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Execution Speed</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>{currentTier.executionTime}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Coverage Target</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2563EB' }}>{currentTier.coverageTarget}</div>
                </div>
              </div>

              {/* Tier Specs Strip */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {currentTier.specs.map(spec => (
                  <span key={spec} style={{ fontSize: '0.75rem', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #DBEAFE', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 500 }}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Interactive 3-Tier Pyramid Stack */}
            <div>
               <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>
                 Click any layer to inspect:
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '480px', margin: '0 auto' }}>
                 {/* Tier 1: E2E */}
                 <button
                   onClick={() => setActiveTier("e2e")}
                   onMouseEnter={() => setActiveTier("e2e")}
                   style={{
                     width: '55%',
                     margin: '0 auto',
                     padding: '1.25rem 1rem',
                     background: activeTier === "e2e" ? '#1E293B' : '#FFFFFF',
                     color: activeTier === "e2e" ? '#60A5FA' : '#0F172A',
                     border: activeTier === "e2e" ? '2px solid #38BDF8' : '1px solid #CBD5E1',
                     borderRadius: '8px',
                     textAlign: 'center',
                     cursor: 'pointer',
                     transition: 'all 0.2s',
                     boxShadow: activeTier === "e2e" ? '0 10px 25px -5px rgba(56, 189, 248, 0.25)' : 'none'
                   }}
                 >
                   <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>E2E / Smoke</div>
                   <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>Top 5–10% &bull; Critical Paths</div>
                 </button>

                 {/* Tier 2: Integration */}
                 <button
                   onClick={() => setActiveTier("integration")}
                   onMouseEnter={() => setActiveTier("integration")}
                   style={{
                     width: '80%',
                     margin: '0 auto',
                     padding: '1.5rem 1rem',
                     background: activeTier === "integration" ? '#1E293B' : '#FFFFFF',
                     color: activeTier === "integration" ? '#60A5FA' : '#0F172A',
                     border: activeTier === "integration" ? '2px solid #38BDF8' : '1px solid #CBD5E1',
                     borderRadius: '8px',
                     textAlign: 'center',
                     cursor: 'pointer',
                     transition: 'all 0.2s',
                     boxShadow: activeTier === "integration" ? '0 10px 25px -5px rgba(56, 189, 248, 0.25)' : 'none'
                   }}
                 >
                   <div style={{ fontWeight: 800, fontSize: '1rem' }}>Integration &amp; Contracts</div>
                   <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>Middle 20–30% &bull; Schema &amp; DB</div>
                 </button>

                 {/* Tier 3: Unit */}
                 <button
                   onClick={() => setActiveTier("unit")}
                   onMouseEnter={() => setActiveTier("unit")}
                   style={{
                     width: '100%',
                     margin: '0 auto',
                     padding: '1.75rem 1rem',
                     background: activeTier === "unit" ? '#1E293B' : '#FFFFFF',
                     color: activeTier === "unit" ? '#60A5FA' : '#0F172A',
                     border: activeTier === "unit" ? '2px solid #38BDF8' : '1px solid #CBD5E1',
                     borderRadius: '8px',
                     textAlign: 'center',
                     cursor: 'pointer',
                     transition: 'all 0.2s',
                     boxShadow: activeTier === "unit" ? '0 10px 25px -5px rgba(56, 189, 248, 0.25)' : 'none'
                   }}
                 >
                   <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>Unit &amp; Pure Functions</div>
                   <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>Base 60–70% &bull; Millisecond Runtimes</div>
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Automated Testing Pipeline */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
               TEST AUTOMATION FRAMEWORK
             </div>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Automated Testing Pipeline</h2>
             <p style={{ fontSize: '1.15rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
               Modern test orchestration built directly into your GitHub Actions / GitLab CI workflows.
             </p>
          </div>
          
          <div className="layout-grid-2 gap-7 w-full mb-7">
             {/* Card 1: Playwright */}
             <div 
               style={{ 
                 background: '#1E293B', 
                 border: '1px solid #334155', 
                 borderRadius: '16px', 
                 padding: '2rem',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-between'
               }}
               className="w-full min-w-0"
             >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <Target size={28} color="#38BDF8" />
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>Playwright &amp; Cypress</h4>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>Headless Browser Runtime</span>
                    </div>
                  </div>
                  <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Next-generation headless frameworks that wait for actual DOM network idle rather than relying on brittle, arbitrary timeout delays.
                  </p>
                </div>

                <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', padding: '0.85rem 1rem', fontSize: '0.8rem' }}>
                  <div style={{ color: '#34D399', marginBottom: '0.25rem', fontWeight: 600 }}>&check; 48 spec suites passed in 3m 42s</div>
                  <div style={{ color: '#64748B' }}>0 flaky retries &bull; 100% video artifacts recorded</div>
                </div>
             </div>

             {/* Card 2: Visual Regression */}
             <div 
               style={{ 
                 background: '#1E293B', 
                 border: '1px solid #334155', 
                 borderRadius: '16px', 
                 padding: '2rem',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-between'
               }}
               className="w-full min-w-0"
             >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <SearchCode size={28} color="#38BDF8" />
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>Automated Visual Regression</h4>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>Pixel-Level Diffing</span>
                    </div>
                  </div>
                  <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Automatically capturing full-page screenshot diffs against baseline renders across Safari, Chrome, and Firefox to catch CSS breakages before merge.
                  </p>
                </div>

                <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: '#94A3B8' }}>Baseline: <span style={{ color: '#FFFFFF' }}>main#a7f2</span></span>
                    <span style={{ color: '#94A3B8' }}>Branch: <span style={{ color: '#FFFFFF' }}>pr#142</span></span>
                  </div>
                  <span style={{ color: '#34D399', fontWeight: 700, background: 'rgba(52, 211, 153, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    0.00% Drift (Passed)
                  </span>
                </div>
             </div>
          </div>

          {/* Card 3: Full-Width Accessibility & Security Compliance Banner */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', 
              border: '1px solid #38BDF8', 
              borderRadius: '16px', 
              padding: '2rem 2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem'
            }}
            className="w-full min-w-0"
          >
             <div style={{ maxWidth: '600px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                 <Shield size={20} color="#38BDF8" />
                 <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700 }}>
                   IN-PIPELINE COMPLIANCE GATES
                 </span>
               </div>
               <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', margin: 0, marginBottom: '0.35rem' }}>
                 Continuous Axe-Core WCAG Audits on Every Pull Request
               </h4>
               <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                 Zero Level A or AA accessibility regressions allowed into production. Pull requests are automatically blocked if contrast, keyboard traps, or aria tags fail.
               </p>
             </div>

             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
               <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', padding: '0.75rem 1rem', textAlign: 'center' }}>
                 <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34D399' }}>100% Pass</div>
                 <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Axe Audit Gate</div>
               </div>
               <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', padding: '0.75rem 1rem', textAlign: 'center' }}>
                 <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8' }}>Zero Drift</div>
                 <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>WCAG 2.1 AA</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Defect Resolution Time */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div className="layout-split-hero gap-12 items-center">
              <div>
                <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  FORENSIC TRACEABILITY
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Making Defects Actionable, Not Vague
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  &ldquo;It doesn&apos;t work&rdquo; is never an acceptable bug report in professional software engineering. A rigorous QA process generates defects that engineers can diagnose and remediate within minutes.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7 }}>
                  We drastically reduce Mean Time to Resolution (MTTR) by capturing full network traces, memory consumption graphs, and console log captures on every automated test failure.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Deterministic reproduction scripts (Node / Curl)",
                     "Target environment snapshot (Browser, OS, Viewport)",
                     "Full network payload and console log timeline",
                     "Synchronized video replay of the failure transition"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                       <CheckCircle size={18} color="#2563EB" />
                       <span style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
