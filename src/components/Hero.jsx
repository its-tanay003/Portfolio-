import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Environment, ContactShadows } from '@react-three/drei';

// The abstract 3D object for the Hero section
const CyberCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    // Subtle rotation over time
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <Icosahedron args={[1, 0]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Icosahedron>
        {/* Inner solid core */}
        <Icosahedron args={[0.8, 1]} scale={0.8}>
          <meshStandardMaterial
            color="#10b981"
            roughness={0.1}
            metalness={1}
            emissive="#10b981"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }} // Wait for preloader
            style={{ y: y1 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid var(--glass-border)', borderRadius: '20px', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontWeight: '600', fontSize: '0.9rem', backdropFilter: 'blur(10px)' }}
            >
              <Shield size={16} />
              <span>AI-Enhanced Ethical Hacker & Security Engineer</span>
            </motion.div>
            
            <h1 style={{ marginBottom: '1rem', lineHeight: '1.1', fontSize: '3.2rem' }}>
              Tanay Tanishk <br />
              <span style={{ color: 'var(--accent-primary)', WebkitTextFillColor: 'var(--accent-primary)' }}>Cybersecurity & AI Defense</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: '1.8' }}>
              Computer Engineering undergraduate specializing in <strong style={{ color: 'var(--text-primary)' }}>Cybersecurity at LPU (Top 1% cohort)</strong>. Experienced in adversarial ML security, red teaming, automated recon pipelines, and patent-pending IoT health systems. Sharpened through corporate simulations at JPMorgan Chase, Mastercard, and Deloitte Australia.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
              </motion.a>
              <motion.a 
                href="#experience" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience & Skills
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                style={{ borderColor: 'var(--accent-secondary)', color: 'var(--accent-secondary)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.4, type: "spring" }}
            style={{ position: 'relative', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Ambient Background Glow for 3D object */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            
            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
                <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
                
                <CyberCore />
                
                <Environment preset="city" />
                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#0ea5e9" />
              </Canvas>
            </div>
            
            {/* Profile Picture Overlay Badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem 1rem 0.5rem 0.5rem',
                background: 'rgba(6, 9, 19, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                zIndex: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/photo.jpg"
                alt="Tanay Tanishk"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-primary)'
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>Tanay Tanishk</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)' }}>● Open for Summer '27</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Discover</span>
        <ChevronDown size={20} color="var(--accent-primary)" />
      </motion.div>
    </section>
  );
};

export default Hero;
