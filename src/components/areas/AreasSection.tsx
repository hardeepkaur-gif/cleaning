import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "./AreasSection.module.css";

const areas = [
  "Canning Town",
  "Ilford",
  "Stratford",
  "Plaistow",
  "East Ham",
  "Dagenham",
  "Beckton",
  "Barking",
  "Canary Wharf",
  "Docklands",
];

export default function AreasSection() {
  return (
    <section className={styles.section} aria-labelledby="areas-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.copy}>
            <span className={styles.tagline}>
              <FaMapMarkerAlt /> Our Coverage
            </span>
            <h2 className={styles.title} id="areas-title">
              Areas We Cover in East London
            </h2>
            <p className={styles.intro}>
              We provide cleaning services across East London and regularly work
              with homeowners, tenants, landlords, students, and businesses
              throughout the region.
            </p>
            <ThmButton href="#contact" className={styles.btnMain}>
              Send Message <FaArrowRight />
            </ThmButton>
          </div>

          {/* Right map with pins */}
          <div className={styles.mapArea}>
            {/* Actual London map image */}
            <img
              src="/images/london-map.png"
              alt="London boroughs map"
              className={styles.mapImg}
            />

            {/* Location pins — positioned at actual East London locations */}
            <div className={styles.pins}>
              {areas.map((area, i) => {
                const positions = [
                  { top: "42%", left: "62%" },   // Canning Town
                  { top: "25%", left: "82%" },   // Ilford
                  { top: "30%", left: "68%" },   // Stratford
                  { top: "45%", left: "67%" },   // Plaistow
                  { top: "38%", left: "75%" },   // East Ham
                  { top: "42%", left: "88%" },   // Dagenham
                  { top: "48%", left: "72%" },   // Beckton
                  { top: "50%", left: "82%" },   // Barking
                  { top: "48%", left: "56%" },   // Canary Wharf
                  { top: "50%", left: "62%" },   // Docklands
                ];
                const pos = positions[i];
                return (
                  <div
                    key={area}
                    className={styles.pin}
                    style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.15}s` }}
                  >
                    <div className={styles.pinIcon}>
                      <FaMapMarkerAlt />
                    </div>
                    <span className={styles.pinLabel}>{area}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className={styles.note}>
          Our strongest coverage is across East London, whilst wider London and
          UK bookings may be available depending on the service required,
          property location, and scheduling availability.
        </p>

        {/* Scrolling location ticker */}
        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...areas, ...areas].map((area, i) => (
              <span key={i} className={styles.tickerItem}>
                <FaMapMarkerAlt /> {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
