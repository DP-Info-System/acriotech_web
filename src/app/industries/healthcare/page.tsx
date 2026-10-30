import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Stethoscope, ShieldCheck, FileText, Database, Lock, ActivitySquare } from "lucide-react";
import Link from "next/link";

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

      {/* SECTION 2: 3-Column Connected Clinical Integration Hub */}
      <section className="dark-section" style={{ padding: '6.5rem 0', background: '#0F172A', color: '#FFFFFF', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
             <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
               BI-DIRECTIONAL EHR INTEGRATION FABRIC
             </div>
             <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
               Clinical Interoperability Hub
             </h2>
             <p style={{ fontSize: '1.15rem', color: '#94A3B8', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
               Health technology that cannot exchange bi-directional clinical records with Epic, Cerner, and hospital PACS is functionally stranded. We engineer hardened integration backbones.
             </p>
          </div>

          {/* Central Integration Engine Header Node */}
          <div style={{ maxWidth: '680px', margin: '0 auto 2rem auto', background: '#1E293B', border: '1px solid #38BDF8', borderRadius: '12px', padding: '1.25rem 2rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.2)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', boxShadow: '0 0 8px #34D399' }} />
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.1em' }}>
                CENTRAL ROUTING NODE: ACRIOTECH CLINICAL INTEGRATION ENGINE
              </span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontFamily: 'monospace' }}>
              PROTOCOL TRANSLATION &middot; FIELD-LEVEL AES-256 ENCRYPTION &middot; EHR BIO-GATEWAY
            </div>
          </div>

          {/* Glowing Sky Blue SVG Connector Circuit Lines (Desktop) */}
          <div className="hidden lg:block" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <svg viewBox="0 0 960 50" style={{ width: '100%', height: '50px', display: 'block' }}>
              <line x1="480" y1="0" x2="480" y2="25" stroke="#38BDF8" strokeWidth="2" />
              <line x1="160" y1="25" x2="800" y2="25" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="25" x2="160" y2="50" stroke="#38BDF8" strokeWidth="2" />
              <line x1="480" y1="25" x2="480" y2="50" stroke="#38BDF8" strokeWidth="2" />
              <line x1="800" y1="25" x2="800" y2="50" stroke="#38BDF8" strokeWidth="2" />
              <circle cx="160" cy="50" r="4" fill="#38BDF8" />
              <circle cx="480" cy="50" r="4" fill="#38BDF8" />
              <circle cx="800" cy="50" r="4" fill="#38BDF8" />
            </svg>
          </div>

          {/* 3-Column Connected Integration Protocol Cards (Equal 3-Col Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
             {/* Protocol 1: HL7 */}
             <div className="w-full min-w-0" style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8' }}>PROTOCOL 01</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#94A3B8' }}>LEGACY CORE</span>
                  </div>
                  <Database size={28} color="#38BDF8" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>HL7 v2 & v3 Messaging</h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Ingesting and dispatching legacy clinical telemetry feeds (ADT admission/discharge, ORU lab orders, MDM notes) via Mirth Connect pipelines.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {["Mirth Connect", "ADT / ORU Parsers", "Bi-Directional Feeds"].map(tag => (
                    <span key={tag} style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#93C5FD', background: '#0F172A', border: '1px solid #334155', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
             </div>

             {/* Protocol 2: FHIR */}
             <div className="w-full min-w-0" style={{ background: '#1E293B', border: '1px solid #38BDF8', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.15)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8' }}>PROTOCOL 02</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#34D399', background: 'rgba(52, 211, 153, 0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>SMART STANDARD</span>
                  </div>
                  <FileText size={28} color="#38BDF8" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>SMART on FHIR v4.0</h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Modern, high-velocity RESTful endpoints interfacing directly with Epic MyChart and Cerner Millennium EHR app stores with OAuth2 scopes.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {["OAuth2 / OIDC", "Epic App Orchard", "Cerner Code Ready"].map(tag => (
                    <span key={tag} style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#38BDF8', background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
             </div>

             {/* Protocol 3: DICOM & PACS */}
             <div className="w-full min-w-0" style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8' }}>PROTOCOL 03</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#94A3B8' }}>IMAGING VAULT</span>
                  </div>
                  <ShieldCheck size={28} color="#38BDF8" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>DICOM & PACS Archiving</h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Lossless transmission, client-side zero-footprint WebGL rendering, and cloud PACS archiving for high-resolution CT, MRI, and X-Ray studies.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {["DICOMweb (WADO-RS)", "C-STORE Protocol", "WebGL Radiology"].map(tag => (
                    <span key={tag} style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#93C5FD', background: '#0F172A', border: '1px solid #334155', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
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
