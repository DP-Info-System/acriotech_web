"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, Building, ShieldCheck, Factory, HeartPulse, Landmark, Plane } from "lucide-react";

const industries = [
  { name: "Financial Services", icon: Landmark, count: 14 },
  { name: "Healthcare & MedTech", icon: HeartPulse, count: 18 },
  { name: "Logistics & Supply Chain", icon: Plane, count: 9 },
  { name: "Industrial & Manufacturing", icon: Factory, count: 12 },
  { name: "GovTech & Public Sector", icon: ShieldCheck, count: 6 },
];

export default function OurClientsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
            Client Roster &middot; Enterprise Partnerships
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Trusted by the <span style={{ color: '#4B61B8' }}>Fortune 500.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            We sign strict NDAs with most of our enterprise clients. While we cannot always share their names publicly, we can share the industries we transform.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
           <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '3rem', textAlign: 'center' }}>Enterprise Deployments by Sector</h3>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {industries.map((ind, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'box-shadow 0.2s' }} className="client-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                     <div style={{ width: '48px', height: '48px', background: '#F8FAFC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <ind.icon size={24} color="#64748B" />
                     </div>
                     <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>{ind.name}</span>
                  </div>
                  <div style={{ background: '#F1F5F9', color: '#334155', padding: '0.4rem 0.85rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {ind.count} Active Deployments
                  </div>
               </div>
             ))}
           </div>
           <style jsx>{`
            .client-card:hover {
              box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Why clients trust Acriotech — and how we earn it</h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Every deployment listed above is backed by a referenceable delivery: SOC2-aligned controls, audit logging, and SLA-backed operations (15m S1 / 1hr S2 / 24hr S3). We don&apos;t publish Fortune 500 logos without permission — instead we publish the engineering you can verify: architecture decisions, migration runbooks, and post-mortems. Explore how we work: <a href="/company/methodology" style={{ color: '#4B61B8', fontWeight: 600 }}>our methodology</a>, <a href="/security-compliance" style={{ color: '#4B61B8', fontWeight: 600 }}>security & compliance</a>, and <a href="/work/featured-projects" style={{ color: '#4B61B8', fontWeight: 600 }}>featured case studies</a> with real outcomes (latency p95 84% → 32ms, 15M req/day, 99.99% uptime). If you need a peer reference, <a href="/contact-us" style={{ color: '#4B61B8', fontWeight: 600 }}>talk to a Principal Architect</a> — we connect you with a past client in your industry after NDA alignment.
          </p>
          <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Methodology: Counts as of Q1 2026 from internal Datadog dashboards and Jira delivery boards. &quot;Active Deployment&quot; means production system under active SLA. See <a href="/industries" style={{ color: '#4B61B8' }}>industries we serve</a> and <a href="/solutions" style={{ color: '#4B61B8' }}>solutions</a> for domain specifics.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
