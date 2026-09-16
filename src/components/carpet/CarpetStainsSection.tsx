import { FaCheck } from "react-icons/fa";
import styles from "./CarpetStainsSection.module.css";
import {
  carpetStainsImage,
  carpetStainsImageAlt,
  carpetStainsIntro,
  carpetStainsItems,
  carpetStainsTagline,
  carpetStainsTitle,
} from "./carpetStainsData";

export default function CarpetStainsSection() {
  return (
    <section
      className={styles.section}
      id="carpet-stains"
      aria-labelledby="carpet-stains-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <header className={styles.header}>
              <span className={styles.tagline}>{carpetStainsTagline}</span>
              <h2 className={styles.title} id="carpet-stains-title">
                {carpetStainsTitle}
              </h2>
            </header>

            <p className={styles.text}>{carpetStainsIntro}</p>

            <ul className={styles.points}>
              {carpetStainsItems.map((item) => (
                <li key={item}>
                  <span className={styles.pointIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <h3 className={styles.pointTitle}>{item}</h3>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            <div className={styles.imgWrap}>
              <img
                src={carpetStainsImage}
                alt={carpetStainsImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
