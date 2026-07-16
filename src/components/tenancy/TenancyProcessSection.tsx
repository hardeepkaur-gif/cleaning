"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  PiCameraDuotone,
  PiChatCircleDuotone,
  PiCurrencyGbpDuotone,
  PiHouseLineDuotone,
  PiSealCheckDuotone,
  PiSprayBottleDuotone,
} from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/process/ProcessSectionFour.module.css";
import local from "./TenancyProcessSection.module.css";

type ProcessStep = {
  icon: IconType;
  title: string;
  text: string;
  accent: "primary" | "cta";
};

type LineCoords = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const steps: ProcessStep[] = [
  {
    icon: PiChatCircleDuotone,
    title: "Book Your Cleaning Appointment",
    text: "Contact our team by phone, email or online enquiry form and let us know your preferred cleaning date, property type and location.",
    accent: "primary",
  },
  {
    icon: PiHouseLineDuotone,
    title: "Confirm Property Details",
    text: "We gather the information needed to prepare your quote, including the number of bedrooms, bathrooms, property condition and any additional cleaning requirements.",
    accent: "cta",
  },
  {
    icon: PiCurrencyGbpDuotone,
    title: "Receive Fixed Pricing",
    text: "Once we have reviewed your requirements, we provide a fixed quotation with no hidden fees, allowing you to know exactly what to expect before booking.",
    accent: "primary",
  },
  {
    icon: PiSprayBottleDuotone,
    title: "Professional Cleaning Visit",
    text: "Our DBS-checked and insured cleaners arrive fully equipped and complete the end of tenancy clean using a detailed room-by-room checklist and eco-friendly cleaning products.",
    accent: "cta",
  },
  {
    icon: PiSealCheckDuotone,
    title: "Final Quality Check",
    text: "Before the service is completed, we carry out a final review to ensure all agreed areas have been cleaned and prepared for handover, inspections or new occupants.",
    accent: "primary",
  },
  {
    icon: PiCameraDuotone,
    title: "Completion Photos & Handover Ready",
    text: "Where needed, we share completion photos and confirm the property is ready for landlord checks, inventory appointments or the next occupants moving in.",
    accent: "cta",
  },
];

const leftSteps = steps.slice(0, 3);
const rightSteps = steps.slice(3, 6);

function StepCard({
  step,
  index,
  side,
  cardRef,
}: {
  step: ProcessStep;
  index: number;
  side: "left" | "right";
  cardRef?: (el: HTMLElement | null) => void;
}) {
  const Icon = step.icon;

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${side === "left" ? styles.cardLeft : styles.cardRight}`}
      style={
        {
          "--step-accent":
            step.accent === "primary" ? "var(--primary)" : "var(--cta)",
        } as CSSProperties
      }
    >
      <div className={styles.cardIconWrap}>
        <span className={styles.cardIconArc} aria-hidden />
        <span className={styles.cardIcon}>
          <Icon aria-hidden />
        </span>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardNum}>
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <span className={styles.stepLine} aria-hidden />
        <p className={styles.stepText}>{step.text}</p>
      </div>
    </article>
  );
}

export default function TenancyProcessSection() {
  const radialRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const hubRingRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLElement | null)[]>([]);
  const rightRefs = useRef<(HTMLElement | null)[]>([]);
  const [lines, setLines] = useState<LineCoords[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateLines = () => {
      const radial = radialRef.current;
      const hub = hubRef.current;
      const hubRing = hubRingRef.current;
      if (!radial || !hub || !hubRing) return;

      const radialRect = radial.getBoundingClientRect();
      if (radialRect.width === 0) return;

      setSvgSize({ width: radialRect.width, height: radialRect.height });

      const hubRect = hub.getBoundingClientRect();
      const ringRect = hubRing.getBoundingClientRect();
      const hubCx = hubRect.left + hubRect.width / 2 - radialRect.left;
      const hubCy = hubRect.top + hubRect.height / 2 - radialRect.top;
      const hubBorderR = ringRect.width / 2;

      const calcLine = (cardEl: HTMLElement, side: "left" | "right") => {
        const rect = cardEl.getBoundingClientRect();
        const targetX =
          side === "left"
            ? rect.right - radialRect.left
            : rect.left - radialRect.left;
        const targetY = rect.top + rect.height / 2 - radialRect.top;

        const angle = Math.atan2(targetY - hubCy, targetX - hubCx);
        const x1 = hubCx + hubBorderR * Math.cos(angle);
        const y1 = hubCy + hubBorderR * Math.sin(angle);

        return { x1, y1, x2: targetX, y2: targetY };
      };

      const newLines: LineCoords[] = [];

      leftRefs.current.forEach((cardEl) => {
        if (!cardEl) return;
        newLines.push(calcLine(cardEl, "left"));
      });

      rightRefs.current.forEach((cardEl) => {
        if (!cardEl) return;
        newLines.push(calcLine(cardEl, "right"));
      });

      setLines(newLines);
    };

    updateLines();
    const raf = requestAnimationFrame(updateLines);

    const ro = new ResizeObserver(updateLines);
    if (radialRef.current) ro.observe(radialRef.current);

    window.addEventListener("resize", updateLines);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateLines);
    };
  }, []);

  return (
    <section
      className={styles.section}
      id="tenancy-how-it-works"
      aria-labelledby="tenancy-process-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="tenancy-process-title">
            How Our End of Tenancy Cleaning Service Works
          </h2>
        </div>

        <div ref={radialRef} className={styles.radial}>
          {svgSize.width > 0 && (
            <svg
              className={styles.connectorSvg}
              width={svgSize.width}
              height={svgSize.height}
              aria-hidden
            >
              {lines.map((line, i) => {
                const lineLen = Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
                const delay = i * 0.4;

                return (
                  <g key={i}>
                    <line
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      className={styles.connectorPath}
                    />
                    <line
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      className={styles.connectorPathActive}
                      style={
                        {
                          "--line-len": lineLen,
                          "--line-delay": `${delay}s`,
                        } as CSSProperties
                      }
                    />
                    <circle r={5.5} className={styles.connectorDot}>
                      <animate
                        attributeName="cx"
                        values={`${line.x2};${line.x1};${line.x2}`}
                        dur="3s"
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        values={`${line.y2};${line.y1};${line.y2}`}
                        dur="3s"
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>
          )}

          <div ref={hubRef} className={styles.hub}>
            <div ref={hubRingRef} className={styles.hubRingSpin} aria-hidden>
              <div className={styles.hubRing} />
            </div>
            <div className={styles.hubCore}>
              <strong>End of Tenancy Process</strong>
            </div>
          </div>

          {[0, 1, 2].map((row) => (
            <div key={row} className={styles.processRow}>
              <div className={styles.sideLeft}>
                <StepCard
                  step={leftSteps[row]}
                  index={row}
                  side="left"
                  cardRef={(el) => {
                    leftRefs.current[row] = el;
                  }}
                />
              </div>
              <div className={styles.sideRight}>
                <StepCard
                  step={rightSteps[row]}
                  index={row + 3}
                  side="right"
                  cardRef={(el) => {
                    rightRefs.current[row] = el;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={local.ctaWrap}>
          <ThmButton href="/#contact" className={local.ctaBtn}>
            <FaPhoneAlt aria-hidden />
            Contact Our Vetted Team Now!
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
