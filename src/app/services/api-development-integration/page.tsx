import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Network, Code2, Lock, Activity, BookOpen, Fingerprint } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function APIIntegration() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                DATA PORTABILITY & APIS
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Interfaces built for <span style={{ color: '#2563EB' }}>resilience.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Good APIs make ownership, change, and failure explicitly visible. We build integration boundaries that support your current workflows while anticipating future scale.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#2563EB', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Integration Needs <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Architectural Specification Card */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2.5rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                 API Architecture Benchmarks
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {[
                   { label: "Contract Governance", value: "OpenAPI 3.1", detail: "Schema-driven linting and typed client generation" },
                   { label: "P99 Response Latency", value: "< 45ms", detail: "Edge caching and sub-millisecond route resolution" },
                   { label: "Gateway Rate Limiting", value: "Token Bucket", detail: "Adaptive throttling and distributed quota enforcement" },
                   { label: "Observability", value: "Distributed Traces", detail: "OpenTelemetry tracing across multi-hop microservices" }
                 ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: i < 3 ? '1px solid #1E293B' : 'none' }}>
                     <div>
                       <div style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</div>
                       <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>{item.detail}</div>
                     </div>
                     <span style={{ color: '#60A5FA', fontWeight: 700, fontSize: '0.9rem' }}>{item.value}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Contract-First Design (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Code2 color="#2563EB" /> OpenAPI Specification
               </h3>
               <pre style={{ margin: 0, color: '#475569', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6, overflowX: 'hidden' }}>
                 <code>
                   paths:<br/>
                   &nbsp;&nbsp;/users:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;post:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;summary: Create user<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requestBody:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required: true<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application/json:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schema:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ref: '#/components/schemas/User'<br/>
                 </code>
               </pre>
             </div>

             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Contract-First Engineering</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We write the OpenAPI (Swagger) or GraphQL schema before a single line of backend logic is coded. This creates a binding contract between front-end, back-end, and external partners.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Parallel Development</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Frontend teams can build against mock servers generated instantly from the contract.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Automated Validation</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>CI/CD pipelines automatically reject backend code if it breaks the established API contract.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: API Gateway Architecture (Tech) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Secured at the Edge</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>We use enterprise API Gateways (like Kong or AWS API Gateway) to abstract security and routing away from your core microservices.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Lock size={28} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Authentication</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>JWT validation and OAuth2 scopes enforced before requests ever reach your servers.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Activity size={28} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rate Limiting</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Throttling malicious actors and preventing DDoS attacks via tiered usage plans.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Fingerprint size={28} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Traceability</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Injecting correlation IDs to track requests across distributed microservices via Datadog.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Developer Experience/Docs (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
              <div style={{ background: '#FFFFFF', width: '80px', height: '80px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                 <BookOpen size={36} color="#2563EB" />
              </div>
              <div style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Developer Experience matters.</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
                  An API is only as good as its documentation. We auto-generate interactive documentation portals directly from code annotations, ensuring contracts never drift from production behavior.
                </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
