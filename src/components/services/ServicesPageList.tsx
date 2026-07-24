import ThmButton from "@/components/menu/ThmButton";
import {
  servicesIntro,
  servicesList,
  servicesTitle,
} from "./servicesData";
import styles from "./ServicesPageList.module.css";

export default function ServicesPageList() {
  return (
    <section
      className={styles.section}
      id="all-services"
      aria-labelledby="services-list-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="services-list-title">
            {servicesTitle}
          </h2>
          <p className={styles.intro}>{servicesIntro}</p>
        </header>

        <div className={styles.list}>
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.title}
                className={`${styles.card} ${reverse ? styles.cardReverse : ""}`}
              >
                <div className={styles.media}>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    loading="lazy"
                  />
                  <span className={styles.badge} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.content}>
                  <span className={styles.label}>
                    <Icon aria-hidden />
                    {service.label} Cleaning
                  </span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.text}</p>
                  <div className={styles.actions}>
                    <ThmButton href={service.href}>{service.ctaLabel}</ThmButton>
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
