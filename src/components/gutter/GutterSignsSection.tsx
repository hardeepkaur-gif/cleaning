import { FaCheck } from "react-icons/fa";
import styles from "@/components/about/AboutUs.module.css";
import local from "./GutterSignsSection.module.css";
import {
  gutterSignsImages,
  gutterSignsIntro,
  gutterSignsMainAlt,
  gutterSignsPoints,
  gutterSignsSecondaryAlt,
  gutterSignsTitle,
} from "./gutterSignsData";

const imgBase = "/images/about/cleanon";

export default function GutterSignsSection() {
  return (
    <section
      className={styles.about}
      id="gutter-signs"
      aria-labelledby="gutter-signs-title"
    >
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${local.grid}`}>
          <div className={`${styles.media} ${local.media}`}>
            <div className={styles.frame}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={styles.imgMain}>
                <img
                  src={gutterSignsImages.main}
                  alt={gutterSignsMainAlt}
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={gutterSignsImages.secondary}
                  alt={gutterSignsSecondaryAlt}
                  loading="lazy"
                />
              </div>

              <div className={styles.seal}>
                <div
                  className={styles.sealBg}
                  style={{
                    backgroundImage: `url('${imgBase}/about-three-cleaning-gurante-bg-shape.png')`,
                  }}
                  aria-hidden
                />
                <img
                  src={`${imgBase}/about-three-cleaning-gurante-icon.png`}
                  alt=""
                  aria-hidden
                />
                <strong>Act</strong>
                <span>Early</span>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${local.content}`}>
            <h2
              className={`${styles.title} ${local.title}`}
              id="gutter-signs-title"
            >
              {gutterSignsTitle}
            </h2>

            <blockquote className={styles.callout}>
              <p>{gutterSignsIntro}</p>
            </blockquote>

            <ul className={local.points}>
              {gutterSignsPoints.map((item) => (
                <li key={item}>
                  <span className={local.pointIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
