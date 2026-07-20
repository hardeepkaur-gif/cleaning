import {
  domesticPrepareImage,
  domesticPrepareImageAlt,
  domesticPrepareIntro,
  domesticPreparePoints,
  domesticPrepareTitle,
} from "./domesticPrepareData";
import styles from "@/components/vetted/VettedSection.module.css";

export default function DomesticPrepareSection() {
  return (
    <section
      className={styles.section}
      id="domestic-prepare"
      aria-labelledby="domestic-prepare-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="domestic-prepare-title">
            {domesticPrepareTitle}
          </h2>
          <p className={styles.intro}>{domesticPrepareIntro}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <ul className={styles.points}>
              {domesticPreparePoints.map((text, i) => (
                <li key={text} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.pointIcon} aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6.5 11.5L2.5 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            <div className={styles.imgWrap}>
              <img
                src={domesticPrepareImage}
                alt={domesticPrepareImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
