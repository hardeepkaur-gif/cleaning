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
                  src={`${depositImgBase}/main.png`}
                  alt="Professional end of tenancy cleaning in London"
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={`${depositImgBase}/secondary.png`}
                  alt="Cleaning team preparing for property handover"
                  loading="lazy"
                />
              </div>

              <div className={styles.seal}>
                <div
                  className={styles.sealBg}
                  style={{
                    backgroundImage: `url('${imgBase}/about-three-cleaning-gurante-bg-shape.png')`,
                  }}
                  aria-hidden
                />
                <img
                  src={`${imgBase}/about-three-cleaning-gurante-icon.png`}
                  alt=""
                  aria-hidden
                />
                <strong>100%</strong>
                <span>Guaranteed</span>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${local.content}`}>
            <blockquote className={styles.callout}>
              <p>
                The question is often asked by tenants and they are wondering whether
                the professional end of tenancy cleaning will ensure that they will be
                able to get their deposit back. The answer no. There is no way of
                knowing that a deposit will ever be paid back in a cleaning service as
                the landlords and letting agents look at the property from various
                angles such as the damage, maintenance issues, unpaid rent, and the
                condition of the property.
              </p>
            </blockquote>

            <p className={styles.text}>
              But one of the most prevalent reasons for tenancy deposit deductions is
              cleaning. Ovens, bathrooms, kitchen cupboards, carpet, skirting boards
              and appliances are common places to be spotted at an inspection that
              they have not been cleaned to an acceptable standard.
            </p>

            <p className={styles.text}>
              A professional end of tenancy clean will help to prove that reasonable
              steps have been taken to return the property in clean and presentable
              condition. Our cleaners go through a comprehensive room by room
              checklist of the areas that are typically reviewed during inventories,
              inspections and property handovers.
            </p>

            <p className={styles.text}>
              Before and after pictures and documented cleaning methods provide the
              additional proof of work performed when requested. These are not
              measures that can guarantee a successful tenancy dispute, but they can
              certainly help to facilitate a smoother handover process and lessen the
              risk of cleaning issues after a move out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
