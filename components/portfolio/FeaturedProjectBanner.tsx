import Link from "next/link";
import styles from "./FeaturedProjectBanner.module.scss";
import { Project } from "@/data/projects";
import TechChip from "@/components/ui/TechChip";

interface FeaturedProjectBannerProps {
  project: Project;
}

export default function FeaturedProjectBanner({ project }: FeaturedProjectBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.badge}>Featured Project</div>
      
      <div className={styles.grid}>
        <div 
          className={styles.imageCol}
          style={{ backgroundColor: project.color }}
        >
          <span className={styles.index}>0{project.id}</span>
        </div>
        
        <div className={styles.contentCol}>
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <TechChip label={project.category} variant="gold" />
          </div>
          
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.outcomes}>
            {project.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          
          <Link href={`/work/${project.slug}`} className={styles.cta}>
            View Case Study <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
