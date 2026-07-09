import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import {
  whyIntro,
  whyProblems,
  whySolutions,
  whySolutionsTitle,
  whyTitle,
} from "./whyData";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.why} id="why-us" aria-labelledby="why-us-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="why-us-title">
            {whyTitle}
          </h2>
          <p className={styles.intro}>{whyIntro}</p>
        </div>

        <div className={styles.split}>
          <div className={styles.problems}>
            <div className={styles.panelHead}>
              <span className={styles.panelIconProblems} aria-hidden>
                <FaExclamationTriangle />
              </span>
              <h3 className={styles.panelTitle}>Common frustrations</h3>
            </div>
            <ul className={styles.problemList}>
              {whyProblems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <span className={styles.problemIcon} aria-hidden>
                      <Icon />
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden>
            <span className={styles.dividerLine} />
            <span className={styles.dividerBadge}>VS</span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.solutions}>
            <div className={styles.panelHead}>
              <span className={styles.panelIconSolutions} aria-hidden>
                <FaCheck />
              </span>
              <h3 className={styles.panelTitle}>{whySolutionsTitle}</h3>
            </div>
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
