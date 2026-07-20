import { FaStar } from "react-icons/fa";
import {
  domesticWhyChooseIntro,
  domesticWhyChooseItems,
  domesticWhyChooseTitleLine1,
  domesticWhyChooseTitleLine2,
} from "./domesticWhyChooseData";
import styles from "@/components/tenancy/TenancyOptionalServicesSection.module.css";
import local from "./DomesticWhyChooseSection.module.css";

export default function DomesticWhyChooseSection() {
  return (
    <section
      className={styles.services}
      id="domestic-why-choose"
      aria-labelledby="domestic-why-choose-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="domestic-why-choose-title">
            {domesticWhyChooseTitleLine1}
            <br />
            {domesticWhyChooseTitleLine2}
          </h2>
          <p className={styles.intro}>{domesticWhyChooseIntro}</p>
        </div>

        <div className={`${styles.grid} ${local.grid}`}>
          {domesticWhyChooseItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.imgBox}>
                  <div className={styles.imgWrap}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={`${styles.cardTitle} ${local.cardTitle}`}>
                    {item.title}
                  </h3>
                  <p className={styles.cardText}>{item.text}</p>
                  <div className={styles.iconWrap}>
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
