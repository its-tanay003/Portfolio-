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
        "Python",
        "SQL",
        "HTML5 / CSS3",
        "JavaScript",
        "C / C++",
        "Rust",
        "Bash Scripting",
      ],
    },
    {
      title: "Cyber Tooling & OS",
      id: "OFFENSIVE_TOOLS",
      icon: <Terminal size={22} />,
      color: "#f43f5e",
      bg: "rgba(244, 63, 94, 0.1)",
      skills: [
        "Kali Linux",
        "Nuclei",
        "Subfinder",
        "Burp Suite Pro",
        "Metasploit",
        "Nmap",
        "Wireshark",
      ],
    },
    {
      title: "AI & LLM Security",
      id: "ADVERSARIAL_AI",
      icon: <Brain size={22} />,
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
      skills: [
        "Adversarial ML",
        "Prompt Injection",
        "Garak Framework",
        "OWASP LLM Top 10",
        "LLM Red Teaming",
        "Data Exfiltration Def",
      ],
    },
    {
      title: "Offensive Security",
      id: "RED_TEAMING",
      icon: <Lock size={22} />,
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
      skills: [
        "Red Teaming",
        "Web Pen Testing",
        "Network Security",
        "Active Directory",
        "Recon Pipelines",
        "Vulnerability Scans",
      ],
    },
    {
      title: "Cloud & DevSecOps",
      id: "INFRA_SEC",
      icon: <Cloud size={22} />,
      color: "#fbbf24",
      bg: "rgba(251, 191, 36, 0.1)",
      skills: [
        "AWS IAM",
        "GCP Security",
        "Kubernetes",
        "CI/CD Security",
        "Cloud Architecture",
      ],
    },
    {
      title: "Core Mindset & Strategy",
      id: "SEC_ARCH",
      icon: <Shield size={22} />,
      color: "#38bdf8",
      bg: "rgba(56, 189, 248, 0.1)",
      skills: [
        "Zero-Trust Architecture",
        "Strategic Problem Solving",
        "High-Pressure Execution",
        "Cross-Functional Leadership",
        "Continuous Learning",
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
          Technical Arsenal & Tooling
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
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glarePosition="all"
                scale={1.02}
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
                      marginBottom: "1.2rem",
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

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.45rem",
                      marginTop: "auto",
                    }}
                  >
                    {category.skills.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: category.bg,
                          borderColor: category.color,
                          color: "#fff",
                        }}
                        style={{
                          padding: "0.3rem 0.65rem",
                          background: "rgba(3, 7, 18, 0.7)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          borderRadius: "4px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          cursor: "default",
                        }}
                      >
                        $ {skill}
                      </motion.span>
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
