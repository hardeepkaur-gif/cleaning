import { FaCalendarCheck, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiRugDuotone,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import { contactInfo } from "@/components/menu/menuData";
import {
  carpetReadyCtaCallLabel,
  carpetReadyCtaNote,
  carpetReadyCtaQuoteLabel,
  carpetReadyCtaText,
  carpetReadyCtaTitle,
  carpetReadyCtaTrustPoints,
} from "./carpetReadyCtaData";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./CarpetReadyCtaSection.module.css";

export default function CarpetReadyCtaSection() {
  return (
    <section
      className={`${styles.cta} ${local.cta}`}
      id="carpet-ready-cta"
      aria-labelledby="carpet-ready-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="carpet-ready-cta-title">
                {carpetReadyCtaTitle}
              </h2>

              <p className={styles.text}>{carpetReadyCtaText}</p>

              <ul className={styles.trustList}>
                {carpetReadyCtaTrustPoints.map((item) => (
                  <li key={item}>
                    <FaCheckCircle aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <p className={local.note}>{carpetReadyCtaNote}</p>
                  <div className={local.btnRow}>
                    <ThmButton
                      href="/#contact"
                      className={`${styles.ctaBtn} ${local.ctaBtn}`}
                    >
                      <FaCalendarCheck aria-hidden />
                      {carpetReadyCtaQuoteLabel}
                    </ThmButton>
                    <ThmButton
                      href={contactInfo.phoneHref}
                      className={`${styles.ctaBtn} ${local.ctaBtnAlt}`}
                    >
                      <FaPhoneAlt aria-hidden />
                      {carpetReadyCtaCallLabel}
                    </ThmButton>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} aria-hidden />
                <div className={styles.phoneScreen}>
                  <div className={styles.screenTop}>
                    <span className={styles.screenBadge}>
                      <PiSparkleFill /> Book today
                    </span>
                    <strong>Carpet Cleaning</strong>
                    <span>London · East &amp; Greater London</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} aria-hidden>
                      <PiRugDuotone />
                    </span>
                    <div className={`${styles.heroImg} ${local.heroImg}`} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill /> DBS-checked team
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Flexible appointments
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>Fixed price quote</span>
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
