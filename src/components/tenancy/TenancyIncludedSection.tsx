"use client";

import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import {
  tenancyIncludedIntro,
  tenancyIncludedItems,
  tenancyIncludedTagline,
  tenancyIncludedTitle,
} from "./tenancyIncludedData";
import styles from "./TenancyIncludedSection.module.css";

const faqImgBase = "/images/faq/tidytouch";

export default function TenancyIncludedSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={styles.section}
      id="tenancy-included"
      aria-labelledby="tenancy-included-title"
    >
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url('${faqImgBase}/faq-bg-1.jpg')`,
        }}
        aria-hidden
      >
        <div
          className={styles.bgInner}
          style={{
            backgroundImage: `url('${faqImgBase}/faq-bg-shape-1-1.png')`,
          }}
          aria-hidden
        />
      </div>

      <img
        className={styles.shape}
        src={`${faqImgBase}/faq-shape-1-1.png`}
        alt=""
        aria-hidden
        loading="lazy"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.secTitle}>
            <p className={styles.tagline}>{tenancyIncludedTagline}</p>
            <h2 className={styles.title} id="tenancy-included-title">
              {tenancyIncludedTitle}
            </h2>
          </div>

          <p className={styles.intro}>{tenancyIncludedIntro}</p>

          <div className={styles.accordion}>
            {tenancyIncludedItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.title}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.itemHeader}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.iconBox} aria-hidden>
                      <span className={styles.iconCircle}>
                        <FaCheck />
                      </span>
                    </span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <span className={styles.chevron} aria-hidden>
                      <FaChevronDown />
                    </span>
                  </button>

                  <div className={styles.itemBody} hidden={!isOpen}>
                    <div className={styles.itemInner}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
