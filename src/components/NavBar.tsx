"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

// --- Data ---
const generateUrl = (menu: string, text: string) => {
  const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const basePaths: Record<string, string> = {
    Solutions: '/solutions',
    Services: '/services',
    Work: '/work',
    Industries: '/industries',
    Insights: '/insights',
  };
  return `${basePaths[menu]}/${slug}`;
};

const featuredLinks: Record<string, string> = {
  Solutions: '/solutions',
  Services: '/services',
  Work: '/work/featured-projects',
  Industries: '/industries',
  Insights: '/insights/tech-trends',
};

const navData = {
  Solutions: {
    purpose: "What business problems do you solve?",
    items: ["Enterprise Software", "AI & Intelligent Automation", "Business Process Automation", "Digital Transformation", "Cloud & Infrastructure", "Legacy System Modernization", "Data & Analytics", "Custom Software Development"],
    featured: {
      title: "Where the problem lives, not where the solution sounds impressive",
      desc: "We scope solutions to fit how your business actually operates.",
      linkText: "View All Solutions"
    }
  },
  Services: {
    purpose: "How do you deliver solutions?",
    items: ["Software Consulting", "Product Discovery", "UI / UX Design", "Web Application Development", "Mobile App Development", "API Development & Integration", "Cloud Architecture", "DevOps & CI/CD", "AI Integration", "QA & Testing", "Maintenance & Support", "Dedicated Development Teams"],
    featured: {
      title: "One delivery path. Full accountability.",
      desc: "From the first discovery call to year three of production support.",
      linkText: "Explore All Services"
    }
  },
  Work: {
    purpose: "Explore our engineered solutions.",
    items: ["Featured Projects", "Our Clients", "Open Source"],
    featured: {
      title: "Production code, not pitch decks.",
      desc: "Real systems, real constraints, real results.",
      linkText: "View Case Studies"
    }
  },
  Industries: {
    purpose: "Domain expertise.",
    items: ["Manufacturing", "Healthcare", "Education", "Logistics", "Retail", "Financial Services", "Hospitality", "Government", "Startups"],
    featured: {
      title: "The problems look different. The engineering rigour does not.",
      desc: "Sector-specific context, consistent delivery standards.",
      linkText: "Explore Industries"
    }
  },
  Insights: {
    purpose: "Our content hub.",
    items: ["Case Studies", "News & Press", "Research Reports", "Tech Trends"],
    featured: {
      title: "Things worth reading.",
      desc: "Architecture decisions, lessons from production, and the occasional strong opinion.",
      linkText: "Explore Insights"
    }
  }
};

// --- Dynamic Item Previews for Mega-Menu Right Panel ---
const itemPreviews: Record<string, { title: string; desc: string; tag: string; type: 'mesh' | 'circuit' | 'dag' | 'vault' | 'core' }> = {
  // Solutions
  "Enterprise Software": { title: "Distributed Core Architecture", desc: "Event-driven microservices with sharded PostgreSQL and Kafka streams.", tag: "Distributed Systems", type: "mesh" },
  "AI & Intelligent Automation": { title: "Private AI Pipelines", desc: "Localized sovereign inference pipelines without third-party data egress.", tag: "Private Cloud AI", type: "dag" },
  "Business Process Automation": { title: "Traceable Operations", desc: "Automated compliance workflows replacing manual email approval chains.", tag: "Process Automation", type: "circuit" },
  "Digital Transformation": { title: "Decoupled Modernization", desc: "Strangler fig migrations ensuring continuous production uptime.", tag: "Modernization", type: "core" },
  "Cloud & Infrastructure": { title: "Terraform IaC & SRE", desc: "Immutable multi-region clusters with automated latency failover.", tag: "Cloud Infrastructure", type: "circuit" },
  "Legacy System Modernization": { title: "Incremental Decoupling", desc: "Module-by-module extraction under active business workloads.", tag: "System Modernization", type: "core" },
  "Data & Analytics": { title: "Unified Data Marts", desc: "Automated dbt pipelines and self-healing analytical warehouses.", tag: "Data Engineering", type: "dag" },
  "Custom Software Development": { title: "Full-Stack Pods", desc: "Complete product delivery with 100% intellectual property ownership.", tag: "Engineering Pods", type: "vault" },

  // Services
  "Software Consulting": { title: "Technical Judgment", desc: "Architecture decision records and system feasibility reviews.", tag: "Technical Advisory", type: "core" },
  "Product Discovery": { title: "Constraint Discovery", desc: "Connecting operational intent to testable technical specifications.", tag: "Product Discovery", type: "circuit" },
  "UI / UX Design": { title: "Enterprise Utility", desc: "Design systems engineered for WCAG AA compliance and dense data flows.", tag: "UI / UX Systems", type: "mesh" },
  "Web Application Development": { title: "High-Performance Web", desc: "Edge-rendered applications with sub-second Time to Interactive.", tag: "Web Applications", type: "circuit" },
  "Mobile App Development": { title: "Resilient Offline Mobile", desc: "Context-aware native experiences with reliable background synchronization.", tag: "Mobile Engineering", type: "mesh" },
  "API Development & Integration": { title: "Fault-Tolerant Gateways", desc: "gRPC and REST interfaces with circuit breakers and idempotency keys.", tag: "API Architecture", type: "dag" },
  "Cloud Architecture": { title: "Resilient Foundations", desc: "Multi-cloud Kubernetes topology designed for automated disaster recovery.", tag: "Cloud Architecture", type: "circuit" },
  "DevOps & CI/CD": { title: "Automated Delivery", desc: "Zero-touch CI/CD pipelines with ephemeral pull request environments.", tag: "DevOps & SRE", type: "dag" },
  "AI Integration": { title: "Model Governance", desc: "Production LLM integrations with strict token rate limiting and security gates.", tag: "AI Integration", type: "vault" },
  "QA & Testing": { title: "Chaos & Contract Testing", desc: "Multi-layer testing suites matching the exact cost and risk of failure.", tag: "Quality Assurance", type: "core" },
  "Maintenance & Support": { title: "Contractual SLAs", desc: "Direct-to-engineer Tier 3 support backed by 99.99% uptime guarantees.", tag: "Production Support", type: "vault" },
  "Dedicated Development Teams": { title: "Embedded Engineering Pods", desc: "Seamless pod integration into your agile sprint delivery channels.", tag: "Dedicated Pods", type: "mesh" },

  // Work
  "Featured Projects": { title: "Production Case Studies", desc: "High-concurrency systems deployed across banking, logistics, and healthcare.", tag: "Production Systems", type: "core" },
  "Our Clients": { title: "Enterprise Tenure", desc: "Organizations running consequential operations with an average 3+ year partnership.", tag: "Client Partnerships", type: "vault" },
  "Open Source": { title: "Engineering Standards", desc: "Cloud-native tooling and architectural frameworks published for the community.", tag: "Open Source", type: "circuit" },

  // Industries
  "Healthcare": { title: "HIPAA & Interoperability", desc: "Clinical data pipelines enforcing strict BAA agreements and FHIR/HL7 standards.", tag: "Healthcare", type: "vault" },
  "Financial Services": { title: "PCI-DSS High-Throughput", desc: "Sub-millisecond ledger transactions with cryptographic audit trails.", tag: "Financial Services", type: "core" },
  "Manufacturing": { title: "IIoT & Telemetry", desc: "Industrial sensor streaming with edge resilience and predictive maintenance.", tag: "Manufacturing", type: "circuit" },
  "Logistics": { title: "Routing & Fleet Dispatch", desc: "High-volume spatial routing algorithms with real-time waypoint synchronization.", tag: "Logistics", type: "dag" },
};

function MenuSchematicVisual({ type }: { type?: string }) {
  if (type === 'dag') {
    return (
      <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" preserveAspectRatio="xMidYMid meet" style={{ margin: "0.75rem 0", overflow: "visible" }}>
        <circle cx="30" cy="45" r="7" fill="#60A5FA" />
        <circle cx="100" cy="20" r="7" fill="#38BDF8" />
        <circle cx="100" cy="70" r="7" fill="#38BDF8" />
        <circle cx="170" cy="45" r="7" fill="#60A5FA" />
        <path d="M37 45 L93 20" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M37 45 L93 70" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M107 20 L163 45" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M107 70 L163 45" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="65" cy="32.5" r="3" fill="#93C5FD">
          <animate attributeName="cx" values="37;93" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="45;20" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }
  if (type === 'circuit') {
    return (
      <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" preserveAspectRatio="xMidYMid meet" style={{ margin: "0.75rem 0", overflow: "visible" }}>
        <path d="M20 45 H70 V25 H130 V65 H180" stroke="#4B61B8" strokeWidth="1.5" />
        <path d="M20 45 H60 V65 H140 V25 H180" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="70" cy="25" r="4" fill="#38BDF8" />
        <circle cx="130" cy="65" r="4" fill="#60A5FA" />
        <circle cx="140" cy="25" r="3" fill="#93C5FD" />
        <rect x="90" y="35" width="20" height="20" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === 'vault') {
    return (
      <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" preserveAspectRatio="xMidYMid meet" style={{ margin: "0.75rem 0", overflow: "visible" }}>
        <polygon points="100,10 160,35 160,70 100,85 40,70 40,35" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="100" cy="48" r="14" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M100 38 V58 M90 48 H110" stroke="#60A5FA" strokeWidth="1.5" />
      </svg>
    );
  }
  // Default / Mesh
  return (
    <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" preserveAspectRatio="xMidYMid meet" style={{ margin: "0.75rem 0", overflow: "visible" }}>
      <line x1="20" y1="20" x2="180" y2="20" stroke="#1E293B" strokeWidth="1" />
      <line x1="20" y1="70" x2="180" y2="70" stroke="#1E293B" strokeWidth="1" />
      <line x1="60" y1="10" x2="60" y2="80" stroke="#1E293B" strokeWidth="1" />
      <line x1="140" y1="10" x2="140" y2="80" stroke="#1E293B" strokeWidth="1" />
      <circle cx="60" cy="20" r="5" fill="#60A5FA" />
      <circle cx="140" cy="20" r="5" fill="#38BDF8" />
      <circle cx="60" cy="70" r="5" fill="#38BDF8" />
      <circle cx="140" cy="70" r="5" fill="#60A5FA" />
      <path d="M60 20 L140 70 M140 20 L60 70" stroke="#4B61B8" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

const getMenuDimensions = (menuKey: string) => {
  return { 
    width: 'min(860px, 96vw)', 
    minHeight: menuKey === 'Services' ? '330px' : '280px',
    columns: menuKey === 'Work' ? '1fr' : 'repeat(2, 1fr)', 
    featuredWidth: '280px' 
  };
};

export default function NavBar() {
  const pathname = usePathname();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeMegaMenu = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(null);
    setHoveredNav(null);
    setHoveredSubItem(null);
  };
  
  const navItems = ["Solutions", "Services", "Work", "Industries", "Insights", "About", "Contact"];

  const handleMouseEnter = (item: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setHoveredNav(item);
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    setHoveredNav(null);
    setHoveredSubItem(null);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center bg-transparent pt-4 px-4 sm:px-6 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'transparent',
        padding: '1rem clamp(1rem, 3vw, 1.5rem) 0 clamp(1rem, 3vw, 1.5rem)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none'
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="keep-flex-row w-full max-w-7xl h-16 pointer-events-auto shadow-md"
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          height: '4rem',
          padding: '0 clamp(1.25rem, 3vw, 2rem)',
          background: 'rgba(255, 255, 255, 0.96)',
          border: '1px solid rgba(226, 232, 240, 0.85)',
          boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.04)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2,
          position: 'relative',
          pointerEvents: 'auto'
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', overflow: 'hidden' }}>
            <img src="/custom-logo.svg" alt="Acriotech Logo Mark" width={28} height={28} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '2px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
            <img src="/acriotech-name-logo.png" alt="Acriotech" width={134} height={18} style={{ height: '18px', objectFit: 'contain' }} />
          </div>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            let linkHref = `/#${item.toLowerCase()}`;
            if (item === 'Solutions') linkHref = '/solutions';
            if (item === 'Services') linkHref = '/services';
            if (item === 'Work') linkHref = '/work';
            if (item === 'Industries') linkHref = '/industries';
            if (item === 'Insights') linkHref = '/insights';
            if (item === 'About') linkHref = '/about-us';
            if (item === 'Contact') linkHref = '/contact-us';

            const isActive = Boolean(
              pathname &&
              !linkHref.startsWith('/#') &&
              (pathname === linkHref || (linkHref !== '/' && pathname.startsWith(linkHref)))
            );

            return (
              <div key={item} style={{ position: 'relative' }} onMouseEnter={() => handleMouseEnter(item)}>
                {hoveredNav === item && (
                  <motion.div
                    layoutId="nav-pill"
                    layout
                    style={{ position: 'absolute', top: '-6px', bottom: '-6px', left: '-12px', right: '-12px', background: 'rgba(75, 97, 184, 0.05)', borderRadius: '6px', zIndex: -1, border: '1px solid rgba(75, 97, 184, 0.1)' }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
                <a 
                  href={linkHref} 
                  onClick={closeMegaMenu}
                  style={{ 
                    display: 'block', 
                    padding: '0', 
                    fontSize: '0.95rem', 
                    fontWeight: isActive ? 700 : 600, 
                    color: isActive ? '#4B61B8' : (hoveredNav === item ? '#0F172A' : '#5B6472'), 
                    transition: 'color 0.2s ease', 
                    textDecoration: 'none',
                    position: 'relative'
                  }}
                >
                  {item}
                  {isActive && (
                    <span 
                      style={{ 
                        position: 'absolute', 
                        bottom: '-6px', 
                        left: 0, 
                        right: 0, 
                        height: '2px', 
                        background: '#4B61B8', 
                        borderRadius: '2px' 
                      }} 
                    />
                  )}
                </a>
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          aria-label="Toggle mobile menu"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#0F172A', padding: '0.5rem' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              padding: '100px 2rem 4rem 2rem',
              overflowY: 'auto',
              pointerEvents: 'auto'
            }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navItems.map((item, i) => {
                let linkHref = `/#${item.toLowerCase()}`;
                if (item === 'Solutions') linkHref = '/solutions';
                if (item === 'Services') linkHref = '/services';
                if (item === 'Work') linkHref = '/work';
                if (item === 'Industries') linkHref = '/industries';
                if (item === 'Insights') linkHref = '/insights';
                if (item === 'About') linkHref = '/about-us';
                if (item === 'Contact') linkHref = '/contact-us';

                const hasSubmenu = Object.keys(navData).includes(item);
                const isExpanded = expandedMobileMenus.includes(item);

                return (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(15,23,42,0.05)', paddingBottom: '1rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <a 
                        href={linkHref} 
                        onClick={(e) => {
                          if (hasSubmenu) {
                            e.preventDefault();
                            setExpandedMobileMenus(prev => 
                              prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
                            );
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', textDecoration: 'none', letterSpacing: '-0.02em' }}
                      >
                        {item}
                      </a>
                      {hasSubmenu && (
                        <button 
                          aria-label="Toggle submenu"
                          onClick={() => setExpandedMobileMenus(prev => 
                            prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
                          )}
                          style={{ background: 'rgba(15,23,42,0.05)', border: 'none', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                            <ChevronDown size={24} />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu Expansion */}
                    <AnimatePresence>
                      {hasSubmenu && isExpanded && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingTop: '1.5rem', paddingLeft: '0.5rem' }}>
                            {navData[item as keyof typeof navData].items.map((sublink, subIndex) => (
                              <motion.a 
                                key={sublink} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                href={generateUrl(item, sublink)} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1.1rem', fontWeight: 500, color: '#475569', textDecoration: 'none' }}
                              >
                                {sublink}
                              </motion.a>
                            ))}
                            {navData[item as keyof typeof navData].featured && (
                              <motion.a 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navData[item as keyof typeof navData].items.length * 0.05 }}
                                href={featuredLinks[item]} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, color: '#4B61B8', textDecoration: 'none', marginTop: '0.5rem' }}
                              >
                                {navData[item as keyof typeof navData].featured.linkText} <ArrowRight size={16} />
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(15,23,42,0.05)' }}
            >
               <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F172A', color: '#fff', padding: '1rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', minHeight: '48px' }}>
                  Let's Talk
               </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu Dropdown */}
      <div className="desktop-nav" style={{ width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'center', position: 'absolute', top: '100%', left: 0, paddingTop: '12px', pointerEvents: activeMenu ? 'auto' : 'none' }}>
        <AnimatePresence mode="wait">
          {activeMenu && navData[activeMenu as keyof typeof navData] && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 1, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99, transition: { duration: 0.1 } }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              className="mega-menu-dropdown mega-menu-panel shadow-2xl border border-slate-200"
              style={{
                width: getMenuDimensions(activeMenu).width,
                minHeight: getMenuDimensions(activeMenu).minHeight,
                backgroundColor: '#ffffff', background: '#ffffff', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(15,23,42,0.08)',
                overflow: 'hidden',
                position: 'relative',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none'
              }}
            >
              <div className="mega-menu-content" style={{ display: 'flex', backgroundColor: '#ffffff', background: '#ffffff' }}>
                {/* Links Section with Blueprint Structural Hairlines */}
                <div 
                  className="mega-menu-links" 
                  style={{ 
                    flex: 1, 
                    minWidth: 0, 
                    padding: '1.75rem 2rem', 
                    backgroundColor: '#ffffff', 
                    background: '#ffffff', 
                    borderRight: '1px solid #E2E8F0',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.65rem', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                      {navData[activeMenu as keyof typeof navData].purpose}
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: getMenuDimensions(activeMenu).columns, 
                    gap: '0.4rem 0.6rem'
                  }}>
                    {navData[activeMenu as keyof typeof navData].items.map((link, idx) => {
                      const isHovered = hoveredSubItem === link;
                      return (
                        <a 
                          key={idx} 
                          href={generateUrl(activeMenu, link)} 
                          onClick={closeMegaMenu}
                          onMouseEnter={() => setHoveredSubItem(link)}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            gap: '0.5rem', 
                            fontSize: activeMenu === 'Services' ? '0.84rem' : '0.92rem', 
                            fontWeight: isHovered ? 700 : 600, 
                            color: isHovered ? '#4B61B8' : '#0F172A', 
                            background: isHovered ? 'rgba(75, 97, 184, 0.06)' : 'transparent',
                            border: isHovered ? '1px solid rgba(75, 97, 184, 0.2)' : '1px solid #F1F5F9', borderRadius: '6px',
                            padding: activeMenu === 'Services' ? '0.45rem 0.65rem' : '0.6rem 0.85rem',
                            textDecoration: 'none',
                            transition: 'all 0.18s ease',
                            cursor: 'pointer'
                          }} 
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', overflow: 'hidden' }}>
                            <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', fontWeight: 700, color: isHovered ? '#4B61B8' : '#94A3B8', flexShrink: 0 }}>
                              {idx < 9 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {link}
                            </span>
                          </div>
                          <span style={{ fontSize: '0.75rem', color: isHovered ? '#4B61B8' : 'transparent', transition: 'color 0.15s ease' }}>
                            &rarr;
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Reactive Right-Hand Navy Architectural Preview Card */}
                {(() => {
                  const activePreview = (hoveredSubItem && itemPreviews[hoveredSubItem]) || null;
                  const defaultFeatured = navData[activeMenu as keyof typeof navData].featured;

                  return (
                    <div 
                      style={{ 
                        width: getMenuDimensions(activeMenu).featuredWidth, 
                        flexShrink: 0, 
                        padding: '1.75rem 2rem', 
                        background: '#0F172A', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between', 
                        position: 'relative', 
                        overflow: 'hidden',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {/* Ambient Subtle Radial Glow */}


                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60A5FA', textTransform: 'uppercase' }}>
                            {activeMenu}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '0.5rem' }}>
                          {activePreview ? activePreview.title : (defaultFeatured?.title || activeMenu)}
                        </h4>
                        
                        <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                          {activePreview ? activePreview.desc : (defaultFeatured?.desc || '')}
                        </p>

                        {/* Animated SVG Technical Schematic */}
                        <MenuSchematicVisual type={activePreview?.type || 'mesh'} />
                      </div>

                      <div style={{ position: 'relative', zIndex: 2, paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <a 
                          href={hoveredSubItem ? generateUrl(activeMenu, hoveredSubItem) : featuredLinks[activeMenu]} 
                          onClick={closeMegaMenu}
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.45rem', 
                            fontSize: '0.84rem', 
                            fontWeight: 700, 
                            color: '#60A5FA', 
                            textDecoration: 'none',
                            transition: 'gap 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.gap = '0.7rem'}
                          onMouseLeave={(e) => e.currentTarget.style.gap = '0.45rem'}
                        >
                          {hoveredSubItem ? `Explore ${hoveredSubItem} \u2192` : `${defaultFeatured?.linkText || 'Explore'} \u2192`}
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SEO Links Block (Visually hidden, explicitly for search engine crawlers to discover all deep links) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'normal', borderWidth: 0, pointerEvents: 'none', zIndex: -1 }}>
        {Object.entries(navData).map(([menu, data]) => (
          <div key={`seo-${menu}`}>
            <h2>{menu}</h2>
            <ul>
              {data.items.map((link) => (
                <li key={`seo-link-${link}`}>
                  <a href={generateUrl(menu, link)}>{link}</a>
                </li>
              ))}
              {data.featured && (
                <li>
                  <a href={featuredLinks[menu]}>{data.featured.linkText}</a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}
