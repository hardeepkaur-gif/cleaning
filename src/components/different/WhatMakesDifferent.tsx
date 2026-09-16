import ThmButton from "@/components/menu/ThmButton";
import {
  differentButtonHref,
  differentButtonLabel,
  differentList,
  differentTitle,
} from "./differentData";
import styles from "./WhatMakesDifferent.module.css";

export default function WhatMakesDifferent() {
  return (
    <section
      className={styles.section}
      id="what-makes-us-different"
      aria-labelledby="different-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why choose us</span>
          <h2 className={styles.title} id="different-title">
            {differentTitle}
          </h2>
        </header>

        <ul className={styles.grid}>
          {differentList.map((item, index) => {
            const Icon = item.icon;
            const num = String(index + 1).padStart(2, "0");

            return (
              <li key={item.text} className={styles.card}>
                <span className={styles.accent} aria-hidden />
                <div className={styles.cardHead}>
                  <span
                    className={styles.iconWrap}
                    role="img"
                    aria-label={item.iconAlt}
                  >
                    <Icon aria-hidden />
                  </span>
                  <span className={styles.index} aria-hidden>
                    {num}
                  </span>
                </div>
                <p className={styles.statement}>{item.text}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.actions}>
          <ThmButton href={differentButtonHref} className={styles.ctaBtn}>
            {differentButtonLabel}
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
