import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiSparkleFill,
  PiSprayBottleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./CtaSectionFour.module.css";

const trustPoints = ["DBS-checked", "Fully insured", "Trained cleaners"];

export default function CtaSectionFour() {
  return (
    <section className={styles.cta} aria-labelledby="cta-four-title">
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div className={styles.blobTeal} aria-hidden />
            <div className={styles.blobCoral} aria-hidden />

            <div className={styles.copy}>
              <h2 className={styles.title} id="cta-four-title">
                Looking for a Cleaning Company You Can Trust?
              </h2>

              <p className={styles.text}>
                Leave the mundane chores to us whilst our DBS-checked, insured,
                and trained cleaners take care of your property with structure,
                care, and accountability.
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
                  <ThmButton href="#contact" className={styles.ctaBtn}>
                    <FaCalendarCheck aria-hidden />
                    Request a Quote
                  </ThmButton>
                  <span className={styles.btnNote}>
                    Free quote · No obligation
                  </span>
                </div>
              </div>
            </div>

            {/* Right — phone on brand column */}
            <div className={styles.phoneCol}>
              <div className={styles.phone}>
                <div className={styles.phoneNotch} aria-hidden />
                <div className={styles.phoneScreen}>
                  <div className={styles.screenTop}>
                    <span className={styles.screenBadge}>
                      <PiSparkleFill /> Spotless
                    </span>
                    <strong>Home Deep Clean</strong>
                    <span>Tomorrow · 10:00 AM</span>
                  </div>

                  <div className={styles.screenHero}>
                    <span className={styles.heroIcon} aria-hidden>
                      <PiSprayBottleFill />
                    </span>
                    <div className={styles.heroImg} aria-hidden />
                  </div>

                  <ul className={styles.screenList}>
                    <li>
                      <PiHouseLineFill /> Kitchen &amp; bathroom
                    </li>
                    <li>
                      <PiCalendarCheckFill /> Booking confirmed
                    </li>
                  </ul>

                  <div className={styles.screenFooter}>
                    <span>DBS-checked cleaner</span>
                    <strong>£89 fixed</strong>
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
