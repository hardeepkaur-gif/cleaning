"use client";

import { type FormEvent, useState } from "react";
import {
  FaBolt,
  FaCheckCircle,
  FaChevronRight,
  FaClock,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaUserCheck,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { contactInfo } from "@/components/menu/menuData";
import styles from "./ContactUs.module.css";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.contactSection} aria-labelledby="quote-form-title">
      <div className={styles.blobCoral} aria-hidden />
      <div className={styles.blobTeal} aria-hidden />
      <div className={`${styles.wrap} ${styles.contactGrid}`}>
        <div className={`${styles.panel} ${styles.formPanel}`} id="quote-form">
          <div className={`${styles.sectionHead} ${styles.formHeader}`}>
            <h2 id="quote-form-title" className={styles.title}>
              Get Your Free Quote
            </h2>
            <p className={styles.intro}>
              Takes under a minute. We&apos;ll come back with pricing and the
              earliest available slot.
            </p>
          </div>
          <div className={styles.formHeaderDivider} aria-hidden />

          <div className={styles.formPerks}>
            <div className={styles.formPerk}>
              <FaBolt aria-hidden />
              Same-day quotes
            </div>
            <div className={styles.formPerk}>
              <FaLock aria-hidden />
              Secure &amp; private
            </div>
            <div className={styles.formPerk}>
              <FaUserCheck aria-hidden />
              No obligation
            </div>
          </div>

          {submitted ? (
            <div className={styles.successCard} role="status">
              <span className={styles.successIcon} aria-hidden>
                <FaCheckCircle />
              </span>
              <h3 className={styles.cardTitle}>Request received</h3>
              <p className={styles.bodyText}>
                Thank you — we&apos;ll be in touch shortly with your quote and
                the earliest available slot.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldRow}>
                <div>
                  <label className={styles.label} htmlFor="contact-name">
                    Full name
                  </label>
                  <input
                    className={styles.input}
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="contact-phone">
                    Phone number
                  </label>
                  <input
                    className={styles.input}
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={styles.label} htmlFor="contact-email">
                  Email address
                </label>
                <input
                  className={styles.input}
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className={styles.label} htmlFor="contact-message">
                  Anything else we should know?
                </label>
                <textarea
                  className={styles.textarea}
                  id="contact-message"
                  name="message"
                  placeholder="Access instructions, specific areas to focus on, allergies to certain products..."
                />
              </div>

              <div className={styles.submitRow}>
                <div className={styles.btnBox}>
                  <ThmButton type="submit">Send My Request</ThmButton>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className={styles.sideStack}>
          <div className={styles.responseBanner}>
            <span className={styles.responseDot} aria-hidden />
            <div>
              <strong>Average response time: under 3 hours</strong>
              <span>Mon–Sat during business hours</span>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.infoPanel}`}>
            <h3 className={styles.cardTitle}>Speak to us directly</h3>
            <div className={styles.infoList}>
              <a className={styles.infoLink} href={contactInfo.phoneHref}>
                <span className={styles.iconBadge} aria-hidden>
                  <FaPhoneAlt />
                </span>
                <div className={styles.infoLinkBody}>
                  <div className={styles.infoLabel}>Call us</div>
                  <div className={styles.infoValue}>{contactInfo.phone}</div>
                </div>
                <FaChevronRight className={styles.infoChevron} aria-hidden />
              </a>
              <a
                className={styles.infoLink}
                href={`mailto:${contactInfo.email}`}
              >
                <span className={styles.iconBadge} aria-hidden>
                  <FaEnvelope />
                </span>
                <div className={styles.infoLinkBody}>
                  <div className={styles.infoLabel}>Email us</div>
                  <div className={styles.infoValue}>{contactInfo.email}</div>
                </div>
                <FaChevronRight className={styles.infoChevron} aria-hidden />
              </a>
              <div className={styles.infoItem}>
                <span className={styles.iconBadge} aria-hidden>
                  <FaClock />
                </span>
                <div className={styles.infoLinkBody}>
                  <div className={styles.infoLabel}>Opening hours</div>
                  <table className={styles.hoursTable}>
                    <tbody>
                      <tr>
                        <td>Mon – Fri</td>
                        <td>07:00 – 19:00</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>08:00 – 16:00</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.whatsappPanel}`}>
            <div>
              <h3 className={styles.cardTitle}>Prefer to WhatsApp?</h3>
              <p className={styles.bodyText}>
                Send a photo of the space and get a rough quote in minutes.
              </p>
            </div>
            <div className={styles.btnBox}>
              <ThmButton
                href={`https://wa.me/${contactInfo.phoneHref.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </ThmButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
