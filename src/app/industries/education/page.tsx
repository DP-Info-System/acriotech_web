"use client";

import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Video, ShieldCheck, Database, Layers } from "lucide-react";
import Link from "next/link";

export default function EducationIndustry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="layout-split-hero gap-12 items-center w-full">
            <div className="w-full min-w-0">
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                EdTech &amp; E-Learning Engineering
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Platforms built for <span style={{ color: '#4B61B8' }}>high-concurrency learning.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build scalable Learning Management Systems (LMS), real-time WebRTC video classrooms, and student data platforms engineered to absorb 1,000% morning concurrency surges while maintaining strict FERPA and COPPA compliance.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact-us" style={{ background: '#4B61B8', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Your EdTech Product <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Architectural Specification Card */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #1E293B', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #1E293B', paddingBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60A5FA' }}>
                  SYSTEM ARCHITECTURE
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                  FERPA &amp; COPPA
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    WebRTC Media Pipeline
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Selective Forwarding Unit (SFU) with Adaptive Bitrate
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem' }}>
                    Sub-150ms real-time audio/video latency across 500+ peers
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Concurrency Surge Absorption
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Serverless Event Handlers &amp; Auto-Scaling Kubernetes
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem' }}>
                    25,000+ concurrent students supported at 8:00 AM rush
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Institutional Standards
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Multi-Tenant Isolation &amp; LTI 1.3 / Advantage Protocol
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem' }}>
                    Zero cross-tenant data leakage; seamless LMS tool embed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Video Infrastructure */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div className="layout-split-hero gap-12 items-center w-full">
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Video color="#4B61B8" /> WebRTC Architecture
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #4B61B8' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>Signaling Server (WebSockets)</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Establishes initial peer connections and manages room state.</div>
                 </div>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #4B61B8' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>SFU (Selective Forwarding Unit)</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Routes video streams to multiple participants without crushing client CPU.</div>
                 </div>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #4B61B8' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>TURN/STUN Relays</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Bypasses strict university and campus firewalls to ensure connectivity.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>High-Concurrency Streaming</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A live lecture with 500 students requires vastly different architecture than a standard API. We build specialized WebRTC video pipelines that prioritize audio clarity and low latency.
                </p>
                <div className="layout-grid-2 gap-6 w-full">
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Adaptive Bitrate</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Automatically degrading video quality for students on constrained internet connections so audio never drops.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Interactive Sockets</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Syncing chat, polls, and whiteboards via Redis Pub/Sub in real-time alongside the video feed.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FERPA Compliance */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Protecting the Student</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Student records are heavily protected by law. We engineer systems that make compliance with FERPA and COPPA structural, not an afterthought.</p>
          </div>
          
          <div className="layout-grid-3 gap-6 w-full">
             <div className="w-full min-w-0" style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldCheck size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>FERPA / COPPA</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Implementing strict data retention policies and parental consent gates for underage learners.</p>
             </div>
             <div className="w-full min-w-0" style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Database size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Data Segregation</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Multi-tenant database architectures that guarantee School District A cannot access School District B data.</p>
             </div>
             <div className="w-full min-w-0" style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Layers size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>LTI Integration</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Seamlessly integrating custom tools into existing systems like Canvas or Blackboard using LTI standards.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div className="layout-split-hero gap-16 items-center w-full">
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The 8 AM Spike</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  EdTech traffic is highly predictable but violent. Traffic can spike 1,000% when schools open at 8 AM. We utilize serverless compute and auto-scaling container orchestration to handle morning rushes efficiently without idle cost overruns.
                </p>
              </div>
              <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>Concurrent Users</span>
                    <span style={{ fontWeight: 800, color: '#4B61B8', fontSize: '1.5rem' }}>25,000+</span>
                 </div>
                 <div style={{ height: '1px', background: '#E2E8F0' }}></div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>Auto-Scale Response Time</span>
                    <span style={{ fontWeight: 800, color: '#4B61B8', fontSize: '1.5rem' }}>&lt; 3s</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
