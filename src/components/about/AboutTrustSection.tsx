import styles from "./AboutTrustSection.module.css";

const imgBase = "/images/about/cleanon";

export default function AboutTrustSection() {
  return (
    <section
      className={styles.section}
      id="team-you-can-trust"
      aria-labelledby="about-trust-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.imageWrap}>
              <div className={styles.imageOne}>
                <img
                  src={`${imgBase}/professional-cleaners-london-office.webp`}
                  alt="Cleaning Services London team you can trust in your property"
                  loading="lazy"
                />
              </div>
              <div className={styles.imageTwo}>
                <img
                  src={`${imgBase}/cleaning-team-preparing-equipment-london.webp`}
                  alt="Trained cleaners preparing for a London property visit"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <h2 className={styles.title} id="about-trust-title">
              A Team You Can Trust in Your Property
            </h2>

            <p className={styles.text}>
              Letting someone into your home or workplace means trusting them
              with something personal; we don&apos;t take that lightly. We know
              that trust, security, and privacy cannot be risked when cleaning
              your personal space. You&apos;re not dealing with a stranger sent
              by an agency you&apos;ve never heard of; you&apos;re dealing with
              our team, working to our standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
