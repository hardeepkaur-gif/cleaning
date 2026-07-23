import { FaCalendarCheck, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "@/components/tenancy/TenancyCtaSection.module.css";
import local from "./GutterAreasCtaSection.module.css";

export default function GutterAreasCtaSection() {
  return (
    <section
      className={styles.cta}
      id="gutter-areas-cta"
      aria-labelledby="gutter-areas-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="gutter-areas-cta-title">
              Not sure if we cover your{" "}
              <span className={styles.highlightText}>location?</span>
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              Contact our team today with your postcode and we will confirm
              availability and provide a fixed quotation for your gutter cleaning
              service.
            </p>
            <div
              className={`${styles.btnBox} ${localStyles.btnBox} ${local.btnBox}`}
            >
              <ThmButton
                href="/#contact"
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
                      <span className={localStyles.screenBadge}>
                        <PiMapPinAreaDuotone aria-hidden />
                        Check coverage
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        Send your postcode for a quote
                      </h3>

                      <img
                        className={local.screenImg}
                        src="/images/gutter/gutter-included-3.webp"
                        alt=""
                        loading="lazy"
                        aria-hidden
                      />

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaMapMarkerAlt aria-hidden />
                          Confirm your area
                        </li>
                        <li>
                          <FaEnvelope aria-hidden />
                          Fixed quote reply
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
