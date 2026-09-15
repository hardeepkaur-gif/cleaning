import { SITE_EMAIL } from "@/lib/site";

export const THANK_YOU_PATH = "/thank-you";

/**
 * HTML form element IDs used across the site (for analytics / CRM hooks).
 *
 * | Form | ID |
 * |---|---|
 * | Home / service hero quote | `cl-quote-form-{prefix}` e.g. `cl-quote-form-lead` |
 * | Coreclean hero quote | `cl-coreclean-quote-form` |
 * | Contact Us quote | `cl-contact-quote-form` |
 *
 * Leads currently email to SITE_EMAIL via FormSubmit.
 */
export const SITE_FORM_IDS = {
  quoteByPrefix: (prefix: string) => `cl-quote-form-${prefix}`,
  corecleanQuote: "cl-coreclean-quote-form",
  contactQuote: "cl-contact-quote-form",
} as const;

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message?: string;
  formId: string;
};

/** Send lead details to info@… then caller redirects to thank-you. */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const name = payload.name.trim();
  const phone = payload.phone.trim();
  const email = payload.email.trim();

  if (!name || !phone || !email) {
    throw new Error("Please fill in your name, phone and email.");
  }

  const page =
    typeof window !== "undefined" ? window.location.href : SITE_EMAIL;

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service: payload.service?.trim() || "Not specified",
        message: payload.message?.trim() || "",
        formId: payload.formId,
        page,
        _subject: `New cleaning quote — ${payload.formId}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    },
  );

  if (!response.ok) {
    let detail = "";
    try {
      const data = (await response.json()) as { message?: string };
      detail = data.message ?? "";
    } catch {
      /* ignore */
    }
    throw new Error(detail || "Could not send your request. Please try again.");
  }
}

/** Reliable full-page redirect after a successful form submit. */
export function redirectToThankYou(): void {
  window.location.assign(THANK_YOU_PATH);
}
