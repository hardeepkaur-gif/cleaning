"use client";

import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistNote,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistAccordionSection.module.css";

const roomDescriptions: Record<string, string> = {
  kitchen:
    "Worktops, cupboards, appliances and floors — the areas landlords inspect closest.",
  bathroom:
    "Toilets, baths, showers and tiles cleaned and sanitised for inspection.",
  bedroom:
    "Dusting, wardrobes, skirting and floors prepared for a clean handover.",
  "living-room":
    "Furniture, surfaces, glass and floors refreshed for inventory checks.",
  hallway:
    "Entrance doors, bannisters, floors and high-touch areas cleared and cleaned.",
};

const accentClass = [
  styles.accentTeal,
  styles.accentCoral,
  styles.accentSage,
  styles.accentAmber,
  styles.accentMint,
] as const;

export default function TenancyChecklistAccordionSection() {
  const [openId, setOpenId] = useState<string | null>(
    tenancyChecklistTabs[0]?.id ?? null,
  );

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-accordion"
      aria-labelledby="tenancy-checklist-accordion-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>          <h2 className={styles.title} id="tenancy-checklist-accordion-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.shell}>
          {tenancyChecklistTabs.map((tab, index) => {
            const Icon = tab.icon;
            const isOpen = openId === tab.id;
            const accent = accentClass[index % accentClass.length];
            const panelId = `checklist-accordion-panel-${tab.id}`;
            const triggerId = `checklist-accordion-trigger-${tab.id}`;

            return (
              <div
                key={tab.id}
                className={`${styles.item} ${accent} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  id={triggerId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : tab.id)}
                >
                  <span className={styles.triggerMain}>
                    <span className={styles.index} aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={styles.iconWrap}
                      role="img"
                      aria-label={tab.iconAlt}
                    >
                      <Icon aria-hidden />
                    </span>
                    <span className={styles.triggerCopy}>
                      <span className={styles.roomName}>{tab.shortLabel}</span>
                      <span className={styles.roomDesc}>
                        {roomDescriptions[tab.id] ??
                          `${tab.items.length} task checklist`}
                      </span>
                    </span>
                  </span>

                  <span className={styles.triggerAside}>
                    <span className={styles.taskBadge}>
                      {tab.items.length} tasks
                    </span>
                    <span className={styles.toggle} aria-hidden>
                      {isOpen ? <FaTimes /> : <FaPlus />}
                    </span>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <div className={styles.panelInner}>
                    <ul className={styles.checklist}>
                      {tab.items.map((item) => (
                        <li key={item}>
                          <span className={styles.check} aria-hidden>
                            <FaCheck />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.note}>{tenancyChecklistNote}</p>
      </div>
    </section>
  );
}
