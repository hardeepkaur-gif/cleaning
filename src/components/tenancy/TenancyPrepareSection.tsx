import { FaCheck } from "react-icons/fa";
import { includedImages } from "@/components/included/includedData";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./TenancyPrepareSection.module.css";

const preparePoints = [
  "Remove personal belongings and packed boxes where possible.",
  "Empty kitchen cupboards, wardrobes and storage areas that need cleaning.",
  "Dispose of household waste and unwanted items before the visit.",
  "Defrost fridges and freezers at least 24 hours before the clean.",
  "Ensure running water and electricity are available.",
  "Inform us of any damaged areas that may require special attention.",
  "Provide access instructions if you will not be present during the appointment.",
];

export default function TenancyPrepareSection() {
  return (
    <section
      className={styles.section}
      id="tenancy-prepare"
      aria-labelledby="tenancy-prepare-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.left} ${local.left}`}>
            <h2 className={`${styles.title} ${local.title}`} id="tenancy-prepare-title">
              Preparing Your Property for an End of Tenancy Clean
            </h2>
            <p className={`${styles.intro} ${local.intro}`}>
              To help our cleaners achieve the best possible results, we recommend
              preparing the property before your scheduled appointment.
            </p>

            <ul className={styles.points}>
              {preparePoints.map((item) => (
                <li key={item}>
                  <span className={styles.pointIcon} aria-hidden>
                    <FaCheck />
                  </span>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.visualStage}>
              <div className={styles.rightShape} aria-hidden>
                <img src={includedImages.rightShape} alt="" />
              </div>

              <div className={styles.imgBox}>
                <div className={styles.mainImg}>
                  <img
                    src={includedImages.main}
                    alt="Preparing a London property for end of tenancy cleaning"
                  />
                </div>
                <div className={styles.imgShape1} aria-hidden>
                  <img src={includedImages.shape1} alt="" />
                </div>
                <div className={styles.imgShape2} aria-hidden>
                  <img src={includedImages.shape2} alt="" />
                </div>
                <div className={styles.imgShape3} aria-hidden>
                  <img src={includedImages.shape3} alt="" />
                </div>
                <div className={styles.imgShape4} aria-hidden>
                  <img src={includedImages.shape4} alt="" />
                </div>
              </div>

              <div className={styles.img2}>
                <img src={includedImages.img2} alt="" aria-hidden />
              </div>
              <div className={styles.img3}>
                <img src={includedImages.img3} alt="" aria-hidden />
              </div>
              <div className={styles.img4}>
                <img src={includedImages.img4} alt="" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
