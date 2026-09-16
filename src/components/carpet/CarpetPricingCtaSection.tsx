import { FaCalendarCheck } from "react-icons/fa";
import { PiRugDuotone, PiSparkleFill } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./CarpetPricingCtaSection.module.css";

export default function CarpetPricingCtaSection() {
  return (
    <section
      className={`${styles.cta} ${local.cta}`}
      id="carpet-pricing-cta"
      aria-labelledby="carpet-pricing-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="carpet-pricing-cta-title">
                Want an Exact Price?
              </h2>

              <p className={styles.text}>
                Every property is different. Request a fixed quotation based on
                your carpet size, number of rooms and cleaning requirements.
              </p>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Get My Fixed Quote
                  </ThmButton>
                  <span className={styles.btnNote}>
                    Free quote · No obligation
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} aria-hidden />
                <div className={styles.phoneScreen}>
                  <div className={styles.screenTop}>
                    <span
                      className={styles.screenBadge}
                      role="img"
                      aria-label="Fixed carpet cleaning quote icon"
                    >
                      <PiSparkleFill aria-hidden /> Fixed quote
                    </span>
                    <strong>Carpet Cleaning</strong>
                    <span>London · Room by room pricing</span>
                  </div>

                  <div className={`${styles.screenHero} ${local.screenHero}`}>
                    <span
                      className={`${styles.heroIcon} ${local.heroIcon}`}
                      role="img"
                      aria-label="Carpet cleaning pricing icon"
                    >
                      <PiRugDuotone aria-hidden />
                    </span>
                    <div
                      className={`${styles.heroImg} ${local.heroImg}`}
                      aria-hidden
                    />
                  </div>

                  <div className={styles.screenFooter}>
                    <span>Fixed price quote</span>
                    <strong>No hidden fees</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
