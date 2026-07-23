import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import { areaPins } from "@/components/areas/areasData";
import styles from "@/components/areas/AreasSection.module.css";
import local from "./GutterAreasSection.module.css";
import {
  gutterAreaNames,
  gutterAreasIntro,
  gutterAreasNote,
  gutterAreasTitle,
} from "./gutterAreasData";

const gutterPins = areaPins.filter((pin) =>
  (gutterAreaNames as readonly string[]).includes(pin.name),
);

export default function GutterAreasSection() {
  return (
    <section
      className={`${styles.section} ${local.section}`}
      id="gutter-areas"
      aria-labelledby="gutter-areas-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="gutter-areas-title">
              {gutterAreasTitle}
            </h2>
            <p className={styles.intro}>{gutterAreasIntro}</p>
            <ThmButton href="/#contact" className={styles.btnMain}>
              Contact Our Team <FaArrowRight />
            </ThmButton>
          </div>

          <div className={styles.mapArea}>
            <div className={styles.mapFrame}>
              <div className={styles.mapInner}>
                <img
                  src="/images/london-map.png"
                  alt="Map of Greater London showing East London gutter cleaning coverage"
                  className={styles.mapImg}
                />

                <div className={styles.pins}>
                  {gutterPins.map((pin, i) => (
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

        <p className={styles.note}>{gutterAreasNote}</p>

        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...gutterAreaNames, ...gutterAreaNames].map((area, i) => (
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
