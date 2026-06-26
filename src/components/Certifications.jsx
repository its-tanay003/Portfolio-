import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      link: "#",
      glow: "rgba(16, 185, 129, 0.3)",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      link: "#",
      glow: "rgba(14, 165, 233, 0.3)",
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      date: "2023",
      link: "#",
      glow: "rgba(245, 158, 11, 0.3)",
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
          Certifications & Achievements
        </motion.h2>

        <div className="grid grid-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    textAlign: "center",
                    padding: "3rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100px",
                      height: "100px",
                      background: cert.glow,
                      filter: "blur(50px)",
                      opacity: 0.5,
                      zIndex: 0,
                    }}
                  ></div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "1.2rem",
                        background: "rgba(255,255,255,0.05)",
                        color: "var(--text-primary)",
                        borderRadius: "50%",
                        marginBottom: "1.5rem",
                        border: "1px solid var(--border-color)",
                        boxShadow: `0 0 20px ${cert.glow}`,
                      }}
                    >
                      <Award size={40} />
                    </div>
                    <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                      {cert.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "1rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {cert.issuer}
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--accent-primary)",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        padding: "0.5rem 1rem",
                        background: "rgba(14, 165, 233, 0.1)",
                        borderRadius: "20px",
                      }}
                    >
                      <CheckCircle size={16} />
                      <span>Issued: {cert.date}</span>
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
