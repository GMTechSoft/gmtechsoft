import styles from "./TechChip.module.scss";

interface TechChipProps {
  label: string;
  variant?: "gold" | "purple";
}

export default function TechChip({ label, variant = "purple" }: TechChipProps) {
  const isAI = label.toLowerCase().includes("ai") || 
               label.toLowerCase().includes("gpt") || 
               label.toLowerCase().includes("gemini");
  
  const chipVariant = isAI ? "purple" : variant;

  return (
    <span className={`${styles.chip} ${styles[chipVariant]}`}>
      {label}
    </span>
  );
}
