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

const root = "public/images";
const files = walk(root);
const generic = files.filter(isGeneric);
console.log("GENERIC COUNT:", generic.length);
for (const f of generic) console.log(f);
