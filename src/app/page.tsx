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
  Sparkles,
  FileCheck2,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// --- Clean Architectural Proof Card for Hero ---
function HeroArchitecturalCard() {
  const stats = [
    { num: "12+ Years", label: "In Business", detail: "Continuous delivery since 2012" },
    { num: "80+", label: "Systems Live", detail: "Active in production" },
    { num: "99.99%", label: "Uptime SLA", detail: "Multi-region resilience" },
    { num: "40+", label: "Partners", detail: "Long-term relationships" },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
      <div 
        style={{ 
          position: 'absolute', 
          inset: '-1px', 
          borderRadius: '16px', 
          background: 'linear-gradient(135deg, rgba(75,97,184,0.25) 0%, rgba(15,23,42,0.08) 100%)', 
          filter: 'blur(12px)', 
          zIndex: 0 
        }} 
      />
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          background: '#0F172A', 
          borderRadius: '16px', 
          padding: '2rem', 
          border: '1px solid rgba(255,255,255,0.08)', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
        }}
      >
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1.5rem' }}>
          Verified Delivery Record
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60A5FA', marginTop: '0.4rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.2rem' }}>{s.detail}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
          <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Enterprise-grade delivery since 2012</span>
        </div>
      </div>
    </div>
  );
}

// --- Interactive Engineering Workflow Runbook ---
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
      {/* Horizontal Phase Stepper */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '0.75rem', 
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}
      >
        {phases.map((p, idx) => {
          const isActive = activePhase === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhase(idx)}
              style={{
                background: isActive ? '#0F172A' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#475569',
                border: isActive ? '1px solid #0F172A' : '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '1rem 0.85rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative',
                boxShadow: isActive ? '0 10px 25px -5px rgba(15,23,42,0.15)' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: isActive ? '#60A5FA' : '#4B61B8', letterSpacing: '0.08em' }}>
                  PHASE {p.id}
                </span>
                <span style={{ fontSize: '0.65rem', color: isActive ? '#94A3B8' : '#94A3B8', fontFamily: 'monospace' }}>
                  {p.duration}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.25, color: isActive ? '#FFFFFF' : '#0F172A' }}>
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Phase Inspector Card */}
      <div 
        style={{ 
          background: '#FFFFFF', 
          borderRadius: '18px', 
          border: '1px solid #E2E8F0', 
          boxShadow: '0 8px 30px rgba(15,23,42,0.04)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
            Phase {current.id} Specifications &middot; {current.duration}
          </div>
          <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            {current.title}
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            {current.tagline}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.75rem' }}>
              Core Engineering Deliverables
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {current.deliverables.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                    <CheckCircle2 size={13} color="#4B61B8" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Verification Gate (Right Column) */}
        <div 
          style={{ 
            background: '#0F172A', 
            borderRadius: '16px', 
            padding: '2rem', 
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '260px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1rem' }}>
              Quality Gate Criteria
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              &ldquo;{current.gate}&rdquo;
            </div>
          </div>

          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
            <span>Verified by Acriotech Principal</span>
            <span style={{ color: '#60A5FA', fontWeight: 700 }}>Mandatory Gate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Categorized FAQ ---
const faqData = [
  { 
    cat: 'architecture',
    q: "What is your typical project timeline and delivery rhythm?", 
    a: "Initial discovery and architecture design takes 2-4 weeks. Full deployment of MVP or production release typically ranges from 3-6 months. We ship working software in 2-week sprint increments with continuous staging previews.",
    href: "/solutions/custom-software-development", 
    label: "Custom software development methodology" 
  },
  { 
    cat: 'architecture',
    q: "Can you modernize a legacy system without interrupting active business?", 
    a: "Yes. We apply the Strangler Fig architecture pattern, decoupling functional slices into microservices behind an API gateway. Migrations are tested with dual-write mirrors, ensuring zero production downtime.",
    href: "/solutions/legacy-system-modernization", 
    label: "Legacy system modernization" 
  },
  { 
    cat: 'architecture',
    q: "What backend and infrastructure technologies do you specialize in?", 
    a: "Our core stacks include Go, Node.js, Python, Rust, and Next.js. On infrastructure, we specialize in Kubernetes, Terraform, AWS, GCP, and Azure, with event backbones on Kafka or RabbitMQ.",
    href: "/solutions/enterprise-software", 
    label: "Enterprise software architecture" 
  },
  { 
    cat: 'security',
    q: "How do you handle security, data privacy, and regulatory compliance?", 
    a: "Security is baked into the data model and network layer using Zero-Trust principles (mTLS, RBAC, least privilege). We architect systems ready for SOC2 Type II, HIPAA, GDPR, and ISO 27001 compliance from day one.",
    href: "/solutions/enterprise-software", 
    label: "Security & compliance frameworks" 
  },
  { 
    cat: 'security',
    q: "Do we retain 100% intellectual property and source code ownership?", 
    a: "Completely. All source code, Terraform configurations, Docker manifests, documentation, and database schemas are authored directly in your repositories with zero proprietary vendor lock-in.",
    href: "/about-us", 
    label: "Our engineering ownership model" 
  },
  { 
    cat: 'engagement',
    q: "How do you structure engagements and pricing?", 
    a: "We offer two models: Dedicated Senior Engineering Pods for continuous product velocity, and Fixed-Scope Milestone Engagements for well-defined architectural builds. No surprise overages.",
    href: "/contact-us", 
    label: "Engagement models & scoping" 
  },
  { 
    cat: 'engagement',
    q: "Do you provide ongoing production support after deployment?", 
    a: "Yes. We offer contractual 99.99% SLA support, 24/7 automated telemetry monitoring, and on-call escalation handled by the actual senior engineers who architected your codebase.",
    href: "/solutions/cloud-infrastructure", 
    label: "Cloud & SLA support services" 
  },
  { 
    cat: 'architecture',
    q: "Can you build private AI pipelines that don't leak proprietary company data?", 
    a: "Absolutely. We build localized, sovereign AI models and inference pipelines deployed strictly inside your private VPC. Data never leaves your boundary, ensuring full IP and compliance isolation.",
    href: "/solutions/ai-intelligent-automation", 
    label: "AI & intelligent automation" 
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<'all' | 'architecture' | 'security' | 'engagement'>('all');

  const filteredFaqs = selectedCat === 'all' 
    ? faqData 
    : faqData.filter(f => f.cat === selectedCat);

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {/* Category Filter Buttons - Rounded-lg shape system matching cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'architecture', label: 'Architecture & Tech' },
          { id: 'security', label: 'Security & IP Ownership' },
          { id: 'engagement', label: 'Engagement & SLAs' },
        ].map(c => (
          <button
            key={c.id}
            onClick={() => {
              setSelectedCat(c.id as any);
              setOpenIndex(null);
            }}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 600,
              border: selectedCat === c.id ? '1px solid #0F172A' : '1px solid #E2E8F0',
              background: selectedCat === c.id ? '#0F172A' : '#FFFFFF',
              color: selectedCat === c.id ? '#FFFFFF' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '12px', 
                border: isOpen ? '1px solid #4B61B8' : '1px solid rgba(15,23,42,0.08)', 
                boxShadow: isOpen ? '0 10px 25px -5px rgba(75,97,184,0.08)' : '0 2px 8px rgba(15,23,42,0.02)', 
                overflow: 'hidden',
                transition: 'all 0.25s ease'
              }}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{ 
                  width: '100%', 
                  padding: '1.4rem 1.75rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'transparent', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.08rem', fontWeight: 600, color: '#0F172A', margin: 0, lineHeight: 1.4 }}>
                  {faq.q}
                </h3>
                <div style={{ 
                  color: isOpen ? '#4B61B8' : '#94A3B8', 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: 'transform 0.25s ease',
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div style={{ padding: '0 1.75rem 1.6rem 1.75rem', borderTop: '1px solid #F1F5F9' }}>
                      <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, margin: '1rem 0 0 0' }}>{faq.a}</p>
                      <a 
                        href={faq.href} 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.4rem', 
                          marginTop: '1rem', 
                          color: '#4B61B8', 
                          fontWeight: 700, 
                          fontSize: '0.88rem', 
                          textDecoration: 'none' 
                        }}
                      >
                        {faq.label} &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function Home() {
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
                  borderRadius: '8px', 
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
                  borderRadius: '8px', 
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

      {/* Redesigned Dark Stats Banner with Overlapping 4-Box Row */}
      <section 
        className="dark-section" 
        style={{ 
          padding: '5rem 0 7rem 0', 
          background: '#0F172A', 
          color: '#FFFFFF', 
          position: 'relative', 
          overflow: 'visible',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1rem' }}>
            VERIFIABLE RELIABILITY
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', maxWidth: '850px', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Built for systems where downtime carries a direct balance-sheet cost.
          </h2>
          
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '780px', lineHeight: 1.7, margin: '0 0 4rem 0' }}>
            We engineer platforms where failure is not an acceptable operational scenario. Our architectures are modeled for resilience, verified under live load, and backed by contractual uptime SLAs.
          </p>

          {/* Overlapping 4-Card Horizontal Row (-mb-24 overlap) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '-6rem', position: 'relative', zIndex: 20 }}>
            {[
              { 
                num: "12+ Years", 
                title: "Continuous Delivery", 
                detail: "Continuous engineering since 2012. Same core team, zero pivots, unbroken standard." 
              },
              { 
                num: "80+", 
                title: "Systems in Production", 
                detail: "High-concurrency platforms actively deployed across banking, logistics, and healthcare." 
              },
              { 
                num: "99.99%", 
                title: "Contractual SLA", 
                detail: "Multi-region active-active architectures with automated failover verified under load." 
              },
              { 
                num: "40+", 
                title: "Active Partnerships", 
                detail: "Average client engagement of 3+ years with direct-to-engineer communication." 
              }
            ].map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  background: '#0F172A', 
                  border: '1px solid rgba(51, 65, 85, 0.8)', 
                  borderRadius: '12px', 
                  padding: '1.75rem', 
                  boxShadow: '0 20px 30px -5px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.6rem' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#60A5FA', fontWeight: 700, marginBottom: '0.45rem' }}>
                  {stat.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.55 }}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Matrix with pt-32 (8rem) offset for overlapping cards */}
      <section id="services" className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', maxWidth: '780px' }}>
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

          {/* Decluttered Capabilities Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Flagship Card: Distributed Enterprise Platforms */}
            <div 
              style={{ 
                background: '#0F172A', 
                borderRadius: '16px', 
                padding: '2.5rem', 
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px -15px rgba(15,23,42,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                  Distributed Enterprise Platforms &amp; Microservices
                </h3>
                <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  High-throughput, event-driven architectures designed with strict service boundaries, tenant-isolated RBAC, and zero-downtime database sharding.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                  {['Go / Node.js', 'Apache Kafka', 'PostgreSQL'].map((t, idx) => (
                    <span key={idx} style={{ padding: '0.35rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.8rem', color: '#E2E8F0', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a 
                  href="/solutions/enterprise-software" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
                >
                  Explore Enterprise Architecture Specs &rarr;
                </a>
              </div>
            </div>

            {/* Discipline 2: AI & Intelligent Automation */}
            <div 
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '16px', 
                padding: '2.5rem', 
                border: '1px solid #E2E8F0', 
                boxShadow: '0 8px 30px rgba(15,23,42,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Cpu size={22} color="#4B61B8" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  AI &amp; Intelligent Automation Pipelines
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Production-grade ML pipelines deployed strictly inside your private cloud. Intelligent document understanding, predictive modeling, and automated workflows without third-party data leakage.
                </p>
              </div>

              <a 
                href="/solutions/ai-intelligent-automation" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                View AI System Specifications &rarr;
              </a>
            </div>
          </div>

          {/* Bottom 3 Capability Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {/* Discipline 3: Cloud & SRE */}
            <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '2rem', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Cloud size={20} color="#0F172A" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  Cloud Infrastructure &amp; SRE
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Terraform-codified infrastructure with automated multi-region active-active failover and continuous telemetry alerting.
                </p>
              </div>
              <a href="/solutions/cloud-infrastructure" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B61B8', textDecoration: 'none' }}>
                Cloud Architecture &rarr;
              </a>
            </div>

            {/* Discipline 4: Mission-Critical Web & Mobile */}
            <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '2rem', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Layers size={20} color="#0F172A" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  Digital Products &amp; UI Systems
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  High-performance web and mobile platforms with offline-first synchronization, sub-second Time to Interactive, and WCAG accessibility.
                </p>
              </div>
              <a href="/solutions/custom-software-development" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B61B8', textDecoration: 'none' }}>
                Product Engineering &rarr;
              </a>
            </div>

            {/* Discipline 5: API & Enterprise Integration */}
            <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '2rem', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Network size={20} color="#0F172A" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  Enterprise Integrations &amp; APIs
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  High-volume bi-directional integrations across SAP, Oracle, and Salesforce with circuit breakers and idempotent retry logic.
                </p>
              </div>
              <a href="/solutions/business-process-automation" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B61B8', textDecoration: 'none' }}>
                Integration Systems &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Case Studies */}
      <section id="portfolio" className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                TECHNICAL CASE FILES
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

          {/* 2 Clean Technical Case Studies */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '2.5rem' }}>
            {/* Case Study 1 */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div 
                style={{ 
                  background: '#0F172A', 
                  borderRadius: '16px', 
                  padding: '2.25rem', 
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.08)',
                  marginBottom: '1.25rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA' }}>
                    CASE FILE 01 &middot; MULTI-REGION CLOUD
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'monospace' }}>
                    FINTECH / SAAS
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>99.99%</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.35rem' }}>Zero-Downtime Migration</div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>18ms</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.35rem' }}>P99 Latency (From 480ms)</div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {['Kubernetes', 'Terraform', 'PostgreSQL'].map((tag, j) => (
                    <span key={j} style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Zero-Downtime Multi-Region Cloud
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  A high-volume financial SaaS platform migrated to multi-region active-active clusters with zero transaction drop during peak load.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div 
                style={{ 
                  background: '#0F172A', 
                  borderRadius: '16px', 
                  padding: '2.25rem', 
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.08)',
                  marginBottom: '1.25rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA' }}>
                    CASE FILE 02 &middot; SECURITY MESH
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'monospace' }}>
                    HEALTHCARE &middot; SOC2
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>0 Breaches</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.35rem' }}>Zero Security Vulnerabilities</div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>100% Pass</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.35rem' }}>SOC2 Type II First-Time Audit</div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {['Rust / eBPF', 'Zero-Trust IAM', 'HIPAA / SOC2'].map((tag, j) => (
                    <span key={j} style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Zero-Trust Mesh &amp; Compliance Engine
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  A healthcare platform decoupled identity from the network boundary, enforcing mTLS on all RPCs and generating cryptographic compliance evidence.
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

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              DUE DILIGENCE &middot; FAQ
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
              The Questions Serious <span style={{ color: '#4B61B8' }}>Engineering Leaders Ask.</span>
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* Final Call to Action */}
      <section 
        className="dark-section" 
        style={{ 
          position: 'relative', 
          padding: 'calc(var(--spacing-section) * 1.5) 0', 
          overflow: 'hidden', 
          background: '#0F172A', 
          borderTop: '1px solid rgba(255,255,255,0.06)' 
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '820px' }}>
            
            {/* Clean borderless uppercase eyebrow */}
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              DIRECT-TO-ENGINEER SCOPING &middot; ZERO SALES BUFFERS
            </div>

            <h2 
              className="cta-title" 
              style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', 
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

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '640px' }}>
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
                   borderRadius: '8px', 
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
                   borderRadius: '8px', 
                   cursor: 'pointer', 
                   transition: 'all 0.2s ease', 
                   textDecoration: 'none' 
                 }}
               >
                 Explore Production Case Studies
               </a>
            </div>

            <div style={{ marginTop: '2.5rem', fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>Average response within 2 hours during business hours (IST)</span>
              <span>&middot;</span>
              <span>Bhavnagar, India</span>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
