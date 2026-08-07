import fs from "node:fs";
import path from "node:path";

const textExts = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".mjs",
  ".json",
  ".md",
  ".html",
]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
      walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

const files = [...walk("src"), ...walk("scripts")].filter((file) =>
  textExts.has(path.extname(file).toLowerCase()),
);

let changedFiles = 0;
let replacements = 0;

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const next = raw.replace(
    /(\.?\.?\/?images\/[^\s"'`)},\]]+?)\.(png|jpe?g)/gi,
    (_, base) => {
      replacements += 1;
      return `${base}.webp`;
    },
  ).replace(
    /([`'"])([^`'"]*?\/)?([-\w]+)\.(png|jpe?g)\1/gi,
    (match, quote, dir = "", name) => {
      // Only rewrite image-looking paths / filenames used with image bases
      if (
        dir.includes("images/") ||
        dir.includes("images\\") ||
        /^(about-|banner-|main-|services-|why-|faq-|cta-|hero-|slide|pic|illustration|domestic-|tenancy-|prepare|deposit|london-map|logo|buble|page-header|privacy-|cost|covered|same-day|supplies|landlords|professional|duration|carpet|cleaning-method|two-hours|secondary|img-\d)/i.test(
          name,
        )
      ) {
        replacements += 1;
        return `${quote}${dir}${name}.webp${quote}`;
      }
      return match;
    },
  ).replace(
    /(\$\{[^}]+\}\/)([-\w]+)\.(png|jpe?g)/gi,
    (_, prefix, name) => {
      replacements += 1;
      return `${prefix}${name}.webp`;
    },
  );

  if (next !== raw) {
    fs.writeFileSync(file, next);
    changedFiles += 1;
    console.log(`updated ${file}`);
  }
}

console.log(JSON.stringify({ changedFiles, replacements }, null, 2));
