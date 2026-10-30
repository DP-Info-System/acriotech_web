const fs = require('fs');
const path = require('path');

// 1. Append Bento styles to globals.css
const cssPath = path.join(__dirname, '../src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

if (!css.includes('.bento-grid')) {
  const bentoCss = `

/* ==========================================================================
   MODERN BENTO GRID ARCHITECTURE (2026 SaaS Pattern)
   ========================================================================== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.bento-cell {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md, 12px);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justifyContent: space-between;
}

.bento-cell:hover {
  transform: translateY(-3px);
  border-color: rgba(56, 189, 248, 0.45);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 30px -5px rgba(56, 189, 248, 0.15);
}

.bento-col-12 { grid-column: span 12 / span 12; }
.bento-col-8 { grid-column: span 12 / span 12; }
.bento-col-7 { grid-column: span 12 / span 12; }
.bento-col-5 { grid-column: span 12 / span 12; }
.bento-col-4 { grid-column: span 12 / span 12; }

@media (min-width: 1024px) {
  .bento-col-8 { grid-column: span 8 / span 8; }
  .bento-col-7 { grid-column: span 7 / span 7; }
  .bento-col-5 { grid-column: span 5 / span 5; }
  .bento-col-4 { grid-column: span 4 / span 4; }
}
`;
  css += bentoCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('globals.css updated with Bento grid styles');
}

// 2. Update page.tsx with the authentic Bento Box layout
const pagePath = path.join(__dirname, '../src/app/page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

const bentoJsx = `{/* Verifiable Reliability Modular Bento Box Grid */}
          <div className="bento-grid w-full" style={{ position: 'relative', zIndex: 1 }}>
            
            {/* Bento Cell 1 (Span 7): Flagship Consequential Platforms */}
            <div className="bento-cell bento-col-7" style={{ padding: '2.5rem 2.25rem' }}>
              {/* Subtle background schematic */}
              <div style={{ position: 'absolute', top: 15, right: 20, opacity: 0.12, pointerEvents: 'none', width: '220px', height: '140px' }}>
                <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
                  <circle cx="50" cy="40" r="16" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="170" cy="40" r="16" stroke="#60A5FA" strokeWidth="1.5" />
                  <circle cx="110" cy="100" r="18" stroke="#93C5FD" strokeWidth="1.5" />
                  <path d="M66 40 L154 40" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M62 52 L98 88" stroke="#60A5FA" strokeWidth="1.5" />
                  <path d="M158 52 L122 88" stroke="#60A5FA" strokeWidth="1.5" />
                </svg>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#22C55E' }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Production Verified
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#93C5FD', fontWeight: 700, fontFamily: 'monospace' }}>
                    99.994% SLA
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
                  80+ <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#93C5FD' }}>Platforms</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                  Active Production Platforms
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65, maxWidth: '520px', margin: 0 }}>
                  High-throughput, event-driven architectures running under mission-critical enterprise workloads across financial services, healthcare, and global logistics.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem' }}>
                {['Go & Microservices', 'Apache Kafka Streams', 'Sharded PostgreSQL', 'Active-Active Failover'].map((pill, idx) => (
                  <span key={idx} style={{ padding: '0.25rem 0.65rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#CBD5E1', fontSize: '0.78rem', fontWeight: 600 }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Cell 2 (Span 5): 12+ Years Tenure */}
            <div className="bento-cell bento-col-5" style={{ padding: '2.5rem 2.25rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '0.25rem 0.65rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Tenure &amp; Stability
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
                  12+ <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#93C5FD' }}>Years</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                  Continuous Delivery Since 2012
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                  Founded on unyielding engineering rigor. Same core technical leadership, zero speculative pivots, and direct-to-engineer accountability.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                  <span style={{ color: '#94A3B8' }}>Staff Level:</span>
                  <span style={{ color: '#38BDF8', fontWeight: 700 }}>100% Senior Pods</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                  <span style={{ color: '#94A3B8' }}>Avg Partnership:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 700 }}>3+ Consecutive Years</span>
                </div>
              </div>
            </div>

            {/* Bento Cell 3 (Span 5): 40+ Dedicated Staff Engineers */}
            <div className="bento-cell bento-col-5" style={{ padding: '2.5rem 2.25rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(168, 85, 247, 0.12)', border: '1px solid rgba(168, 85, 247, 0.25)', padding: '0.25rem 0.65rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C084FC', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Dedicated Engineering Staff
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
                  40+ <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#93C5FD' }}>Engineers</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                  Principal &amp; Senior Pods
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                  Embedded technical pods that commit directly into your repositories, attend your sprint ceremonies, and own system outcomes end-to-end.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                {['AWS Architect', 'Kubernetes CKA', 'GCP Professional', 'Security Audited'].map((cert, idx) => (
                  <span key={idx} style={{ padding: '0.2rem 0.55rem', borderRadius: '6px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', color: '#E9D5FF', fontSize: '0.75rem', fontWeight: 600 }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Cell 4 (Span 7): 100% Full IP Sovereignty */}
            <div className="bento-cell bento-col-7" style={{ padding: '2.5rem 2.25rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.25)', padding: '0.25rem 0.65rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Code Sovereignty
                  </span>
                </div>

                <div style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
                  100% <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#4ADE80' }}>IP Handover</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.015em', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                  Zero Vendor Lock-In &amp; Clean Handover
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65, maxWidth: '540px', margin: 0 }}>
                  Every line of code, Dockerfile, Terraform configuration, and architectural decision record is committed directly into your corporate repositories from sprint zero.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <div style={{ color: '#60A5FA', fontSize: '0.82rem', fontWeight: 700 }}>Client Git Repos</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.72rem', marginTop: '0.15rem' }}>Direct branch ownership</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                  <div style={{ color: '#4ADE80', fontSize: '0.82rem', fontWeight: 700 }}>Terraform IaC</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.72rem', marginTop: '0.15rem' }}>Reproducible environments</div>
                </div>
              </div>
            </div>

          </div>`;

// Replace the flat 4-grid with Bento Box Grid
pageCode = pageCode.replace(
  /\{\/\*\s*Verifiable Reliability Distinct Metric Cards with Guaranteed Spacing\s*\*\/\}[\s\S]*?\{\s*stat\.detail\s*\}\s*<\/div>\s*<\/div>\s*\)\)\}\s*<\/div>/,
  bentoJsx
);

fs.writeFileSync(pagePath, pageCode, 'utf8');
console.log('page.tsx successfully updated with Bento Box Grid');

