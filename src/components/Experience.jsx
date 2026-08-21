import { useRef } from "react";
import { Calendar, CheckCircle2, Globe, Building2, ShieldAlert } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const experiences = [
    {
      title: "Head of Marketing",
      company: "CREST",
      type: "Full-time • Student Organization",
      location: "On-site / Hybrid",
      duration: "Apr 2026 – Present",
      icon: <Building2 size={22} color="var(--accent-primary)" />,
      badgeColor: "var(--accent-primary)",
      points: [
        "Lead total marketing strategy and brand positioning, overseeing omnichannel marketing campaigns and end-to-end social media operations to drive audience engagement and brand loyalty.",
        "Spearhead cross-functional team building, outreach analytics, and campaign execution.",
      ],
    },
    {
      title: "Independent Penetration Tester",
      company: "Freelance Bug Bounty Hunter",
      type: "Offensive Security & Recon",
      location: "Global / Remote",
      duration: "2025 — Present",
      icon: <ShieldAlert size={22} color="var(--accent-secondary)" />,
      badgeColor: "var(--accent-secondary)",
      points: [
        "Built and deployed an autonomous recon pipeline using Bash, Subfinder, and Nuclei to continuously scan scopes for global Bug Bounty programs.",
        "Identified potential attack vectors, misconfigurations, and vulnerabilities across web assets and API endpoints.",
      ],
    },
    {
      title: "Corporate Job Simulations",
      company: "JPMorgan Chase, Mastercard & Deloitte Australia",
      type: "Virtual Experience Programs",
      location: "Remote Simulation",
      duration: "2026",
      icon: <Globe size={22} color="#8b5cf6" />,
      badgeColor: "#8b5cf6",
      points: [
        "Completed SWE simulation at JPMorgan Chase: Interface development, real-time financial data feed analysis, and system visualization.",
        "Threat Intelligence & Auth at Mastercard: Security architecture analysis and authentication protocol evaluation.",
        "Practical security assessments at Deloitte Australia: Identifying network vulnerabilities and designing defensive remediation strategies.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="container">
        <motion.div style={{ y: yParallax }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Experience & Simulations
          </motion.h2>

          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                }}
              >
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  glareEnable={true}
                  glareMaxOpacity={0.08}
                  glarePosition="all"
                  transitionSpeed={1500}
                >
                  <div
                    className="glass-card"
                    style={{ position: "relative", overflow: "hidden", padding: "2.5rem" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: "100%",
                        background: `linear-gradient(to bottom, ${exp.badgeColor}, transparent)`,
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "1rem",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                          {exp.icon}
                          <h3
                            style={{
                              fontSize: "1.35rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            {exp.title}
                          </h3>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <span style={{ color: exp.badgeColor, fontWeight: "600", fontSize: "1.05rem" }}>
                            {exp.company}
                          </span>
                          <span style={{ color: "var(--border-color)" }}>•</span>
                          <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--text-primary)",
                          fontSize: "0.85rem",
                          background: "rgba(255,255,255,0.05)",
                          padding: "0.4rem 0.9rem",
                          borderRadius: "20px",
                          border: "1px solid var(--border-color)",
                          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Calendar size={14} color={exp.badgeColor} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1rem" }}>
                      {exp.points.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                          <CheckCircle2 size={16} color={exp.badgeColor} style={{ marginTop: "0.25rem", flexShrink: 0 }} />
                          <p
                            style={{
                              color: "var(--text-secondary)",
                              lineHeight: "1.65",
                              fontSize: "0.95rem",
                              margin: 0,
                            }}
                          >
                            {point}
                          </p>
                        </div>
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

export default Experience;
