"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import GoldButton from "@/components/ui/GoldButton";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Custom luxury ease
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Visual Engineering Elements */}
      <div className={styles.gridOverlay} />
      <div className={styles.glowEffect} />

      <motion.div
        className={styles.container}
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className={styles.tagline}>
          <span className={styles.dot} />
          Premium Software Engineering
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.heading}>
          Building high-end <br />
          <span className={styles.accentText}>digital experiences</span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.subheading}>
          Specializing in Flutter, Next.js, and high-performance engineering.
          We transform complex requirements into elegant, luxury software solutions
          for global clients.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.ctaWrapper}>
          <GoldButton href="/work">Explore Projects</GoldButton>
          <GoldButton href="#contact" variant="ghost">
            Let's Connect
          </GoldButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
