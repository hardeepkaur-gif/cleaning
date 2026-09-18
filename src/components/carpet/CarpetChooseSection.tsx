import { FaCheck } from "react-icons/fa";
import {
  carpetChooseClosing,
  carpetChooseImage,
  carpetChooseImageAlt,
  carpetChooseIntro,
  carpetChoosePoints,
  carpetChooseTitle,
} from "./carpetChooseData";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "@/components/included/ProfessionalCleanSimple.module.css";
import whoStyles from "./CarpetChooseSection.module.css";

export default function CarpetChooseSection() {
  return (
    <section
      className={styles.section}
      id="carpet-choose-cleaner"
      aria-labelledby="carpet-choose-cleaner-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <header className={whoStyles.header}>
          <h2 className={whoStyles.headerTitle} id="carpet-choose-cleaner-title">
            {carpetChooseTitle}
          </h2>
          <p className={whoStyles.headerIntro}>{carpetChooseIntro}</p>
        </header>

        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img
                src={carpetChooseImage}
                alt={carpetChooseImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Insured</span>
              <strong>Clear Quotes</strong>
              <span>Proven Work</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div
              className={`${styles.pointsWrap} ${local.pointsWrap} ${whoStyles.copyBlock}`}
            >
              <ul className={whoStyles.points}>
                {carpetChoosePoints.map((item) => (
                  <li key={item}>
                    <span className={styles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={`${styles.pointText} ${whoStyles.pointText}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.closing}>
                <p>{carpetChooseClosing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
