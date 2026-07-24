import { FaCalendarCheck, FaRegClock, FaRegThumbsUp } from "react-icons/fa";
import { PiSparkleDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import { ctaButtonLabel, ctaText, ctaTitle } from "./ctaData";
import styles from "./CtaSectionAlt.module.css";

const ctaImage = "/images/cta/cleanon/cta-one-img-1.png";

const highlights = [
  { icon: FaRegThumbsUp, text: "Satisfaction guaranteed" },
  { icon: FaRegClock, text: "Flexible booking slots" },
  { icon: PiSparkleDuotone, text: "Spotless every visit" },
];

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

            <ul className={styles.highlights}>
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Icon aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

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
