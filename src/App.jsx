import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { Shield, Lock, Activity } from 'lucide-react';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      
      {/* Cybersecurity Telemetry Ticker */}
      <div className="telemetry-bar" style={{ marginTop: '64px' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'none', padding: '0 2rem', alignItems: 'center', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-green)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', boxShadow: '0 0 6px var(--accent-green)' }} />
            DEFENSE_STATUS: ACTIVE
          </span>
          <span style={{ color: 'var(--accent-cyan)' }}>NODE: LPU_AI_THREAT_LAB [TOP 1%]</span>
          <span style={{ color: 'var(--accent-purple)' }}>AI_DEFENSE: GARAK_OWASP_LLM_ENGAGED</span>
          <span style={{ color: 'var(--accent-amber)' }}>RECON: CONTINUOUS_NUCLEI_MONITORING</span>
          <span style={{ color: 'var(--text-primary)' }}>TARGET: SUMMER_2027_INTERN</span>
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <ExtraCurricular />
        <Contact />
      </main>
      
      <footer style={{ background: 'rgba(3, 7, 18, 0.95)', padding: '2.5rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="cyber-tag"><Shield size={12} /> ZERO_TRUST_MINDSET</span>
            <span className="cyber-tag green"><Lock size={12} /> ENCRYPTED_ENDPOINT</span>
            <span className="cyber-tag purple"><Activity size={12} /> SYSTEM_ONLINE</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Tanay Tanishk // AI-Enhanced Ethical Hacker & Security Engineer.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            LPU • B.Tech CSE (Cybersecurity) • Research Assistant in AI Threat Lab
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
