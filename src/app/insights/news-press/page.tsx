"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const news = [
  {
    type: "Company Milestone",
    title: "Acriotech Achieves AWS Advanced Tier Services Partner Status",
    date: "April 02, 2026",
    desc: "Recognizing our proven track record in migrating complex legacy enterprise workloads to AWS, while adhering strictly to the Well-Architected Framework."
  },
  {
    type: "Open Source",
    title: "Acriotech Open-Sources 'Sentinel': A Postgres RBAC Extension",
    date: "March 15, 2026",
    desc: "We are releasing our internal Row-Level Security policy generator to the open-source community to help teams secure multi-tenant SaaS applications faster.",
    linkText: "View on GitHub"
  },
  {
    type: "Partnership",
    title: "Announcing Strategic Partnership with Vercel",
    date: "January 28, 2026",
    desc: "Acriotech joins the Vercel Agency Partner program to accelerate our delivery of high-performance, edge-rendered React applications for enterprise commerce.",
    linkText: "Read the Announcement"
  }
];

export default function NewsPressPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
            News & Announcements
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Company <span style={{ color: '#2563EB' }}>Updates.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            The latest milestones, open-source releases, and strategic partnerships from the team at Acriotech.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {news.map((item, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', transition: 'box-shadow 0.2s', display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }} className="news-card">
                 <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'monospace', color: '#94A3B8', width: '40px', flexShrink: 0, paddingTop: '0.25rem' }}>
                   0{i + 1}
                 </div>
                 <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.type}</span>
                      <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{item.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.3 }}>{item.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: item.linkText ? '1.5rem' : '0' }}>{item.desc}</p>
                    {item.linkText && (
                      <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                        {item.linkText} <ArrowUpRight size={16} />
                      </Link>
                    )}
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .news-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
