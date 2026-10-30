"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Workflow, ShieldCheck, Activity, Cpu, Network, Database, Lock } from "lucide-react";
import Link from "next/link";

export default function AIAutomationSolution() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero - Clean Enterprise Split */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="layout-split-hero gap-12 items-center w-full">
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
                Applied Artificial Intelligence
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '2rem' }}>
                Intelligence <span style={{ color: '#2563EB' }}>architected</span> for strict operational bounds.
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We deploy highly specialized machine learning models that solve singular, high-value problems—from document OCR to predictive supply chain engines. No black boxes. Just accountable automation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact-us" style={{ background: '#111827', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}>
                  Consult an AI Architect <ArrowRight size={18} />
                </Link>
                <a href="#methodology" style={{ background: '#FFFFFF', color: '#111827', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', transition: 'all 0.2s' }}>
                  View our methodology
                </a>
              </div>
            </div>
            
            <div>
              {/* Dark Architectural Specification Card */}
              <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #1E293B', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem', marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    SYSTEM ARCHITECTURE
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    PRIVATE CLOUD BOUNDARY
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Inference Latency P95</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'monospace' }}>&lt; 42ms</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Automated Verification Confidence</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60A5FA', fontFamily: 'monospace' }}>99.4% Precision</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Human-in-the-Loop Fallback</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'monospace' }}>Deterministic Audit</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>Data Isolation Standard</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60A5FA', fontFamily: 'monospace' }}>Zero External Egress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Bento Box Design */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F9FAFB' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Capabilities mapped to outcomes.</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>We replace manual, error-prone workflows with deterministic AI systems that integrate directly into your existing infrastructure.</p>
          </div>

          {/* Top Row: 2-column Bento */}
          <div className="layout-grid-2 gap-6 mb-6 w-full">
            <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }} className="w-full min-w-0">
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Workflow size={24} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Document Intelligence &amp; OCR</h3>
              <p style={{ color: '#4B5563', lineHeight: 1.6, marginBottom: '2rem' }}>Custom convolutional neural networks trained specifically on your proprietary document structures (invoices, legal contracts, medical charts). We normalize layouts and post structured data directly to your ERP.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {["Handwritten and printed extraction", "Multi-language entity recognition", "Confidence scoring per field"].map((item, i) => (
                   <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151', fontSize: '0.95rem' }}>
                     <ShieldCheck size={18} color="#4B61B8" /> {item}
                   </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#111827', color: '#FFFFFF', padding: '3rem', borderRadius: '16px', border: '1px solid #374151', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} className="w-full min-w-0">
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Activity size={24} color="#60A5FA" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem' }}>Predictive Forecasting</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, marginBottom: '2rem' }}>Time-series models trained on your historical datasets to forecast demand, predict revenue, and optimize capacity planning.</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                 <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>90-Day</div>
                 <div style={{ fontSize: '0.85rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Prediction Windows</div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2-column Bento */}
          <div className="layout-grid-2 gap-6 w-full">
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }} className="w-full min-w-0">
               <Brain size={32} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Anomaly Detection</h3>
               <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>Real-time event monitoring using Isolation Forests and Autoencoders to flag fraud, supply chain deviations, or equipment failures instantly.</p>
            </div>
            
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }} className="w-full min-w-0 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
               <div style={{ flex: 1 }} className="min-w-0">
                 <Cpu size={32} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Decision Rule Engines</h3>
                 <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>Hybrid deterministic systems combined with ML-assisted layers. We automate approval routing and risk classification while preserving a strict, auditor-friendly paper trail.</p>
               </div>
               <div style={{ width: '100%', maxWidth: '220px', flexShrink: 0, padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                 <div style={{ fontSize: '0.8rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Audit Trail</div>
                 <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.4 }}>Complete rationale logged for every automated classification.</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Methodology */}
      <section id="methodology" style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', borderTop: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1.5rem' }}>Our AI Deployment Methodology</h2>
              <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '2rem' }}>
                Building models is easy. Getting them to operate safely in an enterprise environment is hard. We follow a strict 4-phase deployment standard to ensure zero operational surprises.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { num: "01", title: "Data Governance Audit", desc: "We map your data pipelines, isolate PII, and establish a clear training corpus. We never train on contaminated or unverified datasets." },
                  { num: "02", title: "Human-in-the-Loop Thresholds", desc: "We define acceptable confidence bounds (e.g., 95%). Anything falling below this threshold is automatically routed to a human review queue." },
                  { num: "03", title: "Integration & Deployment", desc: "Models are containerized and deployed into your existing private cloud infrastructure via API endpoints with strict rate limiting." },
                  { num: "04", title: "Continuous Drift Detection", desc: "Automated telemetry flags when model performance degrades due to shifting real-world data, triggering automatic retraining cycles." }
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2563EB', fontFamily: 'monospace' }}>{step.num}</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', textAlign: 'center' }}>Data Flow Architecture</div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                 <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '2px', background: '#CBD5E1', transform: 'translateX(-50%)', zIndex: 0 }}></div>
                 
                 {[
                   { icon: Database, label: "Client Data Lake" },
                   { icon: Network, label: "Sanitization & Feature Engineering" },
                   { icon: Brain, label: "Acriotech Model Engine (Private Cloud)" },
                   { icon: ShieldCheck, label: "Confidence Verification Gateway" }
                 ].map((box, i) => (
                    <div key={i} style={{ position: 'relative', zIndex: 1, background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', width: '80%', margin: '0 auto' }}>
                      <div style={{ background: '#EEF2FF', padding: '0.75rem', borderRadius: '8px' }}>
                        <box.icon size={20} color="#4F46E5" />
                      </div>
                      <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>{box.label}</div>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specific Implementations */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#111827', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Industry Implementations</h2>
              <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6 }}>We tune our base models to understand the unique lexicons, compliance requirements, and risk tolerances of specific sectors.</p>
            </div>
          </div>
          
          <div className="layout-grid-3 gap-6 w-full">
            {[
              { ind: "Financial Services", title: "KYC & Compliance Automation", text: "Automating document verification, risk scoring, and anomalous transaction detection with 99.4% precision thresholds to satisfy regulatory audits." },
              { ind: "Healthcare", title: "Clinical Note Extraction", text: "Secure NLP pipelines that extract billing codes and diagnoses from unstructured physician notes, strictly governed under HIPAA constraints." },
              { ind: "Supply Chain", title: "Dynamic Demand Forecasting", text: "Processing thousands of external signals (weather, transit delays, market shifts) to adjust inventory buffer recommendations daily." }
            ].map((card, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>{card.ind}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Security */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <Lock size={40} color="#111827" style={{ margin: '0 auto 1.5rem auto' }} />
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Enterprise Tech Stack &amp; Security</h2>
             <p style={{ fontSize: '1.1rem', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>Your data is your IP. Our models are trained and hosted within your secure environments, guaranteeing absolute privacy.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1px', background: '#E5E7EB', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden' }}>
             {[
               { cat: "Frameworks", items: ["TensorFlow Extended", "PyTorch", "Scikit-Learn", "Hugging Face"] },
               { cat: "MLOps", items: ["Kubeflow", "MLflow", "Apache Airflow", "Seldon Core"] },
               { cat: "Infrastructure", items: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "NVIDIA Triton"] },
               { cat: "Data Layer", items: ["Snowflake", "Databricks", "Apache Kafka", "dbt"] }
             ].map((col, i) => (
                <div key={i} style={{ background: '#FFFFFF', padding: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{col.cat}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {col.items.map((item, j) => (
                       <li key={j} style={{ color: '#4B5563', fontSize: '0.95rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
