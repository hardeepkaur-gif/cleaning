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
  mouldCaseStudyDesignA,
  type CaseStudyDesignAData,
} from "./caseStudyData";
import styles from "./CaseStudy.module.css";
import aboutStyles from "@/components/about/AboutUs.module.css";
import approachStyles from "./CaseStudyApproach.module.css";
import resultStyles from "./CaseStudyResult.module.css";
import quoteStyles from "./CaseStudyQuote.module.css";
import beforeAfterStyles from "./CaseStudyBeforeAfter.module.css";
import BeforeAfterSlider from "./BeforeAfterSlider";

const snapshotIcons = {
  location: FaMapMarkerAlt,
  property: FaHome,
  services: FaSprayCan,
  team: FaUser,
  duration: FaClock,
};

const imgBase = "/images/about/cleanon";

type CaseStudyContentProps = {
  data?: CaseStudyDesignAData;
};

export default function CaseStudyContent({
  data = mouldCaseStudyDesignA,
}: CaseStudyContentProps) {
  const {
    snapshot,
    challenge,
    approach,
    beforeAfter,
    result,
    quote,
    cta,
  } = data;

  return (
    <>
      <section
        className={styles.snapshotSection}
        aria-labelledby="job-snapshot-title"
      >
        <div className={styles.snapshotContainer}>
          <h2 className={styles.snapshotTitle} id="job-snapshot-title">
            {snapshot.title}
          </h2>

          <ul className={styles.snapshotGrid}>
            {snapshot.items.map((item) => {
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
                  {challenge.title}
                </h2>
                {challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className={styles.challengeText}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.challengeVisual}>
                <div className={styles.challengeImgWrap}>
                  <img
                    src={challenge.image?.src ?? beforeAfter.before.src}
                    alt={challenge.image?.alt ?? beforeAfter.before.alt}
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
                    src={approach.image?.src ?? beforeAfter.after.src}
                    alt={approach.image?.alt ?? beforeAfter.after.alt}
                    loading="lazy"
                  />
                </div>

                <div className={aboutStyles.imgSecondary}>
                  <img
                    src={
                      approach.imageSecondary?.src ?? beforeAfter.before.src
                    }
                    alt={
                      approach.imageSecondary?.alt ?? beforeAfter.before.alt
                    }
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
                    alt={approach.sealAlt}
                    loading="lazy"
                  />
                  <strong>{approach.sealValue}</strong>
                  <span>{approach.sealLabel}</span>
                </div>
              </div>
            </div>

            <div className={`${aboutStyles.content} ${approachStyles.content}`}>
              <h2
                className={`${aboutStyles.title} ${approachStyles.title}`}
                id="approach-title"
              >
                {approach.title}
              </h2>

              <blockquote className={aboutStyles.callout}>
                <p>{approach.intro}</p>
              </blockquote>

              <ul className={approachStyles.points}>
                {approach.steps.map((step) => (
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
            {beforeAfter.title}
          </h2>
          <p className={beforeAfterStyles.subtitle}>
            {beforeAfter.subtitle}
          </p>

          <div className={beforeAfterStyles.heroCompare}>
            <BeforeAfterSlider
              beforeSrc={beforeAfter.before.src}
              afterSrc={beforeAfter.after.src}
              beforeAlt={beforeAfter.before.alt}
              afterAlt={beforeAfter.after.alt}
              beforeLabel={beforeAfter.before.label}
              afterLabel={beforeAfter.after.label}
              styles={beforeAfterStyles}
            />
          </div>

          <div className={beforeAfterStyles.detailsGrid}>
            {beforeAfter.details.map((item) => (
              <article key={item.title} className={beforeAfterStyles.detailCard}>
                <div className={beforeAfterStyles.detailPair}>
                  <BeforeAfterSlider
                    beforeSrc={item.beforeSrc}
                    afterSrc={item.afterSrc}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                    styles={beforeAfterStyles}
                    className={beforeAfterStyles.detailSlider}
                  />
                </div>
                <h3 className={beforeAfterStyles.detailTitle}>{item.title}</h3>
                <p className={beforeAfterStyles.detailCaption}>{item.caption}</p>
              </article>
            ))}
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
                {cta.title}
              </h2>
              <p className={styles.ctaText}>{cta.text}</p>
            </div>
            <div className={styles.ctaAction}>
              <ThmButton href={cta.href}>
                <FaCalendarCheck aria-hidden />
                {cta.button}
              </ThmButton>
            </div>
          </div>
        </div>
      </section>

      <section
        className={resultStyles.section}
        aria-labelledby="result-title"
      >
        <div className={resultStyles.container}>
          <header
            className={`${resultStyles.header}${
              result.headerStacked ? ` ${resultStyles.headerStacked}` : ""
            }`}
          >
            <div className={resultStyles.headerCopy}>
              <h2 className={resultStyles.title} id="result-title">
                {result.title}
              </h2>
            </div>
            <p className={resultStyles.description}>
              {result.description}
            </p>
          </header>

          <div className={resultStyles.body}>
            <div className={resultStyles.media}>
              <img
                className={resultStyles.mediaImg}
                src={result.image.src}
                alt={result.image.alt}
                loading="lazy"
              />

              <div className={resultStyles.floatCard}>
                <a href={result.cta.href} className={resultStyles.ctaBtn}>
                  {result.cta.label}
                  <span className={resultStyles.ctaIcon} aria-hidden>
                    <FaArrowUp style={{ transform: "rotate(45deg)" }} />
                  </span>
                </a>
                <div className={resultStyles.highlight}>
                  <strong className={resultStyles.highlightValue}>
                    {result.highlight.value}
                  </strong>
                  <span className={resultStyles.highlightLabel}>
                    {result.highlight.label}
                  </span>
                </div>
              </div>
            </div>

            <div className={resultStyles.statsPanel}>
              <div className={resultStyles.satisfactionCard}>
                <div className={resultStyles.satisfactionCopy}>
                  <strong className={resultStyles.satisfactionValue}>
                    {result.satisfaction.value}
                  </strong>
                  <p className={resultStyles.satisfactionLabel}>
                    {result.satisfaction.label}
                  </p>
                </div>
                <span className={resultStyles.satisfactionIcon} aria-hidden>
                  <FaThumbsUp />
                </span>
              </div>

              <div className={resultStyles.experienceCard}>
                <p className={resultStyles.experienceLabel}>
                  {result.experience.label}
                </p>
                <strong className={resultStyles.experienceValue}>
                  {result.experience.value}
                </strong>

                <ul className={resultStyles.extrasGrid}>
                  {result.extras.map((item) => (
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
            {quote.title}
          </h2>

          <div className={quoteStyles.card}>
            <div className={quoteStyles.media}>
              <img
                className={quoteStyles.mediaImg}
                src={quote.image.src}
                alt={quote.image.alt}
                loading="lazy"
              />
              <span className={quoteStyles.mediaBadge}>After Clean</span>
            </div>

            <blockquote className={quoteStyles.quoteBody}>
              <div className={quoteStyles.quoteMark} aria-hidden>
                “
              </div>
              <p className={quoteStyles.quoteText}>{quote.text}</p>
              <div className={quoteStyles.authorRow}>
                <span className={quoteStyles.avatar} aria-hidden>
                  {quote.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className={quoteStyles.authorMeta}>
                  <p className={quoteStyles.quoteAuthor}>{quote.author}</p>
                  <p className={quoteStyles.quoteRole}>{quote.role}</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
