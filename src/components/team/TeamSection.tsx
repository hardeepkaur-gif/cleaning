"use client";

import { useState, type CSSProperties } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMinus,
  FaPinterestP,
  FaPlus,
  FaXTwitter,
} from "react-icons/fa6";
import {
  teamMembers,
  teamSocialLinks,
  teamTagline,
  teamTitleAccent,
  teamTitleLead,
  type TeamMember,
} from "./teamData";
import styles from "./TeamSection.module.css";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  x: FaXTwitter,
} as const;

function TeamCard({
  member,
  isActive,
  onToggle,
}: {
  member: TeamMember;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
    >
      <div className={styles.photoWrap}>
        <img
          className={styles.photo}
          src={member.image}
          alt={member.imageAlt}
          loading="lazy"
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.socialOrb}>
          <button
            type="button"
            className={styles.toggleBtn}
            aria-expanded={isActive}
            aria-label={
              isActive
                ? `Hide social links for ${member.name}`
                : `Show social links for ${member.name}`
            }
            onClick={onToggle}
          >
            {isActive ? <FaMinus aria-hidden /> : <FaPlus aria-hidden />}
          </button>

          <ul
            className={`${styles.socialArc} ${
              isActive ? styles.socialArcOpen : ""
            }`}
          >
            {teamSocialLinks.map((profile, index) => {
              const Icon =
                socialIcons[profile.icon as keyof typeof socialIcons];
              if (!Icon) return null;

              return (
                <li
                  key={profile.label}
                  className={styles.socialItem}
                  style={{ "--i": index } as CSSProperties}
                >
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`${member.name} on ${profile.label}`}
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      className={styles.section}
      id="our-team"
      aria-labelledby="team-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>
            <span className={styles.tagDot} aria-hidden />
            {teamTagline}
          </span>
          <h2 className={styles.title} id="team-title">
            {teamTitleLead}{" "}
            <span className={styles.titleAccent}>{teamTitleAccent}</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              isActive={activeIndex === index}
              onToggle={() =>
                setActiveIndex((current) =>
                  current === index ? null : index,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
