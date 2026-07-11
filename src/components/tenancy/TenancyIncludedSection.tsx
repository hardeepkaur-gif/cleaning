import {
  tenancyIncludedIntro,
  tenancyIncludedItems,
  tenancyIncludedTitle,
} from "./tenancyIncludedData";
import styles from "./TenancyIncludedSection.module.css";

export default function TenancyIncludedSection() {
  return (
    <section
      className={styles.section}
      id="tenancy-included"
      aria-labelledby="tenancy-included-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="tenancy-included-title">
            {tenancyIncludedTitle}
          </h2>
          <p className={styles.intro}>{tenancyIncludedIntro}</p>
        </div>

        <div className={styles.grid}>
          {tenancyIncludedItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card}>
                <span className={styles.cardIcon} aria-hidden>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
