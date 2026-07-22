import {
  carpetPricingFactorHeaders,
  carpetPricingFactorRows,
  carpetPricingIntro,
  carpetPricingIntroExtra,
  carpetPricingNote,
  carpetPricingRoomHeaders,
  carpetPricingRoomRows,
  carpetPricingTitle,
} from "./carpetPricingData";
import styles from "./CarpetPricingSection.module.css";

export default function CarpetPricingSection() {
  return (
    <section
      className={styles.section}
      id="carpet-cleaning-pricing"
      aria-labelledby="carpet-pricing-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="carpet-pricing-title">
            {carpetPricingTitle}
          </h2>
          <p className={styles.intro}>{carpetPricingIntro}</p>
          <p className={styles.intro}>{carpetPricingIntroExtra}</p>
        </header>

        <div className={styles.panel}>
          <article className={styles.colCard}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">{carpetPricingRoomHeaders.room}</th>
                    <th scope="col">{carpetPricingRoomHeaders.price}</th>
                  </tr>
                </thead>
                <tbody>
                  {carpetPricingRoomRows.map((row) => (
                    <tr key={row.room}>
                      <td data-label={carpetPricingRoomHeaders.room}>
                        {row.room}
                      </td>
                      <td data-label={carpetPricingRoomHeaders.price}>
                        <span className={styles.price}>{row.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className={`${styles.colCard} ${styles.colCardAlt}`}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">{carpetPricingFactorHeaders.factor}</th>
                    <th scope="col">{carpetPricingFactorHeaders.reason}</th>
                  </tr>
                </thead>
                <tbody>
                  {carpetPricingFactorRows.map((row) => (
                    <tr key={row.factor}>
                      <td data-label={carpetPricingFactorHeaders.factor}>
                        {row.factor}
                      </td>
                      <td data-label={carpetPricingFactorHeaders.reason}>
                        {row.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <p className={styles.note}>{carpetPricingNote}</p>
      </div>
    </section>
  );
}
