import { FaPhoneAlt } from "react-icons/fa";
import { PiCurrencyGbpDuotone } from "react-icons/pi";
import ThmButton from "@/components/menu/ThmButton";
import {
  domesticPricingFooterText,
  domesticPricingHeaderIcons,
  domesticPricingHeaders,
  domesticPricingIntro,
  domesticPricingRateLabel,
  domesticPricingRows,
  domesticPricingTitle,
} from "./domesticPricingData";
import styles from "./DomesticPricingSection.module.css";

export default function DomesticPricingSection() {
  const FactorHeaderIcon = domesticPricingHeaderIcons.factor;
  const ApproachHeaderIcon = domesticPricingHeaderIcons.approach;

  return (
    <section
      className={styles.section}
      id="domestic-pricing"
      aria-labelledby="domestic-pricing-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Transparent pricing</span>
          <h2 className={styles.title} id="domestic-pricing-title">
            {domesticPricingTitle}
          </h2>
          <p className={styles.intro}>{domesticPricingIntro}</p>
        </header>

        <div className={styles.rateCard}>
          <span className={styles.rateIcon} aria-hidden>
            <PiCurrencyGbpDuotone />
          </span>
          <div>
            <p className={styles.rateLabel}>Typical hourly rate</p>
            <p className={styles.rateValue}>{domesticPricingRateLabel}</p>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className={styles.thInner}>
                    <span className={styles.thIcon} aria-hidden>
                      <FactorHeaderIcon />
                    </span>
                    {domesticPricingHeaders.factor}
                  </span>
                </th>
                <th scope="col">
                  <span className={styles.thInner}>
                    <span className={`${styles.thIcon} ${styles.thIconAlt}`} aria-hidden>
                      <ApproachHeaderIcon />
                    </span>
                    {domesticPricingHeaders.approach}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {domesticPricingRows.map((row) => {
                const Icon = row.icon;
                return (
                  <tr key={row.factor}>
                    <td data-label={domesticPricingHeaders.factor}>
                      <div className={styles.cell}>
                        <span className={styles.factorIcon} aria-hidden>
                          <Icon />
                        </span>
                        <span className={styles.cellTitle}>{row.factor}</span>
                      </div>
                    </td>
                    <td data-label={domesticPricingHeaders.approach}>
                      <div className={`${styles.cell} ${styles.cellApproach}`}>
                        <p className={styles.cellText}>{row.approach}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>{domesticPricingFooterText}</p>
          <ThmButton href="/#contact" className={styles.ctaBtn}>
            <FaPhoneAlt aria-hidden />
            Request a Quote
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
