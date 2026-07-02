import { FaHome } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroShowcase.module.css";

const stats = [
  { value: "3,600+", label: "Total Customers", accent: false },
  { value: "25+", label: "Years Experience", accent: true },
  { value: "300+", label: "Team Members", accent: false },
];

export default function HeroShowcase() {
  return (
    <section className={styles.hero} aria-label="Featured cleaning services">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <FaHome className={styles.homeIcon} aria-hidden />
            <span>Professional Cleaning Services</span>
          </div>

          <h2 className={styles.title}>
            Cleaning Services London With{" "}
            <span className={styles.locationPill}>DBS Checked Professional Cleaners</span>
          </h2>

          <p className={styles.text}>
            Reliable cleaning services for homes, rental properties, offices, and
            commercial premises across East London. At Cleaning Services London we
            have DBS-checked and fully insured cleaners following documented cleaning
            standards, completion photo procedures, and quality control checks
            designed to deliver consistent results.
          </p>

          <div className={styles.actions}>
            <ThmButton href="#contact">Request a Quote</ThmButton>
            <ThmButton href="#services">Find Your Cleaner</ThmButton>
          </div>

          <div className={styles.stats}>
            {stats.map(({ value, label, accent }) => (
              <div key={label} className={styles.statItem}>
                <strong className={accent ? styles.statAccent : undefined}>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.circleRing} aria-hidden />
          <div className={styles.circle} aria-hidden />
          <img
            className={styles.cleaner}
            src="/images/hero/hero-cleaner.png"
            alt="Professional cleaner with spray bottle"
          />
          <img
            className={styles.supplies}
            src="/images/hero/hero-supplies.png"
            alt="Cleaning supplies bucket"
          />
        </div>
      </div>
    </section>
  );
}
