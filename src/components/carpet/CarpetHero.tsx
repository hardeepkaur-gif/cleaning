import ThmButton from "@/components/menu/ThmButton";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./CarpetHero.module.css";

const heroImage = "/images/carpet/carpet-cleaning-hero.webp";

export default function CarpetHero() {
  return (
    <section
      className={styles.hero}
      id="carpet-cleaning"
      aria-labelledby="carpet-hero-title"
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
              <h4>Carpet Cleaning</h4>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="carpet-hero-title">
                Expert Carpet Cleaning <span>London</span> for Homes, Flats and
                Offices
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                If your carpets look dull, smell bad or hold stains that will not
                go away you are not alone. Many homes and offices in London face
                the same problem and basic vacuuming is not enough. To fix it at
                Cleaning Services London we provide professional carpet cleaning
                London using deep steam cleaning and stain removal to lift dirt,
                remove odours and refresh your carpets.
              </p>
              <p>
                Book your carpet cleaning today and receive a fixed quotation
                based on your property size and cleaning requirements.
              </p>
            </div>

            <div className={`${heroStyles.bottom} ${local.bottom}`}>
              <div className={`${heroStyles.bottomBtn} ${local.bottomBtn}`}>
                <ThmButton href="/contact-us">Contact Now!</ThmButton>
              </div>
              <div className={`${heroStyles.bottomBtn} ${local.bottomBtn}`}>
                <ThmButton href="/services" variant="secondary">
                  View All Services
                </ThmButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
