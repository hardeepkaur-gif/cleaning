"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  servicesList,
  servicesTabsTagline,
} from "./servicesData";
import styles from "./ServicesTabs.module.css";

const shapeBase = "/images/services/cleanon-tabs";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.services} aria-labelledby="services-tabs-title">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <div className={styles.taglineBox}>
            <span className={styles.taglineIcon} aria-hidden>
              <FaStar />
            </span>
            <span className={styles.tagline}>{servicesTabsTagline}</span>
          </div>
          <h2 className={styles.title} id="services-tabs-title">
            Shine Brighter with Our
            <br />
            Cleaning Services
          </h2>
        </div>

        <div className={styles.inner}>
          <div className={styles.tabButtonsBox}>
            <ul className={styles.tabButtons} role="tablist">
              {servicesList.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeTab === index;
                return (
                  <li key={service.title} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`service-tab-panel-${index}`}
                      id={`service-tab-${index}`}
                      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className={styles.tabBtnInner}>
                        <Icon className={styles.tabIcon} aria-hidden />
                        <span>
                          {service.tabLines[0]}
                          <br />
                          {service.tabLines[1]}
                        </span>
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
                  id={`service-tab-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${index}`}
                  hidden={!isActive}
                  className={`${styles.tabPanel} ${isActive ? styles.tabPanelActive : ""}`}
                >
                  <div className={styles.contentBox}>
                    <div className={styles.tabLeft}>
                      <div
                        className={styles.tabLeftBg}
                        style={{
                          backgroundImage: `url('${shapeBase}/services-three-tab-left-bg-shape.png')`,
                        }}
                        aria-hidden
                      />
                      <img
                        className={styles.shape1}
                        src={`${shapeBase}/services-three-shape-1.png`}
                        alt=""
                        aria-hidden
                      />
                      <img
                        className={styles.shape2}
                        src={`${shapeBase}/services-three-shape-2.png`}
                        alt=""
                        aria-hidden
                      />
                      <h3 className={styles.tabTitle}>{service.title}</h3>
                      <p className={styles.tabText}>{service.text}</p>
                      <div className={styles.btnBox}>
                        <ThmButton href={service.href} hoverVariant="white">
                          Learn More
                        </ThmButton>
                      </div>
                    </div>
                    <div
                      className={styles.tabBgImage}
                      style={{ backgroundImage: `url('${service.tabImage}')` }}
                      aria-hidden
                    />
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
