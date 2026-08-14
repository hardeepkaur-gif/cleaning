import fs from "fs";
import path from "path";

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
const imageRefs = new Set();
const re = /\/images\/[a-z0-9./_-]+\.(?:webp|svg|png|jpg)/gi;

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(re) || [];
  for (const m of matches) imageRefs.add(m.split("?")[0]);
}

const missing = [];
for (const ref of [...imageRefs].sort()) {
  const disk = path.join("public", ref.replace(/^\//, "").replace(/\//g, path.sep));
  if (!fs.existsSync(disk)) missing.push({ ref, disk });
}

if (missing.length) {
  console.error("MISSING FILES:", missing.length);
  for (const m of missing) console.error(m.ref);
  process.exit(1);
}
console.log("All", imageRefs.size, "image references resolve to existing files.");
