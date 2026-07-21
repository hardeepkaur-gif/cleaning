import {
  carpetTrustItems,
  carpetTrustTitle,
} from "./carpetTrustData";
import styles from "@/components/domestic/DomesticTrustStrip.module.css";
import local from "./CarpetTrustStrip.module.css";

export default function CarpetTrustStrip() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="carpet-trust-strip"
      aria-labelledby="carpet-trust-title"
    >
      <div className={styles.container}>
        <h2 className={local.title} id="carpet-trust-title">
          {carpetTrustTitle}
        </h2>

        <ul className={`${styles.grid} ${local.grid}`}>
          {carpetTrustItems.map(({ icon: Icon, label }) => (
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
