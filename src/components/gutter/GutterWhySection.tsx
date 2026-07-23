import { FaCheck } from "react-icons/fa";
import { includedImages } from "@/components/included/includedData";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./GutterWhySection.module.css";
import {
  gutterWhyImages,
  gutterWhyIntro,
  gutterWhyMainAlt,
  gutterWhyPoints,
  gutterWhyTitle,
} from "./gutterWhyData";

export default function GutterWhySection() {
  return (
    <section
      className={styles.section}
      id="gutter-why-important"
      aria-labelledby="gutter-why-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.left} ${local.left}`}>
            <h2
              className={`${styles.title} ${local.title}`}
              id="gutter-why-title"
            >
              {gutterWhyTitle}
            </h2>
            <p className={`${styles.intro} ${local.intro}`}>
              {gutterWhyIntro}
            </p>

            <ul className={styles.points}>
              {gutterWhyPoints.map((item) => (
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
                    src={gutterWhyImages.main}
                    alt={gutterWhyMainAlt}
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
                  src={gutterWhyImages.img2}
                  alt=""
                  aria-hidden
                  loading="lazy"
                />
              </div>
              <div className={styles.img3}>
                <img
                  src={gutterWhyImages.img3}
                  alt=""
                  aria-hidden
                  loading="lazy"
                />
              </div>
              <div className={styles.img4}>
                <img
                  src={gutterWhyImages.img4}
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
