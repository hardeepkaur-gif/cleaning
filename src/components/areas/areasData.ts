/**
 * Pin positions (top/left %) relative to public/images/london-map.webp
 * Calibrated for East London boroughs on the Greater London outline map.
 */
export const areaPins = [
  { name: "Canning Town", top: 53, left: 67 },
  { name: "Ilford", top: 24, left: 75 },
  { name: "Stratford", top: 31, left: 63 },
  { name: "Plaistow", top: 43, left: 68 },
  { name: "East Ham", top: 39, left: 71 },
  { name: "Dagenham", top: 34, left: 87 },
  { name: "Beckton", top: 51, left: 73 },
  { name: "Barking", top: 32, left: 81 },
  { name: "Canary Wharf", top: 53, left: 56 },
  { name: "Docklands", top: 51, left: 58 },
] as const;

export const areaNames = areaPins.map((p) => p.name);
