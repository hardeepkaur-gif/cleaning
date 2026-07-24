import { FaCheck, FaStar } from "react-icons/fa";
import { PiBroomDuotone, PiSparkleDuotone } from "react-icons/pi";
import {
  domesticVsDeepHeaders,
  domesticVsDeepIntro,
  domesticVsDeepRows,
} from "./domesticVsDeepData";
import styles from "./DomesticVsDeepSection.module.css";

export default function DomesticVsDeepSection() {
  return (
    <section
      className={styles.section}
      id="domestic-vs-deep-cleaning"
      aria-labelledby="domestic-vs-deep-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Which Service Suits You?</span>
          <h2 className={styles.title} id="domestic-vs-deep-title">
            Domestic Cleaning{" "}
            <span className={styles.vsWord}>vs</span> Deep Cleaning
          </h2>
          <p className={styles.intro}>{domesticVsDeepIntro}</p>
        </header>

        {/* Desktop / tablet: side-by-side comparison rows */}
        <div className={styles.compareDesktop}>
          <div className={styles.columnHeads}>
            <div className={`${styles.columnHead} ${styles.columnHeadDomestic}`}>
              <span className={styles.columnIcon} aria-hidden>
                <PiBroomDuotone />
              </span>
              <span>{domesticVsDeepHeaders.domestic}</span>
            </div>

            <div className={styles.vsBadge} aria-hidden>
              VS
            </div>

            <div className={`${styles.columnHead} ${styles.columnHeadDeep}`}>
              <span className={styles.columnIcon} aria-hidden>
                <PiSparkleDuotone />
              </span>
              <span>{domesticVsDeepHeaders.deep}</span>
            </div>
          </div>

          <div className={styles.rows}>
            {domesticVsDeepRows.map((row, index) => (
              <article key={index} className={styles.row}>
                <div className={`${styles.cell} ${styles.cellDomestic}`}>
                  <div className={styles.cellBody}>
                    <span className={styles.cellIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <p className={styles.cellText}>{row.domestic}</p>
                  </div>
                </div>

                <div className={styles.rowDivider} aria-hidden />

                <div className={`${styles.cell} ${styles.cellDeep}`}>
                  <div className={styles.cellBody}>
                    <span
                      className={`${styles.cellIcon} ${styles.cellIconDeep}`}
                      aria-hidden
                    >
                      <FaStar />
                    </span>
                    <p className={styles.cellText}>{row.deep}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile: two stacked service cards for clearer comparison */}
        <div className={styles.compareMobile}>
          <article className={`${styles.mobileCard} ${styles.mobileCardDomestic}`}>
            <header className={`${styles.mobileHead} ${styles.mobileHeadDomestic}`}>
              <span className={styles.columnIcon} aria-hidden>
                <PiBroomDuotone />
              </span>
              <span>{domesticVsDeepHeaders.domestic}</span>
            </header>
            <ul className={styles.mobileList}>
              {domesticVsDeepRows.map((row, index) => (
                <li key={index} className={styles.mobileItem}>
                  <span className={styles.cellIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <p className={styles.cellText}>{row.domestic}</p>
                </li>
              ))}
            </ul>
          </article>

          <div className={styles.mobileVs} aria-hidden>
            <span>VS</span>
          </div>

          <article className={`${styles.mobileCard} ${styles.mobileCardDeep}`}>
            <header className={`${styles.mobileHead} ${styles.mobileHeadDeep}`}>
              <span className={styles.columnIcon} aria-hidden>
                <PiSparkleDuotone />
              </span>
              <span>{domesticVsDeepHeaders.deep}</span>
            </header>
            <ul className={styles.mobileList}>
              {domesticVsDeepRows.map((row, index) => (
                <li key={index} className={styles.mobileItem}>
                  <span
                    className={`${styles.cellIcon} ${styles.cellIconDeep}`}
                    aria-hidden
                  >
                    <FaStar />
                  </span>
                  <p className={styles.cellText}>{row.deep}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
