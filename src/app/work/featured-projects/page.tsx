"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, FolderOpen, Code2, Layers, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    "title": "Enterprise AI CRM Platform",
    "category": "CRM / AI",
    "client": "Global Sales Organization",
    "desc": "An AI-powered Customer Relationship Management system that predicts deal closures and automates sales follow-ups using LLMs.",
    "tech": [
      "Next.js",
      "Python",
      "OpenAI API",
      "PostgreSQL"
    ]
  },
  {
    "title": "Visual Workflow Automation Builder",
    "category": "Automation / No-Code",
    "client": "SaaS Startup",
    "desc": "A Make.com-style visual drag-and-drop workflow builder allowing users to connect 500+ APIs for deep business process automation.",
    "tech": [
      "React Flow",
      "Node.js",
      "Redis",
      "WebSockets"
    ]
  },
  {
    "title": "Cloud Infrastructure Control Panel",
    "category": "Cloud Server Panel",
    "client": "Hosting Provider",
    "desc": "A highly scalable cloud server management panel for provisioning VPS instances, managing DNS, and monitoring server health metrics.",
    "tech": [
      "Vue.js",
      "Go",
      "Docker API",
      "Prometheus"
    ]
  },
  {
    "title": "Global Manufacturing ERP System",
    "category": "ERP",
    "client": "Heavy Machinery Corp",
    "desc": "A comprehensive Enterprise Resource Planning suite unifying inventory, supply chain logistics, and HR across multi-plant manufacturing operations.",
    "tech": [
      "React",
      "Spring Boot",
      "Kafka",
      "Oracle DB"
    ]
  },
  {
    "title": "Predictive Machine Learning Engine",
    "category": "Machine Learning",
    "client": "Financial Institution",
    "desc": "A machine learning engine that analyzes market sentiment and historical data to predict financial trends using real-time market and historical data pipelines.",
    "tech": [
      "Python",
      "TensorFlow",
      "Apache Spark",
      "AWS SageMaker"
    ]
  },
  {
    "title": "Conversational AI Intelligence Agent",
    "category": "AI Intelligence",
    "client": "Telecom Enterprise",
    "desc": "A generative AI support agent that automates tier-1 technical support triage and resolution by analyzing knowledge bases.",
    "tech": [
      "LangChain",
      "Pinecone",
      "Next.js",
      "FastAPI"
    ]
  },
  {
    "title": "Multi-Tenant SaaS ERP",
    "category": "ERP / SaaS",
    "client": "Retail Tech Provider",
    "desc": "A cloud-native ERP solution designed specifically for mid-market retailers, featuring automated procurement and real-time ledger accounting.",
    "tech": [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL"
    ]
  },
  {
    "title": "Kubernetes Cluster Dashboard",
    "category": "Cloud Server Panel",
    "client": "DevOps Agency",
    "desc": "An advanced visual dashboard for DevOps teams to monitor pod health, manage deployments, and scale microservices visually.",
    "tech": [
      "React",
      "Kubernetes API",
      "Go",
      "Grafana"
    ]
  },
  {
    "title": "MLOps Pipeline Orchestrator",
    "category": "Machine Learning",
    "client": "AI Research Lab",
    "desc": "A platform automating the training, versioning, and deployment of complex deep learning models across GPU clusters.",
    "tech": [
      "Python",
      "Kubeflow",
      "Docker",
      "React"
    ]
  },
  {
    "title": "Omnichannel CRM Architecture",
    "category": "CRM",
    "client": "International Hotel Chain",
    "desc": "A unified CRM platform aggregating customer interactions from email, social, phone, and in-person visits into a single holistic timeline.",
    "tech": [
      "Angular",
      "Node.js",
      "Elasticsearch",
      "MongoDB"
    ]
  },
  {
    "title": "Document AI Extraction Platform",
    "category": "AI Automation",
    "client": "Legal Tech Firm",
    "desc": "An AI pipeline that automatically ingests scanned contracts, extracts key clauses via NLP, and syncs them to the firm's ERP.",
    "tech": [
      "Python",
      "Hugging Face",
      "AWS Textract",
      "Next.js"
    ]
  },
  {
    "title": "Autonomous Marketing Automation",
    "category": "Automation / AI",
    "client": "E-commerce Brand",
    "desc": "A system that uses machine learning to automatically generate ad copy, A/B test campaigns, and optimize ad spend across platforms.",
    "tech": [
      "React",
      "Python",
      "Meta API",
      "Google Ads API"
    ]
  },
  {
    "title": "Cloud Database Provisioning UI",
    "category": "Cloud Server Panel",
    "client": "DBaaS Startup",
    "desc": "A sleek control panel allowing developers to spin up distributed PostgreSQL clusters with 1-click high availability and automated backups.",
    "tech": [
      "Next.js",
      "Terraform",
      "Go",
      "CockroachDB"
    ]
  },
  {
    "title": "Supply Chain AI Optimizer",
    "category": "ERP / AI",
    "client": "Automotive Manufacturer",
    "desc": "An AI module integrated into legacy ERPs that forecasts inventory demand and prevents supply chain bottlenecks based on global logistics data.",
    "tech": [
      "Python",
      "PyTorch",
      "Apache Airflow",
      "React"
    ]
  },
  {
    "title": "Computer Vision Defect Detection",
    "category": "Machine Learning",
    "client": "Electronics Manufacturer",
    "desc": "A machine learning system deployed on edge devices to identify microscopic manufacturing defects on circuit boards in real-time.",
    "tech": [
      "C++",
      "OpenCV",
      "TensorFlow Lite",
      "CUDA"
    ]
  },
  {
    "title": "API Integration Hub",
    "category": "Automation / API",
    "client": "B2B Software Vendor",
    "desc": "A central integration hub allowing B2B customers to map data schemas and automate data syncs between the vendor and their internal ERPs.",
    "tech": [
      "Next.js",
      "Node.js",
      "RabbitMQ",
      "PostgreSQL"
    ]
  },
  {
    "title": "Sales Pipeline Intelligence",
    "category": "CRM / AI",
    "client": "Tech Unicorn",
    "desc": "A CRM augmentation tool that transcribes sales calls, analyzes sentiment, and automatically updates CRM deal stages.",
    "tech": [
      "React",
      "Whisper AI",
      "Node.js",
      "Salesforce API"
    ]
  },
  {
    "title": "Enterprise Serverless Console",
    "category": "Cloud Server Panel",
    "client": "Public Cloud Provider",
    "desc": "A web-based IDE and deployment console allowing users to write, test, and deploy serverless edge functions globally in seconds.",
    "tech": [
      "React",
      "Monaco Editor",
      "Go",
      "WebAssembly"
    ]
  },
  {
    "title": "AI Code Review Assistant",
    "category": "AI Intelligence",
    "client": "Software Development Agency",
    "desc": "A bespoke LLM-powered tool integrated into GitLab that automatically reviews PRs for security vulnerabilities and code style.",
    "tech": [
      "Python",
      "OpenAI API",
      "GitLab CI",
      "Next.js"
    ]
  },
  {
    "title": "Global HR & Payroll ERP",
    "category": "ERP",
    "client": "Multinational Conglomerate",
    "desc": "A specialized ERP module managing complex payroll compliance, tax routing, and benefits administration for distributed multi-region teams.",
    "tech": [
      "Angular",
      "Java",
      "Spring Boot",
      "MySQL"
    ]
  },
  {
    "title": "Dynamic Resource Allocation AI",
    "category": "Machine Learning",
    "client": "Logistics Fleet Operator",
    "desc": "A reinforcement learning model that dynamically routes commercial logistics and delivery fleets to minimize fuel consumption and delays.",
    "tech": [
      "Python",
      "Ray RLlib",
      "PostGIS",
      "React"
    ]
  },
  {
    "title": "No-Code Web Scraper Builder",
    "category": "Automation / No-Code",
    "client": "Data Aggregation Firm",
    "desc": "A visual automation interface where non-technical analysts can build highly resilient web scraping bots that bypass captchas.",
    "tech": [
      "Vue.js",
      "Puppeteer",
      "Node.js",
      "MongoDB"
    ]
  },
  {
    "title": "Virtual Private Cloud (VPC) Manager",
    "category": "Cloud Server Panel",
    "client": "Enterprise IT",
    "desc": "A custom networking control panel to visualize and manage VPC subnets, firewall rules, and VPN tunnels across multi-cloud environments.",
    "tech": [
      "React",
      "Go",
      "AWS EC2 API",
      "Azure RM"
    ]
  },
  {
    "title": "Customer Data Platform (CDP)",
    "category": "CRM",
    "client": "Media Conglomerate",
    "desc": "A central data platform resolving user identities across 20 distinct brands, providing a single 360-degree customer view for targeted marketing.",
    "tech": [
      "React",
      "Apache Kafka",
      "Snowflake",
      "Node.js"
    ]
  }
];

export default function FeaturedProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
            Featured Dossier &middot; Production Systems
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            The <span style={{ color: '#4B61B8' }}>Portfolio.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            A curated selection of the interfaces and architectures we've designed and deployed for enterprise clients across the globe.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2rem' }}>
             {projects.map((proj, i) => (
               <div 
                 key={i} 
                 style={{ 
                   background: '#FFFFFF', 
                   borderRadius: '12px', 
                   border: '1px solid #E2E8F0', 
                   padding: '1.75rem', 
                   display: 'flex', 
                   flexDirection: 'column', 
                   justifyContent: 'space-between',
                   transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s', 
                   boxShadow: '0 1px 3px rgba(15,23,42,0.05)' 
                 }} 
                 className="project-card"
               >
                 <div>
                   <div style={{ fontSize: '0.8rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                     {proj.client}
                   </div>
                   <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                     {proj.title}
                   </h2>
                   <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                     {proj.desc}
                   </p>
                 </div>
                 
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                   {proj.tech.map(t => (
                     <span key={t} style={{ background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                       {t}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
           <style jsx>{`
            .project-card:hover {
              transform: translateY(-3px);
              border-color: #CBD5E1;
              box-shadow: 0 10px 25px -5px rgba(15,23,42,0.08) !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
