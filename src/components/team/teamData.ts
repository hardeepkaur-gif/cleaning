import { socialProfiles } from "@/lib/site";

export const teamTitle = "The People Who Do The Work.";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "James Mitchell",
    role: "Founder",
    image: "/images/team/member-1.webp",
    imageAlt: "James Mitchell, Founder of CL Cleaning Services London",
  },
  {
    name: "Omar Hassan",
    role: "Head of Operations",
    image: "/images/team/member-2.webp",
    imageAlt: "Omar Hassan, Head of Operations at CL Cleaning Services London",
  },
  {
    name: "Daniel Cole",
    role: "Client Strategy",
    image: "/images/team/member-3.webp",
    imageAlt: "Daniel Cole, Client Strategy at CL Cleaning Services London",
  },
];

/** Social icons shown on team card hover / click — company profiles */
export const teamSocialLinks = socialProfiles.filter((p) =>
  ["Facebook", "Pinterest", "X", "Instagram"].includes(p.label),
);
