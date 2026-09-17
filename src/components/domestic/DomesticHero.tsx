import { preload } from "react-dom";
import {
  FaAward,
  FaPoundSign,
  FaRegSmile,
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
  { icon: FaUserShield, label: "DBS-Checked Local Cleaners", featured: false },
  { icon: FaShieldAlt, label: "Fully Insured Cleaning Company", featured: false },
  { icon: FaAward, label: "Experienced Local Cleaners", featured: false },
  {
    icon: FaUserCheck,
    label: "Same Cleaner Available for Regular Visits",
    featured: false,
  },
  {
    icon: FaPoundSign,
    label: "Regular home cleaning from £18/h",
    featured: true,
  },
  { icon: FaRegSmile, label: "Satisfaction Guarantee", featured: false },
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
            <div className={heroStyles.subTitle}>
              <p>Domestic Cleaning Services</p>
            </div>

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

            <ul
              className={local.trustList}
              aria-label="Domestic cleaning trust points"
            >
              {trustBadges.map(({ icon: Icon, label, featured }) => (
                <li
                  key={label}
                  className={`${local.trustItem}${
                    featured ? ` ${local.featured}` : ""
                  }`}
                >
                  <span className={local.trustIcon} aria-hidden>
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
