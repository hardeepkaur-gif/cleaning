import { preload } from "react-dom";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./CarpetHero.module.css";

const heroImage = "/images/carpet/carpet-cleaning-hero.webp";

export default function CarpetHero() {
  preload(heroImage, { as: "image", fetchPriority: "high" });
  return (
    <section
      className={styles.hero}
      id="carpet-cleaning-hero"
      aria-labelledby="carpet-hero-title"
    >
      <div className={styles.item}>
        <div
          className={styles.bg}
          role="img"
          aria-label="Expert carpet cleaning for homes flats and offices in London"
        >
          <div
            className={`${styles.bgInner} ${local.bgInner}`}
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        </div>
        <div className={styles.overlay} aria-hidden />

        <div className={`${styles.container} ${styles.containerWithForm}`}>
          <div className={`${heroStyles.content} ${styles.content}`}>
            <div className={heroStyles.subTitle}>
              <p>Carpet Cleaning London</p>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="carpet-hero-title">
                Carpet Cleaning in <span>London</span>: Tough on Stains, Easy on
                Your Budget
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

            <div className={heroStyles.bottom}>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/contact-us">Contact Now!</ThmButton>
              </div>
              <div className={heroStyles.bottomBtn}>
                <ThmButton href="/services">
                  View All Services
                </ThmButton>
              </div>
            </div>
          </div>
          <HeroQuoteForm formPrefix="carpet" defaultService="Carpet" transparent clear />
        </div>
      </div>
    </section>
  );
}
