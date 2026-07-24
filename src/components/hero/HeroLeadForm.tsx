"use client";

import { type CSSProperties, type FormEvent, type ReactNode, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { servicesList } from "@/components/services/servicesData";
import styles from "./HeroLeadForm.module.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
};

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
    Cleaning Services London With <span>DBS Checked</span> <br />
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
  bgImage = "/images/hero/hero-lead-bg.png",
  formBgImage,
  transparentForm = false,
  formPrefix = "lead",
}: HeroLeadFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 700);
  };

  return (
    <section className={styles.hero} id={id} aria-labelledby={titleId}>
      <div className={styles.bgLayer} aria-hidden>
        <img className={styles.bgImage} src={bgImage} alt="" />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subTitle}>
            <h4>{tagline}</h4>
          </div>

          <div className={styles.bigTitle}>
            <h2 id={titleId}>{title}</h2>
          </div>

          <div className={styles.text}>
            <p>{description}</p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomBtn}>
              <ThmButton href={primaryBtnHref}>{primaryBtnLabel}</ThmButton>
            </div>
            <div className={styles.bottomBtn}>
              <ThmButton href={secondaryBtnHref} variant="secondary">
                {secondaryBtnLabel}
              </ThmButton>
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          <div className={styles.formFrame}>
            <div
              className={`${styles.formCard} ${transparentForm ? styles.formCardTransparent : ""} ${formBgImage ? styles.formCardWithImage : ""}`}
              style={
                formBgImage
                  ? ({
                      "--form-bg-image": `url('${formBgImage}')`,
                    } as CSSProperties)
                  : undefined
              }
            >
            <div className={styles.formHeader}>
              <h3>Request a Free Quote</h3>
              <p>Fill in your details — we&apos;ll be in touch shortly.</p>
            </div>

            {submitted ? (
              <div className={styles.success} role="status">
                <FaCheckCircle aria-hidden />
                <strong>Thank you!</strong>
                <p>Your request has been received. We&apos;ll contact you soon.</p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor={`${formPrefix}-name`}>Full Name</label>
                    <input
                      id={`${formPrefix}-name`}
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor={`${formPrefix}-phone`}>Phone Number</label>
                    <input
                      id={`${formPrefix}-phone`}
                      type="tel"
                      name="phone"
                      placeholder="07XXX XXXXXX"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor={`${formPrefix}-email`}>Email</label>
                    <input
                      id={`${formPrefix}-email`}
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor={`${formPrefix}-service`}>Service Required</label>
                    <select
                      id={`${formPrefix}-service`}
                      name="service"
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {servicesList.map((service) => (
                        <option key={service.title} value={service.label}>
                          {service.label} Cleaning
                        </option>
                      ))}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Get My Free Quote"}
                </button>

                <p className={styles.formNote}>
                  Your details are kept private. No spam — ever.
                </p>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
