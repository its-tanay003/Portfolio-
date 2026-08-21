import { Code, Shield, Terminal, Cloud, Brain, Lock, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Stacks",
      id: "LANG_CORE",
      icon: <Code size={22} />,
      color: "#00f0ff",
      bg: "rgba(0, 240, 255, 0.1)",
      skills: [
        { name: "Python", level: "Advanced / Threat Scripting", pct: 95 },
        { name: "SQL", level: "DB Exploitation & Querying", pct: 90 },
        { name: "Bash Scripting", level: "Automated Recon Pipelines", pct: 92 },
        { name: "C / C++", level: "Systems & Memory Architecture", pct: 85 },
        { name: "JavaScript", level: "Full-Stack Web & Node", pct: 88 },
        { name: "Rust", level: "Secure Systems Programming", pct: 80 },
        { name: "HTML5 / CSS3", level: "Modern Frontend Systems", pct: 92 },
      ],
    },
    {
      title: "Cyber Tooling & OS",
      id: "OFFENSIVE_TOOLS",
      icon: <Terminal size={22} />,
      color: "#f43f5e",
      bg: "rgba(244, 63, 94, 0.1)",
      skills: [
        { name: "Kali Linux", level: "Primary Offensive OS", pct: 95 },
        { name: "Nuclei", level: "Automated CVE Template Scans", pct: 92 },
        { name: "Subfinder", level: "Asset Discovery & Recon", pct: 90 },
        { name: "Burp Suite Pro", level: "Web App Pen Testing", pct: 88 },
        { name: "Metasploit", level: "Controlled Exploit Harness", pct: 85 },
        { name: "Nmap & Wireshark", level: "Packet Analysis & Mapping", pct: 90 },
      ],
    },
    {
      title: "AI & LLM Security",
      id: "ADVERSARIAL_AI",
      icon: <Brain size={22} />,
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
      skills: [
        { name: "Adversarial ML", level: "Model Evasion & Poisoning", pct: 90 },
        { name: "Prompt Injection", level: "Direct / Indirect Jailbreaks", pct: 95 },
        { name: "Garak Framework", level: "Automated LLM Security Test", pct: 92 },
        { name: "OWASP LLM Top 10", level: "Vulnerability Compliance", pct: 94 },
        { name: "Data Exfiltration Def", level: "System Prompt Hardening", pct: 88 },
      ],
    },
    {
      title: "Offensive Security",
      id: "RED_TEAMING",
      icon: <Lock size={22} />,
      color: "#10b981",
      bg: "rgba(168, 85, 129, 0.1)",
      skills: [
        { name: "Red Teaming", level: "Adversary Simulation", pct: 88 },
        { name: "Web Pen Testing", level: "XSS, SQLi, CSRF, IDOR", pct: 92 },
        { name: "Network Security", level: "Protocols & Firewall Audits", pct: 90 },
        { name: "Active Directory", level: "Domain Recon & Exploitation", pct: 82 },
        { name: "Bug Bounty Hunting", level: "Live Production Target Scans", pct: 88 },
      ],
    },
    {
      title: "Cloud & DevSecOps",
      id: "INFRA_SEC",
      icon: <Cloud size={22} />,
      color: "#fbbf24",
      bg: "rgba(251, 191, 36, 0.1)",
      skills: [
        { name: "AWS IAM", level: "Least-Privilege Policy Design", pct: 88 },
        { name: "GCP Security", level: "Cloud Asset & Auth Hardening", pct: 85 },
        { name: "Kubernetes", level: "Container Cluster Defense", pct: 80 },
        { name: "CI/CD Security", level: "Automated SAST / DAST Gates", pct: 86 },
      ],
    },
    {
      title: "Core Mindset & Strategy",
      id: "SEC_ARCH",
      icon: <Shield size={22} />,
      color: "#38bdf8",
      bg: "rgba(56, 189, 248, 0.1)",
      skills: [
        { name: "Zero-Trust Mindset", level: "Never Trust, Always Verify", pct: 96 },
        { name: "Strategic Analytics", level: "Mathematical Problem Solving", pct: 95 },
        { name: "High-Pressure Exec", level: "Hackathon & Incident Response", pct: 92 },
        { name: "Cross-Team Leadership", level: "CREST & TechFest Direction", pct: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <section id="skills" className="section" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-subtitle">
          <Layers size={14} /> TECH_STACK // ARSENAL_MATRIX
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal & Capability Matrix
        </motion.h2>

        <motion.div
          className="grid grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glarePosition="all"
                scale={1.01}
                transitionSpeed={1000}
                style={{ height: "100%" }}
              >
                <div
                  className="cyber-card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: `2px solid ${category.color}`,
                    padding: "1.75rem",
                  }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot dot-red" />
                      <span className="terminal-dot dot-yellow" />
                      <span className="terminal-dot dot-green" />
                    </div>
                    <span style={{ color: category.color }}>{category.id}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.4rem",
                    }}
                  >
                    <div
                      style={{
                        color: category.color,
                        padding: "0.55rem",
                        background: category.bg,
                        borderRadius: "8px",
                        border: `1px solid ${category.color}30`,
                        boxShadow: `0 0 12px ${category.bg}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {category.icon}
                    </div>
                    <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Visual Capability Meters */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      marginTop: "auto",
                    }}
                  >
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem", fontFamily: "var(--font-mono)" }}>
                          <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>$ {skill.name}</span>
                          <span style={{ color: category.color, fontSize: "0.75rem" }}>{skill.pct}%</span>
                        </div>
                        
                        {/* Visual Progress Bar */}
                        <div style={{ width: "100%", height: "4px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIndex * 0.05, ease: "easeOut" }}
                            style={{
                              height: "100%",
                              background: `linear-gradient(90deg, ${category.color}80, ${category.color})`,
                              boxShadow: `0 0 8px ${category.color}`,
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                        <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
