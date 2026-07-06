import {
  PiCalendarCheckFill,
  PiHouseLineFill,
  PiSparkleFill,
  PiSprayBottleFill,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./CtaSectionFour.module.css";

export default function CtaSectionFour() {
  return (
    <section className={styles.cta} aria-labelledby="cta-four-title">
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            {/* Left — title + button + arrow */}
            <div className={styles.copy}>
              <h2 className={styles.title} id="cta-four-title">
                Looking for a Cleaning Company You Can Trust?
              </h2>
              <div className={styles.actionRow}>
                <ThmButton href="#contact" className={styles.ctaBtn}>
                  Request a Quote
                </ThmButton>
                <svg
                  className={styles.curveArrow}
                  viewBox="0 0 120 50"
                  aria-hidden
                >
                  <path
                    d="M8,42 C35,42 55,18 85,18 C100,18 110,24 114,28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M108,22 L116,28 L108,34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
