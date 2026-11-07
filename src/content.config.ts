import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const paragraphs = z.array(z.string().min(8)).min(1);
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      projectId: z.string().regex(/^[a-z0-9-]+$/),
      slug: z.string().regex(/^[a-z0-9-]+$/),
      lang: z.enum(['tr', 'en']),
      title: z.string(),
      summary: z.string().min(30),
      description: z.string().min(50),
      categories: z
        .array(
          z.enum([
            'software',
            'ai',
            'ml',
            'data',
            'vision',
            'mobile',
            'enterprise',
            'research',
            'competitions',
            'archive',
          ]),
        )
        .min(1),
      technologies: z.array(z.string()).min(1),
      year: z.number().int().nullable(),
      status: z.enum(['active', 'prototype', 'research', 'demo', 'completed', 'archive']),
      featured: z.boolean(),
      repositoryVisibility: z.enum(['public', 'private', 'none']),
      githubUrl: z.url().optional(),
      demoUrl: z.url().optional(),
      images: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string(),
            width: z.number().int().positive().default(1200),
            height: z.number().int().positive().default(800),
          }),
        )
        .default([]),
      implementation: z
        .array(z.object({ title: z.string().min(4), detail: z.string().min(60) }))
        .default([]),
      role: z.string().min(15),
      problem: z.string().min(30),
      solution: z.string().min(30),
      architecture: z.array(z.string()).min(2),
      features: paragraphs,
      technicalChallenges: paragraphs,
      decisions: paragraphs,
      testing: paragraphs,
      results: paragraphs,
      limitations: paragraphs,
      sourceReferences: z.array(z.object({ label: z.string(), url: z.url() })),
      confidentialityLevel: z.enum(['public', 'summary-only', 'self-reported']),
      sourceState: z.enum(['open-pr', 'self-reported']),
      order: z.number(),
      related: z.array(z.string()).default([]),
    })
    .superRefine((data, ctx) => {
      if (
        data.repositoryVisibility !== 'public' &&
        (data.githubUrl || data.sourceReferences.length)
      ) {
        ctx.addIssue({
          code: 'custom',
          message: 'Non-public projects cannot expose source links.',
        });
      }
    }),
});
export const collections = { projects };
