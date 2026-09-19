import {
  domesticPricingClosing,
  domesticPricingDeepHeaders,
  domesticPricingDeepRows,
  domesticPricingDeepTitle,
  domesticPricingGeneralHeaders,
  domesticPricingGeneralRows,
  domesticPricingGeneralTitle,
  domesticPricingIntro,
  domesticPricingTitle,
} from "./domesticPricingData";
import styles from "@/components/carpet/CarpetPricingSection.module.css";
import local from "./DomesticPricingSection.module.css";

export default function DomesticPricingSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="domestic-pricing"
      aria-labelledby="domestic-pricing-title"
    >
      <div className={`${styles.orbOne} ${local.orbHidden}`} aria-hidden />
      <div className={`${styles.orbTwo} ${local.orbHidden}`} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="domestic-pricing-title">
            {domesticPricingTitle}
          </h2>
          <p className={styles.intro}>{domesticPricingIntro}</p>
        </header>

        <div className={styles.panel}>
          <article className={`${styles.colCard} ${local.generalCard}`}>
            <h3 className={local.cardTitle}>{domesticPricingGeneralTitle}</h3>
            <div className={styles.tableWrap}>
              <table className={`${styles.table} ${local.generalTable}`}>
                <thead>
                  <tr>
                    <th scope="col">{domesticPricingGeneralHeaders.size}</th>
                    <th scope="col">{domesticPricingGeneralHeaders.regular}</th>
                    <th scope="col">{domesticPricingGeneralHeaders.oneOff}</th>
                  </tr>
                </thead>
                <tbody>
                  {domesticPricingGeneralRows.map((row) => (
                    <tr key={row.size}>
                      <td data-label={domesticPricingGeneralHeaders.size}>
                        {row.size}
                      </td>
                      <td data-label={domesticPricingGeneralHeaders.regular}>
                        <span className={styles.price}>{row.regular}</span>
                      </td>
                      <td data-label={domesticPricingGeneralHeaders.oneOff}>
                        <span className={styles.price}>{row.oneOff}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article
            className={`${styles.colCard} ${styles.colCardAlt} ${local.deepCard}`}
          >
            <h3 className={`${local.cardTitle} ${local.cardTitleAlt}`}>
              {domesticPricingDeepTitle}
            </h3>
            <div className={styles.tableWrap}>
              <table className={`${styles.table} ${local.deepTable}`}>
                <thead>
                  <tr>
                    <th scope="col">{domesticPricingDeepHeaders.size}</th>
                    <th scope="col">{domesticPricingDeepHeaders.price}</th>
                  </tr>
                </thead>
                <tbody>
                  {domesticPricingDeepRows.map((row) => (
                    <tr key={row.size}>
                      <td data-label={domesticPricingDeepHeaders.size}>
                        {row.size}
                      </td>
                      <td data-label={domesticPricingDeepHeaders.price}>
                        <span className={styles.price}>{row.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <p className={local.closing}>{domesticPricingClosing}</p>
      </div>
    </section>
  );
}
