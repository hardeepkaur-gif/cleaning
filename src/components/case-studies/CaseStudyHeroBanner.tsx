import { FaArrowRight, FaSprayCan } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { caseStudyHeroBanner } from "./caseStudyData";
import styles from "./CaseStudyHeroBanner.module.css";

export default function CaseStudyHeroBanner() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="case-study-banner-title"
    >
      <div className={styles.media} aria-hidden>
        <img
          className={styles.bgImage}
          src={caseStudyHeroBanner.backgroundImage}
          alt=""
        />
        <div className={styles.overlay} />
        <div className={styles.mapPattern} />
        <span className={`${styles.bubble} ${styles.bubbleOne}`} />
        <span className={`${styles.bubble} ${styles.bubbleTwo}`} />
        <span className={`${styles.bubble} ${styles.bubbleThree}`} />
        <span className={`${styles.bubble} ${styles.bubbleFour}`} />
        <span className={styles.cornerIcon} />
      </div>

      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.badgeIcon} aria-hidden>
              <FaSprayCan />
            </span>
            {caseStudyHeroBanner.badge}
          </span>

          <h2 className={styles.title} id="case-study-banner-title">
            {caseStudyHeroBanner.titleLead}{" "}
            <span>{caseStudyHeroBanner.titleAccent}</span>{" "}
            {caseStudyHeroBanner.titleTrail}
          </h2>

          <p className={styles.subtitle}>{caseStudyHeroBanner.subtitle}</p>

          <div className={styles.actions}>
            <ThmButton href={caseStudyHeroBanner.primaryCta.href}>
              {caseStudyHeroBanner.primaryCta.label}
              <FaArrowRight aria-hidden />
            </ThmButton>
          </div>
        </div>
      </div>
    </section>
  );
}
