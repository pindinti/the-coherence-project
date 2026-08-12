# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Information Architecture |
| Version | 0.2 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-03 |

---

# Information Architecture

## Purpose

This document defines how knowledge is organized within The Coherence Project. It is the **canonical source** for the project's content taxonomy — other documents should reference these domain names rather than redefining them.

The information architecture is designed to support long-form thinking, continuous research and multilingual publishing while maintaining a clear and intuitive navigation experience.

The repository is the project's source of truth.

The website is one of its publishing interfaces.

---

# Knowledge Structure

The project organizes knowledge into five primary domains.

## Essays

The primary source of the Organizational Coherence theory.

Essays present original concepts, principles and frameworks.

They are the foundation upon which every other type of content is built.

---

## Articles

Articles explain, contextualize and expand ideas introduced in the essays.

They serve as the primary entry point for new readers.

Articles may be published on external platforms and referenced within the project.

---

## The Coherence Journal

A public research journal documenting the practical application of Organizational Coherence.

Entries record observations, hypotheses, decisions, outcomes and lessons learned.

The journal serves as an evolving case study rather than a traditional blog.

---

## Research

Supporting material for ongoing investigation.

Examples include:

- Reading notes
- References
- Concept development
- Diagrams
- Framework evolution
- Open questions

Research documents may eventually become essays, articles or presentations.

---

## Podcast

Long-form conversations exploring ideas that benefit from verbal explanation.

Episodes complement written content rather than replace it.

---

# Site Sections

Not every page represents a knowledge domain. Some sections exist to provide orientation and context rather than content.

## About

Information about the project, its author and its purpose.

The focus is credibility and context rather than personal promotion.

About is a **navigational section**, not a knowledge domain — it should not appear in content-type taxonomies (see `03_Content_Strategy.md`).

---

# Content Relationships

Knowledge flows through the project in a deliberate progression.

Research

↓

Essays

↓

Articles

↓

Journal

↓

Book

The same idea may appear in multiple formats, but each format has a distinct purpose.

---

# Navigation Principles

Navigation should reflect the knowledge structure rather than chronological publication.

Users should always understand:

- where they are,
- what they are reading,
- and how it connects to the broader project.

---

# Multilingual Architecture

Portuguese and English are maintained as independent publishing layers.

Each language should provide a natural reading experience.

Translations may be adapted for clarity while preserving conceptual accuracy.

---

# Repository Structure

The repository organizes content by function rather than technology.

Documentation (`architecture/`), research notes, published content (`content/en/` and `content/pt/`) and implementation (`src/`) remain clearly separated.

Content subdirectories follow a uniform English structure (`essays`, `articles`, `journal`, `research`, `pages`) across both languages. Full content schema specification: see `10_Content_Model.md`.

---

# Future Expansion

The architecture should accommodate future initiatives without requiring structural changes.

Potential additions include:

- Courses
- Workshops
- Public talks
- Academic publications
- Case studies
- Interviews
- Community resources

The project should evolve by expanding knowledge, not by increasing complexity.
