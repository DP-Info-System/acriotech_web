"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, Zap, Layers, Network, Server, Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity, Lock, Users, MonitorSmartphone, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// Premium animated proof block
function ProofBlock() {
  const stats = [
    { num: "80+", label: "Systems Live", icon: "◈" },
    { num: "8yr", label: "In Business", icon: "◉" },
    { num: "40+", label: "Partners", icon: "◎" },
    { num: "99.9%", label: "Uptime SLA", icon: "◆" },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
      {/* Glow behind card */}
      <div style={{ position: 'absolute', inset: '-1px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(75,97,184,0.25) 0%, rgba(15,23,42,0.08) 100%)', filter: 'blur(12px)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1.5rem' }}>Trusted Track Record</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.25rem', transition: 'all 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(75,97,184,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
            >
              <div style={{ fontSize: '1.1rem', color: '#4B61B8', marginBottom: '0.4rem' }}>{s.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
          <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Enterprise-grade delivery since 2018</span>
        </div>
      </div>
    </div>
  );
}

// --- FAQ Component ---

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the complexity, our initial discovery and architecture phase takes 2-4 weeks. Full deployment of MVP or v1.0 usually ranges from 3-6 months with iterative agile delivery.", href: "/company/methodology", label: "Our engineering methodology" },
  { q: "Do you provide ongoing support after deployment?", a: "Yes, we offer enterprise SLA support, proactive infrastructure monitoring, and continuous integration of new features as part of our long-term partnership models.", href: "/services/maintenance-support", label: "Maintenance & support services" },
  { q: "How do you handle data security and compliance?", a: "We embed security at the architectural level (Zero-Trust principles) and ensure compliance with GDPR, HIPAA, SOC2, and other regional data protection regulations from day one.", href: "/security-compliance", label: "Security & compliance at Acriotech" },
  { q: "Can you scale an existing, legacy architecture?", a: "A significant portion of our work involves auditing legacy systems, decoupling monoliths into microservices, and migrating to scalable cloud infrastructures with zero downtime.", href: "/solutions/legacy-system-modernization", label: "Legacy system modernization" },
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
              Enterprise Software Engineering & Cloud Solutions
            </div>
            <h1 className="hero-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#0F172A' }}>
              Enterprise software<br />
              <span style={{ color: '#475569', fontWeight: 600 }}>that outlasts the roadmap.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', maxWidth: '560px', color: '#475569', lineHeight: 1.6 }}>
              We design, engineer, and scale mission-critical web platforms, cloud infrastructure, and AI solutions for growing businesses and global enterprises.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.75rem', maxWidth: '560px', borderLeft: '3px solid #E2E8F0', paddingLeft: '0.85rem' }}>
              <strong style={{ color: '#0F172A' }}>Engagement Models:</strong> Dedicated Engineering Teams · Fixed-Scope Delivery · Cloud & Architecture Consulting
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.4rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Start a Conversation <ArrowRight size={16} /></a>
              <a href="/work/featured-projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.4rem', background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#0F172A', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Explore Our Work →</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', fontWeight: 500, color: '#64748B' }}>
              <span>Enterprise software</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>AI & Automation</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>Cloud Infrastructure</span>
              <span style={{ color: '#CBD5E1' }}>·</span>
              <span>Data Engineering</span>
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
                { num: "8+", label: "Years of Excellence", desc: "Delivering scalable enterprise software and cloud platforms since 2018." },
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
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>Five core engineering disciplines with end-to-end accountability — from initial system discovery to production support.</p>
          </div>

          <div className="capabilities-grid">
            <div className="card capabilities-card" style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#0F172A' }}>Enterprise software</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>Mission-critical platforms engineered with role-based access control, SSO, audit logging, and compliance built into the core data model.</p>
              <a href="/solutions/enterprise-software" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4B61B8', textDecoration: 'none' }}>Enterprise software →</a>
            </div>
            
            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>AI & Automation</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Custom machine learning pipelines, intelligent document processing, and automated enterprise workflows deployed within your cloud environment.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cloud & reliability</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>K8s & Terraform, multi-region, zero-downtime deploys, and 24/7 production monitoring.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Digital products</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>High-performance web and mobile applications engineered for low latency, offline resilience, and enterprise accessibility.</p>
            </div>

            <div className="card capabilities-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>API & automation</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>Resilient integrations with SAP, Oracle, Salesforce, and custom ERPs designed with automated retry logic and idempotency.</p>
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
            {[{
              tag: 'Cloud Infrastructure',
              icon: '☁',
              accent: '#3B82F6',
              accentBg: 'rgba(59,130,246,0.12)',
              tags: ['Kubernetes', 'Terraform', 'AWS'],
              metric: '99.99% uptime',
              metricLabel: 'over 18 months',
              title: 'Distributed Cloud Architecture',
              desc: 'Engineered a highly available, multi-region cloud infrastructure scaling automatically to handle mission-critical enterprise workloads.',
              detail: 'Multi-region AWS · Auto-Scaling · High Availability'
            }, {
              tag: 'Security Engineering',
              icon: '🔐',
              accent: '#8B5CF6',
              accentBg: 'rgba(139,92,246,0.12)',
              tags: ['Rust', 'WebAssembly', 'eBPF'],
              metric: '0 breaches',
              metricLabel: 'since deployment',
              title: 'Zero-Trust Network Fabric',
              desc: 'Engineered with strict role-based access control, encrypted service-to-service communication, and automated compliance auditing.',
              detail: 'Zero-Trust IAM · SOC2 Ready · Role-Based Access'
            }].map((cs, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Visual card — rich dark with accent */}
                <div style={{ background: '#0F172A', borderRadius: '16px', height: '320px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Accent glow */}
                  <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: `radial-gradient(circle, ${cs.accent}22 0%, transparent 70%)`, pointerEvents: 'none' }} />
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748B' }}>Case Study</div>
                    <div style={{ background: cs.accentBg, border: `1px solid ${cs.accent}33`, borderRadius: '999px', padding: '0.3rem 0.75rem', fontSize: '0.7rem', fontWeight: 600, color: cs.accent }}>{cs.tag}</div>
                  </div>
                  {/* Center icon + detail */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.75rem', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}>{cs.icon}</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.7, fontFamily: 'monospace' }}>{cs.detail}</div>
                  </div>
                  {/* Bottom metric */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.7)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{cs.metric}</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{cs.metricLabel}</span>
                  </div>
                </div>
                {/* Text below */}
                <div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                    {cs.tags.map((t, j) => (
                      <span key={j} style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', fontWeight: 600, padding: '0.3rem 0.7rem', borderRadius: '6px' }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>{cs.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>{cs.desc}</p>
                </div>
              </div>
            ))}
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
          
          <div className="workflow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { id: '01', title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.', icon: '◎' },
              { id: '02', title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.', icon: '◈' },
              { id: '03', title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.', icon: '◇' },
              { id: '04', title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.', icon: '◆' },
              { id: '05', title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.', icon: '◉' },
              { id: '06', title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.', icon: '⬡' }
            ].map((step, index) => (
              <div
                key={step.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(15,23,42,0.06)',
                  boxShadow: '0 4px 24px rgba(15,23,42,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(75,97,184,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(75,97,184,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(15,23,42,0.06)';
                }}
              >
                {/* Large faded step number in background */}
                <div style={{ position: 'absolute', top: '-10px', right: '1rem', fontSize: '5rem', fontWeight: 900, color: 'rgba(75,97,184,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{step.id}</div>
                {/* Icon + number row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(75,97,184,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#4B61B8', flexShrink: 0 }}>{step.icon}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: '#4B61B8', textTransform: 'uppercase' }}>Phase {step.id}</div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0, letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
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
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.18) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(10%)' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <h2 className="cta-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '3rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
              Let's Build Software<br/>
              <span style={{ color: '#60A5FA' }}>
                That Stands The Test of Time.
              </span>
            </h2>
            
            <div className="cta-buttons-flex" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
               <a href="/work/featured-projects" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A', background: '#FFFFFF', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)', transition: 'all 0.2s ease', textDecoration: 'none' }}
               >
                 Explore Our Work
               </a>
               
               <a href="/contact-us" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease', textDecoration: 'none' }}
               >
                 Contact Us
               </a>
            </div>
            
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
