import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroPromo.module.css";

export default function HeroPromo() {
  return (
    <section className={styles.hero} aria-label="Promotional cleaning services">
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/images/hero/cleanon/slider-1-1.jpg')" }}
        aria-hidden
      />
      <div className={styles.shape1} aria-hidden />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subTitle}>Professional Cleaning Services</p>

          <h2 className={styles.title}>
            Cleaning Services London With{" "}
            <span>DBS Checked Professional Cleaners</span>
          </h2>

          <p className={styles.text}>
            Reliable cleaning services for homes, rental properties, offices, and
            commercial premises across East London. At Cleaning Services London we
            have DBS-checked and fully insured cleaners following documented cleaning
            standards, completion photo procedures, and quality control checks
            designed to deliver consistent results.
          </p>

          <div className={styles.actions}>
            <ThmButton href="/contact-us" hoverVariant="white">
              Request a Quote
            </ThmButton>
            <ThmButton href="/services" hoverVariant="white">
              Find Your Cleaner
            </ThmButton>
          </div>
        </div>

        <div className={styles.imgBox}>
          <div className={styles.mainImg}>
            <img
              src="/images/hero/cleanon/main-slider-img-1-1.png"
              alt="Professional cleaner"
            />
          </div>
          <div className={styles.imgShape}>
            <img
              src="/images/hero/cleanon/main-slider-img-shape-1.png"
              alt=""
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
