import { FaCalendarCheck } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/carpet/CarpetCheapSection.module.css";
import local from "./GutterCommercialSection.module.css";
import {
  gutterCommercialClosing,
  gutterCommercialImage,
  gutterCommercialImageAlt,
  gutterCommercialParagraphs,
  gutterCommercialTitle,
} from "./gutterCommercialData";

export default function GutterCommercialSection() {
  return (
    <section
      className={styles.section}
      id="gutter-commercial"
      aria-labelledby="gutter-commercial-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={`${styles.header} ${local.header}`}>
          <h2 className={styles.title} id="gutter-commercial-title">
            {gutterCommercialTitle}
          </h2>
        </header>

        <div className={styles.grid}>
          <div className={styles.copy}>
            {gutterCommercialParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}

            <div className={`${styles.closing} ${local.closing}`}>
              <p>{gutterCommercialClosing}</p>
              <ThmButton href="/#contact" className={local.ctaBtn}>
                <FaCalendarCheck aria-hidden />
                Contact Now!
              </ThmButton>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={styles.imgWrap}>
              <img
                src={gutterCommercialImage}
                alt={gutterCommercialImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
