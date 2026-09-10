import {
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaHome,
  FaClock,
  FaUser,
  FaSprayCan,
  FaCheck,
  FaArrowUp,
  FaThumbsUp,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  caseStudyApproach,
  caseStudyBeforeAfter,
  caseStudyChallenge,
  caseStudyCta,
  caseStudyQuote,
  caseStudyResult,
  caseStudySnapshot,
} from "./caseStudyData";
import styles from "./CaseStudy.module.css";
import aboutStyles from "@/components/about/AboutUs.module.css";
import approachStyles from "./CaseStudyApproach.module.css";
import resultStyles from "./CaseStudyResult.module.css";
import quoteStyles from "./CaseStudyQuote.module.css";
import beforeAfterStyles from "./CaseStudyBeforeAfter.module.css";

const snapshotIcons = {
  location: FaMapMarkerAlt,
  property: FaHome,
  services: FaSprayCan,
  team: FaUser,
  duration: FaClock,
};

const imgBase = "/images/about/cleanon";

export default function CaseStudyContent() {
  return (
    <>
      <section
        className={styles.snapshotSection}
        aria-labelledby="job-snapshot-title"
      >
        <div className={styles.snapshotContainer}>
          <h2 className={styles.snapshotTitle} id="job-snapshot-title">
            {caseStudySnapshot.title}
          </h2>

          <ul className={styles.snapshotGrid}>
            {caseStudySnapshot.items.map((item) => {
              const Icon = snapshotIcons[item.icon];
              return (
                <li key={item.label} className={styles.snapshotCard}>
                  <span className={styles.snapshotIconWrap} aria-hidden>
                    <Icon />
                  </span>
                  <div className={styles.snapshotCardContent}>
                    <span className={styles.snapshotCardLabel}>{item.label}</span>
                    <strong className={styles.snapshotCardValue}>{item.value}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className={styles.challengeSection}
        aria-labelledby="challenge-title"
      >
        <div className={styles.challengeContainer}>
          <div className={styles.challengeGuide}>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCopy}>
                <h2 className={styles.title} id="challenge-title">
                  {caseStudyChallenge.title}
                </h2>
                {caseStudyChallenge.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className={styles.challengeText}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.challengeVisual}>
                <div className={styles.challengeImgWrap}>
                  <img
                    src={caseStudyBeforeAfter.before.src}
                    alt={caseStudyBeforeAfter.before.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={aboutStyles.about}
        aria-labelledby="approach-title"
      >
        <span className={aboutStyles.bgShape} aria-hidden />

        <div className={aboutStyles.container}>
          <div
            className={`${aboutStyles.grid} ${aboutStyles.gridEqual} ${approachStyles.grid}`}
          >
            <div className={`${aboutStyles.media} ${approachStyles.media}`}>
              <div className={aboutStyles.frame}>
                <span className={aboutStyles.frameAccent} aria-hidden />
                <div className={aboutStyles.imgMain}>
                  <img
                    src={caseStudyBeforeAfter.after.src}
                    alt={caseStudyBeforeAfter.after.alt}
                    loading="lazy"
                  />
                </div>

                <div className={aboutStyles.imgSecondary}>
                  <img
                    src={caseStudyBeforeAfter.before.src}
                    alt={caseStudyBeforeAfter.before.alt}
                    loading="lazy"
                  />
                </div>

                <div className={aboutStyles.seal}>
                  <div
                    className={aboutStyles.sealBg}
                    style={{
                      backgroundImage: `url('${imgBase}/decorative-satisfaction-guarantee-badge-bg.webp')`,
                    }}
                    aria-hidden
                  />
                  <img
                    src={`${imgBase}/satisfaction-guarantee-badge-icon.webp`}
                    alt="Job completed within approximately 3 hours"
                    loading="lazy"
                  />
                  <strong>3h</strong>
                  <span>Done</span>
                </div>
              </div>
            </div>

            <div className={`${aboutStyles.content} ${approachStyles.content}`}>
              <h2
                className={`${aboutStyles.title} ${approachStyles.title}`}
                id="approach-title"
              >
                {caseStudyApproach.title}
              </h2>

              <blockquote className={aboutStyles.callout}>
                <p>{caseStudyApproach.intro}</p>
              </blockquote>

              <ul className={approachStyles.points}>
                {caseStudyApproach.steps.map((step) => (
                  <li key={step}>
                    <span className={approachStyles.pointIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className={beforeAfterStyles.section}
        aria-labelledby="before-after-title"
      >
        <div className={beforeAfterStyles.container}>
          <h2 className={beforeAfterStyles.title} id="before-after-title">
            {caseStudyBeforeAfter.title}
          </h2>
          <p className={beforeAfterStyles.subtitle}>
            {caseStudyBeforeAfter.subtitle}
          </p>

          <div className={beforeAfterStyles.heroCompare}>
            <figure className={beforeAfterStyles.heroFigure}>
              <span className={beforeAfterStyles.badge}>
                {caseStudyBeforeAfter.before.label}
              </span>
              <img
                className={beforeAfterStyles.heroImg}
                src={caseStudyBeforeAfter.before.src}
                alt={caseStudyBeforeAfter.before.alt}
                loading="lazy"
              />
            </figure>
            <figure className={beforeAfterStyles.heroFigure}>
              <span
                className={`${beforeAfterStyles.badge} ${beforeAfterStyles.badgeAfter}`}
              >
                {caseStudyBeforeAfter.after.label}
              </span>
              <img
                className={beforeAfterStyles.heroImg}
                src={caseStudyBeforeAfter.after.src}
                alt={caseStudyBeforeAfter.after.alt}
                loading="lazy"
              />
            </figure>
          </div>

          <div className={beforeAfterStyles.detailsGrid}>
            {caseStudyBeforeAfter.details.map((item) => (
              <article key={item.title} className={beforeAfterStyles.detailCard}>
                <div className={beforeAfterStyles.detailPair}>
                  <figure className={beforeAfterStyles.detailFigure}>
                    <span className={beforeAfterStyles.detailBadge}>Before</span>
                    <img
                      className={beforeAfterStyles.detailImg}
                      src={item.beforeSrc}
                      alt={item.beforeAlt}
                      loading="lazy"
                    />
                  </figure>
                  <figure className={beforeAfterStyles.detailFigure}>
                    <span
                      className={`${beforeAfterStyles.detailBadge} ${beforeAfterStyles.detailBadgeAfter}`}
                    >
                      After
                    </span>
                    <img
                      className={beforeAfterStyles.detailImg}
                      src={item.afterSrc}
                      alt={item.afterAlt}
                      loading="lazy"
                    />
                  </figure>
                </div>
                <h3 className={beforeAfterStyles.detailTitle}>{item.title}</h3>
                <p className={beforeAfterStyles.detailCaption}>{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={resultStyles.section}
        aria-labelledby="result-title"
      >
        <div className={resultStyles.container}>
          <header className={resultStyles.header}>
            <div className={resultStyles.headerCopy}>
              <span className={resultStyles.badge}>
                <span className={resultStyles.badgeDot} aria-hidden />
                {caseStudyResult.badge}
              </span>
              <h2 className={resultStyles.title} id="result-title">
                {caseStudyResult.title}
              </h2>
            </div>
            <p className={resultStyles.description}>
              {caseStudyResult.description}
            </p>
          </header>

          <div className={resultStyles.body}>
            <div className={resultStyles.media}>
              <img
                className={resultStyles.mediaImg}
                src={caseStudyResult.image.src}
                alt={caseStudyResult.image.alt}
                loading="lazy"
              />

              <div className={resultStyles.floatCard}>
                <a
                  href={caseStudyResult.cta.href}
                  className={resultStyles.ctaBtn}
                >
                  {caseStudyResult.cta.label}
                  <span className={resultStyles.ctaIcon} aria-hidden>
                    <FaArrowUp style={{ transform: "rotate(45deg)" }} />
                  </span>
                </a>
                <div className={resultStyles.highlight}>
                  <strong className={resultStyles.highlightValue}>
                    {caseStudyResult.highlight.value}
                  </strong>
                  <span className={resultStyles.highlightLabel}>
                    {caseStudyResult.highlight.label}
                  </span>
                </div>
              </div>
            </div>

            <div className={resultStyles.statsPanel}>
              <div className={resultStyles.satisfactionCard}>
                <div className={resultStyles.satisfactionCopy}>
                  <strong className={resultStyles.satisfactionValue}>
                    {caseStudyResult.satisfaction.value}
                  </strong>
                  <p className={resultStyles.satisfactionLabel}>
                    {caseStudyResult.satisfaction.label}
                  </p>
                </div>
                <span className={resultStyles.satisfactionIcon} aria-hidden>
                  <FaThumbsUp />
                </span>
              </div>

              <div className={resultStyles.experienceCard}>
                <p className={resultStyles.experienceLabel}>
                  {caseStudyResult.experience.label}
                </p>
                <strong className={resultStyles.experienceValue}>
                  {caseStudyResult.experience.value}
                </strong>

                <ul className={resultStyles.extrasGrid}>
                  {caseStudyResult.extras.map((item) => (
                    <li key={item.label} className={resultStyles.extraItem}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={quoteStyles.section}
        aria-labelledby="client-quote-title"
      >
        <div className={quoteStyles.container}>
          <h2 className={quoteStyles.title} id="client-quote-title">
            {caseStudyQuote.title}
          </h2>

          <div className={quoteStyles.card}>
            <div className={quoteStyles.media}>
              <img
                className={quoteStyles.mediaImg}
                src={caseStudyQuote.image.src}
                alt={caseStudyQuote.image.alt}
                loading="lazy"
              />
              <span className={quoteStyles.mediaBadge}>After Clean</span>
            </div>

            <blockquote className={quoteStyles.quoteBody}>
              <div className={quoteStyles.quoteMark} aria-hidden>
                “
              </div>
              <p className={quoteStyles.quoteText}>{caseStudyQuote.text}</p>
              <div className={quoteStyles.authorRow}>
                <span className={quoteStyles.avatar} aria-hidden>
                  {caseStudyQuote.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className={quoteStyles.authorMeta}>
                  <p className={quoteStyles.quoteAuthor}>{caseStudyQuote.author}</p>
                  <p className={quoteStyles.quoteRole}>{caseStudyQuote.role}</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        className={styles.ctaSection}
        aria-labelledby="case-study-cta-title"
      >
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaCopy}>
              <h2 className={styles.ctaTitle} id="case-study-cta-title">
                {caseStudyCta.title}
              </h2>
              <p className={styles.ctaText}>
                Speak with our team for a free quotation if you need urgent mould
                removal, deep cleaning or domestic cleaning support in East London.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <ThmButton href={caseStudyCta.href}>
                <FaCalendarCheck aria-hidden />
                {caseStudyCta.button}
              </ThmButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
