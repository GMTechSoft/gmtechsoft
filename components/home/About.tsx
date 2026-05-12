import styles from "./About.module.scss";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TechChip from "@/components/ui/TechChip";

const skills = [
  "Flutter/Dart", "Hive", "Firebase", "REST APIs", 
  "GetX", "Provider", "Gemini CLI", "Codex CLI", "Claude Code"
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <ScrollReveal>
              <span className={styles.label}>{"// about me"}</span>
              <h2 className={styles.title}>A Flutter developer who codes with purpose.</h2>
              <p className={styles.text}>
                I&apos;m Ghulam Mustafa, a Flutter developer based in Pakistan. I build e-commerce apps, school management systems, productivity tools, and Islamic utility apps — 2 of which are live on Google Play Store. I work with modern AI-assisted development tools like Gemini CLI and Codex CLI to ship faster, and I also write code from scratch when the project demands full control. I believe great apps come from understanding the problem first — tools are just how you solve it.
              </p>
            </ScrollReveal>
          </div>
          
          <div className={styles.skills}>
            <ScrollReveal delay={200}>
              <h3 className={styles.skillsTitle} id="skills">Technical Skills</h3>
              <div className={styles.techGrid}>
                {skills.map((skill) => (
                  <TechChip key={skill} label={skill} />
                ))}
              </div>
              
              <div className={styles.statsCard}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>2</span>
                  <span className={styles.statLabel}>Apps on Play Store</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statLabel}>Self-Written Code</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
