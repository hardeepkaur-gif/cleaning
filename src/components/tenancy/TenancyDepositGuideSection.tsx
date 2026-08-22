import styles from "@/components/about/AboutUs.module.css";
import local from "./TenancyDepositGuideSection.module.css";

const imgBase = "/images/about/cleanon";
const depositImgBase = "/images/tenancy/deposit";

export default function TenancyDepositGuideSection() {
  return (
    <section
      className={styles.about}
      id="tenancy-deposit-help"
      aria-labelledby="tenancy-deposit-title"
    >
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="tenancy-deposit-title">
            Does End of Tenancy Cleaning London Help Get Your Deposit Back?
          </h2>
        </div>

        <div className={`${styles.grid} ${local.grid}`}>
          <div className={`${styles.media} ${local.media}`}>
            <div className={styles.frame}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={styles.imgMain}>
                <img
                  src={`${depositImgBase}/tenancy-deposit-cleaning-protection-london.webp`}
                  alt="Professional end of tenancy cleaning helping protect a London tenancy deposit"
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={`${depositImgBase}/tenancy-deposit-cleaning-team-london.webp`}
                  alt="Cleaning team preparing a rental property for tenancy deposit inspection"
                  loading="lazy"
                />
              </div>

              <div className={styles.seal}>
                <div
                  className={styles.sealBg}
                  style={{
                    backgroundImage: `url('${imgBase}/decorative-satisfaction-guarantee-badge-bg.webp')`,
                  }}
                  aria-hidden
                />
                <img
                  src={`${imgBase}/satisfaction-guarantee-badge-icon.webp`}
                  alt="100 percent end of tenancy cleaning satisfaction guarantee badge icon"
                  loading="lazy"
                />
                <strong>100%</strong>
                <span>Guaranteed</span>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${local.content}`}>
            <blockquote className={styles.callout}>
              <p>
                The question is often asked by tenants, and they are wondering whether
                the professional end of tenancy cleaning will ensure that they will be
                able to get their deposit back. The answer is no. There is no way of
                knowing that a deposit will ever be paid back in a cleaning service,
                as the landlords and letting agents look at the property from various
                angles, such as the damage, maintenance issues, unpaid rent, and the
                condition of the property.
              </p>
            </blockquote>

            <p className={styles.text}>
              But one of the most prevalent reasons for tenancy deposit deductions is
              cleaning. Ovens, bathrooms, kitchen cupboards, carpet, skirting boards,
              and appliances are common places to be spotted at an inspection where
              they have not been cleaned to an acceptable standard.
            </p>

            <p className={styles.text}>
              A professional end of tenancy clean will help to prove that reasonable
              steps have been taken to return the property in clean and presentable
              condition. Our cleaners go through a comprehensive room-by-room checklist
              of the areas that are typically reviewed during inventories, inspections,
              and property handovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
