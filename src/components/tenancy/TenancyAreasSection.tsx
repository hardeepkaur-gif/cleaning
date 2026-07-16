import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { areaPins } from "@/components/areas/areasData";
import styles from "@/components/areas/AreasSection.module.css";
import local from "./TenancyAreasSection.module.css";

const tenancyAreaNames = [
  "Canning Town",
  "Stratford",
  "Plaistow",
  "East Ham",
  "Dagenham",
  "Beckton",
  "Barking",
  "Canary Wharf",
  "Docklands",
] as const;

const tenancyPins = areaPins.filter((pin) =>
  (tenancyAreaNames as readonly string[]).includes(pin.name),
);

export default function TenancyAreasSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="tenancy-areas"
      aria-labelledby="tenancy-areas-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="tenancy-areas-title">
              Areas We Cover in London, UK
            </h2>
            <p className={styles.intro}>
              We provide end of tenancy cleaning services across East London,
              with wider London coverage available depending on property type,
              scheduling and availability.
            </p>
            <ThmButton href="/#contact" className={styles.btnMain}>
              Contact Our Team <FaArrowRight />
            </ThmButton>
          </div>

          <div className={styles.mapArea}>
            <div className={styles.mapFrame}>
              <div className={styles.mapInner}>
                <img
                  src="/images/london-map.png"
                  alt="Map of Greater London showing East London end of tenancy cleaning coverage"
                  className={styles.mapImg}
                />

                <div className={styles.pins}>
                  {tenancyPins.map((pin, i) => (
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
          Not sure if we cover your area? Contact our team today and we&apos;ll be
          happy to confirm availability.
        </p>

        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...tenancyAreaNames, ...tenancyAreaNames].map((area, i) => (
              <span key={`${area}-${i}`} className={styles.tickerItem}>
                <FaMapMarkerAlt /> {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
