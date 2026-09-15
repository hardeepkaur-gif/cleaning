import Link from "next/link";
import {
  caseStudyHero,
  caseStudyMeta,
  caseStudyPath,
  caseStudySnapshot,
} from "./caseStudyData";
import {
  bathroomCaseStudyDesignA,
  bathroomCaseStudyPath,
} from "./bathroomCaseStudyData";
import {
  gardenCaseStudyDesignA,
  gardenCaseStudyPath,
} from "./gardenCaseStudyData";
import {
  gardenCleanupCaseStudyDesignA,
  gardenCleanupCaseStudyPath,
} from "./gardenCleanupCaseStudyData";
import {
  bathroomMouldCaseStudyDesignA,
  bathroomMouldCaseStudyPath,
} from "./bathroomMouldCaseStudyData";
import {
  reletDeepCleanCaseStudyDesignA,
  reletDeepCleanCaseStudyPath,
} from "./reletDeepCleanCaseStudyData";
import {
  eotBarkingRoadCaseStudyDesignA,
  eotBarkingRoadCaseStudyPath,
} from "./eotBarkingRoadCaseStudyData";
import {
  eotClaremontCaseStudyDesignA,
  eotClaremontCaseStudyPath,
} from "./eotClaremontCaseStudyData";
import styles from "./CaseStudy.module.css";

const listings = [
  {
    href: caseStudyPath,
    badge: "Case Study",
    title: `${caseStudyHero.titleLead} ${caseStudyHero.titleAccent} ${caseStudyHero.titleTrail}`,
    description: caseStudyMeta.description,
    image: "/images/case-studies/case-studies-card-mould.webp",
    imageAlt: "Mould removal and deep clean case study in Canning Town",
    location: caseStudySnapshot.items[0].value,
  },
  {
    href: bathroomCaseStudyPath,
    badge: "Design A",
    title: `${bathroomCaseStudyDesignA.hero.titleLead} ${bathroomCaseStudyDesignA.hero.titleAccent} ${bathroomCaseStudyDesignA.hero.titleTrail}`,
    description: bathroomCaseStudyDesignA.meta.description,
    image: "/images/case-studies/bathroom-deep-clean-hero.webp",
    imageAlt:
      "Bathroom deep clean case study after mould inspection in Canning Town",
    location: bathroomCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: gardenCaseStudyPath,
    badge: "Design A",
    title: `${gardenCaseStudyDesignA.hero.titleLead} ${gardenCaseStudyDesignA.hero.titleAccent} ${gardenCaseStudyDesignA.hero.titleTrail}`,
    description: gardenCaseStudyDesignA.meta.description,
    image: "/images/case-studies/garden-fence-clearance-hero.webp",
    imageAlt:
      "Garden and fence-line clearance case study in Canning Town",
    location: gardenCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: gardenCleanupCaseStudyPath,
    badge: "Design A",
    title: `${gardenCleanupCaseStudyDesignA.hero.titleLead} ${gardenCleanupCaseStudyDesignA.hero.titleAccent} ${gardenCleanupCaseStudyDesignA.hero.titleTrail}`,
    description: gardenCleanupCaseStudyDesignA.meta.description,
    image: "/images/case-studies/garden-cleanup-hero.webp",
    imageAlt:
      "Garden clean-up and clothesline case study on Ashford Road, London",
    location: gardenCleanupCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: bathroomMouldCaseStudyPath,
    badge: "Design A",
    title: `${bathroomMouldCaseStudyDesignA.hero.titleLead} ${bathroomMouldCaseStudyDesignA.hero.titleAccent} ${bathroomMouldCaseStudyDesignA.hero.titleTrail}`,
    description: bathroomMouldCaseStudyDesignA.meta.description,
    image: "/images/case-studies/bathroom-mould-blackwall-hero.webp",
    imageAlt:
      "Bathroom mould treatment case study in Blackwall, Canary Wharf",
    location: bathroomMouldCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: reletDeepCleanCaseStudyPath,
    badge: "Design A",
    title: `${reletDeepCleanCaseStudyDesignA.hero.titleLead} ${reletDeepCleanCaseStudyDesignA.hero.titleAccent} ${reletDeepCleanCaseStudyDesignA.hero.titleTrail}`,
    description: reletDeepCleanCaseStudyDesignA.meta.description,
    image: "/images/case-studies/24hr-deep-clean-relet-hero.webp",
    imageAlt:
      "24-hour deep clean to re-let flat case study in Canning Town",
    location: reletDeepCleanCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: eotBarkingRoadCaseStudyPath,
    badge: "Design A",
    title: `${eotBarkingRoadCaseStudyDesignA.hero.titleLead} ${eotBarkingRoadCaseStudyDesignA.hero.titleAccent} ${eotBarkingRoadCaseStudyDesignA.hero.titleTrail}`,
    description: eotBarkingRoadCaseStudyDesignA.meta.description,
    image: "/images/case-studies/eot-barking-road-hero.webp",
    imageAlt:
      "Full-flat end-of-tenancy clean and re-let case study on Barking Road, Canning Town",
    location: eotBarkingRoadCaseStudyDesignA.snapshot.items[0].value,
  },
  {
    href: eotClaremontCaseStudyPath,
    badge: "Design A",
    title: `${eotClaremontCaseStudyDesignA.hero.titleLead} ${eotClaremontCaseStudyDesignA.hero.titleAccent} ${eotClaremontCaseStudyDesignA.hero.titleTrail}`,
    description: eotClaremontCaseStudyDesignA.meta.description,
    image: "/images/case-studies/case-studies-card-eot-claremont.webp",
    imageAlt:
      "Full deposit recovery and re-let turnaround case study on Claremont Close, Canning Town",
    location: eotClaremontCaseStudyDesignA.snapshot.items[0].value,
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
            Practical examples of how Cleaning Services London handles domestic
            cleaning challenges across London — from mould treatment and bathroom
            deep cleans to garden clearance and clothesline installs.
          </p>
        </header>

        <div className={styles.listingGridTwo}>
          {listings.map((item) => (
            <Link key={item.href} href={item.href} className={styles.listingCard}>
              <img
                className={styles.listingImg}
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
              />
              <div className={styles.listingBody}>
                <p className={styles.listingMeta}>
                  {item.badge} · {item.location}
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
