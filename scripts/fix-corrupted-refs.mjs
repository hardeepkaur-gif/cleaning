import fs from "fs";
import path from "path";

const FIXES = [
  [
    "decorative-hero-coreclean-accent-unused-theme-spare-01",
    "decorative-hero-coreclean-accent-1",
  ],
  [
    "decorative-hero-coreclean-accent-unused-theme-spare-02",
    "decorative-hero-coreclean-accent-2",
  ],
  [
    "decorative-hero-coreclean-accent-unused-theme-spare-03",
    "decorative-hero-coreclean-accent-3",
  ],
  [
    "decorative-hero-coreclean-accent-unused-theme-spare-04",
    "decorative-hero-coreclean-accent-4",
  ],
  [
    "decorative-hero-coreclean-accent-unused-theme-spare-05",
    "decorative-hero-coreclean-accent-5",
  ],
  [
    "decorative-hero-coreclean-bg-tenancy-deposit-cleaning-team-london",
    "decorative-hero-coreclean-bg-secondary",
  ],
  [
    "decorative-hero-home3-accent-unused-theme-spare-01",
    "decorative-hero-home3-accent-1",
  ],
  [
    "decorative-hero-home3-accent-unused-theme-spare-02",
    "decorative-hero-home3-accent-2",
  ],
  [
    "decorative-hero-home3-accent-unused-theme-spare-03",
    "decorative-hero-home3-accent-3",
  ],
  [
    "decorative-hero-home3-accent-unused-theme-spare-04",
    "decorative-hero-home3-accent-4",
  ],
  [
    "decorative-hero-home3-accent-unused-theme-spare-05",
    "decorative-hero-home3-accent-5",
  ],
  [
    "decorative-hero-home3-bg-tenancy-deposit-cleaning-team-london",
    "decorative-hero-home3-bg-secondary",
  ],
  [
    "decorative-cleaning-accent-shape-unused-theme-spare-01",
    "decorative-cleaning-accent-shape-1",
  ],
  [
    "decorative-cleaning-accent-shape-unused-theme-spare-02",
    "decorative-cleaning-accent-shape-2",
  ],
  [
    "decorative-cleaning-accent-shape-unused-theme-spare-03",
    "decorative-cleaning-accent-shape-3",
  ],
  [
    "decorative-cleaning-accent-shape-unused-theme-spare-04",
    "decorative-cleaning-accent-shape-4",
  ],
  [
    "decorative-services-tab-accent-tenancy-deposit-cleaning-team-london",
    "decorative-services-tab-accent-secondary",
  ],
  [
    "gutter-signs-tenancy-deposit-cleaning-team-london",
    "gutter-signs-secondary",
  ],
];

function scanDir(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanDir(full, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
  }
  return out;
}

const files = scanDir("src", [".ts", ".tsx", ".css"]).filter(
  (f) => !f.includes("scripts"),
);

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  for (const [from, to] of FIXES) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Fixed:", file);
  }
}

console.log("Done.");
