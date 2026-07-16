import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiShieldCheckFill,
  PiSparkleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/cta/CtaSectionFour.module.css";

const trustPoints = [
  "DBS-checked cleaners",
  "Fully insured service",
  "Flexible booking",
];

export default function TenancyIncludedCtaSection() {
  return (
    <section
      className={styles.cta}
      id="tenancy-included-cta"
      aria-labelledby="tenancy-included-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="tenancy-included-cta-title">
                Ready to Book Your End of Tenancy Clean?
              </h2>

              <p className={styles.text}>
                Get a fixed quote based on your property size and requirements.
                Our DBS-checked and insured cleaners cover East London and
                surrounding areas with flexible booking availability.
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
                  <ThmButton href="/#contact" className={styles.ctaBtn}>
                    <FaCalendarCheck aria-hidden />
                    Book Your End of Tenancy Cleaning Today
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
                    <strong>End of Tenancy Clean</strong>
                    <span>East London · Flexible dates</span>
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
                    <span>Fixed quote ready</span>
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
