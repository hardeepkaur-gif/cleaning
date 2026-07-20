import { FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiSparkleDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "@/components/tenancy/TenancyCtaSection.module.css";

export default function DomesticAdditionalCtaSection() {
  return (
    <section
      className={styles.cta}
      id="domestic-additional-services"
      aria-labelledby="domestic-additional-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="domestic-additional-cta-title">
              Need Something More Than{" "}
              <span className={styles.highlightText}>
                Regular Domestic Cleaning?
              </span>
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              When making your booking, let us know if you would like other jobs
              to be done, such as ironing, washing, changing bed linen, cleaning
              the fridge inside, cleaning cupboards inside, etc.
            </p>
            <div className={`${styles.btnBox} ${localStyles.btnBox}`}>
              <ThmButton
                href="/#contact"
                className={`${styles.ctaBtn} ${localStyles.ctaBtn}`}
              >
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
                        Extra tasks
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        Add more to your domestic clean
                      </h3>

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaPhoneAlt aria-hidden />
                          Call us to discuss add-ons
                        </li>
                        <li>
                          <FaEnvelope aria-hidden />
                          Email your task list
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
