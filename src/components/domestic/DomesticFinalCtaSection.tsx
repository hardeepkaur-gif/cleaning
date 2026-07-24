import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";
import local from "@/components/tenancy/TenancyIncludedCtaSection.module.css";

const trustPoints = [
  "DBS-checked cleaners",
  "Flexible appointments",
  "Fixed pricing",
];

export default function DomesticFinalCtaSection() {
  return (
    <section
      className={styles.cta}
      id="domestic-final-cta"
      aria-labelledby="domestic-final-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="domestic-final-cta-title">
                Ready for a Cleaner, Healthier Home?
              </h2>

              <p className={styles.text}>
                Book your domestic cleaning service in London today and enjoy
                reliable, DBS-checked cleaners, flexible appointments and fixed
                pricing designed around your home.
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
                <div className={styles.btnWrap}>
                  <ThmButton
                    href="/contact-us"
                    className={`${styles.ctaBtn} ${local.ctaBtn}`}
                  >
                    <FaCalendarCheck aria-hidden />
                    <span className={local.btnTextDesktop}>
                      Book Your Domestic Cleaner
                    </span>
                    <span className={local.btnTextMobile}>Request a Quote</span>
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
                    <strong>Domestic Cleaning</strong>
                    <span>London · Flexible scheduling</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} aria-hidden>
                      <PiHouseLineFill />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiShieldCheckFill /> DBS-checked team
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Booking confirmed
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
