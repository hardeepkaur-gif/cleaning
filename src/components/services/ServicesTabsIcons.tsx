"use client";

import { useState } from "react";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  servicesList,
  servicesTabsIntro,
  servicesTabsTitle,
  type ServiceData,
} from "./servicesData";
import styles from "./ServicesTabsIcons.module.css";

const shapeBase = "/images/services/cleanon-tabs";

function ServiceTabButton({
  service,
  index,
  isActive,
  onSelect,
  idPrefix,
  panelIdPrefix,
}: {
  service: ServiceData;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  idPrefix: string;
  panelIdPrefix: string;
}) {
  const Icon = service.tabIcon;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`${panelIdPrefix}-${index}`}
      id={`${idPrefix}-${index}`}
      className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
      onClick={onSelect}
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
  );
}

function ServicePanelContent({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  return (
    <div className={styles.contentBox}>
      <div
        className={styles.tabLeftBg}
        style={{
          backgroundImage: `url('${shapeBase}/services-three-tab-left-bg-shape.png')`,
        }}
        aria-hidden
      />
      <div className={styles.tabLeft}>
        <div className={styles.tabLeftInner}>
          <div className={styles.tabHead}>
            <div className={styles.tabHeadText}>
              <span className={styles.tabLabel}>{service.label} Service</span>
              <h3 className={styles.tabTitle}>{service.title}</h3>
            </div>
            <img
              className={styles.shape2}
              src={`${shapeBase}/services-three-shape-2.png`}
              alt=""
              aria-hidden
            />
          </div>
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
  );
}

export default function ServicesTabsIcons() {
  const [activeTab, setActiveTab] = useState(0);

  const desktopTabId = "service-icons-tab";
  const desktopPanelId = "service-icons-tab-panel";
  const mobileTabId = "service-icons-mobile-tab";
  const mobilePanelId = "service-icons-mobile-tab-panel";

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

        <div className={`${styles.inner} ${styles.innerDesktop}`}>
          <div className={styles.tabButtonsBox}>
            <ul className={styles.tabButtons} role="tablist">
              {servicesList.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <li key={service.title} role="presentation">
                    <ServiceTabButton
                      service={service}
                      index={index}
                      isActive={isActive}
                      onSelect={() => setActiveTab(index)}
                      idPrefix={desktopTabId}
                      panelIdPrefix={desktopPanelId}
                    />
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
                  id={`${desktopPanelId}-${index}`}
                  role="tabpanel"
                  aria-labelledby={`${desktopTabId}-${index}`}
                  hidden={!isActive}
                  className={`${styles.tabPanel} ${isActive ? styles.tabPanelActive : ""}`}
                >
                  <ServicePanelContent service={service} index={index} />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${styles.inner} ${styles.innerMobile}`}
          role="tablist"
          aria-label={servicesTabsTitle}
        >
          {servicesList.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <div key={service.title} className={styles.mobileItem}>
                <ServiceTabButton
                  service={service}
                  index={index}
                  isActive={isActive}
                  onSelect={() => setActiveTab(index)}
                  idPrefix={mobileTabId}
                  panelIdPrefix={mobilePanelId}
                />
                {isActive ? (
                  <div
                    id={`${mobilePanelId}-${index}`}
                    role="tabpanel"
                    aria-labelledby={`${mobileTabId}-${index}`}
                    className={styles.mobilePanel}
                  >
                    <ServicePanelContent service={service} index={index} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
