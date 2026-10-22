import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Activity, HardDrive, ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ManufacturingIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
                Heavy Industry & Manufacturing
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Software built for the <span style={{ color: '#2563EB' }}>factory floor.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build Industrial IoT (IIoT) platforms, supply chain visibility tools, and predictive maintenance pipelines that connect legacy machinery to modern cloud analytics.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Manufacturing Software <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Architectural Deliverables Spec */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #1E293B', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E293B', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', fontWeight: 700 }}>Telemetry Ingestion Spec</div>
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.95rem' }}>Industrial Edge Gateway v4.2</div>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', background: 'rgba(96, 165, 250, 0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                  OPC-UA / MQTT
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Sampling Rate</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F8FAFC' }}>10 kHz</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.25rem' }}>Local edge ring buffer</div>
                </div>
                <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Ingestion Latency</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#60A5FA' }}>&lt; 14ms</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.25rem' }}>Deterministic transport</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #1E293B', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94A3B8' }}>Protocol Translation</span>
                  <span style={{ color: '#F8FAFC', fontFamily: 'monospace' }}>Modbus TCP → MQTT Sparkplug B</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94A3B8' }}>Buffer Continuity</span>
                  <span style={{ color: '#F8FAFC', fontFamily: 'monospace' }}>72-Hour Offline Store-and-Forward</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94A3B8' }}>Anomaly Detection SLA</span>
                  <span style={{ color: '#F8FAFC', fontFamily: 'monospace' }}>P99 &lt; 50ms Edge Inference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: OT/IT Convergence (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <HardDrive color="#2563EB" /> Network Architecture
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F1F5F9', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #94A3B8', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>OT Network (Air-gapped)</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>SCADA, PLCs, Modbus/OPC UA</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2563EB', border: '1px solid #E2E8F0', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>Edge Gateway</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Data buffering, protocol translation (MQTT)</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ background: '#EFF6FF', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>IT Cloud Environment</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Data Lakes, ML Inference, Dashboards</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Bridging OT and IT</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Operational Technology (machinery) and Information Technology (cloud software) historically speak different languages. We build the secure edge architecture that safely transmits PLC data to the cloud.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Protocol Translation</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Converting legacy protocols like Modbus and OPC UA into modern MQTT streams.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Edge Computing</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Processing high-frequency sensor data locally before it saturates network bandwidth.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Predictive Maintenance (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Predictive Maintenance</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Moving from reactive repairs (fixing when broken) to prescriptive interventions (fixing before failure).</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Activity size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Telemetry Ingestion</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Streaming real-time vibration, temperature, and acoustic data into time-series databases.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Cpu size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Anomaly Detection</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Training machine learning models on historical failure data to identify hidden wear patterns.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldAlert size={32} color="#60A5FA" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Automated Dispatch</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Automatically generating work orders in your ERP when the failure threshold is approached.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Equipment Effectiveness (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Measurable OEE</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  We engineer manufacturing software specifically to drive Overall Equipment Effectiveness (OEE). By eliminating unplanned downtime and optimizing yield, these systems pay for themselves within months.
                </p>
              </div>
              <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Availability: Decreased unplanned mechanical failures",
                     "Performance: Real-time bottleneck identification on the line",
                     "Quality: Automated computer vision for defect sorting",
                     "Safety: Automated shut-off protocols for hazardous anomalies"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       <CheckCircle size={20} color="#2563EB" />
                       <span style={{ fontWeight: 600, color: '#374151', fontSize: '1rem' }}>{item}</span>
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
