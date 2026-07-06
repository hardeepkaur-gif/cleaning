/**
 * Pin positions (top/left %) for public/images/london-map.png
 * Blank borough outline map — positions set using labeled reference map
 */
export const areaPins = [
  { name: "Canary Wharf", top: 48, left: 50 }, // Tower Hamlets, Thames bend
  { name: "Docklands", top: 49, left: 53 }, // Isle of Dogs
  { name: "Stratford", top: 32, left: 60 }, // Newham north
  { name: "Canning Town", top: 51, left: 61 }, // Newham south, river
  { name: "Plaistow", top: 43, left: 63 }, // Newham centre
  { name: "East Ham", top: 39, left: 66 }, // Newham east
  { name: "Beckton", top: 49, left: 68 }, // Newham south-east
  { name: "Ilford", top: 24, left: 71 }, // Redbridge
  { name: "Barking", top: 30, left: 77 }, // Barking & Dagenham west
  { name: "Dagenham", top: 32, left: 85 }, // Barking & Dagenham east
] as const;

export const areaNames = areaPins.map((p) => p.name);
