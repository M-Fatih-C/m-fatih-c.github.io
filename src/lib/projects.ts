import { getCollection } from 'astro:content';
import type { Lang } from './i18n';
export async function getProjects(lang: Lang) {
  return (await getCollection('projects', ({ data }) => data.lang === lang)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
export type Project = Awaited<ReturnType<typeof getProjects>>[number];
