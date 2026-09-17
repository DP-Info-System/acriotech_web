"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Lightbulb, Zap, TrendingDown, RefreshCcw, LineChart } from "lucide-react";
import Link from "next/link";

const trends = [
  {
    title: "The Great 'Repatriation' from Cloud to Bare Metal",
    status: "Trending Up",
    icon: Zap,
    color: "#10B981",
    desc: "Following DHH's lead with 37signals, many mid-sized SaaS companies are realizing that AWS premiums for managed services outweigh the DevOps costs of racking their own servers.",
    takeaway: "If your compute workload is predictable and highly intensive, the cloud is no longer the default answer.",
    delta: "+24% adoption YoY",
    spark: [30, 32, 38, 36, 44, 48, 52, 55, 62, 68, 74, 82]
  },
  {
    title: "AI Coding Assistants (Copilot, Cursor, etc.)",
    status: "Mainstream Adoption",
    icon: RefreshCcw,
    color: "#3B82F6",
    desc: "We have moved past the hype phase. AI assistants are now a baseline requirement for engineering velocity, shifting the bottleneck from writing boilerplate to system architecture and code review.",
    takeaway: "Junior engineers must now index heavily on debugging and system design, as raw syntax generation is commoditized.",
    delta: "87% of surveyed teams",
    spark: [70, 72, 75, 78, 80, 82, 84, 85, 86, 87, 88, 89]
  },
  {
    title: "Blockchain for Enterprise Supply Chain",
    status: "Trending Down",
    icon: TrendingDown,
    color: "#EF4444",
    desc: "After billions invested in pilot programs, enterprise blockchain (like IBM TradeLens) is largely being shuttered. A centralized PostgreSQL database with strict RBAC and immutable append-only logs solves the problem faster and cheaper.",
    takeaway: "Avoid distributed ledger technology unless you operate in a truly trustless, multi-party adversarial environment.",
    delta: "-61% engagement YoY",
    spark: [78, 74, 68, 60, 55, 48, 42, 38, 34, 28, 22, 18]
  }
];

function TrendSignal({ color, spark, delta }: { color: string; spark: number[]; delta: string }) {
  const width = 220;
  const height = 110;
  const pad = 8;
  const max = Math.max(...spark);
  const min = Math.min(...spark);
  const range = max - min || 1;
  const points = spark.map((v, i) => {
    const x = pad + (i * (width - pad * 2)) / (spark.length - 1);
    const y = height - pad - ((v - min) / range) * (height - pad * 2 - 14);
    return { x, y };
  });
  const line = points.map(p => `${p.x},${p.y}`).join(' ');
  const area = `M${points[0].x},${points[0].y} L${points.slice(1).map(p => `${p.x},${p.y}`).join(' L')} L${points[points.length - 1].x},${height - pad} L${points[0].x},${height - pad} Z`;
  const last = points[points.length - 1];

  return (
    <div style={{
      background: '#F8FAFC',
      borderRadius: '16px',
      border: '1px solid #E2E8F0',
      padding: '1.75rem 1.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <LineChart size={16} color={color} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>12-Month Signal</span>
        </div>
        <span style={{
          fontSize: '0.8rem', fontWeight: 700, color,
          background: `${color}15`, padding: '0.3rem 0.75rem', borderRadius: '100px',
          whiteSpace: 'nowrap',
        }}>{delta}</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto' }} fill="none">
        <defs>
          <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f, i) => (
          <line key={i} x1={pad} y1={height - pad - ((height - pad * 2 - 14) * f)} x2={width - pad} y2={height - pad - ((height - pad * 2 - 14) * f)} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
        ))}
        <path d={area} fill={`url(#grad-${color.replace('#', '')})`} />
        <polyline points={line} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          (i % 2 === 0 || i === points.length - 1) ? (
            <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#FFFFFF" stroke={color} strokeWidth="1.5" />
          ) : null
        ))}
        <circle cx={last.x} cy={last.y} r="4" fill={color} />
        <circle cx={last.x} cy={last.y} r="7" fill={color} opacity="0.2" />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Enterprise adoption index</span>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}60` }} />
      </div>
    </div>
  );
}

export default function TechTrendsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-25%', right: '-10%', width: '45%', height: '70%', background: 'radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFFBEB', color: '#D97706', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Lightbulb size={16} /> Tech Trends
          </div>
          <h1 style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1.25rem' }}>
            Cutting through the <span style={{ color: '#D97706' }}>hype cycle.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, maxWidth: '720px' }}>
            Our unfiltered perspective on what is actually ready for enterprise production, what is an expensive distraction, and where the industry is inevitably heading.
          </p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #F1F5F9' }}>
            {[
              { label: 'Signals tracked', value: '3' },
              { label: 'Data range', value: '12 Mo' },
              { label: 'Updated', value: 'Quarterly' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
             {trends.map((trend, i) => (
               <div key={i} style={{
                 background: '#FFFFFF',
                 border: '1px solid #E2E8F0',
                 borderRadius: '24px',
                 padding: '3rem',
                 position: 'relative',
                 overflow: 'hidden',
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                 gap: '3rem',
                 alignItems: 'center',
                 boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
               }}>
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: trend.color }} />

                 <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                       <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', fontWeight: 700, color: '#CBD5E1' }}>{String(i + 1).padStart(2, '0')}</span>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: trend.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', background: `${trend.color}15`, padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                         <trend.icon size={16} /> {trend.status}
                       </div>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{trend.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>{trend.desc}</p>
                    <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #CBD5E1' }}>
                       <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Acriotech Takeaway</div>
                       <p style={{ color: '#334155', fontWeight: 500, margin: 0, lineHeight: 1.55, fontSize: '0.95rem' }}>{trend.takeaway}</p>
                    </div>
                 </div>

                 <TrendSignal color={trend.color} spark={trend.spark} delta={trend.delta} />
               </div>
             ))}

             <div style={{ textAlign: 'center', marginTop: '1rem' }}>
               <Link href="/contact-us" style={{
                 display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                 padding: '0.9rem 2rem', background: '#0F172A', color: '#FFFFFF',
                 borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
                 transition: 'background 150ms',
               }}
                 onMouseEnter={(e) => { e.currentTarget.style.background = '#2563EB'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.background = '#0F172A'; }}
               >
                 Discuss how these trends apply to your roadmap <ArrowRight size={16} />
               </Link>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}