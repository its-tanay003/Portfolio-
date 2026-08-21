import { Code, Shield, Terminal, Cloud, Brain, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={26} />,
      color: "#38bdf8",
      bg: "rgba(56, 189, 248, 0.1)",
      skills: [
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "C/C++",
        "Rust",
        "Bash Scripting",
      ],
    },
    {
      title: "Cyber Tooling & OS",
      icon: <Terminal size={26} />,
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)",
      skills: [
        "Kali Linux",
        "Nuclei",
        "Subfinder",
        "Burp Suite Pro",
        "Metasploit",
        "Nmap",
        "Wireshark",
      ],
    },
    {
      title: "AI & LLM Security",
      icon: <Brain size={26} />,
      color: "#a855f7",
      bg: "rgba(168, 85, 247, 0.1)",
      skills: [
        "Adversarial ML",
        "Prompt Injection",
        "Garak Framework",
        "OWASP LLM Top 10",
        "LLM Red Teaming",
        "Data Exfiltration Defense",
      ],
    },
    {
      title: "Offensive Security",
      icon: <Lock size={26} />,
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
      skills: [
        "Red Teaming",
        "Web Pen Testing",
        "Network Security",
        "Active Directory",
        "Recon Pipelines",
        "Vulnerability Scanning",
      ],
    },
    {
      title: "Cloud & DevSecOps",
      icon: <Cloud size={26} />,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
      skills: [
        "AWS IAM",
        "GCP",
        "Kubernetes",
        "CI/CD Security",
        "Cloud Architecture",
      ],
    },
    {
      title: "Core Attributes & Mindset",
      icon: <Shield size={26} />,
      color: "#06b6d4",
      bg: "rgba(6, 182, 212, 0.1)",
      skills: [
        "Zero-Trust Architecture",
        "Strategic & Analytical Thinking",
        "High-Pressure Execution",
        "Teamwork & Team Building",
        "Consistent & Practical Learner",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <section id="skills" className="section" style={{ position: "relative" }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills & Tooling
        </motion.h2>

        <motion.div
          className="grid grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                    display: "flex",
                    flexDirection: "column",
                    borderTop: `2px solid ${category.color}`,
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        color: category.color,
                        padding: "0.6rem",
                        background: category.bg,
                        borderRadius: "10px",
                        boxShadow: `0 0 15px ${category.bg}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {category.icon}
                    </div>
                    <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)" }}>{category.title}</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "auto",
                    }}
                  >
                    {category.skills.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: category.bg,
                          borderColor: category.color,
                          color: "#fff",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        style={{
                          padding: "0.35rem 0.75rem",
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          cursor: "default",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
