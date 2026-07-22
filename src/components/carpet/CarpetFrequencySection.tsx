import { PiCalendarCheckDuotone } from "react-icons/pi";
import {
  carpetFrequencyIntro,
  carpetFrequencyRows,
  carpetFrequencyTagline,
  carpetFrequencyTitle,
} from "./carpetFrequencyData";
import styles from "./CarpetFrequencySection.module.css";

export default function CarpetFrequencySection() {
  return (
    <section
      className={styles.section}
      id="carpet-cleaning-frequency"
      aria-labelledby="carpet-frequency-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>{carpetFrequencyTagline}</span>
          <h2 className={styles.title} id="carpet-frequency-title">
            {carpetFrequencyTitle}
          </h2>
          <p className={styles.intro}>{carpetFrequencyIntro}</p>
        </header>

        <div className={styles.grid}>
          {carpetFrequencyRows.map((row, index) => {
            const Icon = row.icon;

            return (
              <article
                key={row.id}
                className={`${styles.card} ${styles[`accent${row.accent.charAt(0).toUpperCase()}${row.accent.slice(1)}`]}`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconWrap} aria-hidden>
                    <Icon />
                  </span>
                  <span className={styles.index} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{row.propertyType}</h3>

                <div className={styles.frequency}>
                  <PiCalendarCheckDuotone aria-hidden />
                  <span>{row.frequency}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
