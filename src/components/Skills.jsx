import React from 'react';
import { Code, Terminal, Shield, Cpu, Lock, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity Toolkit",
      icon: <Shield size={28} />,
      color: "var(--accent-primary)",
      bg: "rgba(14, 165, 233, 0.1)",
      skills: ["Kali Linux", "Network Security Protocols", "Ethical Hacking Methodologies", "Vulnerability Assessment", "Penetration Testing"]
    },
    {
      title: "Core Languages & Web Tech",
      icon: <Code size={28} />,
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "System Architecture",
      icon: <Network size={28} />,
      color: "var(--accent-secondary)",
      bg: "rgba(16, 185, 129, 0.1)",
      skills: ["IoT Architecture", "Hardware-Software Data Fusion", "Real-Time Data Processing", "Systems Integration"]
    },
    {
      title: "Problem Solving",
      icon: <Cpu size={28} />,
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
      skills: ["Data Structures & Algorithms", "Analytical Thinking", "Strategic Execution", "High-Pressure Team Management", "Adaptability"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h2>
        
        <motion.div 
          className="grid grid-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" scale={1.02} transitionSpeed={1000} style={{ height: '100%' }}>
                <div className="glass-card" style={{ height: '100%', borderTop: `2px solid ${category.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ color: category.color, padding: '0.75rem', background: category.bg, borderRadius: '12px', boxShadow: `0 0 20px ${category.bg}` }}>
                      {category.icon}
                    </div>
                    <h3 style={{ fontSize: '1.3rem' }}>{category.title}</h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {category.skills.map((skill, sIndex) => (
                      <motion.span 
                        key={sIndex} 
                        whileHover={{ scale: 1.05, backgroundColor: category.bg, borderColor: category.color, color: '#fff' }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        style={{ 
                          padding: '0.5rem 1rem', 
                          background: 'var(--bg-secondary)', 
                          border: '1px solid var(--border-color)', 
                          borderRadius: '8px', 
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          cursor: 'default'
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
