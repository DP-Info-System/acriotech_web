"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Presentation, FileText, Newspaper, Lightbulb, Search, PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const insightList = [
  { slug: "case-studies", name: "Case Studies", desc: "Detailed examinations of how we solved complex business problems for our clients, complete with metrics and technical choices.", icon: FileText },
  { slug: "tech-trends", name: "Tech Trends", desc: "In-depth engineering analysis of emerging cloud, AI, and distributed systems technologies for enterprise adoption.", icon: Lightbulb },
  { slug: "research-reports", name: "Research Reports", desc: "Proprietary data and surveys exploring industry benchmarks, engineering velocity, and security postures.", icon: Search },
  { slug: "webinars", name: "Webinars & Events", desc: "Live and on-demand sessions with our Principal Engineers discussing system design and operational excellence.", icon: PlayCircle },
  { slug: "news-press", name: "News & Press", desc: "Company announcements, open-source contributions, and media coverage of Acriotech.", icon: Newspaper },
];

export default function InsightsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Knowledge Base
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We write down <span style={{ color: '#4B61B8' }}>how we think.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem' }}>
              Explore our architecture guides, engineering articles, and real-world case studies detailing the methodologies and frameworks we use to build enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section style={{ padding: '0 0 6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/insights/whitepapers" style={{ textDecoration: 'none' }}>
             <div style={{ background: '#0F172A', borderRadius: '24px', padding: '4rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} className="featured-card">
                <div>
                   <div style={{ display: 'inline-block', background: '#4B61B8', color: '#FFFFFF', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>New Whitepaper</div>
                   <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>The Pragmatic Guide to Microservices in 2026</h2>
                   <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>A practical, data-driven framework for evaluating when distributed microservices make sense for enterprise scale.</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontWeight: 600 }}>
                     Read the Whitepaper <ArrowRight size={18} />
                   </div>
                </div>
                <div style={{ background: '#1E293B', padding: '1.75rem', borderRadius: '16px', border: '1px solid #334155' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ background: '#0F172A', border: '1px solid rgba(75, 97, 184, 0.4)', borderRadius: '8px', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.02em' }}>API Gateway &amp; Edge Routing</span>
                      <span style={{ fontSize: '0.7rem', color: '#CBD5E1', background: 'rgba(75, 97, 184, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>Layer 01</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ color: '#64748B', fontSize: '0.75rem', lineHeight: 1 }}>↓</span>
                    </div>
                    <div style={{ background: '#0F172A', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '8px', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#E2E8F0', letterSpacing: '0.02em' }}>Core Domain Services</span>
                      <span style={{ fontSize: '0.7rem', color: '#CBD5E1', background: 'rgba(148, 163, 184, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>Layer 02</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <span style={{ color: '#64748B', fontSize: '0.75rem', lineHeight: 1 }}>↓</span>
                    </div>
                    <div style={{ background: '#0F172A', border: '1px solid rgba(75, 97, 184, 0.4)', borderRadius: '8px', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.02em' }}>Distributed Data &amp; Event Bus</span>
                      <span style={{ fontSize: '0.7rem', color: '#CBD5E1', background: 'rgba(75, 97, 184, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>Layer 03</span>
                    </div>
                  </div>
                </div>
             </div>
          </Link>
          <style jsx>{`
            .featured-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3) !important;
            }
          `}</style>
        </div>
      </section>

      {/* Insights Grid */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {insightList.map((ind, i) => (
              <Link 
                href={`/insights/${ind.slug}`} 
                key={i} 
                style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s' }}
                className="insight-card"
              >
                 <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   <ind.icon size={24} color="#4B61B8" />
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{ind.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{ind.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   Browse category <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .insight-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
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
