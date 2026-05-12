"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioFeatureCard.module.scss";

interface PortfolioFeatureCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  description: string;
  index: number;
}

export default function PortfolioFeatureCard({
  title,
  category,
  image,
  slug,
  description,
  index,
}: PortfolioFeatureCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.card} ${isEven ? styles.even : styles.odd}`}
    >
      <Link href={`/work/${slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.viewProject}>
            View Case Study <span className={styles.arrow}>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
