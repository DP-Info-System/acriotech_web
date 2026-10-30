"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Lock, LayoutTemplate, Presentation } from "lucide-react";
import Link from "next/link";

const whitepapers = [
  {
    title: "The Pragmatic Guide to Microservices in 2026",
    theme: "Architecture",
    icon: LayoutTemplate,
    desc: "A data-driven analysis of when distributed systems actually make financial sense, and when you should stick to a modular monolith. Includes cost-benefit matrices based on AWS/GCP pricing.",
    pages: "Architecture Briefing",
    date: "March 2026"
  },
  {
    title: "Zero-Trust Architecture for Cloud Native Apps",
    theme: "Security",
    icon: Lock,
    desc: "How to implement continuous verification across microservices boundaries. A practical guide to mTLS, JWT validation, and RBAC policy enforcement at the API gateway level.",
    pages: "Security Briefing",
    date: "January 2026"
  },
  {
    title: "Serverless Economics: The Hidden Costs",
    theme: "FinOps",
    icon: Presentation,
    desc: "An engineering leader's guide to predicting AWS Lambda and DynamoDB bills at scale. We analyze cold start penalties, API Gateway overhead, and when to migrate back to containers.",
    pages: "FinOps Briefing",
    date: "November 2025"
  }
];

export default function WhitepapersPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
            Whitepapers & Technical Guides
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Deep architectural <span style={{ color: '#4B61B8' }}>research.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Comprehensive engineering briefs authored directly by our Principal Engineers. Detailed analysis into actual code patterns, boundary constraints, and cost structures of production systems.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
             {whitepapers.map((wp, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', display: 'flex', gap: '3rem', alignItems: 'center', transition: 'box-shadow 0.2s' }} className="wp-card">
                 <div style={{ width: '120px', height: '160px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, gap: '1rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.05)' }}>
                    <wp.icon size={32} color="#4B61B8" />
                    <div style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>BRIEFING</div>
                 </div>
                 <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4B61B8', background: '#EFF6FF', padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' }}>{wp.theme}</span>
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{wp.pages} • {wp.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{wp.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>{wp.desc}</p>
                    
                    <Link 
                      href={`/contact-us?subject=${encodeURIComponent('Architecture Briefing Request: ' + wp.title)}`} 
                      style={{ background: '#0F172A', color: '#FFFFFF', border: 'none', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'background 0.2s', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#4B61B8'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#0F172A'}
                    >
                      Request Architecture Briefing <ArrowRight size={18} />
                    </Link>
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .wp-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
              border-color: #CBD5E1 !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
