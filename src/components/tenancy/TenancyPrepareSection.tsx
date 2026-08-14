import { FaCheck } from "react-icons/fa";
import { includedImages } from "@/components/included/includedData";
import styles from "@/components/included/ProfessionalClean.module.css";
import local from "./TenancyPrepareSection.module.css";

const prepareImgBase = "/images/tenancy/prepare";

const prepareImages = {
  main: `${prepareImgBase}/main.webp`,
  mainAlt: "Preparing a London rental property for end of tenancy cleaning",
  img2: `${prepareImgBase}/img-2.webp`,
  img2Alt: "Tenant removing belongings before an end of tenancy clean in London",
  img3: `${prepareImgBase}/img-3.webp`,
  img3Alt: "Empty kitchen cupboards prepared for a professional move out cleaning",
  img4: `${prepareImgBase}/img-4.webp`,
  img4Alt: "Rental property hallway ready for end of tenancy cleaning visit",
};

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
      className={`${styles.section} ${local.section}`}
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
                  <span className={styles.pointIcon} role="img" aria-label="Property preparation step icon">
                    <FaCheck aria-hidden />
                  </span>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.visualStage}>
              <div className={styles.rightShape} aria-hidden>
                <img src={includedImages.rightShape} alt={includedImages.rightShapeAlt} loading="lazy" />
              </div>

              <div className={styles.imgBox}>
                <div className={styles.mainImg}>
                  <img
                    src={prepareImages.main}
                    alt={prepareImages.mainAlt}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imgShape1} aria-hidden>
                  <img src={includedImages.shape1} alt={includedImages.shape1Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape2} aria-hidden>
                  <img src={includedImages.shape2} alt={includedImages.shape2Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape3} aria-hidden>
                  <img src={includedImages.shape3} alt={includedImages.shape3Alt} loading="lazy" />
                </div>
                <div className={styles.imgShape4} aria-hidden>
                  <img src={includedImages.shape4} alt={includedImages.shape4Alt} loading="lazy" />
                </div>
              </div>

              <div className={styles.img2}>
                <img src={prepareImages.img2} alt={prepareImages.img2Alt} loading="lazy" />
              </div>
              <div className={styles.img3}>
                <img src={prepareImages.img3} alt={prepareImages.img3Alt} loading="lazy" />
              </div>
              <div className={styles.img4}>
                <img src={prepareImages.img4} alt={prepareImages.img4Alt} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
