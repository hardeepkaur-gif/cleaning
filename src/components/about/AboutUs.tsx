import Link from "next/link";
import styles from "./AboutUs.module.css";

const imgBase = "/images/about/cleanon";

export default function AboutUs() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="about-title">
            Professional Cleaning Services for Homes and Businesses
          </h2>
        </div>

        <div className={`${styles.grid} ${styles.gridEqual}`}>
          {/* ---- Media collage ---- */}
          <div className={styles.media}>
            <div className={styles.frame}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={styles.imgMain}>
                <img
                  src={`${imgBase}/professional-cleaning-homes-businesses.webp`}
                  alt="Professional cleaner mopping a modern kitchen floor in a London home"
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={`${imgBase}/cleaning-team-preparing-equipment-london.webp`}
                  alt="London cleaning team preparing professional equipment before a service visit"
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
                  alt="100 percent customer satisfaction guarantee badge icon"
                  loading="lazy"
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
                Cleaning Services London supports homeowners, tenants, landlords,
                students, offices, and commercial premises across London with reliable
                cleaning.
              </p>
            </blockquote>

            <p className={styles.text}>
              Whether you need regular home cleaning,{" "}
              <Link href="/carpet-cleaning-london" className={styles.internalLink}>
                carpet cleaning
              </Link>
              , end-of-tenancy cleaning, or{" "}
              <Link href="/gutter-cleaning-london" className={styles.internalLink}>
                gutter cleaning
              </Link>
              , our team follows documented cleaning standards.
            </p>

            <p className={styles.text}>
              Our focus is 100% customer satisfaction, and we strive to meet it as a
              benchmark. We simply want you to leave the mundane chores to us and return
              to a clean, tidy property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
