"use client";

import { type ReactNode } from "react";
import ThmButton from "@/components/menu/ThmButton";
import HeroQuoteForm from "./HeroQuoteForm";
import styles from "./HeroLeadForm.module.css";

export type HeroLeadFormProps = {
  id?: string;
  titleId?: string;
  tagline?: string;
  title?: ReactNode;
  description?: string;
  primaryBtnLabel?: string;
  primaryBtnHref?: string;
  secondaryBtnLabel?: string;
  secondaryBtnHref?: string;
  bgImage?: string;
  formBgImage?: string;
  transparentForm?: boolean;
  formPrefix?: string;
};

const defaultTitle = (
  <>
    Cleaning Services London With <span>DBS Checked</span>{" "}
    Professional Cleaners
  </>
);

export default function HeroLeadForm({
  id = "home",
  titleId = "hero-lead-title",
  tagline = "Professional Cleaning Services",
  title = defaultTitle,
  description =
    "Reliable cleaning services for homes, rental properties, offices, and commercial premises across East London. At Cleaning Services London we have DBS-checked and fully insured cleaners following documented cleaning standards, completion photo procedures, and quality control checks designed to deliver consistent results.",
  primaryBtnLabel = "Request a Quote",
  primaryBtnHref = "/contact-us",
  secondaryBtnLabel = "Find Your Cleaner",
  secondaryBtnHref = "/services",
  bgImage = "/images/hero/hero-lead-bg.webp",
  formBgImage,
  transparentForm = false,
  formPrefix = "lead",
}: HeroLeadFormProps) {
  return (
    <section className={styles.hero} id={id} aria-labelledby={titleId}>
      <div className={styles.bgLayer} aria-hidden>
        <img
          className={styles.bgImage}
          src={bgImage}
          alt=""
          width={1000}
          height={667}
          decoding="async"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subTitle}>
            <p>{tagline}</p>
          </div>

          <div className={styles.bigTitle}>
            <h1 id={titleId}>{title}</h1>
          </div>

          <div className={styles.text}>
            <p>{description}</p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomBtn}>
              <ThmButton href={primaryBtnHref}>{primaryBtnLabel}</ThmButton>
            </div>
            <div className={styles.bottomBtn}>
              <ThmButton href={secondaryBtnHref}>
                {secondaryBtnLabel}
              </ThmButton>
            </div>
          </div>
        </div>

        <HeroQuoteForm
          formPrefix={formPrefix}
          transparent={transparentForm}
          formBgImage={formBgImage}
        />
      </div>
    </section>
  );
}
