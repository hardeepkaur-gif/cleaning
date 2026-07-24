import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import styles from "@/components/contact/ContactPageHeader.module.css";
import local from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.pageHeader} aria-labelledby="services-page-title">
      <div
        className={`${styles.pageHeaderBg} ${local.pageHeaderBg}`}
        style={{
          backgroundImage: "url('/images/services/services-hero-bg.png')",
        }}
        aria-hidden
      />

      <div className={styles.container}>
        <div className={styles.pageHeaderInner}>
          <h1 id="services-page-title">Our Services</h1>
          <nav className={styles.breadcrumbWrap} aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.breadcrumbSep} aria-hidden>
                <FaAngleRight />
              </li>
              <li aria-current="page">Services</li>
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
