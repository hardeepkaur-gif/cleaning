import tableStyles from "./TenancyMattersTableSection.module.css";
import styles from "./TenancyWhyChooseSection.module.css";

const headers = {
  left: "Why Customers Choose Us",
  right: "What It Means for You",
};

const rows = [
  {
    left: "DBS-Checked Cleaners",
    right: "Trusted professionals working inside your property.",
  },
  {
    left: "Fully Insured Service",
    right: "Additional peace of mind throughout the cleaning process.",
  },
  {
    left: "Fixed Pricing",
    right: "Clear quotations with no hidden charges.",
  },
  {
    left: "Detailed Cleaning Checklists",
    right: "Consistent cleaning standards across every booking.",
  },
  {
    left: "Eco-Friendly Cleaning Products",
    right: "Effective cleaning without unnecessarily harsh chemicals.",
  },
  {
    left: "Before & After Photos",
    right: "Additional transparency where requested.",
  },
  {
    left: "14-Day Re-Clean Guarantee",
    right: "Added confidence following your property handover.",
  },
  {
    left: "Experienced End of Tenancy Cleaners",
    right:
      "Familiar with the areas commonly checked during inspections.",
  },
  {
    left: "East London Specialists",
    right: "Local knowledge with wider London coverage available.",
  },
  {
    left: "Flexible Booking Availability",
    right: "Convenient appointments to fit around your moving schedule.",
  },
];

export default function TenancyWhyChooseSection() {
  return (
    <section
      className={`${tableStyles.section} ${styles.section}`}
      id="tenancy-why-choose"
      aria-labelledby="tenancy-why-choose-title"
    >
      <div className={tableStyles.container}>
        <h2 className={tableStyles.title} id="tenancy-why-choose-title">
          Why Choose Cleaning Services London
          <br />
          for End of Tenancy Cleaning
        </h2>
        <p className={styles.intro}>
          Finding a cleaner is easy. Finding a cleaning company that arrives on
          time, follows documented processes and delivers consistent standards is
          where the real challenge begins. At Cleaning Services London, we focus
          on reliability, transparency and attention to detail at every stage of
          the cleaning process.
        </p>

        <div className={tableStyles.tableWrap}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th scope="col">{headers.left}</th>
                <th scope="col">{headers.right}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.left}>
                  <td data-label={headers.left}>
                    <div className={tableStyles.cell}>
                      <span className={tableStyles.chevron} aria-hidden>
                        »»
                      </span>
                      <span className={tableStyles.cellTitle}>{row.left}</span>
                    </div>
                  </td>
                  <td data-label={headers.right}>
                    <div className={tableStyles.cell}>
                      <span className={tableStyles.chevron} aria-hidden>
                        »»
                      </span>
                      <p className={tableStyles.cellText}>{row.right}</p>
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
