'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Settings: stiffness: 150, damping: 20 for elegant lag
  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const type = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (type) {
        setCursorType(type);
      } else if (target.closest('button, a')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`${styles.cursor} ${cursorType === 'lens' ? styles.lens : ''}`}
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: 1,
        backgroundColor: '#FF5A36',
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 25,
      }}
    />
  );
}
