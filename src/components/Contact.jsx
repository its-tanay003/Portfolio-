import { Mail, Code, User, Send, MapPin, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div
          className="grid grid-2"
          style={{ gap: "4rem", alignItems: "flex-start" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                background:
                  "linear-gradient(to right, var(--text-primary), var(--accent-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Build & Secure Together.
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                fontSize: "1.05rem",
                lineHeight: "1.8",
              }}
            >
              Whether you are looking for a cybersecurity intern for Summer 2027, want to collaborate on adversarial ML defense, discuss bug bounties, or explore patent-pending IoT health systems, I’d love to connect.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.2rem",
              }}
            >
              {/* Email */}
              <motion.a
                href="mailto:tkkrtanay00@gmail.com"
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem",
                  background: "rgba(14, 165, 233, 0.05)",
                  border: "1px solid rgba(14, 165, 233, 0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(14, 165, 233, 0.15)",
                    borderRadius: "10px",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Email</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    tkkrtanay00@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+918368211098"
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem",
                  background: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(16, 185, 129, 0.15)",
                    borderRadius: "10px",
                    color: "var(--accent-secondary)",
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Phone</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    +91 83682-11098
                  </span>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/tanay-tanishk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem",
                  background: "rgba(139, 92, 246, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(139, 92, 246, 0.15)",
                    borderRadius: "10px",
                    color: "#8b5cf6",
                  }}
                >
                  <User size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>LinkedIn</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    in/tanay-tanishk
                  </span>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/its-tanay003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "10px",
                    color: "var(--text-primary)",
                  }}
                >
                  <Code size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>GitHub</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    its-tanay003
                  </span>
                </div>
              </motion.a>

              {/* Location & Relocation */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.85rem",
                  background: "rgba(245, 158, 11, 0.05)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(245, 158, 11, 0.15)",
                    borderRadius: "10px",
                    color: "#f59e0b",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Location & Mobility</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    Gurugram, India • Relocation: Global
                  </span>
                </div>
              </div>

              {/* Website */}
              <motion.a
                href="https://tanaytanishk.dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  padding: "0.85rem",
                  background: "rgba(6, 182, 212, 0.05)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem",
                    background: "rgba(6, 182, 212, 0.15)",
                    borderRadius: "10px",
                    color: "#06b6d4",
                  }}
                >
                  <Globe size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Web</h4>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.92rem", fontWeight: "500" }}>
                    tanaytanishk.dev
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
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
              <div className="glass-card">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                  Send a Direct Message
                </h3>
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
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontSize: "0.95rem",
                      }}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "0.4rem",
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontSize: "0.95rem",
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        marginBottom: "0.4rem",
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        outline: "none",
                        resize: "vertical",
                        fontSize: "0.95rem",
                      }}
                      placeholder="Share an internship opportunity, project collaboration, or security inquiry..."
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
                      padding: "0.9rem",
                    }}
                  >
                    Send Message <Send size={18} />
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
