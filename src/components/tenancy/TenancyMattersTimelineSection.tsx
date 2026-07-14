"use client";

import { useEffect, useRef, useState } from "react";
import {
  tenancyMattersIntro,
  tenancyMattersItems,
  tenancyMattersTagline,
  tenancyMattersTitle,
} from "./tenancyMattersData";
import styles from "./TenancyMattersTimelineSection.module.css";

const highlights = [
  "Deposit protection focus",
  "Inspection-ready finish",
  "Clear handover checklist",
];

export default function TenancyMattersTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const scrollPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    const root = scrollPanelRef.current;
    if (!nodes.length || !root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActiveIndex(index);
      },
      {
        root,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-10% 0px -35% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToItem = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters-timeline"
      aria-labelledby="tenancy-matters-timeline-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <p className={styles.tagline}>{tenancyMattersTagline}</p>
              <h2 className={styles.title} id="tenancy-matters-timeline-title">
                {tenancyMattersTitle}
              </h2>
              <p className={styles.intro}>{tenancyMattersIntro}</p>

              <ul className={styles.highlights}>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.progressBlock}>
                <div className={styles.progressHead}>
                  <span>Exploring</span>
                  <strong>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(tenancyMattersItems.length).padStart(2, "0")}
                  </strong>
                </div>
                <div
                  className={styles.progressTrack}
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={tenancyMattersItems.length}
                  aria-valuenow={activeIndex + 1}
                >
                  <span
                    className={styles.progressFill}
                    style={{
                      width: `${((activeIndex + 1) / tenancyMattersItems.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className={styles.navChips} aria-label="Jump to reason">
                {tenancyMattersItems.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`${styles.chip} ${activeIndex === index ? styles.chipActive : ""}`}
                    onClick={() => scrollToItem(index)}
                    aria-current={activeIndex === index ? "true" : undefined}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.scrollWrap}>
            <div className={styles.scrollPanel} ref={scrollPanelRef}>
              <ol className={styles.timeline}>
                {tenancyMattersItems.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === tenancyMattersItems.length - 1;
                  const isActive = activeIndex === index;

                  return (
                    <li
                      key={item.title}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      className={`${styles.item} ${isLast ? styles.itemLast : ""} ${isActive ? styles.itemActive : ""}`}
                    >
                      <div className={styles.marker} aria-hidden>
                        <span className={styles.dot}>
                          <Icon />
                        </span>
                      </div>
                      <article className={styles.itemBody}>
                        <div className={styles.itemHead}>
                          <span className={styles.step}>
                            Reason {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.itemNum} aria-hidden>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemText}>{item.text}</p>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
