import ThmButton from "@/components/menu/ThmButton";
import styles from "./Hero.module.css";

function BgIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`${styles.bgIcon} ${className ?? ""}`} aria-hidden>
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgGradient} aria-hidden />

      <BgIcon className={styles.bgIconBroom}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 48c8-4 14-10 18-18M30 30l22-8M40 8l4 12-12 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 52c6-2 10-6 12-12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </BgIcon>

      <BgIcon className={styles.bgIconBottle}>
        <svg viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="8" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 16h20v38a6 6 0 01-6 6H20a6 6 0 01-6-6V16z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M20 28h8M20 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </BgIcon>

      <BgIcon className={styles.bgIconBubble1}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
        </svg>
      </BgIcon>

      <BgIcon className={styles.bgIconBubble2}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        </svg>
      </BgIcon>

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>Professional Cleaning Services</span>

          <h1 className={styles.title}>
            Cleaning Services London With{" "}
            <span>DBS Checked Professional Cleaners</span>
          </h1>

          <p className={styles.text}>
            Reliable cleaning services for homes, rental properties, offices, and
            commercial premises across East London. At Cleaning Services London we
            have DBS-checked and fully insured cleaners following documented cleaning
            standards, completion photo procedures, and quality control checks
            designed to deliver consistent results.
          </p>

          <div className={styles.actions}>
            <ThmButton href="/contact-us">Request a Quote</ThmButton>
            <ThmButton href="#services">Find Your Cleaner</ThmButton>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.platform} aria-hidden />
          <div className={styles.splash} aria-hidden />
          <img
            className={styles.heroImage}
            src="/images/hero/hero-bucket.png"
            alt="Professional cleaning supplies"
          />
        </div>
      </div>
    </section>
  );
}
