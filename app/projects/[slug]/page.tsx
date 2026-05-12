"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects as PROJECTS_DATA } from '@/data/projects';
import styles from './ProjectDetail.module.scss';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.main 
      className={styles.main}
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Navigation */}
      <motion.nav className={styles.nav} variants={fadeInUp}>
        <Link href="/" className={styles.backButton}>
          <span className={styles.arrow}>←</span> Back to Projects
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <motion.h1 className={styles.title} variants={fadeInUp}>
          {project.title}
        </motion.h1>

        <motion.div className={styles.metadata} variants={fadeInUp}>
          <div className={styles.metaItem}>
            <span className={styles.label}>Role</span>
            <span className={styles.value}>Full Stack Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Timeline</span>
            <span className={styles.value}>2024</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Category</span>
            <span className={styles.value}>Digital Product</span>
          </div>
        </motion.div>

        <motion.div className={styles.actions} variants={fadeInUp}>
          <a href="#" className={styles.primaryBtn}>
            Live Demo <span className={styles.dot}></span>
          </a>
          <a href="#" className={styles.secondaryBtn}>
            Source Code
          </a>
        </motion.div>
      </header>

      {/* Image Showcase */}
      <motion.section className={styles.imageShowcase} variants={fadeInUp}>
        <div className={styles.imageWrapper}>
          <img 
          src={project.image} 
          alt={project.title} 
          className={styles.mainImage}
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Project+Mockup'; }}
          />
          <div className={styles.imageGlow}></div>
          </div>
          </motion.section>

          {/* Project Content */}
          <section className={styles.content}>
          <div className={styles.detailsGrid}>
          <motion.div className={styles.descriptionCol} variants={fadeInUp}>
          <h2 className={styles.sectionLabel}>Overview</h2>
          <p className={styles.descriptionText}>
            {project.description}
          </p>
          <p className={styles.descriptionText}>
            Built with a focus on high-performance and scalability, this project demonstrates the integration of modern frontend architectures with robust backend services. Every interaction was crafted to ensure a seamless user experience while maintaining the highest engineering standards.
          </p>
          </motion.div>

          <motion.div className={styles.techCol} variants={fadeInUp}>
          <h2 className={styles.sectionLabel}>Technologies</h2>
          <ul className={styles.techList}>
            {project.techStack.map((tag, i) => (
              <li key={i} className={styles.techItem}>
                <span className={styles.mono}>{tag}</span>
              </li>
            ))}
          </ul>
          </motion.div>

        </div>
      </section>

      {/* Footer Nav */}
      <motion.footer className={styles.footer} variants={fadeInUp}>
        <div className={styles.divider}></div>
        <Link href="/" className={styles.nextProject}>
          View more work <span className={styles.arrow}>→</span>
        </Link>
      </motion.footer>
    </motion.main>
  );
}
