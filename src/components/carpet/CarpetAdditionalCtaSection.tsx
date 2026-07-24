import { FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiRugDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "@/components/tenancy/TenancyCtaSection.module.css";
import local from "./CarpetAdditionalCtaSection.module.css";

export default function CarpetAdditionalCtaSection() {
  return (
    <section
      className={styles.cta}
      id="carpet-additional-cta"
      aria-labelledby="carpet-additional-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="carpet-additional-cta-title">
              Need Deep Cleaning, Stain Removal or{" "}
              <span className={styles.highlightText}>Steam Cleaning?</span>
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              Tell us what needs cleaning and we&apos;ll recommend the most
              suitable carpet cleaning method for your property.
            </p>
            <div className={`${styles.btnBox} ${localStyles.btnBox} ${local.btnBox}`}>
              <ThmButton
                href="/contact-us"
                className={`${styles.ctaBtn} ${localStyles.ctaBtn} ${local.ctaBtn}`}
              >
                <FaCalendarCheck aria-hidden />
                Book Carpet Cleaning
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
                        <PiRugDuotone aria-hidden />
                        Carpet services
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        Choose the right carpet clean
                      </h3>

                      <img
                        className={local.screenImg}
                        src="/images/carpet/deep-carpet-cleaning.webp"
                        alt=""
                        loading="lazy"
                        aria-hidden
                      />

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaPhoneAlt aria-hidden />
                          Call us to discuss your carpets
                        </li>
                        <li>
                          <FaEnvelope aria-hidden />
                          Email your property details
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
