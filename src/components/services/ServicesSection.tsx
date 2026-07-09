import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import {
  servicesIntro,
  servicesList,
  servicesTitle,
} from "./servicesData";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="services-title">
            {servicesTitle}
          </h2>
          <p className={styles.intro}>{servicesIntro}</p>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.count} aria-hidden />
                <div className={styles.subTitle}>
                  <h3>{service.label}</h3>
                </div>
                <div className={styles.content}>
                  <div className={styles.iconWrap}>
                    <span className={styles.iconMain} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.iconStar} aria-hidden>
                      <FaStar />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    <a href={service.href}>{service.title}</a>
                  </h3>
                  <p className={styles.cardText}>{service.text}</p>
                  <div className={styles.readMore}>
                    <a href={service.href}>
                      Read More
                      <FaLongArrowAltRight aria-hidden />
                    </a>
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
