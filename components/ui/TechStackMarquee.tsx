import styles from "./TechStackMarquee.module.scss";

const TECH_STACK = [
  "Next.js",
  "React",
  "Flutter",
  "Dart",
  "TypeScript",
  "Framer Motion",
  "TailwindCSS",
  "Node.js",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "Python",
];

export default function TechStackMarquee() {
  // Duplicate for seamless loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {duplicatedTech.map((tech, index) => (
          <div key={`${tech}-${index}`} className={styles.techItem}>
            <span className={styles.dot} />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
