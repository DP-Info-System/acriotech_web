"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, PenTool, Accessibility, Split, MousePointerClick, Sliders, Sparkles } from "lucide-react";
import Link from "next/link";

interface TokenOption {
  id: string;
  name: string;
  tokenKey: string;
  hex: string;
  textHex: string;
  contrast: string;
  wcag: "AAA" | "AA" | "AA Large";
}

const tokenOptions: TokenOption[] = [
  { id: "royal-blue", name: "Royal Blue", tokenKey: "color.brand.royal-blue", hex: "#2563EB", textHex: "#FFFFFF", contrast: "7.2:1", wcag: "AAA" },
  { id: "navy", name: "Deep Navy", tokenKey: "color.brand.navy", hex: "#0F172A", textHex: "#FFFFFF", contrast: "15.8:1", wcag: "AAA" },
  { id: "sky-blue", name: "Sky Blue", tokenKey: "color.brand.sky-blue", hex: "#38BDF8", textHex: "#0F172A", contrast: "3.4:1", wcag: "AA Large" },
  { id: "slate", name: "Technical Slate", tokenKey: "color.brand.slate", hex: "#64748B", textHex: "#FFFFFF", contrast: "4.6:1", wcag: "AA" }
];

export default function UIUXDesign() {
  const [selectedToken, setSelectedToken] = useState<TokenOption>(tokenOptions[0]);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [tokenCopied, setTokenCopied] = useState<boolean>(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '6rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2563EB' }}>
              HUMAN-SYSTEM INTERACTION &amp; ERGONOMICS
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Interfaces that make complex <br/><span style={{ color: '#2563EB' }}>work easier to perform.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            We do not just create superficial mockups. We design ergonomic control surfaces for enterprise workflows where users must synthesize high-density telemetry, execute critical transactions, and recover from failures without cognitive friction.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '0.9rem 2.2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              Review Our Design Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Double Diamond Process */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              RIGOROUS DESIGN METHODOLOGY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Double Diamond Process</h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', maxWidth: '640px', margin: '0 auto' }}>
              Oscillating between divergent exploration and convergent synthesis to eliminate cognitive debt before code is written.
            </p>
          </div>

          {/* Double Diamond SVG Vector Schematic Container */}
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <svg viewBox="0 0 800 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <defs>
                  <linearGradient id="diamondGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="diamondGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#2563EB" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="50" y1="110" x2="750" y2="110" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Diamond 1: Discover -> Define */}
                <polygon points="60,110 230,20 400,110 230,200" fill="url(#diamondGrad1)" stroke="#2563EB" strokeWidth="2" />
                <line x1="230" y1="20" x2="230" y2="200" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                {/* Diamond 2: Develop -> Deliver */}
                <polygon points="400,110 570,20 740,110 570,200" fill="url(#diamondGrad2)" stroke="#38BDF8" strokeWidth="2" />
                <line x1="570" y1="20" x2="570" y2="200" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                {/* Nodes & Labels */}
                <circle cx="60" cy="110" r="5" fill="#2563EB" />
                <circle cx="230" cy="20" r="5" fill="#2563EB" />
                <circle cx="230" cy="200" r="5" fill="#2563EB" />
                <circle cx="400" cy="110" r="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="570" cy="20" r="5" fill="#38BDF8" />
                <circle cx="570" cy="200" r="5" fill="#38BDF8" />
                <circle cx="740" cy="110" r="5" fill="#2563EB" />

                {/* Phase Annotations */}
                <text x="145" y="105" fill="#2563EB" fontSize="12" fontWeight="700">1. DISCOVER</text>
                <text x="145" y="125" fill="#64748B" fontSize="10">Divergent Need</text>

                <text x="315" y="105" fill="#2563EB" fontSize="12" fontWeight="700">2. DEFINE</text>
                <text x="315" y="125" fill="#64748B" fontSize="10">Convergent Spec</text>

                <text x="485" y="105" fill="#0284C7" fontSize="12" fontWeight="700">3. DEVELOP</text>
                <text x="485" y="125" fill="#64748B" fontSize="10">Divergent Prototypes</text>

                <text x="655" y="105" fill="#0284C7" fontSize="12" fontWeight="700">4. DELIVER</text>
                <text x="655" y="125" fill="#64748B" fontSize="10">Convergent System</text>
              </svg>
            </div>
          </div>

          {/* 4 Detailed Stage Cards */}
          <div className="layout-grid-4 gap-6">
            {[
              { icon: Split, title: "1. Discover", type: "Divergent Research", desc: "User observational studies, legacy screen auditing, cognitive walk-throughs, and competitive information architecture analysis." },
              { icon: MousePointerClick, title: "2. Define", type: "Convergent Synthesis", desc: "Consolidating user pain points into precise user journeys, task-completion flows, and validated interaction criteria." },
              { icon: Sparkles, title: "3. Develop", type: "Divergent Prototyping", desc: "High-density wireframes, rapid micro-prototyping, click-through testing, and stress-testing edge cases." },
              { icon: PenTool, title: "4. Deliver", type: "Convergent Production", desc: "Figma design tokens mapped 1:1 to React components, WCAG AA compliance verification, and engineer handoff." }
            ].map((step, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', position: 'relative' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                   <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563EB', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                     {step.type}
                   </span>
                 </div>
                 <step.icon size={26} color="#2563EB" style={{ marginBottom: '1rem' }} />
                 <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>{step.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Design System Token Laboratory */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div className="layout-split-hero gap-12 items-center">
             
             {/* Interactive Laboratory Preview Console */}
             <div style={{ background: '#1E293B', padding: '2.5rem', borderRadius: '16px', border: '1px solid #334155', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sliders size={18} color="#38BDF8" />
                    <span style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700 }}>
                      Design System Tokens
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Interactive Preview
                  </span>
                </div>

                {/* Swatches Selector */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Select Brand Accent Color:
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {tokenOptions.map((token) => {
                      const isSelected = selectedToken.id === token.id;
                      return (
                        <button
                          key={token.id}
                          onClick={() => setSelectedToken(token)}
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: token.hex,
                            border: isSelected ? '3px solid #FFFFFF' : '2px solid #475569',
                            outline: isSelected ? '2px solid #38BDF8' : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: isSelected ? '0 0 12px rgba(56, 189, 248, 0.5)' : 'none',
                            transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                          }}
                          title={`Select ${token.name}`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Token Values */}
                <div style={{ background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '2rem', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#94A3B8' }}>Token Key:</span>
                    <span style={{ color: '#38BDF8', fontWeight: 700 }}>{selectedToken.tokenKey}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#94A3B8' }}>Hex Code:</span>
                    <span style={{ color: '#F8FAFC' }}>{selectedToken.hex}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Contrast Ratio:</span>
                    <span style={{ color: '#34D399', fontWeight: 700 }}>{selectedToken.contrast} ({selectedToken.wcag})</span>
                  </div>
                </div>

                {/* Component Sandbox */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Live Component Preview:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button 
                      onClick={() => {
                        setButtonPressed(true);
                        setTimeout(() => setButtonPressed(false), 300);
                      }}
                      style={{ 
                        padding: '0.9rem 1.5rem', 
                        background: selectedToken.hex, 
                        color: selectedToken.textHex, 
                        border: 'none', 
                        borderRadius: '6px', 
                        textAlign: 'center', 
                        fontWeight: 700, 
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        transform: buttonPressed ? 'scale(0.98)' : 'scale(1)',
                        boxShadow: `0 4px 14px ${selectedToken.hex}44`
                      }}
                    >
                      Primary Action Button ({selectedToken.name})
                    </button>

                    <button 
                      style={{ 
                        padding: '0.9rem 1.5rem', 
                        background: 'transparent', 
                        color: selectedToken.hex === '#0F172A' ? '#CBD5E1' : selectedToken.hex, 
                        border: `1px solid ${selectedToken.hex}`, 
                        borderRadius: '6px', 
                        textAlign: 'center', 
                        fontWeight: 700, 
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      Secondary Outlined Action
                    </button>
                  </div>
                </div>
             </div>

             {/* Right Column: Narrative */}
             <div>
                <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  DESIGN SYSTEM ARCHITECTURE
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Scalable Design Systems
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We don't design isolated, fragile mockups. We build comprehensive, token-based design systems in Figma that map 1:1 with production React and Tailwind components. Every color, spacing increment, and typographic style is a traceable variable.
                </p>
                <div className="layout-grid-2 gap-4">
                  <div style={{ background: '#1E293B', padding: '1.25rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      Cross-Platform Parity
                    </div>
                    <p style={{ color: '#CBD5E1', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                      Identical token schemas across Web, iOS, and Android to eliminate visual drift.
                    </p>
                  </div>
                  <div style={{ background: '#1E293B', padding: '1.25rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      Developer Velocity
                    </div>
                    <p style={{ color: '#CBD5E1', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                      Engineers assemble UI from pre-tested primitives rather than rebuilding CSS ad-hoc.
                    </p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: Accessibility Standards */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <Accessibility size={36} color="#2563EB" style={{ margin: '0 auto 1.25rem auto' }} />
          <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            REGULATORY READINESS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem' }}>
            Accessible by Default, Not by Checklist
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#64748B', maxWidth: '720px', margin: '0 auto 3.5rem auto', lineHeight: 1.6 }}>
            Accessibility isn't an afterthought checklist before launch. It is a fundamental ergonomic requirement of enterprise software utilized across diverse workplace conditions.
          </p>
          
          <div className="layout-grid-3 gap-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem' }}>
            <div>
               <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>WCAG 2.1 AA</div>
               <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase' }}>Compliance Target</div>
            </div>
            <div>
               <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>100% Focus</div>
               <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase' }}>Keyboard Navigation</div>
            </div>
            <div>
               <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>4.5 : 1</div>
               <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase' }}>Minimum Text Contrast</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
