"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useFaqAccordion } from "@/hooks/useFaqAccordion";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "What cleaning services in London do you offer?",
    a: "We provide domestic cleaning, carpet cleaning, end of tenancy cleaning, and gutter cleaning services for homes, rental properties, offices, and commercial premises across London.",
    img: "/images/faq/home/faq-services.webp",
  },
  {
    q: "Are your cleaners DBS checked?",
    a: "Yes, every cleaner undergoes DBS screening, identity verification, and right-to-work checks before attending customer properties.",
    img: "/images/faq/home/faq-dbs.webp",
  },
  {
    q: "Are you fully insured?",
    a: "Yes, Cleaning Services London operates as a fully insured cleaning company, providing additional reassurance for homeowners, tenants, landlords, and businesses.",
    img: "/images/faq/home/faq-insured.webp",
  },
  {
    q: "Do you offer fixed pricing?",
    a: "Yes, wherever possible, we provide fixed pricing rather than relying solely on hourly estimates, helping customers avoid unexpected charges.",
    img: "/images/faq/home/faq-pricing.webp",
  },
  {
    q: "Can I request the same cleaner each time?",
    a: "Yes, for recurring domestic cleaning services, we aim to provide the same cleaner whenever scheduling allows.",
    img: "/images/faq/home/faq-same-cleaner.webp",
  },
  {
    q: "What is included in a professional clean?",
    a: "Most professional cleans include kitchen cleaning, bathroom cleaning, dusting, vacuuming, mopping, high-touch surfaces, bin emptying, and general tidying. Tasks vary depending on the service booked.",
    img: "/images/faq/home/faq-team.webp",
  },
  {
    q: "Do you provide end of tenancy cleaning?",
    a: "Yes, our End of Tenancy Cleaning London service helps tenants, landlords, and letting agents prepare properties for inspections, handovers, and new occupants.",
    img: "/images/faq/home/faq-tenancy.webp",
  },
  {
    q: "Do you provide carpet cleaning?",
    a: "Yes, we provide professional carpet cleaning services designed to remove stains, refresh fibres, and improve the appearance of high-traffic areas.",
    img: "/images/faq/home/faq-carpet.webp",
  },
  {
    q: "Do you provide gutter cleaning?",
    a: "Yes, our gutter cleaning service removes debris and blockages to help maintain effective drainage and reduce the risk of water-related property issues.",
    img: "/images/faq/home/faq-gutter.webp",
  },
  {
    q: "Which areas of London do you cover?",
    a: "We primarily serve East London, including Canning Town, Stratford, Plaistow, East Ham, Dagenham, Beckton, Barking, Canary Wharf, and Docklands, with wider coverage available depending on the service.",
    img: "/images/faq/home/faq-areas.webp",
  },
  {
    q: "How quickly can I book a cleaner?",
    a: "Availability varies by location and service type. In many cases, appointments can be arranged within a few days of your enquiry.",
    img: "/images/faq/home/faq-booking.webp",
  },
  {
    q: "What happens if I am not satisfied?",
    a: "If you have concerns following a completed service, our team will review the issue and work towards a fair resolution in line with our satisfaction-focused approach.",
    img: "/images/faq/home/faq-satisfaction.webp",
  },
];

export default function FaqSection() {
  const { half, isOpen, toggle } = useFaqAccordion(faqs.length);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

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
