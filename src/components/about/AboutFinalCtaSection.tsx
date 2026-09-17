import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiSparkleFill,
  PiSprayBottleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";

export default function AboutFinalCtaSection() {
  return (
    <section
      className={styles.cta}
      id="about-final-cta"
      aria-labelledby="about-final-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="about-final-cta-title">
                Get a Free Cleaning Quote
              </h2>

              <p className={styles.text}>
                Ready to book a clean you can trust? Get in touch for a free,
                no-obligation quote. We&apos;ll walk you through exactly
                what&apos;s included.
              </p>

              <div className={styles.actionRow}>
                <div className={styles.btnWrap}>
                  <ThmButton href="/contact-us" className={styles.ctaBtn}>
                    <FaCalendarCheck aria-hidden />
                    Get a Free Quote
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
                      aria-label="Free cleaning quote booking icon"
                    >
                      <PiSparkleFill aria-hidden /> Quote ready
                    </span>
                    <strong>Home Deep Clean</strong>
                    <span>Tomorrow · 10:00 AM</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span
                      className={styles.heroIcon}
                      role="img"
                      aria-label="Home deep clean service icon"
                    >
                      <PiSprayBottleFill aria-hidden />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiHouseLineFill /> Kitchen &amp; bathroom
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Booking confirmed
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>DBS-checked cleaner</span>
                    <strong>£89 fixed</strong>
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
