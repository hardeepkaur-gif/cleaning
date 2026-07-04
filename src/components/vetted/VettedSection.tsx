import ThmButton from "@/components/menu/ThmButton";
import styles from "./VettedSection.module.css";

const points = [
  "We confirm the identity of every cleaner before they can represent Cleaning Services London.",
  "Eligibility to work in the UK is verified as part of our onboarding process.",
  "Previous cleaning experience is reviewed to ensure cleaners understand professional standards and customer expectations.",
  "Cleaners are assessed against documented procedures before being assigned to client properties.",
  "Every cleaner is expected to follow signed cleaning SOPs and quality control requirements.",
  "Feedback, service quality, and completed work are regularly reviewed to maintain consistency.",
  "Completion procedures help create a clear record of work carried out and standards achieved.",
];

export default function VettedSection() {
  return (
    <section className={styles.section} aria-labelledby="vetted-title">
      <div className={styles.container}>
        {/* Top centered header */}
        <div className={styles.topHeader}>
          <h2 className={styles.title} id="vetted-title">
            Every Cleaner Is Vetted Before Entering Your Property
          </h2>
          <p className={styles.intro}>
            Unlike many cleaning providers, we carefully assess every cleaner
            before they work with us, helping ensure reliable service and peace
            of mind for our customers.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.copy}>
            <ul className={styles.points}>
              {points.map((text, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.pointIcon} aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6.5 11.5L2.5 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <ThmButton href="#contact" className={styles.btnMain}>
              Get More
            </ThmButton>
          </div>

          {/* Right image */}
          <div className={styles.visual}>
            <div className={styles.imgWrap}>
              <img
                src="/images/services/cleanon/services-2-1.jpg"
                alt="Professional cleaner vetted and verified"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
