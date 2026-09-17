import { FaCalendarCheck } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { ctaButtonLabel, ctaText, ctaTitle } from "./ctaData";
import styles from "./CtaSectionAlt.module.css";

const ctaImage = "/images/cta/cleanon/cta-professional-cleaner-london.webp";

export default function CtaSectionAlt() {
  return (
    <section className={styles.cta} aria-labelledby="cta-alt-title">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.media}>
            <div className={styles.archFrame}>
              <span className={styles.archRing} aria-hidden />
              <img
                src={ctaImage}
                alt="Professional cleaner ready to book in London"
              />
            </div>
            <div className={styles.chip} aria-hidden>
              <span className={styles.chipDot} />
              London&apos;s trusted cleaners
            </div>
          </div>

          <div className={styles.copy}>
            <h2 className={styles.title} id="cta-alt-title">
              {ctaTitle.replace("London?", "")}
              <span>London?</span>
            </h2>
            <p className={styles.text}>{ctaText}</p>

            <div className={styles.actions}>
              <ThmButton href="/contact-us" className={styles.btnMain}>
                <FaCalendarCheck aria-hidden />
                {ctaButtonLabel}
              </ThmButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
