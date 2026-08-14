import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiRugDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import { contactInfo } from "@/components/menu/menuData";
import styles from "@/components/cta/CtaSectionThree.module.css";
import localStyles from "@/components/tenancy/TenancyCtaSection.module.css";
import local from "./CarpetAreasCtaSection.module.css";
import {
  carpetAreasCtaButtonLabel,
  carpetAreasCtaScreenImage,
  carpetAreasCtaScreenImageAlt,
  carpetAreasCtaScreenTitle,
  carpetAreasCtaText,
  carpetAreasCtaTitle,
} from "./carpetAreasCtaData";

export default function CarpetAreasCtaSection() {
  return (
    <section
      className={styles.cta}
      id="carpet-areas-cta"
      aria-labelledby="carpet-areas-cta-title"
    >
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${localStyles.grid}`}>
          <div className={`${styles.copy} ${localStyles.copy}`}>
            <h2 className={styles.title} id="carpet-areas-cta-title">
              {carpetAreasCtaTitle}
            </h2>
            <p className={`${styles.text} ${localStyles.text}`}>
              {carpetAreasCtaText}
            </p>
            <div
              className={`${styles.btnBox} ${localStyles.btnBox} ${local.btnBox}`}
            >
              <ThmButton
                href={contactInfo.phoneHref}
                className={`${styles.ctaBtn} ${localStyles.ctaBtn} ${local.ctaBtn}`}
              >
                <FaPhoneAlt aria-hidden />
                {carpetAreasCtaButtonLabel}
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
                      <span className={localStyles.screenBadge} role="img" aria-label="Carpet cleaning London icon">
                        <PiRugDuotone aria-hidden />
                        Carpet cleaning
                      </span>
                      <h3 className={localStyles.screenTitle}>
                        {carpetAreasCtaScreenTitle}
                      </h3>

                      <img
                        className={local.screenImg}
                        src={carpetAreasCtaScreenImage}
                        alt={carpetAreasCtaScreenImageAlt}
                        loading="lazy"
                      />

                      <ul className={localStyles.screenList}>
                        <li>
                          <FaPhoneAlt aria-hidden />
                          {contactInfo.phone}
                        </li>
                        <li>
                          <FaEnvelope aria-hidden />
                          Fixed quote available
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
