import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiCloudRainDuotone,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "./GutterCtaSection.module.css";

const trustPoints = [
  "Fixed quote with no hidden charges",
  "Flexible appointments across London",
  "DBS-checked and fully insured cleaners",
];

export default function GutterCtaSection() {
  return (
    <section
      className={styles.cta}
      id="gutter-cleaning-cta"
      aria-labelledby="gutter-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={`${styles.copy} ${local.copy}`}>
              <h2 className={styles.title} id="gutter-cta-title">
                Prevent Blocked Gutters Before They Lead to Expensive Repairs
              </h2>

              <p className={styles.text}>
                Book your professional gutter cleaning service today for a fixed
                quote and flexible appointment across London.
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
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    Contact Now!
                  </ThmButton>
                  <span className={styles.btnNote}>
                    Fixed quote · Flexible booking
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
                    <strong>Gutter Cleaning</strong>
                    <span>Clear · Protect · Prevent damage</span>
                  </div>

                  <div className={`${styles.screenHero} ${local.screenHero}`}>
                    <span
                      className={`${styles.heroIcon} ${local.heroIcon}`}
                      aria-hidden
                    >
                      <PiCloudRainDuotone />
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
                      <PiCalendarCheckFill /> Flexible appointment
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
