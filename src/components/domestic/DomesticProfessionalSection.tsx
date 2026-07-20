import styles from "@/components/tenancy/TenancyProfessionalSection.module.css";
import local from "./DomesticProfessionalSection.module.css";

const professionalImage = "/images/domestic/professional-domestic-cleaning.png";

export default function DomesticProfessionalSection() {
  return (
    <section
      className={styles.section}
      id="professional-domestic-cleaning"
      aria-labelledby="professional-domestic-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={`${styles.imageWrap} ${local.imageWrap}`}>
              <div className={styles.imageOne}>
                <img
                  src={professionalImage}
                  alt="Professional domestic cleaner vacuuming in a London home"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.experience}>
              <p className={styles.experienceYear}>100%</p>
              <p className={styles.experienceText}>Satisfaction</p>
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.secTitle}>
              <div className={styles.secTop}>
                <span className={styles.secTagline}>
                  Professional Domestic Cleaning
                </span>
              </div>
              <h2 className={styles.title} id="professional-domestic-title">
                Professional Domestic Cleaning Services in London
              </h2>
            </div>

            <p className={styles.text}>
              Keeping your home clean should not mean sacrificing your evenings or
              weekends. You can enjoy a clean, comfortable living space with trusted
              domestic cleaning services in London that fit around your routine.
            </p>
            <p className={styles.text}>
              You get regular, consistent cleaning that keeps everyday mess under
              control or a one-off visit when you need extra help. Your cleaner
              follows a personalised checklist tailored to your home so every visit
              meets your expectations. From kitchens and bathrooms to bedrooms and
              living areas, you receive careful attention using eco-friendly,
              pet-safe products that protect your home and family.
            </p>
            <p className={styles.text}>
              You can choose weekly, fortnightly or one-off domestic cleaning with
              flexible appointments and clear pricing. There&apos;s also an option of
              the same trusted cleaner for each visit, so your home stays
              consistently clean with less stress and more free time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
