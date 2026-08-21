import { useRef } from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Heart, 
  Cpu, 
  Building, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Briefcase, 
  Flame, 
  Zap, 
  Camera, 
  Car, 
  MapPin, 
  PenTool,
  ShieldAlert,
  Binary
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const corporateSimulations = [
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineering Simulation",
      tag: "SWE ARCHITECTURE",
      color: "#00f0ff"
    },
    {
      company: "Mastercard",
      role: "Cybersecurity & Threat Intel",
      tag: "AUTH & DEFENSE",
      color: "#f43f5e"
    },
    {
      company: "Deloitte Australia",
      role: "Cybersecurity Consulting",
      tag: "SYSTEM HARDENING",
      color: "#10b981"
    }
  ];

  const pillars = [
    {
      title: "Zero-Trust Philosophy",
      desc: "Never trust, always verify every layer of identity, code, and communication.",
      icon: <ShieldAlert size={20} />,
      color: "#00f0ff"
    },
    {
      title: "Mathematical Foundations",
      desc: "JEE Advanced qualified with strong algorithmic reasoning and problem-solving.",
      icon: <Binary size={20} />,
      color: "#a855f7"
    },
    {
      title: "High-Pressure Execution",
      desc: "Proven hackathon sprint agility and rapid security prototyping under strict deadlines.",
      icon: <Zap size={20} />,
      color: "#fbbf24"
    },
    {
      title: "Cross-Functional Leadership",
      desc: "Head of Marketing at CREST directing multi-tier teams, analytics, and brand positioning.",
      icon: <Briefcase size={20} />,
      color: "#10b981"
    }
  ];

  const hobbies = [
    { label: "Driving & Riding", icon: <Car size={16} />, color: "#00f0ff" },
    { label: "Photography & Video Editing", icon: <Camera size={16} />, color: "#a855f7" },
    { label: "Exploring New Horizons", icon: <MapPin size={16} />, color: "#10b981" },
    { label: "Creative Writing (Shayri)", icon: <PenTool size={16} />, color: "#f43f5e" }
  ];

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="container">
        <div className="section-subtitle">
          <ShieldCheck size={14} /> SYS_PROFILE // IDENTITY_&_FOUNDATIONS
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About & Engineering Profile
        </motion.h2>

        {/* AI Threat Lab Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <div
            className="cyber-card"
            style={{
              padding: "0",
              overflow: "hidden",
              position: "relative",
              borderTop: "3px solid var(--accent-cyan)",
              background: "#020617",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
              <img
                src="/ai_threat_lab.jpg"
                alt="AI Threat Intelligence Laboratory"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 40%",
                  filter: "brightness(0.85) contrast(1.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(3, 7, 18, 0.96) 0%, rgba(3, 7, 18, 0.7) 50%, rgba(3, 7, 18, 0.85) 100%)",
                }}
              />
              
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: "2rem 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: 2,
                  maxWidth: "750px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                  <span className="cyber-tag" style={{ background: "rgba(0, 240, 255, 0.15)" }}>
                    <Building size={13} /> LPU AI THREAT LAB
                  </span>
                  <span className="cyber-tag green">
                    <CheckCircle2 size={13} /> ACTIVE RESEARCH ASSISTANT
                  </span>
                  <span className="cyber-tag purple">
                    <Award size={13} /> TOP 1% COHORT GLOBALLY
                  </span>
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "0.4rem" }}>
                  Advancing Adversarial ML & Defensive Security Architectures
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
                  Investigating enterprise LLM prompt vulnerabilities, zero-day threat models, and automated defensive mitigations alongside top-tier cybersecurity researchers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: Modular Visual Cards with Spacious Typography */}
        <motion.div style={{ y: yParallax }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              alignItems: "stretch",
            }}
          >
            {/* Bento Card 1: Core Persona & Identity */}
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.06}
              scale={1.01}
              style={{ height: "100%" }}
            >
              <div
                className="cyber-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid var(--accent-cyan)",
                  padding: "1.8rem",
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>OPERATIVE // CORE_IDENTITY</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.4rem" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(0,240,255,0.2), rgba(16,185,129,0.2))",
                      border: "1px solid var(--accent-cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)",
                      boxShadow: "0 0 16px rgba(0,240,255,0.25)"
                    }}
                  >
                    <Cpu size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                      Tanay Tanishk
                    </h3>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent-green)", fontFamily: "var(--font-mono)" }}>
                      Security Engineer & CS Undergrad
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                  Passionate about hardening modern systems, conducting offensive red team operations, and constructing secure, life-saving hardware IoT and AI architectures.
                </p>

                {/* Corporate Simulation Visual Chips */}
                <div style={{ marginTop: "auto" }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Corporate Job Simulations
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {corporateSimulations.map((sim, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.6rem 0.85rem",
                          background: "rgba(3, 7, 18, 0.8)",
                          borderRadius: "6px",
                          border: `1px solid ${sim.color}25`,
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "0.86rem", color: "var(--text-primary)", fontWeight: "600" }}>{sim.company}</div>
                          <div style={{ fontSize: "0.74rem", color: "var(--text-secondary)" }}>{sim.role}</div>
                        </div>
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontFamily: "var(--font-mono)",
                            color: sim.color,
                            background: `${sim.color}15`,
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            border: `1px solid ${sim.color}40`
                          }}
                        >
                          {sim.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Bento Card 2: Academic & Institutional Timeline */}
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.06}
              scale={1.01}
              style={{ height: "100%" }}
            >
              <div
                className="cyber-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid var(--accent-green)",
                  padding: "1.8rem",
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>ACADEMIC // STEM_FOUNDATION</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", marginBottom: "1.5rem" }}>
                  {/* Higher Education */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "0.65rem", background: "rgba(16, 185, 129, 0.12)", borderRadius: "10px", color: "var(--accent-green)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--accent-green)", fontFamily: "var(--font-mono)", fontWeight: "600" }}>
                        2025 – 2029 (EXPECTED)
                      </div>
                      <div style={{ fontSize: "1.05rem", color: "var(--text-primary)", fontWeight: "600" }}>
                        Lovely Professional University
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        B.Tech CSE (Cybersecurity) • Top 1% Globally
                      </div>
                    </div>
                  </div>

                  {/* Secondary Education */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "0.65rem", background: "rgba(0, 240, 255, 0.12)", borderRadius: "10px", color: "var(--accent-cyan)", border: "1px solid rgba(0, 240, 255, 0.25)" }}>
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: "600" }}>
                        COMPLETED 2025
                      </div>
                      <div style={{ fontSize: "1.05rem", color: "var(--text-primary)", fontWeight: "600" }}>
                        Narayana E Techno School
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        12th Grade STEM Curriculum
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exam Milestones Grid */}
                <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.2rem" }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Standardized Milestones
                  </div>
                  <div className="grid grid-2" style={{ gap: "0.75rem" }}>
                    <div style={{ padding: "0.75rem", background: "rgba(3, 7, 18, 0.8)", borderRadius: "6px", border: "1px solid rgba(0,240,255,0.2)" }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>JEE Advanced</div>
                      <div style={{ fontSize: "1rem", color: "var(--accent-cyan)", fontWeight: "700", fontFamily: "var(--font-mono)" }}>
                        QUALIFIED
                      </div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "rgba(3, 7, 18, 0.8)", borderRadius: "6px", border: "1px solid rgba(16,185,129,0.2)" }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>JEE Mains</div>
                      <div style={{ fontSize: "1rem", color: "var(--accent-green)", fontWeight: "700", fontFamily: "var(--font-mono)" }}>
                        83.89 %ile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Bento Card 3: Target Objective & Leadership */}
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.06}
              scale={1.01}
              style={{ height: "100%" }}
            >
              <div
                className="cyber-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid var(--accent-purple)",
                  padding: "1.8rem",
                }}
              >
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <span>CAREER_TARGET // SUMMER_2027</span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1.2rem" }}>
                  <div style={{ padding: "0.65rem", background: "rgba(168, 85, 247, 0.12)", borderRadius: "10px", color: "var(--accent-purple)", border: "1px solid rgba(168, 85, 247, 0.25)" }}>
                    <Target size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: "600" }}>
                      Target Opportunity
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-purple)", fontFamily: "var(--font-mono)" }}>
                      Summer 2027 Internship
                    </div>
                  </div>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.65", marginBottom: "1.3rem" }}>
                  Seeking high-impact roles in <strong style={{ color: "var(--text-primary)" }}>Software Engineering, Cybersecurity, Adversarial AI Defense, or Product Engineering</strong>. Available for on-site & remote global relocation.
                </p>

                {/* CREST Leadership Callout */}
                <div style={{ marginTop: "auto", background: "rgba(3, 7, 18, 0.8)", padding: "0.9rem", borderRadius: "8px", border: "1px solid rgba(168,85,247,0.25)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <Flame size={15} color="var(--accent-purple)" />
                    <span style={{ fontSize: "0.84rem", color: "var(--text-primary)", fontWeight: "600" }}>
                      CREST • Head of Marketing
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    Directing marketing strategies, student engagement, and brand reach for full-time university student organization (Apr 2026 – Present).
                  </p>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Core Mindset & Execution Pillars (Visual 4-Column Grid) */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Sparkles size={18} color="var(--accent-cyan)" /> Core Engineering Mindset
            </h3>

            <div className="grid grid-4" style={{ gap: "1rem" }}>
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="cyber-card"
                  style={{
                    padding: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    borderTop: `2px solid ${pillar.color}`,
                    background: "rgba(8, 14, 28, 0.65)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: pillar.color }}>
                    {pillar.icon}
                    <div style={{ fontSize: "0.92rem", fontWeight: "600", color: "var(--text-primary)" }}>
                      {pillar.title}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Creative Visual Badges */}
          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", padding: "1.2rem 1.6rem", background: "rgba(6, 11, 24, 0.7)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
              <Heart size={16} color="var(--accent-green)" /> HOBBIES_&_LIFESTYLE:
            </div>
            <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
              {hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                    color: hobby.color,
                    background: "rgba(3, 7, 18, 0.9)",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "6px",
                    border: `1px solid ${hobby.color}40`,
                  }}
                >
                  {hobby.icon} {hobby.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
