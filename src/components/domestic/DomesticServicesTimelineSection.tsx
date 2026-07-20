"use client";

import { useEffect, useRef, useState } from "react";
import {
  domesticServicesHighlights,
  domesticServicesIntro,
  domesticServicesItems,
  domesticServicesTagline,
  domesticServicesTitle,
} from "./domesticServicesData";
import styles from "@/components/tenancy/TenancyMattersTimelineSection.module.css";

const DESKTOP_QUERY = "(min-width: 1201px)";

export default function DomesticServicesTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const scrollPanelRef = useRef<HTMLDivElement | null>(null);
  const asideCardRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const asideCard = asideCardRef.current;
    const scrollWrap = scrollWrapRef.current;
    if (!asideCard || !scrollWrap) return;

    const syncColumnHeights = () => {
      if (!window.matchMedia(DESKTOP_QUERY).matches) {
        scrollWrap.style.height = "";
        scrollWrap.style.maxHeight = "";
        return;
      }

      const matchedHeight = asideCard.offsetHeight;
      scrollWrap.style.height = `${matchedHeight}px`;
      scrollWrap.style.maxHeight = `${matchedHeight}px`;
    };

    syncColumnHeights();

    const resizeObserver = new ResizeObserver(syncColumnHeights);
    resizeObserver.observe(asideCard);
    window.addEventListener("resize", syncColumnHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncColumnHeights);
    };
  }, []);

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
        rootMargin: "-8% 0px -40% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const selectItem = (index: number) => {
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section
      className={styles.section}
      id="domestic-services-timeline"
      aria-labelledby="domestic-services-timeline-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.asideCard} ref={asideCardRef}>
              <p className={styles.tagline}>{domesticServicesTagline}</p>
              <h2 className={styles.title} id="domestic-services-timeline-title">
                {domesticServicesTitle}
              </h2>
              <p className={styles.intro}>{domesticServicesIntro}</p>

              <ul className={styles.highlights}>
                {domesticServicesHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.progressBlock}>
                <div className={styles.progressHead}>
                  <span>Viewing</span>
                  <strong>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(domesticServicesItems.length).padStart(2, "0")}
                  </strong>
                </div>
                <div
                  className={styles.progressTrack}
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={domesticServicesItems.length}
                  aria-valuenow={activeIndex + 1}
                >
                  <span
                    className={styles.progressFill}
                    style={{
                      width: `${((activeIndex + 1) / domesticServicesItems.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className={styles.navChips} aria-label="Jump to service">
                {domesticServicesItems.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`${styles.chip} ${activeIndex === index ? styles.chipActive : ""}`}
                    onClick={() => selectItem(index)}
                    aria-current={activeIndex === index ? "true" : undefined}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.scrollWrap} ref={scrollWrapRef}>
            <div className={styles.scrollPanel} ref={scrollPanelRef}>
              <ol className={styles.timeline}>
                {domesticServicesItems.map((item, index) => {
                  const Icon = item.icon;
                  const isLast = index === domesticServicesItems.length - 1;
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
                            Service {String(index + 1).padStart(2, "0")}
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
