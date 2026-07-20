"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { domesticFaqs, domesticFaqTitle } from "./domesticFaqData";
import styles from "@/components/faq/FaqSection.module.css";
import local from "./DomesticFaqSection.module.css";

export default function DomesticFaqSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  const half = Math.ceil(domesticFaqs.length / 2);
  const leftCol = domesticFaqs.slice(0, half);
  const rightCol = domesticFaqs.slice(half);

  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="domestic-faqs"
      aria-labelledby="domestic-faq-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="domestic-faq-title">
            {domesticFaqTitle}
          </h2>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            {leftCol.map((faq, i) => {
              const isOpen = openLeft === i;
              return (
                <div
                  key={faq.q}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenLeft(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.qText}>{faq.q}</span>
                    <span className={styles.qIcon}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={styles.answer} aria-hidden={!isOpen}>
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img
                          src={faq.img}
                          alt=""
                          loading="lazy"
                          aria-hidden
                        />
                      </div>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.col}>
            {rightCol.map((faq, i) => {
              const isOpen = openRight === i;
              return (
                <div
                  key={faq.q}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenRight(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.qText}>{faq.q}</span>
                    <span className={styles.qIcon}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={styles.answer} aria-hidden={!isOpen}>
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img
                          src={faq.img}
                          alt=""
                          loading="lazy"
                          aria-hidden
                        />
                      </div>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
