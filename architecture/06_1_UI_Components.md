# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | UI Components |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-12 |

---

# UI Components

## Purpose

This document defines the reusable interface components of The Coherence Project.

Components exist to improve comprehension, navigation and content discovery.

They should not be created for visual decoration.

---

# Component Principles

## Purpose Before Appearance

Every component must solve a specific communication problem.

Before creating a component, define:

- What problem does it solve?
- Who benefits from it?
- How does it reduce friction?

---

## Consistency

The same component should behave the same way throughout the project.

Users should build expectations through repeated interactions.

---

## Content Awareness

Components should adapt to different types of knowledge.

The interface should understand the difference between:

- Essays
- Articles
- Journal entries
- Research notes
- Media content

---

# Core Components

---

# Global Navigation

## Purpose

Help users understand where they are and explore the knowledge structure.

## Requirements

The navigation should provide access to:

- Essays
- Articles
- The Coherence Journal
- Research
- Podcast
- About

## Principles

- Always visible when useful.
- Simple hierarchy.
- No unnecessary menu depth.
- Language selection should be obvious.

---

# Language Selector

## Purpose

Allow users to switch between Portuguese and English naturally.

## Requirements

- Available from every page.
- Preserve the current content context whenever possible.
- Never treat one language as secondary.

---

# Hero Section

## Purpose

Introduce the purpose of a page or content area.

## Requirements

The hero should communicate:

- What this is.
- Why it matters.
- What the user can do next.

## Principles

Avoid generic marketing language.

Prioritize clarity over persuasion.

---

# Content Header

## Purpose

Provide context before reading begins.

## Information

May include:

- Title.
- Subtitle.
- Author.
- Publication date.
- Reading time.
- Category.
- Language.

---

# Article Layout

## Purpose

Provide an optimal environment for long-form reading.

## Requirements

Prioritize:

- Readability.
- Clear hierarchy.
- Comfortable spacing.

Avoid:

- Distractions.
- Excessive side elements.
- Interruptions.

This layout applies to internally published articles. Article delivery mode
and external-publication metadata are defined in `10_Content_Model.md`.

---

# External Article Links

## Purpose

Let readers reach externally published articles directly while retaining The
Coherence Project as their point of discovery.

## Requirements

- External article links open the original publication in a new browser tab.
- Links use `rel="noopener noreferrer"`.
- The link clearly but unobtrusively indicates that the destination is
  external and identifies the original publication when available.
- No confirmation dialog, modal warning, or intermediary page is used.
- Internal articles use normal same-tab navigation.

Articles indexes may contain both internal and external items. Their
presentation must make the destination type understandable before selection,
without introducing separate indexes, filters, categories, or additional
taxonomy.

---

# Content Navigation

## Purpose

Help users explore related knowledge.

Examples:

- Related essays.
- Related articles.
- Previous journal entries.
- Supporting research.

The goal is exploration, not engagement optimization.

---

# Content Card

## Purpose

Present a preview of knowledge.

## Used For

- Essays.
- Articles.
- Journal entries.
- Research notes.

## Required Information

- Title.
- Short description.
- Content type.
- Date when relevant.

---

# Search

## Purpose

Help users find knowledge within the project.

## Principles

Search should prioritize meaning over keywords.

Future versions may include semantic search capabilities.

---

# Footer

## Purpose

Provide orientation and access to secondary information.

May include:

- About.
- Contact.
- Social links.
- Repository.
- Legal information.

The footer should remain simple.

---

# Feedback and Interaction

The project should avoid unnecessary interaction patterns.

Comments, reactions and engagement mechanisms should only exist if they improve knowledge exchange.

---

# Future Components

New components should be added only when a recurring communication need appears.

Potential future components:

- Timeline.
- Framework visualization.
- Research map.
- Concept graph.
- Audio player.
- Newsletter.
