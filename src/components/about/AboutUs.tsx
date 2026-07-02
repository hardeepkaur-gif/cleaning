import styles from "./AboutUs.module.css";

const imgBase = "/images/about/cleanon";

export default function AboutUs() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.container}>
        <h2 className={styles.title} id="about-title">
          Professional Cleaning Services for Homes and Businesses
        </h2>

        <p className={styles.intro}>
          Households and businesses chose to outsource cleaning tasks which has
          significantly grown the demand for best cleaning services across the UK.
          Recent industry data shows that approximately 17% of UK households now
          employ a cleaner, whilst demand among homeowners under 35 is significantly
          higher.
        </p>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.imgBox}>
              <div className={styles.imgMain}>
                <img
                  src={`${imgBase}/about-three-img-1.jpg`}
                  alt="Professional cleaner at work"
                />
              </div>
              <div className={styles.imgSecondary}>
                <img
                  src={`${imgBase}/about-three-img-2.jpg`}
                  alt="Cleaning team preparing equipment"
                />
              </div>

              <div className={styles.experienceBox}>
                <div className={styles.experienceCount}>
                  <span className={styles.experienceNum}>17</span>
                  <span className={styles.experiencePlus}>%</span>
                </div>
                <p className={styles.experienceText}>
                  UK Households Employ a Cleaner
                </p>
              </div>
            </div>

            <div className={styles.guarantee}>
              <div
                className={styles.guaranteeBg}
                style={{
                  backgroundImage: `url('${imgBase}/about-three-cleaning-gurante-bg-shape.png')`,
                }}
                aria-hidden
              />
              <div className={styles.guaranteeIcon}>
                <img
                  src={`${imgBase}/about-three-cleaning-gurante-icon.png`}
                  alt=""
                  aria-hidden
                />
              </div>
              <h4>100%</h4>
              <p>Cleaning Guaranteed</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.text}>
              <p>
                Cleaning Services London supports homeowners, tenants, landlords,
                students, offices, and commercial premises across East London with
                reliable cleaning services. You need regular home cleaning, carpet
                cleaning, end of tenancy cleaning, or gutter cleaning, our team follows
                documented cleaning standards. Ultimately, it delivers dependable results
                without the back and forth that often leaves customers lumbered with
                inconsistent service.
              </p>
              <p>
                Many cleaning companies focus solely on completing the job. We with our
                100% customer satisfaction focus on completing it to a benchmark. Every
                cleaner follows signed cleaning procedures, quality control measures, and
                completion reporting standards. This structured approach helps create a
                more reliable experience for clients who simply want to leave the mundane
                chores to us and return to a clean, tidy property.
              </p>
              <p>
                As demand for home Cleaning Company London continues to rise, customers
                are looking for more than availability alone. They want reassurance,
                transparency, and cleaners they can trust in their property. That is why
                we combine DBS checks, insurance, fixed pricing, and satisfaction-focused
                service standards to create a cleaning service built around confidence
                rather than assumptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
