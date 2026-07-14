import {
  tenancyMattersIntro,
  tenancyMattersItems,
  tenancyMattersTagline,
  tenancyMattersTitle,
} from "./tenancyMattersData";
import styles from "./TenancyMattersSection.module.css";

export default function TenancyMattersSection() {
  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters"
      aria-labelledby="tenancy-matters-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.tagline}>{tenancyMattersTagline}</p>
          <h2 className={styles.title} id="tenancy-matters-title">
            {tenancyMattersTitle}
          </h2>
          <p className={styles.intro}>{tenancyMattersIntro}</p>
        </header>

        <div className={styles.grid}>
          {tenancyMattersItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.iconBox} aria-hidden>
                    <Icon />
                  </span>
                  <span className={styles.number} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
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
