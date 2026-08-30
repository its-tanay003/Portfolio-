import { useRef } from "react";
import { Calendar, CheckCircle2, Globe, Building2, ShieldAlert, Briefcase, Share2 } from "lucide-react";
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
      title: "Head of Social Media",
      company: "Department of Student Research and Project (DSRP), LPU",
      type: "University Department • Research & Project Promotion",
      location: "On-site / Hybrid",
      duration: "Apr 2026 – Present",
      logId: "LOG // DSRP_LEADERSHIP",
      icon: <Share2 size={20} color="#a855f7" />,
      badgeColor: "#a855f7",
      points: [
        "Spearhead digital outreach, social media strategy, and brand visibility for the Department of Student Research and Project (DSRP).",
        "Direct the digital promotion of high-impact student innovations, research publications, and technical project milestones to drive engagement across university ecosystems.",
      ],
    },
    {
      title: "Head of Marketing",
      company: "CREST",
      type: "Full-time • Student Organization",
      location: "On-site / Hybrid",
      duration: "Apr 2026 – Present",
      logId: "LOG // CREST_LEADERSHIP",
      icon: <Building2 size={20} color="var(--accent-cyan)" />,
      badgeColor: "var(--accent-cyan)",
      points: [
        "Lead total marketing strategy and brand positioning, overseeing omnichannel marketing campaigns and end-to-end social media operations to drive audience engagement and brand loyalty.",
        "Spearhead cross-functional team building, outreach analytics, and campaign execution.",
      ],
    },
    {
      title: "Independent Penetration Tester",
      company: "Freelance Bug Bounty Hunter",
      type: "Offensive Security & Recon Automation",
      location: "Global / Remote",
      duration: "2025 — Present",
      logId: "LOG // BUG_BOUNTY_HUNTER",
      icon: <ShieldAlert size={20} color="var(--accent-green)" />,
      badgeColor: "var(--accent-green)",
      points: [
        "Built and deployed an autonomous recon pipeline using Bash, Subfinder, and Nuclei to continuously scan scopes for global Bug Bounty programs.",
        "Identified potential attack surfaces, zero-day vectors, and misconfigurations across web applications and API infrastructure.",
      ],
    },
    {
      title: "Corporate Job Simulations",
      company: "JPMorgan Chase, Mastercard & Deloitte Australia",
      type: "Virtual Experience Programs",
      location: "Virtual Labs",
      duration: "2026",
      logId: "LOG // CORP_SIMULATIONS",
      icon: <Globe size={20} color="#a855f7" />,
      badgeColor: "#a855f7",
      points: [
        "JPMorgan Chase (SWE): Interface development, financial data feed analysis, and system telemetry visualization.",
        "Mastercard (Threat Intelligence & Auth): Authentication protocols review and threat landscape analysis.",
        "Deloitte Australia (Cybersecurity): Enterprise vulnerability assessments and defensive mitigation strategies.",
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
        <div className="section-subtitle">
          <Briefcase size={14} /> TRACK_RECORD // FIELD_OPERATIONS
        </div>
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
              maxWidth: "920px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
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
                    className="cyber-card"
                    style={{ position: "relative", overflow: "hidden", borderTop: `2px solid ${exp.badgeColor}` }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <span className="terminal-dot dot-red" />
                        <span className="terminal-dot dot-yellow" />
                        <span className="terminal-dot dot-green" />
                      </div>
                      <span style={{ color: exp.badgeColor }}>{exp.logId}</span>
                    </div>

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
                          <div style={{ padding: "0.45rem", background: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                            {exp.icon}
                          </div>
                          <h3
                            style={{
                              fontSize: "1.3rem",
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
                            gap: "0.65rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <span style={{ color: exp.badgeColor, fontWeight: "600", fontSize: "1rem", fontFamily: "var(--font-mono)" }}>
                            {exp.company}
                          </span>
                          <span style={{ color: "var(--border-subtle)" }}>•</span>
                          <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          color: "var(--text-primary)",
                          fontSize: "0.82rem",
                          background: "rgba(3, 7, 18, 0.8)",
                          padding: "0.35rem 0.8rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border-color)",
                          fontFamily: "var(--font-mono)",
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
                              fontSize: "0.92rem",
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
