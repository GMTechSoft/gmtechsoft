import styles from "./Services.module.scss";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>{"// what i build"}</span>
          <h2 className={styles.title}>Apps I specialize in.</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  {service.icon === "shopping-bag" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  )}
                  {service.icon === "layout-dashboard" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="9" />
                      <rect x="14" y="3" width="7" height="5" />
                      <rect x="14" y="12" width="7" height="9" />
                      <rect x="3" y="16" width="7" height="5" />
                    </svg>
                  )}
                  {service.icon === "school" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  )}
                  {service.icon === "note" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  )}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
