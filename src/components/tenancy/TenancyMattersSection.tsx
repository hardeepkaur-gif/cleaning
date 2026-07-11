import {
  tenancyMattersRows,
  tenancyMattersTitle,
  type TenancyComparisonItem,
} from "./tenancyMattersData";
import styles from "./TenancyMattersSection.module.css";

function ComparisonPoint({ item }: { item: TenancyComparisonItem }) {
  return (
    <div className={styles.cell}>
      <span className={styles.chevron} aria-hidden>
        »»
      </span>
      <p className={styles.cellText}>
        <strong>{item.title}</strong> {item.text}
      </p>
    </div>
  );
}

export default function TenancyMattersSection() {
  return (
    <section
      className={styles.section}
      id="why-tenancy-cleaning-matters"
      aria-labelledby="tenancy-matters-title"
    >
      <div className={styles.container}>
        <h2 className={styles.title} id="tenancy-matters-title">
          {tenancyMattersTitle}
        </h2>

        <div className={styles.tableWrap}>
          <div className={styles.headerRow}>
            <div className={styles.headerCell}>Why It Matters</div>
            <div className={styles.headerCell}>How It Helps</div>
          </div>

          {tenancyMattersRows.map((row) => (
            <div
              className={styles.bodyRow}
              key={`${row.why.title}-${Array.isArray(row.how) ? row.how.map((item) => item.title).join("-") : row.how.title}`}
            >
              <ComparisonPoint item={row.why} />
              {Array.isArray(row.how) ? (
                <div className={`${styles.cell} ${styles.cellStack}`}>
                  {row.how.map((item) => (
                    <div key={item.title} className={styles.cellInner}>
                      <span className={styles.chevron} aria-hidden>
                        »»
                      </span>
                      <p className={styles.cellText}>
                        <strong>{item.title}</strong> {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <ComparisonPoint item={row.how} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
