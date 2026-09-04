"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    quote: "Acriotech doesn't just write code; they challenge our assumptions. They pushed back on our initial microservices design, saved us six months of DevOps overhead, and delivered a monolith that easily handles our current scale.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Series B",
    company: "Confidential Client"
  },
  {
    quote: "Most agencies nod and build whatever you ask for, even if it's a terrible idea. Acriotech acts like a true technical co-founder. Their command of React Server Components and Edge architecture dropped our latency by 60%.",
    author: "David Chen",
    role: "VP of Engineering",
    company: "Global Logistics Provider"
  },
  {
    quote: "When we needed to achieve FedRAMP readiness on AWS GovCloud, we were drowning in compliance checklists. The Acriotech team came in, automated our infrastructure with Terraform, and got us audit-ready in 12 weeks.",
    author: "Marcus Thorne",
    role: "CISO",
    company: "GovTech Contractor"
  }
];

export default function TestimonialsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF9C3', color: '#854D0E', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Star size={16} fill="#EAB308" color="#EAB308" /> Client Testimonials
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            What it's like to <br /><span style={{ color: '#EAB308' }}>build with us.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Unfiltered feedback from engineering leaders, CTOs, and founders who have trusted Acriotech with their most critical infrastructure.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
             {testimonials.map((test, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '3rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }} className="testimonial-card">
                  <MessageSquareQuote size={48} color="#E2E8F0" style={{ marginBottom: '2rem' }} />
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.7, fontStyle: 'italic', flex: 1, marginBottom: '3rem' }}>
                    "{test.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontWeight: 700 }}>
                        {test.author.charAt(0)}
                     </div>
                     <div>
                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>{test.author}</div>
                        <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{test.role} • {test.company}</div>
                     </div>
                  </div>
               </div>
             ))}
           </div>
           <style jsx>{`
            .testimonial-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>How we collect and verify testimonials</h2>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>
            Testimonials above are from post-delivery interviews (Q2 2024–Q1 2026). Each quote is tied to an internal delivery record (Jira epic + Datadog SLO). We don&apos;t use Clutch yet — but we log every NPS response and share redacted transcripts on request. See <a href="/work/featured-projects" style={{ color: '#4B61B8' }}>architecture excellence</a> for measurable outcomes and <a href="/company/methodology" style={{ color: '#4B61B8' }}>engineering workflow</a> for how we run projects. Want to talk to a past client? <a href="/contact-us" style={{ color: '#4B61B8', fontWeight: 600 }}>Contact us</a> — we arrange peer calls after MNDA.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
