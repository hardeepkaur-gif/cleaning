import { FaEnvelope, FaLock, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { cookiesLastUpdated, cookiesSections } from "./cookiesData";
import styles from "@/components/privacy/PrivacyPolicyContent.module.css";

function RichText({ text }: { text: string }) {
  const parts = text.split(
    /(\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|020\s?3475\s?5539|02034755539)/gi
  );

  return (
    <>
      {parts.map((part, index) => {
        const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (markdownLink) {
          const [, label, href] = markdownLink;
          const external = /^https?:\/\//i.test(href);
          return (
            <a
              key={`${part}-${index}`}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          );
        }

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
    icon: FaLock,
    title: "Essential cookies",
    text: "Some cookies are needed for the site and booking form to work.",
  },
  {
    icon: FaUserCheck,
    title: "Your choice",
    text: "You can accept or manage non-essential cookies when you visit.",
  },
  {
    icon: FaShieldAlt,
    title: "Browser controls",
    text: "You can also block or delete cookies in your browser settings.",
  },
];

export default function CookiesContent() {
  return (
    <section
      className={styles.section}
      id="cookies-policy"
      aria-label="Cookies Policy"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <p className={styles.asideLabel}>On this page</p>
              <nav aria-label="Cookies policy sections">
                <ol className={styles.toc}>
                  {cookiesSections.map((section, index) => (
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
                <span className={styles.pill}>Website cookies</span>
                <span className={styles.updated}>
                  Last updated {cookiesLastUpdated}
                </span>
              </div>

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
              {cookiesSections.map((section, index) => (
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
                      {chunk.subtitle ? (
                        <h4 className={styles.subTitle}>{chunk.subtitle}</h4>
                      ) : null}
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
                  <h3>Questions about cookies?</h3>
                  <p>
                    Contact us if you want to know more about how this website
                    uses cookies.
                  </p>
                </div>
              </div>
              <div className={styles.ctaActions}>
                <ThmButton href="/contact-us">Contact Us</ThmButton>
                <ThmButton href="/privacy-policy">Privacy Policy</ThmButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
