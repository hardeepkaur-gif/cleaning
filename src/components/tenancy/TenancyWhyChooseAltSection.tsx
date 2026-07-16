import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiCameraDuotone,
  PiCurrencyGbpDuotone,
  PiLeafDuotone,
  PiListChecksDuotone,
  PiMapPinAreaDuotone,
  PiMedalDuotone,
  PiSealCheckDuotone,
  PiShieldStarDuotone,
  PiUmbrellaDuotone,
} from "react-icons/pi";
import styles from "@/components/why/WhyChooseUsAlt.module.css";
import local from "./TenancyWhyChooseAltSection.module.css";

type WhyItem = {
  title: string;
  text: string;
  icon: IconType;
};

const items: WhyItem[] = [
  {
    title: "DBS-Checked Cleaners",
    text: "Trusted professionals working inside your property.",
    icon: PiShieldStarDuotone,
  },
  {
    title: "Fully Insured Service",
    text: "Additional peace of mind throughout the cleaning process.",
    icon: PiUmbrellaDuotone,
  },
  {
    title: "Fixed Pricing",
    text: "Clear quotations with no hidden charges.",
    icon: PiCurrencyGbpDuotone,
  },
  {
    title: "Detailed Cleaning Checklists",
    text: "Consistent cleaning standards across every booking.",
    icon: PiListChecksDuotone,
  },
  {
    title: "Eco-Friendly Cleaning Products",
    text: "Effective cleaning without unnecessarily harsh chemicals.",
    icon: PiLeafDuotone,
  },
  {
    title: "Before & After Photos",
    text: "Additional transparency where requested.",
    icon: PiCameraDuotone,
  },
  {
    title: "14-Day Re-Clean Guarantee",
    text: "Added confidence following your property handover.",
    icon: PiSealCheckDuotone,
  },
  {
    title: "Experienced End of Tenancy Cleaners",
    text: "Familiar with the areas commonly checked during inspections.",
    icon: PiMedalDuotone,
  },
  {
    title: "East London Specialists",
    text: "Local knowledge with wider London coverage available.",
    icon: PiMapPinAreaDuotone,
  },
  {
    title: "Flexible Booking Availability",
    text: "Convenient appointments to fit around your moving schedule.",
    icon: PiCalendarCheckDuotone,
  },
];

export default function TenancyWhyChooseAltSection() {
  return (
    <section
      className={`${styles.why} ${local.section}`}
      id="tenancy-why-choose-alt"
      aria-labelledby="tenancy-why-choose-alt-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="tenancy-why-choose-alt-title">
            Why Choose Cleaning Services London
            <br />
            for End of Tenancy Cleaning
          </h2>
          <p className={styles.intro}>
            Finding a cleaner is easy. Finding a cleaning company that arrives on
            time, follows documented processes and delivers consistent standards is
            where the real challenge begins. At Cleaning Services London, we focus
            on reliability, transparency and attention to detail at every stage of
            the cleaning process.
          </p>
        </div>

        <div className={`${styles.problemGrid} ${local.grid}`}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`${styles.problemCard} ${local.card}`}
              >
                <span className={styles.cardNum} aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`${styles.cardIcon} ${local.icon}`} aria-hidden>
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
