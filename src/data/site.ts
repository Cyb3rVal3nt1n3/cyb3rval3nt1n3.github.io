export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  achievements: string[];
}

export interface ExpertiseEntry {
  title: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2024 — Present",
    role: "Detection Engineer",
    organization: "CyberValentine",
    achievements: [
      "Built CrimsonVeil, a blue-team security operations library for network scanning, log analysis, and IOC detection",
      "Developed automated detection pipelines reducing mean detection time by 60%",
      "Engineered threat intelligence correlation engine integrating multiple OSINT feeds",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Security Researcher",
    organization: "Red Team Ops",
    achievements: [
      "Authored exploit chains for AD environments including Kerberoast, DCSync, and ACL abuse",
      "Discovered and validated privilege escalation vectors across Linux and Windows targets",
      "Built automated reconnaissance pipelines for large-scale enterprise assessments",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Threat Intelligence Analyst",
    organization: "SOC Operations",
    achievements: [
      "Profiled APT groups including Mysterious Elephant (APT-K-47) spanning tool arsenal, TTPs, and infrastructure",
      "Developed YARA rules and Sigma detection logic deployed across 500+ endpoints",
      "Led incident response engagements for complex multi-stage intrusions",
    ],
  },
];

export const expertise: ExpertiseEntry[] = [
  {
    title: "Threat Hunting",
    description: "Proactive hypothesis-driven hunting across endpoints, network telemetry, and cloud logs to uncover stealthy adversary activity.",
  },
  {
    title: "Detection Engineering",
    description: "Building production-grade detection rules (Sigma, YARA, KQL, SPL) with minimal false positives and maximum coverage.",
  },
  {
    title: "Threat Intelligence",
    description: "Tracking APT groups, mapping TTPs to MITRE ATT&CK, extracting IOCs, and producing actionable intelligence reports.",
  },
  {
    title: "Penetration Testing",
    description: "Authorized adversarial simulation across network, web, and Active Directory environments for enterprise security validation.",
  },
  {
    title: "Cloud Security",
    description: "Securing AWS and Azure environments: IAM hardening, CloudTrail analysis, S3 policy auditing, and container security.",
  },
  {
    title: "Security Automation",
    description: "Automating incident response, enrichment pipelines, and repetitive analysis tasks using Python and infrastructure-as-code.",
  },
  {
    title: "Malware Analysis",
    description: "Static and dynamic analysis of malicious samples, payload deobfuscation, behavioral analysis, and C2 infrastructure mapping.",
  },
];
