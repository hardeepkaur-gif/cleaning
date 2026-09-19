import { FaCheck } from "react-icons/fa";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "@/components/included/ProfessionalCleanSimple.module.css";
import whoStyles from "@/components/carpet/CarpetChooseSection.module.css";
import sectionStyles from "./TenancyWhyChooseAltSection.module.css";

const whyChooseTitle = "Why Choose Us for End of Tenancy Cleaning";

const whyChooseIntro =
  "Finding a cleaner is easy. Finding a cleaning company that arrives on time, follows documented processes and delivers consistent standards is where the real challenge begins. So here we are:";

const whyChoosePoints = [
  "DBS-Checked Cleaners",
  "Fully Insured Service",
  "Fixed Pricing",
  "Detailed Cleaning Checklists",
  "Eco-Friendly Cleaning Products",
  "Before & After Photos",
  "14-Day Re-Clean Guarantee",
  "Experienced End of Tenancy Cleaners",
  "East London Specialists",
  "Flexible Booking Availability",
] as const;

const whyChooseImage = "/images/tenancy/why-choose-end-of-tenancy-cleaning.webp";
const whyChooseImageAlt =
  "Professional end of tenancy cleaner with cleaning supplies in a London home";

export default function TenancyWhyChooseAltSection() {
  return (
    <section
      className={`${styles.section} ${whoStyles.section}`}
      id="tenancy-why-choose"
      aria-labelledby="tenancy-why-choose-title"
    >
      <div className={`${styles.glowOne} ${whoStyles.glowOne}`} aria-hidden />
      <div className={`${styles.glowTwo} ${whoStyles.glowTwo}`} aria-hidden />

      <div className={styles.container}>
        <header className={whoStyles.header}>
          <h2 className={whoStyles.headerTitle} id="tenancy-why-choose-title">
            {whyChooseTitle}
          </h2>
          <p className={whoStyles.headerIntro}>{whyChooseIntro}</p>
        </header>

        <div className={`${styles.layout} ${local.layout} ${whoStyles.layout}`}>
          <div className={`${styles.visual} ${local.visual} ${whoStyles.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div
              className={`${styles.frameInner} ${local.frameInner} ${whoStyles.frameInner}`}
            >
              <img
                className={whoStyles.frameInnerImg}
                src={whyChooseImage}
                alt={whyChooseImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>DBS-Checked</span>
              <strong>Fixed Pricing</strong>
              <span>Guaranteed</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy} ${whoStyles.copy}`}>
            <div
              className={`${styles.pointsWrap} ${local.pointsWrap} ${whoStyles.copyBlock} ${whoStyles.pointsWrap}`}
            >
              <ul className={`${whoStyles.points} ${sectionStyles.points}`}>
                {whyChoosePoints.map((item) => (
                  <li key={item}>
                    <span className={styles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={`${styles.pointText} ${whoStyles.pointText}`}>
                      {item}
                    </span>
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
