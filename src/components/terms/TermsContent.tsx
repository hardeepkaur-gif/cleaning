import {
  FaBalanceScale,
  FaCalendarCheck,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { termsIntro, termsLastUpdated, termsSections } from "./termsData";
import styles from "@/components/privacy/PrivacyPolicyContent.module.css";

function RichText({ text }: { text: string }) {
  const parts = text.split(
    /(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|020\s?3475\s?5539|02034755539)/gi
  );

  return (
    <>
      {parts.map((part, index) => {
        if (/^https?:\/\//i.test(part)) {
          const href = part.replace(/[.,)]+$/, "");
          const trailing = part.slice(href.length);
          return (
            <span key={`${part}-${index}`}>
              <a href={href} rel="noopener noreferrer" target="_blank">
                {href}
              </a>
              {trailing}
            </span>
          );
        }

        if (/@/.test(part)) {
          return (
            <a key={`${part}-${index}`} href={`mailto:${part}`}>
              {part}
            </a>
          );
        }

        if (/^020\s?3475\s?5539$/i.test(part) || part === "02034755539") {
          return (
            <a key={`${part}-${index}`} href="tel:+442034755539">
              {part}
            </a>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

const highlights = [
  {
    icon: FaFileAlt,
    title: "Clear booking terms",
    text: "These terms apply when you request, book or use our cleaning services.",
  },
  {
    icon: FaCalendarCheck,
    title: "Agreed scope",
    text: "Your quotation or booking confirmation sets out the work included.",
  },
  {
    icon: FaBalanceScale,
    title: "Consumer rights",
    text: "Nothing here removes rights that cannot legally be excluded.",
  },
];

export default function TermsContent() {
  return (
    <section
      className={styles.section}
      id="terms-and-conditions"
      aria-label="Terms and Conditions"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <p className={styles.asideLabel}>On this page</p>
              <nav aria-label="Terms and conditions sections">
                <ol className={styles.toc}>
                  {termsSections.map((section, index) => (
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
                <span className={styles.pill}>Booking terms</span>
                <span className={styles.updated}>
                  Last updated {termsLastUpdated}
                </span>
              </div>
              {termsIntro.map((paragraph) => (
                <p key={paragraph} className={styles.intro}>
                  <RichText text={paragraph} />
                </p>
              ))}

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
              {termsSections.map((section, index) => (
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

                  {section.chunks.map((chunk, chunkIndex) => (
                    <div
                      key={`${section.id}-${chunkIndex}`}
                      className={styles.chunk}
                    >
                      {chunk.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className={styles.blockText}>
                          <RichText text={paragraph} />
                        </p>
                      ))}
                      {chunk.bullets ? (
                        <ul className={styles.bullets}>
                          {chunk.bullets.map((item) => (
                            <li key={item}>
                              <RichText text={item} />
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {chunk.notes?.map((note) => (
                        <p key={note} className={styles.note}>
                          {note}
                        </p>
                      ))}
                    </div>
                  ))}
                </article>
              ))}
            </div>

            <div className={styles.ctaCard}>
              <div className={styles.ctaCopy}>
                <span className={styles.ctaIcon} aria-hidden>
                  <FaEnvelope />
                </span>
                <div>
                  <h3>Questions about a booking?</h3>
                  <p>
                    Contact us and we will help with your enquiry, appointment
                    or these terms.
                  </p>
                </div>
              </div>
              <div className={styles.ctaActions}>
                <ThmButton href="/contact-us">Contact Us</ThmButton>
                <ThmButton href="/services">View Services</ThmButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
