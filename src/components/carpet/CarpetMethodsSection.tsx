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
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="carpet-methods-title">
            {carpetMethodsTitle}
          </h2>
          <p className={styles.intro}>{carpetMethodsIntro}</p>
        </header>

        <div className={styles.compareGrid}>
          {carpetMethodsRows.map((row) => {
            const Icon = methodIcons[row.accent];

            return (
              <article
                key={row.id}
                className={`${styles.methodCard} ${styles[`accent${row.accent.charAt(0).toUpperCase()}${row.accent.slice(1)}`]}`}
              >
                <div className={styles.methodHead}>
                  <span className={styles.methodIcon} aria-hidden>
                    <Icon />
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
            );
          })}
        </div>

        <div className={styles.guide}>
          <div className={styles.guideGrid}>
            <div className={styles.guideCopy}>
              <h3 className={styles.guideTitle}>{carpetMethodsGuideTitle}</h3>
              {carpetMethodsGuideParagraphs.map((paragraph, index) => (
                <p key={index} className={styles.guideText}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.guideVisual}>
              <div className={styles.imgWrap}>
                <img
                  src={carpetMethodsGuideImage}
                  alt={carpetMethodsGuideImageAlt}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
