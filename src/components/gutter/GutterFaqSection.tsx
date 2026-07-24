"use client";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useFaqAccordion } from "@/hooks/useFaqAccordion";
import { gutterFaqs, gutterFaqTitle } from "./gutterFaqData";
import styles from "@/components/faq/FaqSection.module.css";
import local from "./GutterFaqSection.module.css";

export default function GutterFaqSection() {
  const { half, isOpen, toggle } = useFaqAccordion(gutterFaqs.length);
  const leftCol = gutterFaqs.slice(0, half);
  const rightCol = gutterFaqs.slice(half);

  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="gutter-cleaning-faqs"
      aria-labelledby="gutter-faq-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={`${styles.title} ${local.title}`} id="gutter-faq-title">
            {gutterFaqTitle}
          </h2>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            {leftCol.map((faq, i) => {
              const open = isOpen("left", i);
              return (
                <div
                  key={faq.q}
                  className={`${styles.item} ${open ? styles.itemOpen : ""} ${open ? local.itemOpen : ""}`}
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
                  <div
                    className={`${styles.answer} ${local.answer}`}
                    aria-hidden={!open}
                  >
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img src={faq.img} alt="" loading="lazy" aria-hidden />
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
                  key={faq.q}
                  className={`${styles.item} ${open ? styles.itemOpen : ""} ${open ? local.itemOpen : ""}`}
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
                  <div
                    className={`${styles.answer} ${local.answer}`}
                    aria-hidden={!open}
                  >
                    <div className={styles.answerInner}>
                      <div className={styles.answerImg}>
                        <img src={faq.img} alt="" loading="lazy" aria-hidden />
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
