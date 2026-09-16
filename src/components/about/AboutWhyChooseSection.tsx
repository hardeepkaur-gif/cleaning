"use client";

import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import {
  aboutWhyChooseIntro,
  aboutWhyChooseItems,
  aboutWhyChooseTagline,
  aboutWhyChooseTitle,
} from "./aboutWhyChooseData";
import styles from "@/components/tenancy/TenancyIncludedSection.module.css";

const faqImgBase = "/images/faq/tidytouch";

export default function AboutWhyChooseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={styles.section}
      id="why-choose-us"
      aria-labelledby="about-why-choose-title"
    >
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url('${faqImgBase}/decorative-tenancy-included-section-bg.webp')`,
        }}
        aria-hidden
      >
        <div
          className={styles.bgInner}
          style={{
            backgroundImage: `url('${faqImgBase}/decorative-tenancy-included-section-shape.webp')`,
          }}
          aria-hidden
        />
      </div>

      <img
        className={styles.shape}
        src={`${faqImgBase}/decorative-tenancy-included-accent.webp`}
        alt=""
        loading="lazy"
        aria-hidden
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.secTitle}>
            <p className={styles.tagline}>{aboutWhyChooseTagline}</p>
            <h2 className={styles.title} id="about-why-choose-title">
              {aboutWhyChooseTitle}
            </h2>
          </div>

          <p className={styles.intro}>{aboutWhyChooseIntro}</p>

          <div className={styles.accordion}>
            {aboutWhyChooseItems.map((item, index) => {
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
                    <span
                      className={styles.iconBox}
                      role="img"
                      aria-label={`${item.title} icon`}
                    >
                      <span className={styles.iconCircle} aria-hidden>
                        <FaCheck aria-hidden />
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
