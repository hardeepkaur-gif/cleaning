"use client";

import { useEffect, useState } from "react";
import {
  gutterFrequencyIntro,
  gutterFrequencyTabs,
  gutterFrequencyTagline,
  gutterFrequencyTitle,
} from "./gutterFrequencyData";
import styles from "@/components/tenancy/TenancyChecklistAltSection.module.css";
import local from "./GutterFrequencySection.module.css";

export default function GutterFrequencySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const active = gutterFrequencyTabs[activeTab];
  const ActiveIcon = active.icon;

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <section
      className={styles.section}
      id="gutter-cleaning-frequency"
      aria-labelledby="gutter-frequency-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={`${styles.header} ${local.header}`}>
          <p className={styles.tagline}>{gutterFrequencyTagline}</p>
          <h2 className={styles.title} id="gutter-frequency-title">
            {gutterFrequencyTitle}
          </h2>
          <p className={`${styles.intro} ${local.intro}`}>{gutterFrequencyIntro}</p>
        </header>

        <div className={`${styles.stage} ${local.stage}`}>
          <div
            className={`${styles.rail} ${local.rail}`}
            role="tablist"
            aria-label="Gutter cleaning frequency guide"
          >
            {gutterFrequencyTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gutter-frequency-panel"
                  id={`gutter-frequency-tab-${tab.id}`}
                  className={`${styles.railBtn} ${local.railBtn} ${isActive ? styles.railBtnActive : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span
                    className={`${styles.railIcon} ${local.railIcon}`}
                    aria-hidden
                  >
                    <Icon />
                  </span>
                  <span className={`${styles.railCopy} ${local.railCopy}`}>
                    <span className={styles.railLabel}>{tab.shortLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="gutter-frequency-panel"
            role="tabpanel"
            aria-labelledby={`gutter-frequency-tab-${active.id}`}
            className={`${styles.panel} ${local.panel}`}
            key={animateKey}
          >
            <div className={`${styles.panelTop} ${local.panelTop}`}>
              <div className={styles.media}>
                <img src={active.image} alt="" loading="lazy" aria-hidden />
                <div className={styles.mediaGlow} aria-hidden />
                <div className={styles.content}>
                  <div className={styles.mediaBadge}>
                    <ActiveIcon aria-hidden />
                    <strong>{active.shortLabel}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.contentMobile}>
                <div className={styles.mediaBadge}>
                  <ActiveIcon aria-hidden />
                  <strong>{active.shortLabel}</strong>
                </div>
              </div>
            </div>

            <div className={local.panelCopy}>
              <h3 className={local.panelTitle}>{active.title}</h3>
              <p className={local.bestFor}>
                <span className={local.bestForLabel}>Best For</span>
                <span className={local.bestForText}>{active.bestFor}</span>
              </p>
              <p className={local.panelIntro}>{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
