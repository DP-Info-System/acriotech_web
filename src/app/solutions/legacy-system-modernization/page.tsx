import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, SplitSquareHorizontal, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function LegacySystemModernization() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                Technical Debt Modernization
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Retire your technical debt. <span style={{ color: '#4B61B8' }}>Safely.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Replacing a core legacy system is like replacing the engine of an aircraft in flight. We use battle-tested architectural patterns to modernize monolithic systems with zero business disruption.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#4B61B8', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Assess Legacy Risk <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Architectural Specification Card */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #1E293B', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #1E293B', paddingBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#60A5FA' }}>
                  MIGRATION RUNBOOK BENCHMARKS
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'monospace' }}>
                  ZERO DISRUPTION
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Decomposition Pattern
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Strangler Fig Routing Proxy
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    Dynamic traffic redirection without touching core monolith code
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Data Synchronization
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Dual-Write CDC (Change Data Capture)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    100% data integrity verified prior to cutover
                  </div>
                </div>

                <div style={{ background: '#1E293B', padding: '1.1rem', borderRadius: '10px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Cutover Latency
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Blue/Green Instant Canary DNS Switch
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#60A5FA', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                    Zero user-facing downtime; automated instant rollback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strangler Pattern */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <SplitSquareHorizontal size={44} color="#4B61B8" style={{ margin: '0 auto 1.5rem auto' }} />
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Strangler Fig Pattern</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>We never advocate for high-risk rip-and-replace deployments. Instead, we use the Strangler Pattern to systematically and safely decommission legacy bottlenecks.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4B61B8', marginBottom: '1rem' }}>Phase 1</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>The Facade</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>We deploy a routing proxy in front of the legacy system to intercept all traffic without changing the underlying code.</p>
             </div>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4B61B8', marginBottom: '1rem' }}>Phase 2</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Domain Extraction</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>We identify a bounded context, rebuild it as a modern cloud-native service, and redirect proxy traffic with live replication.</p>
             </div>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4B61B8', marginBottom: '1rem' }}>Phase 3</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Safe Decommission</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Once all operational domains are extracted and verified, the legacy monolith handles zero traffic and is cleanly retired.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Modernization Options */}
      <section className="dark-section" style={{ padding: '7rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Choosing the Right Path</h2>
               <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>Not all technical debt is created equal. We analyze your codebase to determine the most cost-effective modernization strategy.</p>
               
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#60A5FA', fontWeight: 800 }}>01</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Re-hosting (Lift & Shift)</h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Moving the exact system from on-prem to cloud containers for immediate infrastructure resiliency.</p>
                    </div>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#60A5FA', fontWeight: 800 }}>02</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Re-platforming</h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Targeted architectural adaptations to leverage managed cloud services without full rewrite.</p>
                    </div>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#60A5FA', fontWeight: 800 }}>03</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Refactoring</h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Decomposing brittle codebases into modular, event-driven architectures with continuous delivery.</p>
                    </div>
                 </li>
               </ul>
            </div>
            
            <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '16px', border: '1px solid #334155' }}>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem' }}>Codebase Audit Scope</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {["Coupling & cohesion dependency analysis", "Cyclomatic complexity scoring", "Test coverage gaps & regression vulnerability", "Outdated third-party libraries & CVE detection"].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <CheckCircle size={18} color="#60A5FA" />
                       <span style={{ fontSize: '0.95rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtime Mitigation */}
      <section style={{ padding: '7rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
           <Clock size={44} color="#4B61B8" style={{ margin: '0 auto 1.5rem auto' }} />
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Zero-Downtime Guarantee</h2>
           <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
             Your business cannot afford to go offline during migration. By utilizing Blue/Green deployment strategies and real-time database replication, cutovers remain completely invisible to end-users.
           </p>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                 <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4B61B8', marginBottom: '0.5rem' }}>100%</div>
                 <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase' }}>Data Integrity Maintained</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                 <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4B61B8', marginBottom: '0.5rem' }}>&lt; 1s</div>
                 <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase' }}>Traffic Cutover Latency</div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
