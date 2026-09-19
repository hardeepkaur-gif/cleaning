"use client";

import { useState } from "react";
import { FaCheck, FaChevronDown, FaPlus, FaTimes } from "react-icons/fa";
import {
  domesticChecklistIntro,
  domesticChecklistTabs,
  domesticChecklistTitle,
  type DomesticChecklistListVariant,
} from "./domesticChecklistData";
import styles from "@/components/tenancy/TenancyChecklistCardsSection.module.css";
import local from "./DomesticChecklistSection.module.css";

const PREVIEW_COUNT = 4;

function ListMark({ variant }: { variant: DomesticChecklistListVariant }) {
  if (variant === "plus") {
    return (
      <span className={`${styles.check} ${local.plusMark}`} aria-hidden>
        <FaPlus />
      </span>
    );
  }

  if (variant === "exclude") {
    return (
      <span className={`${styles.check} ${local.excludeMark}`} aria-hidden>
        <FaTimes />
      </span>
    );
  }

  return (
    <span className={styles.check} aria-hidden>
      <FaCheck />
    </span>
  );
}

export default function DomesticChecklistSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="domestic-cleaning-checklist"
      aria-labelledby="domestic-checklist-title"
    >
      <div className={`${styles.container} ${local.container}`}>
        <header className={styles.header}>
          <h2 className={styles.title} id="domestic-checklist-title">
            {domesticChecklistTitle}
          </h2>
          <p className={`${styles.intro} ${local.intro}`}>{domesticChecklistIntro}</p>
        </header>

        <div className={styles.cards}>
          {domesticChecklistTabs.map((tab, index) => {
            const Icon = tab.icon;
            const listVariant = tab.listVariant ?? "check";
            const isOpen = openId === tab.id;
            const visibleItems = isOpen
              ? tab.items
              : tab.items.slice(0, PREVIEW_COUNT);
            const hiddenCount = Math.max(tab.items.length - PREVIEW_COUNT, 0);

            return (
              <article
                key={tab.id}
                className={`${styles.card} ${local.card}${index % 2 === 1 ? ` ${styles.cardAlt}` : ""}${
                  listVariant === "exclude" ? ` ${local.excludeCard}` : ""
                }`}
              >
                <div className={styles.cardBody}>
                  <div className={styles.cardHead}>
                    <span
                      className={`${styles.cardIcon}${
                        listVariant === "exclude" ? ` ${local.excludeIcon}` : ""
                      }${listVariant === "plus" ? ` ${local.plusIcon}` : ""}`}
                      role="img"
                      aria-label={tab.iconAlt}
                    >
                      <Icon aria-hidden />
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{tab.shortLabel}</h3>
                    </div>
                  </div>

                  <p className={local.cardIntro}>{tab.intro}</p>

                  <ul className={styles.checklist}>
                    {visibleItems.map((item) => (
                      <li
                        key={item}
                        className={
                          listVariant === "exclude" ? local.excludeItem : undefined
                        }
                      >
                        <ListMark variant={listVariant} />
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
