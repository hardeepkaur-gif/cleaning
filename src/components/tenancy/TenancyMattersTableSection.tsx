import {
  tenancyMattersHeaders,
  tenancyMattersRows,
  tenancyMattersTitle,
} from "./tenancyMattersData";
import styles from "./TenancyMattersTableSection.module.css";

export default function TenancyMattersTableSection() {
  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters-table"
      aria-labelledby="tenancy-matters-table-title"
    >
      <div className={styles.container}>
        <h2 className={styles.title} id="tenancy-matters-table-title">
          {tenancyMattersTitle}
        </h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">{tenancyMattersHeaders.left}</th>
                <th scope="col">{tenancyMattersHeaders.right}</th>
              </tr>
            </thead>
            <tbody>
              {tenancyMattersRows.map((row) => (
                <tr key={row.left}>
                  <td data-label={tenancyMattersHeaders.left}>
                    <div className={styles.cell}>
                      <span className={styles.chevron} aria-hidden>
                        »»
                      </span>
                      <span className={styles.cellTitle}>{row.left}</span>
                    </div>
                  </td>
                  <td data-label={tenancyMattersHeaders.right}>
                    <div className={styles.cell}>
                      <span className={styles.chevron} aria-hidden>
                        »»
                      </span>
                      <p className={styles.cellText}>{row.right}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
