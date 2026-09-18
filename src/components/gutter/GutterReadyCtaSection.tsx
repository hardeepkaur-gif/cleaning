import { FaCalendarCheck } from "react-icons/fa";
import {
  PiCloudRainDuotone,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./GutterReadyCtaSection.module.css";

export default function GutterReadyCtaSection() {
  return (
    <section
      className={`${styles.cta} ${local.cta}`}
      id="gutter-ready-cta"
      aria-labelledby="gutter-ready-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="gutter-ready-cta-title">
                Ready to book your gutter cleaning service?
              </h2>

              <p className={styles.text}>
                Contact Cleaning Services London today for a fixed quote and a
                convenient appointment anywhere across London.
              </p>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Contact Now!
                  </ThmButton>
                  <span className={styles.btnNote}>
                    Always open · London-wide
                  </span>
                </div>
              </div>
            </div>

            <div className={`${styles.phoneCol} ${local.phoneCol}`}>
              <div className={`${styles.phone} ${local.phone}`}>
                <div className={styles.phoneNotch} aria-hidden />
                <div className={`${styles.phoneScreen} ${local.phoneScreen}`}>
                  <div className={styles.screenTop}>
                    <span className={styles.screenBadge} role="img" aria-label="Book gutter cleaning today icon">
                      <PiSparkleFill aria-hidden /> Book today
                    </span>
                    <strong>Gutter Cleaning</strong>
                    <span>London · Call us</span>
                  </div>

                  <div className={`${styles.screenHero} ${local.screenHero}`}>
                    <span
                      className={`${styles.heroIcon} ${local.heroIcon}`}
                      role="img"
                      aria-label="Gutter cleaning booking icon"
                    >
                      <PiCloudRainDuotone aria-hidden />
                    </span>
                    <div
                      className={`${styles.heroImg} ${local.heroImg}`}
                      aria-hidden
                    />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill aria-hidden /> Trusted local team
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
