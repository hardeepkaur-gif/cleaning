import {
  domesticPrepareImage,
  domesticPrepareImageAlt,
  domesticPrepareIntro,
  domesticPreparePoints,
  domesticPrepareTitle,
} from "./domesticPrepareData";
import shared from "@/components/vetted/VettedSection.module.css";
import styles from "./DomesticPrepareSection.module.css";

export default function DomesticPrepareSection() {
  return (
    <section
      className={shared.section}
      id="domestic-prepare"
      aria-labelledby="domestic-prepare-title"
    >
      <div className={shared.container}>
        <div className={`${shared.topHeader} ${styles.topHeader}`}>
          <h2 className={shared.title} id="domestic-prepare-title">
            {domesticPrepareTitle}
          </h2>
          <p className={shared.intro}>{domesticPrepareIntro}</p>
        </div>

        <div className={`${shared.grid} ${styles.grid}`}>
          <div className={`${shared.copy} ${styles.copy}`}>
            <ul className={shared.points}>
              {domesticPreparePoints.map((text, i) => (
                <li key={text} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={shared.pointIcon} aria-hidden>
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

          <div className={shared.visual}>
            <div className={shared.imgWrap}>
              <img
                src={domesticPrepareImage}
                alt={domesticPrepareImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
