import {
  FaCalendarCheck,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";
import styles from "./ContactUs.module.css";

const steps = [
  {
    icon: FaClipboardList,
    num: "01",
    title: "Share your details",
    text: "Fill in your name, phone and email — it takes under a minute and there is no obligation.",
    tag: "Under 1 minute",
    accent: "coral" as const,
  },
  {
    icon: FaComments,
    num: "02",
    title: "Receive your quote",
    text: "We reply with fixed pricing and the earliest available slot — no hidden fees or hourly surprises.",
    tag: "Usually same day",
    accent: "teal" as const,
  },
  {
    icon: FaCalendarCheck,
    num: "03",
    title: "Book & relax",
    text: "Confirm your appointment and our DBS-checked, insured team arrives fully equipped to clean.",
    tag: "Fully equipped",
    accent: "coral" as const,
  },
];

export default function ContactStepsSection() {
  return (
    <section className={styles.stepsSection} aria-labelledby="contact-steps-title">
      <div className={styles.stepsBlobOne} aria-hidden />
      <div className={styles.stepsBlobTwo} aria-hidden />

      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.tagline}>Simple process</span>
          <h2 id="contact-steps-title" className={styles.title}>
            Getting a Quote Takes Three Easy Steps
          </h2>
          <p className={styles.intro}>
            No long forms, no waiting on hold — just a quick message and
            we&apos;ll handle the rest from there.
          </p>
        </div>

        <div className={styles.stepsTrack}>
          <div className={styles.stepsTimeline} aria-hidden />
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.num}
                  className={`${styles.stepCard} ${styles[`stepAccent${step.accent === "coral" ? "Coral" : "Teal"}`]}`}
                >
                  <span className={styles.stepWatermark} aria-hidden>
                    {step.num}
                  </span>
                  <div className={styles.stepTopBar} aria-hidden />

                  <div className={styles.stepIconWrap}>
                    <span className={styles.stepIconArc} aria-hidden />
                    <span className={styles.stepIcon}>
                      <Icon aria-hidden />
                    </span>
                  </div>

                  <span className={styles.stepLabel}>Step {step.num}</span>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.bodyText}>{step.text}</p>
                  <span className={styles.stepTag}>{step.tag}</span>

                  {index < steps.length - 1 ? (
                    <span className={styles.stepArrow} aria-hidden />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
