import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Server, Shield, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

export default function CloudInfrastructurePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '4rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textAlign: 'center', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
            Cloud & Infrastructure &middot; Site Reliability Engineering
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Foundation for <span style={{ color: '#2563EB' }}>scale.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We design, build, and operate cloud environments that treat infrastructure as versioned code, security as automated policy, and scaling as a default behavior.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1.1rem 2.5rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', fontSize: '1.05rem' }}>
              Discuss Architecture <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Diagram Visual */}
      <section style={{ paddingBottom: 'var(--spacing-section)', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ background: '#0F172A', borderRadius: '24px', padding: '3rem', border: '1px solid #1E293B', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
               
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Server size={32} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Compute Clusters</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>EKS/GKE orchestrated containers with horizontal pod autoscaling and zero-downtime rollouts.</div>
               </div>

               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Shield size={32} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zero-Trust Network</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>Encrypted VPC peering, private subnets, and fine-grained IAM roles enforcing least privilege.</div>
               </div>

               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Terminal size={32} color="#60A5FA" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>GitOps Pipelines</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>Terraform & ArgoCD declarative deployments. Peer-reviewed changes pushed via standard pull requests.</div>
               </div>

            </div>
         </div>
      </section>

      {/* NEW SECTION 1: Step-by-Step Modernization Journey (Tech) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-section-sm)' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>How We Modernize Infrastructure</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>Migrating to the cloud isn&apos;t just changing servers. It&apos;s changing how you operate. We handle the complexity so you can focus on product.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center', marginBottom: '6rem' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#EEF2FF', lineHeight: 1, marginBottom: '1rem' }}>01</div>
              <h3 style={{ fontSize: 'var(--font-h3)', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Audit & Infrastructure as Code (IaC)</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>We don&apos;t use click-ops. The first step in any modernization is capturing your entire infrastructure state in Terraform or Pulumi. This ensures every environment (dev, staging, prod) is perfectly reproducible and peer-reviewed via Git.</p>
            </div>
            <div style={{ background: '#0F172A', padding: '2rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E293B', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#94A3B8' }}>terraform/production_cluster.tf</div>
                  <div style={{ fontSize: '0.7rem', color: '#60A5FA', fontFamily: 'monospace' }}>HCL</div>
               </div>
               <pre style={{ margin: 0, color: '#94A3B8', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6 }}>
                 <code>
                   module &quot;production_cluster&quot; &#123;{'\n'}
                   {'  '}source = &quot;./modules/eks&quot;{'\n'}
                   {'  '}node_groups = &#123;{'\n'}
                   {'    '}primary = &#123;{'\n'}
                   {'      '}instance_types = [&quot;m5.large&quot;]{'\n'}
                   {'      '}min_size = 3{'\n'}
                   {'      '}max_size = 15{'\n'}
                   {'    &#125;\n'}
                   {'  &#125;\n'}
                   &#125;
                 </code>
               </pre>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#EEF2FF', lineHeight: 1, marginBottom: '1rem' }}>02</div>
              <h3 style={{ fontSize: 'var(--font-h3)', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Container Orchestration</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>We migrate legacy applications into isolated containers orchestrated by Kubernetes. Failed pods restart automatically, autoscaling absorbs traffic spikes, and each service gets its own resource limits.</p>
            </div>
            <div style={{ order: 1, background: '#F8FAFC', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
                 {[1, 2, 3].map((i) => (
                   <div key={i} style={{ background: '#FFFFFF', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <Terminal size={18} color="#2563EB" />
                       <span style={{ fontWeight: 600, color: '#334155' }}>pod-worker-{i}a7b</span>
                     </div>
                     <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>RUNNING</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 2: FinOps & Cost Optimization (Outcomes) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>FinOps & Cost Visibility</h2>
              <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                Cloud waste is the silent killer of margins. We implement aggressive resource tagging, automated instance rightsizing, and spot-instance orchestration to ensure you only pay for what you actually use.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {["Automated idle resource termination", "Reserved instance capacity planning", "Per-service and per-team cost attribution dashboards"].map((item, i) => (
                   <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: '#E2E8F0' }}>
                     <CheckCircle2 size={20} color="#60A5FA" style={{ flexShrink: 0 }} /> {item}
                   </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '24px', border: '1px solid #334155' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
                 <div style={{ fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Monthly Compute Spend</div>
                 <div style={{ color: '#60A5FA', fontSize: '0.9rem', fontWeight: 700 }}>-32% Optimized</div>
               </div>
               {/* Chart */}
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', marginBottom: '1rem' }}>
                 <div style={{ flex: 1, background: '#475569', height: '100%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#475569', height: '90%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#2563EB', height: '60%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#2563EB', height: '68%', borderRadius: '4px 4px 0 0' }}></div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.8rem' }}>
                 <span>Q1</span><span>Q2</span><span style={{ color: '#F8FAFC' }}>Q3 (Post-Migration)</span><span>Q4 (Proj)</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Compliance & Security FAQs */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Security & Compliance Posture</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B' }}>We build environments that satisfy auditors by default, relying on policy-as-code rather than manual checklists.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "How do you handle secrets management?", a: "We utilize HashiCorp Vault or AWS Secrets Manager. Secrets are never hardcoded in repositories; they are injected into containers at runtime and rotated automatically." },
              { q: "Are the environments SOC 2 compliant out-of-the-box?", a: "We implement CIS benchmarking and automated compliance checks via AWS Security Hub or GCP Security Command Center. You will have the technical controls ready for SOC 2 Type II audits." },
              { q: "What is the disaster recovery SLA?", a: "Because environments are defined as code and data is continuously backed up to geographically separate regions, full environment rebuilds can often be executed in under 30 minutes (RTO)." }
            ].map((faq, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={18} color="#2563EB" /> {faq.q}
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, paddingLeft: '1.7rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
