import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, TrendingDown, RefreshCcw } from "lucide-react";

const trends = [
  {
    title: "The Great 'Repatriation' from Cloud to Bare Metal",
    status: "Production Architecture",
    icon: Zap,
    desc: "Following DHH's lead with 37signals, many mid-sized SaaS companies are realizing that AWS premiums for managed services outweigh the DevOps costs of racking their own servers.",
    takeaway: "If your compute workload is predictable and highly intensive, the cloud is no longer the default answer."
  },
  {
    title: "AI Coding Assistants (Copilot, Cursor, etc.)",
    status: "Mainstream Adoption",
    icon: RefreshCcw,
    desc: "We have moved past the hype phase. AI assistants are now a baseline requirement for engineering velocity, shifting the bottleneck from writing boilerplate to system architecture and code review.",
    takeaway: "Senior engineers must now index heavily on debugging and system design, as raw syntax generation is commoditized."
  },
  {
    title: "Blockchain for Enterprise Supply Chain",
    status: "Declining Utility",
    icon: TrendingDown,
    desc: "After billions invested in pilot programs, enterprise blockchain is largely being shuttered. A centralized PostgreSQL database with strict RBAC and immutable append-only logs solves the problem faster and cheaper.",
    takeaway: "Avoid distributed ledger technology unless you operate in a truly trustless, multi-party adversarial environment."
  }
];

export default function TechTrendsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4B61B8', marginBottom: '1.25rem' }}>
            Tech Trends & Architecture
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Cutting through the <span style={{ color: '#2563EB' }}>hype cycle.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Our unfiltered perspective on what is actually ready for enterprise production, what is an expensive distraction, and where the industry is inevitably heading.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {trends.map((trend, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#2563EB' }}></div>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2563EB', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', background: 'rgba(37, 99, 235, 0.08)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                      <trend.icon size={14} /> {trend.status}
                    </div>
                 </div>
                 
                 <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{trend.title}</h2>
                 <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{trend.desc}</p>
                 
                 <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #64748B' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Acriotech Analysis</div>
                    <p style={{ color: '#334155', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>{trend.takeaway}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
