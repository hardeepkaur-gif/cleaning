import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiRugDuotone,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./CarpetCtaSection.module.css";

const trustPoints = [
  "Fixed pricing with no hidden surprises",
  "Professional steam cleaning equipment",
  "Flexible appointments across London",
];

export default function CarpetCtaSection() {
  return (
    <section
      className={styles.cta}
      id="carpet-cleaning-cta"
      aria-labelledby="carpet-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="carpet-cta-title">
                Get Cleaner Carpets Without Extra Hassle
              </h2>

              <p className={styles.text}>
                Fixed pricing, professional equipment and flexible appointments
                across London. Tell us about your property and we&apos;ll
                recommend the right carpet cleaning service.
              </p>

              <ul className={styles.trustList}>
                {trustPoints.map((item) => (
                  <li key={item}>
                    <FaCheckCircle aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actionRow}>
                <div className={`${styles.btnWrap} ${local.btnWrap}`}>
                  <ThmButton
                    href="/#contact"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Request Your Quote
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
                    <span className={styles.screenBadge}>
                      <PiSparkleFill /> Book today
                    </span>
                    <strong>Carpet Cleaning</strong>
                    <span>Steam · Stain removal · Deep clean</span>
                  </div>

                  <div className={`${styles.screenHero} ${local.screenHero}`}>
                    <span className={`${styles.heroIcon} ${local.heroIcon}`} aria-hidden>
                      <PiRugDuotone />
                    </span>
                    <div
                      className={`${styles.heroImg} ${local.heroImg}`}
                      aria-hidden
                    />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill /> DBS-checked team
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Appointment confirmed
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>Quick quote ready</span>
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
