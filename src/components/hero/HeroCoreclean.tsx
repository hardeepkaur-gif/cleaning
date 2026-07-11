import type { ReactNode } from "react";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./HeroCoreclean.module.css";

const imgBase = "/images/hero/coreclean";

type HeroCta = {
  href: string;
  label: string;
};

type HeroCorecleanProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  imageSrc?: string;
  imageAlt?: string;
};

const defaultTitle = (
  <>
    Cleaning Services London With <span>DBS Checked</span> <br />
    Professional Cleaners
  </>
);

const defaultDescription =
  "Reliable cleaning services for homes, rental properties, offices, and commercial premises across East London. At Cleaning Services London we have DBS-checked and fully insured cleaners following documented cleaning standards, completion photo procedures, and quality control checks designed to deliver consistent results.";

export default function HeroCoreclean({
  id = "home",
  eyebrow = "Professional Cleaning Services",
  title = defaultTitle,
  description = defaultDescription,
  primaryCta = { href: "#contact", label: "Request a Quote" },
  secondaryCta = { href: "#services", label: "Find Your Cleaner" },
  imageSrc = `${imgBase}/main-slider-two-1-1.png`,
  imageAlt = "Professional cleaner",
}: HeroCorecleanProps) {
  return (
    <section className={styles.hero} id={id} aria-label="Cleaning services hero">
      <div className={styles.heroBody}>
        <div
          className={styles.bgShape}
          style={{ backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-1.png')` }}
          aria-hidden
        />
        <div
          className={styles.bgShapeTwo}
          style={{ backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-2.png')` }}
          aria-hidden
        />

        <img
          className={styles.shape1}
          src={`${imgBase}/main-slider-two-shape-1.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape2}
          src={`${imgBase}/main-slider-two-shape-2.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape3}
          src={`${imgBase}/main-slider-two-shape-3.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape4}
          src={`${imgBase}/main-slider-two-shape-4.png`}
          alt=""
          aria-hidden
        />
        <img
          className={styles.shape5}
          src={`${imgBase}/main-slider-two-shape-5.png`}
          alt=""
          aria-hidden
        />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.subTitle}>
              <h4>{eyebrow}</h4>
            </div>

            <div className={styles.bigTitle}>
              <h2>{title}</h2>
            </div>

            <div className={styles.text}>
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottomBtn}>
                <ThmButton href={primaryCta.href}>{primaryCta.label}</ThmButton>
              </div>
              <div className={styles.bottomBtn}>
                <ThmButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ThmButton>
              </div>
            </div>
          </div>

          <div className={styles.mainImg}>
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
