import { FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { caseStudyHero } from "./caseStudyData";
import styles from "./CaseStudyHero.module.css";

export default function CaseStudyHero() {
  return (
    <section className={styles.hero} aria-labelledby="case-study-page-title">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.badge}>{caseStudyHero.badge}</span>

          <h1 className={styles.title} id="case-study-page-title">
            {caseStudyHero.titleLead}{" "}
            <span>{caseStudyHero.titleAccent}</span>{" "}
            {caseStudyHero.titleTrail}
          </h1>

          <div className={styles.actions}>
            <ThmButton href={caseStudyHero.primaryCta.href}>
              {caseStudyHero.primaryCta.label}
              <FaArrowRight aria-hidden />
            </ThmButton>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.shape} aria-hidden />
          <div className={styles.phone}>
            <div className={styles.notch} aria-hidden />
            <div className={styles.screen}>
              <img
                src={caseStudyHero.phoneImage}
                alt={caseStudyHero.phoneImageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
