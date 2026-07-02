import type { ReactNode } from "react";
import styles from "./Header.module.css";

type ThmButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  hoverVariant?: "dark" | "white";
  variant?: "primary" | "secondary";
};

export default function ThmButton({
  href,
  children,
  className = "",
  hoverVariant = "dark",
  variant = "primary",
}: ThmButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.thmBtn} ${variant === "secondary" ? styles.thmBtnSecondary : ""} ${hoverVariant === "white" ? styles.thmBtnHoverWhite : ""} ${className}`}
    >
      {children}
      <span className={`${styles.hoverBtn} ${styles.hoverBx}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx2}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx3}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx4}`} />
    </a>
  );
}
