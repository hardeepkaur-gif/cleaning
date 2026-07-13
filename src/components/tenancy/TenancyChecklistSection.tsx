"use client";

import { useState } from "react";
import { FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistNote,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistSection.module.css";

const shapeBase = "/images/services/cleanon-tabs";

export default function TenancyChecklistSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className={styles.section}
      id="tenancy-checklist"
      aria-labelledby="tenancy-checklist-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="tenancy-checklist-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </div>

        <div className={styles.inner}>
          <div className={styles.tabButtonsBox}>
            <ul className={styles.tabButtons} role="tablist">
              {tenancyChecklistTabs.map((tab, index) => {
                const isActive = activeTab === index;
                const Icon = tab.icon;

                return (
                  <li key={tab.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`checklist-tab-panel-${index}`}
                      id={`checklist-tab-${index}`}
                      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className={styles.tabBtnInner}>
                        <span className={styles.tabIconWrap} aria-hidden>
                          <Icon className={styles.tabIconMain} />
                          <span className={styles.tabIconBadge}>
                            <FaClipboardCheck />
                          </span>
                        </span>
                        <span className={styles.tabHeading}>{tab.title}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.tabContent}>
            {tenancyChecklistTabs.map((tab, index) => {
              const isActive = activeTab === index;

              return (
                <div
                  key={tab.id}
                  id={`checklist-tab-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`checklist-tab-${index}`}
                  hidden={!isActive}
                  className={`${styles.tabPanel} ${isActive ? styles.tabPanelActive : ""}`}
                >
                  <div className={styles.contentBox}>
                    <div
                      className={styles.tabLeftBg}
                      style={{
                        backgroundImage: `url('${shapeBase}/services-three-tab-left-bg-shape.png')`,
                      }}
                      aria-hidden
                    />

                    <div className={styles.tabLeft}>
                      <img
                        className={styles.shape2}
                        src={`${shapeBase}/services-three-shape-2.png`}
                        alt=""
                        aria-hidden
                      />

                      <div className={styles.tabLeftInner}>
                        <span className={styles.tabLabel}>
                          {tab.label} Checklist
                        </span>
                        <h3 className={styles.tabTitle}>{tab.title}</h3>

                        <ul className={styles.checklist}>
                          {tab.items.map((item) => (
                            <li key={item}>
                              <FaCheckCircle
                                className={styles.checkIcon}
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <img
                          className={styles.shape1}
                          src={`${shapeBase}/services-three-shape-1.png`}
                          alt=""
                          aria-hidden
                        />
                      </div>
                    </div>

                    <div className={styles.tabBgImage}>
                      <span className={styles.imageBadge}>
                        {tab.items.length}
                      </span>
                      <img src={tab.image} alt={tab.title} loading="lazy" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className={styles.note}>{tenancyChecklistNote}</p>
      </div>
    </section>
  );
}
