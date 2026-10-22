"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, FolderOpen, Terminal, CheckCircle2, Server, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const workList = [
  { 
    slug: "featured-projects", 
    name: "Featured Production Systems", 
    tag: "High-Throughput Platforms",
    desc: "A curated dossier of enterprise platforms built and maintained in production — with documentation of the real constraints that shaped them.", 
    icon: FolderOpen 
  },
  { 
    slug: "our-clients", 
    name: "Enterprise Client Partnerships", 
    tag: "Average Tenure: 3+ Years",
    desc: "The organizations that trust us run consequential operations in finance, healthcare, and logistics. Here is why they stay.", 
    icon: Users 
  },
  { 
    slug: "open-source", 
    name: "Open Source & Engineering Standards", 
    tag: "Cloud-Native Tooling",
    desc: "Open architectures, Terraform modules, and benchmarking tools we author and maintain for the wider community.", 
    icon: Terminal 
  },
];

export default function WorkIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              Engineered Deployments
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We build systems <span style={{ color: '#4B61B8' }}>that survive production.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
              Anyone can ship a demo. We measure success by what is still running smoothly two years later under peak transactional load.
            </p>
            {/* Clean summary line without pill badges */}
          </div>
        </div>
      </section>

      {/* Flagship Case File Showcase */}
      <section style={{ padding: '4rem 0 6rem 0', background: '#F8FAFC' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/work/featured-projects" style={{ textDecoration: 'none' }}>
             <div 
               style={{ 
                 background: '#0F172A', 
                 borderRadius: '24px', 
                 padding: 'clamp(2rem, 5vw, 4rem)', 
                 display: 'grid', 
                 gridTemplateColumns: '1.3fr 0.9fr', 
                 gap: '3rem', 
                 boxShadow: '0 25px 50px -12px rgba(15,23,42,0.3)', 
                 position: 'relative', 
                 overflow: 'hidden',
                 border: '1px solid rgba(255,255,255,0.08)',
                 alignItems: 'center'
               }} 
               className="featured-card"
             >
                {/* Visual Ambient Lighting & Architecture Imagery */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    opacity: 0.12, 
                    mixBlendMode: 'luminosity', 
                    pointerEvents: 'none' 
                  }} 
                />
                <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '60%', height: '140%', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.25) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                <div style={{ position: 'relative', zIndex: 10 }}>
                   <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
                     Flagship Architectural Rebuild
                   </div>
                   <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                     Global E-Commerce Architecture &mdash; <span style={{ color: '#60A5FA' }}>Monolith to Headless</span>
                   </h2>
                   <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                     A multi-national retailer processing millions of transactions faced catastrophic holiday flash-sale crashes. We extracted their catalog and checkout into high-concurrency microservices with Next.js edge caching and Redis state sharding.
                   </p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontWeight: 700, fontSize: '0.98rem' }}>
                     Examine Architecture Dossier <ArrowRight size={18} />
                   </div>
                </div>

                {/* Right Visual: Architecture Metrics HUD */}
                <div style={{ position: 'relative', zIndex: 10, background: 'rgba(255,255,255,0.04)', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60A5FA', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Production Verified Metrics
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>60% Drop</div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>P95 Page Load Times</div>
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>10x Traffic</div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>Handled without scaling latency spikes</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>99.99%</div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>SLA verified through 18 months</div>
                    </div>
                  </div>
                </div>
             </div>
          </Link>
          <style jsx>{`
            .featured-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 30px 60px -15px rgba(15,23,42,0.4) !important;
            }
          `}</style>
        </div>
      </section>

      {/* Curated Work Categories */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              Dossier Navigation
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
              Explore Our <span style={{ color: '#4B61B8' }}>Engineering Work.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {workList.map((wk, i) => (
              <Link 
                href={`/work/${wk.slug}`} 
                key={i} 
                style={{ 
                  background: '#F8FAFC', 
                  padding: '2.5rem', 
                  borderRadius: '16px', 
                  border: '1px solid #E2E8F0', 
                  textDecoration: 'none', 
                  color: 'inherit', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  transition: 'all 0.25s ease' 
                }}
                className="work-card"
              >
                 <div>
                   <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1rem' }}>
                     0{i + 1}
                   </div>
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{wk.name}</h3>
                   <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.75rem' }}>{wk.desc}</p>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 700, fontSize: '0.95rem' }}>
                   View full dossier <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .work-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.1) !important;
              border-color: #C7D2FE !important;
              background: #FFFFFF !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
