import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./DomesticCtaSection.module.css";

export default function DomesticCtaSection() {
  return (
    <section
      className={styles.cta}
      id="domestic-cleaning-cta"
      aria-labelledby="domestic-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="domestic-cta-title">
                Leave the Cleaning to Us
              </h2>

              <p className={styles.text}>
                Choose a domestic cleaning service that fits your routine and let
                our trusted local cleaners take care of the rest. Book your
                preferred cleaning schedule today and enjoy a cleaner home
                without the ongoing effort.
              </p>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Get a quick cleaning quote
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
                    <span className={styles.screenBadge} role="img" aria-label="Book domestic cleaning today icon">
                      <PiSparkleFill aria-hidden /> Book today
                    </span>
                    <strong>Domestic Cleaning</strong>
                    <span>Weekly · Fortnightly · One-off</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} role="img" aria-label="Domestic cleaning booking icon">
                      <PiHouseLineFill aria-hidden />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill aria-hidden /> DBS-checked team
                    </li>
                    <li>
                      <PiCalendarCheckFill aria-hidden /> Schedule confirmed
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
