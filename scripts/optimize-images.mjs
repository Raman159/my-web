import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F3F0E9"/>
  <rect x="0" y="0" width="18" height="630" fill="#315c8c"/>
  <text x="80" y="170" fill="#315c8c" font-family="Georgia, Times New Roman, serif" font-size="28" letter-spacing="6">KATHMANDU, NEPAL</text>
  <text x="80" y="280" fill="#1B2421" font-family="Georgia, Times New Roman, serif" font-size="72">Raman Maharjan</text>
  <text x="80" y="360" fill="#35473E" font-family="Arial, Helvetica, sans-serif" font-size="36">Frontend Developer &amp; UI Designer</text>
  <line x1="80" y1="410" x2="360" y2="410" stroke="#315c8c" stroke-width="4"/>
  <text x="80" y="480" fill="#686D64" font-family="Arial, Helvetica, sans-serif" font-size="28">Websites and digital products for startups, NGOs, and brands.</text>
  <text x="80" y="560" fill="#315c8c" font-family="Arial, Helvetica, sans-serif" font-size="24">www.ramanmaharjan5.com.np</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile("public/og-image.png");

const jobs = [
  ["public/profile/Raman.png", "public/profile/Raman.webp", 880],
  ["public/projects/eventraa.png", "public/projects/eventraa.webp", 1600],
  ["public/projects/heatha.png", "public/projects/heatha.webp", 1600],
  ["public/projects/jobs.png", "public/projects/jobs.webp", 1600],
  ["public/projects/onefork.png", "public/projects/onefork.webp", 1600],
  ["public/projects/nlhda.png", "public/projects/nlhda.webp", 1600],
  ["public/projects/tashya.png", "public/projects/tashya.webp", 1600],
];

for (const [input, output, width] of jobs) {
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(output);
}

await writeFile("scripts/.optimize-done", "ok");
console.log("Wrote public/og-image.png and WebP assets.");
