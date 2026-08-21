import { useRef } from "react";
import { ExternalLink, Code, Activity, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const projects = [
    {
      title: "Silent Heart Attack Warning System",
      subtitle: "Patent Pending • IoT HealthTech Security",
      description:
        "Developing a patent-pending system focused on the early detection of silent heart attacks using a multi-sensor array. Integrating hardware (sensors), software, and real-time cloud data systems to build a meaningful, life-saving IoT solution.",
      tags: [
        "Patent Pending",
        "Multi-Sensor Array",
        "IoT Hardware",
        "Cloud Data Systems",
        "Biometric Security",
      ],
      icon: <Activity size={28} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)",
      statusBadge: "PATENT PENDING",
    },
    {
      title: "LLM Security Assessment Framework",
      subtitle: "AI Security / Adversarial ML",
      description:
        "Built an open-source testing suite utilizing the Garak framework to automate prompt injection, data exfiltration, and adversarial ML testing against enterprise LLMs according to the OWASP LLM Top 10 framework.",
      tags: [
        "Garak Framework",
        "Prompt Injection",
        "Adversarial ML",
        "OWASP LLM Top 10",
        "Python Scripting",
      ],
      icon: <ShieldCheck size={28} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
      statusBadge: "ACTIVE RESEARCH",
    },
    {
      title: "Autonomous Bug Bounty Recon Pipeline",
      subtitle: "Offensive Security / Automated Recon",
      description:
        "Built and deployed an autonomous recon pipeline using Bash, Subfinder, and Nuclei to continuously scan scopes, discover attack surfaces, and identify vulnerabilities for global Bug Bounty programs.",
      tags: [
        "Nuclei",
        "Subfinder",
        "Bash Automation",
        "Kali Linux",
        "Vulnerability Research",
      ],
      icon: <Terminal size={28} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "var(--accent-primary)",
      bg: "rgba(14, 165, 233, 0.1)",
      statusBadge: "PRODUCTION DEPLOYED",
    },
    {
      title: "AI-Driven Impact Architectures",
      subtitle: "Solution Challenge 2026 & Hackathons",
      description:
        "Building impactful, AI-driven architectures to address modern global problems, including real-world scalable safety solutions developed for IIT Madras Road Safety Hackathon 2026 under strict technical constraints.",
      tags: [
        "Artificial Intelligence",
        "IIT Madras 2026",
        "Scalable Architectures",
        "Python",
      ],
      icon: <Cpu size={28} />,
      github: "https://github.com/its-tanay003",
      demo: "",
      color: "var(--accent-secondary)",
      bg: "rgba(16, 185, 129, 0.1)",
      statusBadge: "HACKATHON 2026",
    },
  ];

  return (
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                }}
              >
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
                    className="glass-card"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      borderTop: `2px solid ${project.color}`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "160px",
                        height: "160px",
                        background: project.color,
                        filter: "blur(70px)",
                        opacity: 0.15,
                        zIndex: 0,
                      }}
                    />

                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            color: project.color,
                            padding: "0.7rem",
                            background: project.bg,
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {project.icon}
                        </div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: "700",
                            letterSpacing: "0.08em",
                            padding: "0.3rem 0.65rem",
                            borderRadius: "20px",
                            background: project.bg,
                            color: project.color,
                            border: `1px solid ${project.color}40`,
                          }}
                        >
                          {project.statusBadge}
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: "0.85rem" }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--text-secondary)" }}
                            aria-label="View Source Code"
                          >
                            <Code
                              size={20}
                              style={{ transition: "color 0.3s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--text-primary)")
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
                              size={20}
                              style={{ transition: "color 0.3s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--text-primary)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-secondary)")
                              }
                            />
                          </a>
                        )}
                      </div>
                    </div>

                    <div style={{ position: "relative", zIndex: 1, marginBottom: "0.8rem" }}>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          marginBottom: "0.3rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span style={{ fontSize: "0.85rem", color: project.color, fontWeight: "500" }}>
                        {project.subtitle}
                      </span>
                    </div>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.95rem",
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
                        gap: "0.45rem",
                        position: "relative",
                        zIndex: 1,
                        marginTop: "auto",
                      }}
                    >
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-primary)",
                            background: "rgba(0,0,0,0.35)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "6px",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          {tag}
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
