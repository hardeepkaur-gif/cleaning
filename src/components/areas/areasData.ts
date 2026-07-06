/**
 * Pin positions (top/left %) relative to public/images/london-map.png
 * Calibrated for East London boroughs on the Greater London outline map.
 */
export const areaPins = [
  { name: "Canary Wharf", top: 53, left: 56 }, // Tower Hamlets — Isle of Dogs / Thames bend
  { name: "Docklands", top: 51, left: 58 }, // Tower Hamlets — Isle of Dogs east
  { name: "Stratford", top: 31, left: 63 }, // Newham — north
  { name: "Canning Town", top: 53, left: 67 }, // Newham — south, riverside
  { name: "Plaistow", top: 43, left: 68 }, // Newham — centre
  { name: "East Ham", top: 39, left: 71 }, // Newham — east
  { name: "Beckton", top: 51, left: 73 }, // Newham — south-east
  { name: "Ilford", top: 24, left: 75 }, // Redbridge
  { name: "Barking", top: 32, left: 81 }, // Barking & Dagenham — west
  { name: "Dagenham", top: 34, left: 87 }, // Barking & Dagenham — east
] as const;

export const areaNames = areaPins.map((p) => p.name);
