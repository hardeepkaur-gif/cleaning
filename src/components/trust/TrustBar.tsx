import {
  FaCamera,
  FaCheckCircle,
  FaFileSignature,
  FaPoundSign,
  FaRegSmile,
  FaShieldAlt,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import styles from "./TrustBar.module.css";

type TrustPoint = {
  icon: IconType;
  label: string;
};

const trustPoints: TrustPoint[] = [
  { icon: FaUserShield, label: "DBS Checked Cleaners" },
  { icon: FaShieldAlt, label: "Fully Insured Cleaning Company" },
  { icon: FaCheckCircle, label: "100+ Cleaning Jobs Completed" },
  { icon: FaUserCheck, label: "Same Cleaner for Regular Visits" },
  { icon: FaFileSignature, label: "Signed Cleaning SOPs" },
  { icon: FaCamera, label: "Completion Photo Reports" },
  { icon: FaPoundSign, label: "Fixed Pricing Structure" },
  { icon: FaRegSmile, label: "Satisfaction Guarantee" },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Why London trusts us">
      <div className={styles.container}>
        <ul className={styles.grid}>
          {trustPoints.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon />
              </span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
