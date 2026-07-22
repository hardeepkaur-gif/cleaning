import {
  carpetMovingImage,
  carpetMovingImageAlt,
  carpetMovingParagraphs,
  carpetMovingTitle,
} from "./carpetMovingData";
import styles from "./CarpetMovingSection.module.css";

export default function CarpetMovingSection() {
  return (
    <section
      className={styles.section}
      id="carpet-cleaning-moving"
      aria-labelledby="carpet-moving-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="carpet-moving-title">
            {carpetMovingTitle}
          </h2>
        </header>

        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={styles.imgWrap}>
              <img
                src={carpetMovingImage}
                alt={carpetMovingImageAlt}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.copy}>
            {carpetMovingParagraphs.map((paragraph, index) => (
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
