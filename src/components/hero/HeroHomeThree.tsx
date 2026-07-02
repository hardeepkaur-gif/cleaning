import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroHomeThree.module.css";

const imgBase = "/images/hero/cleanon-home3";

export default function HeroHomeThree() {
  return (
    <section className={styles.hero} aria-label="Home cleaning packages">
      <div
        className={styles.shapeBg}
        style={{ backgroundImage: `url('${imgBase}/banner-one-shape-bg.jpg')` }}
        aria-hidden
      />
      <div
        className={styles.shapeBgTwo}
        style={{ backgroundImage: `url('${imgBase}/banner-one-shape-bg-2.png')` }}
        aria-hidden
      />

      <img className={styles.shape1} src={`${imgBase}/banner-one-shape-1.png`} alt="" aria-hidden />
      <img className={styles.shape2} src={`${imgBase}/banner-one-shape-2.png`} alt="" aria-hidden />
      <img className={styles.shape3} src={`${imgBase}/banner-one-shape-3.png`} alt="" aria-hidden />
      <img className={styles.shape4} src={`${imgBase}/banner-one-shape-4.png`} alt="" aria-hidden />
      <img className={styles.shape5} src={`${imgBase}/banner-one-shape-5.png`} alt="" aria-hidden />

      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
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
              <ThmButton href="#contact">Request a Quote</ThmButton>
              <ThmButton href="#services" variant="secondary">
                Find Your Cleaner
              </ThmButton>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imgBox}>
              <img
                src={`${imgBase}/banner-one-img-1.png`}
                alt="Professional cleaning team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
