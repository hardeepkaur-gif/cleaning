import styles from "@/components/vetted/VettedSection.module.css";
import local from "./CarpetCareTipsSection.module.css";
import {
  carpetCareTipsImage,
  carpetCareTipsImageAlt,
  carpetCareTipsIntro,
  carpetCareTipsPoints,
  carpetCareTipsTitle,
} from "./carpetCareTipsData";

export default function CarpetCareTipsSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="carpet-care-tips"
      aria-labelledby="carpet-care-tips-title"
    >
      <div className={styles.container}>
        <div className={`${styles.topHeader} ${local.topHeader}`}>
          <h2
            className={`${styles.title} ${local.title}`}
            id="carpet-care-tips-title"
          >
            {carpetCareTipsTitle}
          </h2>
          <p className={`${styles.intro} ${local.intro}`}>{carpetCareTipsIntro}</p>
        </div>

        <div className={`${styles.grid} ${local.grid}`}>
          <div className={styles.copy}>
            <ul className={`${styles.points} ${local.points}`}>
              {carpetCareTipsPoints.map((text, i) => (
                <li key={text} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.pointIcon} aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6.5 11.5L2.5 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            <div className={styles.imgWrap}>
              <img
                src={carpetCareTipsImage}
                alt={carpetCareTipsImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
