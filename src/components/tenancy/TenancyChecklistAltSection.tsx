"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistNote,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistAltSection.module.css";

export default function TenancyChecklistAltSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const active = tenancyChecklistTabs[activeTab];
  const ActiveIcon = active.icon;

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-alt"
      aria-labelledby="tenancy-checklist-alt-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.tagline}>Room-by-Room Guide</p>
          <h2 className={styles.title} id="tenancy-checklist-alt-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.stage}>
          <div className={styles.rail} role="tablist" aria-label="Room checklist">
            {tenancyChecklistTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="checklist-alt-panel"
                  id={`checklist-alt-tab-${tab.id}`}
                  className={`${styles.railBtn} ${isActive ? styles.railBtnActive : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={styles.railIcon} aria-hidden>
                    <Icon />
                  </span>
                  <span className={styles.railCopy}>
                    <span className={styles.railLabel}>{tab.shortLabel}</span>
                    <span className={styles.railMeta}>{tab.items.length} tasks</span>
                  </span>
                  <span className={styles.railIndex} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="checklist-alt-panel"
            role="tabpanel"
            aria-labelledby={`checklist-alt-tab-${active.id}`}
            className={styles.panel}
            key={animateKey}
          >
            <div className={styles.media}>
              <img src={active.image} alt="" loading="lazy" aria-hidden />
              <div className={styles.mediaGlow} aria-hidden />
              <div className={styles.mediaBadge}>
                <ActiveIcon aria-hidden />
                <div>
                  <strong>{active.shortLabel}</strong>
                  <span>{active.items.length} checklist items</span>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.contentHead}>
                <h3>{active.title}</h3>
                <p>Inspection-focused points for this area of the property.</p>
              </div>

              <ul className={styles.checklist}>
                {active.items.map((item, index) => (
                  <li
                    key={item}
                    className={styles.checkItem}
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    <span className={styles.checkMark} aria-hidden>
                      <FaCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.note}>{tenancyChecklistNote}</p>
      </div>
    </section>
  );
}
