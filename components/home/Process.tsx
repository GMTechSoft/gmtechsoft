"use client";

import { useState } from "react";
import styles from "./Process.module.scss";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    summary: "Deep requirement analysis.",
    details: "I study your requirements deeply before writing a single line of code. This ensures the app solves the right problems for your users."
  },
  {
    number: "02",
    title: "Plan",
    summary: "Architecture and Design.",
    details: "Architecture, data flow, and UI wireframes — planned before building to ensure scalability and a smooth user experience."
  },
  {
    number: "03",
    title: "Build",
    summary: "Clean development.",
    details: "Clean Flutter code, proper state management, and scalable structure. I focus on writing maintainable code that lasts."
  },
  {
    number: "04",
    title: "Test",
    summary: "Rigorous verification.",
    details: "Manual testing on real devices before any release. I check for performance, UI consistency, and bug-free operation."
  },
  {
    number: "05",
    title: "Ship",
    summary: "Deployment and handoff.",
    details: "Play Store deployment, Firebase setup, or hand off with full documentation. I make sure your app is ready for the world."
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>{"// how i work"}</span>
          <h2 className={styles.title}>How I build apps.</h2>
        </ScrollReveal>

        <div className={styles.stepperWrapper}>
          <div className={styles.stepsLine}></div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 80}>
                <div 
                  className={`${styles.stepItem} ${activeStep === index ? styles.active : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepSummary}>{step.summary}</p>
                  
                  <div className={styles.detailsWrapper}>
                    <p className={styles.stepDetails}>{step.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
