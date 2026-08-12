/**
 * Content Collections Configuration
 * The Coherence Project - architecture/10_Content_Model.md
 *
 * Uses Astro 5 Content Layer API with glob() loader to read Markdown
 * files from content/ at the repository root, keeping that directory
 * fully independent from the Astro source layer in src/.
 *
 * One logical `content` collection spans all content types and both
 * languages. Language and type are defined by canonical frontmatter.
 *
 * README.md placeholder files in each content directory are excluded
 * via the README.md negation pattern.
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// -------------------------------------------------------------
// Canonical Frontmatter Schema
// Source: architecture/10_Content_Model.md - Field Definitions
// -------------------------------------------------------------
const contentSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  author: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  language: z.enum(['en', 'pt']),
  type: z.enum(['essay', 'article', 'journal', 'research', 'page']),
  tags: z.array(z.string()),
  status: z.enum(['draft', 'published', 'archived']),
  translationId: z.string().optional(),
  featured: z.boolean().optional().default(false),
  series: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
});

/** Glob pattern: all Markdown files, excluding README.md placeholders */
const MD_PATTERN = ['**/*.md', '!**/README.md'];

// -------------------------------------------------------------
// Collection
// Physical organization remains content/<language>/<type>/.
// Public URL mapping is defined in architecture/11_URL_and_Routing_Strategy.md.
// -------------------------------------------------------------
export const collections = {
  content: defineCollection({
    loader: glob({ pattern: MD_PATTERN, base: './content' }),
    schema: contentSchema,
  }),
};
