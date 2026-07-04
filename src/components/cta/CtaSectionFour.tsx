import { FaPhoneAlt } from "react-icons/fa";
import {
  PiCheckCircleDuotone,
  PiShieldCheckDuotone,
  PiUserCircleCheckDuotone,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./CtaSectionFour.module.css";

const badges = [
  { icon: PiShieldCheckDuotone, label: "DBS-checked" },
  { icon: PiCheckCircleDuotone, label: "Fully insured" },
  { icon: PiUserCircleCheckDuotone, label: "Trained cleaners" },
];

export default function CtaSectionFour() {
  return (
    <section className={styles.cta} aria-labelledby="cta-four-title">
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="cta-four-title">
              Looking for a Cleaning Company You Can{" "}
              <span className={styles.highlightText}>Trust?</span>
            </h2>
            <p className={styles.text}>
              Leave the mundane chores to us whilst our DBS-checked, insured,
              and trained cleaners take care of your property with structure,
              care, and accountability.
            </p>

            <ul className={styles.badgeRow}>
              {badges.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span className={styles.badgeIcon} aria-hidden>
                    <Icon />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className={styles.btnBox}>
              <ThmButton href="#contact" className={styles.ctaBtn}>
                <FaPhoneAlt aria-hidden />
                Request a Quote
              </ThmButton>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualStage}>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden>
                  <PiShieldCheckDuotone />
                </span>
                <div>
                  <strong>100% Insured</strong>
                  <span>Full liability coverage</span>
                </div>
              </div>

              <div className={styles.dbsCard}>
                <span className={styles.dbsIcon} aria-hidden>
                  <PiUserCircleCheckDuotone />
                </span>
                <div>
                  <strong>DBS Verified</strong>
                  <span>Background checked</span>
                </div>
              </div>

              <div className={styles.ratingCard}>
                <div className={styles.ratingStars}>
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <strong>4.9 / 5</strong>
                <span>Client satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
