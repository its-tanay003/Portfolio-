import { useRef } from "react";
import { BookOpen, ShieldCheck, GraduationCap, Award, Compass, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const attributes = [
    "Zero-Trust Architecture Mindset",
    "High-Pressure Execution",
    "Strategic & Analytical Thinking",
    "Teamwork & Team Building",
    "Consistent & Practical Learner"
  ];

  const hobbies = [
    "Driving & Riding",
    "Photography & Video Editing",
    "Exploring New Places",
    "Creative Writing (Shayri)"
  ];

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          About Me & Academic Profile
        </motion.h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            alignItems: "flex-start",
            gap: "4rem",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ y: yLeft }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
              Engineering Secure Systems with Precision
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              I am a <strong style={{ color: "var(--text-primary)" }}>Computer Engineering undergraduate</strong> with hands-on full-stack development and cybersecurity fundamentals, sharpened through rigorous corporate job simulations with <strong style={{ color: "var(--accent-primary)" }}>JPMorgan Chase, Mastercard, and Deloitte Australia</strong>.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              Backed by a strong analytical foundation as a <strong style={{ color: "var(--text-primary)" }}>JEE Advanced qualified</strong> candidate (83.89 percentile JEE Mains), I approach software and security with mathematical rigor and strategic problem-solving. Currently, I serve as a <strong style={{ color: "var(--accent-secondary)" }}>Research Assistant in the AI Threat Lab</strong> at Lovely Professional University (standing in the <strong style={{ color: "var(--text-primary)" }}>Top 1% of cohort globally</strong>).
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "2rem",
                lineHeight: "1.8",
              }}
            >
              Beyond technical builds, I lead marketing and social media strategy as <strong style={{ color: "var(--text-primary)" }}>Head of Marketing at CREST</strong>, combining technical build capability with brand positioning and campaign execution. I am actively seeking <strong style={{ color: "var(--accent-primary)" }}>Summer 2027 internship opportunities</strong> in software development, cybersecurity, or product engineering.
            </p>

            {/* Core Attributes & Hobbies */}
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={18} /> Core Attributes & Mindset
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {attributes.map((attr, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.35rem 0.85rem",
                      background: "rgba(14, 165, 233, 0.08)",
                      border: "1px solid rgba(14, 165, 233, 0.25)",
                      borderRadius: "20px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "1rem", color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Heart size={18} /> Hobbies & Interests
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.35rem 0.85rem",
                      background: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      borderRadius: "20px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid"
            style={{ gridTemplateColumns: "1fr", gap: "1.5rem", y: yRight }}
          >
            {/* Education Card 1: LPU */}
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
              transitionSpeed={1500}
            >
              <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-primary)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(14, 165, 233, 0.1)", borderRadius: "12px", color: "var(--accent-primary)" }}>
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase" }}>Expected 2029</span>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>Lovely Professional University (LPU)</h3>
                    <p style={{ color: "var(--accent-secondary)", fontSize: "0.95rem", fontWeight: "500" }}>B.Tech CSE (Cybersecurity)</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <Award size={16} color="var(--accent-primary)" />
                    <span><strong style={{ color: "var(--text-primary)" }}>Honors & Standing:</strong> Top 1% of cohort globally</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <ShieldCheck size={16} color="var(--accent-secondary)" />
                    <span><strong style={{ color: "var(--text-primary)" }}>Research Assistant:</strong> AI Threat Lab</span>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Education Card 2: Narayana */}
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
              transitionSpeed={1500}
            >
              <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-secondary)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "12px", color: "var(--accent-secondary)" }}>
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: "600", textTransform: "uppercase" }}>Completed 2025</span>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>Narayana E Techno School</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Senior Secondary (12th Grade)</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                  Rigorous STEM training leading to JEE Advanced qualification and 83.89 percentile in JEE Mains.
                </p>
              </div>
            </Tilt>

            {/* Target Objectives Card */}
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
              transitionSpeed={1500}
            >
              <div className="glass-card" style={{ borderLeft: "4px solid #8b5cf6" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px", color: "#8b5cf6" }}>
                    <Compass size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>Target Opportunity</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                      Seeking <strong style={{ color: "var(--text-primary)" }}>Summer 2027 Internships</strong> across Software Development, Cybersecurity, Adversarial AI Research, or Product Engineering. Open to global on-site and remote roles.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
