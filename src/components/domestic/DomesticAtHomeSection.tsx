import styles from "@/components/tenancy/TenancySection.module.css";
import local from "./DomesticAtHomeSection.module.css";

const atHomeImage = "/images/domestic/domestic-at-home-cleaner.png";

export default function DomesticAtHomeSection() {
  return (
    <section
      className={styles.section}
      id="domestic-at-home"
      aria-labelledby="domestic-at-home-title"
    >
      <div className={styles.container}>
        <div className={`${styles.grid} ${local.grid}`}>
          <div className={`${styles.media} ${local.media}`}>
            <div className={`${styles.imgWrap} ${local.imgWrap}`}>
              <img
                src={atHomeImage}
                alt="Professional domestic cleaner working in a home while the customer is away"
                loading="lazy"
              />
            </div>
          </div>

          <div className={`${styles.copy} ${local.copy}`}>
            <h2 className={`${styles.title} ${local.title}`} id="domestic-at-home-title">
              Do I Need to Be at Home While the Cleaner Is Working?
            </h2>
            <p className={styles.text}>
              No, it is possible to stay in the house during the cleaning or
              leave home if it&apos;s more convenient. There are many customers
              who opt to do their work while their housekeeper is also at work.
              In regular domestic cleaning services, you can also ask the same
              cleaner if feasible, so that each time you are at ease and
              familiar with the cleaning person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
