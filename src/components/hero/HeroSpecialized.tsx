import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroSpecialized.module.css";

const imgBase = "/images/hero/cleanu-six";

export default function HeroSpecialized() {
  return (
    <section className={styles.hero} aria-label="Specialized cleaning services">
      <div className={styles.heroBody}>
        <div className={styles.leftSolid} aria-hidden />
        <div
          className={styles.bg}
          style={{ backgroundImage: `url('${imgBase}/hero-bg-right.jpg')` }}
          aria-hidden
        />
        <div className={styles.bgBlend} aria-hidden />

        <div className={styles.mainImg}>
          <img src={`${imgBase}/hero-section.png`} alt="Professional cleaning team" />
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.subTitle}>
              <h4>Professional Cleaning Services</h4>
            </div>

            <div className={styles.bigTitle}>
              <h2>
                Cleaning Services London With{" "}
                <span>DBS Checked</span> <br />
                Professional Cleaners
              </h2>
            </div>

            <div className={styles.text}>
              <p>
                Reliable cleaning services for homes, rental properties, offices, and
                commercial premises across East London. At Cleaning Services London we
                have DBS-checked and fully insured cleaners following documented cleaning
                standards, completion photo procedures, and quality control checks
                designed to deliver consistent results.
              </p>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottomBtn}>
                <ThmButton href="#contact">Request a Quote</ThmButton>
              </div>
              <div className={styles.bottomBtn}>
                <ThmButton href="#services" variant="secondary">
                  Find Your Cleaner
                </ThmButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
