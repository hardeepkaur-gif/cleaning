import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import styles from "./ContactPageHeader.module.css";

export default function ContactHero() {
  return (
    <section className={styles.pageHeader} aria-labelledby="contact-page-title">
      <div
        className={styles.pageHeaderBg}
        style={{
          backgroundImage: "url('/images/backgrounds/page-header-bg.jpg')",
        }}
        aria-hidden
      />

      <div className={styles.container}>
        <div className={styles.pageHeaderInner}>
          <h1 id="contact-page-title">Contact</h1>
          <nav className={styles.breadcrumbWrap} aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.breadcrumbSep} aria-hidden>
                <FaAngleRight />
              </li>
              <li aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className={styles.bubbleContainer} aria-hidden>
        <div className={`${styles.bubble} ${styles.bubble1}`} />
        <div className={`${styles.bubble} ${styles.bubble2}`} />
        <div className={`${styles.bubble} ${styles.bubble3}`} />
      </div>
    </section>
  );
}
