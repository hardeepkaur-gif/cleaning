import { FaStar } from "react-icons/fa";
import {
  carpetChooseIntro,
  carpetChooseItems,
  carpetChooseTitle,
} from "./carpetChooseData";
import styles from "@/components/tenancy/TenancyOptionalServicesSection.module.css";
import local from "./CarpetChooseSection.module.css";

export default function CarpetChooseSection() {
  return (
    <section
      className={`${styles.services} ${local.services}`}
      id="carpet-choose-cleaner"
      aria-labelledby="carpet-choose-cleaner-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2
            className={`${styles.title} ${local.title}`}
            id="carpet-choose-cleaner-title"
          >
            {carpetChooseTitle}
          </h2>
          <p className={`${styles.intro} ${local.intro}`}>{carpetChooseIntro}</p>
        </div>

        <div className={`${styles.grid} ${local.grid}`}>
          {carpetChooseItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.imgBox}>
                  <div className={styles.imgWrap}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                </div>
                <div className={`${styles.content} ${local.content}`}>
                  <h3 className={`${styles.cardTitle} ${local.cardTitle}`}>
                    {item.title}
                  </h3>
                  <p className={styles.cardText}>{item.text}</p>
                  <div className={`${styles.iconWrap} ${local.iconWrap}`}>
                    <span className={styles.iconMain} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.iconStar} aria-hidden>
                      <FaStar />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
