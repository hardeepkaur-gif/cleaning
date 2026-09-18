import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./TenancyPricingCtaSection.module.css";

export default function TenancyPricingCtaSection() {
  return (
    <section
      className={`${styles.cta} ${local.cta}`}
      id="tenancy-pricing-cta"
      aria-labelledby="tenancy-pricing-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="tenancy-pricing-cta-title">
                Need an Exact Quote?
              </h2>

              <p className={styles.text}>
                Contact our team today for a fixed end of tenancy cleaning quote
                based on your property size, location and cleaning requirements.
              </p>

              <div className={styles.actionRow}>
                <div className={styles.btnWrap}>
                  <ThmButton href="/contact-us" className={styles.ctaBtn}>
                    <FaCalendarCheck aria-hidden />
                    Get Your Fixed Price Quote
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
                    <span className={styles.screenBadge} role="img" aria-label="Fixed end of tenancy cleaning quote icon">
                      <PiSparkleFill aria-hidden /> Call us
                    </span>
                    <strong>End of Tenancy Clean</strong>
                    <span>London · Property handover</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} role="img" aria-label="End of tenancy cleaning quote icon">
                      <PiHouseLineFill aria-hidden />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiHouseLineFill /> Size &amp; location
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Booking confirmed
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>Always open</span>
                    <strong>Call us</strong>
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
