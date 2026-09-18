import { FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiWarningDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "@/components/tenancy/TenancyCtaSection.module.css";
import local from "./GutterWarningCtaSection.module.css";

export default function GutterWarningCtaSection() {
  return (
    <section
      className={styles.cta}
      id="gutter-warning-cta"
      aria-labelledby="gutter-warning-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="gutter-warning-cta-title">
              Noticed any of these{" "}
              <span className={styles.highlightText}>warning signs?</span>
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              Book your gutter cleaning in London today and stop small gutter
              problems turning into costly property damage.
            </p>
            <div
              className={`${styles.btnBox} ${localStyles.btnBox} ${local.btnBox}`}
            >
              <ThmButton
                href="/contact-us"
                className={`${styles.ctaBtn} ${localStyles.ctaBtn} ${local.ctaBtn}`}
              >
                <FaCalendarCheck aria-hidden />
                Contact Now!
              </ThmButton>
            </div>
          </div>

          <div className={`${styles.visual} ${localStyles.visual}`}>
            <div className={`${styles.visualStage} ${localStyles.stage}`}>
              <div className={localStyles.laptopWrap}>
                <div className={localStyles.laptop}>
                  <div className={localStyles.laptopBezel}>
                    <div className={localStyles.laptopCam} aria-hidden />
                    <div className={localStyles.laptopScreen}>
                      <span className={localStyles.screenBadge} role="img" aria-label="Blocked gutter warning signs icon">
                        <PiWarningDuotone aria-hidden />
                        Act early
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        Stop damage before it starts
                      </h3>

                      <img
                        className={local.screenImg}
                        src="/images/gutter/gutter-blocked-warning-signs-london.webp"
                        alt="Blocked gutter warning signs needing professional cleaning in London"
                        loading="lazy"
                      />

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaPhoneAlt aria-hidden />
                          Call anytime
                        </li>
                        <li>
                          <FaEnvelope aria-hidden />
                          Book across London
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={localStyles.laptopBase} aria-hidden>
                    <span className={localStyles.laptopTrack} />
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
