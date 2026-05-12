import Link from "next/link";
import styles from "./FeaturedWork.module.scss";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  // Show all featured projects in a symmetrical grid
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className={styles.featuredWork}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>{"// selected works"}</span>
          <h2 className={styles.title}>Projects I&apos;ve built.</h2>
        </ScrollReveal>

        <div className={styles.gridContainer}>
          <ScrollReveal delay={200}>
            <ProjectGrid projects={featuredProjects} />
          </ScrollReveal>
        </div>

        <div className={styles.footer}>
          <Link href="/work" className={styles.viewAll}>
            View all projects <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
