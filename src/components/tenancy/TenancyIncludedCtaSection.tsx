import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./TenancyIncludedCtaSection.module.css";

export default function TenancyIncludedCtaSection() {
  return (
    <section
      className={styles.cta}
      id="tenancy-included-cta"
      aria-labelledby="tenancy-included-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="tenancy-included-cta-title">
                Ready to Book Your End of Tenancy Clean?
              </h2>

              <p className={styles.text}>
                Get a fixed quote based on your property size and requirements.
                Our DBS-checked and insured cleaners cover East London and
                surrounding areas with flexible booking availability.
              </p>

              <div className={styles.actionRow}>
                <div className={styles.btnWrap}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    <span className={local.btnTextDesktop}>
                      Book Your End of Tenancy Cleaning Today
                    </span>
                    <span className={local.btnTextMobile}>
                      Book Tenancy Cleaning Today
                    </span>
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
                    <span className={styles.screenBadge} role="img" aria-label="Book end of tenancy cleaning today icon">
                      <PiSparkleFill aria-hidden /> Book today
                    </span>
                    <strong>End of Tenancy Clean</strong>
                    <span>East London · Flexible dates</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} role="img" aria-label="End of tenancy cleaning booking icon">
                      <PiHouseLineFill aria-hidden />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill /> DBS-checked team
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Booking confirmed
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>Always open</span>
                    <strong>Book now</strong>
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
