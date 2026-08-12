# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | URL and Routing Strategy |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-12 |

---

# URL and Routing Strategy

## Purpose

This document defines the URL structure and routing strategy for The Coherence Project.

Its objective is to establish predictable, SEO-optimized, and clear URLs for content in both English and Portuguese, while providing a seamless navigation experience across languages.

---

# URL Principles

1. **Portuguese Default Experience**: Portuguese is the default public language. The root domain (`/`) serves the Portuguese homepage and Portuguese content uses unprefixed localized paths.
2. **Explicit English Namespace**: English uses the explicit `/en/` namespace. No automatic language detection or redirects are used.
3. **Localized Slugs**: Slugs and category paths in URLs are localized per language for optimal SEO and reading context.
4. **Decoupled Physical Structure**: Physical content directories remain uniform in English (`content/en/essays/`, `content/pt/essays/`), while public URLs are translated. The logical collection structure is defined in `10_Content_Model.md`.
5. **Relationship via `translationId`**: Equivalent content across languages is linked by its internal `translationId`, not by matching URL paths.

---

# Portuguese Root Strategy (`/`)

The root URL (`/`) is the Portuguese homepage.

- **No Automatic Geolocation or Browser Redirects**: Users are never forcibly redirected based on IP or browser language headers.
- **Purpose**: Present Portuguese content and provide a clear language switch to English (`/en/`).
- **Language Switching**: The Portuguese homepage (`/`) and English homepage (`/en/`) are direct counterparts.

---

# Public Language Paths

Portuguese uses unprefixed localized paths. English uses the explicit `/en/` namespace:

```text
https://paulopereira.net.br/en/...
https://paulopereira.net.br/...
```

The production domain is defined in `07_2_Framework_and_Platform_Decision.md`.

---

# Localized URL Structure

Public URL paths are localized for each language to ensure natural reading experiences and optimal search engine indexing.

## English URL Pattern

```text
/en/
/en/essays/
/en/essays/[slug]
/en/articles/
/en/articles/[slug]
/en/journal/
/en/journal/[slug]
/en/research/
/en/research/[slug]
/en/about
```

## Portuguese URL Pattern

```text
/
/ensaios/
/ensaios/[slug]
/artigos/
/artigos/[slug]
/diario/
/diario/[slug]
/pesquisa/
/pesquisa/[slug]
/sobre
```

---

# Content Directory vs URL Mapping

Physical Markdown directories are kept uniform in English while public paths are localized. This table defines only directory-to-URL mapping; the content collection contract remains authoritative in `10_Content_Model.md`.

| Content Directory | Language | Public URL Path |
|----------------------|----------|-----------------|
| `content/en/essays/` | English | `/en/essays/[slug]` |
| `content/pt/essays/` | Portuguese | `/ensaios/[slug]` |
| `content/en/articles/` | English | `/en/articles/[slug]` |
| `content/pt/articles/` | Portuguese | `/artigos/[slug]` |
| `content/en/journal/` | English | `/en/journal/[slug]` |
| `content/pt/journal/` | Portuguese | `/diario/[slug]` |
| `content/en/research/` | English | `/en/research/[slug]` |
| `content/pt/research/` | Portuguese | `/pesquisa/[slug]` |
| `content/en/pages/` | English | `/en/[slug]` |
| `content/pt/pages/` | Portuguese | `/[slug]` |

## Article Delivery Routes

The Article publication-mode contract is defined in `10_Content_Model.md`.

- Both internal and external articles appear in their language's Articles
  index: `/artigos/` or `/en/articles/`.
- An internal article has the localized detail route defined above.
- An external article has no project-hosted detail route; its index link goes
  directly to `externalUrl`.

This keeps the index as the single discovery point without creating an
intermediary page for externally published work.

## Journal Routes

The Coherence Journal is project-hosted content. Published entries have the
localized index and detail routes defined above and are presented in
chronological order. Its editorial purpose is defined in
`03_Content_Strategy.md`.

---

# Multilingual Switching via `translationId`

When a reader toggles the language switcher on any page:

1. **Equivalent Page Available**: If the current item has a `translationId` (e.g. `essay-01-oc`) and a published corresponding document with the same `translationId` exists in the target language, the user is navigated directly to that document's localized URL.
2. **Homepage Switching**: The Portuguese homepage (`/`) switches directly to the English homepage (`/en/`), and vice versa.
3. **No Equivalent Page Available**: If no published matching document exists in the target language, the language switcher navigates to the target-language homepage: `/` for Portuguese or `/en/` for English. It must not navigate to an unrelated content type or page.

---

# SEO and Metadata Standards

To support internationalization best practices, every page renders appropriate metadata in `<head>`:

- `<link rel="alternate" hreflang="en" href="..." />`
- `<link rel="alternate" hreflang="pt" href="..." />`
- `<link rel="alternate" hreflang="x-default" href="https://paulopereira.net.br/" />`
- `<link rel="canonical" href="..." />`

`x-default` points to the Portuguese default homepage at the root domain.

Canonical URLs for project-hosted content use the localized paths defined in this document: an explicit `/en/` prefix for English and no language prefix for Portuguese. If a content item provides the optional `canonicalUrl` override defined in `10_Content_Model.md`, that absolute URL is used instead.
