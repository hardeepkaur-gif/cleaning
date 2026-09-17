import {
  domesticWhyChooseEyebrow,
  domesticWhyChooseItems,
  domesticWhyChooseTitle,
} from "./domesticWhyChooseData";
import styles from "@/components/different/WhatMakesDifferent.module.css";
import local from "./DomesticWhyChooseSection.module.css";

export default function DomesticWhyChooseSection() {
  return (
    <section
      className={styles.section}
      id="domestic-why-choose"
      aria-labelledby="domestic-why-choose-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{domesticWhyChooseEyebrow}</span>
          <h2 className={styles.title} id="domestic-why-choose-title">
            {domesticWhyChooseTitle}
          </h2>
        </header>

        <ul className={`${styles.grid} ${local.grid}`}>
          {domesticWhyChooseItems.map((item, index) => {
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
      </div>
    </section>
  );
}
