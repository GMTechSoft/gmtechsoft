import styles from "./SocialProof.module.scss";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Apps Built", value: "4+" },
  { label: "Live on Play Store", value: "2" },
  { label: "Years Flutter Exp", value: "3+" },
  { label: "Self-Written Code", value: "100%" },
];

const technologies = [
  "Flutter", "Dart", "Firebase", "Hive", "REST APIs", 
  "GetX", "Provider", "Clean Architecture", "Play Store", "Android", "iOS"
];

export default function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                <AnimatedCounter value={stat.value} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              {index < stats.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {[...technologies, ...technologies].map((tech, i) => (
              <span key={i} className={styles.clientName}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
