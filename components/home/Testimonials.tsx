"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.scss";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.slider}>
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className={`${styles.testimonialItem} ${activeIndex === index ? styles.active : ""}`}
            >
              <p className={styles.quote}>{t.quote}</p>
              
              <div className={styles.authorInfo}>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.role}>{t.role} · {t.company} ({t.country})</p>
              </div>

              <div className={styles.rating}>
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 1 && (
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
