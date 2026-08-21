import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, ChevronDown, Terminal, Lock, Activity } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Environment, ContactShadows } from '@react-three/drei';

// The abstract 3D object for the Hero section
const CyberCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.25;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.6}>
        <Icosahedron args={[1, 0]}>
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.45}
            speed={2.2}
            roughness={0.15}
            metalness={0.85}
            wireframe={true}
          />
        </Icosahedron>
        {/* Inner solid core */}
        <Icosahedron args={[0.75, 1]} scale={0.8}>
          <meshStandardMaterial
            color="#10b981"
            roughness={0.1}
            metalness={1}
            emissive="#10b981"
            emissiveIntensity={0.6}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);
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
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: y1 }}
          >
            {/* Terminal Prompt Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--accent-cyan)'
              }}
            >
              <Terminal size={15} />
              <span>~/sec-ops/tanay $ ./initiate_defense_matrix.sh</span>
            </motion.div>
            
            <h1 style={{ marginBottom: '0.8rem', lineHeight: '1.08', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
              Tanay Tanishk <br />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-green) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                AI-Enhanced Ethical Hacker
              </span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--accent-green)' }}>
              <Lock size={16} />
              <span>Cybersecurity Engineer • B.Tech CSE @ LPU</span>
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
                href="#terminal-section" 
                className="btn btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Terminal size={16} /> Open Cyber Console
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

          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, type: "spring" }}
            style={{ position: 'relative', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Ambient Background Glow for 3D object */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '340px', height: '340px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
            
            {/* Cyber HUD Targeting Ring Overlay */}
            <div 
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                border: '1px dashed rgba(0, 240, 255, 0.25)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            
            <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 10]} intensity={1.2} color="#00f0ff" />
                <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#10b981" />
                
                <CyberCore />
                
                <Environment preset="night" />
                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#00f0ff" />
              </Canvas>
            </div>
            
            {/* Profile Picture Overlay Cyber Badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.6rem 1.1rem 0.6rem 0.6rem',
                background: 'rgba(3, 7, 18, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--border-color)',
                borderRadius: '50px',
                zIndex: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(0, 240, 255, 0.2)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/photo.jpg"
                alt="Tanay Tanishk"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-cyan)'
                }}
              />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  Tanay Tanishk
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', boxShadow: '0 0 6px var(--accent-green)' }} />
                  Target: Summer '27 Intern
                </div>
              </div>
            </motion.div>
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
