import { Award, CheckCircle2, Key } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Certifications = () => {
  const certifications = [
    {
      id: "CERT // INFOSYS_01",
      name: "Fundamentals of Info Sec",
      issuer: "Infosys",
      type: "Information Security Foundation",
      glow: "rgba(0, 240, 255, 0.3)",
      color: "var(--accent-cyan)",
    },
    {
      id: "CERT // INFOSYS_02",
      name: "Intro to Cyber Security & Python",
      issuer: "Infosys",
      type: "Cybersecurity & Automation",
      glow: "rgba(16, 185, 129, 0.3)",
      color: "var(--accent-green)",
    },
    {
      id: "SIM // DELOITTE_AU",
      name: "Global Cyber Security Simulation",
      issuer: "Deloitte Australia",
      type: "Practical Corporate Simulation",
      glow: "rgba(168, 85, 247, 0.3)",
      color: "#a855f7",
    },
    {
      id: "SIM // MASTERCARD",
      name: "Cybersecurity Job Simulation",
      issuer: "Mastercard",
      type: "Threat Intelligence & Auth",
      glow: "rgba(244, 63, 94, 0.3)",
      color: "#f43f5e",
    },
    {
      id: "SIM // JPMORGAN",
      name: "Software Engineering Simulation",
      issuer: "JPMorgan Chase",
      type: "Financial Data Feeds & SWE",
      glow: "rgba(56, 189, 248, 0.3)",
      color: "#38bdf8",
    },
    {
      id: "COMP // QUIZOFF_26",
      name: "QuizOff 2026",
      issuer: "Google Gemini / Unstop",
      type: "AI & Competitive Assessment",
      glow: "rgba(251, 191, 36, 0.3)",
      color: "#fbbf24",
    },
    {
      id: "CODE // NEOCOLAB",
      name: "Computer Programming",
      issuer: "Neo Colab",
      type: "Algorithms & Problem Solving",
      glow: "rgba(6, 182, 212, 0.3)",
      color: "#06b6d4",
    },
  ];

  return (
    <section
      id="certifications"
      className="section"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="section-subtitle">
          <Key size={14} /> CREDENTIALS // CRYPTOGRAPHIC_VERIFIED
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Simulations
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glarePosition="all"
                scale={1.03}
                transitionSpeed={1000}
                style={{ height: "100%" }}
              >
                <div
                  className="cyber-card"
                  style={{
                    height: "100%",
                    padding: "1.75rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: `2px solid ${cert.color}`,
                  }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot dot-red" />
                      <span className="terminal-dot dot-yellow" />
                      <span className="terminal-dot dot-green" />
                    </div>
                    <span style={{ color: cert.color, fontSize: '0.72rem' }}>{cert.id}</span>
                  </div>

                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "44px",
                        height: "44px",
                        background: "rgba(255,255,255,0.04)",
                        color: cert.color,
                        borderRadius: "8px",
                        marginBottom: "1rem",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: `0 0 12px ${cert.glow}`,
                      }}
                    >
                      <Award size={22} />
                    </div>

                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.3rem", color: "var(--text-primary)" }}>
                      {cert.name}
                    </h3>
                    
                    <p
                      style={{
                        color: cert.color,
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {cert.issuer}
                    </p>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.82rem",
                        marginBottom: "1.2rem",
                        flex: 1,
                      }}
                    >
                      {cert.type}
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--text-primary)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        padding: "0.3rem 0.65rem",
                        background: "rgba(3, 7, 18, 0.8)",
                        borderRadius: "4px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        width: "fit-content",
                        marginTop: "auto",
                      }}
                    >
                      <CheckCircle2 size={13} color={cert.color} />
                      <span>AUTHENTICATED</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
