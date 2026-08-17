import Link from "next/link";
import { PiCloudRainDuotone } from "react-icons/pi";
import styles from "@/components/carpet/CarpetWorthItAltSection.module.css";
import local from "./GutterIncludedSection.module.css";
import {
  gutterIncludedClosing,
  gutterIncludedEquipment,
  gutterIncludedImage,
  gutterIncludedImageAlt,
  gutterIncludedIntroAfter,
  gutterIncludedIntroBefore,
  gutterIncludedIntroLinkLabel,
  gutterIncludedMethods,
  gutterIncludedTitle,
} from "./gutterIncludedData";

export default function GutterIncludedSection() {
  return (
    <section
      className={styles.section}
      id="gutter-included"
      aria-labelledby="gutter-included-title"
    >
      <div className={styles.glowOne} aria-hidden />
      <div className={styles.glowTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>
            <span role="img" aria-label="Complete gutter care icon">
              <PiCloudRainDuotone aria-hidden />
            </span>
            Complete Gutter Care
          </span>
          <h2 className={styles.title} id="gutter-included-title">
            {gutterIncludedTitle}
          </h2>
          <div className={styles.introBlock}>
            <p className={styles.text}>
              {gutterIncludedIntroBefore}
              <Link href="/services" className={local.internalLink}>
                {gutterIncludedIntroLinkLabel}
              </Link>
              {gutterIncludedIntroAfter}
            </p>
          </div>
        </header>

        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.visual} ${local.visual}`}>
            <div className={styles.frameOuter} aria-hidden />
            <div className={`${styles.frameInner} ${local.frameInner}`}>
              <img
                src={gutterIncludedImage}
                alt={gutterIncludedImageAlt}
                loading="lazy"
              />
            </div>
            <div className={styles.visualTag}>
              <span>Clear</span>
              <strong>Flowing</strong>
              <span>Protected</span>
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <div className={`${styles.pointsWrap} ${local.bodyWrap}`}>
              <div className={local.bodyCopy}>
                <p className={styles.text}>{gutterIncludedEquipment}</p>
                <p className={styles.text}>{gutterIncludedMethods}</p>
              </div>

              <div className={styles.closing}>
                <p>{gutterIncludedClosing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
