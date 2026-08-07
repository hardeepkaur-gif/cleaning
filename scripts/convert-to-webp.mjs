import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const MAX_BYTES = 80 * 1024;
const EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function encodeUnderLimit(input, outPath) {
  const image = sharp(input, { failOn: "none" });
  const meta = await image.metadata();
  let width = meta.width || undefined;
  let quality = 80;

  for (let attempt = 0; attempt < 24; attempt++) {
    let pipeline = sharp(input, { failOn: "none" });
    if (width && meta.width && width < meta.width) {
      pipeline = pipeline.resize({
        width,
        withoutEnlargement: true,
      });
    }

    const buffer = await pipeline
      .webp({
        quality,
        alphaQuality: Math.min(quality + 5, 100),
        effort: 6,
      })
      .toBuffer();

    if (buffer.length <= MAX_BYTES) {
      await fs.writeFile(outPath, buffer);
      return { bytes: buffer.length, quality, width: width || meta.width };
    }

    if (quality > 40) {
      quality -= 8;
    } else if (quality > 20) {
      quality -= 5;
    } else if (width && width > 480) {
      width = Math.round(width * 0.85);
      quality = Math.min(quality + 10, 55);
    } else if (width && width > 320) {
      width = Math.round(width * 0.85);
      quality = 30;
    } else {
      await fs.writeFile(outPath, buffer);
      return { bytes: buffer.length, quality, width: width || meta.width, oversize: true };
    }
  }

  throw new Error(`Failed to convert ${input}`);
}

const files = (await walk(ROOT)).filter((file) =>
  EXTS.has(path.extname(file).toLowerCase()),
);

const results = [];
for (const file of files) {
  const outPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
  try {
    const info = await encodeUnderLimit(file, outPath);
    results.push({
      src: path.relative(ROOT, file),
      out: path.relative(ROOT, outPath),
      kb: +(info.bytes / 1024).toFixed(1),
      quality: info.quality,
      oversize: Boolean(info.oversize),
    });
    process.stdout.write(`OK  ${results.at(-1).src} -> ${results.at(-1).kb}KB q=${info.quality}\n`);
  } catch (error) {
    results.push({
      src: path.relative(ROOT, file),
      error: error.message,
    });
    process.stdout.write(`ERR ${path.relative(ROOT, file)}: ${error.message}\n`);
  }
}

const oversize = results.filter((r) => r.oversize);
const failed = results.filter((r) => r.error);
console.log(`\nConverted: ${results.length - failed.length}/${files.length}`);
console.log(`Still over 80KB: ${oversize.length}`);
console.log(`Failed: ${failed.length}`);
if (oversize.length) {
  console.log(oversize.map((r) => `${r.out} (${r.kb}KB)`).join("\n"));
}
