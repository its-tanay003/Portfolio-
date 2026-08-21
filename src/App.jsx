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

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
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
      
      <footer style={{ background: 'rgba(2, 4, 10, 0.9)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} Tanay Tanishk. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.7 }}>
            Built with React, R3F, Framer Motion, and Lenis.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
