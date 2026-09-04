"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, Zap, Layers, Network, Server, Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity, Lock, Users, MonitorSmartphone, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// Editorial proof block — replaces AI circuit illustration
function ProofBlock() {
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', maxWidth: '420px' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: '1rem' }}>Delivery record — last 12 months</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[
          { k: "80+ systems live", v: "Bhavnagar → global, 2018–2026" },
          { k: "15M req/day", v: "p95 32ms, 99.99% SLO" },
          { k: "Zero-downtime", v: "K8s + Terraform, 0 failed deploys in 6 mo" },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: i < 2 ? '1px solid #F1F5F9' : 'none' }}>
            <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{r.k}</span>
            <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{r.v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>Source: internal Datadog + Jira — methodology on request.</div>
    </div>
  );
}

// --- FAQ Component ---

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the complexity, our initial discovery and architecture phase takes 2-4 weeks. Full deployment of MVP or v1.0 usually ranges from 3-6 months with iterative agile delivery.", href: "/company/methodology", label: "Our engineering methodology" },
  { q: "Do you provide ongoing support after deployment?", a: "Yes, we offer enterprise SLA support, proactive infrastructure monitoring, and continuous integration of new features as part of our long-term partnership models.", href: "/services/maintenance-support", label: "Maintenance & support services" },
  { q: "How do you handle data security and compliance?", a: "We embed security at the architectural level (Zero-Trust principles) and ensure compliance with GDPR, HIPAA, SOC2, and other regional data protection regulations from day one.", href: "/security-compliance", label: "Security & compliance at Acriotech" },
  { q: "Can you scale an existing, legacy architecture?", a: "Absolutely. A significant portion of our work involves auditing legacy systems, decoupling monoliths into microservices, and migrating to scalable cloud infrastructures with zero downtime.", href: "/solutions/legacy-system-modernization", label: "Legacy system modernization" },
  { q: "What technologies do you specialize in?", a: "We specialize in modern tech stacks including React, Next.js, Node.js, Python, Rust, and Go. Our infrastructure expertise covers AWS, GCP, Azure, and Kubernetes for seamless orchestration.", href: "/solutions/custom-software-development", label: "Custom software development" },
  { q: "Do you offer custom API development?", a: "Yes. We design and deploy high-performance RESTful and GraphQL APIs, ensuring secure authentication, rate limiting, and robust documentation for seamless integration.", href: "/services/api-development-integration", label: "API development & integration" },
  { q: "How does your pricing model work?", a: "We offer both fixed-price project engagements for well-defined scopes and flexible retainer models for ongoing product development and architectural consulting.", href: "/services/dedicated-development-teams", label: "Dedicated development teams" },
  { q: "What is your approach to UI/UX design?", a: "We believe enterprise software shouldn't look like legacy software. Our design process combines rigorous user research with modern, accessible, and stunning visual design systems.", href: "/services/ui-ux-design", label: "UI/UX design services" },
  { q: "Can you integrate AI or machine learning into our products?", a: "Absolutely. We build scalable AI data pipelines, integrate LLMs, and deploy predictive analytics models tailored to your specific business logic and datasets.", href: "/solutions/ai-intelligent-automation", label: "AI & intelligent automation" },
  { q: "Do you handle DevOps and CI/CD setup?", a: "Yes, setting up robust automated testing, deployment pipelines, and infrastructure-as-code (IaC) using Terraform or Ansible is a core part of our delivery process.", href: "/services/devops-ci-cd", label: "DevOps & CI/CD services" }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '12px', 
              border: '1px solid rgba(15,23,42,0.05)', 
              boxShadow: '0 4px 20px rgba(15,23,42,0.02)', 
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              style={{ 
                width: '100%', 
                padding: '1.5rem 2rem', 
                display: 'flex', 
                flexWrap: 'nowrap',
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0F172A', margin: 0, lineHeight: 1.4 }}>
                  {faq.q}
                </h3>
              </div>
              <div style={{ 
                color: '#4B61B8', 
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                transition: 'transform 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '4px',
                width: '24px',
                height: '24px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                    <a href={faq.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.25rem', color: '#4B61B8', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderBottom: '2px solid #4B61B8', paddingBottom: '0.15rem' }}>{faq.label} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
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

// --- Main Page ---

export default function Home() {
  return (
    <main>
      <div className="bg-engine" />
      <NavBar />

      {/* Hero Section — editorial, no circuit */}
      <section className="section-padding" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(100px, 15vh, 140px)', borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3rem', alignItems: 'start' }}>
          <div className="hero-text-container" style={{ paddingRight: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '999px', padding: '0.35rem 0.85rem', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '1.25rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A' }}></span>
              Bhavnagar HQ → Global delivery · SOC2-ready · Fixed-price
            </div>
            <h1 className="hero-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0F172A' }}>
              Enterprise software<br />
              <span style={{ color: '#475569', fontWeight: 600 }}>that outlasts the roadmap.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', maxWidth: '560px', color: '#475569', lineHeight: 1.6 }}>
              We design and run production systems for mid-market and enterprise teams — from Bhavnagar to the US/EU. Architecture first, then code.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.75rem', maxWidth: '560px', borderLeft: '3px solid #E2E8F0', paddingLeft: '0.85rem' }}>
              <strong style={{ color: '#0F172A' }}>Engagement:</strong> From $40k module · $140–350k platform, scoped in 24h · <strong style={{ color: '#0F172A' }}>SLA:</strong> 15m S1 / 1hr S2 / 24hr S3
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.4rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Talk to a principal <ArrowRight size={16} /></a>
              <a href="/work/featured-projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.4rem', background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#0F172A', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>See live systems →</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', fontWeight: 500, color: '#64748B' }}>
              <span>Enterprise software</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>AI with bounds</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>Cloud & K8s</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>Automation</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
            <ProofBlock />
          </div>
        </div>
      </section>

      {/* Enterprise Metrics */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(75, 97, 184, 0.15) 0%, rgba(15, 23, 42, 0) 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0' }}>
              {[
                { num: "80+", label: "Production Systems", desc: "Mission-critical applications built, deployed, and actively managed." },
                { num: "15M+", label: "Daily API Requests", desc: "High-throughput microservices engineered for secure, scalable operations." },
                { num: "99.99%", label: "Uptime Guarantee", desc: "Fault-tolerant cloud environments designed for business continuity." },
                { num: "40+", label: "Active Partnerships", desc: "Long-term engineering engagements with mid-market and enterprise leaders." }
              ].map((stat, i, arr) => (
                <motion.div key={i} className="metric-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ padding: '2rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>{stat.num}</div>
                  <div style={{ fontSize: '1rem', color: '#60A5FA', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5, maxWidth: '240px', margin: '0 auto' }}>{stat.desc}</div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Capabilities — editorial, no bento/glass */}
      <section id="services" className="section-padding" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem', maxWidth: '720px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.75rem' }}>What we do</div>
            <h2 style={{ fontSize: 'var(--font-h2)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>Capabilities that survive handover.</h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>Five disciplines, one accountable path — from discovery to SLA. No bento, no glass, just what we ship.</p>
          </div>

          <div className="capabilities-grid">
            <div className="card capabilities-card" style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#0F172A' }}>Enterprise software</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>Systems where downtime isn’t an option. RBAC/SSO, audit logs, and compliance are in the data model — not bolt-ons.</p>
              <a href="/solutions/enterprise-software" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4B61B8', textDecoration: 'none' }}>Enterprise software →</a>
            </div>
            
            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>AI with bounds</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Document processing, forecasting, anomaly detection — trained on your data, human-in-loop, hosted where you decide.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cloud & reliability</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>K8s & Terraform, multi-region, zero-downtime deploys, and SLOs you can page on.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Digital products</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Web and mobile apps that respect latency, offline, and accessibility — not just the happy path.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>API & automation</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Connectors to SAP/Oracle/Salesforce that handle change, failure, and idempotency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(15,23,42,0.05)', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-section-sm)' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Selected Work</div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Architecture Excellence</h2>
            </div>
            <a href="/work/featured-projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: '#0F172A', fontSize: '1rem', textDecoration: 'none', transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              Explore Case Studies <ArrowRight size={16} />
            </a>
          </div>

          <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Case Study 1 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: '#0F172A', borderRadius: '12px', height: '320px', marginBottom: '1.5rem', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.75rem' }}>Case study — Cloud</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#F8FAFC', lineHeight: 1.6 }}>15M req/day · p95 32ms<br/>0 failed deploys in 6 mo</div>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#64748B' }}>Terraform · K8s · AWS · SLO 99.99%</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Kubernetes</span>
                  <span>•</span>
                  <span>Terraform</span>
                  <span>•</span>
                  <span>AWS</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Distributed Cloud Architecture</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  Engineered a highly available, multi-region cloud infrastructure scaling automatically to handle over 15 million daily requests.
                </p>
              </div>
            </div>

            {/* Case Study 2 — editorial, no stock */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ background: '#FFFFFF', borderRadius: '12px', height: '320px', marginBottom: '1.5rem', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.75rem' }}>Case study — Security</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#0F172A', lineHeight: 1.6 }}>eBPF · Rust · WASM<br/>p99 &lt;15ms · 0 bypass in audit</div>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>Kernel-level · audit-logged · 2.4B events/day</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Rust</span>
                  <span>•</span>
                  <span>WebAssembly</span>
                  <span>•</span>
                  <span>eBPF</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Zero-Trust Network Fabric</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  Kernel-level, audit-logged. The value is the threat model — not the stock photo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-section-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Methodology</div>
              <h2 className="workflow-title" style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Engineering<br/>Workflow</h2>
            </div>
            <p style={{ maxWidth: '400px', fontSize: '1.1rem', color: '#5B6472', lineHeight: 1.6, margin: 0, paddingBottom: '0.5rem' }}>
              A disciplined, systematic approach to building complex software systems that scale effortlessly.
            </p>
          </div>
          
          <div className="workflow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { id: "01", title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.' },
              { id: "02", title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.' },
              { id: "03", title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.' },
              { id: "04", title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.' },
              { id: "05", title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.' },
              { id: "06", title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.' }
            ].map((step, index) => (
              <div 
                key={step.id}
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2.5rem', 
                  border: '1px solid rgba(15,23,42,0.05)',
                  boxShadow: '0 10px 30px -10px rgba(15,23,42,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1.5rem', fontFamily: 'monospace', background: 'rgba(75, 97, 184, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '6px', alignSelf: 'flex-start' }}>
                  // STEP {step.id}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-section-sm)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Questions & Answers</div>
            <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="dark-section" style={{ position: 'relative', padding: 'calc(var(--spacing-section) * 1.5) 0', overflow: 'hidden', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        
        {/* Advanced Aurora Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(10%)' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(123, 175, 53, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <h2 className="cta-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '3rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
              Let's Build Software<br/>
              <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                That Stands The Test of Time.
              </span>
            </h2>
            
            <div className="cta-buttons-flex" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
               <button style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A', background: '#FFFFFF', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
               >
                 Explore Our Work
               </button>
               
               <button style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease' }}
               >
                 Contact Us
               </button>
            </div>
            
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
