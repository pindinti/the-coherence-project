# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Content Model |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-03 |

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
canonicalUrl: "https://thecoherenceproject.org/essays/nature-of-organizational-coherence"
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
| `canonicalUrl` | String | No | External URL if the content was originally or cross-published elsewhere. |

---

# Astro Content Collections Implementation

In Astro (`src/content/config.ts`), the canonical schema is defined using Zod as follows:

```typescript
import { defineCollection, z } from 'astro:content';

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

export const collections = {
  content: defineCollection({
    type: 'content',
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
