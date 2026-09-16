import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiClockFill,
  PiHouseLineFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./DomesticIntroCtaSection.module.css";

export default function DomesticIntroCtaSection() {
  return (
    <section
      className={`${styles.cta} ${local.cta}`}
      id="domestic-intro-cta"
      aria-labelledby="domestic-intro-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <span className={styles.badge}>
                <PiSparkleFill aria-hidden />
                More time for what matters
              </span>

              <h2 className={styles.title} id="domestic-intro-cta-title">
                Leave the Housework to Us
              </h2>

              <p className={styles.text}>
                Spend less time cleaning and more time doing what matters most.
                Speak with our team today for a fixed quotation and book trusted
                domestic cleaning services in London that fit your schedule.
              </p>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Request a Quote
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
                      aria-label="Book domestic cleaning today icon"
                    >
                      <PiSparkleFill aria-hidden /> Your time back
                    </span>
                    <strong>Domestic Cleaning</strong>
                    <span>Weekly · Fortnightly · One-off</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span
                      className={styles.heroIcon}
                      role="img"
                      aria-label="Domestic cleaning booking icon"
                    >
                      <PiHouseLineFill aria-hidden />
                    </span>
                    <div className={local.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiClockFill aria-hidden /> Flexible scheduling
                    </li>
                    <li>
                      <PiCalendarCheckFill aria-hidden /> Fixed quotation
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>Trusted London cleaners</span>
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
