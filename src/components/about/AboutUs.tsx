import Link from "next/link";
import {
  FaAward,
  FaClipboardCheck,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";
import styles from "./AboutUs.module.css";

const stats = [
  {
    value: "12",
    label: "No. of contractors",
    icon: FaUserTie,
    accent: "coral" as const,
  },
  {
    value: "10",
    label: "Years of experience",
    icon: FaAward,
    accent: "teal" as const,
  },
  {
    value: "700",
    label: "Jobs completed",
    icon: FaClipboardCheck,
    accent: "coral" as const,
  },
  {
    value: "100%",
    label: "Fully insured team",
    icon: FaShieldAlt,
    accent: "teal" as const,
  },
] as const;

export default function AboutUs() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="about-title">
            Professional Cleaning Services for Homes and Businesses
          </h2>
        </div>

        <div className={`${styles.grid} ${styles.gridStats}`}>
          <div className={styles.statsPanel} aria-label="Company trust statistics">
            <ul className={styles.statsGrid}>
              {stats.map(({ value, label, icon: Icon, accent }) => (
                <li
                  key={label}
                  className={`${styles.statCard} ${
                    accent === "coral" ? styles.statAccentCoral : styles.statAccentTeal
                  }`}
                >
                  <div className={styles.statTopBar} aria-hidden />

                  <div className={styles.statIconWrap}>
                    <span className={styles.statIconArc} aria-hidden />
                    <span className={styles.statIcon}>
                      <Icon aria-hidden />
                    </span>
                  </div>

                  <strong className={styles.statValue}>{value}</strong>
                  <span className={styles.statLabel}>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.content}>
            <blockquote className={styles.callout}>
              <p>
                Cleaning Services London supports homeowners, tenants, landlords,
                students, offices, and commercial premises across London with reliable
                cleaning.
              </p>
            </blockquote>

            <p className={styles.text}>
              Whether you need regular home cleaning,{" "}
              <Link href="/carpet-cleaning-london" className={styles.internalLink}>
                carpet cleaning
              </Link>
              , end-of-tenancy cleaning, or{" "}
              <Link href="/gutter-cleaning-london" className={styles.internalLink}>
                gutter cleaning
              </Link>
              , our team follows documented cleaning standards.
            </p>

            <p className={styles.text}>
              Our focus is 100% customer satisfaction, and we strive to meet it as a
              benchmark. We simply want you to leave the mundane chores to us and return
              to a clean, tidy property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
