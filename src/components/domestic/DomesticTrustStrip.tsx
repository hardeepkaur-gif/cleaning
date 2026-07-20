import {

  FaAward,

  FaPoundSign,

  FaRegSmile,

  FaShieldAlt,

  FaUserCheck,

  FaUserShield,

} from "react-icons/fa";

import type { IconType } from "react-icons";

import styles from "./DomesticTrustStrip.module.css";



type TrustItem = {

  icon: IconType;

  label: string;

};



const trustItems: TrustItem[] = [

  { icon: FaUserShield, label: "DBS-Checked Local Cleaners" },

  { icon: FaShieldAlt, label: "Fully Insured Cleaning Company" },

  { icon: FaAward, label: "Experienced Local Cleaners" },

  { icon: FaUserCheck, label: "Same Cleaner Available for Regular Visits" },

  {

    icon: FaPoundSign,

    label: "Regular home cleaning service prices starting at £18/h",

  },

  { icon: FaRegSmile, label: "Satisfaction Guarantee" },

];



export default function DomesticTrustStrip() {

  return (

    <section

      className={styles.section}

      id="domestic-trust-strip"

      aria-label="Why choose our domestic cleaning"

    >

      <div className={styles.container}>

        <ul className={styles.grid}>

          {trustItems.map(({ icon: Icon, label }) => (

            <li key={label} className={styles.card}>

              <span className={styles.iconWrap} aria-hidden>

                <Icon />

              </span>

              <div className={styles.content}>

                <span className={styles.label}>{label}</span>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </section>

  );

}


