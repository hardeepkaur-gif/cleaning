"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import ThmButton from "./ThmButton";
import { contactInfo, navItems, socialLinks } from "./menuData";
import styles from "./Header.module.css";

const socialIconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
} as const;

type NavLinksProps = {
  activeId: string;
  mobileOpen?: boolean;
  onLinkClick?: () => void;
  sticky?: boolean;
};

function NavLinks({ activeId, mobileOpen, onLinkClick, sticky }: NavLinksProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <ul
      className={`${styles.list} ${mobileOpen ? styles.listOpen : ""} ${sticky ? styles.listSticky : ""}`}
    >
      {navItems.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeId === sectionId;
        const hasChildren = Boolean(item.children?.length);

        return (
          <li
            key={item.label}
            className={`${hasChildren ? styles.dropdown : ""} ${openDropdown === item.label ? styles.dropdownOpen : ""}`}
          >
            <a
              href={item.href}
              className={isActive ? styles.linkActive : ""}
              onClick={(e) => {
                if (hasChildren && window.innerWidth <= 991) {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                } else {
                  onLinkClick?.();
                }
              }}
            >
              {item.label}
              {hasChildren && <FaChevronDown className={styles.dropdownIcon} aria-hidden />}
            </a>
            {hasChildren && (
              <ul>
                {item.children!.map((child) => (
                  <li key={child.label}>
                    <a href={child.href} onClick={onLinkClick}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function MenuBar({
  activeId,
  sticky = false,
  mobileOpen,
  setMobileOpen,
}: {
  activeId: string;
  sticky?: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.left}>
          <Link href="/#home" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Cleaning Services London"
              className={styles.logoImg}
              width={220}
              height={56}
              onError={(e) => {
                e.currentTarget.src = "/images/logo-dark.svg";
              }}
            />
          </Link>
        </div>

        <div className={styles.menuBox}>
          {!sticky && (
            <button
              type="button"
              className={`${styles.mobileToggler} ${mobileOpen ? styles.mobileTogglerOpen : ""}`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          )}
          <NavLinks
            activeId={activeId}
            mobileOpen={mobileOpen}
            onLinkClick={() => setMobileOpen(false)}
            sticky={sticky}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.call}>
            <div className={styles.callIcon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.callContent}>
              <p className={styles.callSubTitle}>Call Anytime</p>
              <p className={styles.callNumber}>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </p>
            </div>
          </div>

          {!sticky && (
            <div className={styles.sidebarIcon}>
              <button type="button" className={styles.navSidebarButton} aria-label="Sidebar">
                <span className={styles.dotsOne} />
                <span className={styles.dotsTwo} />
                <span className={styles.dotsThree} />
              </button>
            </div>
          )}

          <div className={styles.btnBox}>
            <ThmButton href="#contact">Get a Quote</ThmButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const headerEl = document.getElementById("main-header");
      const threshold = headerEl ? headerEl.offsetHeight + 100 : 200;
      setSticky(window.scrollY > threshold);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={styles.header} id="main-header">
        <nav className={styles.menu}>
          <div className={styles.top}>
            <div className={styles.topInner}>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>
                    <FaEnvelope />
                  </span>
                  <span className={styles.contactText}>
                    <p>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </p>
                  </span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FaPhoneAlt />
                  </span>
                  <span className={styles.contactText}>
                    <p>
                      <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                    </p>
                  </span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </span>
                  <span className={styles.contactText}>
                    <p>{contactInfo.address}</p>
                  </span>
                </li>
              </ul>

              <div className={styles.topRight}>
                <span className={styles.socialTitle}>Follow Us On:</span>
                <div className={styles.social}>
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.icon];
                    return (
                      <a key={link.label} href={link.href} aria-label={link.label}>
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <MenuBar
            activeId={activeId}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </nav>
      </header>

      <div className={`${styles.stickyHeader} ${sticky ? styles.stickyVisible : ""}`}>
        <MenuBar
          activeId={activeId}
          sticky
          mobileOpen={false}
          setMobileOpen={setMobileOpen}
        />
      </div>
    </>
  );
}
