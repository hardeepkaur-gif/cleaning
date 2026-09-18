import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  domesticPricingFooterText,
  domesticPricingHeaderIcons,
  domesticPricingHeaders,
  domesticPricingIntroAfter,
  domesticPricingIntroBefore,
  domesticPricingIntroLinkLabel,
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
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title} id="domestic-pricing-title">
            {domesticPricingTitle}
          </h2>
          <p className={styles.intro}>
            {domesticPricingIntroBefore}
            <Link href="/" className={styles.internalLink}>
              {domesticPricingIntroLinkLabel}
            </Link>
            {domesticPricingIntroAfter}
          </p>
        </header>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className={styles.thInner}>
                    <span className={styles.thIcon} role="img" aria-label={domesticPricingHeaderIcons.factorAlt}>
                      <FactorHeaderIcon aria-hidden />
                    </span>
                    {domesticPricingHeaders.factor}
                  </span>
                </th>
                <th scope="col">
                  <span className={styles.thInner}>
                    <span className={`${styles.thIcon} ${styles.thIconAlt}`} role="img" aria-label={domesticPricingHeaderIcons.approachAlt}>
                      <ApproachHeaderIcon aria-hidden />
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
                        <span className={styles.factorIcon} role="img" aria-label={row.iconAlt}>
                          <Icon aria-hidden />
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
          <ThmButton href="/contact-us" className={styles.ctaBtn}>
            <FaPhoneAlt aria-hidden />
            Request a Quote
          </ThmButton>
        </div>
      </div>
    </section>
  );
}
