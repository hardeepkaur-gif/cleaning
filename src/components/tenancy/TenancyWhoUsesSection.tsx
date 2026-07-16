import styles from "@/components/different/WhatMakesDifferent.module.css";
import local from "./TenancyWhoUsesSection.module.css";

const audiences = [
  {
    title: "Tenants Moving Out Cleaning Services",
    text: "Moving out of a rented property can be stressful, especially when inspections, inventories, and deposit concerns are involved. Our end of tenancy cleaning service helps tenants to clean their properties for handover with a comprehensive clean that covers the areas mainly the landlord or letting agent will check.",
    image: "/images/services/cleanon-tabs/services-three-tab-img-1.jpg",
  },
  {
    title: "Landlords Preparing Properties",
    text: "A clean property will be easier to market, view and also hand over to new occupants. We are a professional move out cleaning service to help landlords get their houses, flats and rental properties prepared for the next tenant.",
    image: "/images/services/cleanon-tabs/services-three-tab-img-2.jpg",
  },
  {
    title: "Letting Agents and Property Managers",
    text: "Managing multiple properties often means working to tight turnaround times. Our end of tenancy cleaning professionals can assist letting agents and property managers with dependable cleaning services that make them prepare their properties for new tenants, inspections and inventory checks.",
    image: "/images/services/cleanon-tabs/services-three-tab-img-3.jpg",
  },
  {
    title: "New Homeowners Moving In Cleaning Service",
    text: 'Not all properties are delivered "move-in ready." Our move in and end of tenancy cleaning will allow new homeowners to start off with a clean slate before they move in and unpack their belongings.',
    image: "/images/services/cleanon-tabs/services-three-tab-img-4.jpg",
  },
];

export default function TenancyWhoUsesSection() {
  return (
    <section
      className={styles.section}
      id="tenancy-who-uses"
      aria-labelledby="tenancy-who-uses-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="tenancy-who-uses-title">
            Who Uses Our End of Tenancy
            <br />
            Cleaning Services London
          </h2>
          <p className={styles.intro}>
            Our end of tenancy cleaning service is used by all kinds of customers
            in London including tenants getting ready to move out and letting
            agents and landlords needing a property cleaned and refreshed for its
            next phase.
          </p>
        </div>

        <div className={`${styles.grid} ${local.gridFour}`}>
          {audiences.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
