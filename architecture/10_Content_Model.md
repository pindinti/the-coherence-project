# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Content Model |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-24 |

---

# Content Model

## Purpose

This document defines the canonical content model for The Coherence Project.

Its objective is to establish a uniform, strongly typed data structure for all content (essays, articles, journal entries, research notes and pages) across both supported languages (English and Portuguese).

This model forms the contract between Markdown content files in `content/` and the application layer in `src/`.

---

## Editorial Assets

Editorial assets such as diagrams, illustrations, figures and images are stored in the public assets layer under `public/images/`.

Each content item receives a dedicated folder whose name matches the content slug exactly. For example:

- `public/images/essays/organizational-coherence/`
- `public/images/essays/coerencia-organizacional/`

Shared assets that are used across multiple content items or languages belong in `public/images/shared/`.

Asset file names should be descriptive and use `kebab-case`. Prefer SVG for diagrams and informational illustrations, and reserve PNG only for images that require raster fidelity.

In Markdown, assets are referenced from the public path. Example:

```markdown
![Figure 1: Coherence model](/images/essays/organizational-coherence/coherence-model.svg)
```

When the same image is identical across languages, prefer a single shared asset in `public/images/shared/` instead of duplicating it in parallel content folders.

Optional editorial images for external Articles are stored locally under `public/images/articles/<publication-or-context>/`, for example `/images/articles/sebrae/article-image.jpg`. They represent the external publication context; they must not be fetched dynamically or inferred from external Open Graph metadata.

---

# Directory Structure

Content is organized by language code (`en`, `pt`) and content type using uniform English directory names across all languages.

```text
content/
├── en/
│   ├── essays/
│   ├── articles/
│   ├── journal/
│   ├── research/
│   └── pages/
│
└── pt/
    ├── essays/
    ├── articles/
    ├── journal/
    ├── research/
    └── pages/
```

Using uniform directory names simplifies Astro Content Collections definitions and programmatic routing, while localized presentation URLs can be specified via slugs or frontmatter.

---

# Canonical Frontmatter Schema

Every Markdown file in `content/` must include structured YAML frontmatter following this canonical specification:

```yaml
---
title: "The Nature of Organizational Coherence"
subtitle: "Aligning Strategic Promises with Operational Capabilities"
description: "An exploration of why organizations fail to deliver on market promises and how coherence bridges the gap."
author: "Paulo Eduardo Pereira"
date: 2026-08-03
updatedDate: 2026-08-03
language: "en"
type: "essay"
tags: ["coherence", "strategy", "capability"]
status: "published"
translationId: "essay-01-organizational-coherence"
featured: true
series: "Foundations of Coherence"
canonicalUrl: "https://paulopereira.net.br/en/essays/nature-of-organizational-coherence"
---
```

---

# Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | **Yes** | Primary document title. |
| `subtitle` | String | No | Secondary title providing additional context. |
| `description` | String | **Yes** | Concise summary used in content previews, cards, and SEO meta tags. |
| `author` | String | **Yes** | Author name. Must be explicitly specified. |
| `date` | Date (`YYYY-MM-DD`) | **Yes** | Initial publication or creation date. |
| `updatedDate` | Date (`YYYY-MM-DD`) | No | Date of the latest significant revision. |
| `language` | Enum (`en`, `pt`) | **Yes** | Document language. |
| `type` | Enum (`essay`, `article`, `journal`, `research`, `page`) | **Yes** | Knowledge domain as defined in `02_Information_Architecture.md`. |
| `tags` | Array of Strings | **Yes** | Descriptive tags for filtering and discovery. |
| `status` | Enum (`draft`, `published`, `archived`) | **Yes** | Publication state. |
| `translationId` | String | No | Unique identifier linking equivalent English and Portuguese versions. |
| `featured` | Boolean | No | Indicates if the content should be highlighted in hero sections or home page. |
| `series` | String | No | Name of the thematic series to which the document belongs. |
| `canonicalUrl` | String | No | Explicit canonical URL override. If omitted, the application derives the canonical URL from `11_URL_and_Routing_Strategy.md`. Project-hosted URLs must follow that document's language-prefix rules. |
| `publicationMode` | Enum (`internal`, `external`) | No; Articles only | Article delivery mode. Omitted article values default to `internal`. Not applicable to other content types. |
| `externalUrl` | URL | Conditional; external Articles only | Original-publication URL to which readers are sent. |
| `externalPublication` | String | No; external Articles only | Identifies the original publication, for example `Sebrae/PR`. |
| `externalImage` | String | No; external Articles only | Local public path to an optional editorial image representing the external publication context. |

## Article Publication Modes

Article delivery is the only content-specific publishing distinction in the
canonical collection:

- `internal` (the default) publishes the full article inside The Coherence
  Project.
- `external` stores a metadata/reference entry in the collection while the
  full article remains at its original publication.

`externalUrl` is the reader destination for an external article. It is not a
canonical URL override: `canonicalUrl` continues to identify the URL search
engines should treat as canonical and is set independently when appropriate.

`externalImage` is optional and intended only for externally published Articles. It must reference a locally stored asset under `public/images/`; it does not alter `externalUrl` or `canonicalUrl`. When omitted, the Article remains valid with its existing text-only presentation.

## Validation Rules

- `publicationMode`, `externalUrl`, `externalPublication`, and `externalImage` apply only when
  `type` is `article`.
- An article with `publicationMode: external` must provide `externalUrl`.
- `externalPublication`, when provided, identifies the original publication.
- Internal articles use the normal content body and localized internal route.
- External articles are reference entries and do not require an internal
  public detail route.

---

# Astro Content Collection Contract

The project uses one logical Astro collection named `content` across the language and content-type directories defined above. Those physical directories organize source files; they do not define separate canonical collection names.

Public paths are independent of the collection structure and are defined exclusively in `11_URL_and_Routing_Strategy.md`.

Because canonical content remains in the repository-root `content/` directory, Astro loads it through the Content Layer API. In `src/content/config.ts`, the single collection and canonical schema are defined using Zod as follows:

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  publicationMode: z.enum(['internal', 'external']).optional(),
  externalUrl: z.string().url().optional(),
  externalPublication: z.string().optional(),
  externalImage: z.string().optional(),
}).superRefine((data, ctx) => {
  const hasArticlePublicationMetadata =
    data.publicationMode !== undefined ||
    data.externalUrl !== undefined ||
    data.externalPublication !== undefined ||
    data.externalImage !== undefined;

  if (data.type !== 'article' && hasArticlePublicationMetadata) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Article publication metadata applies only to type: article.',
    });
  }

  if (data.type === 'article' && data.publicationMode === 'external' && !data.externalUrl) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['externalUrl'],
      message: 'External articles require externalUrl.',
    });
  }
});

export const collections = {
  content: defineCollection({
    loader: glob({
      pattern: ['**/*.md', '!**/README.md'],
      base: './content',
    }),
    schema: contentSchema,
  }),
};
```

---

# Content Pairings (Multilingual Linkage)

When a document exists in both English and Portuguese, both files share the exact same `translationId`.

Example:

- `content/en/essays/organizational-coherence.md` → `translationId: "essay-01-oc"`
- `content/pt/essays/coerencia-organizacional.md` → `translationId: "essay-01-oc"`

The application uses `translationId` to allow readers to toggle seamlessly between English and Portuguese versions of the same content.
