import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { areaNames, areaPins } from "./areasData";
import styles from "./AreasSection.module.css";

export default function AreasSection() {
  return (
    <section className={styles.section} aria-labelledby="areas-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="areas-title">
              Areas We Cover in East London
            </h2>
            <p className={styles.intro}>
              We provide cleaning services across East London and regularly work
              with homeowners, tenants, landlords, students, and businesses
              throughout the region.
            </p>
            <ThmButton href="/contact-us" className={styles.btnMain}>
              Send Message <FaArrowRight />
            </ThmButton>
          </div>

          <div className={styles.mapArea}>
            <div className={styles.mapFrame}>
              <div className={styles.mapInner}>
                <img
                  src="/images/london-map.png"
                  alt="Map of Greater London showing East London service coverage"
                  className={styles.mapImg}
                />

                <div className={styles.pins}>
                  {areaPins.map((pin, i) => (
                    <div
                      key={pin.name}
                      className={styles.pin}
                      style={{
                        top: `${pin.top}%`,
                        left: `${pin.left}%`,
                        animationDelay: `${i * 0.12}s`,
                      }}
                      title={pin.name}
                      aria-label={pin.name}
                    >
                      <span className={styles.pinIcon}>
                        <FaMapMarkerAlt aria-hidden />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.note}>
          Our strongest coverage is across East London, whilst wider London and
          UK bookings may be available depending on the service required,
          property location, and scheduling availability.
        </p>

        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...areaNames, ...areaNames].map((area, i) => (
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
