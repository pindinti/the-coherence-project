# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Deployment Workflow |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-02 |

---

# Deployment Workflow

## Purpose

This document defines how changes move from creation to publication.

The objective is to create a reliable, simple and repeatable workflow for maintaining The Coherence Project.

---

# Deployment Principles

## Version Everything

All meaningful changes should be tracked through version control.

The repository should preserve the evolution of:

- Content.
- Documentation.
- Design.
- Code.

---

## Publish Deliberately

Publication is a conscious step.

Drafts and published content should remain clearly separated.

---

## Automation Over Repetition

Whenever possible, repetitive technical processes should be automated.

The creator should focus on knowledge creation, not manual deployment tasks.

---

# Content Lifecycle

Content follows the following lifecycle:

```
Idea

↓

Research

↓

Draft

↓

Review

↓

Published

↓

Updated
```

---

# Repository Workflow

The expected workflow:

```
Create or edit content

↓

Save Markdown files

↓

Review changes locally

↓

Commit changes

↓

Push to GitHub

↓

Automatic deployment

↓

Public website updated
```

---

# Branch Strategy

## Main Branch

The main branch represents the published version of the project.

Changes should only reach the main branch after review.

---

## Development Branch

Optional branch for:

- Structural changes.
- Design experiments.
- New features.

Small content updates may be directly committed when appropriate.

---

# Antigravity Workflow

Antigravity is used as an AI-assisted development partner.

Its role includes:

- Generating implementation from documentation.
- Suggesting improvements.
- Creating components.
- Supporting debugging.

The project documentation remains the source of truth.

AI-generated output should always be reviewed before publication.

---

# Local Development

Before publishing significant changes:

Verify:

- Content rendering.
- Links.
- Language versions.
- Responsive behavior.
- Visual consistency.

---

# Release Process

A release should follow:

```
Final Review

↓

Version Update (when necessary)

↓

Commit

↓

Push

↓

Automatic Build

↓

Publication
```

---

# Content Updates

Content does not require code changes.

Adding a new:

- Essay.
- Article.
- Journal entry.
- Research note.

Should only require creating or updating Markdown files.

---

# Rollback Strategy

Because all changes are version-controlled, previous versions should remain recoverable through Git history.

---

# Maintenance Philosophy

Maintenance should be lightweight.

The system should support consistent publishing without becoming a technical burden.

The best workflow is the one that allows the creator to keep creating.