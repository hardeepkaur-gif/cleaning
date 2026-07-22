import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import styles from "@/components/areas/AreasSection.module.css";
import local from "./CarpetAreasSection.module.css";
import {
  carpetAreaNames,
  carpetAreaPins,
  carpetAreasIntro,
  carpetAreasNote,
  carpetAreasTitle,
} from "./carpetAreasData";

export default function CarpetAreasSection() {
  return (
    <section
      className={styles.section}
      id="carpet-cleaning-areas"
      aria-labelledby="carpet-areas-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={`${styles.title} ${local.title}`} id="carpet-areas-title">
              {carpetAreasTitle}
            </h2>
            <p className={styles.intro}>{carpetAreasIntro}</p>
            <ThmButton
              href="/#contact"
              className={`${styles.btnMain} ${local.btnMain}`}
            >
              Send Message <FaArrowRight aria-hidden />
            </ThmButton>
          </div>

          <div className={styles.mapArea}>
            <div className={styles.mapFrame}>
              <div className={`${styles.mapInner} ${local.mapInner}`}>
                <img
                  src="/images/london-map.webp"
                  alt="Map of Greater London showing carpet cleaning coverage in East London"
                  className={styles.mapImg}
                  loading="lazy"
                />

                <div className={styles.pins}>
                  {carpetAreaPins.map((pin, i) => (
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

        <p className={styles.note}>{carpetAreasNote}</p>

        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...carpetAreaNames, ...carpetAreaNames].map((area, i) => (
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
