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
              Cleaning is one of the most common causes of tenancy deposit disputes
              in the UK. According to the Tenancy Deposit Scheme, cleaning-related
              issues regularly form the largest category of deposit disagreements
              between tenants and landlords. A thorough end of tenancy clean can help
              reduce the risk of disputes or delays.
            </p>
            <p className={styles.text}>
              Our professional End of Tenancy Cleaning London service is designed for
              tenants who need a property cleaned to a high handover standard. We
              follow a detailed room-by-room checklist covering kitchens, bathrooms,
              bedrooms, and living areas to ensure the property is ready for inspection.
            </p>
            <p className={styles.text}>
              Unlike regular domestic cleaning, end of tenancy cleaning focuses on the
              areas most commonly highlighted during inventory checks. Ovens, kitchen
              cupboards, bathroom limescale, skirting boards, internal glass and
              appliance cleaning are all given the attention they require to help
              achieve a smooth property handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
