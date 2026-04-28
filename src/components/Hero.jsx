import React, { useRef } from 'react';
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
              <span>Cybersecurity Specialist & Hackathon Enthusiast</span>
            </motion.div>
            
            <h1 style={{ marginBottom: '1rem', lineHeight: '1.1', fontSize: '3.5rem' }}>
              Computer Science <br />
              <span style={{ color: 'var(--text-primary)', WebkitTextFillColor: 'var(--text-primary)' }}>Engineering Student</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '550px', lineHeight: '1.8' }}>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Tanay Tanishk</strong>. Engineering secure digital environments and impactful IoT solutions through innovative problem-solving, continuous learning, and a passion for real-world application.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
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
            style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Ambient Background Glow for 3D object */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
            
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
            
          {/* Photo Placeholder */}
          <motion.img
            src="/photo.jpg"
            alt="Tanay Tanishk"
            style={{
                position: 'absolute',
                top: '-90%',
                right: '-75%',
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '50%',
                transform: 'none',
                zIndex: 2,
              border: '4px solid var(--accent-primary)',
              boxShadow: '0 0 20px var(--accent-glow)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          {/* End Photo Placeholder */}
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
