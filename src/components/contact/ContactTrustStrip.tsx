import {
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaUserShield,
} from "react-icons/fa";
import styles from "./ContactUs.module.css";

const badges = [
  {
    icon: FaUserShield,
    title: "DBS-checked staff",
    text: "Every cleaner is identity-verified and background-checked before attending your property.",
  },
  {
    icon: FaShieldAlt,
    title: "Fully insured",
    text: "Public liability cover on every visit, giving homeowners and tenants extra peace of mind.",
  },
  {
    icon: FaLeaf,
    title: "Eco-friendly products",
    text: "Effective, family-safe cleaning products used as standard across domestic and tenancy cleans.",
  },
  {
    icon: FaStar,
    title: "Satisfaction guarantee",
    text: "If something falls short after a visit, our team reviews the issue and works toward a fair resolution.",
  },
];

export default function ContactTrustStrip() {
  return (
    <section className={styles.trustStrip} aria-labelledby="contact-trust-title">
      <div className={styles.trustBlobOne} aria-hidden />
      <div className={styles.trustBlobTwo} aria-hidden />

      <div className={styles.wrap}>
        <div className={`${styles.sectionHead} ${styles.trustStripHead}`}>
          <span className={styles.tagline}>Why customers choose us</span>
          <h2 id="contact-trust-title" className={styles.title}>
            Trusted, Insured &amp; Highly Rated
          </h2>
          <p className={styles.intro}>
            Professional cleaning you can rely on — vetted people, clear pricing
            and standards you can count on every time.
          </p>
        </div>

        <div className={styles.trustGrid}>
          {badges.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.trustCard}>
              <span className={styles.trustCardIcon} aria-hidden>
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.bodyText}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
