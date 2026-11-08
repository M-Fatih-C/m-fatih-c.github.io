import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';
import { labels, categories, statuses } from '../src/lib/i18n.ts';

for (const dictionary of [labels, ...Object.values(categories), ...Object.values(statuses)]) {
  if ('tr' in dictionary && typeof dictionary.tr === 'object') {
    assert.deepEqual(Object.keys(dictionary.tr).sort(), Object.keys(dictionary.en).sort());
  } else {
    assert.ok(dictionary.tr && dictionary.en, 'Missing interface translation');
  }
}

const root = 'src/content/projects';
const entries = [];
for (const lang of ['tr', 'en'])
  for (const name of fs.readdirSync(path.join(root, lang))) {
    if (!name.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(root, lang, name), 'utf8');
    const data = parse(text.split('---')[1]);
    assert.equal(data.lang, lang);
    assert.equal(name, data.projectId + '.md');
    entries.push(data);
  }
const groups = Map.groupBy(entries, (p) => p.projectId);
const baseline = JSON.parse(fs.readFileSync('src/data/repository-inventory.json', 'utf8'));
assert.equal(entries.length, groups.size * 2, 'Every project needs two translations');
for (const item of baseline) {
  assert.ok(groups.has(item.projectId), `Missing original repository case: ${item.projectId}`);
  assert.ok(
    groups.get(item.projectId).every((p) => p.repositoryVisibility === item.repositoryVisibility),
  );
}
const fields = [
  'title',
  'summary',
  'description',
  'role',
  'problem',
  'solution',
  'architecture',
  'features',
  'technicalChallenges',
  'decisions',
  'testing',
  'results',
  'limitations',
];
for (const [id, versions] of groups) {
  assert.deepEqual(versions.map((p) => p.lang).sort(), ['en', 'tr'], id);
  const [a, b] = versions;
  assert.equal(
    a.implementation?.length ?? 0,
    b.implementation?.length ?? 0,
    `${id}: mismatched implementation translations`,
  );
  for (const field of fields)
    for (const p of versions) {
      assert.ok(p[field]?.length, `${id} / ${p.lang}: missing ${field}`);
      if (Array.isArray(p[field]))
        assert.ok(
          p[field].every((v) => typeof v === 'string' && v.trim().length > 0),
          `${id}: blank bullet`,
        );
    }
  for (const field of [
    'slug',
    'categories',
    'technologies',
    'status',
    'presentation',
    'repositoryVisibility',
    'related',
  ])
    assert.deepEqual(a[field], b[field], `${id}: mismatched ${field}`);
  for (const p of versions) {
    for (const related of p.related)
      assert.ok(groups.has(related), `${id}: missing related ${related}`);
    if (p.repositoryVisibility !== 'public') {
      assert.ok(!p.githubUrl, `${id}: private code link`);
      assert.equal(p.sourceReferences.length, 0, `${id}: non-public source reference`);
    }
    for (const image of p.images) {
      assert.ok(image.alt && image.caption);
      assert.ok(fs.existsSync(path.join('public', image.src)));
    }
  }
}
console.log(
  `Content PASS: ${groups.size} project pairs; all ${baseline.length} original repositories represented. No missing fields or translations.`,
);
