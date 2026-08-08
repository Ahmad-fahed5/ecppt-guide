import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { kbSectionSlugs } from './config/knowledgeBase';

const guide = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    section: z.enum([...kbSectionSlugs]),
    phase: z.number().int().min(0).default(0),
    order: z.number().default(0),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { guide };
