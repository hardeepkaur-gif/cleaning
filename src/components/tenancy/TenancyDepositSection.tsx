import {
  FaBath,
  FaCamera,
  FaCheckCircle,
  FaClipboardList,
  FaCouch,
  FaExclamationCircle,
  FaFire,
  FaShieldAlt,
  FaSink,
  FaVectorSquare,
} from "react-icons/fa";
import styles from "./TenancyDepositSection.module.css";

const hotspots = [
  { label: "Ovens", icon: FaFire },
  { label: "Bathrooms", icon: FaBath },
  { label: "Kitchen cupboards", icon: FaSink },
  { label: "Carpets", icon: FaCouch },
  { label: "Skirting boards", icon: FaVectorSquare },
  { label: "Appliances", icon: FaClipboardList },
];

export default function TenancyDepositSection() {
  return (
    <section
      className={styles.section}
      id="tenancy-deposit-help"
      aria-labelledby="tenancy-deposit-title"
    >
      <div className={styles.orbOne} aria-hidden />
      <div className={styles.orbTwo} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tagline}>Deposit Guidance</span>
          <h2 className={styles.title} id="tenancy-deposit-title">
            Does End of Tenancy Cleaning London Help Get Your Deposit Back?
          </h2>
        </div>

        <div className={styles.stage}>
          <div className={styles.visualPanel}>
            <div className={styles.visualCard}>
              <div className={styles.visualTop}>
                <span className={styles.visualIcon} aria-hidden>
                  <FaShieldAlt />
                </span>
                <div>
                  <p className={styles.visualLabel}>Inspection hotspots</p>
                  <p className={styles.visualSub}>
                    Areas most often checked during handover
                  </p>
                </div>
              </div>

              <ul className={styles.hotspotGrid}>
                {hotspots.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className={styles.hotspotItem}
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <span className={styles.hotspotIcon} aria-hidden>
                        <Icon />
                      </span>
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.visualNote}>
                <FaExclamationCircle aria-hidden />
                <p>
                  Cleaning issues remain one of the largest categories of tenancy
                  deposit deductions in the UK.
                </p>
              </div>
            </div>

            <div className={styles.proofCard}>
              <span className={styles.proofIcon} aria-hidden>
                <FaCamera />
              </span>
              <div>
                <strong>Before &amp; after photos</strong>
                <p>Documented proof of work when requested</p>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.answerCard}>
              <span className={styles.answerBadge}>The honest answer</span>
              <p>
                The answer is no — there is no way of knowing that a deposit will
                ever be paid back through cleaning alone. Landlords and letting
                agents review the property from various angles, including damage,
                maintenance issues, unpaid rent, and overall condition.
              </p>
            </div>

            <p className={styles.text}>
              But one of the most prevalent reasons for tenancy deposit deductions
              is cleaning. Ovens, bathrooms, kitchen cupboards, carpet, skirting
              boards and appliances are common places spotted at inspection when
              they have not been cleaned to an acceptable standard.
            </p>

            <p className={styles.text}>
              A professional end of tenancy clean will help to prove that reasonable
              steps have been taken to return the property in clean and presentable
              condition. Our cleaners go through a comprehensive room-by-room
              checklist of the areas that are typically reviewed during inventories,
              inspections and property handovers.
            </p>

            <div className={styles.outcomeCard}>
              <ul className={styles.outcomeList}>
                <li>
                  <FaCheckCircle aria-hidden />
                  <span>
                    Before and after pictures and documented cleaning methods
                    provide additional proof of work performed when requested.
                  </span>
                </li>
                <li>
                  <FaCheckCircle aria-hidden />
                  <span>
                    These measures cannot guarantee a successful tenancy dispute,
                    but they can help facilitate a smoother handover and reduce
                    cleaning-related risks after move-out.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
