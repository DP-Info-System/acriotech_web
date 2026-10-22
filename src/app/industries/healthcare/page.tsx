import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Stethoscope, ShieldCheck, FileText, Database, Lock, ActivitySquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HealthcareIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
                Digital Health &middot; Clinical Systems
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Software built for the <span style={{ color: '#4B61B8' }}>clinical context.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build compliant, interoperable medical software that respects provider workflows. From EHR integrations to patient telemetry dashboards, we design for outcomes and strict privacy.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#4B61B8', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Health Tech <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Dark Architectural Specification Card */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2.5rem', border: '1px solid #1E293B', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  CLINICAL DATA SPECIFICATION
                </span>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  HIPAA / HITECH READY
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Interoperability Protocol</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'monospace' }}>SMART on FHIR v4.0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>EHR Connector Integration</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60A5FA', fontFamily: 'monospace' }}>Epic & Cerner Bi-Directional</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Audit Trail & Access Control</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'monospace' }}>ABAC + Immutable Log</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Payload Cryptography</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60A5FA', fontFamily: 'monospace' }}>Field-Level AES-256</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Clinical Workflows (Methodology) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Clinical Triage Architecture Card */}
             <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <ActivitySquare color="#4B61B8" /> Clinical Signal Prioritization
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Tier 1 &middot; Critical Event</div>
                   <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Sepsis Early-Warning Score Escalation</div>
                 </div>
                 <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Tier 2 &middot; Provider Task</div>
                   <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Lab Value Out-of-Range Review</div>
                 </div>
                 <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Tier 3 &middot; Asynchronous Queue</div>
                   <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Routine Medication Refill Batch</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Respecting the Provider</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Doctors and nurses are overwhelmed by screens, clicks, and alerts. We design health tech interfaces that optimize for cognitive load, pushing relevant data to the provider only when action is required.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Fewer Clicks</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Streamlining charting and data entry to prevent physician burnout.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Actionable Dashboards</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Differentiating critical vitals from noise using intelligent thresholding.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: HL7/FHIR Data Standards (Tech) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Interoperability</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Health tech that cannot communicate with Epic or Cerner is useless. We engineer deep EHR integrations.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Database size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>HL7 v2 & v3</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Parsing legacy clinical messaging feeds (ADT, ORU) using robust integration engines (Mirth Connect).</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <FileText size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>FHIR APIs</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Building modern, RESTful endpoints that adhere strictly to the SMART on FHIR specifications.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldCheck size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>DICOM & PACS</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Securely transferring, viewing, and annotating high-resolution radiological imagery in the cloud.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Patient Data Security (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Zero-Trust Healthcare</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
                  Medical data is the most valuable asset on the black market. We construct applications with a Zero-Trust posture, assuming the network is hostile and verifying every single request.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "End-to-End Encryption: TLS 1.3 in transit, AES-256 at rest (Database & S3).",
                     "Immutable Audit Trails: Tracking who viewed which PHI, and exactly when.",
                     "BAA Readiness: Ensuring all cloud infrastructure partners (AWS/Azure) sign Business Associate Agreements.",
                     "De-identification pipelines: Anonymizing data before it reaches analytics or AI models."
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                       <Lock size={20} color="#4B61B8" />
                       <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>{item}</span>
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
