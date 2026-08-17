import {
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaHome,
  FaPhoneAlt,
  FaShieldAlt,
  FaThLarge,
} from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { contactInfo } from "@/components/menu/menuData";

const steps = [
  {
    title: "We review your request",
    text: "Our team checks your details and the service you need across London.",
  },
  {
    title: "We contact you shortly",
    text: "Expect a reply by phone or email — usually within a few hours on business days.",
  },
  {
    title: "We confirm your booking",
    text: "You receive a fixed quote and a convenient appointment time before any work begins.",
  },
];

export default function ThankYouSection() {
  return (
    <section className="tySection" aria-labelledby="thank-you-success-title">
      <div className="tyOrbOne" aria-hidden />
      <div className="tyOrbTwo" aria-hidden />

      <div className="tyContainer">
        <div className="tyLayout">
          <div className="tyCard">
            <div className="tyIcon">
              <FaCheckCircle aria-hidden />
            </div>

            <span className="tyEyebrow">Request submitted</span>
            <h2 className="tyTitle" id="thank-you-success-title">
              Thank You — We&apos;ve Received Your Request
            </h2>
            <p className="tyIntro">
              Your enquiry has been sent successfully. A member of Cleaning
              Services London will be in touch shortly with your quote and the
              earliest available slot.
            </p>

            <div className="tyPerks">
              <span className="tyPerk">
                <FaBolt aria-hidden />
                Same-day quotes
              </span>
              <span className="tyPerk">
                <FaShieldAlt aria-hidden />
                DBS-checked cleaners
              </span>
              <span className="tyPerk">
                <FaClock aria-hidden />
                Under 3 hour response
              </span>
            </div>

            <div className="tyActions">
              <ThmButton href="/">
                <FaHome aria-hidden />
                Back to Home
              </ThmButton>
              <ThmButton href="/services">
                <FaThLarge aria-hidden />
                Explore Services
              </ThmButton>
            </div>
          </div>

          <div className="tySide">
            <article className="tySideCard">
              <h3 className="tyCardTitle">What happens next?</h3>
              <ol className="tySteps">
                {steps.map((step, index) => (
                  <li key={step.title} className="tyStep">
                    <span className="tyStepNum" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="tySideCard tySideCardAlt">
              <h3 className="tyCardTitle">Need help sooner?</h3>
              <p className="tyContactText">
                Call our team directly for urgent enquiries or to discuss your
                cleaning requirements.
              </p>
              <a className="tyPhone" href={contactInfo.phoneHref}>
                <span className="tyPhoneIcon" aria-hidden>
                  <FaPhoneAlt />
                </span>
                {contactInfo.phone}
              </a>
              <p className="tyHours">
                Mon–Fri 07:00–19:00 · Sat 08:00–16:00 · Sun closed
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
