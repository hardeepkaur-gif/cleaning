import fs from "fs";
import path from "path";

/** old relative path (from public/images/) -> new relative path */
export const RENAME_MAP = {
  // about/cleanon — referenced
  "about/cleanon/about-three-img-1.webp":
    "about/cleanon/professional-cleaners-london-office.webp",
  "about/cleanon/about-three-img-2.webp":
    "about/cleanon/cleaning-team-preparing-equipment-london.webp",
  "about/cleanon/about-three-cleaning-gurante-bg-shape.webp":
    "about/cleanon/decorative-satisfaction-guarantee-badge-bg.webp",
  "about/cleanon/about-three-cleaning-gurante-icon.webp":
    "about/cleanon/satisfaction-guarantee-badge-icon.webp",
  // about/cleanon — unreferenced orphans
  "about/cleanon/about-three-author-img-1.webp":
    "about/cleanon/unused-about-author-profile.webp",
  "about/cleanon/about-three-author-sign.webp":
    "about/cleanon/unused-about-author-signature.webp",
  "about/cleanon/about-three-review-img-1-1.webp":
    "about/cleanon/unused-customer-review-avatar-1.webp",
  "about/cleanon/about-three-review-img-1-2.webp":
    "about/cleanon/unused-customer-review-avatar-2.webp",
  "about/cleanon/about-three-review-img-1-3.webp":
    "about/cleanon/unused-customer-review-avatar-3.webp",
  "about/cleanon/about-three-review-img-1-4.webp":
    "about/cleanon/unused-customer-review-avatar-4.webp",

  // why/cleanon
  "why/cleanon/why-choose-one-img-1.webp":
    "why/cleanon/professional-house-cleaning-london-kitchen.webp",
  "why/cleanon/why-choose-one-img-2.webp":
    "why/cleanon/cleaner-wiping-kitchen-worktops-london.webp",
  "why/cleanon/why-choose-one-img-3.webp":
    "why/cleanon/cleaner-vacuuming-living-room-london.webp",
  "why/cleanon/why-choose-one-img-4.webp":
    "why/cleanon/cleaner-sanitising-bathroom-london.webp",
  "why/cleanon/why-choose-one-right-shape-1.webp":
    "why/cleanon/decorative-professional-clean-section-bg.webp",
  "why/cleanon/why-choose-one-img-shape-1.webp":
    "why/cleanon/decorative-cleaning-accent-shape-1.webp",
  "why/cleanon/why-choose-one-img-shape-2.webp":
    "why/cleanon/decorative-cleaning-accent-shape-2.webp",
  "why/cleanon/why-choose-one-img-shape-3.webp":
    "why/cleanon/decorative-cleaning-accent-shape-3.webp",
  "why/cleanon/why-choose-one-img-shape-4.webp":
    "why/cleanon/decorative-cleaning-accent-shape-4.webp",
  "why/cleanon/why-choose-one-client-img.webp":
    "why/cleanon/unused-happy-client-photo.webp",

  // services
  "services/cleanon/services-2-1.webp":
    "services/cleanon/domestic-cleaning-service-card.webp",
  "services/cleanon/services-2-2.webp":
    "services/cleanon/carpet-cleaning-service-card.webp",
  "services/cleanon/services-2-3.webp":
    "services/cleanon/end-of-tenancy-cleaning-service-card.webp",
  "services/cleanon/services-2-4.webp":
    "services/cleanon/gutter-cleaning-service-card.webp",
  "services/cleanon-tabs/services-three-tab-img-1.webp":
    "services/cleanon-tabs/domestic-cleaning-tab-london-home.webp",
  "services/cleanon-tabs/services-three-tab-img-2.webp":
    "services/cleanon-tabs/carpet-cleaning-tab-stain-removal.webp",
  "services/cleanon-tabs/services-three-tab-img-3.webp":
    "services/cleanon-tabs/end-of-tenancy-cleaning-tab-rental.webp",
  "services/cleanon-tabs/services-three-tab-img-4.webp":
    "services/cleanon-tabs/gutter-cleaning-tab-residential.webp",
  "services/cleanon-tabs/services-three-shape-1.webp":
    "services/cleanon-tabs/decorative-services-tab-accent-primary.webp",
  "services/cleanon-tabs/services-three-shape-2.webp":
    "services/cleanon-tabs/decorative-services-tab-accent-secondary.webp",
  "services/cleanon-tabs/services-three-tab-left-bg-shape.webp":
    "services/cleanon-tabs/decorative-services-tab-panel-bg.webp",

  // hero clean360
  "hero/clean360/slide1.webp":
    "hero/clean360/end-of-tenancy-cleaning-hero-london.webp",
  "hero/clean360/pic1.webp": "hero/clean360/unused-tenancy-hero-alt.webp",

  // hero coreclean
  "hero/coreclean/main-slider-two-1-1.webp":
    "hero/coreclean/hero-coreclean-main-cleaner.webp",
  "hero/coreclean/main-slider-two-1-2.webp":
    "hero/coreclean/unused-hero-coreclean-cleaner-2.webp",
  "hero/coreclean/main-slider-two-1-3.webp":
    "hero/coreclean/unused-hero-coreclean-cleaner-3.webp",
  "hero/coreclean/main-slider-two-bg-shape-1.webp":
    "hero/coreclean/decorative-hero-coreclean-bg-primary.webp",
  "hero/coreclean/main-slider-two-bg-shape-2.webp":
    "hero/coreclean/decorative-hero-coreclean-bg-secondary.webp",
  "hero/coreclean/main-slider-two-shape-1.webp":
    "hero/coreclean/decorative-hero-coreclean-accent-1.webp",
  "hero/coreclean/main-slider-two-shape-2.webp":
    "hero/coreclean/decorative-hero-coreclean-accent-2.webp",
  "hero/coreclean/main-slider-two-shape-3.webp":
    "hero/coreclean/decorative-hero-coreclean-accent-3.webp",
  "hero/coreclean/main-slider-two-shape-4.webp":
    "hero/coreclean/decorative-hero-coreclean-accent-4.webp",
  "hero/coreclean/main-slider-two-shape-5.webp":
    "hero/coreclean/decorative-hero-coreclean-accent-5.webp",

  // hero cleanon
  "hero/cleanon/slider-1-1.webp":
    "hero/cleanon/hero-cleanon-slider-background.webp",
  "hero/cleanon/main-slider-img-1-1.webp":
    "hero/cleanon/hero-cleanon-cleaning-team.webp",
  "hero/cleanon/main-slider-img-shape-1.webp":
    "hero/cleanon/decorative-hero-cleanon-accent.webp",
  "hero/cleanon/main-slider-review-1-1.webp":
    "hero/cleanon/unused-hero-cleanon-review-avatar-1.webp",
  "hero/cleanon/main-slider-review-1-2.webp":
    "hero/cleanon/unused-hero-cleanon-review-avatar-2.webp",
  "hero/cleanon/main-slider-review-1-3.webp":
    "hero/cleanon/unused-hero-cleanon-review-avatar-3.webp",

  // hero cleanon-home3
  "hero/cleanon-home3/banner-one-img-1.webp":
    "hero/cleanon-home3/hero-home3-cleaning-team-london.webp",
  "hero/cleanon-home3/banner-one-shape-1.webp":
    "hero/cleanon-home3/decorative-hero-home3-accent-1.webp",
  "hero/cleanon-home3/banner-one-shape-2.webp":
    "hero/cleanon-home3/decorative-hero-home3-accent-2.webp",
  "hero/cleanon-home3/banner-one-shape-3.webp":
    "hero/cleanon-home3/decorative-hero-home3-accent-3.webp",
  "hero/cleanon-home3/banner-one-shape-4.webp":
    "hero/cleanon-home3/decorative-hero-home3-accent-4.webp",
  "hero/cleanon-home3/banner-one-shape-5.webp":
    "hero/cleanon-home3/decorative-hero-home3-accent-5.webp",
  "hero/cleanon-home3/banner-one-shape-bg.webp":
    "hero/cleanon-home3/decorative-hero-home3-bg-primary.webp",
  "hero/cleanon-home3/banner-one-shape-bg-2.webp":
    "hero/cleanon-home3/decorative-hero-home3-bg-secondary.webp",
  "hero/cleanon-home3/banner-one-review-img-1.webp":
    "hero/cleanon-home3/unused-hero-home3-review-avatar-1.webp",
  "hero/cleanon-home3/banner-one-review-img-2.webp":
    "hero/cleanon-home3/unused-hero-home3-review-avatar-2.webp",
  "hero/cleanon-home3/banner-one-review-img-3.webp":
    "hero/cleanon-home3/unused-hero-home3-review-avatar-3.webp",

  // hero cleanu-six — unreferenced theme spares
  "hero/cleanu-six/1.webp": "hero/cleanu-six/unused-theme-spare-01.webp",
  "hero/cleanu-six/2.webp": "hero/cleanu-six/unused-theme-spare-02.webp",
  "hero/cleanu-six/3.webp": "hero/cleanu-six/unused-theme-spare-03.webp",
  "hero/cleanu-six/4.webp": "hero/cleanu-six/unused-theme-spare-04.webp",
  "hero/cleanu-six/5.webp": "hero/cleanu-six/unused-theme-spare-05.webp",
  "hero/cleanu-six/6.webp": "hero/cleanu-six/unused-theme-spare-06.webp",
  "hero/cleanu-six/8.webp": "hero/cleanu-six/unused-theme-spare-08.webp",
  "hero/cleanu-six/10.webp": "hero/cleanu-six/unused-theme-spare-10.webp",
  "hero/cleanu-six/11.webp": "hero/cleanu-six/unused-theme-spare-11.webp",
  "hero/cleanu-six/12.webp": "hero/cleanu-six/unused-theme-spare-12.webp",
  "hero/cleanu-six/14.webp": "hero/cleanu-six/unused-theme-spare-14.webp",
  "hero/cleanu-six/15.webp": "hero/cleanu-six/unused-theme-spare-15.webp",
  "hero/cleanu-six/17.webp": "hero/cleanu-six/unused-theme-spare-17.webp",
  "hero/cleanu-six/18.webp": "hero/cleanu-six/unused-theme-spare-18.webp",
  "hero/cleanu-six/20.webp": "hero/cleanu-six/unused-theme-spare-20.webp",
  "hero/cleanu-six/illustration-1.webp":
    "hero/cleanu-six/unused-theme-illustration-1.webp",
  "hero/cleanu-six/illustration-2.webp":
    "hero/cleanu-six/unused-theme-illustration-2.webp",
  "hero/cleanu-six/illustration-4.webp":
    "hero/cleanu-six/unused-theme-illustration-4.webp",
  "hero/cleanu-six/illustration-6.webp":
    "hero/cleanu-six/unused-theme-illustration-6.webp",
  "hero/cleanu-six/illustration-7.webp":
    "hero/cleanu-six/unused-theme-illustration-7.webp",
  "hero/cleanu-six/illustration-9.webp":
    "hero/cleanu-six/unused-theme-illustration-9.webp",
  "hero/cleanu-six/illustration-10.webp":
    "hero/cleanu-six/unused-theme-illustration-10.webp",
  "hero/cleanu-six/illustration-11.webp":
    "hero/cleanu-six/unused-theme-illustration-11.webp",

  // faq tidytouch
  "faq/tidytouch/faq-bg-1.webp":
    "faq/tidytouch/decorative-tenancy-included-section-bg.webp",
  "faq/tidytouch/faq-bg-shape-1-1.webp":
    "faq/tidytouch/decorative-tenancy-included-section-shape.webp",
  "faq/tidytouch/faq-shape-1-1.webp":
    "faq/tidytouch/decorative-tenancy-included-accent.webp",
  "faq/tidytouch/sec-title-shape-1-1.webp":
    "faq/tidytouch/unused-decorative-section-title-accent.webp",

  // cta
  "cta/cleanon/cta-one-img-1.webp":
    "cta/cleanon/cta-professional-cleaner-london.webp",
  "cta/cleanon/cta-one-shape-3.webp":
    "cta/cleanon/unused-decorative-cta-accent-shape.webp",
  "cta/cleanon/cta-one-shape-bg.webp":
    "cta/cleanon/unused-decorative-cta-background-shape.webp",

  // carpet included
  "carpet/carpet-included-1.webp":
    "carpet/carpet-cleaning-included-main-london.webp",
  "carpet/carpet-included-2.webp":
    "carpet/carpet-inspection-pre-treatment-london.webp",
  "carpet/carpet-included-3.webp":
    "carpet/deep-steam-carpet-cleaning-london.webp",
  "carpet/carpet-included-4.webp":
    "carpet/carpet-aftercare-advice-london.webp",

  // gutter included
  "gutter/gutter-included-1.webp":
    "gutter/unused-gutter-cleaning-included-support.webp",
  "gutter/gutter-included-2.webp":
    "gutter/gutter-blocked-warning-signs-london.webp",
  "gutter/gutter-included-3.webp":
    "gutter/gutter-cleaning-coverage-london.webp",
  "gutter/gutter-included-4.webp":
    "gutter/gutter-cleaning-booking-cta-bg.webp",

  // tenancy prepare & deposit
  "tenancy/prepare/main.webp":
    "tenancy/prepare/tenancy-prepare-rental-property-london.webp",
  "tenancy/prepare/img-2.webp":
    "tenancy/prepare/tenant-removing-belongings-tenancy-clean.webp",
  "tenancy/prepare/img-3.webp":
    "tenancy/prepare/empty-kitchen-cupboards-tenancy-prep.webp",
  "tenancy/prepare/img-4.webp":
    "tenancy/prepare/rental-hallway-ready-tenancy-clean.webp",
  "tenancy/deposit/main.webp":
    "tenancy/deposit/tenancy-deposit-cleaning-protection-london.webp",
  "tenancy/deposit/secondary.webp":
    "tenancy/deposit/tenancy-deposit-cleaning-team-london.webp",
};

const IMAGE_ROOT = path.join("public", "images");

function scanDir(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanDir(full, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
  }
  return out;
}

/** Template-literal patterns that full-path replace won't catch */
const TEMPLATE_REPLACEMENTS = [
  [
    "${prepareImgBase}/main.webp",
    "${prepareImgBase}/tenancy-prepare-rental-property-london.webp",
  ],
  [
    "${prepareImgBase}/img-2.webp",
    "${prepareImgBase}/tenant-removing-belongings-tenancy-clean.webp",
  ],
  [
    "${prepareImgBase}/img-3.webp",
    "${prepareImgBase}/empty-kitchen-cupboards-tenancy-prep.webp",
  ],
  [
    "${prepareImgBase}/img-4.webp",
    "${prepareImgBase}/rental-hallway-ready-tenancy-clean.webp",
  ],
  [
    "${depositImgBase}/main.webp",
    "${depositImgBase}/tenancy-deposit-cleaning-protection-london.webp",
  ],
  [
    "${depositImgBase}/secondary.webp",
    "${depositImgBase}/tenancy-deposit-cleaning-team-london.webp",
  ],
];

function replaceInCodebase(pairs) {
  const codeFiles = [
    ...scanDir("src", [".ts", ".tsx", ".css", ".js", ".jsx", ".json", ".md"]),
    ...scanDir("public", [".html", ".xml", ".css", ".js"]),
    ...scanDir("css", [".css"]),
    ...scanDir("js", [".js"]),
  ].filter((f) => !f.includes("node_modules") && !f.includes(`${path.sep}scripts${path.sep}`));

  const sorted = [...pairs].sort(
    (a, b) => b.oldPath.length - a.oldPath.length,
  );

  const basenameCounts = {};
  for (const p of sorted) {
    basenameCounts[p.oldName] = (basenameCounts[p.oldName] || 0) + 1;
  }

  let totalReplacements = 0;
  for (const file of codeFiles) {
    let content = fs.readFileSync(file, "utf8");
    const original = content;

    for (const { oldPath, newPath, oldRel, newRel, oldName, newName } of sorted) {
      content = content.split(oldPath).join(newPath);
      content = content.split(oldRel).join(newRel);
      if (basenameCounts[oldName] === 1) {
        content = content.split(oldName).join(newName);
      }
    }

    for (const [from, to] of TEMPLATE_REPLACEMENTS) {
      content = content.split(from).join(to);
    }

    if (content !== original) {
      fs.writeFileSync(file, content, "utf8");
      totalReplacements++;
    }
  }
  return totalReplacements;
}

function main() {
  const pairs = Object.entries(RENAME_MAP).map(([oldRel, newRel]) => ({
    oldRel,
    newRel,
    oldPath: `/images/${oldRel.replace(/\\/g, "/")}`,
    newPath: `/images/${newRel.replace(/\\/g, "/")}`,
    oldName: path.basename(oldRel),
    newName: path.basename(newRel),
    oldFull: path.join(IMAGE_ROOT, oldRel),
    newFull: path.join(IMAGE_ROOT, newRel),
  }));

  // rename files (deepest paths first if needed — flat map, order doesn't matter)
  for (const p of pairs) {
    if (!fs.existsSync(p.oldFull)) {
      console.warn("MISSING:", p.oldRel);
      continue;
    }
    fs.mkdirSync(path.dirname(p.newFull), { recursive: true });
    if (fs.existsSync(p.newFull)) {
      throw new Error(`Target already exists: ${p.newRel}`);
    }
    fs.renameSync(p.oldFull, p.newFull);
    console.log("RENAMED:", p.oldRel, "->", p.newRel);
  }

  const updatedFiles = replaceInCodebase(pairs);
  console.log("\nUpdated", updatedFiles, "code files");

  const basenameCounts = {};
  for (const p of pairs) {
    basenameCounts[p.oldName] = (basenameCounts[p.oldName] || 0) + 1;
  }

  // verify no old paths remain
  const leftovers = [];
  const codeFiles = [
    ...scanDir("src", [".ts", ".tsx", ".css", ".js", ".jsx", ".json", ".md"]),
    ...scanDir("public", [".html", ".xml", ".css", ".js"]),
    ...scanDir("css", [".css"]),
    ...scanDir("js", [".js"]),
  ].filter((f) => !f.includes("node_modules") && !f.includes(`${path.sep}scripts${path.sep}`));
  for (const p of pairs) {
    for (const file of codeFiles) {
      const content = fs.readFileSync(file, "utf8");
      if (content.includes(p.oldPath) || content.includes(p.oldRel)) {
        leftovers.push({ file, old: p.oldRel });
      } else if (
        basenameCounts[p.oldName] === 1 &&
        content.includes(p.oldName)
      ) {
        leftovers.push({ file, old: p.oldName });
      }
    }
  }
  if (leftovers.length) {
    console.error("\nLEFTOVER REFERENCES:");
    for (const l of leftovers) console.error(l.file, l.old);
    process.exit(1);
  }
  console.log("\nNo leftover references to old filenames.");
}

main();
