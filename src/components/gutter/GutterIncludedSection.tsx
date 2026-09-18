import {
  gutterIncludedEquipment,
  gutterIncludedFeatures,
  gutterIncludedHighlightIcon,
  gutterIncludedHighlightText,
  gutterIncludedHighlightTitle,
  gutterIncludedImage,
  gutterIncludedImageAlt,
  gutterIncludedIntro,
  gutterIncludedMethods,
  gutterIncludedProtectIcon,
  gutterIncludedProtectLabel,
  gutterIncludedTitleAccent,
  gutterIncludedTitleAfter,
  gutterIncludedTitleBefore,
} from "./gutterIncludedData";
import styles from "./GutterIncludedSection.module.css";

export default function GutterIncludedSection() {
  const ProtectIcon = gutterIncludedProtectIcon;
  const HighlightIcon = gutterIncludedHighlightIcon;

  return (
    <section
      className={styles.section}
      id="gutter-included"
      aria-labelledby="gutter-included-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="gutter-included-title">
            {gutterIncludedTitleBefore}
            <span className={styles.titleAccent}>{gutterIncludedTitleAccent}</span>
            {gutterIncludedTitleAfter}
          </h2>
          <p className={styles.intro}>{gutterIncludedIntro}</p>
        </header>

        <div className={styles.layout}>
          <div className={styles.mediaCol}>
            <div className={styles.mediaStage}>
              <img
                className={styles.mediaImg}
                src={gutterIncludedImage}
                alt={gutterIncludedImageAlt}
                loading="lazy"
              />
              <div className={styles.mediaFade} aria-hidden />

              <div className={styles.protectBadge}>
                <span className={styles.protectIcon} aria-hidden>
                  <ProtectIcon />
                </span>
                <span>{gutterIncludedProtectLabel}</span>
              </div>

              <div className={styles.featureRail}>
                <svg
                  className={styles.featureCurve}
                  viewBox="0 0 40 560"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M20 18 C 6 90, 34 160, 20 230 C 6 300, 34 370, 20 440 C 10 490, 28 530, 20 542"
                    fill="none"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                <ul className={styles.featureList}>
                  {gutterIncludedFeatures.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.id} className={styles.featureItem}>
                        <span className={styles.featureDot} aria-hidden />
                        <div className={styles.featurePill}>
                          <span
                            className={styles.featureIcon}
                            role="img"
                            aria-label={item.iconAlt}
                          >
                            <Icon aria-hidden />
                          </span>
                          <div className={styles.featureCopy}>
                            <strong>{item.title}</strong>
                            <span>{item.text}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.copyCol}>
            <div className={styles.copyCard}>
              <p className={styles.copyText}>{gutterIncludedEquipment}</p>
              <p className={styles.copyText}>{gutterIncludedMethods}</p>

              <div className={styles.highlight}>
                <span className={styles.highlightIcon} aria-hidden>
                  <HighlightIcon />
                </span>
                <div>
                  <h3 className={styles.highlightTitle}>
                    {gutterIncludedHighlightTitle}
                  </h3>
                  <p className={styles.highlightText}>
                    {gutterIncludedHighlightText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
