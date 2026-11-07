import fs from 'node:fs/promises';
import sharp from 'sharp';
await fs.mkdir('public/social', { recursive: true });
for (const lang of ['tr', 'en']) {
  const subtitle =
    lang === 'tr'
      ? 'Yazılım &amp; Yapay Zekâ Çözümleri Uzmanı'
      : 'Software &amp; AI Solutions Specialist';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="g"><stop stop-color="#5653b8" stop-opacity=".5"/><stop offset="1" stop-color="#0b1020" stop-opacity="0"/></radialGradient><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#242d46" stroke-width="1"/></pattern></defs><rect width="1200" height="630" fill="#0b1020"/><rect width="1200" height="630" fill="url(#p)"/><ellipse cx="1000" cy="300" rx="450" ry="400" fill="url(#g)"/><text x="75" y="100" font-family="Arial,sans-serif" font-weight="bold" font-size="42" fill="#f8fafc">mfc<tspan fill="#67e8f9">.</tspan></text><text x="78" y="220" font-family="Arial,sans-serif" font-size="15" letter-spacing="4" fill="#67e8f9">SOFTWARE · AI · RESEARCH</text><text x="72" y="315" font-family="Arial,sans-serif" font-size="68" font-weight="bold" fill="#f8fafc">Muhammet Fatih</text><text x="72" y="397" font-family="Arial,sans-serif" font-size="76" font-weight="bold" fill="#b9b3ff">Çetintaş</text><text x="78" y="455" font-family="Arial,sans-serif" font-size="23" fill="#bec9df">${subtitle}</text><path d="M80 520H1120" stroke="#33405a"/><text x="80" y="562" font-family="Arial,sans-serif" font-size="16" fill="#a6b4d1">m-fatih-c.github.io</text><text x="1120" y="562" text-anchor="end" font-family="Arial,sans-serif" font-size="16" fill="#67e8f9">${lang.toUpperCase()} / PORTFOLIO</text><g fill="none" stroke="#b9b3ff" opacity=".7"><circle cx="1040" cy="300" r="80"/><circle cx="1040" cy="300" r="120" stroke-dasharray="3 8"/><path d="M980 265L1040 300L1100 255M1040 300L1060 365"/><circle cx="980" cy="265" r="7"/><circle cx="1040" cy="300" r="10"/><circle cx="1100" cy="255" r="7"/><circle cx="1060" cy="365" r="7"/></g></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/social/${lang}.png`);
}
console.log('Generated two 1200x630 Open Graph images.');
