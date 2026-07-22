import fs from "node:fs";
import path from "node:path";

const dir = "src/components/carpet";

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (/\.(ts|tsx|css)$/.test(e.name)) {
      const t = fs.readFileSync(f, "utf8");
      const n = t
        .replace(/(\/images\/[^"'\)\s]+)\.png/g, "$1.webp")
        .replace(/(faq-[a-z0-9-]+)\.png/g, "$1.webp");
      if (n !== t) {
        fs.writeFileSync(f, n);
        console.log("updated", f);
      }
    }
  }
}

walk(dir);
