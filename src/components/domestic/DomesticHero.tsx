import { preload } from "react-dom";
import {
  FaAward,
  FaShieldAlt,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./DomesticHero.module.css";

const heroImage = "/images/domestic/domestic-cleaning-hero.webp";

const trustBadges = [
  { icon: FaUserShield, label: "DBS-Checked Local Cleaners" },
  { icon: FaShieldAlt, label: "Fully Insured Cleaning Company" },
  { icon: FaAward, label: "Experienced Local Cleaners" },
  {
    icon: FaUserCheck,
    label: "Same Cleaner Available for Regular Visits",
  },
] as const;

export default function DomesticHero() {
  preload(heroImage, { as: "image", fetchPriority: "high" });
  return (
    <section
      className={styles.hero}
      id="domestic-cleaning-services"
      aria-labelledby="domestic-hero-title"
    >
      <div className={styles.item}>
        <div
          className={styles.bg}
          role="img"
          aria-label="Domestic cleaning services for homes and flats across London"
        >
          <div
            className={`${styles.bgInner} ${local.bgInner}`}
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div
          className={`${styles.container} ${styles.containerWithForm} ${local.container}`}
        >
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.bigTitle}>
              <h1 id="domestic-hero-title">
                Routine Domestic Cleaning Services <span>London</span>
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                We provide reliable domestic cleaning services to homemakers and
                busy professionals for a consistently clean home without the
                hassle. Whether you need weekly, fortnightly, or one-off domestic
                cleaning, our cleaners are available across London.
              </p>
            </div>

            <ul className={styles.trustList} aria-label="Domestic cleaning trust points">
              {trustBadges.map(({ icon: Icon, label }) => (
                <li key={label} className={styles.trustItem}>
                  <span className={styles.trustIcon} aria-hidden>
                    <Icon />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className={heroStyles.bottom}>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">Request a Quote</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">Book Your Cleaner</ThmButton>
              </div>
            </div>
          </div>
          <HeroQuoteForm
            formPrefix="domestic"
            defaultService="Domestic"
            transparent
            clear
          />
        </div>
      </div>
    </section>
  );
}
