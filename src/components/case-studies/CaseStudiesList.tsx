import Link from "next/link";
import {
  caseStudyHero,
  caseStudyMeta,
  caseStudyPath,
  caseStudySnapshot,
} from "./caseStudyData";
import { caseStudyV2Path } from "./caseStudyV2Data";
import styles from "./CaseStudy.module.css";

const listings = [
  {
    href: caseStudyPath,
    badge: "Design A",
    title: `${caseStudyHero.titleLead} ${caseStudyHero.titleAccent} ${caseStudyHero.titleTrail}`,
    description: caseStudyMeta.description,
  },
  {
    href: caseStudyV2Path,
    badge: "Design B",
    title: `${caseStudyHero.titleLead} ${caseStudyHero.titleAccent} ${caseStudyHero.titleTrail}`,
    description:
      "Same Canning Town mould removal case study in an alternate CleanSpaces-style layout for side-by-side design comparison.",
  },
];

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
            domestic cleaning challenges across East London. Compare Design A and
            Design B for the same Canning Town job.
          </p>
        </header>

        <div className={styles.listingGridTwo}>
          {listings.map((item) => (
            <Link key={item.href} href={item.href} className={styles.listingCard}>
              <img
                className={styles.listingImg}
                src="/images/case-studies/case-studies-card-mould.webp"
                alt="Mould removal and deep clean case study in Canning Town"
                loading="lazy"
              />
              <div className={styles.listingBody}>
                <p className={styles.listingMeta}>
                  {item.badge} · {caseStudySnapshot.items[0].value}
                </p>
                <h3 className={styles.listingTitle}>{item.title}</h3>
                <p className={styles.listingText}>{item.description}</p>
                <span className={styles.listingLink}>Read case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
