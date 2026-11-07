import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const files = walk('dist').filter((p) => p.endsWith('.html'));
const failures = [];
let checked = 0;
const ids = new Map(
  files.map((file) => [
    file,
    new Set([...fs.readFileSync(file, 'utf8').matchAll(/\bid="([^"]+)"/g)].map((m) => m[1])),
  ]),
);
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|data:|tel:)/.test(raw)) continue;
    const from = 'https://local.test/' + path.relative('dist', file).replace(/index\.html$/, '');
    const url = new URL(raw, from);
    let dest = path.join('dist', decodeURIComponent(url.pathname));
    if (dest.endsWith(path.sep) || (fs.existsSync(dest) && fs.statSync(dest).isDirectory()))
      dest = path.join(dest, 'index.html');
    checked++;
    if (!fs.existsSync(dest)) failures.push(`${file}: missing ${raw}`);
    else if (
      url.hash &&
      dest.endsWith('.html') &&
      !ids.get(dest)?.has(decodeURIComponent(url.hash.slice(1)))
    )
      failures.push(`${file}: missing anchor ${raw}`);
  }
  if (!/lang="(tr|en)"/.test(html)) failures.push(`${file}: language missing`);
  if (file.includes('/tr/') || file.includes('/en/')) {
    if (!html.includes('hreflang="tr"') || !html.includes('hreflang="en"'))
      failures.push(`${file}: hreflang missing`);
    if (!html.includes('rel="canonical"')) failures.push(`${file}: canonical missing`);
  }
}
assert.deepEqual(failures, [], failures.join('\n'));
console.log(
  `Links PASS: ${checked} local references across ${files.length} HTML pages, including assets, anchors and locale metadata.`,
);
