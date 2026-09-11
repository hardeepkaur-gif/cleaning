"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import defaultStyles from "./CaseStudyV2.module.css";

type SliderStyles = {
  slider: string;
  sliderAfter: string;
  sliderBeforeWrap: string;
  sliderBefore: string;
  sliderBadgeBefore: string;
  sliderBadgeAfter: string;
  sliderHandle: string;
  sliderLine: string;
  sliderKnob: string;
  sliderRange: string;
};

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  styles?: SliderStyles;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  styles = defaultStyles,
  className,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const sync = () => setTrackWidth(el.getBoundingClientRect().width);
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, next)));
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      className={[styles.slider, className].filter(Boolean).join(" ")}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label="Before and after comparison slider"
    >
      <img className={styles.sliderAfter} src={afterSrc} alt={afterAlt} />
      <div
        className={styles.sliderBeforeWrap}
        style={{ width: `${position}%` }}
      >
        <img
          className={styles.sliderBefore}
          src={beforeSrc}
          alt={beforeAlt}
          style={{ width: trackWidth ? `${trackWidth}px` : "100%" }}
        />
      </div>
      <span className={styles.sliderBadgeBefore}>{beforeLabel}</span>
      <span className={styles.sliderBadgeAfter}>{afterLabel}</span>
      <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
        <span className={styles.sliderLine} />
        <span className={styles.sliderKnob} aria-hidden>
          ‹ ›
        </span>
      </div>
      <input
        className={styles.sliderRange}
        type="range"
        min={2}
        max={98}
        value={position}
        aria-label="Adjust before and after comparison"
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}
