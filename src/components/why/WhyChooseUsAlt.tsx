import { FaStar } from "react-icons/fa";
import {
  whyIntro,
  whyProblems,
  whySolutions,
  whySolutionsTitle,
  whyTagline,
  whyTitle,
} from "./whyData";
import styles from "./WhyChooseUsAlt.module.css";

export default function WhyChooseUsAlt() {
  return (
    <section
      className={styles.why}
      id="why-us-alt"
      aria-labelledby="why-us-alt-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.taglineBox}>
            <span className={styles.taglineIcon} aria-hidden>
              <FaStar />
            </span>
            <span className={styles.tagline}>{whyTagline}</span>
          </div>
          <h2 className={styles.title} id="why-us-alt-title">
            {whyTitle}
          </h2>
          <p className={styles.intro}>{whyIntro}</p>
        </div>

        <div className={styles.problemGrid}>
          {whyProblems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.problemCard}>
                <span className={styles.cardNum} aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.cardIcon} aria-hidden>
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className={styles.solutionsWrap}>
          <div className={styles.solutionHead}>
            <span className={styles.solutionLabel}>Our approach</span>
            <h3 className={styles.solutionTitle}>{whySolutionsTitle}</h3>
          </div>
          <div className={styles.solutionPanel}>
            <ul className={styles.solutionList}>
              {whySolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <span className={styles.solutionIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
