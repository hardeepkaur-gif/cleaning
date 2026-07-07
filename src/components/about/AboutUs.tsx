import styles from "./AboutUs.module.css";

const imgBase = "/images/about/cleanon";

export default function AboutUs() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>About Cleaning Services London</span>
          <h2 className={styles.title} id="about-title">
            Professional Cleaning Services for Homes and Businesses
          </h2>
        </div>

        <div className={styles.grid}>
          {/* ---- Media collage ---- */}
          <div className={styles.media}>
            <div className={styles.frame}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={styles.imgMain}>
                <img
                  src={`${imgBase}/about-three-img-1.jpg`}
                  alt="Professional cleaner at work"
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={`${imgBase}/about-three-img-2.jpg`}
                  alt="Cleaning team preparing equipment"
                  loading="lazy"
                />
              </div>

              <div className={styles.statCard}>
                <div className={styles.statNum}>
                  <span>17</span>
                  <em>%</em>
                </div>
                <p>UK Households Employ a Cleaner</p>
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

          {/* ---- Content ---- */}
          <div className={styles.content}>
            <blockquote className={styles.callout}>
              <p>
                Households and businesses chose to outsource cleaning tasks which has
                significantly grown the demand for best cleaning services across the UK.
                Recent industry data shows that approximately 17% of UK households now
                employ a cleaner, whilst demand among homeowners under 35 is significantly
                higher.
              </p>
            </blockquote>

            <p className={styles.text}>
              Cleaning Services London supports homeowners, tenants, landlords, students,
              offices, and commercial premises across East London with reliable cleaning
              services. You need regular home cleaning, carpet cleaning, end of tenancy
              cleaning, or gutter cleaning, our team follows documented cleaning standards.
              Ultimately, it delivers dependable results without the back and forth that
              often leaves customers lumbered with inconsistent service.
            </p>

            <p className={styles.text}>
              Many cleaning companies focus solely on completing the job. We with our
              100% customer satisfaction focus on completing it to a benchmark. Every
              cleaner follows signed cleaning procedures, quality control measures, and
              completion reporting standards. This structured approach helps create a
              more reliable experience for clients who simply want to leave the mundane
              chores to us and return to a clean, tidy property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
