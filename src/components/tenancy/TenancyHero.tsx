import ThmButton from "@/components/menu/ThmButton";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "./TenancyHero.module.css";

const imgBase = "/images/hero/cleanon";

export default function TenancyHero() {
  return (
    <section className={styles.hero} id="end-of-tenancy-cleaning" aria-labelledby="tenancy-hero-title">
      <div className={styles.item}>
        <div className={styles.bg} aria-hidden>
          <div
            className={styles.bgInner}
            style={{ backgroundImage: `url('${imgBase}/slider-1-1.jpg')` }}
          />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div className={styles.container}>
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.subTitle}>
              <h4>End of Tenancy Cleaning</h4>
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
              <p>
                Book your end of tenancy cleaning today and receive a fixed
                quotation based on your property size and requirements.
              </p>
            </div>

            <div className={heroStyles.bottom}>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/#contact">Request a Quote</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/#services" variant="secondary">
                  View All Services
                </ThmButton>
              </div>
            </div>
          </div>
        </div>

        <img
          className={styles.bottomShape}
          src={`${imgBase}/main-slider-img-shape-1.png`}
          alt=""
          aria-hidden
        />

        <div className={styles.mainImg}>
          <img
            src={`${imgBase}/main-slider-img-1-1.png`}
            alt="Professional end of tenancy cleaner in London"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
