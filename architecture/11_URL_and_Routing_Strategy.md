# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | URL and Routing Strategy |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-03 |

---

# URL and Routing Strategy

## Purpose

This document defines the URL structure and routing strategy for The Coherence Project.

Its objective is to establish predictable, SEO-optimized, and clear URLs for content in both English and Portuguese, while providing a seamless navigation experience across languages.

---

# URL Principles

1. **Explicit Language Prefixes**: All content belongs to an explicit language namespace (`/en/` or `/pt/`).
2. **Neutral Root Experience**: The root domain (`/`) does not auto-detect or force automatic redirects. It presents a neutral entry point with language selection.
3. **Localized Slugs**: Slugs and category paths in URLs are localized per language for optimal SEO and reading context.
4. **Decoupled Physical Structure**: Internal content collection directories remain uniform in English (`content/en/essays/`, `content/pt/essays/`), while public URLs are translated.
5. **Relationship via `translationId`**: Equivalent articles across languages are linked by their internal `translationId`, not by matching URL paths.

---

# Root Strategy (`/`)

The root URL (`/`) serves as a neutral landing page.

- **No Automatic Geolocation or Browser Redirects**: Users are never forcibly redirected based on IP or browser language headers.
- **Purpose**: Present the mission of The Coherence Project and provide clear, primary navigation entries for English (`/en/`) and Portuguese (`/pt/`).
- **Persistence**: User language selection is preserved in navigation links throughout their session.

---

# Language Namespaces

All published pages exist within explicit language prefixes:

```text
https://thecoherenceproject.org/en/...
https://thecoherenceproject.org/pt/...
```

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
/pt/
/pt/ensaios/
/pt/ensaios/[slug]
/pt/artigos/
/pt/artigos/[slug]
/pt/diario/
/pt/diario/[slug]
/pt/pesquisa/
/pt/pesquisa/[slug]
/pt/sobre
```

---

# Internal Collection vs URL Mapping

While physical Markdown directories are kept uniform in English for simplicity in content collections:

| Collection Directory | Language | Public URL Path |
|----------------------|----------|-----------------|
| `content/en/essays/` | English | `/en/essays/[slug]` |
| `content/pt/essays/` | Portuguese | `/pt/ensaios/[slug]` |
| `content/en/articles/` | English | `/en/articles/[slug]` |
| `content/pt/articles/` | Portuguese | `/pt/artigos/[slug]` |
| `content/en/journal/` | English | `/en/journal/[slug]` |
| `content/pt/journal/` | Portuguese | `/pt/diario/[slug]` |
| `content/en/research/` | English | `/en/research/[slug]` |
| `content/pt/research/` | Portuguese | `/pt/pesquisa/[slug]` |
| `content/en/pages/` | English | `/en/[slug]` |
| `content/pt/pages/` | Portuguese | `/pt/[slug]` |

---

# Multilingual Switching via `translationId`

When a reader toggles the language switcher on any page:

1. **Exact Translation Available**: If the current item has a `translationId` (e.g. `essay-01-oc`) and a corresponding document with the same `translationId` exists in the target language, the user is navigated directly to the target document's localized URL.
2. **No Translation Available**: If no matching document exists in the target language, the language switcher navigates to the target language's category index (e.g. `/pt/ensaios/` or `/pt/`).

---

# SEO and Metadata Standards

To support internationalization best practices, every page renders appropriate metadata in `<head>`:

- `<link rel="alternate" hreflang="en" href="..." />`
- `<link rel="alternate" hreflang="pt" href="..." />`
- `<link rel="alternate" hreflang="x-default" href="https://thecoherenceproject.org/" />`
- `<link rel="canonical" href="..." />`
