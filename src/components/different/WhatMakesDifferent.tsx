import {
  differentIntro,
  differentList,
  differentTitle,
} from "./differentData";
import styles from "./WhatMakesDifferent.module.css";

export default function WhatMakesDifferent() {
  return (
    <section
      className={styles.section}
      id="what-makes-us-different"
      aria-labelledby="different-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="different-title">
            {differentTitle}
          </h2>
          <p className={styles.intro}>{differentIntro}</p>
        </div>

        <div className={styles.grid}>
          {differentList.map((item) => (
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
