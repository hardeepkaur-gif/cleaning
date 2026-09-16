import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { areaNames, areaPins } from "@/components/areas/areasData";
import styles from "@/components/areas/AreasSection.module.css";
import local from "./AboutServingSection.module.css";

export default function AboutServingSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="serving-london"
      aria-labelledby="about-serving-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.tagline}>
              <FaMapMarkerAlt aria-hidden /> Across London
            </p>
            <h2 className={styles.title} id="about-serving-title">
              Serving Homes and Businesses Across London
            </h2>
            <p className={styles.intro}>
              We&apos;re based in London and provide cleaning services across
              the capital, working around the schedules of busy households and
              properties that need to be turned around quickly.
            </p>
            <ThmButton href="/contact-us" className={styles.btnMain}>
              Get a Free Quote <FaArrowRight aria-hidden />
            </ThmButton>
          </div>

          <div className={styles.mapArea}>
            <div className={styles.mapFrame}>
              <div className={styles.mapInner}>
                <img
                  src="/images/london-map.webp"
                  alt="Map of Greater London showing Cleaning Services London coverage"
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
                      <span
                        className={styles.pinIcon}
                        role="img"
                        aria-label={`${pin.name} service area map pin icon`}
                      >
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
          Our strongest coverage is across East London, whilst wider London
          bookings may be available depending on the service required, property
          location, and scheduling availability.
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
