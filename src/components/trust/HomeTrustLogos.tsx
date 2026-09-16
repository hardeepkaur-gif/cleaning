import { homeTrustLogos, homeTrustTitle } from "./homeTrustData";
import styles from "./HomeTrustLogos.module.css";

export default function HomeTrustLogos() {
  return (
    <section
      className={styles.section}
      id="home-trust-logos"
      aria-labelledby="home-trust-title"
    >
      <div className={styles.container}>
        <div className={styles.panel}>
          <h2 className={styles.title} id="home-trust-title">
            {homeTrustTitle}
          </h2>

          <ul className={styles.grid}>
            {homeTrustLogos.map(({ name, src, alt }) => (
              <li key={name} className={styles.card}>
                <div className={styles.logoItem}>
                  <img
                    src={src}
                    alt={alt}
                    className={styles.logoImg}
                    loading="lazy"
                    width={160}
                    height={48}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
