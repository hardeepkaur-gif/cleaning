import styles from "./TenancyProfessionalSection.module.css";

export default function TenancyProfessionalSection() {
  return (
    <section
      className={styles.section}
      id="professional-tenancy-cleaning"
      aria-labelledby="professional-tenancy-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="professional-tenancy-title">
              Professional End of Tenancy Cleaning London
            </h2>
            <p className={styles.text}>
              Cleaning is one of the most common causes of tenancy deposit
              disputes in the UK. According to the Tenancy Deposit Scheme,
              cleaning-related issues regularly form the largest category of
              deposit disagreements between tenants and landlords. A thorough
              end of tenancy clean can help reduce the risk of disputes or
              delays.
            </p>
            <p className={styles.text}>
              Our professional End of Tenancy Cleaning London service is designed
              for tenants who need a property cleaned to a high handover
              standard. We follow a detailed room-by-room checklist covering
              kitchens, bathrooms, bedrooms, and living areas to ensure the
              property is ready for inspection.
            </p>
            <p className={styles.text}>
              Unlike regular domestic cleaning, end of tenancy cleaning focuses
              on the areas most commonly highlighted during inventory checks.
              Ovens, kitchen cupboards, bathroom limescale, skirting boards,
              internal glass and appliance cleaning are all given the attention
              they require to help achieve a smooth property handover.
            </p>
          </div>

          <div className={styles.media}>
            <div className={styles.imgWrap}>
              <img
                src="/images/tenancy/end-of-tenancy-deposit-concerns.png"
                alt="Professional end of tenancy cleaning in London"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
