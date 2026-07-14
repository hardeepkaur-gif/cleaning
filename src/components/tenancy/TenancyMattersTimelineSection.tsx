import {
  tenancyMattersIntro,
  tenancyMattersItems,
  tenancyMattersTagline,
  tenancyMattersTitle,
} from "./tenancyMattersData";
import styles from "./TenancyMattersTimelineSection.module.css";

export default function TenancyMattersTimelineSection() {
  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters-timeline"
      aria-labelledby="tenancy-matters-timeline-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.aside}>
            <p className={styles.tagline}>{tenancyMattersTagline}</p>
            <h2 className={styles.title} id="tenancy-matters-timeline-title">
              {tenancyMattersTitle}
            </h2>
            <p className={styles.intro}>{tenancyMattersIntro}</p>
            <div className={styles.asideNote}>
              <span className={styles.asideCount}>
                {String(tenancyMattersItems.length).padStart(2, "0")}
              </span>
              <p>Key reasons professional move-out cleaning makes a difference</p>
            </div>
          </div>

          <div className={styles.scrollPanel}>
            <ol className={styles.timeline}>
              {tenancyMattersItems.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === tenancyMattersItems.length - 1;

                return (
                  <li
                    key={item.title}
                    className={`${styles.item} ${isLast ? styles.itemLast : ""}`}
                  >
                    <div className={styles.marker} aria-hidden>
                      <span className={styles.dot}>
                        <Icon />
                      </span>
                    </div>
                    <div className={styles.itemBody}>
                      <span className={styles.step}>
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemText}>{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
