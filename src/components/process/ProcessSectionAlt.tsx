import {
  PiChatCircleTextFill,
  PiHouseLineFill,
  PiCurrencyGbpFill,
  PiCalendarCheckFill,
  PiSprayBottleFill,
  PiCameraFill,
  PiSealCheckFill,
} from "react-icons/pi";
import styles from "./ProcessSectionAlt.module.css";

const steps = [
  {
    icon: PiChatCircleTextFill,
    title: "Request a Quote",
    text: "Tell us about your property, service requirements, and preferred appointment date.",
  },
  {
    icon: PiHouseLineFill,
    title: "Confirm Property Details",
    text: "We review the property size, condition, and cleaning requirements before preparing your quotation.",
  },
  {
    icon: PiCurrencyGbpFill,
    title: "Receive Fixed Pricing",
    text: "A clear fixed-price quotation is provided before any booking is confirmed.",
  },
  {
    icon: PiCalendarCheckFill,
    title: "Book Your Appointment",
    text: "Choose a suitable date and time for your cleaning service.",
  },
  {
    icon: PiSprayBottleFill,
    title: "Professional Cleaning Visit",
    text: "Our trained cleaners attend the property and complete the agreed cleaning checklist.",
  },
  {
    icon: PiCameraFill,
    title: "Completion Photos & Quality Check",
    text: "Completed work is reviewed against service standards and supported with completion photography where applicable.",
  },
  {
    icon: PiSealCheckFill,
    title: "Customer Approval",
    text: "We confirm that the service has been completed to the agreed standard before closing the job.",
  },
];

export default function ProcessSectionAlt() {
  return (
    <section className={styles.section} aria-labelledby="process-alt-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="process-alt-title">
            How Our Cleaning Service Works
          </h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`${styles.item} ${i % 2 === 0 ? styles.itemLeft : styles.itemRight}`}
            >
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <step.icon />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardText}>{step.text}</p>
                </div>
              </div>
              <div className={styles.center} aria-hidden>
                <span className={styles.number}>{i + 1}</span>
              </div>
            </div>
          ))}
          <div className={styles.verticalLine} aria-hidden />
        </div>
      </div>
    </section>
  );
}
