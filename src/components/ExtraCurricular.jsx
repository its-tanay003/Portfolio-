import React from 'react';
import { Users, Flag, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const ExtraCurricular = () => {
  const activities = [
    {
      role: "Team Leader",
      organization: "National Hackathon (IIT Ropar)",
      description: "Led a competitive development team under strict deadlines. Managed the overall project vision, distributed technical tasks, and ensured the team stayed focused and productive.",
      icon: <Users size={24} />
    },
    {
      role: "Core Organizer",
      organization: "University TechFest (LPU)",
      description: "Coordinated with multiple cross-functional teams to contribute to the successful execution of LPU's largest technical festival. Managed logistics, team communications, and event timelines.",
      icon: <Megaphone size={24} />
    },
    {
      role: "Active Participant",
      organization: "Road Safety Hackathon 2026 & Solution Challenge",
      description: "Building impactful, AI-driven applications to solve prominent societal issues. Applying previous leadership experiences to refine execution strategies and technical processes.",
      icon: <Flag size={24} />
    }
  ];

  return (
    <section id="extracurricular" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Extra-Curricular Activities
        </motion.h2>
        
        <div className="grid grid-3">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-card" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-primary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    {activity.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{activity.role}</h3>
                    <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>{activity.organization}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
