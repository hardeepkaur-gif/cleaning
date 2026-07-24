import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import {
  PiBroomDuotone,
  PiCurrencyGbpDuotone,
  PiHouseLineDuotone,
  PiKeyDuotone,
  PiRugDuotone,
} from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./PricingSection.module.css";

const pricingCards = [
  {
    icon: PiHouseLineDuotone,
    service: "Domestic Cleaning",
    basis: "Property size and cleaning frequency",
    bestFor: "Regular home cleaning services and ongoing household maintenance",
  },
  {
    icon: PiRugDuotone,
    service: "Carpet Cleaning",
    basis: "Carpet size, material, and overall condition",
    bestFor: "Stain removal, odour treatment, and high-traffic areas",
  },
  {
    icon: PiKeyDuotone,
    service: "End of Tenancy Cleaning",
    basis: "Number of bedrooms and property condition",
    bestFor: "Move-out cleans, landlord requirements, and property handovers",
  },
  {
    icon: PiBroomDuotone,
    service: "Gutter Cleaning",
    basis: "Property access, height, and blockage level",
    bestFor: "Preventative maintenance and reducing the risk of water damage",
  },
];

export default function PricingSection() {
  return (
    <section
      className={styles.section}
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className={styles.bgDots} aria-hidden />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="pricing-title">
            How Much Do Cleaning Services Cost in London?
          </h2>
          <p className={styles.intro}>
            The price of the cleaners&apos; services in London is dependent on
            several factors including size of property, type of cleaners,
            condition of the property and access. Some cleaning services offer
            low rates per hour, but when you see the job in all its glory, the
            price could go up.
          </p>
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIcon} aria-hidden>
            <PiCurrencyGbpDuotone />
          </span>
          <div>
            <p>
              At Cleaning Services London, we use a{" "}
              <strong>fixed pricing structure</strong> wherever possible, giving
              customers a clear understanding of costs before work begins instead
              of relying on variable hourly estimates.
            </p>
            <p className={styles.calloutHighlight}>
              A <strong>£70 call-out or booking charge</strong> may apply
              depending on the service and location.
            </p>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {pricingCards.map(({ icon: Icon, service, basis, bestFor }) => (
            <article
              key={service}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIcon} aria-hidden>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{service}</h3>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Pricing Basis</span>
                  <p>{basis}</p>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Best For</span>
                  <p>{bestFor}</p>
                </div>
              </div>
              <div className={styles.cardBadge}>
                <FaCheckCircle aria-hidden />
                <span>Fixed price available</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Request to discuss your home area.
          </p>
          <ThmButton href="/contact-us" className={styles.ctaBtn}>
            <FaPhoneAlt aria-hidden />
            Request a Quote
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
