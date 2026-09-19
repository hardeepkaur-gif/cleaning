import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "./ProfessionalCleanSimple.module.css";
import {
  includedExtraAfter,
  includedExtraBefore,
  includedExtraLinkLabel,
  includedImage,
  includedImageAlt,
  includedIntro,
  includedPoints,
  includedTitle,
} from "./includedData";

export default function ProfessionalClean() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="professional-clean"
      aria-labelledby="included-title"
    >
      <div className={`${styles.glowOne} ${local.glowOne}`} aria-hidden />
      <div className={`${styles.glowTwo} ${local.glowTwo}`} aria-hidden />

      <div className={styles.container}>
        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img
                src={includedImage}
                alt={includedImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Clean</span>
              <strong>Thorough</strong>
              <span>Reliable</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div className={`${styles.pointsWrap} ${local.pointsWrap}`}>
              <header className={local.copyHeader}>
                <h2 className={`${styles.title} ${local.copyTitle}`} id="included-title">
                  {includedTitle}
                </h2>
                <p className={`${styles.text} ${local.copyIntro}`}>
                  {includedIntro}
                </p>
              </header>

              <ul className={styles.points}>
                {includedPoints.map((item) => (
                  <li key={item}>
                    <span className={styles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span className={`${styles.pointText} ${local.pointText}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.closing}>
                <p>
                  {includedExtraBefore}
                  <Link
                    href="/domestic-cleaning-services"
                    className={local.internalLink}
                  >
                    {includedExtraLinkLabel}
                  </Link>
                  {includedExtraAfter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
