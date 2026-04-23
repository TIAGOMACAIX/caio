import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['plantio', 'cultivo', 'consumo', 'cultura', 'ciencia']),
    cover: z.string().optional(),
    author: z.string().default('Equipe Ervário'),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

const strains = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/strains' }),
  schema: z.object({
    name: z.string(),
    alias: z.array(z.string()).default([]),
    type: z.enum(['indica', 'sativa', 'hibrida']),
    dominance: z.string().optional(),
    genetics: z.object({
      parents: z.array(z.string()).default([]),
      origin: z.string().optional(),
      breeder: z.string().optional(),
    }),
    cannabinoids: z.object({
      thc: z.string().optional(),
      cbd: z.string().optional(),
      cbg: z.string().optional(),
    }),
    terpenes: z.array(z.string()).default([]),
    effects: z.array(z.string()).default([]),
    flavors: z.array(z.string()).default([]),
    aroma: z.array(z.string()).default([]),
    medicinal: z.array(z.string()).default([]),
    cultivation: z.object({
      difficulty: z.enum(['fácil', 'média', 'difícil']),
      flowering: z.string().optional(),
      yield: z.string().optional(),
      height: z.string().optional(),
      climate: z.string().optional(),
      indoor: z.boolean().default(true),
      outdoor: z.boolean().default(true),
    }),
    color: z.string().default('leaf'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, strains };
