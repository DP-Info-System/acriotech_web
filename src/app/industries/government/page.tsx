import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Scale, FileSignature, Lock, Users, Server } from "lucide-react";
import Link from "next/link";

export default function GovernmentIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                Public Sector & GovTech
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Software built for <span style={{ color: '#2563EB' }}>absolute compliance.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build secure, accessible digital services for local, state, and federal agencies. From FedRAMP-ready cloud architectures to Section 508-compliant citizen portals, we engineer for the public trust.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Modernize Agency Tech <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Secure Architecture */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #1E293B', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E293B', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', fontWeight: 700 }}>Security Baseline</div>
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.95rem' }}>GovCloud Security Enclave</div>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', background: 'rgba(96, 165, 250, 0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                  FedRAMP Ready
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #2563EB' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(37, 99, 235, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Lock size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#F8FAFC' }}>FIPS 140-2 Cryptography</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Active at Rest and in Transit</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#F8FAFC' }}>RBAC & ABAC Access Limits</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Strict Principle of Least Privilege</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #64748B' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(100, 116, 139, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Server size={20} color="#94A3B8" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#F8FAFC' }}>Air-Gapped Immutable Backups</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>WORM storage with automated verification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: FedRAMP Readiness (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <ShieldCheck color="#2563EB" /> Compliance Boundaries
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #2563EB', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>NIST 800-53 Controls</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Implementing strict access, auditing, and incident response frameworks.</div>
                 </div>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #2563EB', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>AWS/Azure GovCloud</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Deploying exclusively to isolated regions operated solely by verified personnel.</div>
                 </div>
                 <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #2563EB', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>Continuous Monitoring</div>
                   <div style={{ fontSize: '0.85rem', color: '#475569' }}>Automated vulnerability scanning and penetration testing workflows.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Architecting for FedRAMP</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Selling software to the Federal Government requires navigating intense security audits. We build the architectural foundation that enables SaaS products to achieve FedRAMP Authority to Operate (ATO).
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Zero Trust Networks</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Assuming the network is already compromised and verifying every single microservice request.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Audit Trails</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Ensuring every database read/write is immutably logged for forensic analysis.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Section 508 Compliance (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>No Citizen Left Behind</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Government services cannot turn away users with disabilities. We engineer front-ends that strictly adhere to Section 508 and WCAG 2.1 AA standards.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Scale size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Screen Reader Opt.</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Semantic HTML and precise ARIA attributes ensure flawless navigation for visually impaired citizens.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <FileSignature size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Plain Language</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Designing UI/UX that simplifies complex bureaucratic processes into clear, accessible workflows.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Users size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Low-Bandwidth Design</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Optimizing asset delivery to ensure rural populations on limited bandwidth can access critical services.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Citizen Trust (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Restoring Public Trust</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  Failed government IT projects make headlines and erode civic trust. We apply modern agile methodologies to public sector projects, delivering working software in weeks, not years, and ensuring it scales during crisis events.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Digitization of legacy paper workflows",
                     "Secure integration with Identity Providers (Login.gov)",
                     "Scalability to handle high-concurrency traffic spikes",
                     "Open-source transparency where appropriate"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       <ShieldCheck size={20} color="#2563EB" />
                       <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.95rem' }}>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
