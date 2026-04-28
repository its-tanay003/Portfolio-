import React from 'react';
import { Mail, Code, User, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--text-primary), var(--accent-primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Let's build something secure.
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Whether you have a question, an internship opportunity, or just want to talk about cybersecurity, my inbox is always open.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.a 
                href="mailto:tkkrtanay00@gmail.com" 
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}
              >
                <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>tkkrtanay00@gmail.com</span>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/tanay-t-963414378/" target="_blank" rel="noopener noreferrer" 
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}
              >
                <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <User size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>LinkedIn</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>linkedin.com/in/tanay-t-963414378</span>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com/its-tanay003" target="_blank" rel="noopener noreferrer" 
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}
              >
                <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <Code size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>GitHub</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>github.com/its-tanay003</span>
                </div>
              </motion.a>
              
              <motion.div 
                whileHover={{ x: 10 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-primary)' }}
              >
                <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Location</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Gurugram, Haryana / India<br/>(Open to Remote/Relocation)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" transitionSpeed={1500}>
              <div className="glass-card">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                    <input type="text" id="name" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s', fontSize: '1rem' }} placeholder="John Doe" onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                  </div>
                  
                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                    <input type="email" id="email" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s', fontSize: '1rem' }} placeholder="john@example.com" onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                  </div>
                  
                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                    <textarea id="message" rows="4" style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s', fontSize: '1rem' }} placeholder="Your message here..." onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
