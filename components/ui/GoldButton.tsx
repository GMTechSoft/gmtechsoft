import React from "react";
import Link from "next/link";
import styles from "./GoldButton.module.scss";

/**
 * GoldButtonProps extends AnchorHTMLAttributes to allow standard props
 * like 'target', 'rel', 'download', etc. when the button acts as a link.
 */
interface GoldButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
  // If no href is provided, it can act as a button
  asButton?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function GoldButton({
  href,
  variant = "primary",
  children,
  className = "",
  asButton = false,
  type = "button",
  ...props // Capture all other standard HTML attributes
}: GoldButtonProps) {
  const combinedClasses = `${styles.button} ${styles[variant]} ${className}`;

  // If href is present and not explicitly told to be a button, render as link
  if (href && !asButton) {
    // Check if it's an external link
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');

    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClasses} 
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link 
        href={href} 
        className={combinedClasses}
        {...(props as any)} // Cast needed because Link expects specific props, but we pass standard anchor ones
      >
        {children}
      </Link>
    );
  }

  // Fallback to button element
  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={props.onClick as any}
      {...(props as any)}
    >
      {children}
    </button>
  );
}
