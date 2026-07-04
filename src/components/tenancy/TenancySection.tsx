import ThmButton from "@/components/menu/ThmButton";
import styles from "./TenancySection.module.css";

export default function TenancySection() {
  return (
    <section
      className={styles.section}
      id="tenancy"
      aria-labelledby="tenancy-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.imgWrap}>
              <img
                src="/images/services/cleanon/services-2-3.jpg"
                alt="End of tenancy cleaning in progress"
              />
            </div>
          </div>

          <div className={styles.copy}>
            <span className={styles.tagline}>End of Tenancy</span>
            <h2 className={styles.title} id="tenancy-title">
              End of Tenancy Cleaning and Deposit Concerns
            </h2>
            <p className={styles.text}>
              The transition to living on your own can be stressful enough
              without having to deal with cleaning conflict. Tenants want to get
              out of the property in good order, landlords wish the property to
              be in state for the next tenant and letting agents usually have a
              clear handover standard before they can get on to marketing or
              re-letting the property.
            </p>
            <p className={styles.text}>
              Our End of Tenancy Cleaning London service is designed to support a
              smoother handover process through detailed cleaning checklists,
              documented cleaning procedures, and completion photo reports that
              help demonstrate what was cleaned during the visit. Whilst no
              cleaning company can guarantee the outcome of a tenancy dispute, a
              professionally cleaned property can help reduce unnecessary
              disagreements and provide greater confidence for everyone involved.
            </p>

            <div className={styles.actions}>
              <p className={styles.learnMore}>
                Learn More About Our End of Tenancy Cleaning London Service
              </p>
              <ThmButton href="#contact" className={styles.btnMain}>
                View End of Tenancy Cleaning
              </ThmButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
