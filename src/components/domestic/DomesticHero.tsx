import { preload } from "react-dom";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./DomesticHero.module.css";

const heroImage = "/images/domestic/domestic-cleaning-hero.webp";

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

        <div className={`${styles.container} ${styles.containerWithForm} ${local.container}`}>
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.subTitle}>
              <p>Domestic Cleaning Services</p>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="domestic-hero-title">
                Domestic Cleaning Services <span>London</span> for Homes and
                Flats
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                Keeping up with housework is not always easy when daily life
                chores already take up your time. Cleaning Services London
                provides reliable domestic cleaning services London for
                homeowners, tenants, landlords, and busy professionals who want
                a consistently clean home without the hassle. So if you need
                weekly, fortnightly, or one-off domestic cleaning, our
                DBS-checked and fully insured cleaners are available across
                London.
              </p>
            </div>

            <div className={heroStyles.bottom}>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">Request a Quote</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">
                  Book Your Cleaner
                </ThmButton>
              </div>
            </div>
          </div>
          <HeroQuoteForm formPrefix="domestic" defaultService="Domestic" transparent clear />
        </div>
      </div>
    </section>
  );
}
