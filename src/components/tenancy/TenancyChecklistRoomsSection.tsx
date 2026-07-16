"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FaCheck } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistRoomsSection.module.css";

function getTaskGridStyle(itemCount: number): CSSProperties {
  return {
    "--split-rows": itemCount / 2,
  } as CSSProperties;
}

export default function TenancyChecklistRoomsSection() {
  const [checked, setChecked] = useState<Record<string, boolean[]>>(() => {
    const initial: Record<string, boolean[]> = {};
    tenancyChecklistTabs.forEach((tab) => {
      initial[tab.id] = new Array(tab.items.length).fill(false);
    });
    return initial;
  });

  const totalTasks = useMemo(
    () => tenancyChecklistTabs.reduce((sum, tab) => sum + tab.items.length, 0),
    []
  );

  const doneTotal = useMemo(
    () =>
      tenancyChecklistTabs.reduce(
        (sum, tab) => sum + (checked[tab.id] ?? []).filter(Boolean).length,
        0
      ),
    [checked]
  );

  const toggleItem = (roomId: string, itemIndex: number) => {
    setChecked((prev) => {
      const next = [...(prev[roomId] ?? [])];
      next[itemIndex] = !next[itemIndex];
      return { ...prev, [roomId]: next };
    });
  };

  const resetAll = () => {
    const reset: Record<string, boolean[]> = {};
    tenancyChecklistTabs.forEach((tab) => {
      reset[tab.id] = new Array(tab.items.length).fill(false);
    });
    setChecked(reset);
  };

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-rooms"
      aria-labelledby="tenancy-checklist-rooms-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>End of tenancy cleaning</span>
          <h2 className={styles.title} id="tenancy-checklist-rooms-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.roomList}>
          {tenancyChecklistTabs.map((room, index) => {
            const Icon = room.icon;
            const roomChecks = checked[room.id] ?? [];
            const done = roomChecks.filter(Boolean).length;
            const pct = Math.round((done / room.items.length) * 100);
            const isReverse = index % 2 === 1;

            return (
              <article
                key={room.id}
                className={`${styles.roomBlock} ${isReverse ? styles.roomBlockReverse : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.roomPhoto}>
                  <img src={room.image} alt="" loading="lazy" aria-hidden />
                  <div className={styles.roomPhotoTag}>
                    <span className={styles.roomPhotoIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span>{room.shortLabel}</span>
                  </div>
                </div>

                <div className={styles.roomInfo}>
                  <h3 className={styles.roomTitle}>{room.title}</h3>
                  <p className={styles.roomCount}>
                    {done} of {room.items.length} tasks completed · {pct}%
                  </p>

                  <div className={styles.progressTrack} aria-hidden>
                    <span
                      className={styles.progressFill}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <ul
                    className={`${styles.taskGrid} ${styles.taskGridSplit}`}
                    style={getTaskGridStyle(room.items.length)}
                  >
                    {room.items.map((item, itemIndex) => {
                      const isChecked = Boolean(roomChecks[itemIndex]);

                      return (
                        <li key={item}>
                          <button
                            type="button"
                            className={`${styles.taskRow} ${isChecked ? styles.taskRowChecked : ""}`}
                            style={{
                              animationDelay: `${itemIndex * 0.02}s`,
                            }}
                            onClick={() => toggleItem(room.id, itemIndex)}
                            aria-pressed={isChecked}
                          >
                            <span className={styles.checkbox} aria-hidden>
                              <FaCheck />
                            </span>
                            <span className={styles.taskText}>{item}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.footerBar}>
          <p className={styles.footerText}>
            <strong>{doneTotal}</strong> of <strong>{totalTasks}</strong> tasks
            completed across all rooms
          </p>
          <button type="button" className={styles.resetBtn} onClick={resetAll}>
            Reset all
          </button>
        </div>
      </div>
    </section>
  );
}
