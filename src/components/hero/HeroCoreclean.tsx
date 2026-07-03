import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroCoreclean.module.css";

const imgBase = "/images/hero/coreclean";

export default function HeroCoreclean() {
  return (
    <section className={styles.hero} id="home" aria-label="Coreclean style cleaning hero">
      <div className={styles.heroBody}>
        <div
          className={styles.bgShape}
          style={{ backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-1.png')` }}
          aria-hidden
        />
        <div
          className={styles.bgShapeTwo}
          style={{ backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-2.png')` }}
          aria-hidden
        />

        <img
          className={styles.shape1}
          src={`${imgBase}/main-slider-two-shape-1.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape2}
          src={`${imgBase}/main-slider-two-shape-2.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape3}
          src={`${imgBase}/main-slider-two-shape-3.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape4}
          src={`${imgBase}/main-slider-two-shape-4.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape5}
          src={`${imgBase}/main-slider-two-shape-5.png`}
          alt=""
          aria-hidden
        />

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

          <div className={styles.mainImg}>
            <img src={`${imgBase}/main-slider-two-1-1.png`} alt="Professional cleaner" />
          </div>
        </div>
      </div>
    </section>
  );
}
