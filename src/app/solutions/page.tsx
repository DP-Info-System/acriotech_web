"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Server, Code, Cpu, Cloud, LineChart, Briefcase } from "lucide-react";

const solutions = [
  {
    title: 'Enterprise Software Engineering',
    slug: 'enterprise-software',
    desc: 'High-throughput, event-driven microservices with sharded databases built for massive transaction concurrency.',
    icon: Server,
    tag: 'Go · Kafka · PostgreSQL · Kubernetes',
    industries: ['Financial Services', 'Healthcare', 'Logistics'],
    outcomes: 'Architecture baseline, role-based security, and production readiness',
    pipeline: ['Edge Ingress', 'Event Mesh', 'Sharded DB']
  },
  {
    title: 'AI & Intelligent Automation',
    slug: 'ai-intelligent-automation',
    desc: 'Private-cloud ML pipelines, intelligent document processing, and predictive engines without third-party data egress.',
    icon: Cpu,
    tag: 'PyTorch · Airflow · Vector DB',
    industries: ['Manufacturing', 'Insurance', 'Retail'],
    outcomes: 'Custom ML models, intelligent document processing, and zero third-party data leakage'
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    desc: 'Immutable workflow engines replacing manual email approval chains with auditable ERP-integrated decision tracking.',
    icon: Briefcase,
    tag: 'Next.js · GraphQL · Postgres',
    industries: ['Legal', 'Finance', 'Healthcare'],
    outcomes: 'Traceable approvals, audit logs, and measurable operational efficiency'
  },
  {
    title: 'Digital Transformation & Modernization',
    slug: 'digital-transformation',
    desc: 'Decoupled API-first architectures replacing monolithic cores incrementally via the Strangler Fig pattern.',
    icon: Cloud,
    tag: 'Strangler Fig · GraphQL · Kubernetes',
    industries: ['Retail', 'Manufacturing', 'Government'],
    outcomes: 'Reversible migration with independent continuous release paths',
    pipeline: ['Legacy Core', 'Strangler Proxy', 'Cloud Native']
  },
  {
    title: 'Cloud & Infrastructure SRE',
    slug: 'cloud-infrastructure',
    desc: 'Codified multi-cloud infrastructure on AWS, GCP, and Azure with automated failover and telemetry alerting.',
    icon: Shield,
    tag: 'Terraform · K8s · AWS · Azure',
    industries: ['SaaS', 'E-Commerce', 'Media'],
    outcomes: 'Reproducible infrastructure, multi-region failover, and continuous telemetry'
  },
  {
    title: 'Legacy System Modernization',
    slug: 'legacy-system-modernization',
    desc: 'Module-by-module backend extraction that eliminates technical debt while preserving continuous daily operations.',
    icon: Code,
    tag: 'Go · Kong · PostgreSQL · CDC',
    industries: ['Government', 'Banking', 'Insurance'],
    outcomes: 'Controlled migration with business continuity strictly preserved'
  },
  {
    title: 'Data Engineering & Analytics',
    slug: 'data-analytics',
    desc: 'Automated data pipelines consolidating disparate operational tooling into governed, queryable analytical warehouses.',
    icon: LineChart,
    tag: 'Snowflake · dbt · Airflow · Kafka',
    industries: ['E-Commerce', 'SaaS', 'Healthcare'],
    outcomes: 'Governed data models, self-healing pipelines, and trusted reporting'
  },
  {
    title: 'Custom Software Development & Engineering Pods',
    slug: 'custom-software-development',
    desc: 'Dedicated senior engineering pods owning the full development lifecycle with 100% repository and IP handover.',
    icon: Zap,
    tag: 'Next.js · Go · React Native · Terraform',
    industries: ['Startups', 'Enterprises', 'SMBs'],
    outcomes: 'Working software, clean documentation, and full source code handover directly in your repo',
    pipeline: ['Spec Review', 'Sprint Pod', 'Handover Repo']
  }
];

const differentiators = [
  { title: 'Senior Delivery Ownership', desc: 'Principal architects and senior engineers write the code, verify the pull requests, and maintain production readiness throughout.' },
  { title: 'Architecture-First Delivery', desc: 'We design system boundaries and failure states before writing code. Rigorous ADRs are checked into your repository.' },
  { title: 'Full IP & Code Ownership', desc: 'Complete source code, Dockerfiles, Terraform configs, and technical schemas are authored directly in your repositories.' },
  { title: 'No Proprietary Vendor Lock-In', desc: 'We build exclusively on open standards and cloud-native patterns. Switching hosting environments never requires a rewrite.' },
  { title: 'Embedded Engineering Pods', desc: 'Seamless integration into your communication channels, sprint ceremonies, CI/CD pipelines, and project trackers.' },
  { title: 'Built for Audit & Compliance', desc: 'Every system ships with complete documentation, runbooks, and compliance-ready audit trails from day one.' }
];

const industryMatrix = [
  { name: 'Financial Services', desc: 'Secure payment engines, core banking interfaces, and high-concurrency ledger systems.' },
  { name: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant health records platforms, provider portals, and diagnostic data pipelines.' },
  { name: 'Manufacturing & Industrial', desc: 'Real-time telemetry aggregation, predictive maintenance tools, and supply chain monitors.' },
  { name: 'Logistics & Supply Chain', desc: 'Intelligent fleet routing engines, warehouse management systems, and dispatch platforms.' },
  { name: 'Retail & E-Commerce', desc: 'High-availability checkout microservices, inventory sync APIs, and loyalty platforms.' },
  { name: 'Government & Public Sector', desc: 'Citizen service portals, auditable workflows, and sovereign cloud-isolated systems.' },
  { name: 'Insurance & Claims', desc: 'Automated underwriting workflows, claims processing pipelines, and policy administration.' },
  { name: 'SaaS & Technology', desc: 'Multi-tenant cloud backbones, subscription metering engines, and developer API platforms.' }
];

export default function SolutionsIndexPage() {
  const [hoveredDiscipline, setHoveredDiscipline] = useState<number | null>(null);
  const [hoveredDiff, setHoveredDiff] = useState<number | null>(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ── Hero Section with Blueprint Editorial Style ────────────────────── */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Blueprint Radial Grid Backdrop */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundImage: `radial-gradient(rgba(75, 97, 184, 0.08) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            pointerEvents: 'none'
          }} 
        />

        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <div className="layout-split-hero gap-12 items-center w-full max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="w-full min-w-0">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  SOLUTIONS PORTFOLIO &middot; ENTERPRISE CAPABILITIES
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.08 }}>
                Software that carries the <span style={{ color: '#4B61B8' }}>weight of the business.</span>
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, maxWidth: '620px', marginBottom: '2.5rem' }}>
                We build the distributed platforms, cloud backbones, and intelligent data systems that keep complex operations moving &mdash; with measurable delivery outcomes and direct principal engineer ownership.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#capabilities" style={{ padding: '0.95rem 1.8rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Capability Map <ArrowRight size={16} />
                </a>
                <a href="/contact-us" style={{ padding: '0.95rem 1.8rem', background: '#FFFFFF', color: '#0F172A', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid #CBD5E1' }}>
                  Talk to an Architect
                </a>
              </div>
            </div>

            {/* Right Column: Operating Record Console */}
            <div className="w-full min-w-0">
              <div style={{ background: '#0F172A', borderRadius: '2px', padding: '2.25rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px -10px rgba(15,23,42,0.4)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em' }}>OPERATING RECORD</span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>ENTERPRISE SLA</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {[
                    { num: '01', title: 'Architecture first', desc: 'System design, boundary isolation, and failure modeling precede code delivery.' },
                    { num: '02', title: 'Senior delivery teams', desc: 'Direct engagement with principal engineers throughout the entire lifecycle.' },
                    { num: '03', title: 'Production ownership', desc: 'Tested against real latency spikes, failovers, and strict compliance gates.' },
                    { num: '04', title: 'Measured progress', desc: 'Weekly releases, verifiable milestones, and 100% full IP code ownership.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#60A5FA', flexShrink: 0, marginTop: '0.1rem' }}>{item.num}</span>
                      <div>
                        <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Map Section: Clean 2-Column Grid with Dark Navy Hover Spotlight ──────── */}
      <section id="capabilities" style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              CAPABILITY MAP
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 42px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Eight disciplines. <span style={{ color: '#4B61B8' }}>One accountable delivery model.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              Engage the specific discipline your roadmap requires, or bring several together under one architecture, delivery plan, and operating standard.
            </p>
          </div>

          {/* Compact 4-Column Responsive Grid with Guaranteed Multi-Column Layout and Gap */}
          <div className="layout-grid-4 gap-5 w-full">
            {solutions.map((sol, idx) => {
              const isActive = hoveredDiscipline === idx;

              return (
                <div 
                  key={sol.slug} 
                  className="w-full min-w-0"
                  onMouseEnter={() => setHoveredDiscipline(idx)}
                  onMouseLeave={() => setHoveredDiscipline(null)}
                >
                  <a
                    href={`/solutions/${sol.slug}`}
                    className={`interactive-card ${isActive ? 'is-active' : ''}`}
                    style={{
                      background: isActive ? '#0B132B' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#0F172A',
                      padding: '1.35rem',
                      borderRadius: '12px',
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
                      height: '100%',
                      minHeight: '270px'
                    }}
                  >
                    <div>
                      {/* Header: High-Contrast Index Badge & Icon */}
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
                            borderRadius: '6px',
                            letterSpacing: '0.04em'
                          }}
                        >
                          0{idx + 1}
                        </span>
                        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: isActive ? 'rgba(56, 189, 248, 0.15)' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <sol.icon size={15} color={isActive ? '#38BDF8' : '#4B61B8'} />
                        </div>
                      </div>

                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-0.015em', color: isActive ? '#FFFFFF' : '#0F172A', lineHeight: 1.3 }}>
                        {sol.title}
                      </h3>

                      <p style={{ color: isActive ? '#CBD5E1' : '#64748B', lineHeight: 1.55, fontSize: '0.83rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sol.desc}
                      </p>
                    </div>

                    <div>
                      {/* Compact Square Tags (2-3 tags) */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                        {sol.industries.slice(0, 3).map((ind) => (
                          <span
                            key={ind}
                            className="card-tag"
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              background: isActive ? 'rgba(255,255,255,0.06)' : '#F8FAFC',
                              color: isActive ? '#93C5FD' : '#64748B',
                              border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
                              padding: '0.15rem 0.6rem',
                              borderRadius: '6px'
                            }}
                          >
                            {ind}
                          </span>
                        ))}
                      </div>

                      <div 
                        className="card-link"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isActive ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.82rem', borderTop: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: '0.75rem' }}
                      >
                        View architecture <ArrowRight size={13} />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Enterprise Leaders Choose Us (Clean 3-Column Grid) ──────── */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              DIFFERENTIATORS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1rem' }}>
              Why enterprise leaders <span style={{ color: '#4B61B8' }}>choose Acriotech.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              We earn trust through clear architecture, direct engineering ownership, and systems that can be operated seamlessly long after handover.
            </p>
          </div>

          {/* Compact 3-Column differentiator cards with Guaranteed Multi-Column Layout and Gap */}
          <div className="layout-grid-3 gap-5 w-full">
            {differentiators.map((d, i) => {
              const isActive = hoveredDiff === i;

              return (
                <div
                  key={i}
                  className="w-full min-w-0"
                  onMouseEnter={() => setHoveredDiff(i)}
                  onMouseLeave={() => setHoveredDiff(null)}
                >
                  <div
                    className={`interactive-card ${isActive ? 'is-active' : ''}`}
                    style={{
                      background: isActive ? '#0B132B' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#0F172A',
                      padding: '1.35rem',
                      borderRadius: '12px',
                      border: isActive ? '1px solid #38BDF8' : '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive 
                        ? '0 20px 40px -15px rgba(15, 23, 42, 0.35)' 
                        : '0 4px 12px -2px rgba(15, 23, 42, 0.03)',
                      transform: isActive ? 'translateY(-3px)' : 'none',
                      height: '100%',
                      minHeight: '220px'
                    }}
                  >
                    <div>
                      {/* High-Contrast Index Badge */}
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
                            borderRadius: '6px',
                            letterSpacing: '0.04em'
                          }}
                        >
                          0{i + 1}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-0.015em', color: isActive ? '#FFFFFF' : '#0F172A', lineHeight: 1.3 }}>
                        {d.title}
                      </h3>

                      <p style={{ color: isActive ? '#CBD5E1' : '#64748B', lineHeight: 1.55, fontSize: '0.84rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {d.desc}
                      </p>
                    </div>

                    <div 
                      className="card-link"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isActive ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.82rem', borderTop: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: '0.75rem', marginTop: '1rem' }}
                    >
                      Verified Standard <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries: Architectural Matrix Grid with Human Descriptions in 4 Columns ── */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF', position: 'relative' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                DOMAIN COMPETENCY &middot; SECTOR MATRIX
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 40px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                Domain knowledge across <span style={{ color: '#60A5FA' }}>8 key verticals.</span>
              </h2>
            </div>
            <a href="/contact-us" style={{ padding: '0.85rem 1.8rem', background: 'transparent', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Discuss Your Industry <ArrowRight size={16} />
            </a>
          </div>

          {/* 4-Column Responsive Grid */}
          <div className="layout-grid-4 gap-5 w-full">
            {industryMatrix.map((ind, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '1.75rem', 
                  borderRadius: '2px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  minHeight: '160px',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-white/[0.05]"
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', marginBottom: '0.5rem' }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, margin: '0 0 0.6rem 0' }}>
                    {ind.name}
                  </h3>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#94A3B8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginTop: '0.75rem', lineHeight: 1.5 }}>
                  {ind.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Engagement Models: Elevated Center Card ── */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              HOW WE ENGAGE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 40px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
              Three engagement models. <span style={{ color: '#4B61B8' }}>One standard of quality.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
              Tailored collaboration structures designed to match your organizational agility, roadmap timeline, and budget.
            </p>
          </div>

          <div className="layout-grid-3 gap-8 items-stretch w-full">
            {/* Model 1: Fixed Scope */}
            <div 
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '12px', 
                border: '1px solid #CBD5E1', 
                background: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Top Schematic: Milestone Timeline */}
              <div style={{ height: '36px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <svg width="100%" height="24" viewBox="0 0 240 24" fill="none">
                  <line x1="12" y1="12" x2="228" y2="12" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="24" cy="12" r="6" fill="#4B61B8" />
                  <circle cx="120" cy="12" r="6" fill="#4B61B8" />
                  <circle cx="216" cy="12" r="6" fill="#22C55E" />
                </svg>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Fixed-Scope Project Delivery
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                  Fixed-Scope, Fixed-Timeline
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 1.5rem 0' }}>
                  Defined deliverables, binding milestones, and strict acceptance criteria. Best for greenfield builds, platform rewrites, and integration projects with clear boundaries.
                </p>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem', fontSize: '0.82rem', fontWeight: 600, color: '#475569' }}>
                Contractual Milestone Sign-Off
              </div>
            </div>

            {/* Model 2: Embedded Team (Elevated Center Card) */}
            <div 
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '12px', 
                border: '1px solid #4B61B8', 
                borderTop: '4px solid #4B61B8',
                background: '#0F172A',
                color: '#FFFFFF',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Top Schematic: Interlocking Pod Mesh */}
              <div style={{ height: '36px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <svg width="100%" height="28" viewBox="0 0 240 28" fill="none">
                  <circle cx="80" cy="14" r="8" stroke="#60A5FA" strokeWidth="2" fill="#1E293B" />
                  <circle cx="120" cy="14" r="10" stroke="#38BDF8" strokeWidth="2" fill="#0F172A" />
                  <circle cx="160" cy="14" r="8" stroke="#60A5FA" strokeWidth="2" fill="#1E293B" />
                  <line x1="88" y1="14" x2="110" y2="14" stroke="#4B61B8" strokeWidth="2" />
                  <line x1="130" y1="14" x2="152" y2="14" stroke="#4B61B8" strokeWidth="2" />
                </svg>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Dedicated Engineering Pod
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Embedded Team, Ongoing Delivery
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 1.5rem 0' }}>
                  A dedicated cross-functional pod of 2 to 8 senior engineers integrated directly into your agile sprint cycles, repositories, and release pipelines.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', fontSize: '0.82rem', fontWeight: 600, color: '#38BDF8' }}>
                Bi-Weekly Sprint Previews &amp; Releases
              </div>
            </div>

            {/* Model 3: Architecture Advisory */}
            <div 
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '12px', 
                border: '1px solid #CBD5E1', 
                background: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Top Schematic: Architecture Compass */}
              <div style={{ height: '36px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <svg width="100%" height="28" viewBox="0 0 240 28" fill="none">
                  <circle cx="120" cy="14" r="12" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="120" cy="14" r="4" fill="#0F172A" />
                  <line x1="120" y1="2" x2="120" y2="26" stroke="#4B61B8" strokeWidth="1.5" />
                  <line x1="108" y1="14" x2="132" y2="14" stroke="#4B61B8" strokeWidth="1.5" />
                </svg>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Strategic Technical Advisory
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                  Technical Strategy &amp; Oversight
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 1.5rem 0' }}>
                  Senior architects who design, review, and govern. Best when you have internal developers but require guidance on system design, scaling decisions, and security audits.
                </p>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem', fontSize: '0.82rem', fontWeight: 600, color: '#475569' }}>
                Formal Architecture Decision Records (ADRs)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pre-Footer CTA ─────────────────── */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            DIRECT ARCHITECT ENGAGEMENT
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Not sure which capability <span style={{ color: '#60A5FA' }}>fits your roadmap?</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Connect directly with our engineering team to review your technical requirements, evaluate system topology options, and define a clear delivery plan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2.2rem', background: '#FFFFFF', color: '#0F172A', borderRadius: '2px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              Schedule a Scoping Call <ArrowRight size={16} />
            </a>
            <a href="/about-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2.2rem', background: 'transparent', color: '#FFFFFF', borderRadius: '2px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              How We Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
