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

            {/* Location pins — positioned at actual East London locations on the borough map */}
            <div className={styles.pins}>
              {areas.map((area, i) => {
                const positions = [
                  { top: "40%", left: "66%" },   // Canning Town (Newham south)
                  { top: "24%", left: "74%" },   // Ilford (Redbridge)
                  { top: "33%", left: "63%" },   // Stratford (Newham north)
                  { top: "37%", left: "68%" },   // Plaistow (Newham center)
                  { top: "35%", left: "72%" },   // East Ham (Newham east)
                  { top: "32%", left: "84%" },   // Dagenham (Barking & Dagenham east)
                  { top: "42%", left: "71%" },   // Beckton (Newham south-east)
                  { top: "30%", left: "79%" },   // Barking (Barking borough)
                  { top: "40%", left: "57%" },   // Canary Wharf (Tower Hamlets by Thames)
                  { top: "42%", left: "62%" },   // Docklands (Newham/TH border)
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
