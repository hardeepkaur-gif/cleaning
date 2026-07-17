import styles from "./ContactUs.module.css";

export default function ContactMapSection() {
  return (
    <section className={styles.mapSection} aria-labelledby="contact-map-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.tagline}>Service area</span>
          <h2 id="contact-map-title" className={styles.title}>
            Cleaning Services Across London
          </h2>
          <p className={styles.intro}>
            We cover East London and wider Greater London depending on property
            type, scheduling and availability.
          </p>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            src="https://www.google.com/maps?q=London&output=embed"
            loading="lazy"
            title="Cleaning Services London service area map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
