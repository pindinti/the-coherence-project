# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Technical Stack |
| Version | 0.2 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-12 |

---

# Technical Stack

## Purpose

This document defines the technologies and platforms used to build and maintain The Coherence Project.

Technology choices should support the project's principles:

- Simplicity.
- Portability.
- Performance.
- Long-term maintainability.
- Low operational overhead.

---

# Source Control

## Platform

GitHub

## Purpose

GitHub is the source of truth for:

- Documentation.
- Content.
- Code.
- Version history.
- Project evolution.

## Principles

All meaningful changes should be versioned.

The repository should preserve the history of how the project evolves.

---

# Development Environment

## Primary Tool

Antigravity

## Purpose

Antigravity is used as an AI-assisted development environment.

Its role is to transform documented requirements into implementation while maintaining alignment with project principles.

## Development Approach

The development process follows:

Documentation

↓

AI-assisted implementation

↓

Review

↓

Version control

↓

Deployment

---

# Content Format

## Primary Format

Markdown

## Purpose

Markdown is the canonical format for:

- Essays.
- Articles.
- Journal entries.
- Research notes.
- Documentation.

Content should remain independent from the publishing layer.

---

# Website Generation

## Approach

Static site generation.

## Purpose

Generate a fast, secure and maintainable website from structured content.

## Requirements

The solution should support:

- Markdown rendering.
- Internationalization.
- Component-based layouts.
- SEO optimization.
- Fast loading.

---

# Frontend

## Technology

- Framework: Astro (Static Site Generation)
- Styling: Vanilla CSS + CSS Custom Properties (`:root` tokens) + Astro Scoped Styles

## Requirements

The frontend technology should prioritize:

- Reading experience.
- Accessibility.
- Performance (zero CSS framework overhead).
- Responsive design.

The styling architecture uses design tokens defined in CSS Custom Properties, keeping the project lightweight, portable, and free of heavy utility-first frameworks.

---

# Hosting

## Platform

GitHub Pages

Rationale and requirements: see `07_2_Framework_and_Platform_Decision.md`.

---

# Domain

The production domain decision is defined in `07_2_Framework_and_Platform_Decision.md`.

---

# Analytics

## Approach

Analytics should be privacy-conscious and focused on learning.

Metrics should support understanding user behavior rather than optimizing attention.

Potential metrics:

- Content access.
- Reading behavior.
- Geographic reach.
- Language distribution.

Avoid vanity metrics as primary indicators.

---

# Content Workflow

Full workflow (write → commit → build → deploy → publish): see `08_Deployment.md`.

---

# Future Integrations

Possible future integrations:

- Newsletter platform.
- Podcast hosting.
- Search capabilities.
- Knowledge graph.
- Content recommendation system.

Future integrations should be evaluated according to project principles.

---

# Technology Decision Rule

Apply the **Decision Filter** defined in `01_Principles.md` before adopting any new technology.
