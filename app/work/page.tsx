"use client";

import { useState, useMemo } from "react";
import styles from "./WorkPage.module.scss";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import FeaturedProjectBanner from "@/components/portfolio/FeaturedProjectBanner";
import { projects } from "@/data/projects";

const categories = ["All", "Live on Play Store", "In Development", "E-commerce", "Education", "Productivity"];

const techStack = ["Flutter", "Dart", "Firebase", "Hive", "REST APIs", "GetX", "Provider", "Web Scraping", "Android", "iOS"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeCategory === "Live on Play Store") {
      result = result.filter(p => p.isLive);
    } else if (activeCategory === "In Development") {
      result = result.filter(p => !p.isLive);
    } else if (activeCategory !== "All") {
      result = result.filter(p => 
        p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        p.techStack.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()))
      );
    }

    if (sortBy === "Live on Play Store") {
      result = result.filter(p => p.isLive);
    } else if (sortBy === "Self-Written") {
      // All are self-written in this case, but we can prioritize the Zakat calculator
      result.sort((a, b) => (b.highlights.some(h => h.includes("self-written")) ? 1 : 0) - (a.highlights.some(h => h.includes("self-written")) ? 1 : 0));
    } else {
      // Default newest
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [activeCategory, sortBy]);

  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <div className={styles.workPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <ScrollReveal>
            <span className={styles.label}>{"// my work"}</span>
            <h1 className={styles.title}>Projects I&apos;ve built.</h1>
            <p className={styles.subtitle}>
              Real apps, real code, real results.
            </p>
          </ScrollReveal>
        </header>

        <FilterBar 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {activeCategory === "All" && (
          <ScrollReveal delay={100}>
            <FeaturedProjectBanner project={featuredProject} />
          </ScrollReveal>
        )}

        <ProjectGrid projects={filteredProjects} />

        <section className={styles.techStackSection}>
          <ScrollReveal>
            <h3 className={styles.techTitle}>Expertise in Flutter Development</h3>
            <div className={styles.techGrid}>
              {techStack.map((tech) => (
                <div key={tech} className={styles.techPill}>
                  {tech}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
