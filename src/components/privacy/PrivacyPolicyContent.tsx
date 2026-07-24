import Link from "next/link";
import { FaShieldAlt, FaLock, FaUserCheck, FaEnvelope } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  privacyIntro,
  privacyLastUpdated,
  privacySections,
} from "./privacyPolicyData";
import styles from "./PrivacyPolicyContent.module.css";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "Protected",
    text: "We handle booking and enquiry details with care.",
  },
  {
    icon: FaLock,
    title: "Not sold",
    text: "Your personal information is never sold to third parties.",
  },
  {
    icon: FaUserCheck,
    title: "Your rights",
    text: "You can ask to access, update or delete your data.",
  },
];

export default function PrivacyPolicyContent() {
  return (
    <section
      className={styles.section}
      id="privacy-policy"
      aria-labelledby="privacy-content-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <p className={styles.asideLabel}>On this page</p>
              <nav aria-label="Privacy policy sections">
                <ol className={styles.toc}>
                  {privacySections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span className={styles.tocNum}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.tocText}>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <div className={styles.main}>
            <header className={styles.introBlock}>
              <div className={styles.metaRow}>
                <span className={styles.pill}>UK GDPR aligned</span>
                <span className={styles.updated}>
                  Last updated {privacyLastUpdated}
                </span>
              </div>
              <h2 className={styles.title} id="privacy-content-title">
                How we look after your information
              </h2>
              <p className={styles.intro}>{privacyIntro}</p>

              <div className={styles.highlights}>
                {highlights.map(({ icon: Icon, title, text }) => (
                  <article key={title} className={styles.highlight}>
                    <span className={styles.highlightIcon} aria-hidden>
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </header>

            <div className={styles.sections}>
              {privacySections.map((section, index) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={styles.block}
                >
                  <div className={styles.blockHead}>
                    <span className={styles.blockNum} aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      {section.summary ? (
                        <p className={styles.blockSummary}>{section.summary}</p>
                      ) : null}
                      <h3 className={styles.blockTitle}>{section.title}</h3>
                    </div>
                  </div>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={styles.blockText}>
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className={styles.bullets}>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div className={styles.ctaCard}>
              <div className={styles.ctaCopy}>
                <span className={styles.ctaIcon} aria-hidden>
                  <FaEnvelope />
                </span>
                <div>
                  <h3>Need help with a privacy request?</h3>
                  <p>
                    Reach out and our team will guide you through your enquiry
                    as quickly as possible.
                  </p>
                </div>
              </div>
              <div className={styles.ctaActions}>
                <ThmButton href="/contact-us">Contact Us</ThmButton>
                <Link href="/services" className={styles.ctaLink}>
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
