"use client";

import { type CSSProperties, useState } from "react";
import ThmButton from "@/components/menu/ThmButton";
import { THANK_YOU_PATH } from "@/lib/formSubmit";
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

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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

          <form className={styles.form} action={THANK_YOU_PATH} method="get">
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

            <ThmButton type="submit">Get My Free Quote</ThmButton>

            <p className={styles.formNote}>
              Your details are kept private. No spam — ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
