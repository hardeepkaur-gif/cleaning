"use client";



import { useEffect, useState } from "react";

import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";

import {

  domesticChecklistIntro,

  domesticChecklistTabs,

  domesticChecklistTitle,

  type DomesticChecklistListVariant,

} from "./domesticChecklistData";

import styles from "@/components/tenancy/TenancyChecklistAltSection.module.css";

import local from "./DomesticChecklistSection.module.css";



function ListMark({ variant }: { variant: DomesticChecklistListVariant }) {

  if (variant === "plus") {

    return (

      <span className={`${styles.checkMark} ${local.plusMark}`} aria-hidden>

        <FaPlus />

      </span>

    );

  }



  if (variant === "exclude") {

    return (

      <span className={`${styles.checkMark} ${local.excludeMark}`} aria-hidden>

        <FaTimes />

      </span>

    );

  }



  return (

    <span className={styles.checkMark} aria-hidden>

      <FaCheck />

    </span>

  );

}



export default function DomesticChecklistSection() {

  const [activeTab, setActiveTab] = useState(0);

  const [animateKey, setAnimateKey] = useState(0);

  const active = domesticChecklistTabs[activeTab];

  const ActiveIcon = active.icon;

  const listVariant = active.listVariant ?? "check";



  useEffect(() => {

    setAnimateKey((prev) => prev + 1);

  }, [activeTab]);



  return (

    <section

      className={styles.section}

      id="domestic-cleaning-checklist"

      aria-labelledby="domestic-checklist-title"

    >

      <div className={styles.orbOne} aria-hidden />

      <div className={styles.orbTwo} aria-hidden />



      <div className={styles.container}>

        <header className={styles.header}>

          <p className={styles.tagline}>Room-by-Room Guide</p>

          <h2 className={styles.title} id="domestic-checklist-title">

            {domesticChecklistTitle}

          </h2>

          <p className={styles.intro}>{domesticChecklistIntro}</p>

        </header>



        <div className={styles.stage}>

          <div className={styles.rail} role="tablist" aria-label="Room checklist">

            {domesticChecklistTabs.map((tab, index) => {

              const Icon = tab.icon;

              const isActive = activeTab === index;



              return (

                <button

                  key={tab.id}

                  type="button"

                  role="tab"

                  aria-selected={isActive}

                  aria-controls="domestic-checklist-panel"

                  id={`domestic-checklist-tab-${tab.id}`}

                  className={`${styles.railBtn} ${isActive ? styles.railBtnActive : ""}`}

                  onClick={() => setActiveTab(index)}

                >

                  <span className={styles.railIcon} aria-hidden>

                    <Icon />

                  </span>

                  <span className={styles.railCopy}>

                    <span className={styles.railLabel}>{tab.shortLabel}</span>

                    <span className={styles.railMeta}>

                      {tab.items.length} tasks

                    </span>

                  </span>

                  <span className={styles.railIndex} aria-hidden>

                    {String(index + 1).padStart(2, "0")}

                  </span>

                </button>

              );

            })}

          </div>



          <div

            id="domestic-checklist-panel"

            role="tabpanel"

            aria-labelledby={`domestic-checklist-tab-${active.id}`}

            className={`${styles.panel} ${listVariant === "exclude" ? local.excludedPanel : ""}`}

            key={animateKey}

          >

            <div className={styles.panelTop}>

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

              <p className={local.panelIntro}>{active.intro}</p>

            </div>



            <ul className={styles.checklist}>

              {active.items.map((item, index) => (

                <li

                  key={item}

                  className={`${styles.checkItem} ${listVariant === "exclude" ? local.excludeItem : ""}`}

                  style={{ animationDelay: `${index * 45}ms` }}

                >

                  <ListMark variant={listVariant} />

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>

  );

}

