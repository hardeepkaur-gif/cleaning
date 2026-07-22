import {
  carpetCheapClosing,
  carpetCheapImage,
  carpetCheapImageAlt,
  carpetCheapIntro,
  carpetCheapParagraphs,
  carpetCheapTitle,
} from "./carpetCheapData";
import styles from "./CarpetCheapSection.module.css";

export default function CarpetCheapSection() {
  return (
    <section
      className={styles.section}
      id="carpet-cheap-cleaning"
      aria-labelledby="carpet-cheap-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="carpet-cheap-title">
            {carpetCheapTitle}
          </h2>
          <p className={styles.intro}>{carpetCheapIntro}</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.copy}>
            {carpetCheapParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}

            <div className={styles.closing}>
              <p>{carpetCheapClosing}</p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={styles.imgWrap}>
              <img
                src={carpetCheapImage}
                alt={carpetCheapImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
