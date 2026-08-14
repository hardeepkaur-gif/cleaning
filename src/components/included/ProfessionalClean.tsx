import { FaCheck } from "react-icons/fa";
import {
  includedExtra,
  includedImages,
  includedIntro,
  includedPoints,
  includedTitle,
} from "./includedData";
import styles from "./ProfessionalClean.module.css";

export default function ProfessionalClean() {
  return (
    <section
      className={`${styles.section} ${styles.sectionTightTop}`}
      id="professional-clean"
      aria-labelledby="included-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="included-title">
            {includedTitle}
          </h2>
          <p className={styles.intro}>{includedIntro}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <ul className={styles.points}>
              {includedPoints.map((item) => (
                <li key={item}>
                  <span className={styles.pointIcon} role="img" aria-label="Included professional clean task icon">
                    <FaCheck aria-hidden />
                  </span>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>

            <p className={styles.extra}>{includedExtra}</p>
          </div>

          <div className={styles.right}>
            <div className={styles.visualStage}>
              <div className={styles.rightShape} aria-hidden>
                <img src={includedImages.rightShape} alt={includedImages.rightShapeAlt} loading="lazy" />
              </div>

              <div className={styles.imgBox}>
                <div className={styles.mainImg}>
                  <img
                    src={includedImages.main}
                    alt={includedImages.mainAlt}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imgShape1} aria-hidden>
                  <img src={includedImages.shape1} alt={includedImages.shape1Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape2} aria-hidden>
                  <img src={includedImages.shape2} alt={includedImages.shape2Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape3} aria-hidden>
                  <img src={includedImages.shape3} alt={includedImages.shape3Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape4} aria-hidden>
                  <img src={includedImages.shape4} alt={includedImages.shape4Alt} loading="lazy" />
                </div>
              </div>

              <div className={styles.img2}>
                <img src={includedImages.img2} alt={includedImages.img2Alt} loading="lazy" />
              </div>
              <div className={styles.img3}>
                <img src={includedImages.img3} alt={includedImages.img3Alt} loading="lazy" />
              </div>
              <div className={styles.img4}>
                <img src={includedImages.img4} alt={includedImages.img4Alt} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
