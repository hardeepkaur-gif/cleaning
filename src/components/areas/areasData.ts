/**
 * Pin positions (%) on public/images/london-map.webp
 * Labels fan outward (side + stem) so East London names stay readable.
 */
export type AreaPin = {
  name: string;
  top: number;
  left: number;
  side: "top" | "bottom" | "left" | "right";
};

export const areaPins: AreaPin[] = [
  { name: "Canary Wharf", top: 54, left: 54, side: "left" },
  { name: "Docklands", top: 58, left: 58, side: "bottom" },
  { name: "Canning Town", top: 52, left: 64, side: "bottom" },
  { name: "Stratford", top: 34, left: 62, side: "left" },
  { name: "Plaistow", top: 45, left: 66, side: "left" },
  { name: "East Ham", top: 42, left: 72, side: "top" },
  { name: "Beckton", top: 52, left: 74, side: "right" },
  { name: "Barking", top: 38, left: 80, side: "right" },
  { name: "Ilford", top: 26, left: 74, side: "top" },
  { name: "Dagenham", top: 40, left: 88, side: "right" },
];

export const areaNames = areaPins.map((p) => p.name);
