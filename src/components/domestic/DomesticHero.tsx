import ThmButton from "@/components/menu/ThmButton";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./DomesticHero.module.css";

const heroImage = "/images/domestic/domestic-cleaning-hero.png";

export default function DomesticHero() {
  return (
    <section
      className={styles.hero}
      id="domestic-cleaning-services"
      aria-labelledby="domestic-hero-title"
    >
      <div className={styles.item}>
        <div className={styles.bg} aria-hidden>
          <div
            className={`${styles.bgInner} ${local.bgInner}`}
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div className={styles.container}>
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.subTitle}>
              <h4>Domestic Cleaning Services</h4>
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
                <ThmButton href="/#contact">Request a Quote</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/#contact" variant="secondary">
                  Book Your Cleaner
                </ThmButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
