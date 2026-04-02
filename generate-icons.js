// Script para generar los iconos PNG de la PWA
// Ejecutar con: node generate-icons.cjs --convert

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

// Generar SVG del escudo
const shieldSVG = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0a1a12" rx="22"/>
  <path d="M50 8 L85 20 L85 55 Q85 78 50 92 Q15 78 15 55 L15 20 Z" fill="#1a3a2a" stroke="#c9a84c" stroke-width="2.5"/>
  <path d="M15 42 L85 42 L85 55 L15 55 Z" fill="#c9a84c" opacity="0.2"/>
  <g transform="translate(50,52)">
    <ellipse cx="0" cy="4" rx="14" ry="9" fill="#c9a84c" opacity="0.9"/>
    <ellipse cx="-7" cy="-2" rx="9" ry="7" fill="#c9a84c" opacity="0.9"/>
    <ellipse cx="-13" cy="-1" rx="3" ry="2.5" fill="#c9a84c"/>
    <circle cx="-9" cy="-4" r="1.2" fill="#0d2018"/>
    <rect x="-11" y="9" width="4" height="6" rx="2" fill="#c9a84c" opacity="0.85"/>
    <rect x="7" y="10" width="4" height="6" rx="2" fill="#c9a84c" opacity="0.85"/>
  </g>
  <text x="50" y="32" text-anchor="middle" fill="#c9a84c" font-size="9" font-weight="700" font-family="serif" letter-spacing="2">DELTA</text>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), shieldSVG(512));
console.log('SVG generado en public/icons/icon.svg');
console.log('');
console.log('Para convertir a PNG necesitas instalar sharp:');
console.log('  npm install sharp --save-dev');
console.log('  node generate-icons.js --convert');

if (process.argv.includes('--convert')) {
  try {
    const { default: sharp } = await import('sharp');
    const svgBuffer = Buffer.from(shieldSVG(512));
    Promise.all([
      sharp(svgBuffer).resize(192, 192).png().toFile(path.join(iconsDir, 'icon-192.png')),
      sharp(svgBuffer).resize(512, 512).png().toFile(path.join(iconsDir, 'icon-512.png')),
    ]).then(() => {
      console.log('✓ icon-192.png generado');
      console.log('✓ icon-512.png generado');
    }).catch(console.error);
  } catch(e) {
    console.error('sharp no instalado. Ejecuta: npm install sharp --save-dev');
  }
}
