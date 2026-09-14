import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUp,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaPoundSign,
  FaShieldAlt,
  FaStar,
  FaUserShield,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThmButton from "@/components/menu/ThmButton";
import {
  contactInfo,
  footerLegalLinks,
  footerQuickLinks,
  navServiceLinks,
  socialLinks,
} from "@/components/menu/menuData";
import styles from "./Footer.module.css";

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
} as const;

const trustBadges = [
  { icon: FaUserShield, label: "DBS-Checked Cleaners" },
  { icon: FaShieldAlt, label: "Fully Insured" },
  { icon: FaPoundSign, label: "Fixed, Upfront Pricing" },
  { icon: FaStar, label: "Satisfaction Focused" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Top CTA banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <div className={styles.ctaBannerText}>
            <span className={styles.ctaBadge}>Trusted London Cleaners</span>
            <h2>
              Book Professional Cleaning Services{" "}
              <span>London</span>
            </h2>
            <p>
              Need reliable cleaners for your home, rental property or business?
              Speak to Cleaning Services London for DBS-checked, insured cleaning
              professionals, fixed pricing and a service built around trust.
            </p>
          </div>
          <div className={styles.ctaBannerActions}>
            <ThmButton href="/contact-us">Request a Quote</ThmButton>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Trust strip */}
        <div className={styles.trust}>
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon} role="img" aria-label={`${label} icon`}>
                <Icon aria-hidden />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <img
                src="/images/logo.webp"
                alt="Cleaning Services London"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.aboutText}>
              Professional cleaning services for homes, rental properties and
              businesses across London. DBS-checked cleaners, fixed pricing, and
              satisfaction-focused standards you can trust.
            </p>
            <div className={styles.social}>
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.links}>
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <FaArrowRight className={styles.linkArrow} aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Our Services</h3>
            <ul className={styles.links}>
              {navServiceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <FaArrowRight className={styles.linkArrow} aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Get in Touch</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon} role="img" aria-label="Office address location icon">
                  <FaMapMarkerAlt aria-hidden />
                </span>
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <span className={styles.contactIcon} role="img" aria-label="Email contact icon">
                  <FaEnvelope aria-hidden />
                </span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span className={styles.contactIcon} role="img" aria-label="Phone contact icon">
                  <FaPhoneAlt aria-hidden />
                </span>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <span className={styles.contactIcon} role="img" aria-label="Business opening hours icon">
                  <FaClock aria-hidden />
                </span>
                <span>Mon – Sun: 8:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {currentYear} Cleaning Services London. All Rights Reserved.
          </p>
          <ul className={styles.legal}>
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#home" className={styles.toTop} aria-label="Back to top">
            <FaArrowUp aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
