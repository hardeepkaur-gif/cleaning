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

        <div className={`${styles.grid} ${styles.gridEqual} ${local.grid}`}>
          <div className={`${styles.content} ${local.content}`}>
            <blockquote className={styles.callout}>
              <p>
                There is no way of knowing that a deposit will ever be paid back
                in a cleaning service, as the landlords and letting agents look
                at the property from various angles, such as the damage,
                maintenance issues, unpaid rent, and the condition of the
                property.
              </p>
            </blockquote>

            <p className={styles.text}>
              A professional end of tenancy clean helps prove that you took
              reasonable steps to return the property in a clean, presentable
              condition.
            </p>

            <p className={styles.text}>
              According to the Deposit Protection Service, cleaning accounted for
              29.38% of deposit claims in 2025. Separate research by SpareRoom
              found that 63% of renters had experienced a cleaning-related deposit
              deduction, while only 17% paid for professional cleaning before
              moving out. The research estimated that cleaning-related deductions
              cost UK renters around £724 million a year, averaging about £250
              per tenancy.
            </p>
          </div>

          <div className={`${styles.media} ${local.media}`}>
            <div className={`${styles.frame} ${local.frame}`}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={`${styles.imgMain} ${local.imgMain}`}>
                <img
                  src={`${depositImgBase}/tenancy-deposit-cleaning-protection-london.webp`}
                  alt="Professional end of tenancy cleaning helping protect a London tenancy deposit"
                  loading="lazy"
                />
              </div>

              <div className={`${styles.imgSecondary} ${local.imgSecondary}`}>
                <img
                  src={`${depositImgBase}/tenancy-deposit-cleaning-team-london.webp`}
                  alt="Cleaning team preparing a rental property for tenancy deposit inspection"
                  loading="lazy"
                />
              </div>

              <div className={`${styles.seal} ${local.seal}`}>
                <div
                  className={styles.sealBg}
                  style={{
                    backgroundImage: `url('${imgBase}/decorative-satisfaction-guarantee-badge-bg.webp')`,
                  }}
                  aria-hidden
                />
                <strong>29.38%</strong>
                <span>of deposit claims</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
