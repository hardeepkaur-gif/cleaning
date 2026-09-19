import type { IconType } from "react-icons";
import { FaFire, FaHome, FaSprayCan, FaStar, FaWindowMaximize } from "react-icons/fa";
import styles from "./TenancyOptionalServicesSection.module.css";

type OptionalService = {
  title: string;
  text: string;
  icon: IconType;
  iconAlt: string;
  image: string;
  imageAlt: string;
};

const optionalServices: OptionalService[] = [
  {
    title: "Window Cleaning",
    text: "We use specialised hand tools to give you clean, dry, and streak-free windows with a clear view of the outside beauty",
    icon: FaWindowMaximize,
    iconAlt: "Optional window cleaning add on service icon",
    image: "/images/tenancy/carpet-cleaning.webp",
    imageAlt: "Optional window cleaning add on for end of tenancy bookings in London",
  },
  {
    title: "Oven Cleaning",
    text: "The Oven Cleaning Service helps to remove grease, burnt-on residue and foods that have accumulated in it, leaving the oven clean and ready for the next people.",
    icon: FaFire,
    iconAlt: "Optional oven cleaning add on service icon",
    image: "/images/tenancy/oven-cleaning.webp",
    imageAlt: "Professional oven cleaning add on for tenancy handover inspections",
  },
  {
    title: "Deep Cleaning",
    text: "For properties that need extra care and attention, we provide deep cleaning services for heavily used areas with years of buildup, and hard-to-reach spaces.",
    icon: FaSprayCan,
    iconAlt: "Optional deep cleaning add on service icon",
    image: "/images/tenancy/deep-cleaning.webp",
    imageAlt: "Deep cleaning add on for heavily used rental properties in London",
  },
  {
    title: "Move In Cleaning",
    text: "Moving into a new property? Our move-in cleaning service will make sure that the home is clean, fresh and ready for you to unpack and settle in.",
    icon: FaHome,
    iconAlt: "Move in cleaning add on service icon",
    image: "/images/tenancy/move-in-cleaning.webp",
    imageAlt: "Move in cleaning service for new homeowners and tenants in London",
  },
];

export default function TenancyOptionalServicesSection() {
  return (
    <section
      className={styles.services}
      id="tenancy-optional-services"
      aria-labelledby="tenancy-optional-services-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="tenancy-optional-services-title">
            Optional Cleaning Services Available
          </h2>
          <p className={styles.intro}>
            Every property is different, which is why we offer customised cleaning
            solutions alongside our standard end of tenancy cleaning service.
          </p>
        </div>

        <div className={styles.grid}>
          {optionalServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.imgBox}>
                  <div className={styles.imgWrap}>
                    <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.text}</p>
                  <div className={styles.iconWrap}>
                    <span className={styles.iconMain} role="img" aria-label={service.iconAlt}>
                      <Icon aria-hidden />
                    </span>
                    <span className={styles.iconStar} aria-hidden>
                      <FaStar aria-hidden />
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
