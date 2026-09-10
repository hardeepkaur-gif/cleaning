import Link from "next/link";
import {
  caseStudyHero,
  caseStudyMeta,
  caseStudyPath,
  caseStudySnapshot,
} from "./caseStudyData";
import styles from "./CaseStudy.module.css";

export default function CaseStudiesList() {
  return (
    <section className={styles.section} aria-labelledby="case-studies-list-title">
      <div className={styles.container}>
        <header className={styles.listingHeader}>
          <span className={styles.eyebrow}>Real Jobs</span>
          <h2 className={styles.title} id="case-studies-list-title">
            Recent Cleaning Case Studies
          </h2>
          <p className={`${styles.text} ${styles.listingIntro}`}>
            Practical examples of how Cleaning Services London handles urgent
            domestic cleaning challenges across East London.
          </p>
        </header>

        <div className={styles.listingGrid}>
          <Link href={caseStudyPath} className={styles.listingCard}>
            <img
              className={styles.listingImg}
              src="/images/case-studies/case-studies-card-mould.webp"
              alt="Mould removal and deep clean case study in Canning Town"
              loading="lazy"
            />
            <div className={styles.listingBody}>
              <p className={styles.listingMeta}>
                {caseStudySnapshot.items[0].value} ·{" "}
                {caseStudySnapshot.items[2].value}
              </p>
              <h3 className={styles.listingTitle}>
                {caseStudyHero.titleLead} {caseStudyHero.titleAccent}{" "}
                {caseStudyHero.titleTrail}
              </h3>
              <p className={styles.listingText}>{caseStudyMeta.description}</p>
              <span className={styles.listingLink}>Read case study →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
