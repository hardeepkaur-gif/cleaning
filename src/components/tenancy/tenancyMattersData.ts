export type TenancyComparisonItem = {
  title: string;
  text: string;
};

export type TenancyComparisonRow = {
  why: TenancyComparisonItem;
  how: TenancyComparisonItem | TenancyComparisonItem[];
};

export const tenancyMattersTitle =
  "Why End of Tenancy Cleaning Matters Before Moving Out";

export const tenancyMattersRows: TenancyComparisonRow[] = [
  {
    why: {
      title: "Inventory Inspections",
      text: "Landlords and letting agents often compare the property's condition against the original inventory report before releasing deposits.",
    },
    how: {
      title: "Time Savings",
      text: "Moving house is demanding. Professional cleaners handle the deep cleaning while you focus on the move.",
    },
  },
  {
    why: {
      title: "Cleaning Disputes",
      text: "Cleaning remains one of the most common causes of tenancy deposit disputes in the UK.",
    },
    how: {
      title: "Hard-to-Reach Areas",
      text: "Ovens, skirting boards, cupboards, appliance seals and internal windows are often missed during regular cleaning.",
    },
  },
  {
    why: {
      title: "Landlord Expectations",
      text: "A detailed move-out clean helps ensure the property is presented to a high standard for its next occupants.",
    },
    how: [
      {
        title: "Better Presentation",
        text: "A professionally cleaned property creates a better impression during handover and viewings.",
      },
      {
        title: "Stress-Free Handover",
        text: "A structured cleaning checklist helps reduce last-minute issues before keys are returned.",
      },
    ],
  },
];
