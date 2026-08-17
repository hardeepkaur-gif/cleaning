import Link from "next/link";
import { FaCalendarCheck, FaCheck } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/about/AboutUs.module.css";
import local from "./GutterSignsSection.module.css";
import {
  gutterSignsClosing,
  gutterSignsCtaLabel,
  gutterSignsCtaNote,
  gutterSignsImages,
  gutterSignsIntroAfter,
  gutterSignsIntroBefore,
  gutterSignsIntroLinkLabel,
  gutterSignsMainAlt,
  gutterSignsPoints,
  gutterSignsSecondaryAlt,
  gutterSignsSealIconAlt,
  gutterSignsTitle,
} from "./gutterSignsData";

const imgBase = "/images/about/cleanon";

export default function GutterSignsSection() {
  return (
    <section
      className={styles.about}
      id="gutter-signs"
      aria-labelledby="gutter-signs-title"
    >
      <span className={styles.bgShape} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.grid} ${local.grid}`}>
          <div className={`${styles.media} ${local.media}`}>
            <div className={styles.frame}>
              <span className={styles.frameAccent} aria-hidden />
              <div className={styles.imgMain}>
                <img
                  src={gutterSignsImages.main}
                  alt={gutterSignsMainAlt}
                  loading="lazy"
                />
              </div>

              <div className={styles.imgSecondary}>
                <img
                  src={gutterSignsImages.secondary}
                  alt={gutterSignsSecondaryAlt}
                  loading="lazy"
                />
              </div>

              <div className={styles.seal}>
                <div
                  className={styles.sealBg}
                  style={{
                    backgroundImage: `url('${imgBase}/decorative-satisfaction-guarantee-badge-bg.webp')`,
                  }}
                  aria-hidden
                />
                <img
                  src={`${imgBase}/satisfaction-guarantee-badge-icon.webp`}
                  alt={gutterSignsSealIconAlt}
                  loading="lazy"
                />
                <strong>Act</strong>
                <span>Early</span>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${local.content}`}>
            <h2
              className={`${styles.title} ${local.title}`}
              id="gutter-signs-title"
            >
              {gutterSignsTitle}
            </h2>

            <blockquote className={styles.callout}>
              <p>
                {gutterSignsIntroBefore}
                <Link href="/contact-us" className={styles.internalLink}>
                  {gutterSignsIntroLinkLabel}
                </Link>
                {gutterSignsIntroAfter}
              </p>
            </blockquote>

            <ul className={local.points}>
              {gutterSignsPoints.map((item) => (
                <li key={item}>
                  <span className={local.pointIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className={local.closing}>{gutterSignsClosing}</p>
            <p className={local.ctaNote}>{gutterSignsCtaNote}</p>
            <ThmButton href="/contact-us" className={local.ctaBtn}>
              <FaCalendarCheck aria-hidden />
              {gutterSignsCtaLabel}
            </ThmButton>
          </div>
        </div>
      </div>
    </section>
  );
}
