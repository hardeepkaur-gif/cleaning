import { FaArrowRight, FaSprayCan } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  mouldCaseStudyDesignA,
  type CaseStudyDesignAData,
} from "./caseStudyData";
import styles from "./CaseStudyHeroBanner.module.css";

type CaseStudyHeroBannerProps = {
  data?: CaseStudyDesignAData["heroBanner"];
};

export default function CaseStudyHeroBanner({
  data = mouldCaseStudyDesignA.heroBanner,
}: CaseStudyHeroBannerProps) {
  return (
    <section
      className={styles.hero}
      aria-labelledby="case-study-page-title"
    >
      <div className={styles.media} aria-hidden>
        <img
          className={styles.bgImage}
          src={data.backgroundImage}
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
            {data.badge}
          </span>

          <h1 className={styles.title} id="case-study-page-title">
            {data.titleLead} <span>{data.titleAccent}</span> {data.titleTrail}
          </h1>

          <p className={styles.subtitle}>{data.subtitle}</p>

          <div className={styles.actions}>
            <ThmButton href={data.primaryCta.href}>
              {data.primaryCta.label}
              <FaArrowRight aria-hidden />
            </ThmButton>
          </div>
        </div>
      </div>
    </section>
  );
}
