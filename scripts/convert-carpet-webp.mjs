import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_BYTES = 60 * 1024;
const TARGETS = [
  path.join(ROOT, "carpet"),
  path.join(ROOT, "london-map.png"),
  path.join(ROOT, "tenancy", "carpet-cleaning.png"),
];

function collectPngs(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    return target.toLowerCase().endsWith(".png") ? [target] : [];
  }
  const out = [];
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const full = path.join(target, entry.name);
    if (entry.isDirectory()) out.push(...collectPngs(full));
    else if (entry.name.toLowerCase().endsWith(".png")) out.push(full);
  }
  return out;
}

async function toWebpUnderLimit(inputPath) {
  const outPath = inputPath.replace(/\.png$/i, ".webp");
  const meta = await sharp(inputPath).metadata();
  let width = meta.width || 1600;
  let quality = 72;

  for (let attempt = 0; attempt < 24; attempt++) {
    const buf = await sharp(inputPath)
      .rotate()
      .resize({
        width: Math.max(320, Math.round(width)),
        withoutEnlargement: true,
      })
      .webp({ quality: Math.max(28, Math.round(quality)), effort: 6 })
      .toBuffer();

    if (buf.length <= MAX_BYTES) {
      fs.writeFileSync(outPath, buf);
      return {
        outPath,
        bytes: buf.length,
        width: Math.round(width),
        quality: Math.round(quality),
      };
    }

    if (quality > 40) quality -= 6;
    else if (quality > 30) quality -= 3;
    else {
      width *= 0.85;
      quality = Math.max(30, quality);
    }
  }

  // Final fallback: aggressive downscale
  const buf = await sharp(inputPath)
    .rotate()
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 28, effort: 6 })
    .toBuffer();
  fs.writeFileSync(outPath, buf);
  return { outPath, bytes: buf.length, width: 480, quality: 28 };
}

const pngs = TARGETS.flatMap((t) => collectPngs(t));
const results = [];

for (const png of pngs) {
  const result = await toWebpUnderLimit(png);
  const kb = (result.bytes / 1024).toFixed(1);
  const ok = result.bytes <= MAX_BYTES ? "OK" : "OVER";
  console.log(
    `${ok} ${kb}KB q=${result.quality} w=${result.width} -> ${path.relative(process.cwd(), result.outPath)}`,
  );
  results.push(result);
}

const overs = results.filter((r) => r.bytes > MAX_BYTES);
console.log(`\nConverted ${results.length} images. Over limit: ${overs.length}`);
if (overs.length) process.exitCode = 1;
