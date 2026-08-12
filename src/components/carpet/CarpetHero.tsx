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
              <p>Carpet Cleaning London</p>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="carpet-hero-title">
                Expert Carpet Cleaning <span>London</span> for Homes, Flats and
                Offices
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                Deep-clean your carpets with professional hot water extraction,
                targeted stain treatment and odour removal. At Cleaning Services
                London Our insured, DBS-checked cleaners serve homes, flats,
                offices and rental properties in wider London.
              </p>
              <p>
                Book your carpet cleaning services today and receive a fixed
                quotation based on your property size and cleaning requirements.
              </p>
            </div>

            <div className={`${heroStyles.bottom} ${local.bottom}`}>
              <div className={`${heroStyles.bottomBtn} ${local.bottomBtn}`}>
                <ThmButton href="/contact-us">Contact Now!</ThmButton>
              </div>
              <div className={`${heroStyles.bottomBtn} ${local.bottomBtn}`}>
                <ThmButton href="/services">
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
