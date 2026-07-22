import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const assets =
  "C:/Users/Hp/.cursor/projects/c-Cleaning-site/assets";
const dest = "public/images/domestic/faq";
const MAX = 50 * 1024;

fs.mkdirSync(dest, { recursive: true });

const pairs = [
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_2148521062-dc44977d-f940-4a00-a318-52e8eaaed69f.png",
    "faq-what-included.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_4284-574b8442-2ed3-4bfd-a7a5-8dad3d8c7d3c.png",
    "faq-3-hours.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_2149374472-c27cb36b-d7af-4e15-9d1a-9d803c477ab0.png",
    "faq-how-many-hours.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_152438-2684caaa-ed29-4c8b-b9c7-dd7a512b2137.png",
    "faq-domestic-vs-deep.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_8702-5887efc4-8407-431d-977a-ddcfcd9a5987.png",
    "faq-same-cleaner.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_2150454517-861e1892-96c3-43e5-a359-b008b644fc2e.png",
    "faq-dbs-checked.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_2149374442-b4e84c07-c275-48d8-ae9e-d432660bd68a.png",
    "faq-cleaning-products.webp",
  ],
  [
    "c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_04be653a649c1450aef046e4c46ce9ae_images_2150454569-21b6970c-1062-4603-b35c-8d9b5e163ebb.png",
    "faq-tidy-before.webp",
  ],
];

async function convert(srcName, outName) {
  const input = path.join(assets, srcName);
  const outPath = path.join(dest, outName);
  let width = 900;
  let quality = 70;

  for (let i = 0; i < 24; i++) {
    const buf = await sharp(input)
      .rotate()
      .resize({ width: Math.round(width), withoutEnlargement: true })
      .webp({ quality: Math.round(quality), effort: 6 })
      .toBuffer();

    if (buf.length <= MAX) {
      fs.writeFileSync(outPath, buf);
      console.log(
        `OK ${(buf.length / 1024).toFixed(1)}KB q=${Math.round(quality)} w=${Math.round(width)} -> ${outName}`,
      );
      return;
    }

    if (quality > 38) quality -= 5;
    else if (quality > 28) quality -= 2;
    else {
      width *= 0.85;
      quality = Math.max(28, quality);
    }
  }

  const buf = await sharp(input)
    .rotate()
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 28, effort: 6 })
    .toBuffer();
  fs.writeFileSync(outPath, buf);
  console.log(
    `${buf.length <= MAX ? "OK" : "OVER"} ${(buf.length / 1024).toFixed(1)}KB -> ${outName}`,
  );
}

for (const [src, out] of pairs) {
  await convert(src, out);
}
