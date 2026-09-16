import Link from "next/link";
import { FaCouch, FaHome, FaKey, FaShieldAlt, FaWater } from "react-icons/fa";
import contactStyles from "@/components/contact/ContactUs.module.css";
import styles from "./AboutIntroSection.module.css";

const services = [
  {
    icon: FaHome,
    num: "01",
    title: "Domestic Cleaning",
    text: "A thorough, reliable cleaning package.",
    tag: "Homes",
    href: "/domestic-cleaning-services",
    accent: "coral" as const,
  },
  {
    icon: FaKey,
    num: "02",
    title: "End-of-Tenancy Cleaning",
    text: "A detailed clean to help tenants and landlords hand over a property in the best possible condition.",
    tag: "Move-out ready",
    href: "/end-of-tenancy-cleaning",
    accent: "teal" as const,
  },
  {
    icon: FaCouch,
    num: "03",
    title: "Carpet Cleaning",
    text: "For homes and commercial spaces, tackling everyday wear as well as stubborn stains.",
    tag: "Stain care",
    href: "/carpet-cleaning-london",
    accent: "coral" as const,
  },
  {
    icon: FaWater,
    num: "04",
    title: "Gutter Cleaning",
    text: "Clearing debris and blockages to help protect your property.",
    tag: "Property care",
    href: "/gutter-cleaning-london",
    accent: "teal" as const,
  },
];

export default function AboutIntroSection() {
  return (
    <section
      className={`${contactStyles.stepsSection} ${styles.section}`}
      aria-labelledby="about-intro-title"
    >
      <div className={contactStyles.stepsBlobOne} aria-hidden />
      <div className={contactStyles.stepsBlobTwo} aria-hidden />

      <div className={contactStyles.wrap}>
        <div className={`${contactStyles.sectionHead} ${styles.head}`}>
          <h2 id="about-intro-title" className={contactStyles.title}>
            Cleaning Services Built Around Your Needs
          </h2>
          <p className={`${contactStyles.intro} ${styles.intro}`}>
            We offer a focused range of cleaning services designed specifically
            for situations a Londoner typically faces:
          </p>
        </div>

        <div className={contactStyles.stepsTrack}>
          <div
            className={`${contactStyles.stepsTimeline} ${styles.timeline}`}
            aria-hidden
          />
          <div className={`${contactStyles.stepsGrid} ${styles.grid}`}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.num}
                  className={`${contactStyles.stepCard} ${
                    contactStyles[
                      service.accent === "coral"
                        ? "stepAccentCoral"
                        : "stepAccentTeal"
                    ]
                  }`}
                >
                  <span className={contactStyles.stepWatermark} aria-hidden>
                    {service.num}
                  </span>
                  <div className={contactStyles.stepTopBar} aria-hidden />

                  <div className={contactStyles.stepIconWrap}>
                    <span className={contactStyles.stepIconArc} aria-hidden />
                    <span className={contactStyles.stepIcon}>
                      <Icon aria-hidden />
                    </span>
                  </div>

                  <span className={contactStyles.stepLabel}>
                    Service {service.num}
                  </span>
                  <h3 className={contactStyles.cardTitle}>
                    <Link href={service.href} className={styles.cardLink}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className={contactStyles.bodyText}>{service.text}</p>
                  <span className={contactStyles.stepTag}>{service.tag}</span>

                  {index < services.length - 1 ? (
                    <span className={contactStyles.stepArrow} aria-hidden />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.notice}>
          <span className={styles.noticeIcon} aria-hidden>
            <FaShieldAlt />
          </span>
          <p>
            Each service is scoped to your property before we start, so there
            are no surprises about what&apos;s included.
          </p>
        </div>
      </div>
    </section>
  );
}
