import {
  PiChatCircleTextFill,
  PiHouseLineFill,
  PiCurrencyGbpFill,
  PiCalendarCheckFill,
  PiSprayBottleFill,
  PiCameraFill,
  PiSealCheckFill,
} from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ProcessSectionCircle.module.css";

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

export default function ProcessSectionCircle() {
  return (
    <section className={styles.section} aria-labelledby="process-circle-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <span className={styles.tagline}>Our Cleaning Process</span>
          <h2 className={styles.title} id="process-circle-title">
            How Our Cleaning Service Works
          </h2>
        </div>

        {/* Grid of cards — 4 columns */}
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>
                  <step.icon />
                </div>
                <div className={styles.numLine}>
                  <span className={styles.line} />
                  <span className={styles.stepNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
              <span className={styles.cardLink}>
                View More <FaArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
