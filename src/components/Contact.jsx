import { Mail, Code, User, Send, MapPin, Phone, Globe, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-subtitle">
          <Lock size={14} /> SECURE_COMMS // TRANSMISSION_PORTAL
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Initialize Transmission
        </motion.h2>

        <div
          className="grid grid-2"
          style={{ gap: "3.5rem", alignItems: "flex-start" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="cyber-tag" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} /> ENCRYPTED_ENDPOINT // DIRECT_DISPATCH
            </div>

            <h3
              style={{
                fontSize: "1.9rem",
                marginBottom: "1rem",
                background: "linear-gradient(to right, var(--text-primary), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Build & Secure Enterprise Systems.
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                fontSize: "1.02rem",
                lineHeight: "1.8",
              }}
            >
              Whether you are looking for a cybersecurity & SWE intern for Summer 2027, want to collaborate on adversarial ML defense, explore Bug Bounty recon pipelines, or discuss patent-pending IoT health architectures, dispatch a secure transmission below.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {/* Email */}
              <motion.a
                href="mailto:tkkrtanay00@gmail.com"
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem 1rem",
                  background: "rgba(0, 240, 255, 0.04)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(0, 240, 255, 0.12)",
                    borderRadius: "6px",
                    color: "var(--accent-cyan)",
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>EMAIL_ADDR</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    tkkrtanay00@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+918368211098"
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem 1rem",
                  background: "rgba(16, 185, 129, 0.04)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(16, 185, 129, 0.12)",
                    borderRadius: "6px",
                    color: "var(--accent-green)",
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>VOICE_COMM</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    +91 83682-11098
                  </span>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/tanay-tanishk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem 1rem",
                  background: "rgba(168, 85, 247, 0.04)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(168, 85, 247, 0.12)",
                    borderRadius: "6px",
                    color: "#a855f7",
                  }}
                >
                  <User size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>LINKEDIN_PROF</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    in/tanay-tanishk
                  </span>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/its-tanay003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem 1rem",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    color: "var(--text-primary)",
                  }}
                >
                  <Code size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GITHUB_REPOS</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    its-tanay003
                  </span>
                </div>
              </motion.a>

              {/* Location & Relocation */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.85rem 1rem",
                  background: "rgba(251, 191, 36, 0.04)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(251, 191, 36, 0.12)",
                    borderRadius: "6px",
                    color: "#fbbf24",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GEOLOCATION</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    Gurugram, India (Global Reloc)
                  </span>
                </div>
              </div>

              {/* Website */}
              <motion.a
                href="https://tanaytanishk.dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem 1rem",
                  background: "rgba(56, 189, 248, 0.04)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    background: "rgba(56, 189, 248, 0.12)",
                    borderRadius: "6px",
                    color: "#38bdf8",
                  }}
                >
                  <Globe size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>ONLINE_DOMAIN</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    tanaytanishk.dev
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
              transitionSpeed={1500}
            >
              <div className="cyber-card" style={{ borderTop: "2px solid var(--accent-cyan)" }}>
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>DISPATCH_FORM // SSL_TLS</span>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        marginBottom: "0.4rem",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: "500",
                      }}
                    >
                      OPERATIVE_NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "rgba(3, 7, 18, 0.8)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "6px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9rem",
                      }}
                      placeholder="e.g. Hiring Manager / Security Lead"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "0.4rem",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: "500",
                      }}
                    >
                      RETURN_EMAIL_ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "rgba(3, 7, 18, 0.8)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "6px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9rem",
                      }}
                      placeholder="contact@enterprise.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        marginBottom: "0.4rem",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: "500",
                      }}
                    >
                      TRANSMISSION_PAYLOAD
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "rgba(3, 7, 18, 0.8)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "6px",
                        color: "var(--text-primary)",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9rem",
                      }}
                      placeholder="Discuss Summer 2027 internship, adversarial ML defense, Bug Bounty collaboration, or security inquiry..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      marginTop: "0.5rem",
                      padding: "0.85rem",
                    }}
                  >
                    <Send size={16} /> TRANSMIT_MESSAGE
                  </motion.button>
                </form>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
