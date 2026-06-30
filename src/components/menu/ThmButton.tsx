import type { ReactNode } from "react";
import styles from "./Header.module.css";

type ThmButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ThmButton({ href, children, className = "" }: ThmButtonProps) {
  return (
    <a href={href} className={`${styles.thmBtn} ${className}`}>
      {children}
      <span className={`${styles.hoverBtn} ${styles.hoverBx}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx2}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx3}`} />
      <span className={`${styles.hoverBtn} ${styles.hoverBx4}`} />
    </a>
  );
}
