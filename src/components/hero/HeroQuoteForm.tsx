"use client";

import { type CSSProperties, type FormEvent, useState } from "react";
import ThmButton from "@/components/menu/ThmButton";
import { SITE_FORM_IDS, redirectToThankYou, submitLead } from "@/lib/formSubmit";
import { servicesList } from "@/components/services/servicesData";
import styles from "./HeroLeadForm.module.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
};

type HeroQuoteFormProps = {
  formPrefix?: string;
  defaultService?: string;
  transparent?: boolean;
  clear?: boolean;
  formBgImage?: string;
};

export default function HeroQuoteForm({
  formPrefix = "lead",
  defaultService = "",
  transparent = false,
  clear = false,
  formBgImage,
}: HeroQuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        formId: SITE_FORM_IDS.quoteByPrefix(formPrefix),
      });
      redirectToThankYou();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className={styles.formWrap}>
      <div className={`${styles.formFrame} ${clear ? styles.formFrameClear : ""}`}>
        <div
          className={`${styles.formCard} ${transparent || clear ? styles.formCardTransparent : ""} ${clear ? styles.formCardClear : ""} ${formBgImage ? styles.formCardWithImage : ""}`}
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

          <form
            id={SITE_FORM_IDS.quoteByPrefix(formPrefix)}
            className={styles.form}
            onSubmit={handleSubmit}
          >
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

            <ThmButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Get My Free Quote"}
            </ThmButton>

            {error ? (
              <p className={styles.formNote} role="alert" style={{ color: "#b42318" }}>
                {error}
              </p>
            ) : null}

            <p className={styles.formNote}>
              Your details are kept private. No spam — ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
