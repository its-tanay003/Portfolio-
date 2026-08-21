import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Certifications = () => {
  const certifications = [
    {
      name: "Fundamentals of Info Sec",
      issuer: "Infosys",
      type: "Information Security Foundation",
      glow: "rgba(14, 165, 233, 0.3)",
      color: "var(--accent-primary)",
    },
    {
      name: "Intro to Cyber Security & Python",
      issuer: "Infosys",
      type: "Cybersecurity & Automation",
      glow: "rgba(16, 185, 129, 0.3)",
      color: "var(--accent-secondary)",
    },
    {
      name: "Global Cyber Security Simulation",
      issuer: "Deloitte Australia",
      type: "Practical Corporate Simulation",
      glow: "rgba(139, 92, 246, 0.3)",
      color: "#8b5cf6",
    },
    {
      name: "Cybersecurity Job Simulation",
      issuer: "Mastercard",
      type: "Threat Intelligence & Auth",
      glow: "rgba(239, 68, 68, 0.3)",
      color: "#ef4444",
    },
    {
      name: "Software Engineering Simulation",
      issuer: "JPMorgan Chase",
      type: "System & Financial Data Feeds",
      glow: "rgba(59, 130, 246, 0.3)",
      color: "#3b82f6",
    },
    {
      name: "QuizOff 2026",
      issuer: "Google Gemini / Unstop",
      type: "AI & Competitive Assessment",
      glow: "rgba(245, 158, 11, 0.3)",
      color: "#f59e0b",
    },
    {
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
                  className="glass-card"
                  style={{
                    height: "100%",
                    padding: "2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: `2px solid ${cert.color}`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "20%",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      background: cert.glow,
                      filter: "blur(40px)",
                      opacity: 0.3,
                      zIndex: 0,
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        background: "rgba(255,255,255,0.05)",
                        color: cert.color,
                        borderRadius: "12px",
                        marginBottom: "1.2rem",
                        border: "1px solid var(--border-color)",
                        boxShadow: `0 0 15px ${cert.glow}`,
                      }}
                    >
                      <Award size={26} />
                    </div>

                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      {cert.name}
                    </h3>
                    
                    <p
                      style={{
                        color: cert.color,
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {cert.issuer}
                    </p>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
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
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        padding: "0.35rem 0.75rem",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "20px",
                        border: "1px solid var(--border-color)",
                        width: "fit-content",
                        marginTop: "auto",
                      }}
                    >
                      <CheckCircle2 size={14} color={cert.color} />
                      <span>Verified Credential</span>
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
