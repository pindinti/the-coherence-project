# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Technical Architecture |
| Version | 0.2 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-03 |

---

# Technical Architecture

## Purpose

This document defines the technical architecture of The Coherence Project.

The architecture exists to transform structured knowledge into accessible digital experiences while maintaining simplicity, performance and long-term maintainability.

---

# Technical Principles

## Markdown as Source of Truth

Content should exist independently from the interface.

Markdown files represent the primary source of knowledge.

The website is a generated representation of this content.

---

## Separation of Concerns

The project separates:

- Content.
- Design.
- Application logic.
- Deployment.

Changes in one layer should not require unnecessary changes in others.

---

## Simplicity First

The technology stack should minimize maintenance requirements.

Additional complexity should only be introduced when it creates meaningful value.

---

## Open and Portable

The project should avoid unnecessary dependency on proprietary systems.

Content should remain accessible and portable.

---

# Architecture Overview

The system follows a content-driven architecture.

```text
Markdown Content

        ↓

Static Site Generator

        ↓

Web Application

        ↓

Cloud Hosting
```

---

# Repository Structure

The repository organizes the project by responsibility.

```text
the-coherence-project/

├── README.md
│
├── architecture/
│
├── content/
│   ├── en/
│   │   ├── essays/
│   │   ├── articles/
│   │   ├── journal/
│   │   ├── research/
│   │   └── pages/
│   │
│   └── pt/
│       ├── essays/
│       ├── articles/
│       ├── journal/
│       ├── research/
│       └── pages/
│
├── public/
│
└── src/
```

---

# Content Management

Content should be written and maintained as Markdown files.

Each content item contains structured YAML metadata defined by the project's canonical content schema (see `10_Content_Model.md` for full field definitions, types, and Astro Content Collections configuration).

Metadata enables:

- Navigation.
- Search.
- Filtering.
- Multilingual linking (`translationId`).
- Related content.

---

# Internationalization

The project supports Portuguese and English from the beginning.

Languages should share the same architecture but maintain independent content.

Translation should preserve meaning rather than structure.

---

# Frontend

The frontend should prioritize:

- Reading experience.
- Performance.
- Accessibility.
- Responsive behavior.

The chosen framework should support:

- Markdown rendering.
- Static generation.
- Internationalization.
- Component reuse.

---

# Content Rendering

Different content types should have dedicated layouts.

Examples:

```text
Essay Layout

Article Layout

Journal Layout

Research Note Layout
```

The content structure should influence the presentation.

---

# Deployment

The project should support automated deployment. Full workflow: see `08_Deployment.md`.

---

# Hosting Requirements

The hosting solution should provide:

- Free or low-cost operation.
- Automatic deployment.
- HTTPS.
- Global performance.
- Custom domain support.

(Platform selection and rationale: see `07_2_Framework_and_Platform_Decision.md`.)

---

# Future Technical Capabilities

Potential future additions:

- Newsletter integration.
- Search engine.
- Semantic search.
- Audio content.
- Analytics.
- Knowledge graph.

New capabilities should only be introduced when justified by user needs.

---

# Technical Decision Rule

Apply the **Decision Filter** defined in `01_Principles.md` before adding any technology.
