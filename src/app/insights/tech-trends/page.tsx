import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Zap, TrendingDown, RefreshCcw, Compass, ArrowRight, ShieldCheck } from "lucide-react";

interface TrendItem {
  id: string;
  radarCode: string;
  title: string;
  trajectoryStage: number; // 1: Declining Utility, 2: Evaluating, 3: Active Migration, 4: Production Standard
  stageName: string;
  statusBadge: string;
  badgeColor: string;
  icon: typeof Zap;
  summary: string;
  metrics: { label: string; value: string }[];
  directive: string;
  archVerdict: string;
}

const radarStages = [
  { index: 1, label: "Declining Utility" },
  { index: 2, label: "Evaluating" },
  { index: 3, label: "Active Migration" },
  { index: 4, label: "Production Standard" },
];

const trends: TrendItem[] = [
  {
    id: "repatriation",
    radarCode: "RADAR-INFRA-01",
    title: "The Great 'Repatriation' from Cloud to Bare Metal",
    trajectoryStage: 3,
    stageName: "Active Migration",
    statusBadge: "Strategic Rebalance",
    badgeColor: "#38BDF8",
    icon: Zap,
    summary:
      "Following high-profile enterprise infrastructure retrospectives, mid-scale workloads with predictable high-IOPS compute are abandoning multi-tenant cloud markups. Raw dedicated metal yields 3x-5x compute economics without managed hypervisor penalties.",
    metrics: [
      { label: "Cost Delta", value: "-62% Compute TCO" },
      { label: "P99 IOPS Gain", value: "4.2x Raw Throughput" },
      { label: "Breakeven Scale", value: "$40k/mo Cloud Spend" },
    ],
    directive:
      "If your compute workload is predictable, compute-heavy, and exceeds $35k/mo on AWS/GCP, the cloud is an operational tax. Maintain edge ingress on cloud, but migrate core relational persistence and high-density worker clusters to leased bare metal or private colocation.",
    archVerdict: "HYBRID COLOCATION RECOMMENDED",
  },
  {
    id: "ai-coding",
    radarCode: "RADAR-TOOLING-02",
    title: "Autonomous AI Assistants & Neural Code Generation",
    trajectoryStage: 4,
    stageName: "Production Standard",
    statusBadge: "Enforced Baseline",
    badgeColor: "#60A5FA",
    icon: RefreshCcw,
    summary:
      "AI code synthesis is no longer experimental tooling. It represents an unavoidable velocity prerequisite. However, the engineering bottleneck has aggressively shifted: syntax writing is virtually free, while deep architectural verification, concurrency auditing, and security fuzzing are 10x more critical.",
    metrics: [
      { label: "PR Velocity", value: "+38% Boilerplate Rate" },
      { label: "Review Depth", value: "2.4x Static Rigor Req." },
      { label: "Hallucination Risk", value: "Zero-Trust CI Enforced" },
    ],
    directive:
      "Equip engineering pods with contextual LLM tooling, but enforce hard architectural gates. Never allow unverified generative PRs to merge without automated mutation testing, static security lineage, and human Principal sign-off.",
    archVerdict: "EXPEDITE WITH RIGOROUS CI GATES",
  },
  {
    id: "blockchain-enterprise",
    radarCode: "RADAR-CONSENSUS-03",
    title: "Enterprise Blockchain & Distributed Ledgers in B2B",
    trajectoryStage: 1,
    stageName: "Declining Utility",
    statusBadge: "Phase-Out / Sunsetting",
    badgeColor: "#94A3B8",
    icon: TrendingDown,
    summary:
      "After hundreds of enterprise consortia pilots, distributed ledger technology has overwhelmingly failed to deliver ROI in corporate ecosystems. The latency overhead, governance stalemates, and consensus computation costs consistently lose to signed append-only logs.",
    metrics: [
      { label: "Consortium Failures", value: ">85% Shuttered Pilots" },
      { label: "Latency Penalty", value: "15x vs Relational" },
      { label: "Maintenance Factor", value: "Severe Talent Debt" },
    ],
    directive:
      "Do not build enterprise B2B workflows on EVM or Hyperledger fabrics unless dealing with genuinely adversarial, sovereign entities with zero shared legal jurisdiction. A hardened PostgreSQL cluster with cryptographic audit hashes (SHA-256 HMAC) achieves the same guarantees at 1/20th the operational cost.",
    archVerdict: "ABANDON IN FAVOR OF IMMUTABLE SQL",
  },
];

export default function TechTrendsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0F172A", color: "#F8FAFC" }}>
      <NavBar />

      {/* Hero: High-Impact Blueprint Radar Header */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18), transparent 75%), #0F172A",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle architectural background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div className="container max-w-7xl mx-auto px-6 lg:px-8" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#38BDF8",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(56, 189, 248, 0.1)",
                padding: "0.3rem 0.75rem",
                borderRadius: "4px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
              }}
            >
              RADAR INTELLIGENCE &middot; Q4 AUDIT
            </span>
            <span style={{ fontSize: "0.75rem", color: "#64748B", fontFamily: "monospace" }}>
              ARCHITECTURAL VIABILITY REGISTER
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              maxWidth: "920px",
            }}
          >
            Cutting through the <span style={{ color: "#38BDF8" }}>hype cycle.</span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#94A3B8",
              lineHeight: 1.7,
              maxWidth: "760px",
              marginBottom: "2.5rem",
            }}
          >
            Our unfiltered architectural radar on what has genuinely crossed into enterprise production readiness,
            what remains premature experimentation, and what is an expensive distraction.
          </p>

          {/* Quick HUD Metrics strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {[
              { label: "MONITORED STACKS", val: "48 TECHNOLOGIES" },
              { label: "ADOPTION CRITERIA", val: "P99 SLA & COST DELTA" },
              { label: "STATUS REVIEW CYCLE", val: "BI-MONTHLY BENCHMARK" },
              { label: "EVALUATION MODEL", val: "ZERO-VENDOR SPONSOR" },
            ].map((hud, idx) => (
              <div
                key={idx}
                style={{
                  background: "#0F172A",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <div style={{ fontSize: "0.68rem", fontFamily: "monospace", color: "#64748B", letterSpacing: "0.1em" }}>
                  {hud.label}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.02em" }}>
                  {hud.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Architectural Radar Briefings */}
      <section style={{ padding: "5rem 0 8rem 0", background: "#0B1120", flex: 1 }}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {trends.map((trend) => (
              <article
                key={trend.id}
                style={{
                  background: "#0F172A",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >

                {/* Top Ledger Strip */}
                <div
                  style={{
                    padding: "1rem 1.75rem",
                    background: "rgba(255, 255, 255, 0.02)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#64748B", letterSpacing: "0.1em" }}>
                      [{trend.radarCode}]
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: trend.badgeColor,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                      }}
                    >
                      <trend.icon size={13} /> {trend.statusBadge}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>RADAR POSITION:</span>
                    <span style={{ fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 700, color: "#38BDF8" }}>
                      STAGE {trend.trajectoryStage}/4 &mdash; {trend.stageName.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Adoption Trajectory Meter (4-Stage Horizontal Bar) */}
                <div style={{ padding: "1.5rem 1.75rem", background: "rgba(15, 23, 42, 0.7)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      ADOPTION TRAJECTORY METER
                    </span>
                    <span style={{ fontSize: "0.72rem", fontFamily: "monospace", color: "#94A3B8" }}>
                      VERIFIED PRODUCTION BENCHMARK
                    </span>
                  </div>

                  {/* 4-Stage Segmented Bar */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "6px",
                      background: "rgba(0,0,0,0.3)",
                      padding: "4px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {radarStages.map((stage) => {
                      const isActive = stage.index === trend.trajectoryStage;
                      const isPast = stage.index < trend.trajectoryStage;
                      return (
                        <div
                          key={stage.index}
                          style={{
                            padding: "0.6rem 0.75rem",
                            borderRadius: "6px",
                            background: isActive
                              ? "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(56,189,248,0.25))"
                              : isPast
                              ? "rgba(255, 255, 255, 0.04)"
                              : "rgba(255, 255, 255, 0.015)",
                            border: isActive
                              ? "1px solid #38BDF8"
                              : isPast
                              ? "1px solid rgba(255,255,255,0.08)"
                              : "1px solid rgba(255,255,255,0.03)",
                            position: "relative",
                            transition: "all 0.2s",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.2rem" }}>
                            <span
                              style={{
                                fontSize: "0.65rem",
                                fontFamily: "monospace",
                                fontWeight: 700,
                                color: isActive ? "#38BDF8" : isPast ? "#94A3B8" : "#475569",
                              }}
                            >
                              0{stage.index}
                            </span>
                            {isActive && (
                              <span
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: "#38BDF8",
                                  boxShadow: "0 0 8px #38BDF8",
                                }}
                              />
                            )}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ? "#FFFFFF" : isPast ? "#94A3B8" : "#475569",
                              lineHeight: 1.2,
                            }}
                          >
                            {stage.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Content Grid: Left Analysis & Metrics / Right Overlapping Architectural Directive */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "2rem", padding: "2.25rem 1.75rem", alignItems: "stretch" }}>
                  
                  {/* Left Column: Briefing & Telemetry Data */}
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h2
                        style={{
                          fontSize: "1.85rem",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                          marginBottom: "1rem",
                        }}
                      >
                        {trend.title}
                      </h2>
                      <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                        {trend.summary}
                      </p>
                    </div>

                    {/* Telemetry Metrics Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "0.75rem",
                        padding: "1rem",
                        background: "rgba(255, 255, 255, 0.02)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      {trend.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontSize: "0.68rem", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>
                            {m.label}
                          </div>
                          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F8FAFC", marginTop: "0.25rem" }}>
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Bold Dark Navy Architectural Directive Block */}
                  <div
                    style={{
                      background: "linear-gradient(145deg, #0B1120, #0F172A)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      borderRadius: "12px",
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
                      position: "relative",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          paddingBottom: "0.75rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <ShieldCheck size={16} color="#38BDF8" />
                          <span style={{ fontSize: "0.72rem", fontFamily: "monospace", fontWeight: 700, color: "#38BDF8", letterSpacing: "0.1em" }}>
                            ACRIOTECH ARCHITECTURAL DIRECTIVE
                          </span>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontFamily: "monospace", color: "#64748B" }}>
                          STRICT POLICY
                        </span>
                      </div>

                      <p
                        style={{
                          color: "#E2E8F0",
                          fontSize: "0.98rem",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {trend.directive}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1rem",
                        borderTop: "1px dashed rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "#64748B" }}>
                        ENGINEERING VERDICT:
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          color: "#38BDF8",
                          background: "rgba(56, 189, 248, 0.08)",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "4px",
                          border: "1px solid rgba(56,189,248,0.2)",
                        }}
                      >
                        {trend.archVerdict}
                      </span>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Bottom Architectural Callout: Submit an Architecture for Radar Audit */}
          <div
            style={{
              marginTop: "5rem",
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(15, 23, 42, 0.8))",
              border: "1px solid rgba(37, 99, 235, 0.3)",
              borderRadius: "16px",
              padding: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#38BDF8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                NEED A SYSTEM-SPECIFIC ARCHITECTURE RADAR AUDIT?
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                Evaluate your stack against current production risk.
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.95rem", marginTop: "0.5rem", margin: 0 }}>
                Our Principal Architects review technology choices, compute economics, and architectural viability before capital commitment.
              </p>
            </div>

            <a
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 1.6rem",
                background: "#2563EB",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)",
              }}
            >
              Request Stack Review <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
