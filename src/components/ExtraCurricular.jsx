import { Users, Flag, Trophy, Sparkles, Network, Target } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ExtraCurricular = () => {
  const leadershipItems = [
    {
      category: "Elite Competitive Development",
      logId: "COMP_LOG // IIT_MADRAS",
      role: "Hackathon Competitor",
      event: "IIT Madras (Road Safety Hackathon 2026)",
      description:
        "Actively developing real-world, scalable solutions to critical safety challenges under strict technical constraints.",
      icon: <Trophy size={22} />,
      color: "#00f0ff",
      bg: "rgba(0, 240, 255, 0.1)",
    },
    {
      category: "Elite Competitive Development",
      logId: "LEAD_LOG // IIT_ROPAR",
      role: "Team Lead",
      event: "IIT Ropar (National Hackathon)",
      description:
        "Directed a cross-functional team, managing task delegation and ensuring focused, high-pressure execution to deliver a working prototype before deadline.",
      icon: <Users size={22} />,
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
    },
    {
      category: "Elite Competitive Development",
      logId: "COMP_LOG // NITK_SURATHKAL",
      role: "Competitive Programmer",
      event: "NITK Surathkal (Hack the Thread)",
      description:
        "Strengthened competitive coding and collaborative problem-solving skills in a high-tier development environment.",
      icon: <Network size={22} />,
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
    },
    {
      category: "Community Leadership & AI Initiatives",
      logId: "AI_INIT // SOLUTION_CHALLENGE",
      role: "Architect & Builder",
      event: "Solution Challenge 2026",
      description:
        "Building impactful, AI-driven architectures to address modern global problems with sustainable technology.",
      icon: <Sparkles size={22} />,
      color: "#fbbf24",
      bg: "rgba(251, 191, 36, 0.1)",
    },
    {
      category: "Community Leadership & AI Initiatives",
      logId: "EVENT_LEAD // TECHFEST",
      role: "Core Organizer",
      event: "College TechFest",
      description:
        "Coordinated multiple technical teams, managing logistics, communications, and execution for the university's largest technical festival.",
      icon: <Flag size={22} />,
      color: "#38bdf8",
      bg: "rgba(56, 189, 248, 0.1)",
    },
  ];

  return (
    <section
      id="extracurricular"
      className="section"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="section-subtitle">
          <Target size={14} /> ARENA // HACKATHONS_&_LEADERSHIP
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Hackathons & Tech Leadership
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {leadershipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
                scale={1.02}
                transitionSpeed={1000}
                style={{ height: "100%" }}
              >
                <div
                  className="cyber-card"
                  style={{
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: `2px solid ${item.color}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="terminal-dot dot-red" />
                      <span className="terminal-dot dot-yellow" />
                      <span className="terminal-dot dot-green" />
                    </div>
                    <span style={{ color: item.color }}>{item.logId}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.65rem",
                        background: item.bg,
                        color: item.color,
                        borderRadius: "8px",
                        border: `1px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: item.color,
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item.category}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          color: "var(--text-primary)",
                          marginTop: "0.15rem",
                        }}
                      >
                        {item.event}
                      </h3>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.82rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        Role: {item.role}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      fontSize: "0.92rem",
                      marginTop: "auto",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
