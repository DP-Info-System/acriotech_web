"use client";

import LegalLayout from "@/components/LegalLayout";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function SecurityCompliancePage() {
  const incidentPhases = [
    {
      step: "01",
      phase: "Detection & Algorithmic Triage",
      sla: "< 15 Mins",
      desc: "Real-time SIEM alerts and automated anomaly detectors trigger immediate principal on-call escalation with automated packet captures.",
    },
    {
      step: "02",
      phase: "Perimeter Isolation & Containment",
      sla: "< 30 Mins",
      desc: "Affected workloads are cordoned off using automated security group revocations and mTLS network segment quarantines without terminating state.",
    },
    {
      step: "03",
      phase: "Forensic Investigation & Blast Radius Audit",
      sla: "Continuous",
      desc: "Immutable append-only audit trails and VPC flow logs are analyzed in an isolated forensic environment to determine exact data touchpoints and origin vectors.",
    },
    {
      step: "04",
      phase: "Eradication & Verified Clean Recovery",
      sla: "Zero Re-infection Gate",
      desc: "Root causes are remediated in IaC configurations. Infrastructure instances are torn down and redeployed from cryptographically verified clean Golden AMIs / container digests.",
    },
    {
      step: "05",
      phase: "Customer Notification & Contractual Disclosure",
      sla: "< 72 Hr GDPR/SLA",
      desc: "Affected enterprise partners receive dedicated technical debriefs, preliminary root cause analysis, and confirmed impact registers well within mandatory statutory timelines.",
    },
    {
      step: "06",
      phase: "Blameless Post-Mortem & Defense Hardening",
      sla: "5-Day Final Report",
      desc: "A formal blameless post-incident review is published. Corrective preventive controls, new automated regression assertions, and updated threat models are merged directly into the core runbook.",
    },
  ];

  return (
    <LegalLayout activePath="/security-compliance">
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        
        {/* Header & Posture Summary Bar */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.75rem", color: "#4B61B8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              SECURITY DIRECTIVE &middot; AUDITED 2025
            </span>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#059669", background: "#ECFDF5", padding: "0.2rem 0.6rem", borderRadius: "4px", border: "1px solid #A7F3D0" }}>
              SOC 2 &amp; ISO 27001 Posture
            </span>
          </div>

          <h1 style={{ fontSize: "2.6rem", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Security Compliance &amp; Operational Defense
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#475569", lineHeight: 1.8, margin: 0 }}>
            At Acriotech, security is not an optional feature &mdash; it is the fundamental architectural constraint. Every system we engineer, every line of code committed, and every cloud topology deployed is governed by strict zero-trust standards.
          </p>
        </div>

        {/* Security Posture Summary Bar */}
        <div
          style={{
            background: "#0F172A",
            border: "1px solid #334155",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 15px 30px rgba(15, 23, 42, 0.15)",
          }}
        >
          <div style={{ padding: "0.85rem 1.25rem", borderBottom: "1px solid #1E293B", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShieldCheck size={16} color="#38BDF8" />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#38BDF8", letterSpacing: "0.08em" }}>
                SECURITY &amp; COMPLIANCE CONTROLS
              </span>
            </div>
            <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
              NIST CSF 2.0 Aligned
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              background: "#1E293B",
            }}
          >
            {[
              { title: "Audit Regime", value: "SOC 2 Type II Annual" },
              { title: "Transit Cipher", value: "TLS 1.3 Mandatory" },
              { title: "Storage Encryption", value: "AES-256-GCM Block" },
              { title: "Production DB Access", value: "Zero Standing (JIT Only)" },
            ].map((hud, idx) => (
              <div key={idx} style={{ background: "#0F172A", padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 600 }}>
                  {hud.title}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.25rem" }}>
                  {hud.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #E2E8F0" }} />

        {/* Section 1: Philosophy */}
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>1. Our Security Philosophy</h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
            Acriotech operates under the principle of <strong>Defense in Depth</strong> &mdash; a layered security strategy that ensures no single point of failure can compromise the integrity or confidentiality of our systems. We combine technical controls, administrative policies, and continuous human oversight to create a resilient security posture.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8 }}>
            Our security program is aligned with the <strong>NIST Cybersecurity Framework (CSF 2.0)</strong>, covering five core functions: Identify, Protect, Detect, Respond, and Recover. This is not a checkbox exercise &mdash; these functions drive our actual engineering and operational processes day-to-day.
          </p>
        </div>

        {/* 4 Compliance Certificates */}
        <div className="layout-grid-2 gap-4">
          {[
            { label: "SOC 2 Type II", desc: "Annual independent third-party audit verifying security, availability, and confidentiality controls." },
            { label: "ISO/IEC 27001:2013", desc: "Internationally certified Information Security Management System (ISMS) governing operations." },
            { label: "HIPAA & HITECH Ready", desc: "PHI-safe architecture with end-to-end auditability and executed Business Associate Agreements (BAAs)." },
            { label: "OWASP Top 10 Enforced", desc: "Hardened against web vulnerabilities via automated SAST/DAST gates in every CI/CD merge pipeline." },
          ].map((cert) => (
            <div key={cert.label} style={{ padding: "1.5rem", background: "#F8FAFC", borderRadius: "12px", border: "1px solid #CBD5E1" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={18} color="#2563EB" /> {cert.label}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6, margin: 0 }}>{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Infrastructure */}
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>2. Infrastructure &amp; Cloud Security</h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
            All Acriotech production systems are hosted on Tier-1 cloud providers (AWS, GCP, Azure) operating out of certified data centers with SOC 1, SOC 2, and ISO 27001 accreditations. We enforce strict network segmentation using VPCs, private subnets, and firewall rules to isolate production, staging, and development environments.
          </p>
          <ul style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li><strong>Zero Trust Network Architecture:</strong> Every internal service-to-service call is authenticated using mutual TLS (mTLS). We do not operate a flat, trusted internal network.</li>
            <li><strong>Secrets Management:</strong> All API keys, credentials, and tokens are stored in Hardware Security Module (HSM)-backed vaults (HashiCorp Vault or AWS Secrets Manager). Hard-coded credentials are prohibited and automatically detected in CI/CD pipelines.</li>
            <li><strong>Immutable Infrastructure:</strong> Production servers are never patched in place. All changes are applied by replacing infrastructure using versioned, tested Infrastructure-as-Code (Terraform/Pulumi) templates.</li>
            <li><strong>DDoS Mitigation:</strong> All public-facing endpoints are protected by managed DDoS mitigation services with automatic traffic scrubbing and geo-blocking capabilities.</li>
          </ul>
        </div>

        {/* Section 3: Encryption Standards Table */}
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>3. Encryption Standards</h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
            Acriotech mandates encryption at every layer of the data lifecycle:
          </p>
          <div style={{ overflowX: "auto", borderRadius: "10px", border: "1px solid #CBD5E1" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#0F172A", color: "#FFFFFF" }}>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Layer</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Standard</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Implementation Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Data at Rest", "AES-256-GCM", "All databases, file stores, and backups are encrypted at the block and file level."],
                  ["Data in Transit", "TLS 1.3", "All communication channels enforce TLS 1.3. Legacy TLS 1.0/1.1 is disabled globally."],
                  ["Database Fields", "AES-256 (Application-level)", "PII fields (SSN, payment data, health records) are encrypted at the application layer before database storage."],
                  ["Key Management", "HSM-backed KMS", "Encryption keys are rotated annually and stored in FIPS 140-2 Level 3 certified HSMs."],
                  ["Backups", "AES-256 + HMAC-SHA256", "All backups are encrypted and their integrity is verified using HMAC before restoration."],
                ].map(([layer, standard, details], idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #E2E8F0", background: idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                    <td style={{ padding: "1rem", fontWeight: 600, color: "#0F172A" }}>{layer}</td>
                    <td style={{ padding: "1rem", color: "#2563EB", fontWeight: 700 }}>{standard}</td>
                    <td style={{ padding: "1rem", color: "#475569" }}>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Vulnerability Management */}
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>4. Vulnerability Management &amp; Penetration Testing</h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
            Acriotech operates a continuous vulnerability management program covering our infrastructure, applications, and third-party dependencies:
          </p>
          <ul style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li><strong>Automated Scanning:</strong> Every code commit triggers automated SAST (Static Application Security Testing) and dependency vulnerability scans via integrated CI/CD pipelines. Critical or high-severity CVEs block deployment automatically.</li>
            <li><strong>DAST in Staging:</strong> Dynamic Application Security Testing (DAST) tools run against every staging deployment to detect runtime vulnerabilities including injection flaws, broken authentication, and XSS.</li>
            <li><strong>Annual Penetration Testing:</strong> We engage independent, CREST-certified security firms to conduct comprehensive black-box and gray-box penetration tests annually across our entire attack surface.</li>
            <li><strong>SLA for Remediation:</strong> Critical (CVSS 9.0+) vulnerabilities are patched within 24 hours, High (7.0-8.9) within 7 days, Medium (4.0-6.9) within 30 days.</li>
            <li><strong>Bug Bounty Program:</strong> We operate a responsible disclosure program. Security researchers who discover vulnerabilities and disclose them in good faith are publicly acknowledged and rewarded.</li>
          </ul>
        </div>

        {/* Section 5: Access Control */}
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>5. Access Control &amp; Identity Management</h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
            Acriotech enforces the principle of <strong>Least Privilege</strong> across all systems. Every employee, contractor, and automated system is granted only the minimum permissions required to perform their function.
          </p>
          <ul style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li><strong>Multi-Factor Authentication (MFA):</strong> MFA is mandatory for all employees accessing internal systems, cloud consoles, code repositories, and production infrastructure. Hardware security keys (FIDO2/WebAuthn) are the required second factor for privileged access.</li>
            <li><strong>Single Sign-On (SSO):</strong> All internal tooling is integrated via a centralized Identity Provider (IdP). When an employee leaves, their access is immediately revoked from all connected systems through a single deprovisioning action.</li>
            <li><strong>Just-In-Time (JIT) Access:</strong> Engineers do not have standing access to production databases. Production access is granted on a time-limited, request-and-approval basis with full audit logging of all actions taken.</li>
            <li><strong>Quarterly Access Reviews:</strong> All access rights are reviewed quarterly. Unused permissions are revoked automatically.</li>
          </ul>
        </div>

        {/* Section 6: Incident Response Timeline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "#2563EB", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Incident Response Protocol
            </span>
          </div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0F172A", marginBottom: "0.75rem" }}>
            6. Incident Response Lifecycle
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Acriotech maintains a formally documented Security Incident Response Plan (SIRP) tested via tabletop drills bi-annually. The continuous lifecycle guarantees rapid isolation, forensic integrity, and stakeholder transparency.
          </p>

          {/* Continuous Vertical Timeline Rail */}
          <div style={{ position: "relative", paddingLeft: "2.5rem", display: "flex", flexDirection: "column", gap: "2.25rem" }}>
            <div
              style={{
                position: "absolute",
                top: "16px",
                bottom: "24px",
                left: "17px",
                width: "2px",
                background: "linear-gradient(to bottom, #2563EB, #38BDF8 60%, #CBD5E1)",
              }}
            />

            {incidentPhases.map((item, index) => (
              <div key={item.step} style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-2.5rem",
                    top: "4px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: index === 0 ? "#2563EB" : "#FFFFFF",
                    border: index === 0 ? "3px solid #BFDBFE" : "2px solid #2563EB",
                    color: index === 0 ? "#FFFFFF" : "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    zIndex: 2,
                    boxShadow: "0 2px 6px rgba(37,99,235,0.2)",
                  }}
                >
                  {item.step}
                </div>

                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                    boxShadow: "0 2px 8px rgba(15,23,42,0.03)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      flexWrap: "wrap",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0F172A", margin: 0 }}>
                      {item.phase}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#2563EB",
                        background: "#EFF6FF",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                        border: "1px solid #DBEAFE",
                      }}
                    >
                      {item.sla}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Inquiries & Reporting Callout */}
        <div style={{ padding: "2rem", background: "#0F172A", borderRadius: "14px", border: "1px solid #1E293B", color: "#FFFFFF", marginTop: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Lock size={18} color="#38BDF8" />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Security Inquiries &amp; Responsible Disclosure</h3>
          </div>
          <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7, margin: "0 0 1rem 0" }}>
            To request our SOC 2 Type II report, ISO 27001 certificate, or to report a security vulnerability under our responsible disclosure program, contact our Security Engineering Directorate directly.
          </p>
          <a
            href="mailto:security@acriotech.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#2563EB",
              color: "#FFFFFF",
              padding: "0.75rem 1.4rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Email security@acriotech.com &rarr;
          </a>
        </div>

      </div>
    </LegalLayout>
  );
}
