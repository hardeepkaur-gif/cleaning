import type { IconType } from "react-icons";
import { FaCouch, FaFire, FaHome, FaSprayCan, FaStar } from "react-icons/fa";
import styles from "./TenancyOptionalServicesSection.module.css";

type OptionalService = {
  title: string;
  text: string;
  href: string;
  icon: IconType;
  iconAlt: string;
  image: string;
  imageAlt: string;
};

const optionalServices: OptionalService[] = [
  {
    title: "Carpet Cleaning",
    text: "Professional carpet cleaning is a great way to get rid of stains, odours, dust and daily wear and tear that normal vacuuming won't get.",
    href: "/contact-us",
    icon: FaCouch,
    iconAlt: "Optional carpet cleaning add on service icon",
    image: "/images/tenancy/carpet-cleaning.webp",
    imageAlt: "Optional carpet cleaning add on for end of tenancy bookings in London",
  },
  {
    title: "Oven Cleaning",
    text: "The Oven Cleaning Service helps to remove grease, burnt-on residue and foods that have accumulated in it, leaving the oven clean and ready for the next people.",
    href: "/contact-us",
    icon: FaFire,
    iconAlt: "Optional oven cleaning add on service icon",
    image: "/images/tenancy/oven-cleaning.webp",
    imageAlt: "Professional oven cleaning add on for tenancy handover inspections",
  },
  {
    title: "Deep Cleaning",
    text: "For properties that need extra care and attention, we provide deep cleaning services providing attention to heavily used areas, areas that tend to get built up, and hard to get at spaces.",
    href: "/contact-us",
    icon: FaSprayCan,
    iconAlt: "Optional deep cleaning add on service icon",
    image: "/images/tenancy/deep-cleaning.webp",
    imageAlt: "Deep cleaning add on for heavily used rental properties in London",
  },
  {
    title: "Move In Cleaning Services",
    text: "Moving into a new property? Our move-in cleaning service will make sure that the home is clean, fresh and ready for you to unpack and settle in.",
    href: "/contact-us",
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
                  <h3 className={styles.cardTitle}>
                    <a href={service.href}>{service.title}</a>
                  </h3>
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
