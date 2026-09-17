import { PiDropDuotone, PiWindDuotone } from "react-icons/pi";
import {
  carpetMethodsGuideImage,
  carpetMethodsGuideImageAlt,
  carpetMethodsGuideParagraphs,
  carpetMethodsGuideTitle,
  carpetMethodsHeaders,
  carpetMethodsIntro,
  carpetMethodsRows,
  carpetMethodsTitle,
} from "./carpetMethodsData";
import styles from "./CarpetMethodsSection.module.css";

const methodIcons = {
  steam: PiDropDuotone,
  dry: PiWindDuotone,
};

export default function CarpetMethodsSection() {
  return (
    <section
      className={styles.section}
      id="carpet-cleaning-methods"
      aria-labelledby="carpet-methods-title"
    >
      <div className={styles.container}>
        <div className={styles.panel}>
          <header className={styles.header}>
            <h2 className={styles.title} id="carpet-methods-title">
              {carpetMethodsTitle}
            </h2>
            <p className={styles.intro}>{carpetMethodsIntro}</p>
          </header>

          <div className={styles.compare}>
            {carpetMethodsRows.map((row, index) => {
              const Icon = methodIcons[row.accent];

              return (
                <div key={row.id} className={styles.compareItem}>
                  {index === 1 ? (
                    <span className={styles.vsBadge} aria-hidden>
                      VS
                    </span>
                  ) : null}

                  <article
                    className={`${styles.methodCard} ${
                      styles[
                        `accent${row.accent.charAt(0).toUpperCase()}${row.accent.slice(1)}`
                      ]
                    }`}
                  >
                    <div className={styles.methodHead}>
                      <span
                        className={styles.methodIcon}
                        role="img"
                        aria-label={row.iconAlt}
                      >
                        <Icon aria-hidden />
                      </span>
                      <h3 className={styles.methodTitle}>{row.method}</h3>
                    </div>

                    <dl className={styles.methodDetails}>
                      <div className={styles.detailRow}>
                        <dt>{carpetMethodsHeaders.bestFor}</dt>
                        <dd>{row.bestFor}</dd>
                      </div>
                      <div className={styles.detailRow}>
                        <dt>{carpetMethodsHeaders.dryingTime}</dt>
                        <dd>{row.dryingTime}</dd>
                      </div>
                      <div className={styles.detailRow}>
                        <dt>{carpetMethodsHeaders.limitation}</dt>
                        <dd>{row.limitation}</dd>
                      </div>
                    </dl>
                  </article>
                </div>
              );
            })}
          </div>

          <div className={styles.guide}>
            <div className={styles.guideCopy}>
              <p className={styles.guideLabel}>Our recommendation</p>
              <h3 className={styles.guideTitle}>{carpetMethodsGuideTitle}</h3>
              {carpetMethodsGuideParagraphs.map((paragraph, index) => (
                <p key={index} className={styles.guideText}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.guideVisual}>
              <img
                src={carpetMethodsGuideImage}
                alt={carpetMethodsGuideImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
