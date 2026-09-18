"use client";

import { useEffect, useState } from "react";
import {
  carpetFrequencyColumns,
  carpetFrequencyIntro,
  carpetFrequencyNeedHigh,
  carpetFrequencyNeedLow,
  carpetFrequencyTitleAccent,
  carpetFrequencyTitleBefore,
} from "./carpetFrequencyData";
import styles from "./CarpetFrequencySection.module.css";

const STEP_COUNT = carpetFrequencyColumns.length;
const STEP_MS = 750;
const HOLD_MS = 1400;

export default function CarpetFrequencySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActiveIndex(STEP_COUNT - 1);
      return;
    }

    let cancelled = false;
    let timer: number | undefined;

    const advance = (index: number) => {
      if (cancelled) return;

      setActiveIndex(index);

      if (index < STEP_COUNT - 1) {
        timer = window.setTimeout(() => advance(index + 1), STEP_MS);
        return;
      }

      timer = window.setTimeout(() => advance(0), HOLD_MS);
    };

    advance(0);

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const progress = STEP_COUNT <= 1 ? 100 : (activeIndex / (STEP_COUNT - 1)) * 100;

  return (
    <section
      className={styles.section}
      id="carpet-cleaning-frequency"
      aria-labelledby="carpet-frequency-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="carpet-frequency-title">
            {carpetFrequencyTitleBefore}
            <span className={styles.titleAccent}>{carpetFrequencyTitleAccent}</span>
          </h2>
          <p className={styles.intro}>{carpetFrequencyIntro}</p>
        </header>

        <div className={styles.guide}>
          <div className={styles.needRow}>
            <span className={styles.needLow}>{carpetFrequencyNeedLow}</span>
            <span className={styles.needHigh}>{carpetFrequencyNeedHigh}</span>
          </div>

          <div className={styles.trackArea}>
            <div className={styles.spectrumLine} aria-hidden>
              <span className={styles.spectrumTrack} />
              <span
                className={styles.spectrumFill}
                style={{ width: `${progress}%` }}
              />
            </div>

            <ol className={styles.columns}>
              {carpetFrequencyColumns.map((row, index) => {
                const Icon = row.icon;
                const isActive = index <= activeIndex;
                const isCurrent = index === activeIndex;

                return (
                  <li
                    key={row.id}
                    className={`${styles.column}${isActive ? ` ${styles.columnActive}` : ""}${
                      isCurrent ? ` ${styles.columnCurrent}` : ""
                    }`}
                  >
                    <span
                      className={`${styles.node}${isActive ? ` ${styles.nodeActive}` : ""}${
                        isCurrent ? ` ${styles.nodeCurrent}` : ""
                      }${row.accent === "coral" ? ` ${styles.nodeCoral}` : ""}`}
                      aria-hidden
                    >
                      <span className={styles.nodeDot} />
                    </span>

                    <span
                      className={`${styles.freqBadge}${
                        row.accent === "coral" ? ` ${styles.freqBadgeCoral}` : ""
                      }`}
                    >
                      {row.frequency}
                    </span>

                    <span
                      className={styles.iconWrap}
                      role="img"
                      aria-label={row.iconAlt}
                    >
                      <Icon aria-hidden />
                    </span>

                    <h3 className={styles.columnTitle}>{row.title}</h3>
                    <p className={styles.columnText}>{row.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
