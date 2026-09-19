import { FaCheck } from "react-icons/fa";
import {
  domesticWhyChooseImage,
  domesticWhyChooseImageAlt,
  domesticWhyChooseItems,
  domesticWhyChooseTitle,
} from "./domesticWhyChooseData";
import styles from "@/components/different/WhatMakesDifferent.module.css";
import local from "./DomesticWhyChooseSection.module.css";

export default function DomesticWhyChooseSection() {
  return (
    <section
      className={styles.section}
      id="domestic-why-choose"
      aria-labelledby="domestic-why-choose-title"
    >
      <div className={styles.container}>
        <div className={`${styles.layout} ${local.layout}`}>
          <div className={`${styles.copy} ${local.copy}`}>
            <h2 className={styles.title} id="domestic-why-choose-title">
              {domesticWhyChooseTitle}
            </h2>

            <ul className={styles.list}>
              {domesticWhyChooseItems.map((item) => (
                <li key={item.text} className={styles.item}>
                  <span className={styles.icon} aria-hidden>
                    <FaCheck />
                  </span>
                  <span className={styles.itemText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.visual} ${local.visual}`}>
            <div className={`${styles.imageWrap} ${local.imageWrap}`}>
              <img
                className={`${styles.image} ${local.image}`}
                src={domesticWhyChooseImage}
                alt={domesticWhyChooseImageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
