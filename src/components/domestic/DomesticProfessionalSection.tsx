import { PiBroomDuotone } from "react-icons/pi";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "./DomesticProfessionalSection.module.css";
import whoStyles from "@/components/tenancy/TenancyWhoUsesAltSection.module.css";

const title = "Professional Domestic Cleaning Services in London";

const body =
  "Keeping your home clean should not mean sacrificing your evenings or weekends. You can enjoy a clean, comfortable living space with trusted domestic cleaning services in London that fit around your routine. You can choose weekly, fortnightly or one-off domestic cleaning with flexible appointments and clear pricing. There's also an option of the same trusted cleaner for each visit, so your home stays consistently clean with less stress and more free time.";

const image = "/images/domestic/professional-domestic-cleaning.webp";
const imageAlt =
  "Professional domestic cleaner with cleaning supplies in a London kitchen";

export default function DomesticProfessionalSection() {
  return (
    <section
      className={styles.section}
      id="professional-domestic-cleaning"
      aria-labelledby="professional-domestic-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img src={image} alt={imageAlt} loading="lazy" />
            </div>
            <div className={styles.visualTag}>
              <span>Weekly</span>
              <strong>Flexible</strong>
              <span>Trusted</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div
              className={`${styles.pointsWrap} ${local.pointsWrap} ${whoStyles.copyBlock}`}
            >
              <span className={`${styles.tagline} ${whoStyles.copyTagline}`}>
                <span role="img" aria-label="Professional domestic cleaning icon">
                  <PiBroomDuotone aria-hidden />
                </span>
                Professional Domestic Cleaning
              </span>
              <h2
                className={`${styles.title} ${whoStyles.copyTitle}`}
                id="professional-domestic-title"
              >
                {title}
              </h2>
              <p className={`${styles.text} ${whoStyles.copyIntro}`}>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
