"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  slug: string;
  num: string;
  name: string;
  desc: string;
  tags: string[];
}

interface DomainGroup {
  domainId: string;
  domainNumber: string;
  title: string;
  tagline: string;
  badge: string;
  services: ServiceItem[];
}

const serviceDomains: DomainGroup[] = [
  {
    domainId: "strategy-discovery-design",
    domainNumber: "01",
    title: "Strategy, Discovery & Design",
    tagline: "De-risking architectural decisions and engineering ergonomics before code is committed.",
    badge: "Precision Architecture",
    services: [
      {
        slug: "software-consulting",
        num: "01",
        name: "Software Consulting",
        desc: 'Objective architectural audits, feasibility assessments, and formal decision records for complex systems.',
        tags: ["System Modeling", "ADR Formulation", "TCO Modeling", "Vendor Neutrality"]
      },
      {
        slug: "product-discovery",
        num: "02",
        name: "Product Discovery",
        desc: 'Validating user requirements and technical feasibility to produce prioritized, execution-ready engineering backlogs.',
        tags: ["Feasibility Spikes", "PRD Matrix", "Backlog Slicing", "De-risking"]
      },
      {
        slug: "ui-ux-design",
        num: "03",
        name: "UI & UX Design",
        desc: 'High-density design systems and accessibility-compliant component libraries built for data-heavy workflows.',
        tags: ["Design Systems", "Component Tokens", "WCAG AA", "Micro-Interactions"]
      },
      {
        slug: "dedicated-development-teams",
        num: "04",
        name: "Dedicated Teams",
        desc: 'Embedded senior engineering pods integrated into your sprints, git repositories, and release pipelines.',
        tags: ["Pod Model", "Direct Commits", "CI/CD Native", "Agile Rhythms"]
      }
    ]
  },
  {
    domainId: "core-application-api",
    domainNumber: "02",
    title: "Core Application & API Engineering",
    tagline: "High-throughput application runtimes, resilient microservices, and battle-tested API backbones.",
    badge: "Core Application Runtimes",
    services: [
      {
        slug: "web-application-development",
        num: "05",
        name: "Web App Development",
        desc: 'Edge-rendered, highly responsive web platforms engineered for sub-second page loads and high concurrency.',
        tags: ["Next.js / React", "TypeScript", "SSR / ISR", "State Hydration"]
      },
      {
        slug: "mobile-app-development",
        num: "06",
        name: "Mobile App Development",
        desc: 'Native and cross-platform mobile apps built with offline-first synchronization and hardware optimization.',
        tags: ["React Native", "Flutter", "Offline Sync", "Zero-Latency UI"]
      },
      {
        slug: "api-development-integration",
        num: "07",
        name: "API & Integration",
        desc: 'Resilient event-driven message brokers, GraphQL layers, and high-throughput REST gateways with idempotency.',
        tags: ["Kafka / gRPC", "OpenAPI Spec", "Circuit Breakers", "Idempotency"]
      },
      {
        slug: "qa-testing",
        num: "08",
        name: "QA and Testing",
        desc: 'Automated regression testing, contract verification, and security testing calibrated to failure risk.',
        tags: ["Playwright", "Contract Testing", "Accessibility Audits", "Visual Diffing"]
      }
    ]
  },
  {
    domainId: "cloud-ai-operations",
    domainNumber: "03",
    title: "Cloud, AI & Production Operations",
    tagline: "Scalable cloud topologies, automated release pipelines, and secure enterprise AI workflows.",
    badge: "Cloud & Intelligence",
    services: [
      {
        slug: "cloud-architecture",
        num: "09",
        name: "Cloud Architecture",
        desc: 'Resilient multi-cloud topologies across AWS, GCP, and Azure with codified Terraform configurations and continuous telemetry.',
        tags: ["AWS / GCP / Azure", "Terraform IaC", "Multi-Region", "High Availability"]
      },
      {
        slug: "devops-ci-cd",
        num: "10",
        name: "DevOps and CI/CD",
        desc: 'Immutable build pipelines and Kubernetes container orchestration featuring automated canary rollouts and zero deployment stalls.',
        tags: ["Kubernetes", "GitOps", "Canary Deploys", "Telemetry"]
      },
      {
        slug: "ai-integration",
        num: "11",
        name: "AI Integration",
        desc: 'Private-cloud LLM pipelines, vector databases, and retrieval-augmented generation with strict governance.',
        tags: ["RAG Pipelines", "Vector Indices", "Guardrails", "Data Privacy"]
      },
      {
        slug: "maintenance-support",
        num: "12",
        name: "Maintenance & Support",
        desc: 'Proactive telemetry monitoring, routine security patching, and SLA-backed tier-3 incident escalation.',
        tags: ["24/7/365 SRE", "Rapid Response", "Patching Cadence", "Root Cause Analysis"]
      }
    ]
  }
];

export default function ServicesIndexPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '90px', background: '#0F172A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Architectural Blueprint Grid */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage: `
              linear-gradient(to right, #38BDF8 1px, transparent 1px),
              linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none'
          }}
        />
        
        {/* Radial highlight glow */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            right: '10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            display: 'none',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0.85rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                SERVICES &amp; ENGINEERING CAPABILITY
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              How we <span style={{ color: '#38BDF8' }}>actually build</span> software.
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '780px' }}>
              Strategy, design, core runtime engineering, and continuous cloud operations united under a single accountable standard. We do not toss handoffs over organizational fences.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
              <a 
                href="#strategy-discovery-design" 
                style={{ background: '#4B61B8', color: '#FFFFFF', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', boxShadow: '0 10px 15px -3px rgba(75, 97, 184, 0.3)' }}
              >
                Explore Capabilities Matrix ↓
              </a>
              <Link 
                href="/contact-us" 
                style={{ color: '#94A3B8', border: '1px solid #334155', background: 'rgba(30, 41, 59, 0.6)', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              >
                Schedule Architecture Scoping →
              </Link>
            </div>
          </div>
        </div>

        {/* Hairline bottom transition divider */}
        <div style={{ position: 'relative', marginTop: '4rem', height: '1px', background: '#334155' }} />
      </section>

      {/* 3 Grouped Architectural Domains */}
      <section style={{ padding: '5rem 0 6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              THREE STRATEGIC DOMAINS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Engineered as an interconnected matrix.
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Hover or tap any service node below to inspect architectural specifications, stack primitives, and verification deliverables.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {serviceDomains.map((domain) => (
              <div key={domain.domainId} id={domain.domainId}>
                {/* Domain Header Strip - Unboxed, Clean & Modern */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4B61B8', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.15rem 0.55rem', borderRadius: '6px' }}>
                        {domain.domainNumber}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {domain.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {domain.title}
                    </h3>
                  </div>
                  <p style={{ color: '#64748B', fontSize: '0.92rem', maxWidth: '480px', margin: 0, lineHeight: 1.55 }}>
                    {domain.tagline}
                  </p>
                </div>

                {/* 4-column compact grid per domain with guaranteed multi-column layout and gap */}
                <div className="layout-grid-4 gap-5 w-full">
                  {domain.services.map((svc) => {
                    const isActive = hoveredService === svc.slug;

                    return (
                      <div 
                        key={svc.slug} 
                        className="w-full min-w-0"
                        onMouseEnter={() => setHoveredService(svc.slug)}
                        onMouseLeave={() => setHoveredService(null)}
                      >
                        <Link
                          href={`/services/${svc.slug}`}
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
                            minHeight: '260px'
                          }}
                        >
                          <div>
                            {/* Header: High-Contrast Index Badge */}
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
                                {svc.num}
                              </span>
                            </div>

                            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-0.015em', color: isActive ? '#FFFFFF' : '#0F172A', lineHeight: 1.3 }}>
                              {svc.name}
                            </h4>

                            <p style={{ color: isActive ? '#CBD5E1' : '#64748B', lineHeight: 1.55, fontSize: '0.84rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {svc.desc}
                            </p>
                          </div>

                          <div>
                            {/* 2-3 Compact Square Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                              {svc.tags?.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
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
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div 
                              className="card-link"
                              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: isActive ? '#38BDF8' : '#4B61B8', fontWeight: 700, fontSize: '0.82rem', borderTop: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: '0.75rem' }}
                            >
                              Explore service <ArrowRight size={13} />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                FOUNDATIONAL CRITERIA
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Start with the problem, <span style={{ color: '#4B61B8' }}>not the solution.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                Most software initiatives fail during requirements definition. We invest deep focus into architecture discovery because finding out a constraint exists in week one is vastly cheaper than discovering it in week ten during production rollout.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="#4B61B8" /> 
                  <span>Product and technical discovery before line-of-code commitment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="#4B61B8" /> 
                  <span>Architecture options evaluated across practical engineering tradeoffs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="#4B61B8" /> 
                  <span>Sequenced delivery runbooks with deterministic quality gates</span>
                </div>
              </div>
            </div>

            {/* Architectural Callout Block */}
            <div 
              style={{ 
                background: '#0F172A', 
                padding: '3.5rem', 
                borderRadius: '2px', 
                color: '#FFFFFF',
                border: '1px solid #334155',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                ENGINEERING PRINCIPLE
              </div>
              
              <div style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.35 }}>
                &ldquo;The best architecture is not the most theoretically complex one. It is the one that fits how your team actually operates and scales.&rdquo;
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #334155', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F8FAFC' }}>Principal Engineering Team</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Verified Over 80+ Enterprise Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Scoping Strip */}
      <section style={{ padding: '4.5rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '2px', padding: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div style={{ maxWidth: '750px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Transparent scoping. No arbitrary estimates.
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                Whether engaging as a dedicated project pod or on an architecture advisory retainer, you receive an explicit technical deliverable schedule with milestones and fixed cost parameters before any engagement starts.
              </p>
            </div>
            <Link
              href="/contact-us"
              style={{
                background: '#0F172A',
                color: '#FFFFFF',
                padding: '0.9rem 1.8rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexShrink: 0,
                transition: 'all 0.2s'
              }}
            >
              Request Engineering Scope <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
