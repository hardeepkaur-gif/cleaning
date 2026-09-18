import { FaCheck, FaStar } from "react-icons/fa";
import ThmButton from "@/components/menu/ThmButton";
import {
  differentButtonHref,
  differentButtonLabel,
  differentImage,
  differentImageAlt,
  differentList,
  differentReview,
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
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="different-title">
              {differentTitle}
            </h2>

            <ul className={styles.list}>
              {differentList.map((item) => (
                <li key={item.text} className={styles.item}>
                  <span className={styles.icon} aria-hidden>
                    <FaCheck />
                  </span>
                  <span className={styles.itemText}>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <ThmButton href={differentButtonHref} className={styles.ctaBtn}>
                {differentButtonLabel}
              </ThmButton>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={differentImage}
                alt={differentImageAlt}
                loading="lazy"
              />

              <aside className={styles.review} aria-label="Client review">
                <p className={styles.reviewLabel}>{differentReview.label}</p>
                <div className={styles.reviewHead}>
                  <span className={styles.avatar} aria-hidden>
                    {differentReview.avatarInitial}
                  </span>
                  <div className={styles.reviewMeta}>
                    <strong className={styles.reviewName}>
                      {differentReview.name}
                    </strong>
                    <span
                      className={styles.stars}
                      aria-label={`${differentReview.rating} out of 5 stars`}
                    >
                      {Array.from({ length: differentReview.rating }).map(
                        (_, i) => (
                          <FaStar key={i} aria-hidden />
                        ),
                      )}
                    </span>
                  </div>
                </div>
                <p className={styles.reviewText}>{differentReview.text}</p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
