import { useRef } from "react";
import { BookOpen, ShieldCheck, GraduationCap, Award, Compass, Heart, Terminal, Cpu } from "lucide-react";
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
        <div className="section-subtitle">
          <Terminal size={14} /> SYS_PROFILE // IDENTITY_VERIFICATION
        </div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          About & Engineering Profile
        </motion.h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            alignItems: "flex-start",
            gap: "3.5rem",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ y: yLeft }}
          >
            <div className="cyber-tag" style={{ marginBottom: '1rem' }}>
              <Cpu size={14} /> CS UNDERGRADUATE // AI & CYBERSECURITY
            </div>

            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.2rem", color: "var(--text-primary)" }}>
              Building Resilient Defense & High-Impact Software
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                marginBottom: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              I am a <strong style={{ color: "var(--text-primary)" }}>Computer Engineering undergraduate</strong> with hands-on full-stack development and cybersecurity fundamentals, sharpened through corporate job simulations with <strong style={{ color: "var(--accent-cyan)" }}>JPMorgan Chase, Mastercard, and Deloitte Australia</strong>.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                marginBottom: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              Backed by a strong mathematical foundation as a <strong style={{ color: "var(--text-primary)" }}>JEE Advanced qualified</strong> candidate (83.89 percentile JEE Mains), I approach code and system hardening with analytical precision. Currently, I serve as a <strong style={{ color: "var(--accent-green)" }}>Research Assistant in the AI Threat Lab</strong> at Lovely Professional University, standing in the <strong style={{ color: "var(--text-primary)" }}>Top 1% of cohort globally</strong>.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                marginBottom: "2rem",
                lineHeight: "1.8",
              }}
            >
              In parallel, I direct marketing and brand positioning as <strong style={{ color: "var(--text-primary)" }}>Head of Marketing at CREST</strong>, orchestrating cross-functional teams and analytics. Actively seeking <strong style={{ color: "var(--accent-cyan)" }}>Summer 2027 internship opportunities</strong> in software development, cybersecurity, or product engineering.
            </p>

            {/* Core Attributes */}
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: 'var(--font-mono)' }}>
                <ShieldCheck size={16} /> CORE_ATTRIBUTES & MINDSET
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {attributes.map((attr, idx) => (
                  <span key={idx} className="cyber-tag">
                    # {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h4 style={{ fontSize: "0.85rem", color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: 'var(--font-mono)' }}>
                <Heart size={16} /> HOBBIES & INTERESTS
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {hobbies.map((hobby, idx) => (
                  <span key={idx} className="cyber-tag green">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid"
            style={{ gridTemplateColumns: "1fr", gap: "1.8rem", y: yRight }}
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
              <div className="cyber-card" style={{ borderTop: "2px solid var(--accent-cyan)" }}>
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>EDU_RECORD // 01</span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(0, 240, 255, 0.1)", borderRadius: "10px", color: "var(--accent-cyan)", border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: "600", textTransform: "uppercase", fontFamily: 'var(--font-mono)' }}>
                      Expected: 2029
                    </span>
                    <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                      Lovely Professional University (LPU)
                    </h3>
                    <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", fontFamily: 'var(--font-mono)' }}>
                      B.Tech CSE (Cybersecurity)
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <Award size={16} color="var(--accent-cyan)" />
                    <span><strong style={{ color: "var(--text-primary)" }}>Standing:</strong> Top 1% of cohort globally</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <ShieldCheck size={16} color="var(--accent-green)" />
                    <span><strong style={{ color: "var(--text-primary)" }}>Lab Role:</strong> Research Assistant in AI Threat Lab</span>
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
              <div className="cyber-card" style={{ borderTop: "2px solid var(--accent-green)" }}>
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>EDU_RECORD // 02</span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "10px", color: "var(--accent-green)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                    <BookOpen size={26} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-green)", fontWeight: "600", textTransform: "uppercase", fontFamily: 'var(--font-mono)' }}>
                      Completed 2025
                    </span>
                    <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                      Narayana E Techno School
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontFamily: 'var(--font-mono)' }}>
                      Senior Secondary (12th Grade)
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                  Rigorous STEM curriculum leading to JEE Advanced qualification and 83.89 percentile in JEE Mains.
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
              <div className="cyber-card" style={{ borderTop: "2px solid var(--accent-purple)" }}>
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>TARGET_OP // SUMMER_2027</span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "rgba(168, 85, 247, 0.1)", borderRadius: "10px", color: "var(--accent-purple)", border: "1px solid rgba(168, 85, 247, 0.2)" }}>
                    <Compass size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                      Target Opportunity
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
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
