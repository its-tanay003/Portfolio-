import { useRef } from "react";
import { ExternalLink, Code, Activity, ShieldCheck, Terminal, Cpu, FolderGit2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      id: "SEC_DOSSIER // 01",
      title: "Silent Heart Attack Warning System",
      domain: "Patent Pending • IoT HealthTech Security",
      description:
        "Developing a patent-pending system focused on the early detection of silent heart attacks using a multi-sensor array. Integrating hardware (sensors), firmware, and real-time cloud data telemetry to build a life-saving, secure healthcare IoT architecture.",
      tags: [
        "Patent Pending",
        "Multi-Sensor Array",
        "IoT Hardware Security",
        "Cloud Telemetry",
        "Biometric Defense",
      ],
      icon: <Activity size={24} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#f43f5e",
      bg: "rgba(244, 63, 94, 0.1)",
      statusBadge: "PATENT PENDING",
    },
    {
      id: "SEC_DOSSIER // 02",
      title: "LLM Security Assessment Framework",
      domain: "AI Security • Adversarial ML Defense",
      description:
        "Built an open-source testing suite utilizing the Garak framework to automate prompt injection, data exfiltration, and adversarial ML testing against enterprise LLMs, mapped to the OWASP LLM Top 10 vulnerabilities.",
      tags: [
        "Garak Framework",
        "Prompt Injection",
        "Adversarial ML",
        "OWASP LLM Top 10",
        "Python Security",
      ],
      icon: <ShieldCheck size={24} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
      statusBadge: "AI DEFENSE SUITE",
    },
    {
      id: "SEC_DOSSIER // 03",
      title: "Autonomous Bug Bounty Recon Pipeline",
      domain: "Offensive Security • Automated Recon",
      description:
        "Engineered an automated continuous reconnaissance pipeline utilizing Bash scripting, Subfinder, and Nuclei to continuously scan scopes, discover attack surfaces, and identify vulnerabilities for global Bug Bounty programs.",
      tags: [
        "Nuclei",
        "Subfinder",
        "Bash Automation",
        "Kali Linux",
        "Vulnerability Scanning",
      ],
      icon: <Terminal size={24} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#00f0ff",
      bg: "rgba(0, 240, 255, 0.1)",
      statusBadge: "PRODUCTION RECON",
    },
    {
      id: "SEC_DOSSIER // 04",
      title: "AI-Driven Impact Architectures",
      domain: "Solution Challenge 2026 & IIT Madras",
      description:
        "Building impactful, AI-driven architectures to address modern global problems and critical road safety challenges developed for IIT Madras Road Safety Hackathon 2026 under strict technical constraints.",
      tags: [
        "Artificial Intelligence",
        "IIT Madras 2026",
        "Cloud Systems",
        "Rapid Prototyping",
      ],
      icon: <Cpu size={24} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
      statusBadge: "HACKATHON 2026",
    },
  ];

  return (
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
        <div className="section-subtitle">
          <FolderGit2 size={14} /> SECURITY_REPOSITORIES // IP_&_RESEARCH
        </div>
        <motion.div style={{ y: yParallax }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Flagship & Security Projects
          </motion.h2>

          <div className="grid grid-2" style={{ gap: "2.2rem" }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  type: "spring",
                }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
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
                      position: "relative",
                      overflow: "hidden",
                      borderTop: `2px solid ${project.color}`,
                    }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <span className="terminal-dot dot-red" />
                        <span className="terminal-dot dot-yellow" />
                        <span className="terminal-dot dot-green" />
                      </div>
                      <span style={{ color: project.color }}>{project.id}</span>
                    </div>

                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div
                          style={{
                            color: project.color,
                            padding: "0.6rem",
                            background: project.bg,
                            borderRadius: "8px",
                            border: `1px solid ${project.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {project.icon}
                        </div>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: "700",
                            letterSpacing: "0.08em",
                            padding: "0.25rem 0.55rem",
                            borderRadius: "4px",
                            background: project.bg,
                            color: project.color,
                            border: `1px solid ${project.color}40`,
                          }}
                        >
                          {project.statusBadge}
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--text-secondary)" }}
                            aria-label="View Source Code"
                          >
                            <Code
                              size={18}
                              style={{ transition: "color 0.25s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--accent-cyan)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-secondary)")
                              }
                            />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--text-secondary)" }}
                            aria-label="View Demo"
                          >
                            <ExternalLink
                              size={18}
                              style={{ transition: "color 0.25s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--accent-cyan)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-secondary)")
                              }
                            />
                          </a>
                        )}
                      </div>
                    </div>

                    <div style={{ position: "relative", zIndex: 1, marginBottom: "0.75rem" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          marginBottom: "0.2rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span style={{ fontSize: "0.82rem", color: project.color, fontFamily: "var(--font-mono)" }}>
                        {project.domain}
                      </span>
                    </div>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.92rem",
                        marginBottom: "1.5rem",
                        flex: 1,
                        position: "relative",
                        zIndex: 1,
                        lineHeight: "1.7",
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        position: "relative",
                        zIndex: 1,
                        marginTop: "auto",
                      }}
                    >
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          style={{
                            fontSize: "0.75rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-secondary)",
                            background: "rgba(3, 7, 18, 0.8)",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
