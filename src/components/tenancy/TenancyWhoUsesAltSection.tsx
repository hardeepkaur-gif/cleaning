import { FaCheck } from "react-icons/fa";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "@/components/included/ProfessionalCleanSimple.module.css";
import whoStyles from "./TenancyWhoUsesAltSection.module.css";

const whoUsesTitle = "Who Uses Our End of Tenancy Cleaning Services London";

const whoUsesIntro =
  "Our end of tenancy cleaning service is used by all kinds of customers in London including tenants getting ready to move out and letting agents and landlords needing a property cleaned and refreshed for its next phase.";

const whoUsesPoints = [
  "Tenants Moving Out Cleaning Services",
  "Landlords Preparing Properties",
  "Letting Agents and Property Managers",
  "New Homeowners Moving In Cleaning Service",
] as const;

const whoUsesImage = "/images/tenancy/tenants-moving-out.webp";
const whoUsesImageAlt =
  "Customers using end of tenancy cleaning services across London";

export default function TenancyWhoUsesAltSection() {
  return (
    <section
      className={`${styles.section} ${whoStyles.section}`}
      id="tenancy-who-uses"
      aria-labelledby="tenancy-who-uses-title"
    >
      <div className={`${styles.glowOne} ${whoStyles.glowOne}`} aria-hidden />
      <div className={`${styles.glowTwo} ${whoStyles.glowTwo}`} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img
                src={whoUsesImage}
                alt={whoUsesImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Tenants</span>
              <strong>Landlords</strong>
              <span>Agents</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div className={`${styles.pointsWrap} ${local.pointsWrap} ${whoStyles.copyBlock}`}>
              <h2
                className={`${styles.title} ${whoStyles.copyTitle}`}
                id="tenancy-who-uses-title"
              >
                {whoUsesTitle}
              </h2>
              <p className={`${styles.text} ${whoStyles.copyIntro}`}>
                {whoUsesIntro}
              </p>

              <ul className={styles.points}>
                {whoUsesPoints.map((item) => (
                  <li key={item}>
                    <span className={styles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={styles.pointText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
