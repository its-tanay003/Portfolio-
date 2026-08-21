import { Users, Flag, Trophy, Sparkles, Network } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ExtraCurricular = () => {
  const leadershipItems = [
    {
      category: "Elite Competitive Development",
      role: "Hackathon Competitor",
      event: "IIT Madras (Road Safety Hackathon 2026)",
      description:
        "Actively developing real-world, scalable solutions to critical safety challenges under strict technical constraints.",
      icon: <Trophy size={24} />,
      color: "var(--accent-primary)",
      bg: "rgba(14, 165, 233, 0.1)",
    },
    {
      category: "Elite Competitive Development",
      role: "Team Lead",
      event: "IIT Ropar (National Hackathon)",
      description:
        "Directed a cross-functional team, managing task delegation and ensuring focused, high-pressure execution to deliver a working prototype before deadline.",
      icon: <Users size={24} />,
      color: "var(--accent-secondary)",
      bg: "rgba(16, 185, 129, 0.1)",
    },
    {
      category: "Elite Competitive Development",
      role: "Competitive Programmer",
      event: "NITK Surathkal (Hack the Thread)",
      description:
        "Strengthened competitive coding and collaborative problem-solving skills in a high-tier development environment.",
      icon: <Network size={24} />,
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)",
    },
    {
      category: "Community Leadership & AI Initiatives",
      role: "Architect & Builder",
      event: "Solution Challenge 2026",
      description:
        "Building impactful, AI-driven architectures to address modern global problems with sustainable technology.",
      icon: <Sparkles size={24} />,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
    },
    {
      category: "Community Leadership & AI Initiatives",
      role: "Core Organizer",
      event: "College TechFest",
      description:
        "Coordinated multiple technical teams, managing logistics, communications, and execution for the university's largest technical festival.",
      icon: <Flag size={24} />,
      color: "#06b6d4",
      bg: "rgba(6, 182, 212, 0.1)",
    },
  ];

  return (
    <section
      id="extracurricular"
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
                  className="glass-card"
                  style={{
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: `2px solid ${item.color}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.75rem",
                        background: item.bg,
                        color: item.color,
                        borderRadius: "12px",
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
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: item.color,
                        }}
                      >
                        {item.category}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          color: "var(--text-primary)",
                          marginTop: "0.15rem",
                        }}
                      >
                        {item.event}
                      </h3>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                        }}
                      >
                        Role: {item.role}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      fontSize: "0.95rem",
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
