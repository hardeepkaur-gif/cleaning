import { FaStar } from "react-icons/fa";
import styles from "@/components/tenancy/TenancyOptionalServicesSection.module.css";
import local from "./GutterWhyChooseSection.module.css";
import {
  gutterWhyChooseIntro,
  gutterWhyChooseItems,
  gutterWhyChooseTitle,
} from "./gutterWhyChooseData";

export default function GutterWhyChooseSection() {
  return (
    <section
      className={`${styles.services} ${local.services}`}
      id="gutter-why-choose"
      aria-labelledby="gutter-why-choose-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="gutter-why-choose-title">
            {gutterWhyChooseTitle}
          </h2>
          <p className={styles.intro}>{gutterWhyChooseIntro}</p>
        </div>

        <div className={`${styles.grid} ${local.grid}`}>
          {gutterWhyChooseItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.imgBox}>
                  <div className={styles.imgWrap}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`${styles.content} ${local.content}`}>
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
