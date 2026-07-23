import { gutterTrustItems } from "./gutterTrustData";
import styles from "@/components/domestic/DomesticTrustStrip.module.css";

export default function GutterTrustStrip() {
  return (
    <section
      className={styles.section}
      id="gutter-trust-strip"
      aria-label="Why choose our gutter cleaning"
    >
      <div className={styles.container}>
        <ul className={styles.grid}>
          {gutterTrustItems.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon />
              </span>
              <div className={styles.content}>
                <span className={styles.label}>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
