import React, { useRef } from 'react';
import { BookOpen, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="container">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          About Me & Education
        </motion.h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center', gap: '4rem' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ y: yLeft }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Hi everyone, I’m Tanay Tanishk! I am currently pursuing my B.Tech in Computer Science with a specialization in Cybersecurity at Lovely Professional University. I come from a strong analytical background, having successfully qualified for JEE Mains, which instilled in me a deep appreciation for strategic problem-solving.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              I am passionate about cybersecurity and addressing real-world challenges. Along with my academics, I focus heavily on practical learning—building things, experimenting, and improving through real experiences rather than just theoretical study. My main areas of interest include ethical hacking, network security, and IoT-based systems, where I aim to create impactful and secure solutions.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              One of the most defining aspects of my journey has been competitive development. From leading a team at a national-level hackathon at IIT Ropar to currently tackling challenges at the Road Safety Hackathon 2026 (IIT Madras) and the Solution Challenge 2026, I thrive in high-pressure environments. I focus a lot on how I approach problems: thinking strategically, staying consistent, and continuously improving through practical, hands-on execution.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
              <div style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <GraduationCap size={20} color="var(--accent-primary)" />
                  <h4 style={{ color: 'var(--text-primary)' }}>Degree & University</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>B.Tech in Computer Science Engineering<br/>Lovely Professional University, Punjab (Expected 2029)</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-secondary)', paddingLeft: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--accent-secondary)" />
                  <h4 style={{ color: 'var(--text-primary)' }}>Specialization</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Cybersecurity</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="grid" style={{ gridTemplateColumns: '1fr', gap: '2rem', y: yRight }}>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" transitionSpeed={1500}>
              <motion.div 
                className="glass-card" 
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, type: "spring" } } }}
              >
                <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', boxShadow: '0 0 20px rgba(14,165,233,0.2)' }}>
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Core Coursework</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Cryptography', 'Network Security', 'Operating Systems', 'DSA', 'Ethical Hacking', 'Database Management'].map(course => (
                      <span key={course} style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(0,0,0,0.4)', borderRadius: '20px', color: 'var(--text-primary)', border: '1px solid var(--border-color)', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
            
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" transitionSpeed={1500}>
              <motion.div 
                className="glass-card" 
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, type: "spring" } } }}
              >
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)', boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Academic Focus</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                    Building a robust foundation in secure systems architecture, network security, and modern computing. Actively bridging the gap between classroom theory and real-world execution through continuous hackathon participation and patent-pending IoT research.
                  </p>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
