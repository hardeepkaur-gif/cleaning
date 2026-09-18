import { preload } from "react-dom";
import {
  FaPoundSign,
  FaShieldAlt,
  FaStar,
  FaUserShield,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "./TenancyHero.module.css";

const imgBase = "/images/hero/clean360";
const heroImage = `${imgBase}/end-of-tenancy-cleaning-hero-london.webp`;

const trustBadges = [
  { icon: FaUserShield, label: "DBS-Checked Cleaners" },
  { icon: FaShieldAlt, label: "Fully Insured" },
  { icon: FaPoundSign, label: "Fixed, Upfront Pricing" },
  { icon: FaStar, label: "Satisfaction Focused" },
] as const;

export default function TenancyHero() {
  preload(heroImage, { as: "image", fetchPriority: "high" });
  return (
    <section
      className={styles.hero}
      id="end-of-tenancy-cleaning"
      aria-labelledby="tenancy-hero-title"
    >
      <div className={styles.item}>
        <div
          className={styles.bg}
          role="img"
          aria-label="Professional end of tenancy cleaning service for London tenants and landlords"
        >
          <div
            className={styles.bgInner}
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div className={`${styles.container} ${styles.containerWithForm}`}>
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.bigTitle}>
              <h1 id="tenancy-hero-title">
                End of Tenancy Cleaning <span>London</span> for Tenants and
                Landlords
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                Professional end of tenancy cleaning services in London to
                prepare properties for a smooth handover, with a detailed
                move-out clean completed to inspection-ready standards.
              </p>
            </div>

            <ul className={styles.trustList} aria-label="Service trust points">
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
                <ThmButton href="/services">View All Services</ThmButton>
              </div>
            </div>
          </div>
          <HeroQuoteForm
            formPrefix="tenancy"
            defaultService="Tenancy"
            transparent
            clear
          />
        </div>
      </div>
    </section>
  );
}
