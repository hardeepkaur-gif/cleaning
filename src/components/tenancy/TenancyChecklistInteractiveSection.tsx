"use client";

import { useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistInteractiveSection.module.css";

export default function TenancyChecklistInteractiveSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean[]>>(() => {
    const initial: Record<string, boolean[]> = {};
    tenancyChecklistTabs.forEach((tab) => {
      initial[tab.id] = new Array(tab.items.length).fill(false);
    });
    return initial;
  });

  const active = tenancyChecklistTabs[activeTab];
  const ActiveIcon = active.icon;
  const activeChecks = checked[active.id] ?? [];
  const doneCount = useMemo(
    () => activeChecks.filter(Boolean).length,
    [activeChecks]
  );

  const toggleItem = (itemIndex: number) => {
    setChecked((prev) => {
      const next = [...(prev[active.id] ?? [])];
      next[itemIndex] = !next[itemIndex];
      return { ...prev, [active.id]: next };
    });
  };

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-interactive"
      aria-labelledby="tenancy-checklist-interactive-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>End of tenancy cleaning</span>
          <h2
            className={styles.title}
            id="tenancy-checklist-interactive-title"
          >
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div
              className={styles.tabRail}
              role="tablist"
              aria-label="Room checklist"
            >
              {tenancyChecklistTabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;
                const done = (checked[tab.id] ?? []).filter(Boolean).length;

                return (
                  <div key={tab.id} className={styles.tabBlock}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="checklist-interactive-panel"
                      id={`checklist-interactive-tab-${tab.id}`}
                      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className={styles.tabIcon} aria-hidden>
                        <Icon />
                      </span>
                      <span className={styles.tabCopy}>
                        <span className={styles.tabLabel}>{tab.shortLabel}</span>
                        <span className={styles.tabCount}>
                          {done}/{tab.items.length}
                        </span>
                      </span>
                    </button>

                    {isActive && (
                      <div className={styles.sideMedia} key={tab.id}>
                        <img
                          src={tab.image}
                          alt=""
                          loading="lazy"
                          aria-hidden
                        />
                        <div className={styles.sideMediaOverlay} aria-hidden />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          <div
            id="checklist-interactive-panel"
            role="tabpanel"
            aria-labelledby={`checklist-interactive-tab-${active.id}`}
            className={styles.content}
            key={active.id}
          >
            <div className={styles.contentHeader}>
              <div className={styles.contentIcon} aria-hidden>
                <ActiveIcon />
              </div>
              <div>
                <h3 className={styles.contentTitle}>{active.title}</h3>
                <p className={styles.contentSub}>
                  {doneCount} of {active.items.length} tasks completed
                </p>
              </div>
            </div>

            <ul
              className={`${styles.taskGrid} ${
                active.items.length === 10 ? styles.taskGridSplit : ""
              }`}
            >
              {active.items.map((item, index) => {
                const isChecked = Boolean(activeChecks[index]);

                return (
                  <li key={item}>
                    <button
                      type="button"
                      className={`${styles.taskRow} ${isChecked ? styles.taskRowChecked : ""}`}
                      style={{ animationDelay: `${index * 0.025}s` }}
                      onClick={() => toggleItem(index)}
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
        </div>
      </div>
    </section>
  );
}
