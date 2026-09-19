import { FaCheck } from "react-icons/fa";
import {
  gutterWhyChooseImage,
  gutterWhyChooseImageAlt,
  gutterWhyChooseIntro,
  gutterWhyChoosePoints,
  gutterWhyChooseTitle,
} from "./gutterWhyChooseData";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "@/components/included/ProfessionalCleanSimple.module.css";
import whoStyles from "./GutterWhyChooseSection.module.css";

export default function GutterWhyChooseSection() {
  return (
    <section
      className={`${styles.section} ${whoStyles.section}`}
      id="gutter-why-choose"
      aria-labelledby="gutter-why-choose-title"
    >
      <div className={`${styles.glowOne} ${whoStyles.glowOne}`} aria-hidden />
      <div className={`${styles.glowTwo} ${whoStyles.glowTwo}`} aria-hidden />

      <div className={styles.container}>
        <header className={whoStyles.header}>
          <h2 className={whoStyles.headerTitle} id="gutter-why-choose-title">
            {gutterWhyChooseTitle}
          </h2>
          <p className={whoStyles.headerIntro}>{gutterWhyChooseIntro}</p>
        </header>

        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img
                src={gutterWhyChooseImage}
                alt={gutterWhyChooseImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Safe</span>
              <strong>Fixed Quotes</strong>
              <span>Clear Results</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div
              className={`${styles.pointsWrap} ${local.pointsWrap} ${whoStyles.copyBlock}`}
            >
              <ul className={whoStyles.points}>
                {gutterWhyChoosePoints.map((item) => (
                  <li key={item}>
                    <span className={whoStyles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={whoStyles.pointText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
