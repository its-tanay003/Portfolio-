import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer] = useState(() => 
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  );

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isFinePointer) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });

    const clickables = document.querySelectorAll('a, button, input, textarea, select, .glass-card, .cyber-card');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, [isFinePointer, mouseX, mouseY]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Global Mouse Glow */}
      <motion.div
        className="mouse-glow"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent-primary, #00f0ff)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--accent-glow, rgba(0, 240, 255, 0.5))'
        }}
      />

      {/* Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
          border: '1px solid rgba(0, 240, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
