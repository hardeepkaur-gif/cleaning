"use client";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useFaqAccordion } from "@/hooks/useFaqAccordion";
import styles from "./ContactUs.module.css";

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "Most enquiries get a quote back within a few hours, and always within 24 hours. For urgent same-day requests, calling or WhatsApp is fastest.",
    img: "/images/about/cleanon/about-three-img-1.jpg",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes, our team arrives fully equipped with eco-friendly products and equipment. Let us know in the form if you'd prefer we use products you already have at home.",
    img: "/images/services/cleanon/services-2-1.jpg",
  },
  {
    q: "Is my property insured during the clean?",
    a: "Every visit is covered by our public liability insurance, and all cleaners are DBS-checked before they're placed with clients.",
    img: "/images/why/cleanon/why-choose-one-img-1.jpg",
  },
  {
    q: "Can I book a one-off clean, or only recurring?",
    a: "Both. Choose the frequency that suits you on the form, from a single deep clean to weekly or fortnightly visits, and adjust anytime.",
    img: "/images/why/cleanon/why-choose-one-img-2.jpg",
  },
];

function FaqColumn({
  items,
  column,
  isOpen,
  onToggle,
}: {
  items: typeof faqs;
  column: "left" | "right";
  isOpen: (column: "left" | "right", localIndex: number) => boolean;
  onToggle: (column: "left" | "right", localIndex: number) => void;
}) {
  return (
    <div className={styles.faqCol}>
      {items.map((faq, index) => {
        const open = isOpen(column, index);
        return (
          <div
            key={faq.q}
            className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}
          >
            <button
              type="button"
              className={styles.faqQ}
              aria-expanded={open}
              onClick={() => onToggle(column, index)}
            >
              <span className={styles.faqQText}>{faq.q}</span>
              <span className={styles.faqIcon}>
                {open ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {open ? (
              <div className={styles.faqA}>
                <div className={styles.faqAInner}>
                  <div className={styles.faqImg}>
                    <img src={faq.img} alt="" loading="lazy" />
                  </div>
                  <p>{faq.a}</p>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function ContactFaqSection() {
  const { half, isOpen, toggle } = useFaqAccordion(faqs.length);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section className={styles.faqSection} aria-labelledby="contact-faq-title">
      <div className={styles.wrap}>
        <div className={styles.faqHead}>
          <span className={styles.eyebrow}>Before you send that form</span>
          <h2 id="contact-faq-title">A few things people usually ask</h2>
        </div>
        <div className={styles.faqColumns}>
          <FaqColumn
            items={leftCol}
            column="left"
            isOpen={isOpen}
            onToggle={toggle}
          />
          <FaqColumn
            items={rightCol}
            column="right"
            isOpen={isOpen}
            onToggle={toggle}
          />
        </div>
      </div>
    </section>
  );
}
