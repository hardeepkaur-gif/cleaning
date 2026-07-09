"use client";

import { useState } from "react";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  servicesList,
  servicesTabsIntro,
  servicesTabsTitle,
} from "./servicesData";
import styles from "./ServicesTabsIcons.module.css";

const shapeBase = "/images/services/cleanon-tabs";

export default function ServicesTabsIcons() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className={styles.services}
      aria-labelledby="services-tabs-icons-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title} id="services-tabs-icons-title">
            {servicesTabsTitle}
          </h2>
          <p className={styles.intro}>{servicesTabsIntro}</p>
        </div>

        <div className={styles.inner}>
          <div className={styles.tabButtonsBox}>
            <ul className={styles.tabButtons} role="tablist">
              {servicesList.map((service, index) => {
                const isActive = activeTab === index;
                const Icon = service.tabIcon;
                return (
                  <li key={service.title} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`service-icons-tab-panel-${index}`}
                      id={`service-icons-tab-${index}`}
                      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className={styles.tabBtnInner}>
                        <span className={styles.tabIconWrap} aria-hidden>
                          <Icon className={styles.tabIconMain} />
                          <span className={styles.tabIconStar}>
                            <FaStar />
                          </span>
                        </span>
                        <span className={styles.tabHeading}>{service.title}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.tabContent}>
            {servicesList.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={service.title}
                  id={`service-icons-tab-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`service-icons-tab-${index}`}
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
                          {service.label} Service
                        </span>
                        <h3 className={styles.tabTitle}>{service.title}</h3>
                        <p className={styles.tabText}>{service.text}</p>
                        <div className={styles.btnBox}>
                          <ThmButton href={service.href}>
                            Learn More
                            <FaLongArrowAltRight aria-hidden />
                          </ThmButton>
                          <img
                            className={styles.shape1}
                            src={`${shapeBase}/services-three-shape-1.png`}
                            alt=""
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.tabBgImage}>
                      <span className={styles.imageBadge}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <img src={service.tabImage} alt={service.title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
