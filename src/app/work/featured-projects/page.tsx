"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: "AI & ML" | "Cloud & DevOps" | "Enterprise SaaS" | "Data & FinTech";
  client: string;
  desc: string;
  metric: string;
  metricLabel: string;
  tech: string[];
}

const projects: ProjectItem[] = [
  {
    id: "p-01",
    num: "01",
    title: "Enterprise AI CRM Platform",
    category: "AI & ML",
    client: "Global Sales Organization",
    desc: "An enterprise AI platform predicting deal closures, synthesizing account telemetry, and automating sales orchestration via fine-tuned LLM inference.",
    metric: "<250ms Inference",
    metricLabel: "Real-Time Pipeline",
    tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL", "LangChain"]
  },
  {
    id: "p-02",
    num: "02",
    title: "Visual Workflow Automation Engine",
    category: "Enterprise SaaS",
    client: "SaaS Enterprise",
    desc: "Drag-and-drop workflow DAG builder connecting 500+ enterprise APIs with deterministic state recovery and real-time execution graphs.",
    metric: "1.2M Runs/Day",
    metricLabel: "Event Throughput",
    tech: ["React Flow", "Node.js", "Redis", "WebSockets", "Kafka"]
  },
  {
    id: "p-03",
    num: "03",
    title: "Cloud Infrastructure Control Panel",
    category: "Cloud & DevOps",
    client: "Tier-1 Hosting Provider",
    desc: "Distributed server management console provisioning VPS compute instances, multi-region DNS propagation, and automated health probing.",
    metric: "<8s Spin-Up",
    metricLabel: "Provisioning Latency",
    tech: ["Vue.js", "Go", "Docker API", "Prometheus", "WireGuard"]
  },
  {
    id: "p-04",
    num: "04",
    title: "Global Manufacturing ERP System",
    category: "Data & FinTech",
    client: "Heavy Machinery Conglomerate",
    desc: "Comprehensive ERP fabric unifying cross-continental supply chains, multi-plant inventory allocations, and double-entry general ledger accounting.",
    metric: "99.999% SLA",
    metricLabel: "Ledger Durability",
    tech: ["React", "Spring Boot", "Kafka", "Oracle DB", "Terraform"]
  },
  {
    id: "p-05",
    num: "05",
    title: "Predictive Market Telemetry Engine",
    category: "AI & ML",
    client: "Quantitative Financial Institution",
    desc: "High-frequency streaming ML engine analyzing order-book sentiment and macro ticker feeds to compute real-time risk exposure vectors.",
    metric: "<18ms P99",
    metricLabel: "Tick-to-Trade Latency",
    tech: ["Python", "TensorFlow", "Apache Spark", "AWS SageMaker", "C++"]
  },
  {
    id: "p-06",
    num: "06",
    title: "Conversational Support Agent",
    category: "AI & ML",
    client: "Telecom Enterprise",
    desc: "Generative AI agent automating tier-1 and tier-2 incident triage by indexing internal knowledge graphs with zero hallucination guardrails.",
    metric: "82% Deflection",
    metricLabel: "Tier-1 Automated Resolution",
    tech: ["LangChain", "Pinecone", "Next.js", "FastAPI", "Guardrails"]
  },
  {
    id: "p-07",
    num: "07",
    title: "Multi-Tenant Retail ERP Architecture",
    category: "Enterprise SaaS",
    client: "Omnichannel Tech Provider",
    desc: "Cloud-native multi-tenant platform with automated inventory replenishment algorithms and strict tenant row-level data segregation.",
    metric: "10x Concurrency",
    metricLabel: "Multi-Tenant Peak Scale",
    tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind"]
  },
  {
    id: "p-08",
    num: "08",
    title: "Kubernetes Topology Console",
    category: "Cloud & DevOps",
    client: "Global DevOps Practice",
    desc: "Visual cluster observability suite enabling SREs to inspect pod memory saturation, manage helm rollouts, and execute canary traffic splits.",
    metric: "Zero Downtime",
    metricLabel: "Canary Rollout Verification",
    tech: ["React", "Kubernetes API", "Go", "Grafana", "Envoy"]
  },
  {
    id: "p-09",
    num: "09",
    title: "Distributed MLOps Pipeline Platform",
    category: "AI & ML",
    client: "AI Research Laboratory",
    desc: "Automated distributed model training orchestrator managing GPU cluster provisioning, dataset checkpointing, and model registry governance.",
    metric: "4x Faster Runs",
    metricLabel: "GPU Utilization",
    tech: ["Python", "Kubeflow", "Docker", "React", "Ray Core"]
  },
  {
    id: "p-10",
    num: "10",
    title: "Omnichannel Hospitality Fabric",
    category: "Enterprise SaaS",
    client: "International Hotel Chain",
    desc: "Unified customer identity graph synchronizing booking telemetry, loyalty point ledgers, and on-premise concierge check-ins.",
    metric: "<45ms Lookup",
    metricLabel: "Identity Graph P99",
    tech: ["Angular", "Node.js", "Elasticsearch", "MongoDB", "Redis"]
  },
  {
    id: "p-11",
    num: "11",
    title: "Document AI Extraction Pipeline",
    category: "AI & ML",
    client: "Corporate Legal Tech Firm",
    desc: "Computer vision and NLP pipeline extracting contractual liabilities and regulatory covenants from scanned legal documents with 99.8% precision.",
    metric: "99.8% Precision",
    metricLabel: "Entity Recognition",
    tech: ["Python", "Hugging Face", "AWS Textract", "Next.js"]
  },
  {
    id: "p-12",
    num: "12",
    title: "Cloud Database Provisioning UI",
    category: "Cloud & DevOps",
    client: "Database-as-a-Service Startup",
    desc: "Developer self-service portal provisioning geographically sharded database clusters with automated cross-region point-in-time recovery.",
    metric: "99.999% Uptime",
    metricLabel: "Multi-Region Consensus",
    tech: ["Next.js", "Terraform", "Go", "CockroachDB", "gRPC"]
  },
  {
    id: "p-13",
    num: "13",
    title: "Supply Chain Risk Forecasting AI",
    category: "Data & FinTech",
    client: "Automotive OEM Manufacturer",
    desc: "Predictive supply chain neural network identifying transit disruption risks and calculating dynamic buffer stock reserves across 40 countries.",
    metric: "$14M Saved",
    metricLabel: "Disruption Mitigation",
    tech: ["Python", "PyTorch", "Apache Airflow", "React", "PostGIS"]
  },
  {
    id: "p-14",
    num: "14",
    title: "High-Throughput API Gateway Hub",
    category: "Enterprise SaaS",
    client: "B2B Software Network",
    desc: "Central integration backbone executing schema translation, token rate limiting, and webhook dispatching for 12,000 corporate clients.",
    metric: "50k req/sec",
    metricLabel: "Edge Routing Capacity",
    tech: ["Next.js", "Node.js", "RabbitMQ", "PostgreSQL", "Redis"]
  },
  {
    id: "p-15",
    num: "15",
    title: "VPC Multi-Cloud Network Director",
    category: "Cloud & DevOps",
    client: "Global Financial Infrastructure",
    desc: "Software-defined networking controller mapping encrypted WireGuard tunnels and firewall policies across AWS, GCP, and Azure VPC subnets.",
    metric: "0 Packet Leaks",
    metricLabel: "Network Isolation",
    tech: ["React", "Go", "AWS EC2 API", "Azure RM", "Terraform"]
  }
];

const categories = ["All Systems", "AI & ML", "Cloud & DevOps", "Enterprise SaaS", "Data & FinTech"] as const;
type CategoryFilter = typeof categories[number];

export default function FeaturedProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Systems");

  const filteredProjects = activeCategory === "All Systems" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <NavBar />

      {/* Header Section */}
      <section style={{ paddingTop: '150px', paddingBottom: '4.5rem', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #DBEAFE', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ARCHITECTURE RECORDS
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Production Systems <span style={{ color: '#4B61B8' }}>Portfolio.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Real enterprise platforms engineered under severe latency, concurrency, and security constraints. Every card reflects active systems operating in production.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section style={{ padding: '1.5rem 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: '70px', zIndex: 30 }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === "All Systems" 
                ? projects.length 
                : projects.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: isActive ? '#0F172A' : '#F8FAFC',
                    color: isActive ? '#FFFFFF' : '#475569',
                    border: isActive ? '1px solid #0F172A' : '1px solid #E2E8F0',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{cat}</span>
                  <span 
                    style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.1rem 0.4rem', 
                      borderRadius: '4px', 
                      background: isActive ? 'rgba(56, 189, 248, 0.2)' : '#E2E8F0',
                      color: isActive ? '#38BDF8' : '#64748B'
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guaranteed 3-Column Desktop Grid */}
      <section style={{ padding: '4.5rem 0 7rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="layout-grid-3 gap-6 w-full">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '2px',
                  border: '1px solid #E2E8F0',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px -2px rgba(15,23,42,0.04)'
                }}
                className="project-standard-card hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
              >
                <div>
                  {/* Top Status Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#4B61B8' }}>
                        {proj.num}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                        &middot; {proj.client}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', background: '#EFF6FF', border: '1px solid #DBEAFE', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                      {proj.metric}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    {proj.title}
                  </h3>

                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {proj.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                    {proj.tech.map(t => (
                      <span key={t} style={{ fontSize: '0.72rem', fontWeight: 600, background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
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
