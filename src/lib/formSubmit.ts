export const THANK_YOU_PATH = "/thank-you";

/** Reliable full-page redirect after a successful form submit. */
export function redirectToThankYou(): void {
  window.location.assign(THANK_YOU_PATH);
}
