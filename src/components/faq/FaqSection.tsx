"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useFaqAccordion } from "@/hooks/useFaqAccordion";
import { homeFaqs } from "./homeFaqData";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const { half, isOpen, toggle } = useFaqAccordion(homeFaqs.length);
  const leftCol = homeFaqs.slice(0, half);
  const rightCol = homeFaqs.slice(half);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="faq-title">
            Frequently Asked Questions
          </h2>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            {leftCol.map((faq, i) => {
              const open = isOpen("left", i);
              return (
                <div
                  key={i}
                  className={`${styles.item} ${open ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggle("left", i)}
                    aria-expanded={open}
                  >
                    <span className={styles.qText}>{faq.q}</span>
                    <span className={styles.qIcon}>
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={styles.answer} aria-hidden={!open}>
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img
                          src={faq.img}
                          alt={faq.alt}
                          loading="lazy"
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
              const open = isOpen("right", i);
              return (
                <div
                  key={i}
                  className={`${styles.item} ${open ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggle("right", i)}
                    aria-expanded={open}
                  >
                    <span className={styles.qText}>{faq.q}</span>
                    <span className={styles.qIcon}>
                      {open ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div className={styles.answer} aria-hidden={!open}>
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img
                          src={faq.img}
                          alt={faq.alt}
                          loading="lazy"
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
