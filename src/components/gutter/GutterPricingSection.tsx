import { FaCalendarCheck, FaCheck } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/carpet/CarpetPricingSection.module.css";
import local from "./GutterPricingSection.module.css";
import {
  gutterPricingCtaText,
  gutterPricingCtaTitle,
  gutterPricingFactors,
  gutterPricingFactorsIntro,
  gutterPricingFactorsTitle,
  gutterPricingHeaders,
  gutterPricingIntro,
  gutterPricingIntroExtra,
  gutterPricingRows,
  gutterPricingTitle,
} from "./gutterPricingData";

export default function GutterPricingSection() {
  return (
    <section
      className={styles.section}
      id="gutter-cleaning-pricing"
      aria-labelledby="gutter-pricing-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="gutter-pricing-title">
            {gutterPricingTitle}
          </h2>
          <p className={styles.intro}>{gutterPricingIntro}</p>
          <p className={styles.intro}>{gutterPricingIntroExtra}</p>
        </header>

        <div className={styles.panel}>
          <article className={styles.colCard}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">{gutterPricingHeaders.property}</th>
                    <th scope="col">{gutterPricingHeaders.price}</th>
                  </tr>
                </thead>
                <tbody>
                  {gutterPricingRows.map((row) => (
                    <tr key={row.property}>
                      <td data-label={gutterPricingHeaders.property}>
                        {row.property}
                      </td>
                      <td data-label={gutterPricingHeaders.price}>
                        <span className={styles.price}>{row.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article
            className={`${styles.colCard} ${styles.colCardAlt} ${local.factorsCard}`}
          >
            <div className={local.factorsInner}>
              <h3 className={local.factorsTitle}>{gutterPricingFactorsTitle}</h3>
              <p className={local.factorsIntro}>{gutterPricingFactorsIntro}</p>
              <ul className={local.factors}>
                {gutterPricingFactors.map((item) => (
                  <li key={item}>
                    <span className={local.factorIcon} aria-hidden>
                      <FaCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className={local.ctaBand}>
          <div className={local.ctaCopy}>
            <h3 className={local.ctaTitle}>{gutterPricingCtaTitle}</h3>
            <p className={local.ctaText}>{gutterPricingCtaText}</p>
          </div>
          <ThmButton href="/#contact" className={local.ctaBtn}>
            <FaCalendarCheck aria-hidden />
            Contact Now!
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
