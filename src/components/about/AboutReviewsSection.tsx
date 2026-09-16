import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import {
  aboutReviews,
  aboutReviewsIntro,
  aboutReviewsSummary,
  aboutReviewsTagline,
  aboutReviewsTitle,
} from "./aboutReviewsData";
import styles from "./AboutReviewsSection.module.css";

function GoogleMark() {
  return (
    <svg
      className={styles.googleMark}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={i < rating ? styles.starOn : styles.starOff}
          aria-hidden
        />
      ))}
    </span>
  );
}

export default function AboutReviewsSection() {
  return (
    <section
      className={styles.section}
      id="commitment-to-quality"
      aria-labelledby="about-reviews-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.tagline}>{aboutReviewsTagline}</p>
            <h2 className={styles.title} id="about-reviews-title">
              {aboutReviewsTitle}
            </h2>
            <p className={styles.intro}>{aboutReviewsIntro}</p>
          </div>

          <aside className={styles.summaryCard}>
            <div className={styles.summaryTop}>
              <GoogleMark />
              <div>
                <p className={styles.summaryLabel}>Google rating</p>
                <div className={styles.summaryScoreRow}>
                  <strong className={styles.summaryScore}>
                    {aboutReviewsSummary.rating}
                  </strong>
                  <Stars rating={5} />
                </div>
                <p className={styles.summaryCount}>
                  {aboutReviewsSummary.countLabel}
                </p>
              </div>
            </div>
            <a
              className={styles.summaryLink}
              href={aboutReviewsSummary.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutReviewsSummary.ctaLabel}
              <FaExternalLinkAlt aria-hidden />
            </a>
          </aside>
        </div>

        <div className={styles.grid}>
          {aboutReviews.map((review) => (
            <article key={`${review.name}-${review.timeAgo}`} className={styles.card}>
              <header className={styles.cardHead}>
                <span
                  className={styles.avatar}
                  style={{ background: review.avatarColor }}
                  aria-hidden
                >
                  {review.initial}
                </span>
                <div className={styles.meta}>
                  <div className={styles.nameRow}>
                    <strong className={styles.name}>{review.name}</strong>
                    <GoogleMark />
                  </div>
                  <p className={styles.metaLine}>
                    <span>Posted on Google</span>
                    <span className={styles.dot} aria-hidden>
                      ·
                    </span>
                    <span>{review.timeAgo}</span>
                    <span className={styles.dot} aria-hidden>
                      ·
                    </span>
                    <span>{review.location}</span>
                  </p>
                </div>
              </header>

              <Stars rating={review.rating} />
              <p className={styles.reviewText}>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
