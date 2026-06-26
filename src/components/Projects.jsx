import React, { useRef } from "react";
import { ExternalLink, Code, Lock, ShieldAlert, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Advanced Parallax Effect
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title:
        "Multi-Sensor Silent Heart Attack Detection System (Patent-Pending)",
      description:
        "Currently developing a patent-pending multi-sensor hardware and software integrated system designed for the early detection of silent heart attacks. Successfully learning how to fuse real-time biometric data with software alerts to build a highly meaningful, life-saving healthcare solution.",
      tags: [
        "IoT Architecture",
        "Hardware/Software Integration",
        "Real-Time Data Systems",
      ],
      icon: <Cpu size={32} />,
      github: "#",
      demo: "#",
      color: "var(--accent-primary)",
      bg: "rgba(14, 165, 233, 0.1)",
    },
    {
      title: "AI-Driven Impact Solutions",
      description:
        "Currently building AI-integrated solutions to address impactful real-world problems for the Solution Challenge 2026, focusing on strategic execution, algorithm efficiency, and practical deployment.",
      tags: ["Artificial Intelligence", "Python", "Web Technologies"],
      icon: <Code size={32} />,
      github: "#",
      demo: "",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)",
    },
    {
      title: "Enterprise Network Security & Pentesting",
      description:
        "Continuously applying ethical hacking techniques in simulated lab environments to map network topologies, execute controlled exploits, and develop robust patching strategies.",
      tags: ["Kali Linux", "Python", "SQL", "Network Security"],
      icon: <ShieldAlert size={32} />,
      github: "#",
      demo: "",
      color: "var(--accent-secondary)",
      bg: "rgba(16, 185, 129, 0.1)",
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
            Featured Security Projects
          </motion.h2>

          <div className="grid grid-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glarePosition="all"
                  scale={1.05}
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
                    }}
                  >
                    {/* Subtle background glow based on project color */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-50px",
                        right: "-50px",
                        width: "200px",
                        height: "200px",
                        background: project.color,
                        filter: "blur(100px)",
                        opacity: 0.2,
                        zIndex: 0,
                      }}
                    ></div>

                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          color: project.color,
                          padding: "0.75rem",
                          background: project.bg,
                          borderRadius: "12px",
                        }}
                      >
                        {project.icon}
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <Code
                              size={20}
                              style={{ transition: "color 0.3s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-primary)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-secondary)")
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
                          >
                            <ExternalLink
                              size={20}
                              style={{ transition: "color 0.3s" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-primary)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-secondary)")
                              }
                            />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.4rem",
                        marginBottom: "1rem",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "1rem",
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
                        gap: "0.5rem",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          style={{
                            fontSize: "0.8rem",
                            color: project.color,
                            fontFamily: "monospace",
                            background: "rgba(0,0,0,0.3)",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "4px",
                            border: `1px solid ${project.bg}`,
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
