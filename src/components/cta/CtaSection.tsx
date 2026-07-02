import ThmButton from "@/components/menu/ThmButton";
import styles from "./CtaSection.module.css";

const imgBase = "/images/cta/cleanon";

export default function CtaSection() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.imageWrap}>
            <img
              src={`${imgBase}/cta-one-img-1.png`}
              alt="Professional cleaning team member"
            />
          </div>

          <div className={styles.content}>
            <div
              className={styles.shapeBg}
              style={{
                backgroundImage: `url('${imgBase}/cta-one-shape-bg.png')`,
              }}
              aria-hidden
            />
            <img
              className={styles.shape2}
              src={`${imgBase}/cta-one-shape-2.png`}
              alt=""
              aria-hidden
            />
            <img
              className={styles.shape3}
              src={`${imgBase}/cta-one-shape-3.png`}
              alt=""
              aria-hidden
            />

            <h2 className={styles.title} id="cta-title">
              Looking For Professional <br />
              Cleaning Services in <span>London?</span>
            </h2>
            <p className={styles.text}>
              Leave the mundane chores to us whilst you focus on the things that
              matter most. Speak to our team today for a quotation and fixed pricing.
            </p>
            <div className={styles.btnBox}>
              <ThmButton href="#contact" hoverVariant="white">
                Book a Cleaning Service
              </ThmButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
