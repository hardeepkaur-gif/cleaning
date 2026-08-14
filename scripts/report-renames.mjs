import fs from "fs";
import path from "path";
import { RENAME_MAP } from "./rename-generic-images.mjs";

function scanDir(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanDir(full, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
  }
  return out;
}

const codeFiles = scanDir("src", [".ts", ".tsx", ".css"]).filter(
  (f) => !f.includes("scripts"),
);

const rows = [];
for (const [oldRel, newRel] of Object.entries(RENAME_MAP)) {
  const oldPath = `/images/${oldRel}`;
  const refs = [];
  for (const file of codeFiles) {
    const content = fs.readFileSync(file, "utf8");
    if (
      content.includes(oldPath) ||
      content.includes(oldRel) ||
      content.includes(path.basename(oldRel))
    ) {
      refs.push(file.replace(/\\/g, "/"));
    }
  }
  rows.push({
    old: oldRel,
    new: newRel,
    refs: [...new Set(refs)],
    referenced: refs.length > 0,
  });
}

const referenced = rows.filter((r) => r.referenced);
const unreferenced = rows.filter((r) => !r.referenced);

console.log("=== REFERENCED RENAMES ===");
for (const r of referenced) {
  console.log(`${r.old} -> ${r.new}`);
  console.log(`  refs: ${r.refs.join(", ") || "dynamic/template only"}`);
}

console.log("\n=== UNREFERENCED ORPHANS RENAMED ===");
for (const r of unreferenced) {
  console.log(`${r.old} -> ${r.new}`);
}
