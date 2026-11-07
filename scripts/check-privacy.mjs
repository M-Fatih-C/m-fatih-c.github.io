import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const projectFiles = walk('src/content/projects').filter((f) => f.endsWith('.md'));
const publicRepos = new Set(
  projectFiles
    .map((file) => parse(fs.readFileSync(file, 'utf8').split('---')[1]))
    .filter((p) => p.repositoryVisibility === 'public' && p.githubUrl)
    .map((p) => new URL(p.githubUrl).pathname.split('/')[2].toLowerCase()),
);
const files = [...walk('src'), ...walk('public'), ...walk('dist')].filter((f) =>
  /\.(?:md|json|html|js|ts|astro|txt|svg|css|xml)$/.test(f),
);
const failures = [];
const rules = [
  ['local workstation path', /\/(?:Users|private\/tmp)\//],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  [
    'credential assignment',
    /(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[:=]\s*["'][A-Za-z0-9_-]{20,}/i,
  ],
  [
    'private network address',
    /\b(?:10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(?:1[6-9]|2\d|3[01])\.\d+\.\d+)\b/,
  ],
];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const [label, pattern] of rules) if (pattern.test(text)) failures.push(`${file}: ${label}`);
  for (const match of text.matchAll(/github\.com\/M-Fatih-C\/([^/\s"'?#<>]+)/gi)) {
    if (!publicRepos.has(match[1].toLowerCase()))
      failures.push(`${file}: repository link outside the public inventory`);
  }
}
for (const file of walk('public'))
  if (/\.(?:csv|ipynb|db|sqlite|xlsx|zip|log)$/i.test(file))
    failures.push(`${file}: data file must not be published`);
assert.deepEqual(failures, [], failures.join('\n'));
console.log(
  `Privacy PASS: ${files.length} source/output text files checked; repository links stay within the public inventory. No workstation paths, credential patterns, private keys, private IPs or disallowed data files detected. Pattern checks are not a full security certification.`,
);
