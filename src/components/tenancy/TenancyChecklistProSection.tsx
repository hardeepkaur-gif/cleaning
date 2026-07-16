"use client";

import { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistNote,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistProSection.module.css";

export default function TenancyChecklistProSection() {
  const [openId, setOpenId] = useState(tenancyChecklistTabs[0]?.id ?? "");

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-pro"
      aria-labelledby="tenancy-checklist-pro-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Room-by-room coverage</p>
          <h2 className={styles.title} id="tenancy-checklist-pro-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.list}>
          {tenancyChecklistTabs.map((tab, index) => {
            const Icon = tab.icon;
            const isOpen = openId === tab.id;

            return (
              <article
                key={tab.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`checklist-pro-panel-${tab.id}`}
                  id={`checklist-pro-trigger-${tab.id}`}
                  onClick={() => setOpenId(isOpen ? "" : tab.id)}
                >
                  <span className={styles.num} aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.triggerMain}>
                    <span className={styles.triggerIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.triggerCopy}>
                      <span className={styles.triggerTitle}>{tab.title}</span>
                      <span className={styles.triggerMeta}>
                        {tab.items.length} inspection points
                      </span>
                    </span>
                  </span>

                  <span className={styles.toggle} aria-hidden>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  id={`checklist-pro-panel-${tab.id}`}
                  role="region"
                  aria-labelledby={`checklist-pro-trigger-${tab.id}`}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <div className={styles.panelInner}>
                    <div className={styles.media}>
                      <img
                        src={tab.image}
                        alt=""
                        loading="lazy"
                        aria-hidden
                      />
                    </div>

                    <ul className={styles.checklist}>
                      {tab.items.map((item) => (
                        <li key={item}>
                          <FaCheck className={styles.check} aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>{tenancyChecklistNote}</p>
      </div>
    </section>
  );
}
