"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "@/components/process/ProcessSectionFour.module.css";
import local from "./CarpetProcessSection.module.css";
import {
  carpetProcessHubLabel,
  carpetProcessIntro,
  carpetProcessSteps,
  carpetProcessTitle,
  type CarpetProcessStep,
} from "./carpetProcessData";

type LineCoords = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type MobileConnector = {
  width: number;
  height: number;
  lineX: number;
  points: { y: number }[];
  segments: LineCoords[];
  fullPath: string;
};

const leftSteps = carpetProcessSteps.slice(0, 3);
const rightSteps = carpetProcessSteps.slice(3, 6);
const rowCount = 3;

function StepCard({
  step,
  index,
  side,
  cardRef,
  iconRef,
}: {
  step: CarpetProcessStep;
  index: number;
  side: "left" | "right";
  cardRef?: (el: HTMLElement | null) => void;
  iconRef?: (el: HTMLDivElement | null) => void;
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
      <div className={styles.cardIconWrap} ref={iconRef}>
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

export default function CarpetProcessSection() {
  const radialRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const hubRingRef = useRef<HTMLDivElement>(null);
  const mobileFlowRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLElement | null)[]>([]);
  const rightRefs = useRef<(HTMLElement | null)[]>([]);
  const mobileIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<LineCoords[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [mobileConnector, setMobileConnector] = useState<MobileConnector | null>(
    null,
  );

  const updateMobileConnector = () => {
    const flow = mobileFlowRef.current;
    if (!flow) return;

    const flowRect = flow.getBoundingClientRect();
    if (flowRect.width === 0) return;

    const icons = mobileIconRefs.current.filter(Boolean) as HTMLDivElement[];
    if (icons.length < 2) return;

    const lineX = 12;

    const points = icons.map((icon) => {
      const rect = icon.getBoundingClientRect();
      return { y: rect.top + rect.height / 2 - flowRect.top };
    });

    const segments: LineCoords[] = [];
    for (let i = 0; i < points.length - 1; i += 1) {
      segments.push({
        x1: lineX,
        y1: points[i].y,
        x2: lineX,
        y2: points[i + 1].y,
      });
    }

    const forwardPath = points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${lineX} ${point.y}`)
      .join(" ");
    const reversePath = [...points]
      .reverse()
      .slice(1)
      .map((point) => `L ${lineX} ${point.y}`)
      .join(" ");

    setMobileConnector({
      width: flowRect.width,
      height: flowRect.height,
      lineX,
      points,
      segments,
      fullPath: `${forwardPath} ${reversePath}`,
    });
  };

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

  useLayoutEffect(() => {
    updateMobileConnector();
    const raf = requestAnimationFrame(updateMobileConnector);

    const ro = new ResizeObserver(updateMobileConnector);
    if (mobileFlowRef.current) ro.observe(mobileFlowRef.current);

    window.addEventListener("resize", updateMobileConnector);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateMobileConnector);
    };
  }, []);

  const handleMobileIconRef =
    (index: number) => (el: HTMLDivElement | null) => {
      mobileIconRefs.current[index] = el;
      if (el) requestAnimationFrame(updateMobileConnector);
    };

  return (
    <section
      className={styles.section}
      id="carpet-cleaning-process"
      aria-labelledby="carpet-process-title"
    >
      <div className={styles.container}>
        <div className={`${styles.topHeader} ${local.topHeader}`}>
          <h2
            className={`${styles.title} ${local.title}`}
            id="carpet-process-title"
          >
            {carpetProcessTitle}
          </h2>
          <p className={local.intro}>{carpetProcessIntro}</p>
        </div>

        <div ref={radialRef} className={styles.desktopRadial}>
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
              <strong>{carpetProcessHubLabel}</strong>
            </div>
          </div>

          {Array.from({ length: rowCount }).map((_, row) => (
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
                {rightSteps[row] ? (
                  <StepCard
                    step={rightSteps[row]}
                    index={row + 3}
                    side="right"
                    cardRef={(el) => {
                      rightRefs.current[row] = el;
                    }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div ref={mobileFlowRef} className={styles.mobileFlow}>
          {mobileConnector && mobileConnector.width > 0 && (
            <svg
              className={styles.mobileConnectorSvg}
              width={mobileConnector.width}
              height={mobileConnector.height}
              aria-hidden
            >
              {mobileConnector.segments.map((line, i) => {
                const lineLen = Math.hypot(
                  line.x2 - line.x1,
                  line.y2 - line.y1,
                );
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
                  </g>
                );
              })}

              {mobileConnector.points.map((point, i) => (
                <circle
                  key={i}
                  cx={mobileConnector.lineX}
                  cy={point.y}
                  r={4}
                  className={styles.mobileNodeDot}
                />
              ))}

              <circle r={5.5} className={styles.connectorDot}>
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  path={mobileConnector.fullPath}
                />
              </circle>
            </svg>
          )}

          {carpetProcessSteps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
              side="right"
              iconRef={handleMobileIconRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
