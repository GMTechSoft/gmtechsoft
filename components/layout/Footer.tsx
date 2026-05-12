import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.monogram}>GM</span>
              <span className={styles.wordmark}>Ghulam Mustafa</span>
            </Link>
            <p className={styles.tagline}>
              Flutter Developer · Building apps that work.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.label}>Navigation</h4>
            <ul className={styles.list}>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.social}>
            <h4 className={styles.label}>Social</h4>
            <ul className={styles.list}>
              <li><a href="https://www.linkedin.com/in/ghulam-mustafa-9543483a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/GMTechSoft" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Play Store</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ghulam Mustafa. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
