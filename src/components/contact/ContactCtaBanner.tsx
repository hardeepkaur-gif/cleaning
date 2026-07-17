import ThmButton from "@/components/menu/ThmButton";
import { contactInfo } from "@/components/menu/menuData";
import styles from "./ContactUs.module.css";

export default function ContactCtaBanner() {
  return (
    <section className={styles.ctaBanner} aria-labelledby="contact-cta-title">
      <div className={styles.wrap}>
        <div className={styles.ctaBannerInner}>
          <div className={styles.ctaBlobTeal} aria-hidden />
          <div className={styles.ctaBlobCoral} aria-hidden />

          <div className={styles.ctaCopy}>
            <span className={styles.ctaBadge}>Need a faster answer?</span>
            <h2 id="contact-cta-title">
              Speak to our team directly — we&apos;re here to help
            </h2>
            <p>
              For urgent bookings, same-day cleans or deposit-related questions,
              call us and we&apos;ll talk you through options straight away.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.btnBox}>
                <ThmButton href={contactInfo.phoneHref}>{contactInfo.phone}</ThmButton>
              </div>
              <div className={styles.btnBox}>
                <ThmButton href="#quote-form" variant="secondary">
                  Use The Form Instead
                </ThmButton>
              </div>
            </div>
          </div>

          <div className={styles.ctaAside}>
            <div className={styles.ctaStat}>
              <strong>Same-day</strong>
              <span>quotes on most enquiries</span>
            </div>
            <div className={styles.ctaStat}>
              <strong>Fixed price</strong>
              <span>no hourly surprises</span>
            </div>
            <div className={styles.ctaStat}>
              <strong>DBS checked</strong>
              <span>insured cleaners only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
