import styles from "./TenancyProfessionalSection.module.css";

const imgBase = "/images/about/cleanon";

export default function TenancyProfessionalSection() {
  return (
    <section
      className={styles.section}
      id="professional-tenancy-cleaning"
      aria-labelledby="professional-tenancy-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.imageWrap}>
              <div className={styles.imageOne}>
                <img
                  src="/images/tenancy/end-of-tenancy-deposit-concerns.png"
                  alt="End of tenancy cleaning in London"
                  loading="lazy"
                />
              </div>

              <div className={styles.imageTwo}>
                <img
                  src={`${imgBase}/about-three-img-2.jpg`}
                  alt="Professional cleaner preparing for property handover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.experience}>
              <p className={styles.experienceYear}>100%</p>
              <p className={styles.experienceText}>Handover Standard</p>
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.secTitle}>
              <div className={styles.secTop}>
                <span className={styles.secTagline}>Professional Tenancy Cleaning</span>
              </div>
              <h2 className={styles.title} id="professional-tenancy-title">
                Professional End of Tenancy Cleaning London
              </h2>
            </div>

            <p className={styles.text}>
              Cleaning is a leading cause of UK tenancy deposit disputes.
              <br />
              Our checklist-led End of Tenancy Cleaning gets the property ready for handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
