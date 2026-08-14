import fs from "fs";
import path from "path";

const GENERIC = [
  /(^|\/)\d+\.webp$/i,
  /img-\d+/i,
  /shape-\d+/i,
  /slide\d+/i,
  /pic\d+\.webp$/i,
  /about-three-/i,
  /why-choose-one-/i,
  /services-three-/i,
  /services-2-\d+/i,
  /main-slider/i,
  /banner-one-/i,
  /cta-one-/i,
  /illustration-\d+/i,
  /faq-bg-\d+/i,
  /faq-shape-/i,
  /faq-bg-shape-/i,
  /sec-title-shape-/i,
  /review-img-/i,
  /author-img-/i,
  /carpet-included-\d+/i,
  /gutter-included-\d+/i,
  /\/prepare\/(main|img-\d+)\.webp$/i,
  /\/deposit\/(main|secondary)\.webp$/i,
  /main-slider-two-\d+-\d+/i,
  /slider-\d+-\d+/i,
  /why-choose-one-client/i,
];

function isGeneric(rel) {
  return GENERIC.some((p) => p.test(rel));
}

function walk(dir, base = "") {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(full, rel));
    else if (/\.(webp|svg|png|jpg)$/i.test(e.name))
      out.push(rel.replace(/\\/g, "/"));
  }
  return out;
}

function scanDir(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanDir(full, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
  }
  return out;
}

const genericFiles = walk("public/images").filter(isGeneric);
const codeFiles = [
  ...scanDir("src", [".ts", ".tsx", ".css", ".js", ".jsx", ".json", ".md"]),
  ...scanDir("public", [".html", ".xml", ".css", ".js"]),
  ...scanDir("css", [".css"]),
  ...scanDir("js", [".js"]),
].filter((f) => !f.includes("node_modules"));

const contents = new Map(
  codeFiles.map((f) => [f, fs.readFileSync(f, "utf8")]),
);

console.log("FILE\tREFERENCES");
for (const rel of genericFiles) {
  const basename = path.basename(rel);
  const hits = [];
  for (const [file, content] of contents) {
    if (content.includes(basename) || content.includes(rel.replace(/\\/g, "/"))) {
      hits.push(file.replace(/\\/g, "/"));
    }
  }
  console.log(`${rel}\t${hits.length ? hits.join("; ") : "NONE"}`);
}
