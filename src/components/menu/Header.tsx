"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isNavItemActive(
  pathname: string,
  href: string,
  children?: { href: string }[],
) {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return Boolean(
    children?.some(
      (child) =>
        pathname === child.href || pathname.startsWith(`${child.href}/`),
    ),
  );
}

type NavLinksProps = {
  pathname: string;
  mobileOpen?: boolean;
  onLinkClick?: () => void;
  sticky?: boolean;
};

function NavLinks({ pathname, mobileOpen, onLinkClick, sticky }: NavLinksProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <ul
      className={`${styles.list} ${mobileOpen ? styles.listOpen : ""} ${sticky ? styles.listSticky : ""}`}
    >
      {navItems.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isActive = isNavItemActive(pathname, item.href, item.children);

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
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  );
                } else {
                  onLinkClick?.();
                }
              }}
            >
              {item.label}
              {hasChildren && (
                <FaChevronDown className={styles.dropdownIcon} aria-hidden />
              )}
            </a>
            {hasChildren && (
              <ul>
                {item.children!.map((child) => {
                  const childActive =
                    pathname === child.href ||
                    pathname.startsWith(`${child.href}/`);
                  return (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className={childActive ? styles.subLinkActive : ""}
                        onClick={onLinkClick}
                      >
                        {child.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function MenuBar({
  pathname,
  sticky = false,
  mobileOpen,
  setMobileOpen,
}: {
  pathname: string;
  sticky?: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.left}>
          <Link
            href="/"
            className={styles.logo}
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/images/logo.webp"
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
            pathname={pathname}
            mobileOpen={mobileOpen}
            onLinkClick={() => setMobileOpen(false)}
            sticky={sticky}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.call}>
            <div
              className={styles.callIcon}
              role="img"
              aria-label="Call anytime phone icon"
            >
              <FaPhoneAlt aria-hidden />
            </div>
            <div className={styles.callContent}>
              <p className={styles.callSubTitle}>Call Anytime</p>
              <p className={styles.callNumber}>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </p>
            </div>
          </div>

          <div className={styles.btnBox}>
            <ThmButton href="/contact-us">Get a Quote</ThmButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const headerEl = document.getElementById("main-header");
      const threshold = headerEl ? headerEl.offsetHeight + 100 : 200;
      setSticky(window.scrollY > threshold);
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
                  <span
                    className={styles.contactIcon}
                    role="img"
                    aria-label="Email contact icon"
                  >
                    <FaEnvelope aria-hidden />
                  </span>
                  <span className={styles.contactText}>
                    <p>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </p>
                  </span>
                </li>
                <li>
                  <span
                    className={styles.contactIcon}
                    role="img"
                    aria-label="Phone contact icon"
                  >
                    <FaPhoneAlt aria-hidden />
                  </span>
                  <span className={styles.contactText}>
                    <p>
                      <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                    </p>
                  </span>
                </li>
                <li>
                  <span
                    className={styles.contactIcon}
                    role="img"
                    aria-label="Office address location icon"
                  >
                    <FaMapMarkerAlt aria-hidden />
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
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <MenuBar
            pathname={pathname}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </nav>
      </header>

      <div
        className={`${styles.stickyHeader} ${sticky ? styles.stickyVisible : ""}`}
      >
        <MenuBar
          pathname={pathname}
          sticky
          mobileOpen={false}
          setMobileOpen={setMobileOpen}
        />
      </div>
    </>
  );
}
