'use client';

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./ProjectCard.module.scss";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking mouse position (normalized 0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // High-end spring config for fluid, organic movement
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Map normalized mouse position to rotation ranges
  const rotateX = useTransform(mouseYSpring, [0, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized coordinates (0 to 1)
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);

    // Update Spotlight CSS variables
    const spotX = e.clientX - rect.left;
    const spotY = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${spotX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${spotY}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(`Hovered: ${project.title}`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  // Ensure image path uses /assets/projects/
  const imagePath = project.image.startsWith('/') 
    ? (project.image.includes('/assets/projects/') ? project.image : `/assets/projects/${project.image.split('/').pop()}`)
    : `/assets/projects/${project.image}`;

  return (
    <motion.div 
      ref={cardRef} 
      className={`${styles.card} interactive-card`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
    >
      <div 
        className={styles.spotlight} 
        style={{ pointerEvents: 'none' }} 
      />

      <Link href={`/work/${project.slug}`} className={styles.link} data-cursor="lens">
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper} style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0)" }}>
            <img 
              src={imagePath} 
              alt={project.title}
              className={styles.projectImage}
              onError={(e) => { 
                e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Check+Path'; 
              }}
            />
          </div>

          <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ''}`}>
            <span className={styles.monoLabel}>TECH STACK</span>
            
            <div className={styles.techChips}>
              {project.techStack.map((tech, i) => (
                <span 
                  key={tech} 
                  className={styles.techChip}
                  style={{ 
                    transitionDelay: `${i * 60}ms`,
                    transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                    opacity: isHovered ? 1 : 0
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.isLive && (
              <div className={styles.liveBadge}>
                ● Live on Play Store
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.description}>
            {project.description}
          </p>

          <div className={styles.footer}>
            <span className={styles.cta}>
              Read more <span className={styles.arrow}>→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
