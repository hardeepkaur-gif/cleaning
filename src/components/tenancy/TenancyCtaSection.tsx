import { FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiSparkleDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "./TenancyCtaSection.module.css";

export default function TenancyCtaSection() {
  return (
    <section
      className={styles.cta}
      id="tenancy-additional-services"
      aria-labelledby="tenancy-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="tenancy-cta-title">
              Need additional{" "}
              <span className={styles.highlightText}>services?</span>
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              Carpet cleaning, oven cleaning, deep cleaning and move-in cleaning
              can be added to your booking for a complete property handover
              solution.
            </p>
            <div className={styles.btnBox}>
              <ThmButton href="/#contact" className={styles.ctaBtn}>
                <FaCalendarCheck aria-hidden />
                Request a Quote
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
                        <PiSparkleDuotone aria-hidden />
                        Add-on services
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        Add extra cleaning to your booking
                      </h3>

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaPhoneAlt aria-hidden />
                          Call us to discuss add-ons
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
