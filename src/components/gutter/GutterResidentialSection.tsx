import styles from "@/components/carpet/CarpetMovingSection.module.css";
import local from "./GutterResidentialSection.module.css";
import {
  gutterResidentialImage,
  gutterResidentialImageAlt,
  gutterResidentialParagraphs,
  gutterResidentialTitle,
} from "./gutterResidentialData";

export default function GutterResidentialSection() {
  return (
    <section
      className={styles.section}
      id="gutter-residential"
      aria-labelledby="gutter-residential-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${local.grid}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={styles.imgWrap}>
              <img
                src={gutterResidentialImage}
                alt={gutterResidentialImageAlt}
                loading="lazy"
              />
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <h2
              className={`${styles.title} ${local.title}`}
              id="gutter-residential-title"
            >
              {gutterResidentialTitle}
            </h2>
            {gutterResidentialParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
