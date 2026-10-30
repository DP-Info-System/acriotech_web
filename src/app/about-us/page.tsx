"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      num: "01",
      title: "Transparency",
      desc: "We write weekly status reports that include what was done, what is blocked, and what changed from the original estimate. If something slips, you hear it from us — not when you check the repo."
    },
    {
      num: "02",
      title: "Quality Over Speed",
      desc: "We build systems we would be comfortable inheriting ourselves. That means documented decisions, typed interfaces, and no clever abstractions that only the author understands."
    },
    {
      num: "03",
      title: "Long-term Partnership",
      desc: "The engineers who build a system are the ones who support it. We do not hand off to a separate team after go-live. When something breaks at 2am, someone who wrote the code answers the alert."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />
      
      {/* Clean, minimalist Hero */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4B61B8', marginBottom: '0.85rem' }}>
            ABOUT ACRIOTECH &middot; EST. 2012
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '1.5rem', textAlign: 'left', lineHeight: 1.1 }}>
            Engineered for longevity. <span style={{ color: '#4B61B8' }}>Tested by production.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '740px', margin: 0, textAlign: 'left' }}>
            We build software for organizations where getting it wrong is not an option. 12+ Years in, the team is the same, the standards are the same, and the clients mostly stay.
          </p>
        </div>
      </section>

      {/* Our Story with Workspace Photography */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '4.5rem', alignItems: 'center' }}>
            
            {/* Left: Rich dark navy architectural card with Photography and Overlapping Delivery Ledger */}
            <div className="relative">
              <div 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
                  border: '1px solid #CBD5E1',
                  height: '340px',
                  position: 'relative'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Acriotech Senior Engineering Pod Collaborating with Laptops" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4), transparent)' }} />
              </div>

              {/* Overlapping Delivery Facts Ledger */}
              <div 
                className="mt-4 lg:-mt-16 lg:ml-12 relative z-10"
                style={{ 
                  background: '#0F172A', 
                  color: '#FFFFFF', 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)', 
                  border: '1px solid #334155',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#60A5FA' }}>
                    Global Delivery HQ
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                    Bhavnagar, India
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1 }}>12+ Years</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.4rem', fontWeight: 500 }}>Continuous Operation Since 2012</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '-0.02em', lineHeight: 1 }}>80+ Systems</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.4rem', fontWeight: 500 }}>Hardened Under Production Load</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Side */}
            <div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Our <span style={{ color: '#4B61B8' }}>Story.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Acriotech was founded in Bhavnagar in 2012 by engineers who had grown tired of watching good ideas get buried under bad architecture. We started with one conviction: that software built without discipline becomes somebody else&rsquo;s emergency within two years. That conviction is still our operating principle.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                Today we work with companies across four continents on systems that handle payroll, patient data, logistics routing, and financial transactions. Not glamorous verticals &mdash; consequential ones. The kind where downtime has a cost measured in more than lost conversions.
              </p>
              <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                Contact our engineering team <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Guaranteed 3-Column "How We Work" with Interactive Dark-Navy Card Hover */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '640px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              OPERATING ETHOS
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              How We <span style={{ color: '#4B61B8' }}>Work.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>Three principles that determine whether a software project succeeds or fails quietly.</p>
          </div>

          <div className="layout-grid-3 gap-6 w-full">
            {principles.map((item, idx) => {
              const isActive = activePrinciple === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActivePrinciple(idx)}
                  className="w-full min-w-0"
                  style={{
                    background: isActive ? '#0F172A' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#0F172A',
                    border: isActive ? '1px solid #38BDF8' : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '2.5rem 2rem',
                    boxShadow: isActive ? '0 20px 40px -15px rgba(15,23,42,0.35)' : '0 4px 15px rgba(15, 23, 42, 0.03)',
                    transform: isActive ? 'translateY(-3px)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: isActive ? '#38BDF8' : '#4B61B8', marginBottom: '1rem', lineHeight: 1 }}>
                      {item.num}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: isActive ? '#FFFFFF' : '#0F172A', marginBottom: '0.85rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: isActive ? '#CBD5E1' : '#475569', lineHeight: 1.65, fontSize: '0.95rem', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: 'left', marginBottom: '4rem', maxWidth: '640px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              CORE TEAM
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Our <span style={{ color: '#4B61B8' }}>Leadership.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569' }}>Guided by experienced technical operators and software architects.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'center' }}>
             <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Run by the people doing the work.
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                There is no account manager layer here. When you talk to Acriotech about your project, you are talking to the engineers who will build it. That is not a selling point &mdash; it is just how we are structured, and it means estimates come from people who understand the problem.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                The work we have done includes scaling platforms through 40x traffic spikes, migrating monoliths without a maintenance window, and rebuilding authentication layers that had not been touched since 2012. We bring that specific experience to the table.
              </p>
            </div>
            
            {/* Photography Container */}
            <div 
              style={{ 
                position: 'relative',
                padding: '0.75rem',
                background: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px rgba(15,23,42,0.08)'
              }}
            >
              <div 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid #CBD5E1', 
                  height: '380px', 
                  position: 'relative' 
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Acriotech Engineering Team Collaborating on Production Architecture" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partnerships: Compact 3-Column Desktop Grid fitting ~350px height */}
      <section style={{ padding: '5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              PROVEN FOUNDATION
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              Technology <span style={{ color: '#4B61B8' }}>Partnerships.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '680px', margin: 0 }}>
              We work with tools chosen because they solve the problem with high availability, not because of vendor kickbacks.
            </p>
          </div>
          
          {/* Compact 3-Column Grid */}
          <div className="layout-grid-3 gap-6 w-full">
            {/* Column 1: Cloud Foundations */}
            <div className="w-full min-w-0" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Cloud Foundations</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'Amazon Web Services', tags: ['EKS', 'Aurora', 'KMS'] },
                  { name: 'Microsoft Azure', tags: ['AKS', 'Azure SQL', 'Entra ID'] },
                  { name: 'Google Cloud Platform', tags: ['GKE', 'BigQuery', 'Cloud Run'] },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>{item.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {item.tags.map(t => (
                        <span key={t} style={{ fontSize: '0.72rem', color: '#4B61B8', background: '#F1F5F9', padding: '0.15rem 0.45rem', borderRadius: '6px', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Application & Runtime */}
            <div className="w-full min-w-0" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Application &amp; Runtime</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'React & Next.js', tags: ['TypeScript', 'SSR', 'Tailwind'] },
                  { name: 'Node.js & Go', tags: ['Fastify', 'gRPC', 'REST APIs'] },
                  { name: 'Python & PyTorch', tags: ['Machine Learning', 'Vector DB', 'Airflow'] },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>{item.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {item.tags.map(t => (
                        <span key={t} style={{ fontSize: '0.72rem', color: '#4B61B8', background: '#F1F5F9', padding: '0.15rem 0.45rem', borderRadius: '6px', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Data & Orchestration */}
            <div className="w-full min-w-0" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Data &amp; Orchestration</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { name: 'PostgreSQL & Redis', tags: ['pgvector', 'Replicas', 'Multi-AZ'] },
                  { name: 'Docker & Kubernetes', tags: ['Helm', 'ArgoCD', 'Autoscaling'] },
                  { name: 'Kafka & RabbitMQ', tags: ['Event Streams', 'Queues', 'Idempotency'] },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>{item.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {item.tags.map(t => (
                        <span key={t} style={{ fontSize: '0.72rem', color: '#4B61B8', background: '#F1F5F9', padding: '0.15rem 0.45rem', borderRadius: '6px', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Careers / Culture */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Work on systems that <span style={{ color: '#60A5FA' }}>actually matter.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '700px' }}>
            We are not hiring for headcount &mdash; we are a small team that moves carefully. If you write clean code, care about what happens after deployment, and want to work on systems with real stakes, read the open roles.
          </p>
          <a href="/company/careers" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.95rem 2rem', background: '#4B61B8', color: '#FFFFFF', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
            View Open Positions
          </a>
        </div>
      </section>

      {/* Engineering Methodology Section */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid #F1F5F9' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="layout-split-hero gap-16 items-start w-full">
            
            {/* Left Column: Section Title */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Our <span style={{ color: '#4B61B8' }}>Methodology.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
                The same four phases on every project. Not because we lack imagination &mdash; because they work.
              </p>
            </div>

            {/* Right Column: Steps with High-Contrast Blue Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {[
                { step: "01", title: "Discovery & Architecture", desc: "We audit what exists, map the constraints you have not told us about yet, and define an architecture we can defend before anyone writes a line of code." },
                { step: "02", title: "Agile Execution", desc: "Two-week cycles with a working demo at the end of each. No milestone presentations — you use the software and tell us what is wrong." },
                { step: "03", title: "Rigorous QA", desc: "Automated coverage on every critical path. Manual QA on the edge cases that matter. Nothing goes to production that has not been tested on realistic data." },
                { step: "04", title: "Deployment & Scale", desc: "We build the deployment pipeline, not just the application. Observability, rollback capability, and alerting are part of the delivery — not a follow-up engagement." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start' }}>
                  <div 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      borderRadius: '12px', 
                      background: '#EFF6FF', 
                      border: '1px solid #BFDBFE', 
                      color: '#4B61B8', 
                      fontWeight: 800, 
                      fontSize: '1.05rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0 
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
