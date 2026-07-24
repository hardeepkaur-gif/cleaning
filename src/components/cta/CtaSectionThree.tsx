import { FaCalendarCheck } from "react-icons/fa";
import {
  PiHouseLineDuotone,
  PiSprayBottleDuotone,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import { ctaButtonLabel, ctaText, ctaTitle } from "./ctaData";
import styles from "./CtaSectionThree.module.css";

const cleaners = ["JC", "MP", "LS", "AK"];

export default function CtaSectionThree() {
  return (
    <section className={styles.cta} aria-labelledby="cta-three-title">
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="cta-three-title">
              {ctaTitle.replace("London?", "")}
              <span className={styles.highlightText}>London?</span>
            </h2>
            <p className={styles.text}>{ctaText}</p>
            <div className={styles.btnBox}>
              <ThmButton href="/contact-us" className={styles.ctaBtn}>
                <FaCalendarCheck aria-hidden />
                {ctaButtonLabel}
              </ThmButton>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualStage}>
              <span className={styles.decorIcon} aria-hidden>
                <PiSprayBottleDuotone />
              </span>

              <div className={`${styles.floatCard} ${styles.bookingCard}`}>
                <span className={styles.cardIcon} aria-hidden>
                  <PiHouseLineDuotone />
                </span>
                <span className={styles.cardLabel}>Your booking</span>
                <strong className={styles.cardName}>Home Deep Clean</strong>
                <span className={styles.cardNumber}>Tomorrow · 10:00 AM</span>
                <div className={styles.cardFooter}>
                  <div>
                    <small>Status</small>
                    <span>Confirmed</span>
                  </div>
                  <div>
                    <small>Fixed price</small>
                    <span>£89.00</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.chartCard}`}>
                <div className={styles.chartHead}>
                  <span>5-star cleans</span>
                  <strong>98%</strong>
                </div>
                <div className={styles.chartBars} aria-hidden>
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "68%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "82%" }} />
                  <span style={{ height: "95%" }} />
                </div>
                <div className={styles.chartTabs}>
                  <span>Homes</span>
                  <span className={styles.chartTabActive}>Offices</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.peopleCard}`}>
                <span className={styles.peopleLabel}>Your cleaning team</span>
                <div className={styles.avatarRow}>
                  {cleaners.map((initials) => (
                    <span key={initials} className={styles.avatar}>
                      {initials}
                    </span>
                  ))}
                  <span className={styles.avatarPlus}>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
