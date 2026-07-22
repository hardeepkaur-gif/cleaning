import { FaCheck } from "react-icons/fa";
import { PiSparkleDuotone } from "react-icons/pi";
import styles from "./CarpetWorthItAltSection.module.css";
import {
  carpetWorthItClosing,
  carpetWorthItExtra,
  carpetWorthItImage,
  carpetWorthItImageAlt,
  carpetWorthItIntro,
  carpetWorthItListIntro,
  carpetWorthItPoints,
  carpetWorthItTitle,
} from "./carpetWorthItData";

export default function CarpetWorthItAltSection() {
  return (
    <section
      className={styles.section}
      id="carpet-worth-it-alt"
      aria-labelledby="carpet-worth-it-alt-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>
            <PiSparkleDuotone aria-hidden />
            Why Professional Cleaning Pays Off
          </span>
          <h2 className={styles.title} id="carpet-worth-it-alt-title">
            {carpetWorthItTitle}
          </h2>
          <div className={styles.introBlock}>
            <p className={styles.text}>{carpetWorthItIntro}</p>
            <p className={styles.text}>{carpetWorthItExtra}</p>
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={styles.frameInner}>
              <img
                src={carpetWorthItImage}
                alt={carpetWorthItImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Cleaner</span>
              <strong>Healthier</strong>
              <span>Longer lasting</span>
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.pointsWrap}>
              <p className={styles.pointsIntro}>{carpetWorthItListIntro}</p>

              <ul className={styles.points}>
                {carpetWorthItPoints.map((item) => (
                  <li key={item}>
                    <span className={styles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={styles.pointText}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.closing}>
                <p>{carpetWorthItClosing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
