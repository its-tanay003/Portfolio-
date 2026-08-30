import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, ChevronDown, Lock, Activity, Sparkles, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const stats = [
    { label: "ACADEMIC STANDING", value: "Top 1%", sub: "Global Cohort @ LPU" },
    { label: "ANALYTICAL EXCELLENCE", value: "JEE Adv", sub: "83.89 %ile Mains" },
    { label: "RESEARCH & IP", value: "Patent Pending", sub: "Silent Heart IoT System" },
    { label: "CORPORATE SIMULATIONS", value: "3 Global", sub: "JPMorgan • Mastercard • Deloitte" },
  ];

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px', paddingBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Cyber Grid Lines */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', alignItems: 'center', gap: '3rem' }}>
          
          {/* Left Column: Heading & Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: y1 }}
          >
            {/* Role Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-cyan)'
              }}
            >
              <Shield size={16} />
              <span>AI-Enhanced Ethical Hacker & Security Engineer</span>
            </motion.div>
            
            <h1 style={{ marginBottom: '0.8rem', lineHeight: '1.08', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
              Tanay Tanishk <br />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-green) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Cybersecurity & AI Defense
              </span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--accent-green)' }}>
              <Lock size={16} />
              <span>B.Tech CSE (Cybersecurity) • LPU (Top 1% Cohort)</span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '580px', lineHeight: '1.75' }}>
              Specializing in <strong style={{ color: 'var(--text-primary)' }}>Adversarial AI Defense, Red Teaming, and Automated Recon Pipelines</strong>. Combining patent-pending IoT engineering with enterprise security simulations (JPMorgan Chase, Mastercard, Deloitte Australia).
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Shield size={16} /> View Security Projects
              </motion.a>
              <motion.a 
                href="#experience" 
                className="btn btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Experience & Track Record
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-green"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Activity size={16} /> Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Operative Command Card (Replaces the 3D ball) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, type: "spring" }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glarePosition="all"
              scale={1.02}
              transitionSpeed={1200}
              style={{ width: '100%', maxWidth: '460px' }}
            >
              <div 
                className="cyber-card" 
                style={{ 
                  padding: '2.2rem', 
                  borderTop: '3px solid var(--accent-cyan)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.85), 0 0 20px rgba(0, 240, 255, 0.2)'
                }}
              >
                {/* Terminal Window Header */}
                <div className="terminal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.8rem' }}>
                  <div className="terminal-dots" style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: '700' }}>
                    <Terminal size={13} />
                    <span>OPERATIVE_DOSSIER // SEC-001</span>
                  </div>
                </div>

                {/* Profile Identity Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', marginBottom: '1.8rem' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src="/photo.jpg"
                      alt="Tanay Tanishk"
                      style={{
                        width: '84px',
                        height: '84px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        border: '2px solid var(--accent-cyan)',
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.35)'
                      }}
                    />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        bottom: '-3px', 
                        right: '-3px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-green)',
                        boxShadow: '0 0 8px var(--accent-green)',
                        border: '2px solid var(--bg-primary)'
                      }} 
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>Tanay Tanishk</h3>
                      <ShieldCheck size={18} color="var(--accent-green)" />
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                      Research Assistant @ AI Threat Lab
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                      Lovely Professional University
                    </div>
                  </div>
                </div>

                {/* Tactical Status Grid */}
                <div 
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(5, 10, 20, 0.65)',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                    borderRadius: '10px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TARGET ROLE</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--accent-green)', fontWeight: '700', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                      Summer 2027 Intern
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SECURITY FOCUS</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--accent-cyan)', fontWeight: '700', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                      Adversarial AI Defense
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>RELOCATION</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: '600', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                      Global Availability
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>ACADEMICS</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--accent-green)', fontWeight: '700', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                      Top 1% Global Cohort
                    </div>
                  </div>
                </div>

                {/* Footer Security Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    <Cpu size={13} color="var(--accent-cyan)" />
                    <span>DEFENSE_ACTIVE</span>
                  </div>
                  <span style={{ padding: '0.25rem 0.65rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '4px', fontWeight: '700' }}>
                    AUTHENTICATED
                  </span>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* High-Tech Telemetry Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            marginTop: '3.5rem',
            padding: '1.5rem',
            background: 'rgba(8, 14, 28, 0.65)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                <Sparkles size={11} color="var(--accent-cyan)" />
                {stat.label}
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0.2rem 0', fontFamily: 'var(--font-main)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
          SEC_NAV_DOWN
        </span>
        <ChevronDown size={18} color="var(--accent-cyan)" />
      </motion.div>
    </section>
  );
};

export default Hero;
