"use client";

import { useEffect, useState } from "react";
import {
  carpetServiceTabs,
  carpetServicesIntro,
  carpetServicesTagline,
  carpetServicesTitle,
} from "./carpetServicesData";
import styles from "@/components/tenancy/TenancyChecklistAltSection.module.css";
import local from "./CarpetServicesSection.module.css";

export default function CarpetServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const active = carpetServiceTabs[activeTab];
  const ActiveIcon = active.icon;

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <section
      className={styles.section}
      id="carpet-services"
      aria-labelledby="carpet-services-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.tagline}>{carpetServicesTagline}</p>
          <h2 className={styles.title} id="carpet-services-title">
            {carpetServicesTitle}
          </h2>
          <p className={styles.intro}>{carpetServicesIntro}</p>
        </header>

        <div className={local.tableWrap}>
          <table className={local.table}>
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Best For</th>
              </tr>
            </thead>
            <tbody>
              {carpetServiceTabs.map((tab, index) => (
                <tr
                  key={tab.id}
                  className={activeTab === index ? local.tableRowActive : ""}
                >
                  <td>
                    <button
                      type="button"
                      className={local.tableBtn}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.title}
                    </button>
                  </td>
                  <td>{tab.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`${styles.stage} ${local.stage}`}>
          <div
            className={`${styles.rail} ${local.rail}`}
            role="tablist"
            aria-label="Carpet cleaning services"
          >
            {carpetServiceTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="carpet-services-panel"
                  id={`carpet-services-tab-${tab.id}`}
                  className={`${styles.railBtn} ${local.railBtn} ${isActive ? styles.railBtnActive : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={`${styles.railIcon} ${local.railIcon}`} aria-hidden>
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
            id="carpet-services-panel"
            role="tabpanel"
            aria-labelledby={`carpet-services-tab-${active.id}`}
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
              <p className={local.panelIntro}>{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
