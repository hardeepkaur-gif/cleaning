"use client";

import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import {
  tenancyChecklistIntro,
  tenancyChecklistTabs,
  tenancyChecklistTitle,
} from "./tenancyChecklistData";
import styles from "./TenancyChecklistCardsSection.module.css";

const PREVIEW_COUNT = 4;

export default function TenancyChecklistCardsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className={styles.section}
      id="tenancy-checklist-cards"
      aria-labelledby="tenancy-checklist-cards-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="tenancy-checklist-cards-title">
            {tenancyChecklistTitle}
          </h2>
          <p className={styles.intro}>{tenancyChecklistIntro}</p>
        </header>

        <div className={styles.cards}>
          {tenancyChecklistTabs.map((tab, index) => {
            const Icon = tab.icon;
            const isOpen = openId === tab.id;
            const visibleItems = isOpen
              ? tab.items
              : tab.items.slice(0, PREVIEW_COUNT);
            const hiddenCount = Math.max(tab.items.length - PREVIEW_COUNT, 0);

            return (
              <article
                key={tab.id}
                className={`${styles.card}${index % 2 === 1 ? ` ${styles.cardAlt}` : ""}`}
              >
                <div className={styles.cardBody}>
                  <div className={styles.cardHead}>
                    <span
                      className={styles.cardIcon}
                      role="img"
                      aria-label={tab.iconAlt}
                    >
                      <Icon aria-hidden />
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{tab.shortLabel}</h3>
                    </div>
                  </div>

                  <ul className={styles.checklist}>
                    {visibleItems.map((item) => (
                      <li key={item}>
                        <span className={styles.check} aria-hidden>
                          <FaCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {hiddenCount > 0 ? (
                    <button
                      type="button"
                      className={styles.expandBtn}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenId((prev) => (prev === tab.id ? null : tab.id))
                      }
                    >
                      {isOpen ? "Show fewer" : "See all"}
                      <FaChevronDown
                        className={isOpen ? styles.chevronOpen : undefined}
                        aria-hidden
                      />
                    </button>
                  ) : null}
                </div>

                <div className={styles.cardVisual}>
                  <img
                    className={styles.visualImg}
                    src={tab.image}
                    alt={tab.imageAlt}
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
