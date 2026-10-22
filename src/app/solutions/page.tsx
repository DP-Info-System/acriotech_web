"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Server, Code, Cpu, Cloud, LineChart, Briefcase } from "lucide-react";

const solutions = [
  {
    title: 'Enterprise Software Engineering',
    slug: 'enterprise-software',
    desc: 'Distributed systems built for scale — microservices, event-driven architecture, and sharded databases designed for high transaction volumes and zero-downtime deployments.',
    icon: Server,
    tag: 'Microservices · Kafka · PostgreSQL',
    industries: ['Financial Services', 'Healthcare', 'Logistics'],
    outcomes: 'Architecture baseline, role-based security, and production readiness'
  },
  {
    title: 'AI & Intelligent Automation',
    slug: 'ai-intelligent-automation',
    desc: 'Narrow, production-ready AI — OCR document pipelines, predictive forecasting engines, and anomaly detection systems trained on your proprietary data.',
    icon: Cpu,
    tag: 'TensorFlow · PyTorch · Airflow',
    industries: ['Manufacturing', 'Insurance', 'Retail'],
    outcomes: 'Custom ML models, intelligent document processing, and workflow automation'
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    desc: 'Replace email approval chains with a centralized platform that enforces compliance, tracks every decision, and integrates with your existing stack.',
    icon: Briefcase,
    tag: 'React · GraphQL · Lambda',
    industries: ['Legal', 'Finance', 'Healthcare'],
    outcomes: 'Traceable approvals, audit logs, and measurable operational efficiency'
  },
  {
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Decouple customer-facing frontends from creaking legacy backends. API-first architecture and incremental migration — no big-bang rewrites.',
    icon: Cloud,
    tag: 'GraphQL · Next.js · Kubernetes',
    industries: ['Retail', 'Manufacturing', 'Government'],
    outcomes: 'Reversible migration with independent release paths'
  },
  {
    title: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    desc: 'Terraform-defined, Kubernetes-orchestrated infrastructure fully reproducible from source control. Reduce configuration drift and make cost ownership visible.',
    icon: Shield,
    tag: 'Terraform · K8s · AWS · Azure',
    industries: ['SaaS', 'E-Commerce', 'Media'],
    outcomes: 'Reproducible infrastructure, multi-region failover, and operational visibility'
  },
  {
    title: 'Legacy System Modernization',
    slug: 'legacy-system-modernization',
    desc: 'Extract functionality module by module using the Strangler Fig pattern. Preserve business continuity, eliminate security debt, and modernize without a full rewrite.',
    icon: Code,
    tag: 'Go · Kong · PostgreSQL',
    industries: ['Government', 'Banking', 'Insurance'],
    outcomes: 'Controlled migration with business continuity preserved'
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    desc: 'Automated ETL pipelines that consolidate data from every SaaS tool into a single warehouse. Real-time dashboards and queryable data marts — no more manual exports.',
    icon: LineChart,
    tag: 'Snowflake · dbt · Airflow',
    industries: ['E-Commerce', 'SaaS', 'Healthcare'],
    outcomes: 'Governed data models, self-healing pipelines, and trusted reporting'
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    desc: 'Full-stack engineering pods that own the complete product lifecycle — from discovery and architecture through build, deployment, and handover with full IP ownership.',
    icon: Zap,
    tag: 'Next.js · Go · React Native',
    industries: ['Startups', 'Enterprises', 'SMBs'],
    outcomes: 'Working software, clean documentation, and full source code handover'
  }
];

const differentiators = [
  { title: 'Senior Delivery Ownership', desc: 'Experienced engineers stay close to architecture, implementation, and production readiness throughout the engagement.' },
  { title: 'Architecture-First Delivery', desc: 'We design the system before we write a line of code. Rigorous architecture reviews are included in every engagement.' },
  { title: 'Full IP & Code Ownership', desc: 'Complete source code, documentation, and infrastructure definitions are delivered directly into your repositories.' },
  { title: 'No Vendor Lock-In', desc: 'We build on open standards and cloud-agnostic patterns. Switching providers or hosting environments never requires a rewrite.' },
  { title: 'Embedded Engineering Pods', desc: 'Seamless collaboration within your existing communication channels, repositories, and agile sprint workflows.' },
  { title: 'Built for Audit & Compliance', desc: 'Every system ships with complete documentation, runbooks, and compliance-ready audit trails from day one.' }
];

const operatingStats = [
  { value: '80+', label: 'Production Systems', sub: 'Deployed and actively maintained' },
  { value: '12+', label: 'Years in Business', sub: 'Continuous delivery since 2012' },
  { value: '99.99%', label: 'Uptime SLA', sub: 'Multi-region enterprise reliability' },
  { value: '40+', label: 'Active Partnerships', sub: 'Average client engagement 3+ years' }
];

const industries = [
  'Financial Services', 'Healthcare & Life Sciences', 'Manufacturing', 'Logistics & Supply Chain',
  'Retail & E-Commerce', 'Government & Public Sector', 'Insurance', 'SaaS & Technology'
];

export default function SolutionsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                Engineering Partner &middot; Built for Production
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.08 }}>
                Software that carries the <span style={{ color: '#4B61B8' }}>weight of the business.</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2rem' }}>
                We build the platforms, cloud infrastructure, and data systems that keep complex operations moving &mdash; with measurable delivery outcomes and an accountable engineering team.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#capabilities" style={{ padding: '0.9rem 1.8rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Capabilities <ArrowRight size={16} />
                </a>
                <a href="/contact-us" style={{ padding: '0.9rem 1.8rem', background: '#FFFFFF', color: '#0F172A', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid #CBD5E1' }}>
                  Talk to an Engineer
                </a>
              </div>
            </div>

            {/* Operating Record List */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2.5rem', border: '1px solid #1E293B', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em' }}>OPERATING RECORD</span>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>DELIVERY PRINCIPLES</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { num: '01', title: 'Architecture first', desc: 'System design, boundary isolation, and failure modeling precede code delivery.' },
                  { num: '02', title: 'Senior delivery teams', desc: 'Direct engagement with principal engineers throughout the entire lifecycle.' },
                  { num: '03', title: 'Production ownership', desc: 'Tested against real latency spikes, failovers, and strict compliance gates.' },
                  { num: '04', title: 'Measured progress', desc: 'Weekly releases, verifiable milestones, and 100% full IP code ownership.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#60A5FA', flexShrink: 0, marginTop: '0.1rem' }}>{item.num}</span>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Map Section ─────────────────────────────────────── */}
      <section id="capabilities" style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              CAPABILITY MAP
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Eight disciplines. <span style={{ color: '#4B61B8' }}>One accountable delivery model.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              Engage the specific discipline your roadmap requires, or bring several together under one architecture, delivery plan, and operating standard.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))', gap: '2rem' }}>
            {solutions.map((sol, idx) => (
              <a
                href={`/solutions/${sol.slug}`}
                key={sol.slug}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '2.25rem',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#4B61B8';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(75, 97, 184, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.03)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8' }}>
                      0{idx + 1}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#4B61B8', fontWeight: 600 }}>
                      {sol.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {sol.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                    {sol.outcomes}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 700, color: '#4B61B8' }}>
                    Explore capability &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Enterprise Leaders Choose Us (Sticky Left / 2-Column Right Layout) ── */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '7rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                DIFFERENTIATORS
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Why Enterprise Leaders <br /><span style={{ color: '#4B61B8' }}>Choose Acriotech.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                We earn trust through clear architecture, direct engineering ownership, and systems that can be operated seamlessly long after handover.
              </p>
              <a href="/about-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                Read Our Operating Runbook &rarr;
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {differentiators.map((d, i) => (
                <div key={i} style={{ padding: '1.75rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(15, 23, 42, 0.02)' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 700, color: '#4B61B8', marginBottom: '0.75rem' }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{d.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────── */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                INDUSTRY EXPERTISE
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                Domain knowledge across <span style={{ color: '#60A5FA' }}>8 key verticals.</span>
              </h2>
            </div>
            <a href="/contact-us" style={{ padding: '0.85rem 1.8rem', background: 'transparent', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Discuss Your Industry <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
            {industries.map((ind, i) => (
              <div key={i} style={{ padding: '1.5rem 1.75rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#60A5FA', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#F1F5F9', fontWeight: 600 }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Models ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              HOW WE ENGAGE
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
              Three engagement models. <span style={{ color: '#4B61B8' }}>One standard of quality.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
              Tailored collaboration structures designed to match your organizational agility, roadmap timeline, and budget.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
            {[
              { label: 'Project Delivery', title: 'Fixed-Scope, Fixed-Timeline', desc: 'Defined deliverables, milestones, and acceptance criteria. Best for greenfield builds, platform rewrites, and integration projects with clear boundaries.' },
              { label: 'Engineering Pod', title: 'Embedded Team, Ongoing Delivery', desc: 'A dedicated cross-functional team of 2 to 8 engineers integrated directly into your agile sprint cycles, repositories, and release workflows.' },
              { label: 'Architecture Advisory', title: 'Technical Strategy & Oversight', desc: 'Senior architects who design, review, and guide. Best when you have internal developers but need guidance on system design, scaling decisions, and technology choices.' }
            ].map((model, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '2.5rem 2rem', 
                  borderRadius: '16px', 
                  border: '1px solid #E2E8F0', 
                  background: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {model.label}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {model.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            GET STARTED
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Not sure which capability <span style={{ color: '#60A5FA' }}>fits your situation?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.75, marginBottom: '2.25rem' }}>
            Connect with our engineering team to review your technical requirements, evaluate architecture options, and define a clear delivery roadmap.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2.2rem', background: '#4B61B8', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
              Schedule a Scoping Call <ArrowRight size={16} />
            </a>
            <a href="/about-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2.2rem', background: 'transparent', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              How We Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
