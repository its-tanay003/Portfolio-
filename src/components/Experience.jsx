import React, { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "TechSecure Solutions",
      duration: "May 2024 - Present",
      description:
        "Assisted in vulnerability assessments and penetration testing for web applications. Monitored network traffic for suspicious activities and drafted security incident reports.",
    },
    {
      title: "Student Ambassador",
      company: "University Cyber Club",
      duration: "Aug 2023 - Present",
      description:
        "Organized CTF (Capture The Flag) competitions and workshops on ethical hacking. Mentored junior students in basic network security protocols and secure coding practices.",
    },
  ];

  return (
    <section
      id="experience"
      className="section"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="container">
        <motion.div style={{ y: yParallax }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                }}
              >
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glarePosition="all"
                  transitionSpeed={1500}
                >
                  <div
                    className="glass-card"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))",
                      }}
                    ></div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "1.5rem",
                            color: "var(--text-primary)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {exp.title}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--accent-primary)",
                            fontWeight: "600",
                          }}
                        >
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--text-primary)",
                          fontSize: "0.95rem",
                          background: "rgba(255,255,255,0.05)",
                          padding: "0.5rem 1rem",
                          borderRadius: "20px",
                          border: "1px solid var(--border-color)",
                          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Calendar size={16} color="var(--accent-secondary)" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        lineHeight: "1.8",
                        fontSize: "1.05rem",
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
