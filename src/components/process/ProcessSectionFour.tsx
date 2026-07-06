import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  PiCalendarCheckFill,
  PiCameraFill,
  PiChatCircleTextFill,
  PiCurrencyGbpFill,
  PiHouseLineFill,
  PiSealCheckFill,
  PiSprayBottleFill,
} from "react-icons/pi";
import styles from "./ProcessSectionFour.module.css";

type ProcessStep = {
  icon: IconType;
  title: string;
  text: string;
  color: string;
};

const steps: ProcessStep[] = [
  {
    icon: PiChatCircleTextFill,
    title: "Request a Quote",
    text: "Tell us about your property, service requirements, and preferred appointment date.",
    color: "#1e3d5a",
  },
  {
    icon: PiHouseLineFill,
    title: "Confirm Property Details",
    text: "We review the property size, condition, and cleaning requirements before preparing your quotation.",
    color: "#9bb8c9",
  },
  {
    icon: PiCurrencyGbpFill,
    title: "Receive Fixed Pricing",
    text: "A clear fixed-price quotation is provided before any booking is confirmed.",
    color: "#0e5e5b",
  },
  {
    icon: PiCalendarCheckFill,
    title: "Book Your Appointment",
    text: "Choose a suitable date and time for your cleaning service.",
    color: "#e26a4c",
  },
  {
    icon: PiSprayBottleFill,
    title: "Professional Cleaning Visit",
    text: "Our trained cleaners attend the property and complete the agreed cleaning checklist.",
    color: "#7a2e3f",
  },
  {
    icon: PiCameraFill,
    title: "Completion Photos and Quality Check",
    text: "Completed work is reviewed against service standards and supported with completion photography where applicable.",
    color: "#1a5c4a",
  },
  {
    icon: PiSealCheckFill,
    title: "Customer Approval",
    text: "We confirm that the service has been completed to the agreed standard before closing the job.",
    color: "#3d4a6b",
  },
];

export default function ProcessSectionFour() {
  return (
    <section className={styles.section} aria-labelledby="process-four-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <span className={styles.tagline}>Our Cleaning Process</span>
          <h2 className={styles.title} id="process-four-title">
            How Our Cleaning Service Works
          </h2>
        </div>

        <div className={styles.flow}>
          <svg
            className={styles.zigzag}
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 71,118 L 214,282 L 357,118 L 500,282 L 643,118 L 786,282 L 929,118"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="7 9"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((step, i) => {
            const isTop = i % 2 === 0;
            const Icon = step.icon;
            const accentStyle = { "--step-color": step.color } as CSSProperties;

            return (
              <div
                key={step.title}
                className={`${styles.node} ${isTop ? styles.nodeTop : styles.nodeBottom}`}
              >
                {isTop ? (
                  <>
                    <div className={styles.circleWrap} style={accentStyle}>
                      <span className={styles.circleOuter} aria-hidden />
                      <div className={styles.circleInner}>
                        <Icon aria-hidden />
                      </div>
                    </div>
                    <h3
                      className={styles.stepTitle}
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </>
                ) : (
                  <>
                    <h3
                      className={styles.stepTitle}
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className={styles.stepText}>{step.text}</p>
                    <div className={styles.circleWrap} style={accentStyle}>
                      <span className={styles.circleOuter} aria-hidden />
                      <div className={styles.circleInner}>
                        <Icon aria-hidden />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
