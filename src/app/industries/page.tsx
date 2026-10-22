"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Factory, Stethoscope, GraduationCap, Truck, ShoppingBag, Landmark, UtensilsCrossed, Building, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const industryList = [
  { slug: "manufacturing", name: "Manufacturing", desc: "IIoT integrations, supply chain visibility, and predictive maintenance for heavy industry.", icon: Factory },
  { slug: "healthcare", name: "Healthcare", desc: "HIPAA-compliant patient portals, telehealth integrations, and clinical data pipelines.", icon: Stethoscope },
  { slug: "financial-services", name: "Financial Services", desc: "High-throughput transaction systems, PCI-DSS compliance, and fintech infrastructure.", icon: Landmark },
  { slug: "logistics", name: "Logistics & Supply Chain", desc: "Real-time routing engines, inventory management, and warehouse orchestration.", icon: Truck },
  { slug: "retail", name: "Retail & E-Commerce", desc: "Omnichannel inventory sync, headless commerce, and high-conversion storefronts.", icon: ShoppingBag },
  { slug: "education", name: "Education", desc: "Scalable LMS platforms, student portals, and virtual classroom infrastructure.", icon: GraduationCap },
  { slug: "hospitality", name: "Hospitality", desc: "Property management systems, dynamic pricing engines, and guest experience apps.", icon: UtensilsCrossed },
  { slug: "government", name: "Government & Public Sector", desc: "Compliance-ready cloud architectures, public record digitization, and secure citizen portals.", icon: Building },
  { slug: "startups", name: "High-Growth Startups", desc: "Rapid MVP development, technical due diligence, and scalable Series A architectures.", icon: Rocket },
];

export default function IndustriesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Domain Expertise
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Engineering decisions change when <span style={{ color: '#4B61B8' }}>the work changes.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Acriotech studies the workflows, risk tolerance, data practices, and operational realities of your specific industry before recommending how a system should be built.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '720px' }}>
             <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
               VERTICAL DOMAINS
             </div>
             <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
               Sectors We <span style={{ color: '#4B61B8' }}>Actively Serve.</span>
             </h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>We bring deep technical domain knowledge to highly regulated and complex industries.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {industryList.map((ind, i) => (
              <Link 
                href={`/industries/${ind.slug}`} 
                key={i} 
                style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}
                className="industry-card"
              >
                 <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1.25rem' }}>
                   0{i + 1}
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{ind.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{ind.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4B61B8', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   View industry details <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .industry-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
              border-color: #C7D2FE !important;
            }
          `}</style>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Built for <span style={{ color: '#4B61B8' }}>regulated environments.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                Every industry carries distinct regulatory, security, and operational requirements. Before writing code, our architects define strict data sensitivity controls, audit logging, and high-availability targets tailored to your sector.
              </p>
            </div>
            <div style={{ background: '#0F172A', padding: '4rem', borderRadius: '24px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                Architecture grounded in operational reality. We design systems that handle complex enterprise approvals, role-based exceptions, and real-world peak loads without compromising security.
              </div>
              <div style={{ color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACRIOTECH ENGINEERING PRINCIPLE</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
