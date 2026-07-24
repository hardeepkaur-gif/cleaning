"use client";

import { type FormEvent, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { servicesList } from "@/components/services/servicesData";
import styles from "./HeroCorecleanForm.module.css";

const imgBase = "/images/hero/coreclean";

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

export default function HeroCorecleanForm() {
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
    <section
      className={styles.hero}
      aria-labelledby="hero-coreclean-form-title"
    >
      <div className={styles.heroBody}>
        <div
          className={styles.bgShape}
          style={{
            backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-1.png')`,
          }}
          aria-hidden
        />
        <div
          className={styles.bgShapeTwo}
          style={{
            backgroundImage: `url('${imgBase}/main-slider-two-bg-shape-2.png')`,
          }}
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
              <h4>Professional Cleaning Services</h4>
            </div>

            <div className={styles.bigTitle}>
              <h2 id="hero-coreclean-form-title">
                Cleaning Services London With{" "}
                <span>DBS Checked</span> <br />
                Professional Cleaners
              </h2>
            </div>

            <div className={styles.text}>
              <p>
                Reliable cleaning services for homes, rental properties, offices,
                and commercial premises across East London. At Cleaning Services
                London we have DBS-checked and fully insured cleaners following
                documented cleaning standards, completion photo procedures, and
                quality control checks designed to deliver consistent results.
              </p>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottomBtn}>
                <ThmButton href="/contact-us">Request a Quote</ThmButton>
              </div>
              <div className={styles.bottomBtn}>
                <ThmButton href="#services" variant="secondary">
                  Find Your Cleaner
                </ThmButton>
              </div>
            </div>
          </div>

          <div className={styles.formAside}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3>Request a Free Quote</h3>
              </div>

              {submitted ? (
                <div className={styles.success} role="status">
                  <FaCheckCircle aria-hidden />
                  <strong>Thank you!</strong>
                  <p>
                    Your request has been received. We&apos;ll contact you soon.
                  </p>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.field}>
                    <label htmlFor="coreclean-lead-name">Full Name</label>
                    <input
                      id="coreclean-lead-name"
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
                    <label htmlFor="coreclean-lead-phone">Phone Number</label>
                    <input
                      id="coreclean-lead-phone"
                      type="tel"
                      name="phone"
                      placeholder="07XXX XXXXXX"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="coreclean-lead-email">Email</label>
                    <input
                      id="coreclean-lead-email"
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
                    <label htmlFor="coreclean-lead-service">
                      Service Required
                    </label>
                    <select
                      id="coreclean-lead-service"
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

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                  {loading ? "Sending..." : "Get My Free Quote"}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
