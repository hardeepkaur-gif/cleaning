import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  contactInfo,
  footerLegalLinks,
  footerQuickLinks,
  socialLinks,
} from "@/components/menu/menuData";
import { servicesList } from "@/components/services/servicesData";
import styles from "./Footer.module.css";

const socialIconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
} as const;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.accentBar} aria-hidden />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <Link href="/#home" className={styles.logo}>
              <img
                src="/images/logo.png"
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
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Our Services</h3>
            <ul className={styles.links}>
              {servicesList.map((service) => (
                <li key={service.title}>
                  <a href={service.href}>{service.label} Cleaning</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon} aria-hidden>
                  <FaMapMarkerAlt />
                </span>
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden>
                  <FaEnvelope />
                </span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden>
                  <FaPhoneAlt />
                </span>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
            </ul>
            <div className={styles.ctaBox}>
              <p>Need a reliable cleaner in London?</p>
              <ThmButton href="#contact">Request a Quote</ThmButton>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
