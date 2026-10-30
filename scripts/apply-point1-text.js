const fs = require('fs');
const path = require('path');

// 1. Update solutions/page.tsx
const solPath = path.join(__dirname, '../src/app/solutions/page.tsx');
let solCode = fs.readFileSync(solPath, 'utf8');

const updatedSolutions = [
  {
    slug: 'enterprise-software',
    desc: 'High-throughput, event-driven microservices with sharded databases built for massive transaction concurrency.'
  },
  {
    slug: 'ai-intelligent-automation',
    desc: 'Private-cloud ML pipelines, intelligent document processing, and predictive engines without third-party data egress.'
  },
  {
    slug: 'business-process-automation',
    desc: 'Immutable workflow engines replacing manual email approval chains with auditable ERP-integrated decision tracking.'
  },
  {
    slug: 'digital-transformation',
    desc: 'Decoupled API-first architectures replacing monolithic cores incrementally via the Strangler Fig pattern.'
  },
  {
    slug: 'cloud-infrastructure',
    desc: 'Codified multi-cloud infrastructure on AWS, GCP, and Azure with automated failover and telemetry alerting.'
  },
  {
    slug: 'legacy-system-modernization',
    desc: 'Module-by-module backend extraction that eliminates technical debt while preserving continuous daily operations.'
  },
  {
    slug: 'data-analytics',
    desc: 'Automated data pipelines consolidating disparate operational tooling into governed, queryable analytical warehouses.'
  },
  {
    slug: 'custom-software-development',
    desc: 'Dedicated senior engineering pods owning the full development lifecycle with 100% repository and IP handover.'
  }
];

updatedSolutions.forEach(item => {
  const regex = new RegExp(`(slug:\\s*['"]${item.slug}['"],\\s*desc:\\s*)['"][^'"]*?['"]`, 's');
  solCode = solCode.replace(regex, `$1'${item.desc}'`);
});

fs.writeFileSync(solPath, solCode, 'utf8');
console.log('solutions/page.tsx descriptions updated successfully');

// 2. Update services/page.tsx
const svcPath = path.join(__dirname, '../src/app/services/page.tsx');
let svcCode = fs.readFileSync(svcPath, 'utf8');

const updatedServices = [
  {
    slug: 'software-consulting',
    desc: 'Objective architectural audits, feasibility assessments, and formal decision records for complex systems.'
  },
  {
    slug: 'product-discovery',
    desc: 'Validating user requirements and technical feasibility to produce prioritized, execution-ready engineering backlogs.'
  },
  {
    slug: 'ui-ux-design',
    desc: 'High-density design systems and accessibility-compliant component libraries built for data-heavy workflows.'
  },
  {
    slug: 'dedicated-development-teams',
    desc: 'Embedded senior engineering pods integrated into your sprints, git repositories, and release pipelines.'
  },
  {
    slug: 'web-application-development',
    desc: 'Edge-rendered, highly responsive web platforms engineered for sub-second page loads and high concurrency.'
  },
  {
    slug: 'mobile-app-development',
    desc: 'Native and cross-platform mobile apps built with offline-first synchronization and hardware optimization.'
  },
  {
    slug: 'api-development-integration',
    desc: 'Resilient event-driven message brokers, GraphQL layers, and high-throughput REST gateways with idempotency.'
  },
  {
    slug: 'qa-testing',
    desc: 'Automated regression testing, contract verification, and security testing calibrated to failure risk.'
  },
  {
    slug: 'cloud-architecture',
    desc: 'Resilient multi-cloud topologies across AWS, GCP, and Azure with codified Terraform configurations and continuous telemetry.'
  },
  {
    slug: 'devops-ci-cd',
    desc: 'Immutable build pipelines and Kubernetes container orchestration featuring automated canary rollouts and zero deployment stalls.'
  },
  {
    slug: 'ai-integration',
    desc: 'Private-cloud LLM pipelines, vector databases, and retrieval-augmented generation with strict governance.'
  },
  {
    slug: 'maintenance-support',
    desc: 'Proactive telemetry monitoring, routine security patching, and SLA-backed tier-3 incident escalation.'
  }
];

updatedServices.forEach(item => {
  const regex = new RegExp(`(slug:\\s*['"]${item.slug}['"],\\s*num:\\s*['"][^'"]*?['"],\\s*name:\\s*['"][^'"]*?['"],\\s*desc:\\s*)['"][^'"]*?['"]`, 's');
  svcCode = svcCode.replace(regex, `$1'${item.desc}'`);
});

fs.writeFileSync(svcPath, svcCode, 'utf8');
console.log('services/page.tsx descriptions updated successfully');

