import { FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  mouldCaseStudyDesignA,
  type CaseStudyDesignAData,
} from "./caseStudyData";
import styles from "./CaseStudyHero.module.css";

type CaseStudyHeroProps = {
  data?: CaseStudyDesignAData["hero"];
};

export default function CaseStudyHero({
  data = mouldCaseStudyDesignA.hero,
}: CaseStudyHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="case-study-page-title">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.badge}>{data.badge}</span>

          <h1 className={styles.title} id="case-study-page-title">
            {data.titleLead} <span>{data.titleAccent}</span> {data.titleTrail}
          </h1>

          <div className={styles.actions}>
            <ThmButton href={data.primaryCta.href}>
              {data.primaryCta.label}
              <FaArrowRight aria-hidden />
            </ThmButton>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.shape} aria-hidden />
          <div className={styles.phone}>
            <div className={styles.notch} aria-hidden />
            <div className={styles.screen}>
              <img src={data.phoneImage} alt={data.phoneImageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
