import { FaCheck } from "react-icons/fa";
import { includedImages } from "@/components/included/includedData";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./CarpetIncludedSection.module.css";
import {
  carpetIncludedExtra,
  carpetIncludedImages,
  carpetIncludedImg2Alt,
  carpetIncludedImg3Alt,
  carpetIncludedImg4Alt,
  carpetIncludedIntro,
  carpetIncludedMainAlt,
  carpetIncludedPoints,
  carpetIncludedTitle,
} from "./carpetIncludedData";

export default function CarpetIncludedSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="carpet-included"
      aria-labelledby="carpet-included-title"
    >
      <div className={styles.container}>
        <header className={local.header}>
          <h2
            className={`${styles.title} ${local.title}`}
            id="carpet-included-title"
          >
            {carpetIncludedTitle}
          </h2>
          <p className={`${styles.intro} ${local.intro}`}>
            {carpetIncludedIntro}
          </p>
        </header>

        <div className={styles.grid}>
          <div className={`${styles.left} ${local.left}`}>
            <p className={`${styles.extra} ${local.extra}`}>
              {carpetIncludedExtra}
            </p>

            <ul className={styles.points}>
              {carpetIncludedPoints.map((item) => (
                <li key={item}>
                  <span className={styles.pointIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.right} ${local.rightVisual}`}>
            <div className={`${styles.visualStage} ${local.visualStage}`}>
              <div className={styles.rightShape} aria-hidden>
                <img src={includedImages.rightShape} alt={includedImages.rightShapeAlt} />
              </div>

              <div className={`${styles.imgBox} ${local.imgBox}`}>
                <div className={styles.mainImg}>
                  <img
                    src={carpetIncludedImages.main}
                    alt={carpetIncludedMainAlt}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imgShape1} aria-hidden>
                  <img src={includedImages.shape1} alt={includedImages.shape1Alt} />
                </div>
                <div className={styles.imgShape2} aria-hidden>
                  <img src={includedImages.shape2} alt={includedImages.shape2Alt} />
                </div>
                <div className={styles.imgShape3} aria-hidden>
                  <img src={includedImages.shape3} alt={includedImages.shape3Alt} />
                </div>
                <div className={styles.imgShape4} aria-hidden>
                  <img src={includedImages.shape4} alt={includedImages.shape4Alt} />
                </div>
              </div>

              <div className={`${styles.img2} ${local.img2}`}>
                <img
                  src={carpetIncludedImages.img2}
                  alt={carpetIncludedImg2Alt}
                  loading="lazy"
                />
              </div>
              <div className={`${styles.img3} ${local.img3}`}>
                <img
                  src={carpetIncludedImages.img3}
                  alt={carpetIncludedImg3Alt}
                  loading="lazy"
                />
              </div>
              <div className={`${styles.img4} ${local.img4}`}>
                <img
                  src={carpetIncludedImages.img4}
                  alt={carpetIncludedImg4Alt}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
