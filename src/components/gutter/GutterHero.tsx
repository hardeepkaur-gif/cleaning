import { preload } from "react-dom";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "@/components/hero/HeroQuoteForm";
import heroStyles from "@/components/hero/HeroLeadForm.module.css";
import styles from "@/components/tenancy/TenancyHero.module.css";
import local from "./GutterHero.module.css";

const heroImage = "/images/gutter/gutter-cleaning-hero.webp";

export default function GutterHero() {
  preload(heroImage, { as: "image", fetchPriority: "high" });
  return (
    <section
      className={styles.hero}
      id="gutter-cleaning-hero"
      aria-labelledby="gutter-hero-title"
    >
      <div className={styles.item}>
        <div
          className={styles.bg}
          role="img"
          aria-label="Professional gutter cleaning for homes and businesses in London"
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
              <p>Gutter Cleaning London</p>
            </div>

            <div className={heroStyles.bigTitle}>
              <h1 id="gutter-hero-title">
                Professional and Reliable Gutter Cleaning{" "}
                <span>London</span> for Homes
              </h1>
            </div>

            <div className={heroStyles.text}>
              <p>
                Blocked gutters causing leaks, damp patches or overflowing water
                around your property? At Cleaning Services London, we help
                homeowners, landlords and businesses fix these issues quickly
                with reliable Gutter Cleaning London.
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
          <HeroQuoteForm formPrefix="gutter" defaultService="Gutter" transparent clear />
        </div>
      </div>
    </section>
  );
}
