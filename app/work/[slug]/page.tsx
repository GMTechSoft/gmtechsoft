import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./CaseStudy.module.scss";
import TechChip from "@/components/ui/TechChip";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoldButton from "@/components/ui/GoldButton";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Ghulam Mustafa`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <article className={styles.caseStudy}>
      <header className={styles.hero} style={{ backgroundColor: project.color }}>
        <div className={styles.container}>
          <ScrollReveal>
            <Link href="/work" className={styles.backButton}>
              ← Back to Work
            </Link>
            <div className={styles.heroContent}>
              <span className={styles.category}>{project.category}</span>
              <h1 className={styles.title}>{project.title}</h1>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.heroImagePlaceholder}>
          <span className={styles.heroIndex}>0{project.id}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.container}>
          {project.playStoreUrl && (
            <div className={styles.playStoreAction}>
              <ScrollReveal>
                <GoldButton 
                  href={project.playStoreUrl} 
                  style={{ backgroundColor: '#01875F', borderColor: '#01875F' }}
                >
                  View on Play Store
                </GoldButton>
              </ScrollReveal>
            </div>
          )}

          <section className={styles.section}>
            <div className={styles.sectionGrid}>
              <div className={styles.mainInfo}>
                <ScrollReveal>
                  <h2 className={styles.sectionTitle}>Overview</h2>
                  <p className={styles.paragraph}>
                    {project.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <h2 className={styles.sectionTitle}>Key Features & Highlights</h2>
                  <ul className={styles.bulletList}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>

                  {project.slug === 'zakat-calculator' && (
                    <div className={styles.specialNote}>
                      <p>⚡ <strong>Gold & Silver prices update in real-time</strong> from live market data.</p>
                      <p>All code written by Ghulam Mustafa — no AI code generation tools used.</p>
                    </div>
                  )}

                  {project.slug === 'ecom-seller-dashboard' && (
                    <div className={styles.specialNote}>
                      <p>🚧 <strong>Admin dashboard</strong> currently under active development.</p>
                    </div>
                  )}
                </ScrollReveal>
              </div>

              <aside className={styles.sidebar}>
                <ScrollReveal delay={200}>
                  <div className={styles.sidebarCard}>
                    <h3 className={styles.sidebarTitle}>Tech Stack</h3>
                    <div className={styles.techGrid}>
                      {project.techStack.map((tech) => (
                        <TechChip key={tech} label={tech} />
                      ))}
                    </div>
                  </div>

                  <div className={styles.sidebarCard}>
                    <h3 className={styles.sidebarTitle}>Project Stats</h3>
                    <div className={styles.projectStats}>
                      {project.stats.map((stat) => (
                        <div key={stat.label} className={styles.miniStat}>
                          <span className={styles.miniStatLabel}>{stat.label}</span>
                          <span className={styles.miniStatValue}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </aside>
            </div>
          </section>

          <section className={styles.outcomesSection}>
            <ScrollReveal>
              <h2 className={styles.sectionTitleCenter}>The Result</h2>
              <p className={styles.outcomeText}>{project.outcome}</p>
            </ScrollReveal>
          </section>
        </div>
      </div>

      <nav className={styles.projectNav}>
        <Link href={`/work/${prevProject.slug}`} className={styles.navLink}>
          <span className={styles.navLabel}>Previous Project</span>
          <span className={styles.navTitle}>← {prevProject.title}</span>
        </Link>
        <Link href={`/work/${nextProject.slug}`} className={styles.navLink}>
          <span className={styles.navLabel}>Next Project</span>
          <span className={styles.navTitle}>{nextProject.title} →</span>
        </Link>
      </nav>
    </article>
  );
}
