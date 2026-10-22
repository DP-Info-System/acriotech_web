import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Map, PenTool, LayoutTemplate, Users2 } from "lucide-react";
import Link from "next/link";

export default function ProductDiscovery() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                Research & Prototyping
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '2rem' }}>
                Build the <span style={{ color: '#4B61B8' }}>right</span> product before building the product right.
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                A smaller, clearer bet before a larger build. We connect user needs, business intent, and technical feasibility before your engineering team commits to a delivery shape.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#4B61B8', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Start a Discovery Sprint <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Architectural Deliverable Specification Card */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #1E293B', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #1E293B', paddingBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60A5FA' }}>
                  DISCOVERY DELIVERABLES
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'monospace' }}>
                  2–4 WEEK SPRINT
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Deliverable 01
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Clickable Architecture & Interactive Prototype
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    Validates core workflow before writing production backend code
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Deliverable 02
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Technical Feasibility & Integration Audit
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    Identifies rate limits, legacy bottlenecks, and compliance boundaries
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Deliverable 03
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Prioritized MVP Scope & Sprint Roadmap
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    Eliminates non-essential features; delivers high-conviction delivery spec
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Alignment Workshop */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Alignment Workshop</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>Product failures rarely happen because of bad code. They happen because Sales, Product, and Engineering were solving different problems. We align all stakeholders upfront.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
             {[
               { icon: Users2, title: "Stakeholder Interviews", desc: "We interview key personnel across departments to uncover hidden constraints and misaligned objectives." },
               { icon: Map, title: "Service Mapping", desc: "Visually mapping the entire customer journey, including offline processes that software must account for." },
               { icon: PenTool, title: "Assumption Testing", desc: "Identifying the riskiest assumptions in the business model and designing targeted experiments to validate them." }
             ].map((activity, i) => (
               <div key={i} style={{ background: '#F8FAFC', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                 <activity.icon size={36} color="#4B61B8" style={{ margin: '0 auto 1.5rem auto' }} />
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{activity.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{activity.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* User Research Methodology */}
      <section className="dark-section" style={{ padding: '7rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Evidence, Not Opinions</h2>
                <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                  The highest paid person in the room shouldn't dictate product features. We rely on rigorous qualitative and quantitative user research to drive decisions.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#60A5FA', marginBottom: '0.5rem' }}>Contextual</div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Inquiry</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Observing users perform tasks in their actual production environment, rather than a sterile lab.</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#60A5FA', marginBottom: '0.5rem' }}>Rapid</div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Prototyping</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Testing high-fidelity interactive flow specifications before writing a single line of backend logic.</p>
                  </div>
                </div>
             </div>
             
             {/* Quote/Impact box */}
             <div style={{ background: '#1E293B', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid #334155', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#4B61B8' }}></div>
               <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F8FAFC', lineHeight: 1.5, marginBottom: '2rem' }}>
                 "Discovery is about reducing the risk of building something nobody wants. It's the cheapest insurance policy in software development."
               </p>
               <div style={{ fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                 Acriotech Product Standard
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Discovery Artifacts */}
      <section style={{ padding: '7rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
             <div style={{ flexShrink: 0 }}>
                <LayoutTemplate size={100} color="#4B61B8" opacity={0.25} />
             </div>
             <div>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Engineering Handoff</h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                 At the end of a 2-4 week discovery phase, you do not just get a report. You get the exact architectural specifications and verified user stories your engineering team needs to begin sprint planning.
               </p>
               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                 {["Interactive Prototype", "User Story Map", "Technical Feasibility Audit", "Prioritized MVP Scope", "Data Schema Draft"].map((tag, i) => (
                    <span key={i} style={{ background: '#FFFFFF', color: '#0F172A', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #E2E8F0' }}>
                      {tag}
                    </span>
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
