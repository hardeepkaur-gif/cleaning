import { FaPhoneAlt } from "react-icons/fa";
import { PiCurrencyGbpDuotone, PiHouseLineDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./TenancyPricingSection.module.css";

const priceRows = [
  { type: "Studio", price: "£—" },
  { type: "1 Bedroom", price: "£—" },
  { type: "2 Bedroom", price: "£—" },
  { type: "3 Bedroom", price: "£—" },
  { type: "4 Bedroom", price: "£—" },
];

export default function TenancyPricingSection() {
  return (
    <section
      className={styles.section}
      id="tenancy-pricing"
      aria-labelledby="tenancy-pricing-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Transparent pricing</span>
          <h2 className={styles.title} id="tenancy-pricing-title">
            End of Tenancy Cleaning London Prices
          </h2>
          <p className={styles.intro}>
            The price of end of tenancy cleaning will vary from one property to
            another, depending on the size, number of rooms and amount of cleaning
            required. There are no hidden charges, your cost is set and you know
            what it is going to be before you start the service.
          </p>
          <p className={styles.intro}>
            Prices are based on standard property sizes and conditions. Other
            services like carpet cleaning, upholstery cleaning, balcony cleaning or
            heavily soiled properties can have an impact on the final quote.
          </p>
        </header>

        <div className={styles.tableCard}>
          <div className={styles.tableHead}>
            <span className={styles.tableHeadIcon} aria-hidden>
              <PiCurrencyGbpDuotone />
            </span>
            <div>
              <h3 className={styles.tableHeadTitle}>Fixed price guide</h3>
              <p className={styles.tableHeadText}>
                Standard property sizes — final quote confirmed before booking
              </p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className={styles.thIcon} aria-hidden>
                      <PiHouseLineDuotone />
                    </span>
                    Property Type
                  </th>
                  <th scope="col">Fixed Price From</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.type}>
                    <td data-label="Property Type">{row.type}</td>
                    <td data-label="Fixed Price From">
                      <span className={styles.price}>{row.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Need an exact figure for your property? We&apos;ll confirm a fixed
            quotation before work begins.
          </p>
          <ThmButton href="/contact-us" className={styles.ctaBtn}>
            <FaPhoneAlt aria-hidden />
            Request a Quote
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
