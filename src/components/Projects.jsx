import { useRef } from "react";
import { Code, ExternalLink, Activity, ShieldCheck, Terminal, Cpu, FolderGit2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const projects = [
    {
      id: "SEC_DOSSIER // 01",
      title: "Silent Heart Attack Warning System",
      domain: "Patent Pending • IoT HealthTech Security",
      image: "/silent_heart_iot.jpg",
      description:
        "Developing a patent-pending system focused on the early detection of silent heart attacks using a multi-sensor array. Integrating hardware (sensors), firmware, and real-time cloud data telemetry to build a life-saving, secure healthcare IoT architecture.",
      tags: [
        "Patent Pending",
        "Multi-Sensor Array",
        "IoT Hardware Security",
        "Cloud Telemetry",
        "Biometric Defense",
      ],
      icon: <Activity size={20} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#f43f5e",
      bg: "rgba(244, 63, 94, 0.12)",
      statusBadge: "PATENT PENDING",
      metrics: "Live Sensor Grid • Edge Anomaly Engine",
    },
    {
      id: "SEC_DOSSIER // 02",
      title: "LLM Security Assessment Framework",
      domain: "AI Security • Adversarial ML Defense",
      image: "/llm_security_suite.jpg",
      description:
        "Built an open-source testing suite utilizing the Garak framework to automate prompt injection, data exfiltration, and adversarial ML testing against enterprise LLMs, mapped to the OWASP LLM Top 10 vulnerabilities.",
      tags: [
        "Garak Framework",
        "Prompt Injection",
        "Adversarial ML",
        "OWASP LLM Top 10",
        "Python Security",
      ],
      icon: <ShieldCheck size={20} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.12)",
      statusBadge: "AI DEFENSE SUITE",
      metrics: "OWASP Top 10 • Prompt Injection Shield",
    },
    {
      id: "SEC_DOSSIER // 03",
      title: "Autonomous Bug Bounty Recon Pipeline",
      domain: "Offensive Security • Automated Recon",
      image: "/recon_pipeline.jpg",
      description:
        "Engineered an automated continuous reconnaissance pipeline utilizing Bash scripting, Subfinder, and Nuclei to continuously scan scopes, discover attack surfaces, and identify vulnerabilities for global Bug Bounty programs.",
      tags: [
        "Nuclei",
        "Subfinder",
        "Bash Automation",
        "Kali Linux",
        "Vulnerability Scanning",
      ],
      icon: <Terminal size={20} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#00f0ff",
      bg: "rgba(0, 240, 255, 0.12)",
      statusBadge: "PRODUCTION RECON",
      metrics: "Subfinder + Nuclei • Auto-Scope Scan",
    },
    {
      id: "SEC_DOSSIER // 04",
      title: "AI-Driven Impact Architectures",
      domain: "Solution Challenge 2026 & IIT Madras",
      image: "/ai_road_safety.jpg",
      description:
        "Building impactful, AI-driven architectures to address modern global problems and critical road safety challenges developed for IIT Madras Road Safety Hackathon 2026 under strict technical constraints.",
      tags: [
        "Artificial Intelligence",
        "IIT Madras 2026",
        "Cloud Systems",
        "Rapid Prototyping",
      ],
      icon: <Cpu size={20} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.12)",
      statusBadge: "HACKATHON 2026",
      metrics: "Computer Vision • Smart City Fusion",
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

          <div className="grid grid-2" style={{ gap: "2.5rem" }}>
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
                      position: "relative",
                      overflow: "hidden",
                      padding: "0",
                      borderTop: `3px solid ${project.color}`,
                    }}
                  >
                    {/* Visual Preview Banner */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "220px",
                        overflow: "hidden",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                        background: "#020617",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease, filter 0.5s ease",
                          filter: "brightness(0.9) contrast(1.1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.06)";
                          e.currentTarget.style.filter = "brightness(1.05) contrast(1.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(0.9) contrast(1.1)";
                        }}
                      />
                      
                      {/* Visual Scanline Gradient Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(to top, rgba(3, 7, 18, 0.95) 0%, rgba(3, 7, 18, 0.2) 60%, transparent 100%)`,
                          pointerEvents: "none",
                        }}
                      />

                      {/* Top Visual Badges */}
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          right: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: "700",
                            letterSpacing: "0.08em",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "4px",
                            background: "rgba(3, 7, 18, 0.85)",
                            color: project.color,
                            border: `1px solid ${project.color}60`,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {project.statusBadge}
                        </span>

                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-primary)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "4px",
                            background: "rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {project.id}
                        </span>
                      </div>

                      {/* Bottom Image Metrics Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "14px",
                          zIndex: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          color: "var(--text-secondary)",
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: project.color, boxShadow: `0 0 6px ${project.color}` }} />
                        <span>{project.metrics}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div style={{ padding: "1.6rem 1.8rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "0.8rem",
                          gap: "1rem",
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontSize: "1.25rem",
                              marginBottom: "0.25rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            {project.title}
                          </h3>
                          <span style={{ fontSize: "0.82rem", color: project.color, fontFamily: "var(--font-mono)" }}>
                            {project.domain}
                          </span>
                        </div>

                        <div style={{ display: "flex", gap: "0.65rem", flexShrink: 0 }}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "var(--text-secondary)",
                                padding: "0.45rem",
                                background: "rgba(255, 255, 255, 0.05)",
                                borderRadius: "6px",
                                border: "1px solid var(--border-color)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              aria-label="View Source Code"
                            >
                              <Code size={16} />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "var(--text-secondary)",
                                padding: "0.45rem",
                                background: "rgba(255, 255, 255, 0.05)",
                                borderRadius: "6px",
                                border: "1px solid var(--border-color)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              aria-label="View Live Project"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.92rem",
                          marginBottom: "1.4rem",
                          flex: 1,
                          lineHeight: "1.68",
                        }}
                      >
                        {project.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.4rem",
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
                              background: "rgba(3, 7, 18, 0.85)",
                              padding: "0.25rem 0.55rem",
                              borderRadius: "4px",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
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
