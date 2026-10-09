import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { topicSlugs } from './lib/topics';

// Long-form writing. The file name is the URL slug: /posts/<file-name>.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      topic: z.enum(topicSlugs),
      // One-line dek under the title. Falls back to the first paragraph.
      summary: z.string().optional(),
      series: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Shown as a "7.5/10" badge, e.g. on food reviews.
      rating: z.number().min(0).max(10).optional(),
      // Optional art for the featured card and the top of the post.
      hero: image().optional(),
      heroAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Small plates: short posts with no title, just a date, any number of topics
// (shown as #hashtags) and a body. The `plate` script at the repo root writes these.
const plates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plates' }),
  schema: z.object({
    date: z.coerce.date(),
    topics: z.array(z.enum(topicSlugs)).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, plates };
