export type AboutReview = {
  name: string;
  initial: string;
  avatarColor: string;
  location: string;
  timeAgo: string;
  rating: 5 | 4;
  text: string;
};

export const aboutReviewsTagline = "Customer Feedback";

export const aboutReviewsTitle = "Our Commitment to Quality";

export const aboutReviewsIntro =
  "Testimonials and customer feedback matter to us. Here's what recent clients have shared after using our cleaning services across London.";

export const aboutReviewsSummary = {
  rating: "4.9",
  countLabel: "Based on Google reviews",
  ctaLabel: "See us on Google",
  ctaHref:
    "https://www.google.com/maps/search/?api=1&query=CL+Cleaning+Services+London+68+Granleigh+Road",
};

export const aboutReviews: AboutReview[] = [
  {
    name: "Sarah M.",
    initial: "S",
    avatarColor: "#e57373",
    location: "Leytonstone",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "Booked an end of tenancy clean for my flat in Leytonstone. The team arrived on time, worked through every room carefully, and left the place inspection-ready. Fixed price as quoted — no surprises. Would use again.",
  },
  {
    name: "James K.",
    initial: "J",
    avatarColor: "#64b5f6",
    location: "Canning Town",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Needed a same-week deep clean before new tenants moved in. Communication was clear from the first call, and the cleaners were professional and respectful in the property. Carpet and kitchen came up brilliantly.",
  },
  {
    name: "Priya N.",
    initial: "P",
    avatarColor: "#81c784",
    location: "Stratford",
    timeAgo: "3 weeks ago",
    rating: 5,
    text: "We've used CL Cleaning for fortnightly domestic cleans for a few months now. Same standard each visit, DBS-checked staff, and they always bring their own products. Reliable and easy to deal with.",
  },
  {
    name: "Daniel R.",
    initial: "D",
    avatarColor: "#ffb74d",
    location: "Hackney",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Gutter clean done properly — cleared the blockages and checked the downpipes. Quote was straightforward and the work matched what was agreed. Good local London company.",
  },
  {
    name: "Emily T.",
    initial: "E",
    avatarColor: "#ba68c8",
    location: "East London",
    timeAgo: "5 weeks ago",
    rating: 5,
    text: "Had a stubborn stain on the living room carpet after a party. They explained the method beforehand, treated it carefully, and the result was much better than I expected. Friendly team and tidy after themselves.",
  },
  {
    name: "Omar H.",
    initial: "O",
    avatarColor: "#4db6ac",
    location: "Newham",
    timeAgo: "1 month ago",
    rating: 4,
    text: "Solid end of tenancy clean. Kitchen and bathrooms were spotless. One cupboard edge needed a quick touch-up which they sorted promptly when I mentioned it. Honest service and fair pricing.",
  },
];
