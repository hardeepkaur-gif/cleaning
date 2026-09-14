import { preload } from "react-dom";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "./TenancyHero.module.css";

const imgBase = "/images/hero/clean360";
const heroImage = `${imgBase}/end-of-tenancy-cleaning-hero-london.webp`;

export default function TenancyHero() {
  preload(heroImage, { as: "image", fetchPriority: "high" });
  return (
    <section className={styles.hero} id="end-of-tenancy-cleaning" aria-labelledby="tenancy-hero-title">
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
            <div className={heroStyles.subTitle}>
              <p>End of Tenancy Cleaning</p>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="tenancy-hero-title">
                Cheap End of Tenancy Cleaning <span>London</span> for Tenants
                and Landlords
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                Moving out soon? End of tenancy cleaning London is one of the most
                common reasons tenants face deposit disputes, failed inspections
                and last-minute deductions. Our professional end of tenancy cleaning
                service in London helps tenants and landlords prepare properties for
                a smooth handover with a detailed move-out clean completed to
                inspection-ready standards.
              </p>
            </div>

            <div className={heroStyles.bottom}>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">Request a Quote</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/services">
                  View All Services
                </ThmButton>
              </div>
            </div>
          </div>
          <HeroQuoteForm formPrefix="tenancy" defaultService="Tenancy" transparent clear />
        </div>
      </div>
    </section>
  );
}
