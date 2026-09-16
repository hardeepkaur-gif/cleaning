import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import headerStyles from "@/components/contact/ContactPageHeader.module.css";
import styles from "./AboutPageHero.module.css";

export default function AboutPageHero() {
  return (
    <section
      className={`${headerStyles.pageHeader} ${styles.hero}`}
      aria-labelledby="about-page-title"
    >
      <div
        className={`${headerStyles.pageHeaderBg} ${styles.bg}`}
        style={{
          backgroundImage: "url('/images/backgrounds/page-header-bg.webp')",
        }}
        aria-hidden
      />

      <div className={headerStyles.container}>
        <div className={`${headerStyles.pageHeaderInner} ${styles.inner}`}>
          <h1 id="about-page-title" className={styles.title}>
            About Us
          </h1>

          <p className={styles.intro}>
            Cleaning Services London is a UK-based professional cleaning company
            that provides dependable domestic and specialist cleaning services
            across the capital. All built around one simple idea: you should be
            able to trust the people you let into your home. Whether you need a
            one-off deep clean or ongoing support, we bring the same care and
            attention to every property we work in.
          </p>

          <nav
            className={`${headerStyles.breadcrumbWrap} ${styles.breadcrumb}`}
            aria-label="Breadcrumb"
          >
            <ol
              className={`${headerStyles.breadcrumb} ${styles.breadcrumbList}`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className={headerStyles.breadcrumbSep} aria-hidden>
                <FaAngleRight />
              </li>
              <li aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className={headerStyles.bubbleContainer} aria-hidden>
        <div className={`${headerStyles.bubble} ${headerStyles.bubble1}`} />
        <div className={`${headerStyles.bubble} ${headerStyles.bubble2}`} />
        <div className={`${headerStyles.bubble} ${headerStyles.bubble3}`} />
      </div>
    </section>
  );
}
