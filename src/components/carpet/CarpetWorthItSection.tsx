import { FaCheck } from "react-icons/fa";
import styles from "./CarpetWorthItSection.module.css";
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

export default function CarpetWorthItSection() {
  return (
    <section
      className={styles.section}
      id="carpet-worth-it"
      aria-labelledby="carpet-worth-it-title"
    >
      <div className={styles.blobOne} aria-hidden />
      <div className={styles.blobTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Professional Carpet Care</span>
          <h2 className={styles.title} id="carpet-worth-it-title">
            {carpetWorthItTitle}
          </h2>
        </header>

        <div className={styles.panel}>
          <div className={styles.media}>
            <div className={styles.imgWrap}>
              <img
                src={carpetWorthItImage}
                alt={carpetWorthItImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.mediaBadge}>
              <strong>Worth the investment</strong>
              <span>Cleaner carpets · Longer lifespan</span>
            </div>
          </div>

          <div className={styles.body}>
            <p className={styles.lead}>{carpetWorthItIntro}</p>
            <p className={styles.text}>{carpetWorthItExtra}</p>

            <div className={styles.advantages}>
              <p className={styles.advantagesIntro}>{carpetWorthItListIntro}</p>

              <ul className={styles.advantageGrid}>
                {carpetWorthItPoints.map((item, index) => (
                  <li key={item} className={styles.advantageCard}>
                    <span className={styles.advantageNum} aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.advantageIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.callout}>
              <p>{carpetWorthItClosing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
