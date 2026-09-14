import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaHome,
  FaSprayCan,
  FaUser,
  FaClock,
  FaShieldAlt,
  FaEye,
  FaBoxOpen,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import BeforeAfterSlider from "./BeforeAfterSlider";
import {
  caseStudyApproach,
  caseStudyBeforeAfter,
  caseStudyChallenge,
  caseStudyCta,
  caseStudyQuote,
  caseStudyResult,
  caseStudySnapshot,
} from "./caseStudyData";
import styles from "./CaseStudyV2.module.css";

const snapshotIcons = {
  location: FaMapMarkerAlt,
  property: FaHome,
  services: FaSprayCan,
  team: FaUser,
  duration: FaClock,
};

const stepIcons = [FaEye, FaBoxOpen, FaSprayCan, FaClipboardCheck];
const transformIcons = [FaSprayCan, FaBoxOpen, FaHome];

const keyStats = [
  { value: "3h", label: "Job completed within approximately 3 hours", icon: FaClock },
  { value: "Done", label: "Same day solution", icon: FaShieldAlt },
  { value: "1", label: "Cleaner on site", icon: FaUser },
  { value: "HMO", label: "Bedroom restored · Liveable", icon: FaHome },
];

const resultStats = [
  { value: "3h", label: "Hours to complete the job", icon: FaClock },
  { value: "Same day", label: "Urgent response", icon: FaShieldAlt },
  { value: "100%", label: "Wall treated and room restored", icon: FaCheckCircle },
];

const challengeCallouts = [
  { label: "Mould growth", top: "24%", left: "62%" },
  { label: "Damp patches", top: "52%", left: "38%" },
  { label: "Stained surfaces", top: "72%", left: "70%" },
];

const approachSteps = [
  { title: "Pre-inspection walkthrough", text: caseStudyApproach.steps[0] },
  {
    title: "Contaminated unit removed",
    text: caseStudyApproach.steps[1],
  },
  {
    title: "Wall treated thoroughly",
    text: caseStudyApproach.steps[2],
  },
  {
    title: "Inspection & sign-off",
    text: `${caseStudyApproach.steps[3]} ${caseStudyApproach.steps[4]}`,
  },
];

export default function CaseStudyV2() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="case-study-v2-title">
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              Case Study / Mould Removal & Deep Clean
            </span>
            <h1 className={styles.heroTitle} id="case-study-v2-title">
              Mould Removal & Deep Clean In{" "}
              <span>Canning Town, East London</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Always Been So Professional In Handling Our Teams.
            </p>
            <ThmButton href="/contact-us">
              Get a Free Quote
              <FaArrowRight aria-hidden />
            </ThmButton>
          </div>

          <div className={styles.heroVisual}>
            <img
              className={styles.heroImg}
              src={caseStudyBeforeAfter.after.src}
              alt={caseStudyBeforeAfter.after.alt}
            />

            <aside className={styles.snapshotCard} aria-label="Job Snapshot">
              <p className={styles.snapshotHeading}>Job Snapshot</p>
              <ul className={styles.snapshotList}>
                {caseStudySnapshot.items.map((item) => {
                  const Icon = snapshotIcons[item.icon];
                  return (
                    <li key={item.label} className={styles.snapshotItem}>
                      <span className={styles.snapshotIcon} aria-hidden>
                        <Icon />
                      </span>
                      <div>
                        <span className={styles.snapshotLabel}>{item.label}</span>
                        <strong className={styles.snapshotValue}>{item.value}</strong>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.statsBand} aria-label="Key job stats">
        <div className={styles.container}>
          <ul className={styles.statsRow}>
            {keyStats.map(({ value, label, icon: Icon }) => (
              <li key={value + label} className={styles.statItem}>
                <span className={styles.statIconCircle} aria-hidden>
                  <Icon />
                </span>
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.challenge} aria-labelledby="challenge-v2-title">
        <div className={styles.container}>
          <div className={styles.challengeGrid}>
            <div>
              <span className={styles.eyebrow}>The Challenge</span>
            <h2 className={styles.h2} id="challenge-v2-title">
              Severe Mould Behind a{" "}
              <span>Bedroom Storage Unit</span>
            </h2>
              {caseStudyChallenge.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.challengeMedia}>
              <img
                src={caseStudyBeforeAfter.before.src}
                alt={caseStudyBeforeAfter.before.alt}
                loading="lazy"
              />
              {challengeCallouts.map((item) => (
                <div
                  key={item.label}
                  className={styles.hotspot}
                  style={{ top: item.top, left: item.left }}
                >
                  <span className={styles.hotspotDot} />
                  <span className={styles.hotspotLine} />
                  <span className={styles.hotspotLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.compare} aria-labelledby="compare-v2-title">
        <div className={styles.container}>
          <div className={styles.compareGrid}>
            <BeforeAfterSlider
              beforeSrc={caseStudyBeforeAfter.before.src}
              afterSrc={caseStudyBeforeAfter.after.src}
              beforeAlt={caseStudyBeforeAfter.before.alt}
              afterAlt={caseStudyBeforeAfter.after.alt}
            />
            <div className={styles.compareCopy}>
              <span className={styles.eyebrowLight}>Before & After</span>
              <h2 className={styles.h2Light} id="compare-v2-title">
                Bedroom Wall & <span>Storage Unit Area</span>
              </h2>
              <p>
                {caseStudyBeforeAfter.subtitle}. Drag the slider to compare the
                mould-affected wall with the restored finish after treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="approach-v2-title">
        <div className={styles.container}>
          <header className={styles.centerHead}>
            <span className={styles.eyebrow}>How We Tackled It</span>
            <h2 className={styles.h2} id="approach-v2-title">
              {caseStudyApproach.title}
            </h2>
            <p className={styles.bodyCenter}>{caseStudyApproach.intro}</p>
          </header>

          <ol className={styles.steps}>
            {approachSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNum}>{index + 1}</span>
                  <span className={styles.stepIcon} aria-hidden>
                    <Icon />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className={styles.transform} aria-labelledby="transform-v2-title">
        <div className={styles.container}>
          <header className={styles.centerHead}>
            <span className={styles.eyebrow}>Before & After</span>
            <h2 className={styles.h2} id="transform-v2-title">
              The Transformation
            </h2>
            <p className={styles.bodyCenter}>
              From mouldy and unsafe to clean, fresh and ready.
            </p>
          </header>

          <div className={styles.transformGrid}>
            {caseStudyBeforeAfter.details.map((item, index) => {
              const Icon = transformIcons[index];
              return (
                <article key={item.title} className={styles.transformCard}>
                  <div className={styles.pair}>
                    <figure>
                      <span className={styles.badgeBefore}>Before</span>
                      <img src={item.beforeSrc} alt={item.beforeAlt} loading="lazy" />
                    </figure>
                    <figure>
                      <span className={styles.badgeAfter}>After</span>
                      <img src={item.afterSrc} alt={item.afterAlt} loading="lazy" />
                    </figure>
                  </div>
                  <div className={styles.transformMeta}>
                    <span className={styles.transformIcon} aria-hidden>
                      <Icon />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-v2-title">
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <div className={styles.finalCopy}>
              <span className={styles.finalIcon} aria-hidden>
                <FaHome />
              </span>
              <div>
                <h2 id="cta-v2-title">{caseStudyCta.title}</h2>
                <p>
                  Speak with our team for a free quotation if you need urgent mould
                  removal, deep cleaning or domestic cleaning support in East London.
                </p>
              </div>
            </div>
            <ThmButton href={caseStudyCta.href}>
              {caseStudyCta.button}
              <FaArrowRight aria-hidden />
            </ThmButton>
            <span className={styles.leaf} aria-hidden />
          </div>
        </div>
      </section>

      <section className={styles.result} aria-labelledby="result-v2-title">
        <div className={styles.container}>
          <div className={styles.resultGrid}>
            <div className={styles.resultPhoto}>
              <img
                src={caseStudyResult.image.src}
                alt={caseStudyResult.image.alt}
                loading="lazy"
              />
            </div>
            <div className={styles.resultCopy}>
              <span className={styles.eyebrow}>Case Study</span>
              <h2 className={styles.h2} id="result-v2-title">
                {caseStudyResult.title}
              </h2>
              <p className={styles.body}>{caseStudyResult.description}</p>
              <ThmButton href={caseStudyResult.cta.href}>
                {caseStudyResult.cta.label}
                <FaArrowRight aria-hidden />
              </ThmButton>
            </div>
          </div>

          <ul className={styles.resultStats}>
            {resultStats.map(({ value, label, icon: Icon }) => (
              <li key={label}>
                <span className={styles.statIconCircle} aria-hidden>
                  <Icon />
                </span>
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.testimonial} aria-labelledby="quote-v2-title">
        <div className={styles.container}>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCopy}>
              <span className={styles.quoteMark} aria-hidden>
                “
              </span>
              <span className={styles.eyebrowLight}>What The Client Said</span>
              <h2 className={styles.srOnly} id="quote-v2-title">
                {caseStudyQuote.title}
              </h2>
              <p className={styles.quote}>{caseStudyQuote.text}</p>
              <div className={styles.author}>
                <span className={styles.avatar} aria-hidden>
                  Dd
                </span>
                <div>
                  <strong>{caseStudyQuote.author}</strong>
                  <span>{caseStudyQuote.role}</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialPhoto}>
              <img
                src={caseStudyQuote.image.src}
                alt={caseStudyQuote.image.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
