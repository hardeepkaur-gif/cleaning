import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroHomeThree.module.css";

const imgBase = "/images/hero/cleanon-home3";

export default function HeroHomeThree() {
  return (
    <section className={styles.hero} aria-label="Home cleaning packages">
      <div
        className={styles.shapeBg}
        style={{ backgroundImage: `url('${imgBase}/decorative-hero-home3-bg-primary.webp')` }}
        aria-hidden
      />
      <div
        className={styles.shapeBgTwo}
        style={{ backgroundImage: `url('${imgBase}/decorative-hero-home3-bg-secondary.webp')` }}
        aria-hidden
      />

      <img className={styles.shape1} src={`${imgBase}/decorative-hero-home3-accent-1.webp`} alt="" aria-hidden />
      <img className={styles.shape2} src={`${imgBase}/decorative-hero-home3-accent-2.webp`} alt="" aria-hidden />
      <img className={styles.shape3} src={`${imgBase}/decorative-hero-home3-accent-3.webp`} alt="" aria-hidden />
      <img className={styles.shape4} src={`${imgBase}/decorative-hero-home3-accent-4.webp`} alt="" aria-hidden />
      <img className={styles.shape5} src={`${imgBase}/decorative-hero-home3-accent-5.webp`} alt="" aria-hidden />

      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
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
              <ThmButton href="/contact-us">Request a Quote</ThmButton>
              <ThmButton href="/services">
                Find Your Cleaner
              </ThmButton>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imgBox}>
              <img
                src={`${imgBase}/hero-home3-cleaning-team-london.webp`}
                alt="Professional cleaning team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
