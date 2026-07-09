import {
  PiChatCircleTextFill,
  PiHouseLineFill,
  PiCurrencyGbpFill,
  PiCalendarCheckFill,
  PiSprayBottleFill,
  PiCameraFill,
  PiSealCheckFill,
} from "react-icons/pi";
import styles from "./ProcessSection.module.css";

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

export default function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="process-title">
            How Our Cleaning Service Works
          </h2>
        </div>

        {/* Top row — first 4 steps */}
        <div className={styles.row}>
          <div className={styles.connectorLine} aria-hidden />
          {steps.slice(0, 4).map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.iconOuter}>
                <div className={styles.iconInner}>
                  <step.icon />
                </div>
              </div>
              <span className={styles.badge}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom row — last 3 steps */}
        <div className={`${styles.row} ${styles.rowBottom}`}>
          <div className={styles.connectorLine} aria-hidden />
          {steps.slice(4).map((step, i) => (
            <div key={i + 4} className={styles.step}>
              <div className={styles.iconOuter}>
                <div className={styles.iconInner}>
                  <step.icon />
                </div>
              </div>
              <span className={styles.badge}>
                {String(i + 5).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
