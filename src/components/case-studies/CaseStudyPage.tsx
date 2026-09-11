import Link from "next/link";
import {
  caseStudyApproach,
  caseStudyBeforeAfter,
  caseStudyChallenge,
  caseStudyCta,
  caseStudyHero,
  caseStudyQuote,
  caseStudyResult,
  caseStudySnapshot,
} from "./caseStudyData";
import CaseStudyReveal from "./CaseStudyReveal";
import styles from "./CaseStudyPage.module.css";

export default function CaseStudyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="case-study-page-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <div className={styles.eyebrow}>{caseStudyHero.eyebrow}</div>
            <h1 className={styles.heroTitle} id="case-study-page-title">
              {caseStudyHero.titleLead}{" "}
              <span>{caseStudyHero.titleAccent}</span>
            </h1>
            <p className={styles.heroDescription}>{caseStudyHero.description}</p>
            <Link href={caseStudyHero.primaryCta.href} className={styles.btn}>
              {caseStudyHero.primaryCta.label} →
            </Link>
          </div>

          <div className={styles.heroImage}>
            <img
              src={caseStudyHero.image.src}
              alt={caseStudyHero.image.alt}
            />
            <div className={styles.heroTag}>
              {caseStudyHero.tags.map((tag) => (
                <div key={tag.title}>
                  <strong>{tag.title}</strong>
                  <small>{tag.text}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.snapshot} aria-label="Job snapshot">
        <div className={styles.container}>
          <div className={styles.snapshotCard}>
            {caseStudySnapshot.items.map((item) => (
              <div key={item.label} className={styles.snapshotItem}>
                <div className={styles.snapshotLabel}>{item.label}</div>
                <div className={styles.snapshotValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionSoft}`}
        aria-labelledby="challenge-title"
      >
        <div className={`${styles.container} ${styles.challengeGrid}`}>
          <div>
            <div className={styles.eyebrow}>{caseStudyChallenge.eyebrow}</div>
            <h2 className={styles.challengeTitle} id="challenge-title">
              {caseStudyChallenge.title}
            </h2>
            {caseStudyChallenge.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={styles.challengeText}>
                {paragraph}
              </p>
            ))}
            <ul className={styles.challengeList}>
              {caseStudyChallenge.points.map((point) => (
                <li key={point}>
                  <span aria-hidden>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.challengeImage}>
            <img
              src={caseStudyChallenge.image.src}
              alt={caseStudyChallenge.image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.approach}`}
        aria-labelledby="approach-title"
      >
        <div className={styles.container}>
          <CaseStudyReveal>
            <div className={styles.approachIntro}>
              <div>
                <div className={styles.eyebrow}>{caseStudyApproach.eyebrow}</div>
                <h2 className={styles.approachTitle} id="approach-title">
                  {caseStudyApproach.title}
                </h2>
              </div>
              <p>{caseStudyApproach.intro}</p>
            </div>
          </CaseStudyReveal>

          <div className={styles.processGrid}>
            {caseStudyApproach.steps.map((step) => (
              <CaseStudyReveal key={step.number}>
                <article className={styles.processCard}>
                  <div className={styles.processNumber}>
                    <div className={styles.number}>{step.number}</div>
                    <div className={styles.processIcon} aria-hidden>
                      {step.icon}
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <img src={step.image} alt={step.imageAlt} loading="lazy" />
                </article>
              </CaseStudyReveal>
            ))}
          </div>

          <CaseStudyReveal>
            <div className={styles.timeBar}>
              <div className={styles.timeMain}>
                <div className={styles.timeIcon} aria-hidden>
                  ◷
                </div>
                <div>
                  <span>{caseStudyApproach.timeBar.label}</span>
                  <strong>{caseStudyApproach.timeBar.value}</strong>
                </div>
              </div>
              {caseStudyApproach.timeBar.items.map((item) => (
                <div key={item.title} className={styles.timeSide}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </CaseStudyReveal>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.beforeAfter}`}
        aria-labelledby="before-after-title"
      >
        <div className={styles.container}>
          <div className={styles.baHeader}>
            <div>
              <div className={styles.eyebrow}>{caseStudyBeforeAfter.eyebrow}</div>
              <h2 id="before-after-title">{caseStudyBeforeAfter.title}</h2>
            </div>
            <p>{caseStudyBeforeAfter.subtitle}</p>
          </div>

          <div className={styles.baGrid}>
            {caseStudyBeforeAfter.details.map((item) => (
              <article key={item.title} className={styles.baCard}>
                <div className={styles.baImages}>
                  <div>
                    <span className={`${styles.baLabel} ${styles.baBefore}`}>
                      Before
                    </span>
                    <img
                      src={item.beforeSrc}
                      alt={item.beforeAlt}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className={`${styles.baLabel} ${styles.baAfter}`}>
                      After
                    </span>
                    <img
                      src={item.afterSrc}
                      alt={item.afterAlt}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={styles.baContent}>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="result-title">
        <div className={styles.container}>
          <div className={styles.resultGrid}>
            <div className={styles.resultImage}>
              <img
                src={caseStudyResult.image.src}
                alt={caseStudyResult.image.alt}
                loading="lazy"
              />
            </div>
            <div className={styles.resultContent}>
              <div className={styles.eyebrow}>{caseStudyResult.eyebrow}</div>
              <h2 id="result-title">{caseStudyResult.title}</h2>
              {caseStudyResult.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <Link href={caseStudyResult.cta.href} className={styles.btn}>
                {caseStudyResult.cta.label} →
              </Link>
            </div>
          </div>

          <div className={styles.metrics}>
            {caseStudyResult.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.testimonial}`}
        aria-labelledby="client-quote-title"
      >
        <div className={`${styles.container} ${styles.testimonialGrid}`}>
          <div>
            <div className={styles.eyebrow}>Client Feedback</div>
            <h2 id="client-quote-title" className={styles.testimonialTitle}>
              {caseStudyQuote.eyebrow}
            </h2>
            <div className={styles.quoteMark} aria-hidden>
              “
            </div>
            <blockquote className={styles.quoteText}>
              {caseStudyQuote.text}
            </blockquote>
            <div className={styles.client}>
              <div className={styles.clientAvatar} aria-hidden>
                {caseStudyQuote.initials}
              </div>
              <div>
                <strong>{caseStudyQuote.author}</strong>
                <span>{caseStudyQuote.role}</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonialImage}>
            <img
              src={caseStudyQuote.image.src}
              alt={caseStudyQuote.image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.cta} id="quote" aria-labelledby="case-study-cta-title">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <div className={styles.eyebrow}>{caseStudyCta.eyebrow}</div>
              <h2 id="case-study-cta-title">{caseStudyCta.title}</h2>
              <p>{caseStudyCta.text}</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={caseStudyCta.primary.href} className={styles.btn}>
                {caseStudyCta.primary.label} →
              </Link>
              <Link
                href={caseStudyCta.secondary.href}
                className={styles.btnOutline}
              >
                {caseStudyCta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
