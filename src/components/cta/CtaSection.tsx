import { FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { ctaButtonLabel, ctaText, ctaTitle } from "./ctaData";
import styles from "./CtaSection.module.css";

const ctaImage = "/images/cta/cleanon/cta-one-img-1.png";

const perks = [
  "Fixed pricing",
  "DBS-checked team",
  "Same-day quotes",
];

export default function CtaSection() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.blobTeal} aria-hidden />
          <div className={styles.blobCoral} aria-hidden />
          <div className={styles.dots} aria-hidden />

          <div className={styles.grid}>
            <div className={styles.copy}>
              <h2 className={styles.title} id="cta-title">
                Looking For Professional
                <br />
                Cleaning Services in <span>London?</span>
              </h2>
              <p className={styles.text}>{ctaText}</p>

              <ul className={styles.perks}>
                {perks.map((item) => (
                  <li key={item}>
                    <FaCheckCircle aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.btnBox}>
                <ThmButton href="#contact" className={styles.ctaBtnPrimary}>
                  <FaCalendarCheck aria-hidden />
                  {ctaButtonLabel}
                </ThmButton>
              </div>
            </div>

            <div className={styles.visual}>
              <div className={styles.imageRing}>
                <div className={styles.imageInner}>
                  <img
                    src={ctaImage}
                    alt="Smiling professional cleaner ready to help in London"
                  />
                </div>
                <span className={styles.ringAccent} aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
