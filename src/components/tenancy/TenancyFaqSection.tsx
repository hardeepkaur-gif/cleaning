"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "@/components/faq/FaqSection.module.css";
import local from "./TenancyFaqSection.module.css";

const faqs = [
  {
    q: "How much does end of tenancy cleaning cost in London?",
    a: "The cost of London end of tenancy cleaning depends on the property's size, condition and any additional services required. We provide fixed pricing based on your specific requirements, with no hidden charges.",
    img: "/images/services/cleanon/services-2-1.jpg",
  },
  {
    q: "What is the 20/10 rule in cleaning?",
    a: "The 20/10 rule is a cleaning method where you clean for 20 minutes and then take a 10-minute break. It is commonly used to make large cleaning tasks feel more manageable and less overwhelming.",
    img: "/images/why/cleanon/why-choose-one-img-1.jpg",
  },
  {
    q: "What will a cleaner do in 2 hours?",
    a: "In two hours, a cleaner can typically focus on key areas such as kitchens, bathrooms, living spaces and high-touch surfaces. The exact amount completed depends on the property's size, condition and cleaning requirements.",
    img: "/images/why/cleanon/why-choose-one-img-2.jpg",
  },
  {
    q: "What is covered in an end of tenancy clean?",
    a: "An end of tenancy cleans usually includes kitchens, bathrooms, bedrooms, living areas, hallways, flooring, appliances, cupboards, skirting boards and commonly touched surfaces throughout the property.",
    img: "/images/services/cleanon/services-2-2.jpg",
  },
  {
    q: "Do I need professional end tenancy cleaning?",
    a: "Professional cleaning is not always required, but many tenants choose it to save time and ensure the property is cleaned to a high standard before inspections and handovers.",
    img: "/images/services/cleanon-tabs/services-three-tab-img-1.jpg",
  },
  {
    q: "How long does end of tenancy cleaning take?",
    a: "The time required depends on the property's size and condition. Smaller properties may take a few hours, while larger homes or heavily used properties can require significantly longer.",
    img: "/images/services/cleanon-tabs/services-three-tab-img-2.jpg",
  },
  {
    q: "Is carpet cleaning included?",
    a: "Carpet cleaning is available as an optional add-on service. We can include professional carpet cleaning as part of your end of tenancy cleaning package if required.",
    img: "/images/services/cleanon-tabs/services-three-tab-img-3.jpg",
  },
  {
    q: "Can landlords require professional cleaning?",
    a: "Landlords cannot automatically require tenants to pay for professional cleaning. However, tenants are generally expected to return the property in a similar state of cleanliness to when the tenancy began, allowing for fair wear and tear.",
    img: "/images/services/cleanon-tabs/services-three-tab-img-4.jpg",
  },
  {
    q: "Do you provide cleaning supplies and equipment?",
    a: "Yes, our cleaners arrive with the equipment, tools and eco-friendly cleaning products needed to complete the service.",
    img: "/images/services/cleanon/services-2-3.jpg",
  },
  {
    q: "Can I book a same-day move out cleaning service?",
    a: "Subject to availability, we may be able to accommodate short-notice and same-day bookings. Contact our team as early as possible to check availability in your area.",
    img: "/images/why/cleanon/why-choose-one-img-3.jpg",
  },
];

export default function TenancyFaqSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="tenancy-faqs"
      aria-labelledby="tenancy-faq-title"
    >
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="tenancy-faq-title">
            FAQs
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
