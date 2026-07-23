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

  const panelBody = (tab: (typeof gutterFrequencyTabs)[number], Icon: typeof ActiveIcon) => (
    <>
      <div className={`${styles.panelTop} ${local.panelTop}`}>
        <div className={`${styles.media} ${local.media}`}>
          <img src={tab.image} alt="" loading="lazy" aria-hidden />
          <div className={styles.mediaGlow} aria-hidden />
          <div className={styles.content}>
            <div className={styles.mediaBadge}>
              <Icon aria-hidden />
              <strong>{tab.shortLabel}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={local.panelCopy}>
        <h3 className={local.panelTitle}>{tab.title}</h3>
        <p className={local.bestFor}>
          <span className={local.bestForLabel}>Best For</span>
          <span className={local.bestForText}>{tab.bestFor}</span>
        </p>
        <p className={local.panelIntro}>{tab.description}</p>
      </div>
    </>
  );

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

        {/* Desktop: side rail + panel */}
        <div className={`${styles.stage} ${local.stage} ${local.desktopStage}`}>
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
            {panelBody(active, ActiveIcon)}
          </div>
        </div>

        {/* Mobile: accordion — content + image with open tab */}
        <div className={local.mobileAccordion}>
          {gutterFrequencyTabs.map((tab, index) => {
            const Icon = tab.icon;
            const isOpen = activeTab === index;

            return (
              <div
                key={tab.id}
                className={`${local.accItem} ${isOpen ? local.accItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={`${styles.railBtn} ${local.accBtn} ${isOpen ? styles.railBtnActive : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`gutter-frequency-acc-${tab.id}`}
                  id={`gutter-frequency-acc-tab-${tab.id}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={`${styles.railIcon} ${local.railIcon}`} aria-hidden>
                    <Icon />
                  </span>
                  <span className={`${styles.railCopy} ${local.railCopy}`}>
                    <span className={styles.railLabel}>{tab.shortLabel}</span>
                  </span>
                </button>

                <div
                  id={`gutter-frequency-acc-${tab.id}`}
                  role="region"
                  aria-labelledby={`gutter-frequency-acc-tab-${tab.id}`}
                  className={`${local.accPanel} ${isOpen ? local.accPanelOpen : ""}`}
                  hidden={!isOpen}
                >
                  {isOpen ? panelBody(tab, Icon) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
