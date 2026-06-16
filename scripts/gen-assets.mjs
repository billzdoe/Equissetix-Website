// Generates raster brand assets from inline SVG using @resvg/resvg-js.
// Outputs to public/: og-image.jpg (1200x630), logo.png (512x512),
// apple-touch-icon.png (180x180), favicon-32.png / favicon-16.png.
// Run: node scripts/gen-assets.mjs  (wired into package.json build)
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const GREEN = '#0F5132';
const GREEN_LT = '#166534';
const GOLD = '#F59E0B';

// Square brand mark: rounded green tile, white "E", gold underline.
const markSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="${GREEN}"/><stop offset="100%" stop-color="${GREEN_LT}"/>
  </linearGradient></defs>
  <rect width="64" height="64" rx="12" fill="url(#g)"/>
  <text x="32" y="33" font-family="Outfit,Inter,system-ui,sans-serif" font-size="40" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">E</text>
  <rect x="14" y="48" width="36" height="4" rx="2" fill="${GOLD}"/>
</svg>`;

// 1200x630 social card.
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0F5132"/><stop offset="100%" stop-color="#052e16"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="${GOLD}"/>
  <g transform="translate(90,170)">
    <rect width="120" height="120" rx="22" fill="#ffffff"/>
    <text x="60" y="62" font-family="Outfit,Inter,system-ui,sans-serif" font-size="76" font-weight="700" fill="${GREEN}" text-anchor="middle" dominant-baseline="central">E</text>
  </g>
  <text x="240" y="245" font-family="Outfit,Inter,system-ui,sans-serif" font-size="84" font-weight="700" fill="#ffffff">Equissetix</text>
  <text x="92" y="380" font-family="Outfit,Inter,system-ui,sans-serif" font-size="46" font-weight="600" fill="#F59E0B">Advanced Equine Training Platform</text>
  <text x="92" y="450" font-family="Inter,system-ui,sans-serif" font-size="32" font-weight="400" fill="#dcfce7">AI-powered insights, health monitoring &amp; performance analytics.</text>
  <text x="92" y="500" font-family="Inter,system-ui,sans-serif" font-size="32" font-weight="400" fill="#dcfce7">Powering TrainingTree Pro.</text>
  <text x="92" y="575" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="500" fill="#86efac">equissetix.com</text>
</svg>`;

function renderPng(svg, width) {
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: width } });
  return r.render().asPng();
}

const targets = [
  ['favicon-16.png', markSvg(64), 16],
  ['favicon-32.png', markSvg(64), 32],
  ['apple-touch-icon.png', markSvg(64), 180],
  ['logo.png', markSvg(64), 512],
  ['og-image.png', ogSvg, 1200],
];

for (const [name, svg, width] of targets) {
  writeFileSync(join(PUBLIC, name), renderPng(svg, width));
  console.log(`wrote public/${name} (${width}px wide)`);
}

console.log('Brand assets generated.');
