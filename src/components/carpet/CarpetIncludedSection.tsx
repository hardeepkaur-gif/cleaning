import { FaCheck } from "react-icons/fa";
import { includedImages } from "@/components/included/includedData";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./CarpetIncludedSection.module.css";
import {
  carpetIncludedExtra,
  carpetIncludedImages,
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

          <div className={styles.right}>
            <div className={styles.visualStage}>
              <div className={styles.rightShape} aria-hidden>
                <img src={includedImages.rightShape} alt="" />
              </div>

              <div className={styles.imgBox}>
                <div className={styles.mainImg}>
                  <img
                    src={carpetIncludedImages.main}
                    alt={carpetIncludedMainAlt}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imgShape1} aria-hidden>
                  <img src={includedImages.shape1} alt="" />
                </div>
                <div className={styles.imgShape2} aria-hidden>
                  <img src={includedImages.shape2} alt="" />
                </div>
                <div className={styles.imgShape3} aria-hidden>
                  <img src={includedImages.shape3} alt="" />
                </div>
                <div className={styles.imgShape4} aria-hidden>
                  <img src={includedImages.shape4} alt="" />
                </div>
              </div>

              <div className={styles.img2}>
                <img
                  src={carpetIncludedImages.img2}
                  alt=""
                  aria-hidden
                  loading="lazy"
                />
              </div>
              <div className={styles.img3}>
                <img
                  src={carpetIncludedImages.img3}
                  alt=""
                  aria-hidden
                  loading="lazy"
                />
              </div>
              <div className={styles.img4}>
                <img
                  src={carpetIncludedImages.img4}
                  alt=""
                  aria-hidden
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
