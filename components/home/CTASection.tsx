import styles from "./CTASection.module.scss";
import GoldButton from "@/components/ui/GoldButton";

export default function CTASection() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.glowCircle}></div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>Have a project in mind?</h2>
        <p className={styles.subtitle}>
          I&apos;m available for freelance Flutter projects. Let&apos;s talk about what you need.
        </p>
        
        <div className={styles.ctaRow}>
            <GoldButton href="mailto:ghulammustafa@gmail.com">
              Send a Message →
            </GoldButton>
            <GoldButton 
  href="https://wa.me/923026668601" 
  target="_blank" 
  rel="noopener noreferrer" 
  variant="ghost"
>
  WhatsApp Me
</GoldButton>
        </div>
      </div>
    </section>
  );
}
