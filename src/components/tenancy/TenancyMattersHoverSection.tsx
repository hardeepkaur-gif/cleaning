import { FaStar } from "react-icons/fa";
import {
  tenancyMattersIntro,
  tenancyMattersItems,
  tenancyMattersTagline,
  tenancyMattersTitle,
} from "./tenancyMattersData";
import styles from "./TenancyMattersHoverSection.module.css";

export default function TenancyMattersHoverSection() {
  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters-hover"
      aria-labelledby="tenancy-matters-hover-title"
    >
      <div className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.taglineBox}>
            <FaStar className={styles.taglineIcon} aria-hidden />
            <p className={styles.tagline}>{tenancyMattersTagline}</p>
          </div>
          <h2 className={styles.title} id="tenancy-matters-hover-title">
            {tenancyMattersTitle}
          </h2>
          <p className={styles.intro}>{tenancyMattersIntro}</p>
        </header>

        <div className={styles.panel}>
          <ul className={styles.list}>
            {tenancyMattersItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <li key={item.title} className={styles.item}>
                  <div className={styles.accent} aria-hidden />

                  <div className={styles.left}>
                    <span className={styles.iconBox} aria-hidden>
                      <Icon />
                    </span>
                    <div className={styles.titleBox}>
                      <span className={styles.count}>
                        Reason {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                    </div>
                  </div>

                  <div className={styles.right}>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>

                  <span className={styles.watermark} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
