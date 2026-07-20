import { PiClockDuotone } from "react-icons/pi";
import {
  domesticHoursIntro,
  domesticHoursRows,
  domesticHoursTagline,
  domesticHoursTitle,
} from "./domesticHoursData";
import styles from "./DomesticCleaningHoursSection.module.css";

export default function DomesticCleaningHoursSection() {
  return (
    <section
      className={styles.section}
      id="domestic-cleaning-hours"
      aria-labelledby="domestic-hours-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>{domesticHoursTagline}</span>
          <h2 className={styles.title} id="domestic-hours-title">
            {domesticHoursTitle}
          </h2>
          <p className={styles.intro}>{domesticHoursIntro}</p>
        </header>

        <div className={styles.tableCard}>
          <div className={styles.tableHead}>
            <span className={styles.tableHeadIcon} aria-hidden>
              <PiClockDuotone />
            </span>
            <div>
              <h3 className={styles.tableHeadTitle}>Cleaning time guide</h3>
              <p className={styles.tableHeadText}>
                What to expect based on visit length and property type
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Typical For</th>
                  <th scope="col">What Can Usually Be Completed</th>
                </tr>
              </thead>
              <tbody>
                {domesticHoursRows.map((row) => (
                  <tr key={row.time}>
                    <td data-label="Time">
                      <span className={styles.timeBadge}>{row.time}</span>
                    </td>
                    <td data-label="Typical For">{row.typicalFor}</td>
                    <td data-label="What Can Usually Be Completed">
                      {row.completed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.mobileCards}>
              {domesticHoursRows.map((row) => (
                <article key={row.time} className={styles.mobileCard}>
                  <span className={styles.timeBadge}>{row.time}</span>
                  <div className={styles.mobileBlock}>
                    <span className={styles.mobileLabel}>Typical For</span>
                    <p className={styles.mobileText}>{row.typicalFor}</p>
                  </div>
                  <div className={styles.mobileBlock}>
                    <span className={styles.mobileLabel}>
                      What Can Usually Be Completed
                    </span>
                    <p className={styles.mobileText}>{row.completed}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
