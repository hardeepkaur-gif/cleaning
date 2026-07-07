"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import styles from "./ProcessSectionFour.module.css";

type ProcessStep = {
  title: string;
  text: string;
  img: string;
  /* position of the circle centre on the road, in % of the road canvas */
  left: number;
  top: number;
  /* where the text sits relative to the circle */
  labelSide?: "bottom" | "right";
  /* keep the title on a single line */
  wideTitle?: boolean;
};

/* Row Y positions (% of the road canvas) */
const ROW_TOP = 24;
const ROW_BOTTOM = 72;

const steps: ProcessStep[] = [
  {
    title: "Request a Quote",
    text: "Tell us about your property, service requirements, and preferred appointment date.",
    img: "/images/services/cleanon/services-2-1.jpg",
    left: 27,
    top: ROW_TOP,
  },
  {
    title: "Confirm Property Details",
    text: "We review the property size, condition, and cleaning requirements before preparing your quotation.",
    img: "/images/why/cleanon/why-choose-one-img-1.jpg",
    left: 47,
    top: ROW_TOP,
    wideTitle: true,
  },
  {
    title: "Receive Fixed Pricing",
    text: "A clear fixed-price quotation is provided before any booking is confirmed.",
    img: "/images/services/cleanon/services-2-2.jpg",
    left: 67,
    top: ROW_TOP,
  },
  {
    title: "Book Your Appointment",
    text: "Choose a suitable date and time for your cleaning service.",
    img: "/images/about/cleanon/about-three-img-1.jpg",
    left: 81,
    top: 48,
    labelSide: "right",
  },
  {
    title: "Professional Cleaning Visit",
    text: "Our trained cleaners attend the property and complete the agreed cleaning checklist.",
    img: "/images/services/cleanon-tabs/services-three-tab-img-1.jpg",
    left: 67,
    top: ROW_BOTTOM,
  },
  {
    title: "Completion Photos and Quality Check",
    text: "Completed work is reviewed against service standards and supported with completion photography where applicable.",
    img: "/images/services/cleanon/services-2-3.jpg",
    left: 47,
    top: ROW_BOTTOM,
  },
  {
    title: "Customer Approval",
    text: "We confirm that the service has been completed to the agreed standard before closing the job.",
    img: "/images/why/cleanon/why-choose-one-img-2.jpg",
    left: 27,
    top: ROW_BOTTOM,
  },
];

export default function ProcessSectionFour() {
  /* Sequence: 0 = START, 1..steps.length = steps, steps.length + 1 = FINISH */
  const total = steps.length + 2;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 1500);
    return () => clearInterval(id);
  }, [total]);

  const startActive = active === 0;
  const finishActive = active === steps.length + 1;

  return (
    <section className={styles.section} aria-labelledby="process-four-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <span className={styles.tagline}>Our Cleaning Process</span>
          <h2 className={styles.title} id="process-four-title">
            How Our Cleaning Service Works
          </h2>
        </div>

        <div className={styles.roadWrap}>
          {/* Winding road — two rows */}
          <svg
            className={styles.road}
            viewBox="0 0 1000 420"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className={styles.roadBase}
              d="M 70,100 L 750,100 C 830,100 830,302 750,302 L 70,302"
            />
            <path
              className={styles.roadLine}
              d="M 70,100 L 750,100 C 830,100 830,302 750,302 L 70,302"
            />
          </svg>

          {/* START cap */}
          <div
            className={`${styles.cap} ${styles.capStart} ${
              startActive ? styles.capActive : ""
            }`}
            style={{ left: "7%", top: "24%" }}
          >
            <span>Start</span>
          </div>

          {/* FINISH cap */}
          <div
            className={`${styles.cap} ${styles.capFinish} ${
              finishActive ? styles.capActive : ""
            }`}
            style={{ left: "7%", top: "72%" }}
          >
            <span>Finish</span>
          </div>

          {/* Step nodes */}
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`${styles.node} ${
                step.labelSide === "right" ? styles.nodeRight : ""
              } ${step.wideTitle ? styles.nodeWide : ""} ${
                active === i + 1 ? styles.nodeActive : ""
              }`}
              style={
                {
                  left: `${step.left}%`,
                  top: `${step.top}%`,
                } as CSSProperties
              }
            >
              <span className={styles.badge}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.circle}>
                <img src={step.img} alt="" loading="lazy" aria-hidden />
              </div>
              <div className={styles.label}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
