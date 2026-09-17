"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Network, Shield, Lock, Eye, FileCheck, Server, Activity, Zap, Database, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ACCENT = "#2563EB";
const ACCENT_DARK = "#1D4ED8";
const NAVY = "#0F172A";
const NAVY_800 = "#1E293B";
const NAVY_700 = "#334155";
const BLUE_TEXT = "#475569";
const BLUE_GRAY_MUTED = "#64748B";
const BLUE_GRAY_LIGHT = "#94A3B8";
const BORDER = "#E2E8F0";
const SECTION_TINT = "#F8FAFC";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
  }),
};

const pulseDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.8 + i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

function TechDivider() {
  return (
    <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, transparent 0%, ${BORDER} 20%, ${ACCENT} 50%, ${BORDER} 80%, transparent 100%)`, opacity: 0.35 }} />
  );
}

function EnterpriseHeroVisual() {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: "600px" }}>
      {/* Grid Background */}
      {Array.from({ length: 13 }).map((_, i) => (
        <motion.line key={`vg${i}`} x1={50 * i} y1="0" x2={50 * i} y2="400" stroke={BORDER} strokeWidth="0.5" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: i * 0.03 }} />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.line key={`hg${i}`} x1="0" y1={50 * i} x2="600" y2={50 * i} stroke={BORDER} strokeWidth="0.5" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: i * 0.03 }} />
      ))}

      {/* Core Infrastructure Layer - Bottom */}
      <motion.rect x="100" y="320" width="400" height="50" rx="6" fill={NAVY} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: EASE }} style={{ transformOrigin: "center" }} />
      <motion.text x="300" y="350" textAnchor="middle" fill={BLUE_GRAY_LIGHT} fontSize="10" fontWeight="600" letterSpacing="0.1em" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>INFRASTRUCTURE LAYER — KUBERNETES / SERVICE MESH</motion.text>

      {/* Compute Nodes */}
      {[
        { x: 140, y: 250, label: "COMPUTE", sub: "EKS Cluster", color: "#3B82F6" },
        { x: 300, y: 250, label: "MESSAGE BUS", sub: "Kafka / RabbitMQ", color: ACCENT },
        { x: 460, y: 250, label: "DATA STORE", sub: "PostgreSQL / Redis", color: "#10B981" },
      ].map((node, i) => (
        <motion.g key={i} custom={i} variants={pulseDot} initial="hidden" animate="visible">
          <rect x={node.x - 55} y={node.y - 25} width="110" height="50" rx="6" fill="#FFFFFF" stroke={BORDER} strokeWidth="1" />
          <rect x={node.x - 55} y={node.y - 25} width="110" height="3" rx="1" fill={node.color} />
          <circle cx={node.x - 40} cy={node.y + 2} r="3" fill={node.color} opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x={node.x + 10} y={node.y + 6} textAnchor="middle" fill={NAVY} fontSize="8" fontWeight="700" letterSpacing="0.05em">{node.label}</text>
          <text x={node.x + 10} y={node.y + 18} textAnchor="middle" fill={BLUE_GRAY_LIGHT} fontSize="7">{node.sub}</text>
        </motion.g>
      ))}

      {/* Connection lines from infrastructure to nodes */}
      {[
        { x1: 140, y1: 320, x2: 140, y2: 275 },
        { x1: 300, y1: 320, x2: 300, y2: 275 },
        { x1: 460, y1: 320, x2: 460, y2: 275 },
      ].map((line, i) => (
        <motion.line key={`cl${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }} />
      ))}

      {/* Data flow lines between nodes */}
      <motion.line x1="195" y1="250" x2="245" y2="250" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.5 }} />
      <motion.line x1="355" y1="250" x2="405" y2="250" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.5 }} />
      {/* Flow arrows */}
      <motion.polygon points="240,247 246,250 240,253" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />
      <motion.polygon points="400,247 406,250 400,253" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} />

      {/* Application Layer - Top */}
      <motion.rect x="120" y="100" width="360" height="70" rx="6" fill="#FFFFFF" stroke={ACCENT} strokeWidth="1.5" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} />
      <motion.text x="300" y="120" textAnchor="middle" fill={ACCENT} fontSize="8" fontWeight="700" letterSpacing="0.12em" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>APPLICATION LAYER</motion.text>

      {/* App nodes */}
      {[
        { x: 180, y: 142, label: "Auth / RBAC", color: "#3B82F6" },
        { x: 300, y: 142, label: "Core Services", color: ACCENT },
        { x: 420, y: 142, label: "API Gateway", color: "#10B981" },
      ].map((node, i) => (
        <motion.g key={`app${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 + i * 0.15 }}>
          <circle cx={node.x} cy={node.y} r="4" fill={node.color} />
          <circle cx={node.x} cy={node.y} r="4" fill={node.color} opacity="0.3">
            <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <text x={node.x + 8} y={node.y + 3} fill={BLUE_TEXT} fontSize="8" fontWeight="600">{node.label}</text>
        </motion.g>
      ))}

      {/* Connection lines from app layer to service nodes */}
      {[
        { x1: 180, y1: 170, x2: 140, y2: 225 },
        { x1: 300, y1: 170, x2: 300, y2: 225 },
        { x1: 420, y1: 170, x2: 460, y2: 225 },
      ].map((line, i) => (
        <motion.line key={`al${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0 + i * 0.12, duration: 0.5 }} />
      ))}

      {/* External Integrations - Top flanking */}
      {[
        { x: 50, y: 60, label: "Salesforce", color: BLUE_GRAY_LIGHT },
        { x: 250, y: 30, label: "SAP ERP", color: BLUE_GRAY_LIGHT },
        { x: 450, y: 60, label: "Custom Apps", color: BLUE_GRAY_LIGHT },
        { x: 550, y: 30, label: "Third-Party", color: BLUE_GRAY_LIGHT },
      ].map((ext, i) => (
        <motion.g key={`ext${i}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.1 }}>
          <rect x={ext.x - 35} y={ext.y - 12} width="70" height="24" rx="12" fill={SECTION_TINT} stroke={BORDER} strokeWidth="0.8" />
          <text x={ext.x} y={ext.y + 3} textAnchor="middle" fill={BLUE_GRAY_MUTED} fontSize="7" fontWeight="600">{ext.label}</text>
        </motion.g>
      ))}

      {/* Lines from externals to app layer */}
      {[
        { x1: 50, y1: 72, x2: 150, y2: 100 },
        { x1: 250, y1: 42, x2: 250, y2: 100 },
        { x1: 450, y1: 72, x2: 430, y2: 100 },
        { x1: 550, y1: 42, x2: 480, y2: 100 },
      ].map((line, i) => (
        <motion.line key={`el${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={BORDER} strokeWidth="0.8" strokeDasharray="2 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8 + i * 0.08, duration: 0.4 }} />
      ))}

      {/* Security Shield overlay */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        <rect x="240" y="190" width="120" height="20" rx="4" fill="#EBF1FE" stroke={ACCENT} strokeWidth="0.5" opacity="0.85" />
        <text x="300" y="203" textAnchor="middle" fill={ACCENT_DARK} fontSize="7" fontWeight="700" letterSpacing="0.05em">TLS 1.3 / mTLS</text>
      </motion.g>

      {/* Status indicator */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <circle cx="555" cy="388" r="5" fill="#22C55E">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="540" y="391" textAnchor="end" fill={BLUE_GRAY_LIGHT} fontSize="7" fontWeight="600">SYSTEM HEALTH</text>
      </motion.g>
    </svg>
  );
}

function IntegrationDiagram() {
  return (
    <div style={{ background: NAVY, borderRadius: "16px", padding: "2rem", border: `1px solid ${NAVY_800}`, position: "relative", overflow: "hidden" }}>
      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}>
        {/* Central Message Bus */}
        <motion.rect x="150" y="130" width="200" height="50" rx="8" fill={NAVY_800} stroke={ACCENT} strokeWidth="1.5" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ transformOrigin: "250px 155px" }} />
        <motion.text x="250" y="152" textAnchor="middle" fill={ACCENT} fontSize="9" fontWeight="700" letterSpacing="0.08em" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>ENTERPRISE MESSAGE BUS</motion.text>
        <motion.text x="250" y="168" textAnchor="middle" fill={BLUE_GRAY_LIGHT} fontSize="7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>Kafka / RabbitMQ / Event Streaming</motion.text>

        {/* Top row: External systems */}
        {[
          { x: 80, y: 30, label: "Salesforce", sub: "CRM Data", icon: "S" },
          { x: 250, y: 30, label: "SAP ERP", sub: "Finance / HR", icon: "E" },
          { x: 420, y: 30, label: "Custom Web App", sub: "Internal Portal", icon: "W" },
        ].map((sys, i) => (
          <motion.g key={`sys${i}`} custom={i} variants={fadeUp} initial="hidden" animate="visible">
            <rect x={sys.x - 50} y={sys.y} width="100" height="48" rx="8" fill={NAVY_800} stroke={NAVY_700} strokeWidth="0.8" />
            <circle cx={sys.x - 30} cy={sys.y + 24} r="10" fill={NAVY} stroke={BLUE_TEXT} strokeWidth="0.8" />
            <text x={sys.x - 30} y={sys.y + 27} textAnchor="middle" fill={ACCENT} fontSize="8" fontWeight="700">{sys.icon}</text>
            <text x={sys.x + 16} y={sys.y + 20} textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700">{sys.label}</text>
            <text x={sys.x + 16} y={sys.y + 32} textAnchor="middle" fill={BLUE_GRAY_MUTED} fontSize="6.5">{sys.sub}</text>
          </motion.g>
        ))}

        {/* Bottom row: Internal services */}
        {[
          { x: 80, y: 250, label: "Auth Service", sub: "RBAC / MFA", color: "#3B82F6" },
          { x: 250, y: 250, label: "Core Engine", sub: "Business Logic", color: ACCENT },
          { x: 420, y: 250, label: "API Gateway", sub: "REST / GraphQL", color: "#10B981" },
        ].map((svc, i) => (
          <motion.g key={`svc${i}`} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible">
            <rect x={svc.x - 50} y={svc.y} width="100" height="48" rx="8" fill={NAVY_800} stroke={NAVY_700} strokeWidth="0.8" />
            <rect x={svc.x - 50} y={svc.y} width="100" height="2.5" rx="1" fill={svc.color} />
            <circle cx={svc.x - 30} cy={svc.y + 28} r="3" fill={svc.color} opacity="0.5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            <text x={svc.x + 12} y={svc.y + 21} textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700">{svc.label}</text>
            <text x={svc.x + 12} y={svc.y + 33} textAnchor="middle" fill={BLUE_GRAY_MUTED} fontSize="6.5">{svc.sub}</text>
          </motion.g>
        ))}

        {/* Connection lines: External -> Bus */}
        {[
          { x1: 80, y1: 78, x2: 200, y2: 130 },
          { x1: 250, y1: 78, x2: 250, y2: 130 },
          { x1: 420, y1: 78, x2: 300, y2: 130 },
        ].map((line, i) => (
          <motion.g key={`cl1${i}`}>
            <motion.line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={BLUE_TEXT} strokeWidth="0.8" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }} />
            {/* Arrow */}
            <motion.circle cx={(line.x1 + line.x2) / 2} cy={(line.y1 + line.y2) / 2} r="2" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.4 + i * 0.2, duration: 1.5, repeat: Infinity }} />
          </motion.g>
        ))}

        {/* Connection lines: Bus -> Services */}
        {[
          { x1: 200, y1: 180, x2: 80, y2: 250 },
          { x1: 250, y1: 180, x2: 250, y2: 250 },
          { x1: 300, y1: 180, x2: 420, y2: 250 },
        ].map((line, i) => (
          <motion.g key={`cl2${i}`}>
            <motion.line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={BLUE_TEXT} strokeWidth="0.8" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0 + i * 0.15, duration: 0.6 }} />
            <motion.circle cx={(line.x1 + line.x2) / 2} cy={(line.y1 + line.y2) / 2} r="2" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.6 + i * 0.2, duration: 1.5, repeat: Infinity }} />
          </motion.g>
        ))}

        {/* API/Integration layer label */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
          <rect x="180" y="100" width="140" height="16" rx="3" fill={NAVY_800} stroke={NAVY_700} strokeWidth="0.5" />
          <text x="250" y="111" textAnchor="middle" fill={BLUE_GRAY_MUTED} fontSize="6.5" fontWeight="600" letterSpacing="0.05em">API / INTEGRATION LAYER</text>
        </motion.g>

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
          <rect x="180" y="215" width="140" height="16" rx="3" fill={NAVY_800} stroke={NAVY_700} strokeWidth="0.5" />
          <text x="250" y="226" textAnchor="middle" fill={BLUE_GRAY_MUTED} fontSize="6.5" fontWeight="600" letterSpacing="0.05em">SERVICE / HANDLER LAYER</text>
        </motion.g>

        {/* Status indicator */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
          <circle cx="470" cy="320" r="4" fill="#22C55E">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="460" y="323" textAnchor="end" fill={BLUE_TEXT} fontSize="6" fontWeight="600">LIVE</text>
        </motion.g>
      </svg>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "300px", height: "auto" }}>
      {/* Monitoring grid background */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`mg${i}`} x1={25 * i} y1="0" x2={25 * i} y2="200" stroke={NAVY_800} strokeWidth="0.5" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`mh${i}`} x1="0" y1={25 * i} x2="300" y2={25 * i} stroke={NAVY_800} strokeWidth="0.5" />
      ))}

      {/* Uptime bar chart */}
      {Array.from({ length: 24 }).map((_, i) => {
        const h = 30 + Math.random() * 50;
        return (
          <motion.rect key={`bar${i}`} x={10 + i * 12} y={140 - h} width="8" height={h} rx="2" fill={i < 18 ? "#22C55E" : NAVY_700} opacity={0.3 + Math.random() * 0.5} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }} style={{ transformOrigin: `${14 + i * 12}px 140px` }} />
        );
      })}

      {/* Connection nodes */}
      {[
        { x: 60, y: 160, label: "Node A", status: "ok" },
        { x: 150, y: 160, label: "Node B", status: "ok" },
        { x: 240, y: 160, label: "Node C", status: "ok" },
      ].map((node, i) => (
        <motion.g key={`node${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 + i * 0.15 }}>
          <line x1={node.x} y1="140" x2={node.x} y2="152" stroke={NAVY_700} strokeWidth="1" />
          <circle cx={node.x} cy="155" r="4" fill={node.status === "ok" ? "#22C55E" : "#EF4444"}>
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
          <text x={node.x} y={node.y + 12} textAnchor="middle" fill={BLUE_TEXT} fontSize="6" fontWeight="600">{node.label}</text>
        </motion.g>
      ))}

      {/* Labels */}
      <motion.text x="150" y="20" textAnchor="middle" fill={BLUE_GRAY_LIGHT} fontSize="7" fontWeight="600" letterSpacing="0.1em" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>24H SERVICE UPTIME</motion.text>

      {/* 99.99% label */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <rect x="115" y="35" width="70" height="22" rx="4" fill={NAVY_800} stroke="#22C55E" strokeWidth="0.5" />
        <text x="150" y="50" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="700">99.99%</text>
      </motion.g>

      {/* Incidents */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
        <text x="20" y="190" fill={BLUE_TEXT} fontSize="6" fontWeight="600">SEV-1: 0</text>
        <text x="110" y="190" fill={BLUE_TEXT} fontSize="6" fontWeight="600">SEV-2: 0</text>
        <text x="200" y="190" fill={BLUE_TEXT} fontSize="6" fontWeight="600">SEV-3: 2</text>
      </motion.g>
    </svg>
  );
}

export default function EnterpriseSoftware() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#FAFAFA" }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: "var(--spacing-section)", paddingBottom: "3rem", background: "#FFFFFF", borderBottom: "1px solid #EAEAEA" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "3rem", alignItems: "center" }}>
            {/* Hero Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#F1F5F9", color: NAVY, padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem", border: `1px solid ${BORDER}` }}>
                <Building2 size={16} color={ACCENT} /> Enterprise Grade
              </div>
              <h1 style={{ fontSize: "var(--font-hero)", fontWeight: 800, color: NAVY, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "1.25rem" }}>
                Software that bears the <br /><span style={{ color: ACCENT }}>weight of your business.</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: BLUE_TEXT, lineHeight: 1.65, marginBottom: "2rem", maxWidth: "540px" }}>
                When failure is not an option. We build and maintain complex, highly secure enterprise systems designed for massive concurrency, strict compliance, and high availability.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact-us" style={{ background: NAVY, color: "#FFFFFF", padding: "0.9rem 1.75rem", borderRadius: "8px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "background 150ms", fontSize: "0.95rem" }}>
                  Speak with a Principal Architect <ArrowRight size={18} />
                </Link>
              </div>
              {/* Trust indicators */}
              <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${BORDER}` }}>
                {[
                  { label: "Active Systems", value: "40+" },
                  { label: "Uptime SLA", value: "99.99%" },
                  { label: "Data Processed", value: "2B+" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em" }}>{stat.value}</div>
                    <div style={{ fontSize: "0.75rem", color: BLUE_GRAY_LIGHT, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
              <EnterpriseHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <TechDivider />

      {/* Complex System Integration */}
      <section style={{ padding: "var(--spacing-section) 0", background: SECTION_TINT }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "3rem", alignItems: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                <Network size={14} /> Integration Architecture
              </div>
              <h2 style={{ fontSize: "var(--font-h2)", fontWeight: 800, color: NAVY, marginBottom: "1.25rem" }}>Complex System Integration</h2>
              <p style={{ fontSize: "1.05rem", color: BLUE_TEXT, lineHeight: 1.7, marginBottom: "2rem" }}>Enterprise software rarely exists in a vacuum. It must communicate flawlessly with legacy mainframes, modern SaaS APIs, and third-party vendors without dropping a single packet.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { icon: <Zap size={18} />, title: "Event-Driven Architecture", desc: "Decoupling systems using Kafka or RabbitMQ to ensure high-throughput, fault-tolerant message delivery." },
                  { icon: <Server size={18} />, title: "Legacy API Wrappers", desc: "Building secure REST/GraphQL wrappers around SOAP or direct-database legacy systems to safely expose data." },
                  { icon: <Activity size={18} />, title: "Real-Time Data Pipelines", desc: "Streaming ETL pipelines that process millions of events per second with guaranteed exactly-once delivery semantics." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", background: "#EBF1FE", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: ACCENT }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: NAVY, marginBottom: "0.15rem" }}>{item.title}</h4>
                      <p style={{ color: BLUE_GRAY_MUTED, fontSize: "0.88rem", lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: EASE } } }}>
              <IntegrationDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      <TechDivider />

      {/* Built for the Auditor */}
      <section style={{ padding: "var(--spacing-section) 0", background: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <motion.div style={{ textAlign: "center", marginBottom: "3.5rem" }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              <Shield size={14} color={ACCENT} /> Security & Compliance
            </div>
            <h2 style={{ fontSize: "var(--font-h2)", fontWeight: 800, color: NAVY, marginBottom: "0.75rem" }}>Built for the Auditor</h2>
            <p style={{ fontSize: "1.05rem", color: BLUE_GRAY_MUTED, maxWidth: "560px", margin: "0 auto" }}>Compliance is baked into our CI/CD pipelines, not added as an afterthought.</p>
          </motion.div>

          {/* Security principles as connected cards */}
          <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "1.25rem", position: "relative", zIndex: 1 }}>
              {[
                { icon: <Database size={22} />, title: "Data at Rest", desc: "AES-256 encryption across all databases and block storage by default.", color: "#3B82F6" },
                { icon: <Lock size={22} />, title: "Data in Transit", desc: "TLS 1.3 enforced for all external and internal microservice communications.", color: ACCENT },
                { icon: <Eye size={22} />, title: "Access Control", desc: "Role-Based Access Control (RBAC) with mandated Multi-Factor Authentication.", color: "#10B981" },
                { icon: <FileCheck size={22} />, title: "Audit Logging", desc: "Immutable, append-only logs for all sensitive transactions and access events.", color: "#64748B" },
              ].map((sec, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: EASE } } }} whileHover={{ y: -4, transition: { duration: 0.2 } }} style={{ background: "#FFFFFF", padding: "2rem 1.5rem", borderRadius: "12px", border: `1px solid ${BORDER}`, position: "relative", overflow: "hidden", cursor: "default", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                  {/* Top accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2.5px", background: sec.color, opacity: 0.75 }} />
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${sec.color}10`, border: `1px solid ${sec.color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: sec.color }}>
                    {sec.icon}
                  </div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: NAVY, marginBottom: "0.5rem" }}>{sec.title}</h4>
                  <p style={{ color: BLUE_GRAY_MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{sec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechDivider />

      {/* Support SLAs */}
      <section className="dark-section" style={{ padding: "var(--spacing-section) 0", background: NAVY, color: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "3rem", alignItems: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 700, color: "#93C5FD", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                <Activity size={14} color="#93C5FD" /> Operations
              </div>
              <h2 style={{ fontSize: "var(--font-h2)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem" }}>Unwavering Support SLAs</h2>
              <p style={{ fontSize: "1.05rem", color: BLUE_GRAY_LIGHT, lineHeight: 1.7, marginBottom: "2rem" }}>Enterprise software requires enterprise backing. Our dedicated support teams provide guaranteed response times for critical severity incidents.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { severity: "Severity 1", desc: "Critical System Down", time: "15 Minute Response", color: "#EF4444" },
                  { severity: "Severity 2", desc: "Core Function Impaired", time: "1 Hour Response", color: "#22C55E" },
                  { severity: "Severity 3", desc: "Minor Bug / Question", time: "24 Hour Response", color: "#38BDF8" },
                ].map((sla, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.1, duration: 0.5 } } }} style={{ background: NAVY_800, borderRadius: "12px", border: `1px solid ${NAVY_700}`, padding: "1.25rem 1.5rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "center" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.15rem" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: sla.color, boxShadow: `0 0 8px ${sla.color}40` }}>
                          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                        </div>
                        <span style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem" }}>{sla.severity}</span>
                      </div>
                      <span style={{ color: BLUE_GRAY_MUTED, fontSize: "0.85rem" }}>{sla.desc}</span>
                    </div>
                    <div style={{ color: sla.color, fontWeight: 800, fontSize: "0.9rem", textAlign: "right", whiteSpace: "nowrap" }}>{sla.time}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } } }} style={{ display: "flex", justifyContent: "center" }}>
              <MonitoringVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <TechDivider />

      {/* CTA Section */}
      <section style={{ padding: "clamp(4rem, 6vw, 6rem) 0", background: "#FFFFFF", borderBottom: "1px solid #EAEAEA" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: NAVY, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Ready to build systems that <span style={{ color: ACCENT }}>scale</span>?
            </h2>
            <p style={{ fontSize: "1.05rem", color: BLUE_GRAY_MUTED, lineHeight: 1.7, marginBottom: "2rem", maxWidth: "580px", margin: "0 auto 2rem auto" }}>
              From complex integrations to auditor-ready compliance — we engineer software that operates at enterprise scale with zero compromise.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" style={{ background: NAVY, color: "#FFFFFF", padding: "0.9rem 1.75rem", borderRadius: "8px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "background 150ms", fontSize: "0.95rem" }}>
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link href="/solutions" style={{ background: "transparent", color: NAVY, padding: "0.9rem 1.75rem", borderRadius: "8px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1.5px solid ${BORDER}`, transition: "border-color 150ms, background 150ms", fontSize: "0.95rem" }}>
                View All Solutions
              </Link>
            </div>
            {/* Micro trust signals */}
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: `1px solid #F1F5F9`, flexWrap: "wrap" }}>
              {["SOC 2 Compliant", "ISO 27001", "GDPR Ready", "24/7 Monitoring"].map((badge, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.75rem", color: BLUE_GRAY_LIGHT, fontWeight: 500 }}>
                  <CheckCircle size={13} color="#22C55E" /> {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
