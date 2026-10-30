"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Server, 
  Shield, 
  Zap, 
  Layers, 
  Network, 
  Terminal, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Activity, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Radio, 
  HardDrive, 
  RefreshCw, 
  GitCommit, 
  ExternalLink,
  Code2,
  Workflow,
  // Sparkles removed
  FileCheck2,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// --- Interactive System Architecture for Hero ---
function HeroArchitecturalCard() {
  const [activeTab, setActiveTab] = useState<'topology' | 'telemetry'>('topology');

  return (
    <div 
      className="hero-telemetry-ledger"
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '460px',
        zIndex: 10
      }}
    >
      {/* Blueprint Ambient Shadow & Radial Glow */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: '-2px', 
          borderRadius: '20px', 
          background: 'linear-gradient(135deg, rgba(75,97,184,0.3) 0%, rgba(15,23,42,0.1) 100%)', 
          display: 'none', 
          zIndex: 0 
        }} 
      />

      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          background: '#0F172A', 
          borderRadius: '12px', 
          padding: '1.75rem', 
          border: '1px solid rgba(255,255,255,0.1)', 
          boxShadow: '0 25px 50px -12px rgba(15,23,42,0.5)',
          overflow: 'hidden'
        }}
      >

        {/* Top Header Row with Live Node Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px rgba(34,197,94,0.8)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#60A5FA', textTransform: 'uppercase' }}>
              System Architecture
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem', borderRadius: '2px' }}>
            <button 
              onClick={() => setActiveTab('topology')}
              style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                border: 'none',
                background: activeTab === 'topology' ? '#4B61B8' : 'transparent',
                color: activeTab === 'topology' ? '#FFFFFF' : '#94A3B8',
                cursor: 'pointer'
              }}
            >
              TOPOLOGY
            </button>
            <button 
              onClick={() => setActiveTab('telemetry')}
              style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                border: 'none',
                background: activeTab === 'telemetry' ? '#4B61B8' : 'transparent',
                color: activeTab === 'telemetry' ? '#FFFFFF' : '#94A3B8',
                cursor: 'pointer'
              }}
            >
              METRICS
            </button>
          </div>
        </div>

        {activeTab === 'topology' ? (
          <div>
            {/* Live 3-Tier System Topology Schematic */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
              {/* Tier 1: Ingress Edge */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.75rem 0.95rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'rgba(96,165,250,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Network size={13} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>01. Ingress Edge &amp; Envoy</div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontFamily: 'monospace' }}>mTLS 1.3 &middot; Anycast CDN</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#22C55E', fontWeight: 700 }}>&lt;18ms P99</span>
              </div>

              {/* Connecting Waveform Line with SVG Data Pulse */}
              <div style={{ display: 'flex', justifyContent: 'center', height: '12px', alignItems: 'center' }}>
                <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                  <line x1="30" y1="0" x2="30" y2="12" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="30" cy="6" r="2" fill="#38BDF8">
                    <animate attributeName="cy" values="0;12" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Tier 2: Distributed Core Services */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.75rem 0.95rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'rgba(75,97,184,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Server size={13} color="#93C5FD" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>02. Distributed Event Mesh</div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontFamily: 'monospace' }}>Kafka Shards &middot; Stateless Pods</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#60A5FA', fontWeight: 700 }}>100% Isolated</span>
              </div>

              {/* Connecting Waveform Line */}
              <div style={{ display: 'flex', justifyContent: 'center', height: '12px', alignItems: 'center' }}>
                <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                  <line x1="30" y1="0" x2="30" y2="12" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="30" cy="6" r="2" fill="#38BDF8">
                    <animate attributeName="cy" values="0;12" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Tier 3: Immutable Data Layer */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.75rem 0.95rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Database size={13} color="#4ADE80" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>03. Immutable Data Ledger</div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontFamily: 'monospace' }}>Active-Active Multi-Region</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 700 }}>Zero-Loss</span>
              </div>
            </div>
          </div>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px', padding: '0.85rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>&lt;18ms</div>
                <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 600 }}>P99 Edge Latency</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '0.15rem' }}>HTTP/3 Ingress</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px', padding: '0.85rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#22C55E' }}>99.994%</div>
                <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 600 }}>Production SLA</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '0.15rem' }}>Multi-Region Live</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px', padding: '0.85rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>0 Drop</div>
                <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 600 }}>Blue/Green Deploy</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '0.15rem' }}>Automated Cutover</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px', padding: '0.85rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#60A5FA' }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 600 }}>Source Ownership</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '0.15rem' }}>Client Git Repo</div>
              </div>
            </div>
          )}

          {/* Bottom Telemetry Verification Bar */}
          <div style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>Enterprise SLA</span>
            </div>
            <a 
              href="/solutions/enterprise-software"
              style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              ARCH SPEC &rarr;
            </a>
          </div>
        </div>
      </div>
  );
}

// --- Interactive Engineering Workflow Runbook with Circuit Track ---
function EngineeringRunbook() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: '01',
      title: 'Discovery & Code Audit',
      tagline: 'We read the source before proposing architecture.',
      duration: 'Weeks 1-2',
      deliverables: [
        'Static analysis & debt map of current systems',
        'Data model & dependency vulnerability report',
        'Target architecture topology & migration plan'
      ],
      gate: 'Documented architectural agreement signed off by client tech lead.'
    },
    {
      id: '02',
      title: 'ADRs & System Design',
      tagline: 'Decisions recorded in writing, not hidden in pull requests.',
      duration: 'Weeks 2-4',
      deliverables: [
        'Architecture Decision Records (ADRs)',
        'Data schema & microservice interface contracts (OpenAPI/gRPC)',
        'Failure mode & disaster recovery runbook'
      ],
      gate: 'Contractual SLA model, threat model, and data boundary approval.'
    },
    {
      id: '03',
      title: 'Interface & Design Systems',
      tagline: 'Enterprise utility engineered with precision typography.',
      duration: 'Weeks 3-6',
      deliverables: [
        'Figma tokenized design system aligned with codebase',
        'WCAG 2.1 AA accessible component library',
        'Responsive viewport layout matrices (Mobile to 4K)'
      ],
      gate: 'Design system tokens merged into repository source control.'
    },
    {
      id: '04',
      title: 'Sprint Execution & CI/CD',
      tagline: 'Working software delivered every 10 business days.',
      duration: 'Iterative Sprints',
      deliverables: [
        'Two-week deployable sprint increments',
        'Automated CI/CD with ephemeral preview environments',
        'Unit, integration, and contract tests (85%+ coverage)'
      ],
      gate: 'Automated test suite passing on every pull request.'
    },
    {
      id: '05',
      title: 'Hardening & Chaos QA',
      tagline: 'We stress-test until the system proves it heals itself.',
      duration: 'Final Phase',
      deliverables: [
        '10x peak load & concurrency stress testing',
        'Simulated zone failover & network latency injection',
        'Penetration testing & third-party SOC2 compliance audit'
      ],
      gate: 'Clean automated failover verified under live test load.'
    },
    {
      id: '06',
      title: 'Handover & Production SLA',
      tagline: 'Full code ownership. No proprietary hooks or lock-in.',
      duration: 'Ongoing Support',
      deliverables: [
        'Complete repository handover with Terraform IaC',
        'Prometheus/Grafana operational telemetry dashboards',
        'Direct-to-engineer Tier 3 escalation SLA support'
      ],
      gate: 'Zero-downtime cutover and client team operational sign-off.'
    }
  ];

  const current = phases[activePhase];

  return (
    <div style={{ marginTop: '2.5rem' }}>
      {/* Horizontal Phase Stepper with Circuit Progress Track */}
      <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
        {/* Continuous Background Circuit Track */}
        <div 
          className="lifecycle-circuit-track"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '2%', 
            right: '2%', 
            height: '2px', 
            background: '#E2E8F0', 
            zIndex: 0,
            transform: 'translateY(-50%)'
          }}
        >
          {/* Active illuminated track portion */}
          <div 
            style={{ 
              height: '100%', 
              width: `${(activePhase / (phases.length - 1)) * 100}%`, 
              background: 'linear-gradient(90deg, #4B61B8 0%, #38BDF8 100%)', 
              transition: 'width 0.35s ease' 
            }} 
          />
        </div>

        <div className="lifecycle-stepper-grid">
          {phases.map((p, idx) => {
            const isActive = activePhase === idx;
            const isCompleted = activePhase > idx;

            return (
              <button
                key={p.id}
                className="lifecycle-stepper-item"
                onClick={() => setActivePhase(idx)}
                onMouseEnter={() => setActivePhase(idx)}
                style={{
                  background: isActive ? '#0F172A' : (isCompleted ? '#FFFFFF' : '#FFFFFF'),
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '2px solid #4B61B8' : (isCompleted ? '1px solid #93C5FD' : '1px solid #E2E8F0'),
                  borderRadius: '2px',
                  padding: '1rem 0.85rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  boxShadow: isActive ? '0 10px 25px -5px rgba(15,23,42,0.2)' : '0 2px 4px rgba(15,23,42,0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: isActive ? '#60A5FA' : (isCompleted ? '#4B61B8' : '#64748B'), letterSpacing: '0.08em' }}>
                    PHASE {p.id}
                  </span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '2px', background: isActive ? '#38BDF8' : (isCompleted ? '#22C55E' : '#CBD5E1') }} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.25, color: isActive ? '#FFFFFF' : '#0F172A' }}>
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep Phase Inspector Card with Offset Quality Gate */}
      <div 
        style={{ 
          background: '#FFFFFF', 
          borderRadius: '2px', 
          border: '1px solid #E2E8F0', 
          boxShadow: '0 12px 35px rgba(15,23,42,0.05)',
          padding: 'clamp(1.75rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ flex: 1 }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              Phase {current.id} Specifications &middot; {current.duration}
            </div>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {current.title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {current.tagline}
            </p>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.75rem' }}>
                Core Engineering Deliverables
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {current.deliverables.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                    <span style={{ width: '10px', height: '2px', background: '#4B61B8', display: 'inline-block', flexShrink: 0, marginTop: '10px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Phase Verification Gate (Offset Right Column) */}
        <div 
          style={{ 
            background: '#0F172A', 
            borderRadius: '12px', 
            padding: '2rem', 
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px -10px rgba(15,23,42,0.45)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '260px',
            position: 'relative'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA' }}>
                Quality Gate Criteria
              </span>
            </div>
            
            <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              &ldquo;{current.gate}&rdquo;
            </div>
          </div>

          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
            <span>Verified by Acriotech Principal</span>
            <span style={{ color: '#60A5FA', fontWeight: 600 }}>Formal Architecture Gate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Minimal, Concise FAQ Component (Unnumbered, Plain Language & No Buzzwords) ---
const faqs = [
  {
    q: "How quickly can we start, and how do you work?",
    a: "We usually start within one to two weeks after reviewing your requirements. We work in two-week cycles and share live demos regularly so you can test real progress."
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do, 100%. All source code, designs, and documentation are written directly in your company accounts and belong entirely to you."
  },
  {
    q: "Do you provide support after the software is launched?",
    a: "Yes. We offer ongoing maintenance, monitoring, and direct support from the same engineers who built your application."
  },
  {
    q: "Can you update our existing software without stopping daily operations?",
    a: "Yes. We make changes step-by-step in the background so your team and customers experience zero disruption."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              background: '#FFFFFF',
              borderRadius: '2px',
              border: isOpen ? '1px solid #4B61B8' : '1px solid #E2E8F0',
              boxShadow: isOpen ? '0 10px 25px -5px rgba(75, 97, 184, 0.08)' : '0 2px 8px -2px rgba(15, 23, 42, 0.03)',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                gap: '1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1.4 }}>
                {faq.q}
              </h3>
              <div
                style={{
                  color: isOpen ? '#4B61B8' : '#94A3B8',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  flexShrink: 0
                }}
              >
                <ChevronDown size={18} />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', borderTop: '1px solid #F1F5F9' }}>
                    <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.65, margin: '0.85rem 0 0 0' }}>
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// --- Main Page Component ---
export default function Home() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <main>
      <NavBar />

      {/* Hero Section */}
      <section 
        className="section-padding" 
        style={{ 
          minHeight: '86vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: 'clamp(100px, 15vh, 140px)', 
          borderBottom: '1px solid #E2E8F0', 
          background: '#FFFFFF' 
        }}
      >
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }}>
          <div className="hero-text-container">
            {/* Clean borderless uppercase tracking eyebrow */}
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4B61B8', marginBottom: '0.85rem' }}>
              ENTERPRISE ENGINEERING &middot; 99.99% PRODUCTION SLA
            </div>

            <h1 
              className="hero-title text-5xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight" 
              style={{ fontSize: 'clamp(2.8rem, 4.2vw, 64px)', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0F172A' }}
            >
              Enterprise software<br />
              <span style={{ color: '#475569', fontWeight: 600 }}>that outlasts the roadmap.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '580px', color: '#475569', lineHeight: 1.65 }}>
              We architect, build, and harden distributed software systems that survive personnel churn, scale spikes, and technical debt. Handcrafted by senior engineers since 2012.
            </p>

            <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '2rem', maxWidth: '580px', borderLeft: '3px solid #4B61B8', paddingLeft: '0.95rem', lineHeight: 1.5 }}>
              <strong style={{ color: '#0F172A' }}>Engagement Models:</strong> Dedicated Senior Pods &middot; Fixed-Scope Core Architecture &middot; Zero-Downtime System Modernization
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a 
                href="/contact-us" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.9rem 1.6rem', 
                  background: '#0F172A', 
                  color: '#FFFFFF', 
                  borderRadius: '2px', 
                  fontWeight: 600, 
                  fontSize: '0.95rem', 
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                Schedule Architecture Audit <ArrowRight size={16} />
              </a>
              <a 
                href="/work/featured-projects" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.9rem 1.6rem', 
                  background: '#FFFFFF', 
                  border: '1px solid #CBD5E1', 
                  color: '#0F172A', 
                  borderRadius: '2px', 
                  fontWeight: 600, 
                  fontSize: '0.95rem', 
                  textDecoration: 'none' 
                }}
              >
                Explore Production Systems &rarr;
              </a>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem', width: '100%' }}>
            <HeroArchitecturalCard />
          </div>
        </div>
      </section>

      {/* Full-Width Architectural Ledger Strip with Vertical Slate hairlines and Corner + Crosshairs */}
      <section 
        className="dark-section" 
        style={{ 
          padding: '3.5rem 0 3.75rem 0', background: '#0F172A', 
          color: '#FFFFFF', 
          position: 'relative', 
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}
      >
        {/* Subtle Background Telemetry Waveform across the strip */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 200" fill="none">
            <path d="M0,100 L200,100 L250,40 L300,160 L350,70 L400,120 L450,100 L700,100 L750,30 L800,170 L850,90 L900,100 L1200,100" stroke="#38BDF8" strokeWidth="2" fill="none" />
            <path d="M0,120 L150,120 L200,80 L250,140 L300,90 L350,120 L650,120 L700,70 L750,150 L800,110 L1200,120" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1rem' }}>
            VERIFIABLE RELIABILITY
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '850px', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Built for systems where downtime carries a direct balance-sheet cost.
          </h2>
          
          <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            We engineer high-concurrency systems modeled for resilience, verified under live load, and backed by contractual uptime SLAs.
          </p>

          {/* Verifiable Reliability Modular Bento Box Grid - Compact 2026 SaaS Grid */}
          <div className="bento-grid w-full" style={{ position: 'relative', zIndex: 1, gap: '1.25rem' }}>
            
            {/* Bento Cell 1 (Span 7): Flagship Platforms */}
            <div className="bento-cell bento-col-7" style={{ padding: '1.5rem 1.65rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '0.2rem 0.55rem', borderRadius: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#22C55E' }} />
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Production Verified
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#93C5FD', fontWeight: 700, fontFamily: 'monospace' }}>
                    99.994% Live SLA
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.4rem' }}>
                  80+ <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#93C5FD' }}>Platforms</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  Active Production Systems
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.55, maxWidth: '520px', margin: 0 }}>
                  High-throughput, event-driven architectures running under mission-critical enterprise workloads across finance, healthcare, and logistics.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                {['Go Microservices', 'Kafka Streams', 'Sharded PostgreSQL', 'Active-Active Failover'].map((pill, idx) => (
                  <span key={idx} style={{ padding: '0.2rem 0.55rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#CBD5E1', fontSize: '0.74rem', fontWeight: 600 }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Cell 2 (Span 5): 12+ Years Tenure */}
            <div className="bento-cell bento-col-5" style={{ padding: '1.5rem 1.65rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '0.2rem 0.55rem', borderRadius: '6px', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Tenure &amp; Stability
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.4rem' }}>
                  12+ <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#93C5FD' }}>Years</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  Continuous Delivery Since 2012
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.55, margin: 0 }}>
                  Founded on unyielding engineering rigor. Same core technical leadership, zero speculative pivots, and direct-to-engineer accountability.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem' }}>
                  <span style={{ color: '#94A3B8' }}>Staff Level:</span>
                  <span style={{ color: '#38BDF8', fontWeight: 700 }}>100% Senior Pods</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem' }}>
                  <span style={{ color: '#94A3B8' }}>Avg Tenure:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 700 }}>3+ Consecutive Years</span>
                </div>
              </div>
            </div>

            {/* Bento Cell 3 (Span 5): 40+ Dedicated Staff Engineers */}
            <div className="bento-cell bento-col-5" style={{ padding: '1.5rem 1.65rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.25)', padding: '0.2rem 0.55rem', borderRadius: '6px', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#C084FC', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Dedicated Engineering Staff
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.4rem' }}>
                  40+ <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#93C5FD' }}>Engineers</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  Principal &amp; Senior Pods
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.55, margin: 0 }}>
                  Embedded technical pods that commit directly into your repositories, attend your sprints, and own system outcomes end-to-end.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
                {['AWS Architect', 'Kubernetes CKA', 'GCP Professional', 'SOC 2 Audited'].map((cert, idx) => (
                  <span key={idx} style={{ padding: '0.15rem 0.45rem', borderRadius: '6px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', color: '#E9D5FF', fontSize: '0.72rem', fontWeight: 600 }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Cell 4 (Span 7): 100% Full IP Sovereignty */}
            <div className="bento-cell bento-col-7" style={{ padding: '1.5rem 1.65rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.25)', padding: '0.2rem 0.55rem', borderRadius: '6px', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Code Sovereignty
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.4rem' }}>
                  100% <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#4ADE80' }}>IP Handover</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  Zero Vendor Lock-In &amp; Clean Handover
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.55, maxWidth: '540px', margin: 0 }}>
                  Every line of code, Dockerfile, Terraform configuration, and architectural decision record is committed directly into your corporate repositories from sprint zero.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.6rem', marginTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0.75rem' }}>
                  <div style={{ color: '#60A5FA', fontSize: '0.78rem', fontWeight: 700 }}>Client Git Repos</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.7rem', marginTop: '0.1rem' }}>Direct branch ownership</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0.75rem' }}>
                  <div style={{ color: '#4ADE80', fontSize: '0.78rem', fontWeight: 700 }}>Terraform IaC</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.7rem', marginTop: '0.1rem' }}>Reproducible environments</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Matrix with subtle architectural SVG schematics and staggered layout */}
      <section id="services" className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', paddingTop: '6rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem', maxWidth: '780px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4B61B8', marginBottom: '0.75rem' }}>
              CAPABILITY MATRIX
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#0F172A', fontWeight: 800 }}>
              Engineering that survives <span style={{ color: '#4B61B8' }}>team transitions and scale spikes.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.65 }}>
              Every engagement delivers production code, infrastructure-as-code runbooks, and architectural decision records directly into your repositories.
            </p>
          </div>

          {/* 2-over-3 Multi-Column Grid with Interactive Dark-Navy Spotlight Transfer */}
          <div className="layout-grid-2-asym gap-6 w-full" style={{ marginBottom: "1.5rem" }}>
            {/* Card 01: Distributed Enterprise Platforms */}
            <div 
              onMouseEnter={() => setActiveCapability(0)}
              className="w-full min-w-0"
              style={{ 
                background: activeCapability === 0 ? '#0F172A' : '#FFFFFF', 
                borderRadius: '12px', 
                padding: '2.5rem', 
                color: activeCapability === 0 ? '#FFFFFF' : '#0F172A',
                border: activeCapability === 0 ? '1px solid #38BDF8' : '1px solid #E2E8F0',
                boxShadow: activeCapability === 0 ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: activeCapability === 0 ? 'translateY(-3px)' : 'none'
              }}
            >
              {/* Low-Opacity Architectural SVG Schematic */}
              <div style={{ position: 'absolute', top: 20, right: 28, width: '160px', height: '120px', opacity: activeCapability === 0 ? 0.28 : 0.08, pointerEvents: 'none' }} className="transition-opacity duration-300">
                <svg width="100%" height="100%" viewBox="0 0 180 140" fill="none" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
                  <circle cx="40" cy="40" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="140" cy="40" r="12" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="90" cy="100" r="14" stroke="#93C5FD" strokeWidth="1.5" />
                  <path d="M52 40 L128 40" stroke="#4B61B8" strokeWidth="1.5" />
                  <path d="M48 50 L80 90" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M132 50 L100 90" stroke="#4B61B8" strokeWidth="1.5" />
                  <circle cx="90" cy="40" r="3" fill="#60A5FA" />
                  <circle cx="90" cy="100" r="4" fill="#38BDF8" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: activeCapability === 0 ? 'rgba(56, 189, 248, 0.12)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Server size={22} color={activeCapability === 0 ? '#38BDF8' : '#4B61B8'} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: activeCapability === 0 ? '#38BDF8' : '#4B61B8', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  01
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: activeCapability === 0 ? '#FFFFFF' : '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                  Distributed Enterprise Platforms &amp; Microservices
                </h3>
                <p style={{ fontSize: '1rem', color: activeCapability === 0 ? '#CBD5E1' : '#475569', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: 'min(520px, calc(100% - 130px))' }}>
                  High-throughput, event-driven architectures designed with strict service boundaries, tenant-isolated RBAC, and zero-downtime database sharding.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                  {['Go / Node.js', 'Apache Kafka', 'PostgreSQL', 'Multi-Tenant RBAC'].map((t, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        padding: '0.35rem 0.75rem', 
                        background: activeCapability === 0 ? 'rgba(56, 189, 248, 0.12)' : '#F1F5F9', 
                        border: activeCapability === 0 ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #E2E8F0', 
                        borderRadius: '6px', 
                        fontSize: '0.8rem', 
                        color: activeCapability === 0 ? '#E2E8F0' : '#475569', 
                        fontWeight: 600 
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <a 
                  href="/solutions/enterprise-software" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: activeCapability === 0 ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
                >
                  Explore Enterprise Architecture Specs &rarr;
                </a>
              </div>
            </div>

            {/* Card 02: AI & Intelligent Automation */}
            <div 
              onMouseEnter={() => setActiveCapability(1)}
              className="w-full min-w-0"
              style={{ 
                background: activeCapability === 1 ? '#0F172A' : '#FFFFFF', 
                borderRadius: '12px', 
                padding: '2.5rem', 
                color: activeCapability === 1 ? '#FFFFFF' : '#0F172A',
                border: activeCapability === 1 ? '1px solid #38BDF8' : '1px solid #E2E8F0', 
                boxShadow: activeCapability === 1 ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: activeCapability === 1 ? 'translateY(-3px)' : 'none'
              }}
            >
              {/* Low-Opacity Architectural SVG (ML Pipeline DAG) */}
              <div style={{ position: 'absolute', top: 20, right: 28, width: '130px', height: '110px', opacity: activeCapability === 1 ? 0.28 : 0.08, pointerEvents: 'none' }} className="transition-opacity duration-300">
                <svg width="100%" height="100%" viewBox="0 0 130 110" fill="none" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
                  <rect x="10" y="10" width="30" height="24" rx="4" stroke="#4B61B8" strokeWidth="1.5" />
                  <rect x="70" y="10" width="40" height="24" rx="4" stroke="#2563EB" strokeWidth="1.5" />
                  <rect x="40" y="65" width="45" height="24" rx="4" stroke="#38BDF8" strokeWidth="1.5" />
                  <path d="M40 22 L70 22" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M25 34 L50 65" stroke="#475569" strokeWidth="1.5" />
                  <path d="M90 34 L75 65" stroke="#475569" strokeWidth="1.5" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: activeCapability === 1 ? 'rgba(56, 189, 248, 0.12)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Cpu size={22} color={activeCapability === 1 ? '#38BDF8' : '#4B61B8'} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: activeCapability === 1 ? '#38BDF8' : '#4B61B8', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  02
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: activeCapability === 1 ? '#FFFFFF' : '#0F172A', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  AI &amp; Intelligent Automation Pipelines
                </h3>
                <p style={{ fontSize: '0.95rem', color: activeCapability === 1 ? '#CBD5E1' : '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Production-grade ML pipelines deployed strictly inside your private cloud. Intelligent document understanding and automated workflows without third-party data leakage.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <a 
                  href="/solutions/ai-intelligent-automation" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: activeCapability === 1 ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  View AI System Specifications &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Bottom 3 Capability Columns */}
          <div className="layout-grid-3 gap-6 w-full">
            {/* Card 03: Cloud & SRE */}
            <div 
              onMouseEnter={() => setActiveCapability(2)}
              className="w-full min-w-0"
              style={{ 
                background: activeCapability === 2 ? '#0F172A' : '#FFFFFF', 
                borderRadius: '12px', 
                padding: '2rem', 
                color: activeCapability === 2 ? '#FFFFFF' : '#0F172A',
                border: activeCapability === 2 ? '1px solid #38BDF8' : '1px solid #E2E8F0', 
                boxShadow: activeCapability === 2 ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: activeCapability === 2 ? 'translateY(-3px)' : 'none'
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: activeCapability === 2 ? 'rgba(56, 189, 248, 0.12)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Cloud size={20} color={activeCapability === 2 ? '#38BDF8' : '#0F172A'} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: activeCapability === 2 ? '#38BDF8' : '#4B61B8', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  03
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: activeCapability === 2 ? '#FFFFFF' : '#0F172A', marginBottom: '0.5rem' }}>
                  Cloud Infrastructure &amp; SRE
                </h3>
                <p style={{ fontSize: '0.92rem', color: activeCapability === 2 ? '#CBD5E1' : '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Terraform-codified infrastructure with automated multi-region active-active failover and continuous telemetry alerting.
                </p>
              </div>
              <a href="/solutions/cloud-infrastructure" style={{ fontSize: '0.88rem', fontWeight: 700, color: activeCapability === 2 ? '#38BDF8' : '#4B61B8', textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Cloud Architecture &rarr;
              </a>
            </div>

            {/* Card 04: Digital Products */}
            <div 
              onMouseEnter={() => setActiveCapability(3)}
              className="w-full min-w-0"
              style={{ 
                background: activeCapability === 3 ? '#0F172A' : '#FFFFFF', 
                borderRadius: '12px', 
                padding: '2rem', 
                color: activeCapability === 3 ? '#FFFFFF' : '#0F172A',
                border: activeCapability === 3 ? '1px solid #38BDF8' : '1px solid #E2E8F0', 
                boxShadow: activeCapability === 3 ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: activeCapability === 3 ? 'translateY(-3px)' : 'none'
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: activeCapability === 3 ? 'rgba(56, 189, 248, 0.12)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Layers size={20} color={activeCapability === 3 ? '#38BDF8' : '#4B61B8'} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: activeCapability === 3 ? '#38BDF8' : '#4B61B8', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  04
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: activeCapability === 3 ? '#FFFFFF' : '#0F172A', marginBottom: '0.5rem' }}>
                  Digital Products &amp; UI Systems
                </h3>
                <p style={{ fontSize: '0.92rem', color: activeCapability === 3 ? '#CBD5E1' : '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  High-performance web and mobile platforms with offline-first synchronization, sub-second Time to Interactive, and WCAG accessibility.
                </p>
              </div>
              <a href="/solutions/custom-software-development" style={{ fontSize: '0.88rem', fontWeight: 700, color: activeCapability === 3 ? '#38BDF8' : '#4B61B8', textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Product Engineering &rarr;
              </a>
            </div>

            {/* Card 05: Enterprise Integration */}
            <div 
              onMouseEnter={() => setActiveCapability(4)}
              className="w-full min-w-0"
              style={{ 
                background: activeCapability === 4 ? '#0F172A' : '#FFFFFF', 
                borderRadius: '12px', 
                padding: '2rem', 
                color: activeCapability === 4 ? '#FFFFFF' : '#0F172A',
                border: activeCapability === 4 ? '1px solid #38BDF8' : '1px solid #E2E8F0', 
                boxShadow: activeCapability === 4 ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: activeCapability === 4 ? 'translateY(-3px)' : 'none'
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: activeCapability === 4 ? 'rgba(56, 189, 248, 0.12)' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Network size={20} color={activeCapability === 4 ? '#38BDF8' : '#0F172A'} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: activeCapability === 4 ? '#38BDF8' : '#4B61B8', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  05
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: activeCapability === 4 ? '#FFFFFF' : '#0F172A', marginBottom: '0.5rem' }}>
                  Enterprise Integrations &amp; APIs
                </h3>
                <p style={{ fontSize: '0.92rem', color: activeCapability === 4 ? '#CBD5E1' : '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  High-volume bi-directional integrations across SAP, Oracle, and Salesforce with circuit breakers and idempotent retry logic.
                </p>
              </div>
              <a href="/solutions/business-process-automation" style={{ fontSize: '0.88rem', fontWeight: 700, color: activeCapability === 4 ? '#38BDF8' : '#4B61B8', textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                Integration Systems &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Production Case Studies */}
      <section id="portfolio" className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                PRODUCTION CASE STUDIES
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                Architecture Under <span style={{ color: '#4B61B8' }}>Production Load.</span>
              </h2>
            </div>
            <a 
              href="/work/featured-projects" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#0F172A', fontSize: '0.95rem', textDecoration: 'none' }}
            >
              Browse All Case Studies <ArrowRight size={16} />
            </a>
          </div>

          {/* Case Studies 2-Column Desktop Grid */}
          <div className="layout-grid-2 gap-8 w-full items-start">
            {/* Case Study 1 */}
            <div className="w-full min-w-0 flex flex-col">
              <div 
                style={{ 
                  background: '#0F172A', 
                  borderRadius: '12px', 
                  padding: '2rem', 
                  color: '#FFFFFF', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  marginBottom: '1.25rem',
                  boxShadow: '0 16px 36px -10px rgba(15,23,42,0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#60A5FA' }}>
                    Multi-Region Cloud
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                    FinTech &amp; SaaS
                  </span>
                </div>

                <div className="layout-grid-2 gap-4">
                  {/* Metric 1 */}
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>99.99%</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.4rem' }}>Zero-Downtime Migration</div>
                  </div>

                  {/* Metric 2 */}
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38BDF8', lineHeight: 1 }}>18ms</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.4rem' }}>P99 Latency (From 480ms)</div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {['Kubernetes', 'Terraform', 'PostgreSQL Shards', 'Kafka Mesh'].map((tag, j) => (
                    <span key={j} style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                  Zero-Downtime Multi-Region Cloud Migration
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Migrated a $2.4B annual volume FinTech platform to active-active multi-region clusters with zero transaction loss.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="w-full min-w-0 flex flex-col">
              <div 
                style={{ 
                  background: '#0F172A', 
                  borderRadius: '12px', 
                  padding: '2rem', 
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.08)',
                  marginBottom: '1.25rem',
                  boxShadow: '0 16px 36px -10px rgba(15,23,42,0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#60A5FA' }}>
                    Security Mesh
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                    Healthcare &amp; SOC 2
                  </span>
                </div>

                <div className="layout-grid-2 gap-4">
                  {/* Metric 1 */}
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>0 Breaches</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.4rem' }}>Zero Vulnerabilities</div>
                  </div>

                  {/* Metric 2 */}
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38BDF8', lineHeight: 1 }}>100% Pass</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.4rem' }}>SOC 2 Type II Audit</div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {['Rust / eBPF', 'Zero-Trust IAM', 'HIPAA / SOC 2'].map((tag, j) => (
                    <span key={j} style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                  Zero-Trust Mesh &amp; Compliance Engine
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Decoupled identity from perimeter networks with mTLS on all RPCs, achieving 100% SOC 2 Type II audit compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Workflow Runbook */}
      <section id="methodology" className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                DELIVERY METHODOLOGY
              </div>
              <h2 className="workflow-title" style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                The Engineering <span style={{ color: '#4B61B8' }}>Runbook.</span>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
              Six distinct phases. Explicit ownership at each stage. Nothing advances to the next gate until the current one can be objectively defended.
            </p>
          </div>

          <EngineeringRunbook />
        </div>
      </section>

      {/* Pre-Footer Call to Action: Overlapping Architectural Block with Blueprint Grid */}
      <section 
        className="dark-section" 
        style={{ 
          position: 'relative', 
          padding: '4rem 0 5rem 0', 
          overflow: 'hidden', 
          background: '#0F172A', 
          borderTop: '1px solid rgba(255,255,255,0.08)' 
        }}
      >
        {/* Subtle Radial Blueprint Grid Backdrop */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundImage: `radial-gradient(rgba(96, 165, 250, 0.12) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
            opacity: 0.6
          }} 
        />

        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div 
            style={{ 
              maxWidth: '920px', 
              margin: '0 auto', 
              background: 'rgba(15,23,42,0.85)', 
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '2px', 
              padding: 'clamp(2rem, 4vw, 3.25rem)',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
          >

            {/* Clean borderless uppercase eyebrow */}
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              DIRECT-TO-ENGINEER SCOPING &middot; ZERO SALES BUFFERS
            </div>

            <h2 
              className="cta-title" 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', 
                marginBottom: '1.5rem', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                letterSpacing: '-0.03em', 
                color: '#FFFFFF' 
              }}
            >
              Let's Build Software<br/>
              <span style={{ color: '#60A5FA' }}>
                That Stands The Test of Time.
              </span>
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Speak directly with a senior systems architect about your technical constraints, data volumes, and delivery timeline. NDA standard upon request.
            </p>
            
            <div className="cta-buttons-flex" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
               <a 
                 href="/contact-us" 
                 style={{ 
                   padding: '1rem 2.25rem', 
                   fontSize: '1rem', 
                   fontWeight: 700, 
                   color: '#0F172A', 
                   background: '#FFFFFF', 
                   border: 'none', 
                   borderRadius: '2px', 
                   cursor: 'pointer', 
                   boxShadow: '0 4px 14px 0 rgba(0,0,0,0.2)', 
                   transition: 'all 0.2s ease', 
                   textDecoration: 'none' 
                 }}
               >
                 Start Architectural Scoping
               </a>
               
               <a 
                 href="/work/featured-projects" 
                 style={{ 
                   padding: '1rem 2.25rem', 
                   fontSize: '1rem', 
                   fontWeight: 700, 
                   color: '#FFFFFF', 
                   background: 'transparent', 
                   border: '1px solid rgba(255,255,255,0.3)', 
                   borderRadius: '2px', 
                   cursor: 'pointer', 
                   transition: 'all 0.2s ease', 
                   textDecoration: 'none' 
                 }}
               >
                 Explore Production Case Studies
               </a>
            </div>

            <div style={{ marginTop: '2.5rem', fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span>Average response within 2 hours during business hours (IST)</span>
              <span>&middot;</span>
              <span>Bhavnagar, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean, Concise, Unnumbered & at the End of the Page */}
      <section style={{ padding: '5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.65rem' }}>
              QUESTIONS &amp; ANSWERS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
              Frequently Asked <span style={{ color: '#4B61B8' }}>Questions</span>
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
