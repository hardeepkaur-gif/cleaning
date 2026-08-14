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
  iconAlt: string;
};

const items: WhyItem[] = [
  {
    title: "DBS-Checked Cleaners",
    text: "Trusted professionals working inside your property.",
    icon: PiShieldStarDuotone,
    iconAlt: "DBS checked end of tenancy cleaners icon",
  },
  {
    title: "Fully Insured Service",
    text: "Additional peace of mind throughout the cleaning process.",
    icon: PiUmbrellaDuotone,
    iconAlt: "Fully insured tenancy cleaning service icon",
  },
  {
    title: "Fixed Pricing",
    text: "Clear quotations with no hidden charges.",
    icon: PiCurrencyGbpDuotone,
    iconAlt: "Fixed price end of tenancy cleaning icon",
  },
  {
    title: "Detailed Cleaning Checklists",
    text: "Consistent cleaning standards across every booking.",
    icon: PiListChecksDuotone,
    iconAlt: "Detailed tenancy cleaning checklist icon",
  },
  {
    title: "Eco-Friendly Cleaning Products",
    text: "Effective cleaning without unnecessarily harsh chemicals.",
    icon: PiLeafDuotone,
    iconAlt: "Eco friendly tenancy cleaning products icon",
  },
  {
    title: "Before & After Photos",
    text: "Additional transparency where requested.",
    icon: PiCameraDuotone,
    iconAlt: "Before and after tenancy cleaning photos icon",
  },
  {
    title: "14-Day Re-Clean Guarantee",
    text: "Added confidence following your property handover.",
    icon: PiSealCheckDuotone,
    iconAlt: "14 day re clean guarantee icon for tenancy cleaning",
  },
  {
    title: "Experienced End of Tenancy Cleaners",
    text: "Familiar with the areas commonly checked during inspections.",
    icon: PiMedalDuotone,
    iconAlt: "Experienced end of tenancy cleaners icon",
  },
  {
    title: "East London Specialists",
    text: "Local knowledge with wider London coverage available.",
    icon: PiMapPinAreaDuotone,
    iconAlt: "East London end of tenancy cleaning coverage icon",
  },
  {
    title: "Flexible Booking Availability",
    text: "Convenient appointments to fit around your moving schedule.",
    icon: PiCalendarCheckDuotone,
    iconAlt: "Flexible tenancy cleaning booking availability icon",
  },
];

export default function TenancyWhyChooseAltSection() {
  return (
    <section
      className={`${styles.why} ${local.section}`}
      id="tenancy-why-choose"
      aria-labelledby="tenancy-why-choose-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="tenancy-why-choose-title">
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
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`${styles.problemCard} ${local.card}`}
              >
                <span
                  className={`${styles.cardIcon} ${local.icon}`}
                  role="img"
                  aria-label={item.iconAlt}
                >
                  <Icon aria-hidden />
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
