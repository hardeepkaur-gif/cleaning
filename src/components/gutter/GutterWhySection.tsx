import { FaCheck } from "react-icons/fa";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./GutterWhySection.module.css";
import {
  gutterWhyImage,
  gutterWhyImageAlt,
  gutterWhyIntro,
  gutterWhyPoints,
  gutterWhyTitle,
} from "./gutterWhyData";

export default function GutterWhySection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="gutter-why-important"
      aria-labelledby="gutter-why-title"
    >
      <div className={styles.container}>
        <div className={`${styles.grid} ${local.grid}`}>
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

          <div className={`${styles.right} ${local.right}`}>
            <div className={local.visual}>
              <div className={local.frameOuter} aria-hidden />
              <div className={local.imgWrap}>
                <img
                  src={gutterWhyImage}
                  alt={gutterWhyImageAlt}
                  loading="lazy"
                />
              </div>
              <div className={local.badge} aria-hidden>
                <span>Before</span>
                <strong>After</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
